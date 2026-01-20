"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Seller_ListProductOrderRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      requests: [],
      seller_id: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.id,
      // pagination
      currentPage: 1,
      perPage: 10,
      total: 0,
      lastPage: 1
    };
  },
  computed: {
    paginatedRequests: function paginatedRequests() {
      var start = (this.currentPage - 1) * this.perPage;
      return this.requests.slice(start, start + this.perPage);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.requests.length / this.perPage);
    }
  },
  mounted: function mounted() {
    this.fetchRequests();
  },
  methods: {
    fetchRequests: function fetchRequests() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      this.currentPage = page;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiUrl + "/purchase-order", {
        params: {
          seller_id: seller_id,
          page: this.currentPage,
          per_page: this.perPage
        }
      }).then(function (res) {
        // Laravel paginator response
        _this.requests = res.data.data.data || [];
        _this.total = res.data.data.total;
        _this.lastPage = res.data.data.last_page;
      })["catch"](function () {
        _this.requests = [];
      })["finally"](function () {
        _this.loading = false;
      });
    },
    receiptUrl: function receiptUrl(path) {
      return "".concat(this.$baseUrl, "/storage/").concat(path);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Seller/ListProductOrderRequest.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/Seller/ListProductOrderRequest.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe */ "./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe");
/* harmony import */ var _ListProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListProductOrderRequest.vue?vue&type=script&lang=js */ "./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__.render,
  _ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Seller/ListProductOrderRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListProductOrderRequest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductOrderRequest_vue_vue_type_template_id_b6d33cbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Seller/ListProductOrderRequest.vue?vue&type=template&id=b6d33cbe ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row mb-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c(
            "div",
            { staticClass: "w-full text-end" },
            [
              _c(
                "router-link",
                { attrs: { to: "/seller/product-order-request/create" } },
                [
                  _vm._v(
                    "\n                        Create New Request\n                    "
                  ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "text-center" }, [
            _c("p", [_vm._v("Loading requests...")]),
          ])
        : !_vm.requests.length
        ? _c("div", { staticClass: "text-center" }, [
            _c("p", [_vm._v("No purchase order requests found.")]),
          ])
        : _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered table-striped" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.requests, function (item, index) {
                  return _c("tr", { key: item.id }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(item.seller ? item.seller.name : "N/A")),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.payment_date))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.payment_mode))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "badge bg-warning" }, [
                        _vm._v(_vm._s(item.admin_status)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "badge bg-info" }, [
                        _vm._v(_vm._s(item.order_status)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      item.payment_receipt
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href: _vm.receiptUrl(item.payment_receipt),
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                "\n                                View\n                            "
                              ),
                            ]
                          )
                        : _c("span", [_vm._v("-")]),
                    ]),
                  ])
                }),
                0
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
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "page-heading" }, [
        _c("h3", [_vm._v("List of Product Order Requests")]),
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
        _c("th", [_vm._v("Seller")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Mode")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Receipt")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);