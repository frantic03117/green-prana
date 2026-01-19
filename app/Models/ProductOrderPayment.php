<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOrderPayment extends Model
{

    use HasFactory;
    protected $fillable = [
        'seller_id',
        'warehouse_id',
        'payment_date',
        'payment_mode',
        'payment_receipt',
        'admin_status',
        'notes',
        'order_status'
    ];
    public function orderRequests()
    {
        return $this->hasMany(ProductOrderRequest::class, 'po_id');
    }
    public function seller()
    {
        return $this->belongsTo(Seller::class, 'seller_id', 'id');
    }
}