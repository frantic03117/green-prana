<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOrderRequest extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'variant_id', 'po_id'];
    public function payment()
    {
        return $this->belongsTo(ProductOrderPayment::class, 'po_id');
    }
    public function product()
    {
        return $this->hasOne(Product::class, 'product_id', 'id');
    }
    public function variant()
    {
        return $this->hasOne(ProductVariant::class, 'variant_id', 'id');
    }
}
