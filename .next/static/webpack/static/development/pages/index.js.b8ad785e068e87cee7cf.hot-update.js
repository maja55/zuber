webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Fifa.js":
/*!****************************!*\
  !*** ./components/Fifa.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Fifa.js";




var data = {
  minutes: 253,
  games: 3,
  goals: 1
};

var Fifa = function Fifa() {
  var labels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["DataContext"]),
      fifa = _useContext.fifa;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "fifa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fifa__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fifa__top t-gold t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, labels.fifaWorldCup, " 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, labels.statistics)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    baseClase: "fifa",
    imageS: fifa.imageS,
    imageM: fifa.imageM,
    imageL: fifa.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fifa__copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, fifa.copy), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseClass: "fifa",
    items: [{
      count: data.minutes,
      labelTop: labels.minutes,
      labelBottom: labels.played
    }, {
      count: data.games,
      labelTop: labels.games,
      labelBottom: labels.played
    }, {
      count: data.goals,
      labelTop: labels.goal,
      labelBottom: labels.scored
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Fifa);

/***/ })

})
//# sourceMappingURL=index.js.b8ad785e068e87cee7cf.hot-update.js.map