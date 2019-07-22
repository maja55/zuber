webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Statistics.js";





var Statistics = function Statistics() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["DataContext"]),
      labels = _useContext.labels,
      statistics = _useContext.statistics;

  var image = statistics.image,
      totalGamesCount = statistics.totalGamesCount,
      totalGoalsCount = statistics.totalGoalsCount,
      totalAssistsCount = statistics.totalAssistsCount,
      totalTrophiesCount = statistics.totalTrophiesCount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: labels.statistics,
    baseClass: "statistics",
    name: "statistics",
    flexHeight: true,
    observeIntersection: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref) {
    var reveal = _ref.reveal,
        scrollUp = _ref.scrollUp;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      left: true,
      opposite: true,
      when: reveal,
      mirror: scrollUp,
      duration: 500,
      distance: "1000px",
      delay: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "statistics__image",
      srcSet: "\n                                ".concat(image.imageS, " 768w,\n                                ").concat(image.imageM, " 1200w,\n                                ").concat(image.imageL, " 1440w,\n                            "),
      sizes: "(max-width: 768px) 700px, (max-width: 1200px) 1000px, 1440px",
      src: image.imageL,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "statistics__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-left t-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      bottom: true,
      opposite: true,
      delay: 50,
      duration: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-left__top t-6 t-outline t-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, labels.played)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-left__bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      bottom: true,
      opposite: true,
      delay: 100,
      duration: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, totalGamesCount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      bottom: true,
      opposite: true,
      delay: 300,
      duration: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, labels.games)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-right t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      bottom: true,
      opposite: true,
      cascade: true,
      delay: reveal ? 500 : 200,
      duration: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-right__row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-6 t-outline t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, labels.scored), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, totalGoalsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, " ", labels.goals))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-right__row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-6 t-outline t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, labels.won), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, totalTrophiesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " ", labels.trophies))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-right__row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-6 t-outline t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, labels.made), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, totalAssistsCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " ", labels.assists)))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=index.js.51ac3259985db027bb69.hot-update.js.map