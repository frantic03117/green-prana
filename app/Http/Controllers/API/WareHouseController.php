<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Models\WareHouse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class WareHouseController extends Controller
{
    private function polygonToLatLng($polygonText)
    {
        if (! $polygonText) {
            return [];
        }

        $polygonText = str_replace(['POLYGON((', '))'], '', $polygonText);
        $points = explode(',', $polygonText);

        $coords = collect($points)->map(function ($point) {
            [$lng, $lat] = explode(' ', trim($point));
            return [
                'lat' => (float) $lat,
                'lng' => (float) $lng,
            ];
        })->values();

        // Remove duplicate last point
        if ($coords->count() > 1 && $coords->first() == $coords->last()) {
            $coords->pop();
        }

        return $coords;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $warehouses = DB::table('ware_houses')
            ->select(
                'id',
                'name',
                'email',
                'mobile',
                'address',
                'latitude',
                'longitude',
                'supply_radius',
                'is_active',
                DB::raw('ST_AsText(coverage_area) as coverage_area')
            )
            ->where('is_active', 'active')
            ->get();
        $warehouses = $warehouses->map(function ($warehouse) {
            $warehouse->coverage_area = $this->polygonToLatLng(
                $warehouse->coverage_area
            );
            return $warehouse;
        });

        return response()->json([
            'status' => true,
            'data'   => $warehouses
        ]);
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
        $validator = Validator::make($request->all(), [
            'name'            => 'required|string|max:255',
            'email'           => 'nullable|email|max:255',
            'mobile'          => 'nullable|string|max:20',
            'address'         => 'nullable|string',

            'latitude'        => 'required|numeric|between:-90,90',
            'longitude'       => 'required|numeric|between:-180,180',

            'coverage_area'           => 'required|array|min:3',
            'coverage_area.*.lat'     => 'required|numeric|between:-90,90',
            'coverage_area.*.lng'     => 'required|numeric|between:-180,180',

            'supply_radius'   => 'nullable|numeric|min:0',
            'is_active'       => 'nullable|in:inactive,active',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => false,
                'message' => $validator->errors()->first()
            ], 422);
        }

        DB::beginTransaction();
        try {

            /**
             * Convert coordinates to POLYGON
             * MySQL requires: lng lat order
             */
            $points = collect($request->coverage_area)
                ->map(fn($p) => "{$p['lng']} {$p['lat']}")
                ->implode(',');

            // Close polygon
            $points .= ',' . explode(',', $points)[0];

            /**
             * Insert using raw spatial function
             */
            DB::statement("
            INSERT INTO ware_houses
            (name, email, mobile, address, password, latitude, longitude, coverage_area, supply_radius, is_active, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ST_GeomFromText('POLYGON(($points))'), ?, ?, NOW(), NOW())
        ", [
                $request->name,
                $request->email,
                $request->mobile,
                $request->address,
                $request->password,
                $request->latitude,
                $request->longitude,
                $request->supply_radius,
                $request->is_active ?? 'active',
            ]);

            DB::commit();

            return response()->json([
                'status'  => true,
                'message' => 'Warehouse created successfully'
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status'  => false,
                'message' => 'Failed to create warehouse',
                'error'   => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WareHouse  $wareHouse
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $warehouses = DB::table('ware_houses')
            ->select(
                'id',
                'name',
                'email',
                'mobile',
                'address',
                'latitude',
                'password',
                'supply_radius',
                'longitude',
                'supply_radius',
                'is_active',
                DB::raw('ST_AsText(coverage_area) as coverage_area')
            )->where('id', $id)
            ->where('is_active', 'active')
            ->get();
        $warehouses = $warehouses->map(function ($warehouse) {
            $warehouse->coverage_area = $this->polygonToLatLng(
                $warehouse->coverage_area
            );
            return $warehouse;
        });

        return response()->json([
            'status' => true,
            'data'   => $warehouses[0]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WareHouse  $wareHouse
     * @return \Illuminate\Http\Response
     */
    public function edit(WareHouse $wareHouse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WareHouse  $wareHouse
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        $warehouse = Warehouse::find($id);

        if (! $warehouse) {
            return response()->json([
                'status'  => false,
                'message' => 'Warehouse not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name'            => 'sometimes|required|string|max:255',
            'email'           => 'sometimes|nullable|email|max:255',
            'mobile'          => 'sometimes|nullable|string|max:20',
            'address'         => 'sometimes|nullable|string',

            'latitude'        => 'sometimes|required|numeric|between:-90,90',
            'longitude'       => 'sometimes|required|numeric|between:-180,180',

            'coverage_area'           => 'sometimes|required|array|min:3',
            'coverage_area.*.lat'     => 'required_with:coverage_area|numeric|between:-90,90',
            'coverage_area.*.lng'     => 'required_with:coverage_area|numeric|between:-180,180',

            'supply_radius'   => 'sometimes|nullable|numeric|min:0',
            'is_active'       => 'sometimes|in:inactive,active',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => false,
                'message' => $validator->errors()->first()
            ], 422);
        }

        DB::beginTransaction();

        try {

            /**
             * Update normal fields via Eloquent
             */
            $warehouse->update(
                $request->only([
                    'name',
                    'email',
                    'mobile',
                    'address',
                    'password',
                    'latitude',
                    'longitude',
                    'supply_radius',
                    'is_active',
                ])
            );

            /**
             * Update polygon ONLY if provided
             */
            if ($request->filled('coverage_area')) {

                $points = collect($request->coverage_area)
                    ->map(fn($p) => "{$p['lng']} {$p['lat']}")
                    ->implode(',');

                // Close polygon
                $points .= ',' . explode(',', $points)[0];

                DB::statement("
                UPDATE ware_houses
                SET coverage_area = ST_GeomFromText('POLYGON(($points))')
                WHERE id = ?
            ", [$warehouse->id]);
            }

            DB::commit();

            return response()->json([
                'status'  => true,
                'message' => 'Warehouse updated successfully'
            ]);
        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'status'  => false,
                'message' => 'Failed to update warehouse',
                'error'   => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WareHouse  $wareHouse
     * @return \Illuminate\Http\Response
     */
    public function destroy(WareHouse $wareHouse)
    {
        //
    }
}