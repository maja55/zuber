webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clubs.js":
/*!*****************************!*\
  !*** ./components/Clubs.js ***!
  \*****************************/
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
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Clubs.js";






var Clubs = function Clubs() {
  var labels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["DataContext"]),
      clubs = _useContext.clubs;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: labels.clubCareer,
    baseClass: "clubs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "club__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "club__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/svgs/swiss-club.svg",
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
  }, clubs.copy)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    baseClase: "club",
    imageS: clubs.imageS,
    imageM: clubs.imageM,
    imageL: clubs.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "club__bottom t-gold",
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
  }, clubs.startYear, "-", clubs.endYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, clubs.position, " #", clubs.playerNumber))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    baseClass: "club",
    items: [{
      count: clubs.gamesCount,
      labelTop: labels.games,
      labelBottom: labels.played
    }, {
      count: clubs.goalsCount,
      labelTop: labels.goals,
      labelBottom: labels.scored
    }, {
      count: clubs.assistsCount,
      labelTop: labels.goal,
      labelBottom: labels.assists
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Clubs);

/***/ })

})
//# sourceMappingURL=index.js.4e189c0970a44d9af17d.hot-update.js.map