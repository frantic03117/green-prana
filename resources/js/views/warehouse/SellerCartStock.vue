<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="w-100">
                                <h4>Seller Name : Sandeep Bhiya</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="card card-body">
                        <div class="w-100">
                            <p>Payment Date : 2025-01-01</p>
                            <p>Payment Amount : 20000</p>
                        </div>
                    </div>
                </div>

                <!-- PRODUCTS SECTION -->
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">

                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Search product"
                                        v-model="keyword" @keyup.enter="searchProducts" />
                                </div>

                                <div class="col-md-4">
                                    <select class="form-control" v-model="selectedCategory" @change="viewProducts(1)">
                                        <option value="">All Categories</option>
                                        <option v-for="cat in categoryOptions" :key="cat.id" :value="cat.id">
                                            {{ cat.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th width="160">Qty</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="item in variants" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>₹ {{ item.discounted_price }}</td>
                                        <td>
                                            <input type="number" class="form-control" min="1" :max="item.stock"
                                                v-model.number="item.qty" />
                                        </td>

                                        <td>
                                            <button class="btn btn-sm btn-success" @click="addToCart(item)">
                                                Add to Cart
                                            </button>
                                        </td>
                                    </tr>

                                    <tr v-if="variants.length === 0">
                                        <td colspan="5" class="text-center">
                                            No products found
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

                <!-- CART SECTION -->
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <strong>Cart Items</strong>
                        </div>

                        <div class="card-body">
                            <ul class="list-group mb-3" v-if="cart.length">
                                <li class="list-group-item d-flex justify-content-between align-items-center"
                                    v-for="(item, index) in cart" :key="item.id">
                                    <div>
                                        <strong>{{ item.name }}</strong>
                                        <br />
                                        Qty: {{ item.qty }}
                                    </div>

                                    <div>
                                        ₹ {{ item.total }}
                                        <button class="btn btn-sm btn-danger ms-2" @click="removeFromCart(index)">
                                            ×
                                        </button>
                                    </div>
                                </li>
                            </ul>

                            <p v-else class="text-muted">
                                Cart is empty
                            </p>

                            <hr />

                            <p><strong>Total Items:</strong> {{ cart.length }}</p>
                            <p><strong>Total Quantity:</strong> {{ totalQty }}</p>
                            <p><strong>Total Amount:</strong> ₹ {{ totalAmount }}</p>

                            <button class="btn btn-primary w-100" :disabled="!cart.length">
                                Proceed
                            </button>
                        </div>
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
            cart: [],
            pagination: {
                current_page: 1,
                last_page: 0,
                per_page: 20,
                total: 0
            }
        };
    },

    computed: {
        totalQty() {
            return this.cart.reduce((sum, item) => sum + item.qty, 0);
        },
        totalAmount() {
            return this.cart.reduce((sum, item) => sum + item.total, 0);
        }
    },

    created() {
        this.warehouse_id = this.$route.params.id;
        this.loadCategories();
        this.viewProducts();
    },

    methods: {
        searchProducts() {
            this.viewProducts(1);
        },

        loadCategories() {
            axios.get(this.$apiUrl + "/categories/active", {
                params: { warehouse_id: this.warehouse_id }
            }).then(res => {
                this.categoryOptions = res.data.data;
            });
        },

        viewProducts(page = 1) {
            axios.get(this.$apiUrl + "/products/variants", {
                params: {
                    warehouse_id: this.warehouse_id,
                    category_id: this.selectedCategory,
                    search: this.keyword,
                    page
                }
            }).then(res => {
                this.variants = res.data.data.data.map(p => ({
                    ...p,
                    qty: 1
                }));
            });
        },

        addToCart(product) {
            if (!product.qty || product.qty > product.stock) {
                alert("Invalid quantity");
                return;
            }

            const existing = this.cart.find(i => i.id === product.id);

            if (existing) {
                existing.qty += product.qty;
                existing.total = existing.qty * existing.price;
            } else {
                this.cart.push({
                    id: product.id,
                    product_name: product.product_name,
                    price: product.price,
                    qty: product.qty,
                    total: product.qty * product.price
                });
            }

            product.qty = 1;
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        }
    }
};
</script>
