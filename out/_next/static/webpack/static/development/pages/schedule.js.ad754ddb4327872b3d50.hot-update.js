webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./components/styles/PageContent.js":
/*!******************************************!*\
  !*** ./components/styles/PageContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mediaQueries */ "./utils/mediaQueries.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.js");



var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "PageContent",
  componentId: "ztu1mk-0"
})(["align-items:flex-start;background-color:", ";box-shadow:", ";color:", ";flex-direction:column;padding:2rem;width:", ";.heading{color:", ";display:block;font-family:", ";font-size:", ";margin-bottom:2rem;}img{display:inline-block;width:200px;}.rotate-", "{transform:rotate(", "deg);}", "{width:100vw;}"], _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].white, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].boxShadow, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].offBlack, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].maxContentWidth, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].lightSage, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].titleFont, _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].subheadFontSize, deg, deg, _utils_mediaQueries__WEBPACK_IMPORTED_MODULE_1__["tablet"]);
/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./pages/schedule.js":
/*!***************************!*\
  !*** ./pages/schedule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles_PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/PageContent */ "./components/styles/PageContent.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.js");
var _jsxFileName = "/Users/dangurney/Desktop/DanStuff/Dev/wedding/pages/schedule.js";




var Schedule = function Schedule() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Thursday Sept. 26"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/hairy-lemon-building.jpg",
    className: "rotate--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  // Colors
  offBlack: '#282828',
  sage: '#63796D',
  lightSage: '#8BA4A1',
  copper: '#C08162',
  offWhite: '#F8F6F4',
  white: '#FFFFFF',
  // Fonts
  titleFont: 'Dancing Script',
  // Cookie, Calligraffitti, Dancing Script
  bodyFont: 'Lato',
  // Font sizes
  titleFontSize: '4rem',
  subheadFontSize: '2.8rem',
  h3FontSize: '2rem',
  bodyFontSize: '1.3rem',
  // Page Dimensions
  maxContentWidth: '800px',
  // Effects
  boxShadow: '3px 18px 11px 0 rgba(0, 0, 0, 0.2)'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=schedule.js.ad754ddb4327872b3d50.hot-update.js.map