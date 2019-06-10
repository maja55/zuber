webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);





var _jsxFileName = "/Users/maja/code/ZuberSite/pages/index.js";





var Homepage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Homepage, _Component);

  function Homepage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Homepage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Homepage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Homepage, [{
    key: "render",
    value: function render() {
      var statistics = this.props.posts.statistics;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "intro__bg",
        src: "/static/svgs/zuber_desktop.svg",
        alt: "Zuber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "intro__image",
        src: "/static/images/zuber-intro@2x.png",
        alt: "Steven Zuber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      // fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?category=home', {
      //   method: 'get',
      //   mode: 'no-cors',
      // }).then((response) => {
      //   response.json().then((r) => ({ posts: r }))
      // }).catch(() => {
      //   return { posts: data.homepage }
      // })
      return {
        posts: _data_json__WEBPACK_IMPORTED_MODULE_8__.homepage
      };
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Homepage.propTypes = {
  posts: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({})
};
/* harmony default export */ __webpack_exports__["default"] = (Homepage); // unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

/***/ })

})
//# sourceMappingURL=index.js.26725eb169ae472bb1d6.hot-update.js.map