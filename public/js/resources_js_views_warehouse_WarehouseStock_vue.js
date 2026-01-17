"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_warehouse_WarehouseStock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
      stock_added: 0,
      pagination: {
        current_page: 1,
        last_page: 0,
        // 👈 IMPORTANT
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
    this.warehouse_id = this.$route.params.id;
    this.loadCategories();
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
      })["catch"](function () {});
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
        _this2.variants = res.data.data.data;
        _this2.pagination.current_page = res.data.data.current_page;
        _this2.pagination.last_page = res.data.data.last_page;
        _this2.pagination.per_page = res.data.data.per_page;
        _this2.pagination.total = res.data.data.total;
      })["catch"](function () {});
    },
    saveStock: function saveStock(variant) {
      var _this3 = this;
      // ✅ correct validation
      if (!variant.stock_added || variant.stock_added < 1) {
        this.$swal.fire("Error", "Stock should be greater than 0", "error");
        return;
      }
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.$apiUrl + "/products/add-stock", {
        date: new Date().toISOString().slice(0, 10),
        type: 'add',
        product_id: variant.product_id,
        variant_id: variant.id,
        stock_added: variant.stock_added,
        // ✅ FIX
        stockable_type: 'App\\Models\\Warehouse',
        stockable_id: this.warehouse_id,
        base_unit_price: variant.discounted_price
      }).then(function (response) {
        if (response.data.status) {
          // ✅ update UI stock
          variant.stock += variant.stock_added;

          // ✅ reset input
          variant.stock_added = 0;
          _this3.$swal.fire("Success", "Stock added successfully", "success");
        }
      })["catch"](function (error) {
        console.error(error.response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/warehouse/WarehouseStock.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/warehouse/WarehouseStock.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WarehouseStock.vue?vue&type=template&id=9fab6504 */ "./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504");
/* harmony import */ var _WarehouseStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WarehouseStock.vue?vue&type=script&lang=js */ "./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WarehouseStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__.render,
  _WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/warehouse/WarehouseStock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WarehouseStock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseStock_vue_vue_type_template_id_9fab6504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WarehouseStock.vue?vue&type=template&id=9fab6504 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/WarehouseStock.vue?vue&type=template&id=9fab6504 ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-12 mb-5" }, [
          _c("div", { staticClass: "page-heading" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-6 order-md-2 order-first" },
                [
                  _c(
                    "nav",
                    {
                      staticClass: "breadcrumb-header float-start float-lg-end",
                      attrs: { "aria-label": "breadcrumb" },
                    },
                    [
                      _c("ol", { staticClass: "breadcrumb" }, [
                        _c(
                          "li",
                          { staticClass: "breadcrumb-item" },
                          [
                            _c("router-link", { attrs: { to: "/dashboard" } }, [
                              _vm._v(_vm._s(_vm.__("dashboard"))),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass: "breadcrumb-item active",
                            attrs: { "aria-current": "page" },
                          },
                          [
                            _vm._v(
                              "Manage Warehouse Stock\n                                    "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "w-full" }, [
              _c("div", { staticClass: "input-group" }, [
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
                    attrs: {
                      name: "selected_category",
                      id: "selected_category",
                    },
                    on: {
                      change: function ($event) {
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
                    },
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select Category"),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.categoryOptions, function (category) {
                      return _c(
                        "option",
                        { key: category.id, domProps: { value: category.id } },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(category.name) +
                              "\n                                "
                          ),
                        ]
                      )
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: { click: _vm.viewProducts },
                  },
                  [
                    _vm._v(
                      "\n                                View Products\n                            "
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-7" }, [
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
                attrs: {
                  type: "text",
                  name: "keyword",
                  id: "keyword",
                  placeholder: "Search product",
                },
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
                  staticClass: "btn p-2 bg-white",
                  on: { click: _vm.searchProducts },
                },
                [
                  _c("i", {
                    staticClass: "fa fa-search",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(1),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-span-12" }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.variants, function (variant, index) {
                return _c("tr", { key: variant.product_variant_id }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(variant.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                " +
                        _vm._s(variant.stock) +
                        "\n                            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: variant.stock_added,
                            expression: "variant.stock_added",
                            modifiers: { number: true },
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", placeholder: "Add stock" },
                        domProps: { value: variant.stock_added },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              variant,
                              "stock_added",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function ($event) {
                            return _vm.$forceUpdate()
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function ($event) {
                              return _vm.saveStock(variant)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                                        Update\n                                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(3, true),
                    ]),
                  ]),
                ])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-100" }, [
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
                          class: {
                            disabled: _vm.pagination.current_page === 1,
                          },
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "page-link",
                              attrs: {
                                disabled: _vm.pagination.current_page === 1,
                              },
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
                                "\n                                    Previous\n                                "
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
                                  "\n                                    " +
                                    _vm._s(page) +
                                    "\n                                "
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
                              attrs: {
                                disabled:
                                  _vm.pagination.current_page ===
                                  _vm.pagination.last_page,
                              },
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
                                "\n                                    Next\n                                "
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
    return _c("div", { staticClass: "col-12 col-md-6 order-md-1 order-last" }, [
      _c("h3", [_vm._v(" Manage Warehouse Stock")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "w-full text-end" }, [
        _c("button", { staticClass: "btn btn-info" }, [
          _c("i", {
            staticClass: "fa fa-file-excel-o",
            attrs: { "aria-hidden": "true" },
          }),
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
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stock Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-success" }, [
      _c("i", { staticClass: "fa fa-file-excel-o" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);