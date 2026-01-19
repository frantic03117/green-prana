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
                                <th>Note</th>
                                <th>Product</th>
                                <th>Admin Status</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sandeep Bhiya</td>
                                <td>
                                    <p>
                                        Give total product category wise and some accessories
                                    </p>
                                </td>

                                <td>
                                    <button class="btn btn-link text-decoration-underline" @click="openProductModal">
                                        View Product Request
                                    </button>
                                </td>
                                <td>
                                    Pending
                                </td>
                                <td>
                                    Pending
                                </td>

                                <td>
                                    <router-link :to="{ name: 'AddToCartForSeller', params: { sellerId: 1 } }"
                                        class="btn btn-sm btn-success">
                                        <i class="fa fa-shopping-cart"></i> Add Stock
                                    </router-link>
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
                        <p><strong>Product Name:</strong> Sample Product</p>
                        <p><strong>Category:</strong> Electronics</p>
                        <p><strong>Description:</strong> Product description goes here.</p>
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

    methods: {
        openProductModal() {
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
        }
    }
};
</script>
