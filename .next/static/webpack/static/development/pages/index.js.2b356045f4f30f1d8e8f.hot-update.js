webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NationalTeam.js":
/*!************************************!*\
  !*** ./components/NationalTeam.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/NationalTeam.js";






var NationalTeam = function NationalTeam() {
  var labels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["DataContext"]),
      nationalTeam = _useContext.nationalTeam;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: labels.internationalCareer,
    baseClase: "national-team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "national-team__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "national-team__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/svgs/swiss-national-team",
    alt: "Swiss National Team Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, nationalTeam.copy)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    baseClase: "national-team",
    imageS: nationalTeam.imageS,
    imageM: nationalTeam.imageM,
    imageL: nationalTeam.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "national-team__bottom t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, nationalTeam.startYear, "-", nationalTeam.endYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, nationalTeam.position, " #", nationalTeam.playerNumber)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    baseClase: "national-team",
    items: [{
      count: nationalTeam.gamesCount,
      labelTop: labels.games,
      labelBottom: labels.played
    }, {
      count: nationalTeam.goalsCount,
      labelTop: labels.goals,
      labelBottom: labels.scored
    }, {
      count: nationalTeam.assistsCount,
      labelTop: labels.goal,
      labelBottom: labels.assists
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NationalTeam);

/***/ })

})
//# sourceMappingURL=index.js.2b356045f4f30f1d8e8f.hot-update.js.map