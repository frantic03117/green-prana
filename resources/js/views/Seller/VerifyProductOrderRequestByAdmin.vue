<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Seller</th>
                                <th>Payment Info</th>
                                <th>Product</th>
                                <th>Admin Status</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in requests" :key="item.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.seller ? item.seller.name : 'N/A' }}</td>

                                <td>


                                    <ul>
                                        <li>
                                            <strong>Payment Date:</strong>
                                            <small>{{ item.payment_date }}</small>
                                        </li>
                                        <li>
                                            <strong>Payment Amount:</strong>
                                            <small>₹ {{ item.amount }}</small>
                                        </li>
                                        <li>
                                            <strong>Payment File:</strong>
                                            <a v-if="item.payment_receipt" :href="receiptUrl(item.payment_receipt)"
                                                target="_blank">
                                                View
                                            </a>
                                            <span v-else>-</span>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <button class="btn btn-link text-decoration-underline"
                                        @click="openProductModal(item)">
                                        View Product Request
                                    </button>
                                </td>

                                <td>
                                    <span class="badge bg-warning">{{ item.admin_status }}</span>
                                </td>
                                <td>
                                    <span class="badge bg-info">{{ item.order_status }}</span>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-primary" @click="openActionModal(item)">
                                        <i class="fa fa-pencil"></i>
                                    </button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- PRODUCT MODAL -->
        <div class="modal fade" id="productModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Product Request Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product ID</th>
                                    <th>Variant ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in selectedOrder.order_requests" :key="product.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ product.product_id }}</td>
                                    <td>{{ product.variant_id }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- ACTION MODAL -->
        <div class="modal fade" id="actionModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Verify Product Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <p>Do you want to approve or reject this request?</p>
                        <div class="form-group">
                            <label for="">Select Status</label>
                            <select name="" id="" class="form-select">
                                <option value="">Approve</option>
                                <option value="">Reject</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Enter Notes</label>
                            <textarea name="" id="" class="form-control"></textarea>
                        </div>
                    </div>

                    <div class="modal-footer">

                        <button class="btn btn-success" @click="handleRequest('approve')">
                            Submit
                        </button>
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
    name: "VerifyProductOrderRequestByAdmin",
    data() {
        return {
            loading: false,
            requests: [],
            selectedOrder: null,
            currentPage: 1,
            perPage: 10,
            total: 0,
            lastPage: 1
        };
    },
    created() {
        this.fetchRequests();
    },
    methods: {
        openProductModal(item) {
            this.selectedOrder = item;
            const modal = new bootstrap.Modal(
                document.getElementById("productModal")
            );
            modal.show();
        },

        openActionModal() {
            const modal = new bootstrap.Modal(
                document.getElementById("actionModal")
            );
            modal.show();
        },

        handleRequest(status) {
            axios.post(
                "/api/admin/verify-product-order",
                {
                    status: status, // approve | reject
                    order_id: 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${Auth.getToken()}`
                    }
                }
            )
                .then(() => {
                    alert(`Request ${status}ed successfully`);
                    bootstrap.Modal.getInstance(
                        document.getElementById("actionModal")
                    ).hide();
                })
                .catch(() => {
                    alert("Something went wrong");
                });
        },
        fetchRequests(page = 1) {
            this.loading = true;
            this.currentPage = page;
            axios
                .get(this.$apiUrl + "/purchase-order", {
                    params: {
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
    }
};
</script>
