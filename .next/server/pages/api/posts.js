"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"clientConfig\": () => (/* binding */ clientConfig),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst clientConfig = {\n    projectId: \"d7kzve6t\",\n    dataset: \"production\"\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_1___default()({\n    projectId: \"d7kzve6t\",\n    dataset: \"production\",\n    apiVersion: \"2022-11-08\",\n    useCdn: true,\n    token: process.env.NEXT_SANITY_TOKEN,\n    ignoreBrowserTokenWarning: true\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(client);\nconst urlFor = (source)=>builder.image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDTjtBQUNuQyxNQUFNRSxlQUFlO0lBQzNCQyxXQUFXO0lBQ1hDLFNBQVM7QUFDVixFQUFFO0FBQ0ssTUFBTUMsU0FBU0oscURBQVlBLENBQUM7SUFDbENFLFdBQVc7SUFDWEMsU0FBUztJQUNURSxZQUFZO0lBQ1pDLFFBQVEsSUFBSTtJQUNaQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtJQUNwQ0MsMkJBQTJCLElBQUk7QUFDaEMsR0FBRztBQUVILE1BQU1DLFVBQVViLHdEQUFlQSxDQUFDSztBQUN6QixNQUFNUyxTQUFTQyxDQUFBQSxTQUFVRixRQUFRRyxLQUFLLENBQUNELFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZyb250Ly4vbGliL2NsaWVudC5qcz9lNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50JztcclxuZXhwb3J0IGNvbnN0IGNsaWVudENvbmZpZyA9IHtcclxuXHRwcm9qZWN0SWQ6ICdkN2t6dmU2dCcsXHJcblx0ZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuXHRwcm9qZWN0SWQ6ICdkN2t6dmU2dCcsXHJcblx0ZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxyXG5cdGFwaVZlcnNpb246ICcyMDIyLTExLTA4JyxcclxuXHR1c2VDZG46IHRydWUsXHJcblx0dG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfU0FOSVRZX1RPS0VOLFxyXG5cdGlnbm9yZUJyb3dzZXJUb2tlbldhcm5pbmc6IHRydWUsXHJcbn0pO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gc291cmNlID0+IGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTtcclxuIl0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsInNhbml0eUNsaWVudCIsImNsaWVudENvbmZpZyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJjbGllbnQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9TQU5JVFlfVE9LRU4iLCJpZ25vcmVCcm93c2VyVG9rZW5XYXJuaW5nIiwiYnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ posts),\n/* harmony export */   \"loadPosts\": () => (/* binding */ loadPosts)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function posts(req, res) {\n    const { start , end  } = req.query;\n    const { posts , total  } = await loadPosts(start, end);\n    res.status(200).json({\n        posts,\n        total\n    });\n}\nasync function loadPosts(start, end) {\n    const query = `{\n  \t\"posts\": *[_type == \"post\"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, slug, title, description, image},\n\t\t\"total\": count(*[_type == \"post\"])\n  }`;\n    const { posts , total  } = await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    return {\n        posts,\n        total\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ25DO0FBQzNCLGVBQWVDLE1BQU1DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxJQUFHLEVBQUUsR0FBR0gsSUFBSUksS0FBSztJQUNoQyxNQUFNLEVBQUVMLE1BQUssRUFBRU0sTUFBSyxFQUFFLEdBQUcsTUFBTUMsVUFBVUosT0FBT0M7SUFDaERGLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRVQ7UUFBT007SUFBTTtBQUNyQyxDQUFDO0FBQ00sZUFBZUMsVUFBVUosS0FBSyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsTUFBTUMsUUFBUSxDQUFDOzREQUM0QyxFQUFFRixNQUFNLEdBQUcsRUFBRUMsSUFBSTs7R0FFMUUsQ0FBQztJQUNILE1BQU0sRUFBRUosTUFBSyxFQUFFTSxNQUFLLEVBQUUsR0FBRyxNQUFNUCxxREFBWSxDQUFDTTtJQUM1QyxPQUFPO1FBQ05MO1FBQ0FNO0lBQ0Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1mcm9udC8uL3BhZ2VzL2FwaS9wb3N0cy5qcz82OWZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9saWIvY2xpZW50JztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBvc3RzKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcmVxLnF1ZXJ5O1xuXHRjb25zdCB7IHBvc3RzLCB0b3RhbCB9ID0gYXdhaXQgbG9hZFBvc3RzKHN0YXJ0LCBlbmQpO1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3RzLCB0b3RhbCB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUG9zdHMoc3RhcnQsIGVuZCkge1xuXHRjb25zdCBxdWVyeSA9IGB7XG4gIFx0XCJwb3N0c1wiOiAqW190eXBlID09IFwicG9zdFwiXSB8IG9yZGVyKHB1Ymxpc2hlZERhdGUgZGVzYykgWyR7c3RhcnR9Li4uJHtlbmR9XSB7X2lkLCBwdWJsaXNoZWREYXRlLCBzbHVnLCB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlfSxcblx0XHRcInRvdGFsXCI6IGNvdW50KCpbX3R5cGUgPT0gXCJwb3N0XCJdKVxuICB9YDtcblx0Y29uc3QgeyBwb3N0cywgdG90YWwgfSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG5cdHJldHVybiB7XG5cdFx0cG9zdHMsXG5cdFx0dG90YWwsXG5cdH07XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwicG9zdHMiLCJyZXEiLCJyZXMiLCJzdGFydCIsImVuZCIsInF1ZXJ5IiwidG90YWwiLCJsb2FkUG9zdHMiLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.js"));
module.exports = __webpack_exports__;

})();