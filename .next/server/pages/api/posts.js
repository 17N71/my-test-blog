"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 9026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts),
  "loadPosts": () => (/* binding */ loadPosts)
});

;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./lib/client.js


const clientConfig = {
    projectId: "d7kzve6t",
    dataset: "production"
};
const client = client_default()({
    projectId: "d7kzve6t",
    dataset: "production",
    apiVersion: "2022-11-08",
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});
const builder = image_url_default()(client);
const urlFor = (source)=>builder.image(source);

;// CONCATENATED MODULE: ./pages/api/posts.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function posts(req, res) {
    const { start , end  } = req.query;
    const { posts , total  } = await loadPosts(start, end);
    res.status(200).json({
        posts,
        total
    });
}
async function loadPosts(start, end) {
    const query = `{
  	"posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, slug, title, description, image},
		"total": count(*[_type == "post"])
  }`;
    const { posts , total  } = await client.fetch(query);
    return {
        posts,
        total
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9026));
module.exports = __webpack_exports__;

})();