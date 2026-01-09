<template>
    <div class="container">
        <h3 class="mb-3">Warehouses</h3>

        <!-- TABLE -->
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="warehouses.length === 0">
                    <td colspan="6" class="text-center">No warehouses found</td>
                </tr>

                <tr v-for="(warehouse, index) in warehouses" :key="warehouse.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ warehouse.name }}</td>
                    <td>{{ warehouse.email }}</td>
                    <td>{{ warehouse.mobile }}</td>
                    <td>
                        <span class="badge" :class="warehouse.is_active === 'active'
                            ? 'bg-success'
                            : 'bg-danger'">
                            {{ warehouse.is_active }}
                        </span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-primary me-1" @click="viewWarehouse(warehouse)">
                            View
                        </button>
                        <button class="btn btn-sm btn-warning me-1" @click="editWarehouse(warehouse.id)">
                            Edit
                        </button>
                        <button class="btn btn-sm btn-danger" @click="deleteWarehouse(warehouse.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- MAP -->
        <GmapMap v-if="selectedWarehouse" :center="mapCenter" :zoom="13" style="width:100%; height:400px">
            <GmapMarker :position="{
                lat: selectedWarehouse.latitude,
                lng: selectedWarehouse.longitude
            }" />

            <GmapPolygon :paths="selectedWarehouse.coverage_area" />
        </GmapMap>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            warehouses: [],
            selectedWarehouse: null,
            mapCenter: { lat: 20.5937, lng: 78.9629 },
        };
    },

    mounted() {
        this.fetchWarehouses();
    },

    methods: {
        /* ===============================
           FETCH WAREHOUSES
        =============================== */
        fetchWarehouses() {
            axios.get(this.$apiUrl + "/warehouse")
                .then(res => {
                    this.warehouses = res.data.data;
                })
                .catch(() => {
                    this.$swal.fire("Error", "Failed to load warehouses", "error");
                });
        },

        /* ===============================
           VIEW WAREHOUSE ON MAP
        =============================== */
        viewWarehouse(warehouse) {

            // Fix marker position
            warehouse.latitude = Number(warehouse.latitude);
            warehouse.longitude = Number(warehouse.longitude);

            // Fix polygon coordinates
            warehouse.coverage_area = warehouse.coverage_area
                .map(p => ({
                    lat: Number(p.lat),
                    lng: Number(p.lng),
                }))
                .filter(p => !isNaN(p.lat) && !isNaN(p.lng));

            // Remove duplicated closing point (important)
            if (warehouse.coverage_area.length > 1) {
                const first = warehouse.coverage_area[0];
                const last = warehouse.coverage_area[warehouse.coverage_area.length - 1];

                if (first.lat === last.lat && first.lng === last.lng) {
                    warehouse.coverage_area.pop();
                }
            }

            this.selectedWarehouse = warehouse;

            this.mapCenter = {
                lat: warehouse.latitude,
                lng: warehouse.longitude,
            };
        },


        /* ===============================
           EDIT
        =============================== */
        editWarehouse(id) {
            this.$router.push({ path: `/warehouse/edit/${id}` });
        },

        /* ===============================
           DELETE
        =============================== */
        deleteWarehouse(id) {
            this.$swal.fire({
                title: "Are you sure?",
                text: "This action cannot be undone",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it",
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(this.$apiUrl + `/warehouse/${id}`)
                        .then(() => {
                            this.fetchWarehouses();
                            this.$swal.fire("Deleted", "Warehouse deleted", "success");
                        })
                        .catch(() => {
                            this.$swal.fire("Error", "Delete failed", "error");
                        });
                }
            });
        },
    },
};
</script>

<style scoped>
.table td,
.table th {
    vertical-align: middle;
}
</style>
