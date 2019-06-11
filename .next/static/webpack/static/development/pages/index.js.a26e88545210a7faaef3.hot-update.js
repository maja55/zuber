webpackHotUpdate("static/development/pages/index.js",{

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


var _jsxFileName = "/Users/maja/code/ZuberSite/pages/index.js";







var Homepage = function Homepage(_ref) {
  var data = _ref.data,
      labels = _ref.labels;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bg-dark t-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "intro__image",
    src: "/static/images/zuber-intro@2x.png",
    alt: "Steven Zuber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "intro__logo",
    src: "/static/svgs/lion.svg",
    alt: "Zuber Coat Of Arms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Statistics__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: labels.internationalCareer,
    baseClase: "national",
    images: {
      small: "/static/images/swiss-national-team-img.jpg",
      medium: "/static/images/swiss-national-team-img.jpg",
      large: "/static/images/swiss-national-team-img.jpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseClase: "fifa",
    images: {
      small: "/static/images/zuber-vs-brazil-goal-img.jpg",
      medium: "/static/images/zuber-vs-brazil-goal-img.jpg",
      large: "/static/images/zuber-vs-brazil-goal-img.jpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: labels.clubCareer,
    baseClase: "clubs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
//# sourceMappingURL=index.js.a26e88545210a7faaef3.hot-update.js.map