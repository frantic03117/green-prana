<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{

    use HasFactory;

    protected $fillable = [
        'id',
        'product_id',
        'sku',
        'variant_title',
        'pack',
        'specification',
        'form',
        'processing_method',
        'flavor',
        'dietary_type',
        'type',
        'measurement',
        'price',
        'discounted_price',
        'stock',
        'stock_unit_id',
        'status',
    ];
    public $timestamps = false;
    protected $hidden = ['deleted_at'];

    public static $statusAvailable = 1;
    public static $statusSoldOut = 0;
    protected $appends = [

        'final_price_with_tax',
    ];

    public function images()
    {

        return $this->hasMany(ProductImages::class, 'product_variant_id', 'id');
    }

    public function unit()
    {

        return $this->hasOne(Unit::class, 'id', 'stock_unit_id');
    }
    public function sellers()
    {
        return $this->belongsToMany(
            Seller::class,
            'seller_products',
            'variant_id',
            'seller_id'
        );
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function getFinalPriceWithTaxAttribute()
    {
        $taxPercentage = $this->product?->tax?->percentage ?? 0;

        $basePrice = ($this->discounted_price !== null && $this->discounted_price > 0)
            ? $this->discounted_price
            : $this->price;

        if (!$basePrice) {
            return 0;
        }

        $taxAmount = ($basePrice * $taxPercentage) / 100;

        return round($basePrice + $taxAmount, 2);
    }
}
