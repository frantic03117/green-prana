"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Seller_ProductAssigned_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
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
  name: "SellerProductList",
  data: function data() {
    return {
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user,
      seller_id: null,
      categoryOptions: "<option value=''>--Select Category--</option>",
      products: [],
      variants: [],
      categoryId: "",
      selectedProductId: "",
      assignedProducts: [],
      isLoading: false
    };
  },
  computed: {
    selectedProductName: function selectedProductName() {
      var _this = this;
      var product = this.products.find(function (p) {
        return p.product_id === _this.selectedProductId;
      });
      return product ? product.name : "";
    }
  },
  created: function created() {
    // Get seller ID from route params
    this.seller_id = this.$route.params.sellerId;
    if (this.seller_id) {
      this.loadCategories();
      this.loadAssignedProducts();
    }
  },
  methods: {
    savePrice: function savePrice(product) {
      var _this2 = this;
      // alert("Saving price for: " + product.name + " Price: " + product.price);
      console.log("Saving price for:", product.name);
      console.log("Price:", product.price);
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/products/seller_assigned_variants", {
        seller_id: this.seller_id,
        product_id: product.product_id,
        variant_id: product.product_variant_id,
        price: product.price
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        _this2.loadProducts();
        _this2.loadAssignedProducts();
        _this2.isLoading = false;
        _this2.$swal.fire("Success", res.data.message, "success");
      })["catch"](function (error) {
        _this2.isLoading = false;
        console.error("Error saving price:", error);
        _this2.$swal.fire("Error", "Something went wrong", "error");
      });
    },
    // Load categories assigned to seller
    loadCategories: function loadCategories() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/categories/seller_categories", {
        params: {
          seller_id: this.seller_id
        }
      }).then(function (res) {
        _this3.categoryOptions = res.data; // API returns <option> HTML
      })["catch"](function () {});
    },
    // Load products by seller + category
    loadProducts: function loadProducts() {
      var _this4 = this;
      this.selectedProductId = "";
      this.variants = [];
      if (!this.categoryId) return;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products/variants", {
        params: {
          category_id: this.categoryId,
          seller_id: this.seller_id,
          assigned: false
        }
      }).then(function (res) {
        console.log(res);
        if (res.data.data.data.length == 0) {
          _this4.$swal.fire("Error", "No product found", "error");
        }
        _this4.products = res.data.data.data;
      })["catch"](function () {});
    },
    loadAssignedProducts: function loadAssignedProducts() {
      var _this5 = this;
      if (!this.seller_id) return;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products/seller_assigned_variants", {
        params: {
          seller_id: this.seller_id,
          assigned: true
        }
      }).then(function (res) {
        _this5.assignedProducts = res.data.data || [];
      })["catch"](function () {});
    },
    // Load variants for selected product
    loadVariants: function loadVariants() {
      var _this6 = this;
      this.variants = [];
      if (!this.selectedProductId) return;
      var productVariants = this.products.filter(function (p) {
        return p.product_id === _this6.selectedProductId;
      });
      this.variants = productVariants.map(function (v) {
        return {
          id: v.product_variant_id,
          name: v.measurement + (v.short_code ? " " + v.short_code : ""),
          price: v.price,
          stock: v.stock
        };
      });
    },
    // Save all variants for this seller
    saveVariants: function saveVariants() {
      var _this7 = this;
      var payload = {
        seller_id: this.seller_id,
        category_id: this.categoryId,
        product_id: this.selectedProductId,
        variants: this.variants
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/seller/product-variants/save", payload).then(function (res) {
        _this7.$swal.fire("Success", res.data.message, "success");
      })["catch"](function () {
        _this7.$swal.fire("Error", "Something went wrong", "error");
      });
    },
    updateStock: function updateStock(prod) {
      var _this8 = this;
      // Build payload
      var payload = {
        seller_id: this.seller_id,
        // current seller
        id: prod.id,
        stock_quantity: prod.stock // new stock value
      };

      // Send POST request
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/products/variants/update-stock", payload).then(function (res) {
        _this8.loadAssignedProducts();
        _this8.$swal.fire("Success", res.data.message, "success");
      })["catch"](function () {
        _this8.$swal.fire("Error", "Failed to update stock", "error");
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Seller/ProductAssigned.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Seller/ProductAssigned.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAssigned.vue?vue&type=template&id=a7909ae8 */ "./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8");
/* harmony import */ var _ProductAssigned_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAssigned.vue?vue&type=script&lang=js */ "./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductAssigned_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Seller/ProductAssigned.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAssigned_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductAssigned.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAssigned_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAssigned_vue_vue_type_template_id_a7909ae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductAssigned.vue?vue&type=template&id=a7909ae8 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductAssigned.vue?vue&type=template&id=a7909ae8 ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-heading" }, [
    _c("h3", [_vm._v("Seller Products")]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("label", [_vm._v("Category")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.categoryId,
                expression: "categoryId",
              },
            ],
            staticClass: "form-select",
            on: {
              change: [
                function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.categoryId = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.loadProducts,
              ],
            },
          },
          [
            _c("option", { attrs: { value: "" } }, [
              _vm._v("--Select Category--"),
            ]),
            _vm._v(" "),
            _c("span", {
              domProps: { innerHTML: _vm._s(_vm.categoryOptions) },
            }),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.products.length
      ? _c("div", { staticClass: "row mt-4" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h5", [
              _vm._v("Products Available: " + _vm._s(_vm.products.length)),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-12" },
            _vm._l(_vm.products, function (prod) {
              return _c("div", { key: prod.product_id, staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("strong", [_vm._v(_vm._s(prod.name))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Enter Price")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: prod.price,
                        expression: "prod.price",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: prod.price },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(prod, "price", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      on: {
                        click: function ($event) {
                          return _vm.savePrice(prod)
                        },
                      },
                    },
                    [_vm._v("Save")]
                  ),
                ]),
              ])
            }),
            0
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.assignedProducts.length
      ? _c("div", { staticClass: "row mt-4" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h5", [
              _vm._v(
                "Products Assigned: " + _vm._s(_vm.assignedProducts.length)
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-bordered table-striped align-middle",
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.assignedProducts, function (prod, index) {
                      return _c("tr", { key: prod.id }, [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(prod.product))]),
                        _vm._v(" "),
                        _c("td", [_vm._v("₹" + _vm._s(prod.price))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "input-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: prod.stock,
                                  expression: "prod.stock",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", name: "stock" },
                              domProps: { value: prod.stock },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(prod, "stock", $event.target.value)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary",
                                attrs: { disabled: prod.updating },
                                on: {
                                  click: function ($event) {
                                    return _vm.updateStock(prod)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      prod.updating ? "Updating..." : "Update"
                                    ) +
                                    "\n                                    "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]
              ),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-light" }, [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stock")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);