<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'seller_id',
        'product_id',
        'variant_id',
        'price',
        'status',
        'stock_quantity',

    ];
    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
     public function variant()
    {
        return $this->belongsTo(ProductVariant::class, 'variant_id');
    }
}
