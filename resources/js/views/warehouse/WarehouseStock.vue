<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-5">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-12 col-md-6 order-md-1 order-last">
                                <h3> Manage Warehouse Stock</h3>
                            </div>
                            <div class="col-12 col-md-6 order-md-2 order-first">
                                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/dashboard">{{ __('dashboard')
                                                }}</router-link>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Manage Warehouse Stock
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="w-full">
                        <div class="input-group">
                            <select name="selected_category" id="selected_category" v-model="selectedCategory"
                                class="form-control">
                                <option value="">Select Category</option>
                                <option v-for="category in categoryOptions" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                            <button @click="viewProducts" class="btn btn-primary">
                                View Products
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="w-full text-end">
                        <button class="btn btn-info">
                            <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="col-span-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>

                                <th>Stock Quantity</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(variant, index) in variants" :key="variant.product_variant_id">
                                <td>{{ index + 1 }}</td>

                                <td>{{ variant.name }}</td>

                                <td>
                                    {{ variant.stock }}
                                </td>

                                <td>
                                    <div class="input-group">
                                        <input type="number" class="form-control" v-model.number="variant.add_stock"
                                            placeholder="Add stock" />

                                        <button class="btn btn-primary">
                                            Update
                                        </button>

                                        <button class="btn btn-success">
                                            <i class="fa fa-file-excel-o"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
import Auth from "../../Auth.js";
export default {
    name: "WarehouseStock",
    data() {
        return {
            login_user: Auth.user,
            categoryOptions: [],
            warehouse_id: null,
            variants: [],
            selectedCategory: "",
        };
    },
    created() {
        this.loadCategories();
    },
    methods: {
        loadCategories() {
            axios
                .get(this.$apiUrl + "/categories/active", {
                    params: { seller_id: this.seller_id },
                })
                .then((res) => {
                    this.categoryOptions = res.data.data;
                })
                .catch(() => { });
        },
        viewProducts() {
            axios.get(this.$apiUrl + "/products/variants", {
                params: {
                    category_id: this.selectedCategory,
                    warehouse_id: this.warehouse_id,
                },
            }).then((res) => {
                this.variants = res.data.data.data; // 👈 IMPORTANT
            }).catch(() => { });
        },
    },
};
</script>
