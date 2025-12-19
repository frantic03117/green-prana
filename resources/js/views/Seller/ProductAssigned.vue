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

      <!-- Product -->
      <div class="col-md-4">
        <label>Product</label>
        <select class="form-select" v-model="selectedProductId" @change="loadVariants" :disabled="!products.length">
          <option value="">Select Product</option>
          <option v-for="prod in products" :key="prod.product_id" :value="prod.product_id">
            {{ prod.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- VARIANTS -->
    <div class="row mt-4" v-if="variants.length">
      <div class="col-12">
        <h5>Variants</h5>
        <div class="card p-3 mb-2" v-for="variant in variants" :key="variant.id">
          <div class="row">
            <div class="col-md-4">
              <label>Variant</label>
              <input type="text" class="form-control" :value="variant.name" disabled />
            </div>
            <div class="col-md-4">
              <label>Price</label>
              <input type="number" class="form-control" v-model="variant.price" min="0" />
            </div>
            <div class="col-md-4">
              <label>Stock</label>
              <input type="number" class="form-control" v-model="variant.stock" min="0" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VARIANT TABLE -->
    <div class="row mt-4" v-if="variants.length">
      <div class="col-12">
        <h5>Product Variant List</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Variant</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="variant in variants" :key="variant.id">
              <td>{{ selectedProductName }}</td>
              <td>{{ variant.name }}</td>
              <td>{{ variant.price }}</td>
              <td>{{ variant.stock }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- SAVE -->
    <button class="btn btn-primary mt-3" :disabled="!variants.length" @click="saveVariants">
      Save All
    </button>
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
    }
  },
  methods: {
    // Load categories assigned to seller
    loadCategories() {
      axios
        .get(this.$apiUrl + "/categories/seller_categories", {
          params: { seller_id: this.seller_id },
        })
        .then((res) => {
          this.categoryOptions = res.data; // API returns <option> HTML
        })
        .catch(() => {});
    },

    // Load products by seller + category
    loadProducts() {
      this.selectedProductId = "";
      this.variants = [];
      if (!this.categoryId) return;

      axios
        .get(this.$apiUrl + "/products", {
          params: { seller: this.seller_id, category: this.categoryId },
        })
        .then((res) => {
          this.products = res.data.data.products;
        })
        .catch(() => {});
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
  },
};
</script>
