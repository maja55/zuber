webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountBar.js":
/*!********************************!*\
  !*** ./components/CountBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/maja/code/ZuberSite/components/CountBar.js";


var CountBar = function CountBar(_ref) {
  var baseClass = _ref.baseClass,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count-bar ".concat(baseClass, "__count-bar"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, items.map(function (_ref2) {
    var count = _ref2.count,
        labelTop = _ref2.labelTop,
        labelBottom = _ref2.labelBottom;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count-bar__item",
      key: count,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count-bar__count t-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count-bar__label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, labelTop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, labelBottom)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountBar);

/***/ })

})
//# sourceMappingURL=index.js.b8de619960fe3bfaf093.hot-update.js.map