<template>
    <div class="container">

        <h3>Create Warehouse</h3>

        <div class="row mb-3">
            <div class="col-md-4">
                <label>Warehouse Name</label>
                <input v-model="name" name="name" id="name" class="form-control" />
            </div>
            <div class="col-md-4">
                <label>Warehouse Email</label>
                <input v-model="email" name="email" id="email" class="form-control" />
            </div>
            <div class="col-md-4">
                <label>Warehouse Mobile</label>
                <input v-model="mobile" name="mobile" id="mobile" class="form-control" />
            </div>
            <div class="col-md-4">
                <label>Warehouse Password</label>
                <input v-model="password" name="password" class="form-control" />
            </div>

            <div class="col-md-4">
                <label>Search Warehouse Location</label>
                <GmapAutocomplete class="form-control" placeholder="Search address" @place_changed="setPlace" />
            </div>

            <div class="col-md-4">
                <label>Delivery Radius (KM)</label>
                <div class="input-group ">
                    <input type="number" v-model="radius" class="form-control" />
                    <button class="btn btn-primary" @click="drawRadius">
                        Draw Radius
                    </button>
                </div>

            </div>
        </div>



        <GmapMap :center="center" :zoom="zoom" style="width:100%; height:500px" @click="handleMapClick">
            <GmapMarker v-for="(m, index) in markers" :key="index" :position="m.position" :draggable="true"
                @dragend="updateCoordinates" />

            <GmapPolygon v-if="polygonPath.length" :paths="polygonPath" />

            <GmapInfoWindow :position="infoWindow.position" :opened="infoWindow.open">
                <div v-html="infoWindow.template"></div>
            </GmapInfoWindow>
        </GmapMap>

        <button class="btn btn-success mt-3" @click="saveWarehouse">
            Save Warehouse
        </button>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            radius: null,
            email: "",
            mobile: "",
            password: "",
            address: "",
            latitude: null,
            longitude: null,

            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 5,

            currentPlace: null,
            markers: [],
            polygonPath: [],

            infoWindow: {
                position: { lat: 0, lng: 0 },
                open: false,
                template: "",
            },
        };
    },

    methods: {
        /* ===============================
           AUTOCOMPLETE → PLACE SELECT
        =============================== */
        setPlace(place) {
            this.currentPlace = place;
            this.addMarker();
        },

        addMarker() {
            if (!this.currentPlace) return;

            const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng(),
                draggable: true,
            };

            this.markers = [{ position: marker }];
            this.center = marker;
            this.zoom = 14;

            this.latitude = marker.lat;
            this.longitude = marker.lng;

            this.infoWindow.position = marker;
            this.infoWindow.template = `
                <b>${this.currentPlace.name}</b><br>
                ${this.currentPlace.formatted_address}
            `;
            this.infoWindow.open = true;

            this.currentPlace = null;
        },

        /* ===============================
           MARKER DRAG
        =============================== */
        updateCoordinates(event) {
            this.latitude = event.latLng.lat();
            this.longitude = event.latLng.lng();

            this.center = {
                lat: this.latitude,
                lng: this.longitude,
            };

            this.infoWindow.position = this.center;
        },

        /* ===============================
           MAP CLICK
        =============================== */
        handleMapClick(event) {
            this.latitude = event.latLng.lat();
            this.longitude = event.latLng.lng();

            const marker = {
                lat: this.latitude,
                lng: this.longitude,
                draggable: true,
            };

            this.markers = [{ position: marker }];
            this.center = marker;
        },

        /* ===============================
           RADIUS → POLYGON
        =============================== */
        drawRadius() {
            if (!this.radius || !this.latitude || !this.longitude) {
                alert("Select location and radius first");
                return;
            }

            const center = new google.maps.LatLng(
                this.latitude,
                this.longitude
            );

            const path = [];
            for (let i = 0; i < 36; i++) {
                path.push(
                    google.maps.geometry.spherical.computeOffset(
                        center,
                        this.radius * 1000,
                        (i * 360) / 36
                    )
                );
            }

            this.polygonPath = path.map(p => ({
                lat: p.lat(),
                lng: p.lng(),
            }));
        },

        /* ===============================
           SAVE WAREHOUSE
        =============================== */
        saveWarehouse() {
            const payload = {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                password: this.password,
                latitude: this.latitude,
                longitude: this.longitude,
                coverage_area: this.polygonPath,
            };

            axios.post("/warehouses", payload).then(() => {
                alert("Warehouse saved successfully");
            });
        },
    },
};
</script>

<style>
.pac-container {
    z-index: 9999 !important;
}
</style>
