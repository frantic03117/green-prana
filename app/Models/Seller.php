<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Seller extends Model
{
    use HasFactory;
    protected $hidden = [];
    protected $appends = ['logo_url', 'national_identity_card_url', 'address_proof_url', 'categories_array', 'pickup_store_timings_array'];

    public static $statusRegistered = 0;
    public static $statusActive = 1;
    public static $statusRejected = 2;
    public static $statusDeactivated = 3;
    public static $statusRemoved = 7;

    public static $Registered = "Registered";
    public static $Active = "Active";
    public static $Rejected = "Rejected";
    public static $Deactivated = "Deactivated";
    public static $Removed = "Removed";


    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id', 'id')->select('id', 'name', 'address');
    }

    public function getLogoUrlAttribute()
    {
        if ($this->logo) {
            $logo_url = asset('storage/' . $this->logo);
            return $logo_url;
        }
        return $this->logo;
    }

    public function getNationalIdentityCardUrlAttribute()
    {
        if ($this->national_identity_card) {
            $national_identity_card_url = asset('storage/' . $this->national_identity_card);
            return $national_identity_card_url;
        }
        return $this->national_identity_card;
    }

    public function getAddressProofUrlAttribute()
    {
        if ($this->address_proof) {
            $address_proof_url = asset('storage/' . $this->address_proof);
            return $address_proof_url;
        }
        return $this->address_proof;
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id', 'id');
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'sellers', 'id', 'categories');
    }
    public function getCategoriesArrayAttribute()
    {
        $categoriesArray = is_string($this->categories) ? explode(',', $this->categories) : [];
        $categoriesCollection = collect($categoriesArray);
        $categoryNames = Category::whereIn('id', $categoriesCollection)->pluck('name')->toArray();
        $commaSeparatedNames = implode(', ', $categoryNames);
        return $commaSeparatedNames;
    }

    /**
     * Get pickup store timings as array
     */
    public function getPickupStoreTimingsArrayAttribute()
    {
        if ($this->pickup_store_timings) {
            return json_decode($this->pickup_store_timings, true);
        }
        return [];
    }

    /**
     * Set pickup store timings from array
     */
    public function setPickupStoreTimingsAttribute($value)
    {
        if (is_array($value)) {
            $this->attributes['pickup_store_timings'] = json_encode($value);
        } else {
            $this->attributes['pickup_store_timings'] = $value;
        }
    }
    public function setCoverageAreaAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['coverage_area'] = null;
            return;
        }

        // If already geometry (DB::raw)
        if ($value instanceof \Illuminate\Database\Query\Expression) {
            $this->attributes['coverage_area'] = $value;
            return;
        }

        // Decode JSON if string
        if (is_string($value)) {
            $value = json_decode($value, true);
        }

        if (!is_array($value)) {
            $this->attributes['coverage_area'] = null;
            return;
        }

        $coordinates = array_map(function ($point) {
            return $point['lng'] . ' ' . $point['lat'];
        }, $value);

        // Ensure polygon is closed
        if ($coordinates[0] !== end($coordinates)) {
            $coordinates[] = $coordinates[0];
        }

        $polygonWkt = 'POLYGON((' . implode(',', $coordinates) . '))';

        $this->attributes['coverage_area'] = DB::raw(
            "ST_GeomFromText('$polygonWkt', 4326)"
        );
    }
    public function getCoverageAreaAttribute($value)
    {
        if (!$value) return null;

        $result = DB::selectOne(
            "SELECT ST_AsText(coverage_area) AS wkt FROM sellers WHERE id = ?",
            [$this->id]
        );

        if (!$result || !$result->wkt) return null;

        // Extract coordinates from WKT
        preg_match('/\(\((.*)\)\)/', $result->wkt, $matches);
        $points = explode(',', $matches[1]);

        return array_map(function ($point) {
            [$lng, $lat] = explode(' ', trim($point));
            return [
                'lat' => (float) $lat,
                'lng' => (float) $lng
            ];
        }, $points);
    }
    public function stockLogs()
    {
        return $this->morphMany(StockLog::class, 'stockable');
    }
}