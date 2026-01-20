<template>
    <section>
        <div class="container">
            <!-- Header -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="page-heading">
                        <h3>List of Product Order Requests</h3>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="w-full text-end">
                        <router-link to="/seller/product-order-request/create">
                            Create New Request
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Loading -->
            <div v-if="loading" class="text-center">
                <p>Loading requests...</p>
            </div>

            <!-- Empty -->
            <div v-else-if="!requests.length" class="text-center">
                <p>No purchase order requests found.</p>
            </div>

            <!-- Table -->
            <div v-else class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Payment Date</th>
                            <th>Payment Mode</th>
                            <th>Status</th>
                            <th>Order Status</th>
                            <th>Receipt</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in requests" :key="item.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.seller ? item.seller.name : 'N/A' }}</td>

                            <td>{{ item.payment_date }}</td>
                            <td>{{ item.payment_mode }}</td>
                            <td>
                                <span class="badge bg-warning">{{ item.admin_status }}</span>
                            </td>
                            <td>
                                <span class="badge bg-info">{{ item.order_status }}</span>
                            </td>
                            <td>
                                <a v-if="item.payment_receipt" :href="receiptUrl(item.payment_receipt)" target="_blank">
                                    View
                                </a>
                                <span v-else>-</span>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Order Details Modal -->

    </section>




</template>
<script>
import axios from "axios";
import Auth from "../../Auth.js";

export default {
    data() {
        return {
            loading: false,
            requests: [],
            seller_id: Auth.user.id,
            // pagination
            currentPage: 1,
            perPage: 10,
            total: 0,
            lastPage: 1
        };
    },

    computed: {
        paginatedRequests() {
            const start = (this.currentPage - 1) * this.perPage;
            return this.requests.slice(start, start + this.perPage);
        },

        totalPages() {
            return Math.ceil(this.requests.length / this.perPage);
        }
    },


    mounted() {
        this.fetchRequests();
    },
    methods: {
        fetchRequests(page = 1) {
            this.loading = true;
            this.currentPage = page;

            axios
                .get(this.$apiUrl + "/purchase-order", {
                    params: {
                        seller_id: seller_id,
                        page: this.currentPage,
                        per_page: this.perPage
                    }
                })
                .then((res) => {
                    // Laravel paginator response
                    this.requests = res.data.data.data || [];
                    this.total = res.data.data.total;
                    this.lastPage = res.data.data.last_page;
                })
                .catch(() => {
                    this.requests = [];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        receiptUrl(path) {
            return `${this.$baseUrl}/storage/${path}`;
        },



    },
};
</script>
