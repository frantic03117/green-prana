"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_warehouse_SellerCartStock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  name: "WarehouseStock",
  data: function data() {
    return {
      keyword: "",
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user,
      categoryOptions: [],
      warehouse_id: "",
      variants: [],
      selectedCategory: "",
      cart: [],
      pagination: {
        current_page: 1,
        last_page: 0,
        per_page: 20,
        total: 0
      }
    };
  },
  computed: {
    totalQty: function totalQty() {
      return this.cart.reduce(function (sum, item) {
        return sum + item.qty;
      }, 0);
    },
    totalAmount: function totalAmount() {
      return this.cart.reduce(function (sum, item) {
        return sum + item.total;
      }, 0);
    }
  },
  created: function created() {
    this.warehouse_id = this.$route.params.id;
    this.loadCategories();
    this.viewProducts();
  },
  methods: {
    searchProducts: function searchProducts() {
      this.viewProducts(1);
    },
    loadCategories: function loadCategories() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/categories/active", {
        params: {
          warehouse_id: this.warehouse_id
        }
      }).then(function (res) {
        _this.categoryOptions = res.data.data;
      });
    },
    viewProducts: function viewProducts() {
      var _this2 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products/variants", {
        params: {
          warehouse_id: this.warehouse_id,
          category_id: this.selectedCategory,
          search: this.keyword,
          page: page
        }
      }).then(function (res) {
        _this2.variants = res.data.data.data.map(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            qty: 1
          });
        });
      });
    },
    addToCart: function addToCart(product) {
      if (!product.qty || product.qty > product.stock) {
        alert("Invalid quantity");
        return;
      }
      var existing = this.cart.find(function (i) {
        return i.id === product.id;
      });
      if (existing) {
        existing.qty += product.qty;
        existing.total = existing.qty * existing.price;
      } else {
        this.cart.push({
          id: product.id,
          product_name: product.product_name,
          price: product.price,
          qty: product.qty,
          total: product.qty * product.price
        });
      }
      product.qty = 1;
    },
    removeFromCart: function removeFromCart(index) {
      this.cart.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/warehouse/SellerCartStock.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/warehouse/SellerCartStock.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerCartStock.vue?vue&type=template&id=57b89a3c */ "./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c");
/* harmony import */ var _SellerCartStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerCartStock.vue?vue&type=script&lang=js */ "./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerCartStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/warehouse/SellerCartStock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerCartStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerCartStock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerCartStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerCartStock_vue_vue_type_template_id_57b89a3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerCartStock.vue?vue&type=template&id=57b89a3c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/SellerCartStock.vue?vue&type=template&id=57b89a3c ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("section", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row mb-3" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword,
                        expression: "keyword",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Search product" },
                    domProps: { value: _vm.keyword },
                    on: {
                      keyup: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.searchProducts.apply(null, arguments)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.keyword = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedCategory,
                          expression: "selectedCategory",
                        },
                      ],
                      staticClass: "form-control",
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
                            _vm.selectedCategory = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function ($event) {
                            return _vm.viewProducts(1)
                          },
                        ],
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("All Categories"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categoryOptions, function (cat) {
                        return _c(
                          "option",
                          { key: cat.id, domProps: { value: cat.id } },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(cat.name) +
                                "\n                                    "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.variants, function (item) {
                      return _c("tr", { key: item.id }, [
                        _c("td", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v("₹ " + _vm._s(item.discounted_price)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: item.qty,
                                expression: "item.qty",
                                modifiers: { number: true },
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              min: "1",
                              max: item.stock,
                            },
                            domProps: { value: item.qty },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  item,
                                  "qty",
                                  _vm._n($event.target.value)
                                )
                              },
                              blur: function ($event) {
                                return _vm.$forceUpdate()
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              on: {
                                click: function ($event) {
                                  return _vm.addToCart(item)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                            Add to Cart\n                                        "
                              ),
                            ]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.variants.length === 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              attrs: { colspan: "5" },
                            },
                            [
                              _vm._v(
                                "\n                                        No products found\n                                    "
                              ),
                            ]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm.cart.length
                ? _c(
                    "ul",
                    { staticClass: "list-group mb-3" },
                    _vm._l(_vm.cart, function (item, index) {
                      return _c(
                        "li",
                        {
                          key: item.id,
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center",
                        },
                        [
                          _c("div", [
                            _c("strong", [_vm._v(_vm._s(item.name))]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(
                              "\n                                    Qty: " +
                                _vm._s(item.qty) +
                                "\n                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(
                              "\n                                    ₹ " +
                                _vm._s(item.total) +
                                "\n                                    "
                            ),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-danger ms-2",
                                on: {
                                  click: function ($event) {
                                    return _vm.removeFromCart(index)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                        ×\n                                    "
                                ),
                              ]
                            ),
                          ]),
                        ]
                      )
                    }),
                    0
                  )
                : _c("p", { staticClass: "text-muted" }, [
                    _vm._v(
                      "\n                            Cart is empty\n                        "
                    ),
                  ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Total Items:")]),
                _vm._v(" " + _vm._s(_vm.cart.length)),
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Total Quantity:")]),
                _vm._v(" " + _vm._s(_vm.totalQty)),
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Total Amount:")]),
                _vm._v(" ₹ " + _vm._s(_vm.totalAmount)),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary w-100",
                  attrs: { disabled: !_vm.cart.length },
                },
                [
                  _vm._v(
                    "\n                            Proceed\n                        "
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "w-100" }, [
            _c("h4", [_vm._v("Seller Name : Sandeep Bhiya")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "card card-body" }, [
        _c("div", { staticClass: "w-100" }, [
          _c("p", [_vm._v("Payment Date : 2025-01-01")]),
          _vm._v(" "),
          _c("p", [_vm._v("Payment Amount : 20000")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "160" } }, [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("strong", [_vm._v("Cart Items")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);