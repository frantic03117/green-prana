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
    }
  },
  methods: {
    // Load categories assigned to seller
    loadCategories: function loadCategories() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/categories/seller_categories", {
        params: {
          seller_id: this.seller_id
        }
      }).then(function (res) {
        _this2.categoryOptions = res.data; // API returns <option> HTML
      })["catch"](function () {});
    },
    // Load products by seller + category
    loadProducts: function loadProducts() {
      var _this3 = this;
      this.selectedProductId = "";
      this.variants = [];
      if (!this.categoryId) return;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products", {
        params: {
          seller: this.seller_id,
          category: this.categoryId
        }
      }).then(function (res) {
        _this3.products = res.data.data.products;
      })["catch"](function () {});
    },
    // Load variants for selected product
    loadVariants: function loadVariants() {
      var _this4 = this;
      this.variants = [];
      if (!this.selectedProductId) return;
      var productVariants = this.products.filter(function (p) {
        return p.product_id === _this4.selectedProductId;
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
      var _this5 = this;
      var payload = {
        seller_id: this.seller_id,
        category_id: this.categoryId,
        product_id: this.selectedProductId,
        variants: this.variants
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/seller/product-variants/save", payload).then(function (res) {
        _this5.$swal.fire("Success", res.data.message, "success");
      })["catch"](function () {
        _this5.$swal.fire("Error", "Something went wrong", "error");
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
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("label", [_vm._v("Product")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selectedProductId,
                expression: "selectedProductId",
              },
            ],
            staticClass: "form-select",
            attrs: { disabled: !_vm.products.length },
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
                  _vm.selectedProductId = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.loadVariants,
              ],
            },
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Select Product")]),
            _vm._v(" "),
            _vm._l(_vm.products, function (prod) {
              return _c(
                "option",
                { key: prod.product_id, domProps: { value: prod.product_id } },
                [_vm._v("\n          " + _vm._s(prod.name) + "\n        ")]
              )
            }),
          ],
          2
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.variants.length
      ? _c("div", { staticClass: "row mt-4" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("h5", [_vm._v("Variants")]),
              _vm._v(" "),
              _vm._l(_vm.variants, function (variant) {
                return _c(
                  "div",
                  { key: variant.id, staticClass: "card p-3 mb-2" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Variant")]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: variant.name },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: variant.price,
                              expression: "variant.price",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", min: "0" },
                          domProps: { value: variant.price },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(variant, "price", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Stock")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: variant.stock,
                              expression: "variant.stock",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", min: "0" },
                          domProps: { value: variant.stock },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(variant, "stock", $event.target.value)
                            },
                          },
                        }),
                      ]),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.variants.length
      ? _c("div", { staticClass: "row mt-4" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h5", [_vm._v("Product Variant List")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.variants, function (variant) {
                  return _c("tr", { key: variant.id }, [
                    _c("td", [_vm._v(_vm._s(_vm.selectedProductName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(variant.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(variant.price))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(variant.stock))]),
                  ])
                }),
                0
              ),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-primary mt-3",
        attrs: { disabled: !_vm.variants.length },
        on: { click: _vm.saveVariants },
      },
      [_vm._v("\n    Save All\n  ")]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Variant")]),
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