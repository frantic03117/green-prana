"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_warehouse_ListWarehouses_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      warehouses: [],
      selectedWarehouse: null,
      mapCenter: {
        lat: 20.5937,
        lng: 78.9629
      }
    };
  },
  mounted: function mounted() {
    this.fetchWarehouses();
  },
  methods: {
    /* ===============================
       FETCH WAREHOUSES
    =============================== */
    fetchWarehouses: function fetchWarehouses() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/warehouse").then(function (res) {
        _this.warehouses = res.data.data;
      })["catch"](function () {
        _this.$swal.fire("Error", "Failed to load warehouses", "error");
      });
    },
    /* ===============================
       VIEW WAREHOUSE ON MAP
    =============================== */
    viewWarehouse: function viewWarehouse(warehouse) {
      // Fix marker position
      warehouse.latitude = Number(warehouse.latitude);
      warehouse.longitude = Number(warehouse.longitude);

      // Fix polygon coordinates
      warehouse.coverage_area = warehouse.coverage_area.map(function (p) {
        return {
          lat: Number(p.lat),
          lng: Number(p.lng)
        };
      }).filter(function (p) {
        return !isNaN(p.lat) && !isNaN(p.lng);
      });

      // Remove duplicated closing point (important)
      if (warehouse.coverage_area.length > 1) {
        var first = warehouse.coverage_area[0];
        var last = warehouse.coverage_area[warehouse.coverage_area.length - 1];
        if (first.lat === last.lat && first.lng === last.lng) {
          warehouse.coverage_area.pop();
        }
      }
      this.selectedWarehouse = warehouse;
      this.mapCenter = {
        lat: warehouse.latitude,
        lng: warehouse.longitude
      };
    },
    /* ===============================
       EDIT
    =============================== */
    editWarehouse: function editWarehouse(id) {
      this.$router.push({
        path: "/warehouse/edit/".concat(id)
      });
    },
    /* ===============================
       DELETE
    =============================== */
    deleteWarehouse: function deleteWarehouse(id) {
      var _this2 = this;
      this.$swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it"
      }).then(function (result) {
        if (result.isConfirmed) {
          axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](_this2.$apiUrl + "/warehouse/".concat(id)).then(function () {
            _this2.fetchWarehouses();
            _this2.$swal.fire("Deleted", "Warehouse deleted", "success");
          })["catch"](function () {
            _this2.$swal.fire("Error", "Delete failed", "error");
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-1459b18e],\n.table th[data-v-1459b18e] {\n    vertical-align: middle;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_style_index_0_id_1459b18e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_style_index_0_id_1459b18e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_style_index_0_id_1459b18e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/warehouse/ListWarehouses.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/warehouse/ListWarehouses.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true */ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true");
/* harmony import */ var _ListWarehouses_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListWarehouses.vue?vue&type=script&lang=js */ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js");
/* harmony import */ var _ListWarehouses_vue_vue_type_style_index_0_id_1459b18e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css */ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListWarehouses_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1459b18e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/warehouse/ListWarehouses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListWarehouses.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_style_index_0_id_1459b18e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=style&index=0&id=1459b18e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWarehouses_vue_vue_type_template_id_1459b18e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ListWarehouses.vue?vue&type=template&id=1459b18e&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h3", { staticClass: "mb-3" }, [_vm._v("Warehouses")]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm.warehouses.length === 0
              ? _c("tr", [
                  _c(
                    "td",
                    { staticClass: "text-center", attrs: { colspan: "6" } },
                    [_vm._v("No warehouses found")]
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.warehouses, function (warehouse, index) {
              return _c("tr", { key: warehouse.id }, [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(warehouse.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(warehouse.email))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(warehouse.mobile))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "span",
                    {
                      staticClass: "badge",
                      class:
                        warehouse.is_active === "active"
                          ? "bg-success"
                          : "bg-danger",
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(warehouse.is_active) +
                          "\n                    "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary me-1",
                      on: {
                        click: function ($event) {
                          return _vm.viewWarehouse(warehouse)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                        View\n                    "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning me-1",
                      on: {
                        click: function ($event) {
                          return _vm.editWarehouse(warehouse.id)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                        Edit\n                    "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      on: {
                        click: function ($event) {
                          return _vm.deleteWarehouse(warehouse.id)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                        Delete\n                    "
                      ),
                    ]
                  ),
                ]),
              ])
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _vm.selectedWarehouse
        ? _c(
            "GmapMap",
            {
              staticStyle: { width: "100%", height: "400px" },
              attrs: { center: _vm.mapCenter, zoom: 13 },
            },
            [
              _c("GmapMarker", {
                attrs: {
                  position: {
                    lat: _vm.selectedWarehouse.latitude,
                    lng: _vm.selectedWarehouse.longitude,
                  },
                },
              }),
              _vm._v(" "),
              _c("GmapPolygon", {
                attrs: { paths: _vm.selectedWarehouse.coverage_area },
              }),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mobile")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);