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
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _CountBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountBar */ "./components/CountBar.js");
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: labels.internationalCareer,
    baseClase: "fifa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fifa__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fifa__top t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3 t-outline t-gold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, label.fifaWorldCup, " 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, label.statistics)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fifa__copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, fifa.copy), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    baseClase: "fifa",
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
      labelBottom: labels.scores
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    baseClase: "fifa",
    imageS: fifa.imageS,
    imageM: fifa.imageM,
    imageL: fifa.imageL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Fifa);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_Statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Statistics */ "./components/Statistics.js");
/* harmony import */ var _components_NationalTeam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NationalTeam */ "./components/NationalTeam.js");
/* harmony import */ var _components_Fifa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Fifa */ "./components/Fifa.js");


var _jsxFileName = "/Users/maja/code/ZuberSite/pages/index.js";









var Homepage = function Homepage(_ref) {
  var data = _ref.data,
      labels = _ref.labels;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bg-dark t-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "intro__image",
    src: "/static/images/zuber-intro@2x.png",
    alt: "Steven Zuber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "intro__logo",
    src: "/static/svgs/lion.svg",
    alt: "Zuber Coat Of Arms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Statistics__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NationalTeam__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Fifa__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: labels.clubCareer,
    baseClase: "clubs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

Homepage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            data: _data_json__WEBPACK_IMPORTED_MODULE_5__.homepage,
            labels: _data_json__WEBPACK_IMPORTED_MODULE_5__.labels
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Homepage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({})
};
/* harmony default export */ __webpack_exports__["default"] = (Homepage); // unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

/***/ })

})
//# sourceMappingURL=index.js.07789341a17deb83997e.hot-update.js.map