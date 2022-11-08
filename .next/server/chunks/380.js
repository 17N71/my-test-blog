exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 9123:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__9tXVr"
};


/***/ }),

/***/ 8702:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__mh5OI",
	"titleSmall": "Title_titleSmall__rhYKO",
	"titleMedium": "Title_titleMedium___7g9U"
};


/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9123);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ className , onClick , disabled , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        disabled: disabled,
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 7045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8702);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Title = ({ children , className ="" , type  })=>{
    if (type == "small") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titleSmall)),
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titleMedium)),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 5018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$V": () => (/* binding */ clientConfig),
/* harmony export */   "Lp": () => (/* binding */ client),
/* harmony export */   "uH": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_1__);


const clientConfig = {
    projectId: "d7kzve6t",
    dataset: "production"
};
const client = _sanity_client__WEBPACK_IMPORTED_MODULE_1___default()({
    projectId: "d7kzve6t",
    dataset: "production",
    apiVersion: "2022-11-08",
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(client);
const urlFor = (source)=>builder.image(source);


/***/ })

};
;