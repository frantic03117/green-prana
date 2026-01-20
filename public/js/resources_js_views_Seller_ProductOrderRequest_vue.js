"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Seller_ProductOrderRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductOrderRequest",
  data: function data() {
    return {
      form: {
        payment_date: "",
        payment_mode: "",
        amount: "",
        receipt: null
      },
      keyword: "",
      selectedCategory: "",
      selectedVariants: [],
      variants: [],
      categoryOptions: [],
      seller_id: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.id,
      pagination: {
        current_page: 1,
        last_page: 0,
        per_page: 20,
        total: 0
      }
    };
  },
  computed: {
    pages: function pages() {
      return Array.from({
        length: this.pagination.last_page
      }, function (_, i) {
        return i + 1;
      });
    }
  },
  created: function created() {
    this.loadCategories();
    this.viewProducts();
  },
  methods: {
    onVariantChange: function onVariantChange(event, variant) {
      if (event.target.checked) {
        // add
        this.selectedVariants.push({
          variant_id: variant.id,
          product_id: variant.product_id
        });
      } else {
        // remove
        this.selectedVariants = this.selectedVariants.filter(function (v) {
          return v.variant_id !== variant.id;
        });
      }
      console.log(variant);
      console.log(this.selectedVariants);
    },
    handleFile: function handleFile(e) {
      this.form.receipt = e.target.files[0];
    },
    loadCategories: function loadCategories() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/categories/active", {
        params: {
          seller_id: this.seller_id
        }
      }).then(function (res) {
        _this.categoryOptions = res.data.data;
      });
    },
    onCategoryChange: function onCategoryChange() {
      this.pagination.current_page = 1;
      this.viewProducts(1);
    },
    searchProducts: function searchProducts() {
      this.pagination.current_page = 1;
      this.viewProducts(1);
    },
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.viewProducts(page);
    },
    viewProducts: function viewProducts() {
      var _this2 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products/variants", {
        params: {
          seller_id: this.seller_id,
          category_id: this.selectedCategory,
          search: this.keyword,
          page: page
        }
      }).then(function (res) {
        _this2.variants = res.data.data.data;
        _this2.pagination = {
          current_page: res.data.data.current_page,
          last_page: res.data.data.last_page,
          per_page: res.data.data.per_page,
          total: res.data.data.total
        };
      });
    },
    generateRequest: function generateRequest() {
      var _this3 = this;
      if (!this.selectedVariants.length) {
        alert("Please select at least one product");
        return;
      }
      var formData = new FormData();
      formData.append("seller_id", this.seller_id);
      formData.append("payment_date", this.form.payment_date);
      formData.append("payment_mode", this.form.payment_mode);
      formData.append("amount", this.form.amount);
      if (this.form.receipt) {
        formData.append("payment_receipt", this.form.receipt);
      }
      this.selectedVariants.forEach(function (item, index) {
        formData.append("products[".concat(index, "][product_id]"), item.product_id);
        formData.append("products[".concat(index, "][variant_id]"), item.variant_id);
        formData.append("products[".concat(index, "][quantity]"), 1);
        formData.append("products[".concat(index, "][price]"), item.price);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/purchase-order", formData).then(function () {
        _this3.$swal.fire("Success", "Request generated successfully", "success");
        _this3.resetForm();
        _this3.selectedVariants = [];
      })["catch"](function () {
        _this3.$swal.fire("Error", "Failed to generate request", "error");
      });
    },
    resetForm: function resetForm() {
      this.form = {
        payment_date: "",
        payment_mode: "",
        amount: "",
        receipt: null
      };
      this.selectedVariants = [];
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Seller/ProductOrderRequest.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/Seller/ProductOrderRequest.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductOrderRequest.vue?vue&type=template&id=6f996f9f */ "./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f");
/* harmony import */ var _ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductOrderRequest.vue?vue&type=script&lang=js */ "./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Seller/ProductOrderRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductOrderRequest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_6f996f9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductOrderRequest.vue?vue&type=template&id=6f996f9f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ProductOrderRequest.vue?vue&type=template&id=6f996f9f ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("label", [_vm._v("Amount Paid")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.amount,
                expression: "form.amount",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "number" },
            domProps: { value: _vm.form.amount },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "amount", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("label", [_vm._v("Payment Mode")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.payment_mode,
                expression: "form.payment_mode",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.form.payment_mode },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "payment_mode", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("label", [_vm._v("Payment Date")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.payment_date,
                expression: "form.payment_date",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "date" },
            domProps: { value: _vm.form.payment_date },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "payment_date", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("label", [_vm._v("Payment Receipt")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "file" },
            on: { change: _vm.handleFile },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 mt-3" }, [
          _c("label", [_vm._v("Category")]),
          _vm._v(" "),
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
                  _vm.onCategoryChange,
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
                  { key: cat.id * 2, domProps: { value: cat.id } },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(cat.name) +
                        "\n                    "
                    ),
                  ]
                )
              }),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8 mt-3" }, [
          _c("label", [_vm._v("Search")]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
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
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
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
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-secondary",
                on: { click: _vm.searchProducts },
              },
              [_vm._v("\n                        🔍\n                    ")]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 mt-3" }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.variants, function (variant, index) {
                  return _c("tr", { key: variant.id * 1.2 }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        attrs: { type: "checkbox" },
                        on: {
                          change: function ($event) {
                            return _vm.onVariantChange($event, variant)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(variant.name))]),
                  ])
                }),
                _vm._v(" "),
                _vm.variants.length === 0
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center text-muted",
                          attrs: { colspan: "3" },
                        },
                        [
                          _vm._v(
                            "\n                                No products found\n                            "
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
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _vm.pagination.last_page > 1
            ? _c("nav", [
                _c(
                  "ul",
                  { staticClass: "pagination justify-content-center" },
                  [
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { disabled: _vm.pagination.current_page === 1 },
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                return _vm.changePage(
                                  _vm.pagination.current_page - 1
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                                Previous\n                            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.pages, function (page) {
                      return _c(
                        "li",
                        {
                          key: page,
                          staticClass: "page-item",
                          class: {
                            active: page === _vm.pagination.current_page,
                          },
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "page-link",
                              on: {
                                click: function ($event) {
                                  return _vm.changePage(page)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(page) +
                                  "\n                            "
                              ),
                            ]
                          ),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: {
                          disabled:
                            _vm.pagination.current_page ===
                            _vm.pagination.last_page,
                        },
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                return _vm.changePage(
                                  _vm.pagination.current_page + 1
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                                Next\n                            "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  2
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 mt-3" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-lg btn-primary",
              on: { click: _vm.generateRequest },
            },
            [_vm._v("\n                    Generate Request\n                ")]
          ),
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "page-heading" }, [
        _c("h3", [_vm._v("Product Order Request")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Select")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);