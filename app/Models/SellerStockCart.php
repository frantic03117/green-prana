<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerStockCart extends Model
{
    use HasFactory;
    protected $fillable = [
        'seller_id',
        'warehouse_id',
        'po_id',
        'product_id',
        'variant_id',
        'price',
        'stock_quantity',
        'amount'
    ];
}