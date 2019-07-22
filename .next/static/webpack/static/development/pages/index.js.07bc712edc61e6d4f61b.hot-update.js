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
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");
/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LazyImage */ "./components/LazyImage.js");

var _jsxFileName = "/Users/maja/code/ZuberSite/components/Clubs.js";







var Clubs = function Clubs() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      labels = _useContext.labels,
      clubs = _useContext.clubs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(clubs.length - 1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeClub = _useState2[0],
      setActiveClub = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      fade = _useState4[0],
      setFade = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      transitionClass = _useState6[0],
      setTransitionClass = _useState6[1];

  var _onClick = function onClick(index) {
    if (fade) setFade(false);
    setTransitionClass('slide');
    setTimeout(function () {
      return setTransitionClass('');
    }, 500);
    setActiveClub(index);
  };

  var _clubs$activeClub = clubs[activeClub],
      name = _clubs$activeClub.name,
      coatOfArmsKey = _clubs$activeClub.coatOfArmsKey,
      startYear = _clubs$activeClub.startYear,
      endYear = _clubs$activeClub.endYear,
      position = _clubs$activeClub.position,
      playerNumber = _clubs$activeClub.playerNumber,
      gamesCount = _clubs$activeClub.gamesCount,
      goalsCount = _clubs$activeClub.goalsCount,
      assistsCount = _clubs$activeClub.assistsCount,
      backgroundImage = _clubs$activeClub.backgroundImage,
      playerImage = _clubs$activeClub.playerImage;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: labels.clubCareer,
    baseClass: "clubs",
    flexHeight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "clubs__menu t-7 t-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, clubs.map(function (_ref, index) {
    var name = _ref.name,
        startYear = _ref.startYear;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
      key: name,
      bottom: true,
      opposite: true,
      delay: index * 200,
      duration: 200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "clubs__menu-item cta-hover".concat(index === activeClub ? ' active t-light' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return _onClick(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, startYear, " - ", name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club-bg ".concat(transitionClass).concat(fade ? '' : ' hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LazyImage__WEBPACK_IMPORTED_MODULE_6__["LazyFadeImage"], {
    baseClass: "club-bg",
    alt: "".concat(name, " Stadium"),
    image: backgroundImage,
    revealProps: {
      delay: 1000
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    bottom: true,
    opposite: true,
    cascade: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__copy t-3 ".concat(transitionClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, startYear, "-", endYear), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, position, " #", playerNumber)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club__bottom ".concat(transitionClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    bottom: true,
    opposite: true,
    delay: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "club__logo",
    src: "/static/svgs/".concat(coatOfArmsKey, ".svg"),
    alt: "".concat(name, " Coat of Arms"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    baseClass: "club",
    revealProps: {
      delay: 700,
      disabled: !fade
    },
    isVertical: true,
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
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "club-player ".concat(transitionClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LazyImage__WEBPACK_IMPORTED_MODULE_6__["LazyFadeImage"], {
    baseClass: "club-top",
    alt: "Steven Zuber in ".concat(name),
    image: playerImage,
    revealProps: {
      delay: 700
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clubs);

/***/ })

})
//# sourceMappingURL=index.js.07bc712edc61e6d4f61b.hot-update.js.map