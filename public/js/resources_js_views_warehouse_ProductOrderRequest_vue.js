"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_warehouse_ProductOrderRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VerifyProductOrderRequestByAdmin",
  methods: {
    openProductModal: function openProductModal() {
      var modal = new bootstrap.Modal(document.getElementById("productModal"));
      modal.show();
    },
    openActionModal: function openActionModal() {
      var modal = new bootstrap.Modal(document.getElementById("actionModal"));
      modal.show();
    },
    handleRequest: function handleRequest(status) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/admin/verify-product-order", {
        status: status,
        // approve | reject
        order_id: 1
      }, {
        headers: {
          Authorization: "Bearer ".concat(_Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].getToken())
        }
      }).then(function () {
        alert("Request ".concat(status, "ed successfully"));
        bootstrap.Modal.getInstance(document.getElementById("actionModal")).hide();
      })["catch"](function () {
        alert("Something went wrong");
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/warehouse/ProductOrderRequest.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/warehouse/ProductOrderRequest.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductOrderRequest.vue?vue&type=template&id=685c6a15 */ "./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15");
/* harmony import */ var _ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductOrderRequest.vue?vue&type=script&lang=js */ "./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/warehouse/ProductOrderRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductOrderRequest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductOrderRequest_vue_vue_type_template_id_685c6a15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductOrderRequest.vue?vue&type=template&id=685c6a15 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/warehouse/ProductOrderRequest.vue?vue&type=template&id=685c6a15 ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-12" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("1")]),
                _vm._v(" "),
                _c("td", [_vm._v("Sandeep Bhiya")]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-link text-decoration-underline",
                      on: { click: _vm.openProductModal },
                    },
                    [
                      _vm._v(
                        "\n                                    View Product Request\n                                "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                                Pending\n                            "
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                                Pending\n                            "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-sm btn-success",
                        attrs: {
                          to: {
                            name: "AddToCartForSeller",
                            params: { sellerId: 1 },
                          },
                        },
                      },
                      [
                        _c("i", { staticClass: "fa fa-shopping-cart" }),
                        _vm._v(" Add Stock\n                                "),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "actionModal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function ($event) {
                      return _vm.handleRequest("approve")
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                        Submit\n                    "
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]
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
        _c("th", [_vm._v("Sr No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Seller")]),
        _vm._v(" "),
        _c("th", [_vm._v("Note")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Admin Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("p", [
        _vm._v(
          "\n                                    Give total product category wise and some accessories\n                                "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "productModal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v("Product Request Details"),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "data-bs-dismiss": "modal" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [
                _c("strong", [_vm._v("Product Name:")]),
                _vm._v(" Sample Product"),
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Category:")]),
                _vm._v(" Electronics"),
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Description:")]),
                _vm._v(" Product description goes here."),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Verify Product Order"),
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: { type: "button", "data-bs-dismiss": "modal" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Do you want to approve or reject this request?")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Select Status")]),
        _vm._v(" "),
        _c(
          "select",
          { staticClass: "form-select", attrs: { name: "", id: "" } },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Approve")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v("Reject")]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Enter Notes")]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: { name: "", id: "" },
        }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);