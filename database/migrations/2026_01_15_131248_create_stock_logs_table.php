<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_logs', function (Blueprint $table) {
            $table->id();

            // Date of stock entry
            $table->date('date')->nullable();
            $table->enum('type', ['in', 'out', 'transfer'])->default('in');
            $table->string('reference_no')->nullable();
            // Polymorphic relation (Warehouse or Seller)
            $table->unsignedBigInteger('stockable_id');
            $table->string('stockable_type');

            // Product & Variant
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('variant_id')->nullable();

            // Stock info
            $table->integer('stock_added'); // quantity added
            $table->decimal('base_unit_price', 10, 2);
            $table->decimal('amount', 12, 2); // stock_added * base_unit_price
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->timestamps();

            // Indexes for performance
            $table->index(['stockable_id', 'stockable_type']);
            $table->index('product_id');
            $table->index('variant_id');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_logs');
    }
}