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
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyImage */ "./components/LazyImage.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/NationalTeam.js";








var NationalTeam = function NationalTeam() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      nationalTeam = _useContext.nationalTeam,
      labels = _useContext.labels;

  var copy = nationalTeam.copy,
      image = nationalTeam.image,
      imageBw = nationalTeam.imageBw,
      assistsCount = nationalTeam.assistsCount,
      gamesCount = nationalTeam.gamesCount,
      goalsCount = nationalTeam.goalsCount,
      startYear = nationalTeam.startYear,
      endYear = nationalTeam.endYear,
      playerNumber = nationalTeam.playerNumber,
      position = nationalTeam.position;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: labels.internationalCareer,
    baseClass: "national-team",
    name: "career",
    observeIntersection: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (_ref) {
    var reveal = _ref.reveal;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
      bottom: true,
      opposite: true,
      cascade: true,
      delay: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "national-team__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "national-team__top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/svgs/swiss-national-team.svg",
      alt: "Swiss National Team Logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, copy)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "national-team__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
      height: 200,
      offset: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      baseClass: "national-team",
      image: image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      baseClass: "national-team",
      classAddition: "national-team__bw".concat(reveal ? ' fadeOut' : ''),
      image: imageBw,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "national-team__bottom t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-3 t-outline t-gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, startYear, "-", endYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "t-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, position, " #", playerNumber)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      baseClass: "national-team",
      items: [{
        count: gamesCount,
        labelTop: labels.games,
        labelBottom: labels.played
      }, {
        count: goalsCount,
        labelTop: labels.goals,
        labelBottom: labels.scored
      }, {
        count: assistsCount,
        labelTop: labels.goal,
        labelBottom: labels.assists
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NationalTeam);

/***/ })

})
//# sourceMappingURL=index.js.62c229f477c8df5fe149.hot-update.js.map