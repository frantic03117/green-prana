<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ __('stock_management') }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/dashboard">{{ __('dashboard') }}</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ __('stock_management') }}</li>
                        </ol>
                    </nav>
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



                                <td>{{ prod.stock }}</td>


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
import { computed } from "vue";
export default {
    name: "StockManager",
    data() {
        return {
            login_user: Auth.user,
            seller_id: null,
            assignedProducts: [],
            isLoading: false,
        }
    },
    created() {
        this.login_user = Auth.user;

        if (this.login_user && this.login_user.role_id === 3) {
            // seller
            this.seller_id = this.login_user.id;
            this.loadAssignedProducts();
        }
    },

    methods: {
        loadAssignedProducts() {
            if (!this.seller_id) return;

            axios.get(this.$apiUrl + "/products/seller_assigned_variants", {
                params: { seller_id: this.seller_id, assigned: true },
            })
                .then((res) => {
                    this.assignedProducts = res.data.data || [];
                })
                .catch(() => { });
        }
    },
}
</script>
