"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Seller_StockManager_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StockManager",
  data: function data() {
    return {
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user,
      seller_id: null,
      assignedProducts: [],
      isLoading: false
    };
  },
  created: function created() {
    this.login_user = _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user;
    if (this.login_user && this.login_user.role_id === 3) {
      // seller
      this.seller_id = this.login_user.id;
      this.loadAssignedProducts();
    }
  },
  methods: {
    loadAssignedProducts: function loadAssignedProducts() {
      var _this = this;
      if (!this.seller_id) return;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/products/seller_assigned_variants", {
        params: {
          seller_id: this.seller_id,
          assigned: true
        }
      }).then(function (res) {
        _this.assignedProducts = res.data.data || [];
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Seller/StockManager.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Seller/StockManager.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockManager.vue?vue&type=template&id=23ecb398 */ "./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398");
/* harmony import */ var _StockManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockManager.vue?vue&type=script&lang=js */ "./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StockManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__.render,
  _StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Seller/StockManager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockManager.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockManager_vue_vue_type_template_id_23ecb398__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockManager.vue?vue&type=template&id=23ecb398 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/StockManager.vue?vue&type=template&id=23ecb398 ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "page-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-6 order-md-1 order-last" }, [
          _c("h3", [_vm._v(_vm._s(_vm.__("stock_management")))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-6 order-md-2 order-first" }, [
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
                  [_vm._v(_vm._s(_vm.__("stock_management")))]
                ),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
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
                        _c("td", [_vm._v(_vm._s(prod.stock))]),
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