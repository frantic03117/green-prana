<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WareHouse extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'mobile',
        'address',
        'latitude',
        'longitude',
        'coverage_area',
        'supply_radius',
        'is_active',
    ];
    protected $guarded = ['coverage_area'];
    public function getCoverageAreaTextAttribute()
    {
        return $this->coverage_area;
    }
}