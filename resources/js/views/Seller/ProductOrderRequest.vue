<template>
    <section>
        <div class="container">
            <div class="row">

                <!-- PAGE HEADER -->
                <div class="col-md-12">
                    <div class="page-heading">
                        <h3>Product Order Request</h3>
                    </div>
                </div>

                <!-- PAYMENT DETAILS -->
                <div class="col-md-3">
                    <label>Amount Paid</label>
                    <input type="number" v-model="form.amount" class="form-control">
                </div>

                <div class="col-md-3">
                    <label>Payment Mode</label>
                    <input type="text" v-model="form.payment_mode" class="form-control">
                </div>

                <div class="col-md-3">
                    <label>Payment Date</label>
                    <input type="date" v-model="form.payment_date" class="form-control">
                </div>

                <div class="col-md-3">
                    <label>Payment Receipt</label>
                    <input type="file" @change="handleFile" class="form-control">
                </div>

                <!-- PRODUCT FILTER -->
                <div class="col-md-4 mt-3">
                    <label>Category</label>
                    <select v-model="selectedCategory" class="form-control" @change="onCategoryChange">
                        <option value="">All Categories</option>
                        <option v-for="cat in categoryOptions" :key="cat.id" :value="cat.id">
                            {{ cat.name }}
                        </option>
                    </select>
                </div>

                <div class="col-md-8 mt-3">
                    <label>Search</label>
                    <div class="input-group">
                        <input type="text" v-model="keyword" class="form-control" placeholder="Search product"
                            @keyup.enter="searchProducts">
                        <button class="btn btn-outline-secondary" @click="searchProducts">
                            🔍
                        </button>
                    </div>
                </div>

                <!-- PRODUCT TABLE -->
                <div class="col-md-12 mt-3">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Select</th>
                                <th>Product Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(variant, index) in variants" :key="variant.variant_id">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <input type="checkbox" :value="variant" v-model="selectedVariants">
                                </td>
                                <td>{{ variant.name }}</td>
                            </tr>

                            <tr v-if="variants.length === 0">
                                <td colspan="3" class="text-center text-muted">
                                    No products found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINATION -->
                <div class="col-md-12">
                    <nav v-if="pagination.last_page > 1">
                        <ul class="pagination justify-content-center">
                            <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
                                <button class="page-link" @click="changePage(pagination.current_page - 1)">
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
                                <button class="page-link" @click="changePage(pagination.current_page + 1)">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- SUBMIT -->
                <div class="col-md-12 mt-3">
                    <button class="btn btn-lg btn-primary" @click="generateRequest">
                        Generate Request
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Auth from "../../Auth.js";

export default {
    name: "ProductOrderRequest",

    data() {
        return {
            form: {
                payment_date: "",
                payment_mode: "",
                amount: "",
                receipt: null
            },
            keyword: "",
            selectedCategory: "",
            selectedVariants: [],
            variants: [],
            categoryOptions: [],
            seller_id: Auth.user.id,

            pagination: {
                current_page: 1,
                last_page: 0,
                per_page: 20,
                total: 0
            }
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
        this.loadCategories();
        this.viewProducts();
    },

    methods: {
        handleFile(e) {
            this.form.receipt = e.target.files[0];
        },

        loadCategories() {
            axios.get(this.$apiUrl + "/categories/active", {
                params: { seller_id: this.seller_id }
            }).then(res => {
                this.categoryOptions = res.data.data;
            });
        },

        onCategoryChange() {
            this.pagination.current_page = 1;
            this.viewProducts(1);
        },

        searchProducts() {
            this.pagination.current_page = 1;
            this.viewProducts(1);
        },

        changePage(page) {
            this.pagination.current_page = page;
            this.viewProducts(page);
        },

        viewProducts(page = 1) {
            axios.get(this.$apiUrl + "/products/variants", {
                params: {
                    seller_id: this.seller_id,
                    category_id: this.selectedCategory,
                    search: this.keyword,
                    page
                }
            }).then(res => {
                this.variants = res.data.data.data;
                this.pagination = {
                    current_page: res.data.data.current_page,
                    last_page: res.data.data.last_page,
                    per_page: res.data.data.per_page,
                    total: res.data.data.total
                };
            });
        },

        generateRequest() {
            if (!this.selectedVariants.length) {
                alert("Please select at least one product");
                return;
            }

            const formData = new FormData();
            formData.append("seller_id", this.seller_id);
            formData.append("payment_date", this.form.payment_date);
            formData.append("payment_mode", this.form.payment_mode);
            formData.append("amount", this.form.amount);

            if (this.form.receipt) {
                formData.append("payment_receipt", this.form.receipt);
            }

            this.selectedVariants.forEach((item, index) => {
                formData.append(`products[${index}][product_id]`, item.product_id);
                formData.append(`products[${index}][variant_id]`, item.variant_id);
                formData.append(`products[${index}][quantity]`, 1);
                formData.append(`products[${index}][price]`, item.price);
            });

            axios.post(this.$apiUrl + "/purchase-order", formData)
                .then(() => {
                    alert("Purchase order request created successfully");
                    this.resetForm();
                })
                .catch(() => {
                    alert("Failed to create request");
                });
        },

        resetForm() {
            this.form = {
                payment_date: "",
                payment_mode: "",
                amount: "",
                receipt: null
            };
            this.selectedVariants = [];
        }
    }
};
</script>
