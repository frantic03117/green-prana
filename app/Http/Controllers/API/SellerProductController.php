<?php

namespace App\Http\Controllers;

use App\Models\SellerProduct;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SellerProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(['message' => 'Store method called'], 200);
        // $validation = Validator::make($request->all(), [
        //     'seller_id' => 'required',
        //     'product_id' => 'required',
        //     'price' => 'required',
        //     // 'stock_quantity' => 'required|integer|min:0',
        //     // 'variant_id' => 'nullable|exists:product_variants,id',
        // ]);
        // if ($validation->fails()) {
        //     return response()->json(['errors' => $validation->errors()], 422);
        // }
        // $sellerProduct = SellerProduct::create([
        //     'seller_id' => $request->input('seller_id'),
        //     'product_id' => $request->input('product_id'),
        //     'price' => $request->input('price'),
        //     'stock_quantity' => $request->input('stock_quantity') ?? 1,
        //     'variant_id' => $request->input('variant_id') ?? 0,
        //     'status' => $request->input('status', 'active'),
        // ]);
        // return response()->json(['message' => 'Product created successfully', 'data' => $sellerProduct], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SellerProduct  $sellerProduct
     * @return \Illuminate\Http\Response
     */
    public function show(SellerProduct $sellerProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SellerProduct  $sellerProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(SellerProduct $sellerProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SellerProduct  $sellerProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SellerProduct $sellerProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SellerProduct  $sellerProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(SellerProduct $sellerProduct)
    {
        //
    }
}
