<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'type',
        'reference_no',
        'stockable_id',
        'stockable_type',
        'product_id',
        'variant_id',
        'stock_added',
        'base_unit_price',
        'amount',
        'created_by'
    ];
    public function stockable()
    {
        return $this->morphTo();
    }
}
