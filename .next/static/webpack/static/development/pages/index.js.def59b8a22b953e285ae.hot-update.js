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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeClub = _useState2[0],
      setActiveClub = _useState2[1];

  var labels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["LabelsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["DataContext"]),
      clubs = _useContext.clubs;

  var club = clubs[activeClub];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: labels.clubCareer,
    baseClass: "clubs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "clubs__menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, clubs.map(function (_ref, index) {
    var name = _ref.name,
        startYear = _ref.startYear;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "clubs__menu-item cta-hover".concat(index === activeClub ? ' active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return setActiveClub(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, startYear, " - ", name));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__top t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseClase: "club-bg",
    alt: "".concat(club.name, " Stadium"),
    imageS: club.backgroundImageS,
    imageM: club.backgroundImageM,
    imageL: club.backgroundImageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, club.name), club.addition && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, club.addition), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, club.startYear, "-", club.endYear), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, club.position, " #", club.playerNumber)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseClase: "club-top",
    alt: "Steven Zuber in ".concat(club.name),
    imageS: club.imageS,
    imageM: club.imageM,
    imageL: club.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__bottom t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svgs/".concat(club.coatOfArmsKey, ".svg"),
    alt: "".concat(club.name, " Coat of Arms"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    baseClass: "club",
    items: [{
      count: club.gamesCount,
      labelTop: labels.games,
      labelBottom: labels.played
    }, {
      count: club.goalsCount,
      labelTop: labels.goals,
      labelBottom: labels.scored
    }, {
      count: club.assistsCount,
      labelTop: labels.goal,
      labelBottom: labels.assists
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clubs);

/***/ })

})
//# sourceMappingURL=index.js.def59b8a22b953e285ae.hot-update.js.map