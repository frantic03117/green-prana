<template>
    <div class="page-heading">
        <h3>Seller Products</h3>

        <!-- CATEGORY & PRODUCT FILTER -->
        <div class="row mt-4">
            <!-- Category -->
            <div class="col-md-4">
                <label>Category</label>
                <select class="form-select" v-model="categoryId" @change="loadProducts">
                    <option value="">--Select Category--</option>
                    <span v-html="categoryOptions"></span>
                </select>
            </div>


        </div>
        <div class="row mt-4" v-if="products.length">
            <div class="col-12">
                <h5>Products Available: {{ products.length }}</h5>
            </div>
            <div class="col-md-12">
                <div class="row" v-for="prod in products" :key="prod.product_id">
                    <div class="col-md-6">
                        <strong>{{ prod.name }}</strong>
                    </div>
                    <div class="col-md-4">
                        <label for="">Enter Price</label>
                        <input type="number" v-model="prod.price" class="form-control">
                    </div>
                    <div class="col-md-2">
                        <button @click="savePrice(prod)" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4" v-if="assignedProducts.length">
            <div class="col-12">
                <h5>Products Assigned: {{ assignedProducts.length }}</h5>
            </div>

            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(prod, index) in assignedProducts" :key="prod.id">
                                <td>{{ index + 1 }}</td>



                                <td>{{ prod.product }}</td>

                                <td>₹{{ prod.price }}</td>



                                <td>

                                    <div class="input-group">
                                        <input type="text" name="stock" v-model="prod.stock" class="form-control">
                                        <button :disabled="prod.updating" @click="updateStock(prod)"
                                            class="btn btn-outline-primary">
                                            {{ prod.updating ? 'Updating...' : 'Update' }}
                                        </button>
                                    </div>
                                </td>


                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import Auth from "../../Auth.js";

export default {
    name: "SellerProductList",
    data() {
        return {

            login_user: Auth.user,
            seller_id: null,
            categoryOptions: "<option value=''>--Select Category--</option>",
            products: [],
            variants: [],
            categoryId: "",
            selectedProductId: "",
            assignedProducts: [],
            isLoading: false,
        };
    },
    computed: {
        selectedProductName() {
            const product = this.products.find((p) => p.product_id === this.selectedProductId);
            return product ? product.name : "";
        },
    },
    created() {
        // Get seller ID from route params
        this.seller_id = this.$route.params.sellerId;
        if (this.seller_id) {
            this.loadCategories();
            this.loadAssignedProducts();
        }
    },
    methods: {
        savePrice(product) {
            // alert("Saving price for: " + product.name + " Price: " + product.price);
            console.log("Saving price for:", product.name);
            console.log("Price:", product.price);
            this.isLoading = true;
            axios.post(this.$apiUrl + "/products/seller_assigned_variants", {
                seller_id: this.seller_id,
                product_id: product.product_id,
                variant_id: product.product_variant_id,
                price: product.price,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    this.loadProducts();
                    this.loadAssignedProducts();
                    this.isLoading = false;
                    this.$swal.fire("Success", res.data.message, "success");
                })
                .catch((error) => {
                    this.isLoading = false;
                    console.error("Error saving price:", error);
                    this.$swal.fire("Error", "Something went wrong", "error");

                })
        },
        // Load categories assigned to seller
        loadCategories() {
            axios
                .get(this.$apiUrl + "/categories/seller_categories", {
                    params: { seller_id: this.seller_id },
                })
                .then((res) => {
                    this.categoryOptions = res.data; // API returns <option> HTML
                })
                .catch(() => { });
        },

        // Load products by seller + category
        loadProducts() {
            this.selectedProductId = "";
            this.variants = [];
            if (!this.categoryId) return;

            axios
                .get(this.$apiUrl + "/products/variants", {
                    params: { category_id: this.categoryId, seller_id: this.seller_id, assigned: false },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.data.data.length == 0) {
                        this.$swal.fire("Error", "No product found", "error");
                    }
                    this.products = res.data.data.data;
                })
                .catch(() => { });
        },
        loadAssignedProducts() {
            if (!this.seller_id) return;

            axios.get(this.$apiUrl + "/products/seller_assigned_variants", {
                params: { seller_id: this.seller_id, assigned: true },
            })
                .then((res) => {
                    this.assignedProducts = res.data.data || [];
                })
                .catch(() => { });
        },

        // Load variants for selected product
        loadVariants() {
            this.variants = [];
            if (!this.selectedProductId) return;

            const productVariants = this.products.filter(
                (p) => p.product_id === this.selectedProductId
            );

            this.variants = productVariants.map((v) => ({
                id: v.product_variant_id,
                name: v.measurement + (v.short_code ? " " + v.short_code : ""),
                price: v.price,
                stock: v.stock,
            }));
        },

        // Save all variants for this seller
        saveVariants() {
            const payload = {
                seller_id: this.seller_id,
                category_id: this.categoryId,
                product_id: this.selectedProductId,
                variants: this.variants,
            };

            axios
                .post(this.$apiUrl + "/seller/product-variants/save", payload)
                .then((res) => {
                    this.$swal.fire("Success", res.data.message, "success");
                })
                .catch(() => {
                    this.$swal.fire("Error", "Something went wrong", "error");
                });
        },

        updateStock(prod) {
            // Build payload
            const payload = {
                seller_id: this.seller_id,                    // current seller
                id: prod.id,
                stock_quantity: prod.stock                     // new stock value
            };

            // Send POST request
            axios.post(this.$apiUrl + "/products/variants/update-stock", payload)
                .then((res) => {
                     this.loadAssignedProducts();
                    this.$swal.fire("Success", res.data.message, "success");
                })
                .catch(() => {
                    this.$swal.fire("Error", "Failed to update stock", "error");
                });
        }

    },

};
</script>
