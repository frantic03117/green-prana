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
                <div class="row">


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
                    <div class="col-span-7">
                        <div class="input-group">
                            <input type="text" name="keyword" id="keyword" v-model="keyword" class="form-control"
                                placeholder="Search product" @keyup.enter="searchProducts">

                            <button @click="searchProducts" class="btn p-2">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                    <div class="col-md-1">
                        <div class="w-full text-end">
                            <button class="btn btn-info">
                                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                            </button>
                        </div>
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
                                        <input type="number" class="form-control" v-model.number="variant.stock_added"
                                            placeholder="Add stock" />

                                        <button @click="saveStock(variant)" class="btn btn-primary">
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
                    <div class="w-100">
                        <nav v-if="pagination.last_page > 1">
                            <ul class="pagination justify-content-center">

                                <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
                                    <button class="page-link" :disabled="pagination.current_page === 1"
                                        @click="changePage(pagination.current_page - 1)">
                                        Previous
                                    </button>
                                </li>

                                <li class="page-item" v-for="page in pages" :key="page"
                                    :class="{ active: page === pagination.current_page }">
                                    <button class="page-link" @click="changePage(page)">
                                        {{ page }}
                                    </button>
                                </li>

                                <li class="page-item"
                                    :class="{ disabled: pagination.current_page === pagination.last_page }">
                                    <button class="page-link"
                                        :disabled="pagination.current_page === pagination.last_page"
                                        @click="changePage(pagination.current_page + 1)">
                                        Next
                                    </button>
                                </li>

                            </ul>
                        </nav>

                    </div>
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
            keyword: "",
            login_user: Auth.user,
            categoryOptions: [],
            warehouse_id: "",
            variants: [],
            selectedCategory: "",
            stock_added: 0,
            pagination: {
                current_page: 1,
                last_page: 0,   // 👈 IMPORTANT
                per_page: 20,
                total: 0
            },
        };
    },
    computed: {
        pages() {
            return Array.from(
                { length: this.pagination.last_page },
                (_, i) => i + 1
            );
        }
    },
    created() {
        this.warehouse_id = this.$route.params.id;
        this.loadCategories();
    },
    methods: {
        searchProducts() {
            this.viewProducts(1);
        },
        loadCategories() {
            axios
                .get(this.$apiUrl + "/categories/active", {
                    params: { warehouse_id: this.warehouse_id },
                })
                .then((res) => {
                    this.categoryOptions = res.data.data;
                })
                .catch(() => { });
        },
        viewProducts(page = 1) {
            axios.get(this.$apiUrl + "/products/variants", {
                params: {
                    category_id: this.selectedCategory,
                    search: this.keyword,
                    page: page
                },
            }).then((res) => {
                this.variants = res.data.data.data;
                this.pagination.current_page = res.data.data.current_page;
                this.pagination.last_page = res.data.data.last_page;
                this.pagination.per_page = res.data.data.per_page;
                this.pagination.total = res.data.data.total;
            }).catch(() => { });
        },
        saveStock(variant) {
            // ✅ correct validation
            if (!variant.stock_added || variant.stock_added < 1) {
                this.$swal.fire("Error", "Stock should be greater than 0", "error");
                return;
            }

            axios.post(this.$apiUrl + "/products/add-stock", {
                date: new Date().toISOString().slice(0, 10),
                type: 'add',
                product_id: variant.product_id,
                variant_id: variant.id,
                stock_added: variant.stock_added, // ✅ FIX
                stockable_type: 'App\\Models\\Warehouse',
                stockable_id: this.warehouse_id,
                base_unit_price: variant.discounted_price
            })
                .then(response => {
                    if (response.data.status) {
                        // ✅ update UI stock
                        variant.stock += variant.stock_added;

                        // ✅ reset input
                        variant.stock_added = 0;

                        this.$swal.fire("Success", "Stock added successfully", "success");
                    }
                })
                .catch(error => {
                    console.error(error.response.data);
                });
        }

    },
};
</script>
