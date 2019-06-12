webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clubs.js":
/*!*****************************!*\
  !*** ./components/Clubs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");

var _jsxFileName = "/Users/maja/code/ZuberSite/components/Clubs.js";






var Clubs = function Clubs() {
  var labels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["DataContext"]),
      clubs = _useContext.clubs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeClub = _useState2[0],
      setActiveClub = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: labels.clubCareer,
    baseClass: "clubs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "clubs__menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, clubs.map(function (_ref, index) {
    var club = _ref.club,
        startYear = _ref.startYear;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "clubs__menu-item cta-hover".concat(index === activeClub ? ' active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return setActiveClub(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, startYear, " - ", club));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svgs/swiss-club.svg",
    alt: "Swiss National Team Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, clubs.copy)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseClase: "club",
    imageS: clubs.imageS,
    imageM: clubs.imageM,
    imageL: clubs.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__bottom t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "t-3 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, clubs.startYear, "-", clubs.endYear), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, clubs.position, " #", clubs.playerNumber))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 39
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Clubs);

/***/ })

})
//# sourceMappingURL=index.js.01f6b1e4a0315b91ab75.hot-update.js.map