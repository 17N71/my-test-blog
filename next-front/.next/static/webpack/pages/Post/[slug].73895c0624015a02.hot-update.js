"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Post/[slug]",{

/***/ "./pages/Post/[slug].js":
/*!******************************!*\
  !*** ./pages/Post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Article_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/Article/Article */ \"./components/Article/Article.jsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.scss */ \"./pages/Post/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Title_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Title/index */ \"./components/Title/index.jsx\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Content */ \"./components/Content/index.jsx\");\n/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Button/index */ \"./components/Button/index.jsx\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nconst Post = (param)=>{\n    let { post  } = param;\n    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(post.publishedDate), \"dd MMM yy\");\n    const router = next_router__WEBPACK_IMPORTED_MODULE_7___default()();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article_Article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().post),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>router.back(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_6__.AiOutlineArrowLeft, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().postTitle),\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().postDate),\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                body: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Post;\nvar __N_SSP = true;\n// Static Side Generation\n// export async function getStaticPaths() {\n// \tconst query = `*[type == \"post\"]{\n// \t\tslug{\n// \t\t\tcurrent\n// \t\t}\n// \t}`;\n// \tconst posts = await client.fetch(query);\n// \tconst paths = posts.map(post => ({\n// \t\tparams: post.slug.current,\n// \t}));\n// \treturn {\n// \t\tpaths,\n// \t\tfallback: 'blocking',\n// \t};\n// }\n// export async function getStaticProps(context) {\n// \tconst query = `*[_type == \"post\" && slug.current == '${context.params.slug}'][0] `;\n// \tconst post = await client.fetch(query);\n// \treturn {\n// \t\tprops: {\n// \t\t\tpost,\n// \t\t},\n// \t};\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMrQjtBQUV2QjtBQUNPO0FBQ1U7QUFDSjtBQUNNO0FBQ0o7QUFDaEI7QUFDakMsTUFBTVMsT0FBTyxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFO0lBQ3JCLE1BQU1DLE9BQU9ULGdEQUFNQSxDQUFDLElBQUlVLEtBQUtGLEtBQUtHLGFBQWEsR0FBRztJQUNsRCxNQUFNQyxTQUFTTixrREFBTUE7SUFDckIscUJBQ0MsOERBQUNQLG1FQUFPQTtRQUFDYyxXQUFXWixnRUFBVzs7MEJBQzlCLDhEQUFDRyxnRUFBTUE7Z0JBQUNVLFNBQVMsSUFBTUYsT0FBT0csSUFBSTswQkFDakMsNEVBQUNWLDJEQUFrQkE7Ozs7Ozs7Ozs7MEJBRXBCLDhEQUFDSCwrREFBS0E7Z0JBQUNXLFdBQVdaLHFFQUFnQjswQkFBR08sS0FBS1MsS0FBSzs7Ozs7OzBCQUMvQyw4REFBQ0M7Z0JBQUVMLFdBQVdaLG9FQUFlOzBCQUFHUTs7Ozs7OzBCQUNoQyw4REFBQ04sMkRBQU9BO2dCQUFDaUIsTUFBTVosS0FBS1ksSUFBSTs7Ozs7Ozs7Ozs7O0FBRzNCO0tBYk1iOztBQTBCTix5QkFBeUI7QUFFekIsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQyxVQUFVO0FBQ1YsYUFBYTtBQUNiLE1BQU07QUFDTixPQUFPO0FBQ1AsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLFlBQVk7QUFDWixXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLE1BQU07QUFDTixJQUFJO0FBQ0osa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RiwyQ0FBMkM7QUFDM0MsWUFBWTtBQUNaLGFBQWE7QUFDYixXQUFXO0FBQ1gsT0FBTztBQUNQLE1BQU07QUFDTixJQUFJO0FBQ0osK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9zdC9bc2x1Z10uanM/MTk4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlJztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9UaXRsZS9pbmRleCc7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuXHRjb25zdCBkYXRlID0gZm9ybWF0KG5ldyBEYXRlKHBvc3QucHVibGlzaGVkRGF0ZSksICdkZCBNTU0geXknKTtcclxuXHRjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XHJcblx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcblx0XHRcdFx0PEFpT3V0bGluZUFycm93TGVmdCAvPlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUaXRsZX0+e3Bvc3QudGl0bGV9PC9UaXRsZT5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdERhdGV9PntkYXRlfTwvcD5cclxuXHRcdFx0PENvbnRlbnQgYm9keT17cG9zdC5ib2R5fSAvPlxyXG5cdFx0PC9BcnRpY2xlPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7Y29udGV4dC5wYXJhbXMuc2x1Z30nXVswXSBgO1xyXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRwb3N0LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG4vLyBTdGF0aWMgU2lkZSBHZW5lcmF0aW9uXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vIFx0Y29uc3QgcXVlcnkgPSBgKlt0eXBlID09IFwicG9zdFwiXXtcclxuLy8gXHRcdHNsdWd7XHJcbi8vIFx0XHRcdGN1cnJlbnRcclxuLy8gXHRcdH1cclxuLy8gXHR9YDtcclxuLy8gXHRjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcbi8vIFx0Y29uc3QgcGF0aHMgPSBwb3N0cy5tYXAocG9zdCA9PiAoe1xyXG4vLyBcdFx0cGFyYW1zOiBwb3N0LnNsdWcuY3VycmVudCxcclxuLy8gXHR9KSk7XHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gXHRcdHBhdGhzLFxyXG4vLyBcdFx0ZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbi8vIFx0fTtcclxuLy8gfVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4vLyBcdGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke2NvbnRleHQucGFyYW1zLnNsdWd9J11bMF0gYDtcclxuLy8gXHRjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cHJvcHM6IHtcclxuLy8gXHRcdFx0cG9zdCxcclxuLy8gXHRcdH0sXHJcbi8vIFx0fTtcclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpY2xlIiwiZm9ybWF0Iiwic3R5bGVzIiwiVGl0bGUiLCJDb250ZW50IiwiQnV0dG9uIiwiQWlPdXRsaW5lQXJyb3dMZWZ0IiwiUm91dGVyIiwiUG9zdCIsInBvc3QiLCJkYXRlIiwiRGF0ZSIsInB1Ymxpc2hlZERhdGUiLCJyb3V0ZXIiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYmFjayIsInBvc3RUaXRsZSIsInRpdGxlIiwicCIsInBvc3REYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Post/[slug].js\n"));

/***/ })

});