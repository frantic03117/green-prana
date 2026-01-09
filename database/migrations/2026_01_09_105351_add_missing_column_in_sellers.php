<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMissingColumnInSellers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->unsignedBigInteger('warehouse_id')->after('id')->nullable();

            // radius in KM
            $table->decimal('supply_radius', 8, 2)
                ->after('longitude')
                ->nullable();

            // coverage area polygon
            $table->polygon('coverage_area')->nullable(false);

            // optional FK
            $table->foreign('warehouse_id')
                ->references('id')
                ->on('ware_houses')
                ->nullOnDelete();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->dropForeign(['warehouse_id']);
            $table->dropColumn([
                'warehouse_id',
                'supply_radius',
                'coverage_area'
            ]);
        });
    }
}