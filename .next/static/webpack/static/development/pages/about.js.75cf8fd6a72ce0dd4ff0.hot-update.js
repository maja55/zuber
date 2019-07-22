webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyImage */ "./components/LazyImage.js");
var _jsxFileName = "/Users/maja/code/ZuberSite/components/Post.js";







var Post = function Post(_ref) {
  var type = _ref.type,
      textColor = _ref.textColor,
      headings = _ref.headings,
      description = _ref.description,
      quotes = _ref.quotes,
      footnote = _ref.footnote,
      vectorImage = _ref.vectorImage,
      image = _ref.image;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["DataContext"]),
      heroImage = _useContext.heroImage;

  var renderHeadings = function renderHeadings() {
    return headings.map(function (h, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["Parallax"], {
        y: [10, -10],
        key: "post-h-".concat(type, "-").concat(i),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "t-6 ".concat(textColor || 't-gold'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, h));
    });
  };

  var renderDescriptions = function renderDescriptions() {
    return description.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: "post-p-".concat(type, "-").concat(i),
        className: "t-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, d);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post post--".concat(type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__heading".concat(type === 'hobby' ? '' : ' d-sm-none'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, renderHeadings()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, type !== 'hobby' && renderHeadings(), renderDescriptions(), quotes.map(function (q, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: "post-q-".concat(type, "-").concat(i),
      className: "t-9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, q);
  })), vectorImage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["Parallax"], {
    y: [-10, 10],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "post__image",
    src: vectorImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })) : type === 'passion' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: heroImage,
    baseClass: "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : image && image.imageS ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyImage__WEBPACK_IMPORTED_MODULE_5__["LazyParalexImage"], {
    y: [-10, 10],
    image: image,
    baseClass: "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }) : null), footnote && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__footnote t-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, footnote));
};

Post.defaultProps = {
  headings: [],
  description: [],
  quotes: []
};
Post.propTypes = {
  headings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  quotes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=about.js.75cf8fd6a72ce0dd4ff0.hot-update.js.map