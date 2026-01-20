<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductOrderPayment;
use App\Models\ProductOrderRequest;
use App\Models\ProductVariant;
use App\Models\Seller;
use App\Models\SellerStockCart;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PurchaseOrderRequestApiController extends Controller
{
    public function make_purchase_order_request_by_seller(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'seller_id' => 'required|exists:sellers,id',
            'payment_date' => 'required|date',
            'payment_mode' => 'required|string',
            'notes' => 'nullable|string',
            'products' => 'required|array|min:1',
            // 'products.*.product_id' => 'required|exists:products,id',
            // 'products.*.variant_id' => 'required|exists:product_variants,id',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }
        DB::beginTransaction();
        try {
            $findSeller = Seller::find($request->seller_id);
            // 1️⃣ Create payment / purchase order
            $receiptPath = null;

            if ($request->hasFile('payment_receipt')) {
                $receiptPath = $request->file('payment_receipt')
                    ->store('receipts', 'public');
            }
            $payment = ProductOrderPayment::create([
                'seller_id' => $request->seller_id,
                'warehouse_id' => $findSeller->warehouse_id,
                'payment_date' => $request->payment_date,
                'payment_mode' => $request->payment_mode,
                'payment_receipt' =>   $receiptPath,
                'notes' => $request->notes,
                'admin_status' => 'pending',
                'order_status' => 'requested'
            ]);

            // 2️⃣ Create product order requests
            foreach ($request->products as $item) {
                ProductOrderRequest::create([
                    'po_id' => $payment->id,
                    'product_id' => $item['product_id'],
                    'variant_id' => $item['variant_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price']
                ]);
            }

            DB::commit();

            return response()->json([
                'status' => true,
                'message' => 'Purchase order request created successfully',
                'data' => $payment->load('orderRequests')
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function list_po_requests(Request $request)
    {
        $items = ProductOrderPayment::with([
            'orderRequests',
            'seller:id,name'
        ]);

        /* 🔹 Warehouse Filter */
        if ($request->filled('warehouse_id')) {
            $items->where('warehouse_id', $request->warehouse_id);
        }

        /* 🔹 Seller Filter */
        if ($request->filled('seller_id')) {
            $items->where('seller_id', $request->seller_id);
        }

        /* 🔹 Admin Status Filter (pending, approved, rejected) */
        if ($request->filled('admin_status')) {
            $items->where('admin_status', $request->admin_status);
        }

        /* 🔹 Order Status Filter (requested, processing, completed) */
        if ($request->filled('order_status')) {
            $items->where('order_status', $request->order_status);
        }

        /* 🔹 Time Period Filter */
        if ($request->filled('from_date') && $request->filled('to_date')) {
            $items->whereBetween('payment_date', [
                Carbon::parse($request->from_date)->startOfDay(),
                Carbon::parse($request->to_date)->endOfDay()
            ]);
        }

        /* 🔹 Sorting (latest first) */
        $items->orderBy('id', 'desc');

        /* 🔹 Pagination */
        $perPage = $request->get('per_page', 20);
        $result = $items->paginate($perPage);

        return response()->json([
            'status' => true,
            'data' => $result
        ]);
    }
    public function update_po_request(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'admin_status' => 'required|in:approved,rejected,pending',
            'order_status' => 'required|in:requested,processing,completed,cancelled',
            'admin_notes'  => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $po = ProductOrderPayment::with('orderRequests')->find($id);

        if (!$po) {
            return response()->json([
                'status' => false,
                'message' => 'Purchase order not found'
            ], 404);
        }

        DB::beginTransaction();

        try {
            // 🔹 Update PO status
            $po->update([
                'admin_status' => $request->admin_status,
                'order_status' => $request->order_status,
                'notes' => $request->admin_notes
            ]);



            DB::commit();

            return response()->json([
                'status' => true,
                'message' => 'Purchase order updated successfully',
                'data' => $po->fresh('orderRequests')
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'Update failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function add_to_cart(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'seller_id' => 'required|exists:sellers,id',
            'product_id' => 'required|exists:products,id',
            'variant_id' => 'required|exists:product_variants,id',
            'po_id' => 'required|exists:product_order_payments,id',
            'stock_quantity' => 'required|integer|min:1'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        /* 🔹 Seller & Warehouse */
        $seller = Seller::find($request->seller_id);
        $warehouseId = $seller->warehouse_id;

        /* 🔹 Check PO approval */
        $po = ProductOrderPayment::where('id', $request->po_id)
            ->where('admin_status', 'approved')
            ->first();

        if (!$po) {
            return response()->json([
                'status' => false,
                'message' => 'Purchase order not approved by admin'
            ], 403);
        }

        /* 🔹 Validate variant belongs to product */
        $variant = ProductVariant::where('id', $request->variant_id)
            ->where('product_id', $request->product_id)
            ->first();

        if (!$variant) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid product variant'
            ], 422);
        }

        $price = $variant->discounted_price;
        $amount = $price * $request->stock_quantity;

        /* 🔹 Check if already in cart */
        $cartItem = SellerStockCart::where([
            'seller_id' => $request->seller_id,
            'variant_id' => $request->variant_id,
            'po_id' => $request->po_id
        ])->first();

        if ($cartItem) {
            $cartItem->update([
                'stock_quantity' => $cartItem->stock_quantity + $request->stock_quantity,
                'amount' => ($cartItem->stock_quantity + $request->stock_quantity) * $price
            ]);
        } else {
            SellerStockCart::create([
                'seller_id' => $request->seller_id,
                'warehouse_id' => $warehouseId,
                'po_id' => $request->po_id,
                'product_id' => $request->product_id,
                'variant_id' => $request->variant_id,
                'price' => $price,
                'stock_quantity' => $request->stock_quantity,
                'amount' => $amount
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'Product added to cart successfully'
        ]);
    }
}
