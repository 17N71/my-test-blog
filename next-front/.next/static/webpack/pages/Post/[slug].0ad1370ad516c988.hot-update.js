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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Article_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/Article/Article */ \"./components/Article/Article.jsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.scss */ \"./pages/Post/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Title_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Title/index */ \"./components/Title/index.jsx\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Content */ \"./components/Content/index.jsx\");\n/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Button/index */ \"./components/Button/index.jsx\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(post.publishedDate), \"dd MMM yy\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const goToBack = router.back();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Article_Article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().post),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_6__.AiOutlineArrowLeft, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().postTitle),\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().postDate),\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                body: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\narek\\\\OneDrive\\\\Рабочий стол\\\\proh\\\\next-front\\\\pages\\\\Post\\\\[slug].js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSP = true;\n// Static Side Generation\n// export async function getStaticPaths() {\n// \tconst query = `*[type == \"post\"]{\n// \t\tslug{\n// \t\t\tcurrent\n// \t\t}\n// \t}`;\n// \tconst posts = await client.fetch(query);\n// \tconst paths = posts.map(post => ({\n// \t\tparams: post.slug.current,\n// \t}));\n// \treturn {\n// \t\tpaths,\n// \t\tfallback: 'blocking',\n// \t};\n// }\n// export async function getStaticProps(context) {\n// \tconst query = `*[_type == \"post\" && slug.current == '${context.params.slug}'][0] `;\n// \tconst post = await client.fetch(query);\n// \treturn {\n// \t\tprops: {\n// \t\t\tpost,\n// \t\t},\n// \t};\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDK0I7QUFFdkI7QUFDTztBQUNVO0FBQ0o7QUFDTTtBQUNKO0FBQ1Q7QUFDeEMsTUFBTVMsT0FBTyxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUNyQixNQUFNQyxPQUFPVCxnREFBTUEsQ0FBQyxJQUFJVSxLQUFLRixLQUFLRyxhQUFhLEdBQUc7SUFDbEQsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFdBQVdELE9BQU9FLElBQUk7SUFDNUIscUJBQ0MsOERBQUNmLG1FQUFPQTtRQUFDZ0IsV0FBV2QsZ0VBQVc7OzBCQUM5Qiw4REFBQ0csZ0VBQU1BOzBCQUNOLDRFQUFDQywyREFBa0JBOzs7Ozs7Ozs7OzBCQUVwQiw4REFBQ0gsK0RBQUtBO2dCQUFDYSxXQUFXZCxxRUFBZ0I7MEJBQUdPLEtBQUtTLEtBQUs7Ozs7OzswQkFDL0MsOERBQUNDO2dCQUFFSCxXQUFXZCxvRUFBZTswQkFBR1E7Ozs7OzswQkFDaEMsOERBQUNOLDJEQUFPQTtnQkFBQ2lCLE1BQU1aLEtBQUtZLElBQUk7Ozs7Ozs7Ozs7OztBQUczQjtHQWRNYjs7UUFFVUQsa0RBQVNBOzs7S0FGbkJDOztBQTJCTix5QkFBeUI7QUFFekIsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQyxVQUFVO0FBQ1YsYUFBYTtBQUNiLE1BQU07QUFDTixPQUFPO0FBQ1AsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLFlBQVk7QUFDWixXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLE1BQU07QUFDTixJQUFJO0FBQ0osa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RiwyQ0FBMkM7QUFDM0MsWUFBWTtBQUNaLGFBQWE7QUFDYixXQUFXO0FBQ1gsT0FBTztBQUNQLE1BQU07QUFDTixJQUFJO0FBQ0osK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9zdC9bc2x1Z10uanM/MTk4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlJztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9UaXRsZS9pbmRleCc7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcblx0Y29uc3QgZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZERhdGUpLCAnZGQgTU1NIHl5Jyk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgZ29Ub0JhY2sgPSByb3V0ZXIuYmFjaygpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuXHRcdFx0PEJ1dHRvbj5cclxuXHRcdFx0XHQ8QWlPdXRsaW5lQXJyb3dMZWZ0IC8+XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8VGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRpdGxlfT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5wb3N0RGF0ZX0+e2RhdGV9PC9wPlxyXG5cdFx0XHQ8Q29udGVudCBib2R5PXtwb3N0LmJvZHl9IC8+XHJcblx0XHQ8L0FydGljbGU+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFNlcnZlciBTaWRlIFJlbmRlcmluZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAnJHtjb250ZXh0LnBhcmFtcy5zbHVnfSddWzBdIGA7XHJcblx0Y29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBvc3QsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbi8vIFN0YXRpYyBTaWRlIEdlbmVyYXRpb25cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gXHRjb25zdCBxdWVyeSA9IGAqW3R5cGUgPT0gXCJwb3N0XCJde1xyXG4vLyBcdFx0c2x1Z3tcclxuLy8gXHRcdFx0Y3VycmVudFxyXG4vLyBcdFx0fVxyXG4vLyBcdH1gO1xyXG4vLyBcdGNvbnN0IHBvc3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuLy8gXHRjb25zdCBwYXRocyA9IHBvc3RzLm1hcChwb3N0ID0+ICh7XHJcbi8vIFx0XHRwYXJhbXM6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4vLyBcdH0pKTtcclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cGF0aHMsXHJcbi8vIFx0XHRmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuLy8gXHR9O1xyXG4vLyB9XHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbi8vIFx0Y29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7Y29udGV4dC5wYXJhbXMuc2x1Z30nXVswXSBgO1xyXG4vLyBcdGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4vLyBcdHJldHVybiB7XHJcbi8vIFx0XHRwcm9wczoge1xyXG4vLyBcdFx0XHRwb3N0LFxyXG4vLyBcdFx0fSxcclxuLy8gXHR9O1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydGljbGUiLCJmb3JtYXQiLCJzdHlsZXMiLCJUaXRsZSIsIkNvbnRlbnQiLCJCdXR0b24iLCJBaU91dGxpbmVBcnJvd0xlZnQiLCJ1c2VSb3V0ZXIiLCJQb3N0IiwicG9zdCIsImRhdGUiLCJEYXRlIiwicHVibGlzaGVkRGF0ZSIsInJvdXRlciIsImdvVG9CYWNrIiwiYmFjayIsImNsYXNzTmFtZSIsInBvc3RUaXRsZSIsInRpdGxlIiwicCIsInBvc3REYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Post/[slug].js\n"));

/***/ })

});