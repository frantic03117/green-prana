<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWareHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ware_houses', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('mobile')->nullable();
            $table->text('address')->nullable();

            // Exact warehouse location
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            // Coverage area (delivery zone)
            $table->polygon('coverage_area')->nullable();

            // Optional: radius-based supply (km)
            $table->decimal('supply_radius', 8, 2)->nullable();
            $table->enum('is_active', ['inactive', 'active'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ware_houses');
    }
}
