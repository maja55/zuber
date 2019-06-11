webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Image.js";


var Image = function Image(_ref) {
  var baseClase = _ref.baseClase,
      imageS = _ref.imageS,
      imageM = _ref.imageM,
      imageL = _ref.imageL,
      alt = _ref.alt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "".concat(baseClase, "__image"),
    srcSet: "\n            ".concat(imageS, " 768w,\n            ").concat(imageM, " 1200w,\n            ").concat(imageL, " 1440w,\n        "),
    sizes: "(max-width: 768px) 700px, (max-width: 1200px) 1000px, 1440px",
    src: imageL,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/Statistics.js":
/*!**********************************!*\
  !*** ./components/Statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Statistics.js";





var Statistics = function Statistics() {
  var labels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["DataContext"]),
      statistics = _useContext.statistics;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: labels.statistics,
    baseClase: "statistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseClase: "statistics",
    imageS: statistics.imageS,
    imageM: statistics.imageM,
    imageL: statistics.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "statistics__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-left t-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-left__top t-6 t-outline t-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, labels.played), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-left__bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, statistics.totalGamesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, labels.games))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-right t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-right__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-6 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, labels.scored), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, statistics.totalGoalsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " ", labels.goals))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-right__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-6 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, labels.won), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, statistics.totalTrophiesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " ", labels.trophies))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat-right__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-6 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, labels.made), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, statistics.totalAssistsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " ", labels.assists))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=index.js.2e9ad91e6defb4a0dd14.hot-update.js.map