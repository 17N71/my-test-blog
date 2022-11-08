(() => {
var exports = {};
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 9515:
/***/ ((module) => {

// Exports
module.exports = {
	"article": "Article_article__ekgBp",
	"articleBack": "Article_articleBack__6f9W0"
};


/***/ }),

/***/ 3333:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__Vkydm"
};


/***/ }),

/***/ 5742:
/***/ ((module) => {

// Exports
module.exports = {
	"postTitle": "style_postTitle__tf7uU",
	"postDate": "style_postDate__cn_na"
};


/***/ }),

/***/ 1464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Article/index.module.scss
var index_module = __webpack_require__(9515);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Article/Article.jsx




const Article = ({ children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (index_module_default()).article),
        children: children
    });
};
/* harmony default export */ const Article_Article = (Article);

// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(5018);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./pages/Post/style.module.scss
var style_module = __webpack_require__(5742);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./components/Title/index.jsx
var Title = __webpack_require__(7045);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
// EXTERNAL MODULE: ./components/Content/index.module.scss
var Content_index_module = __webpack_require__(3333);
var Content_index_module_default = /*#__PURE__*/__webpack_require__.n(Content_index_module);
;// CONCATENATED MODULE: ./components/Content/index.jsx






const Content = ({ className , body  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (Content_index_module_default()).content),
        children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
            blocks: body,
            imageOptions: {
                w: 1000,
                h: 750,
                fit: "max"
            },
            projectId: client/* clientConfig.projectId */.$V.projectId,
            dataset: client/* clientConfig.dataset */.$V.dataset
        })
    });
};
/* harmony default export */ const components_Content = (Content);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: ./components/Button/index.jsx
var Button = __webpack_require__(6077);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/Post/[slug].js












const Post = ({ post  })=>{
    const date = (0,external_date_fns_namespaceObject.format)(new Date(post.publishedDate), "dd MMM yy");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: post.meta_title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Article_Article, {
                className: (style_module_default()).post,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        disabled: false,
                        onClick: ()=>router_default().back(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineArrowLeft, {
                            size: 50,
                            className: (style_module_default()).Button
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        className: (style_module_default()).postTitle,
                        children: post.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (style_module_default()).postDate,
                        children: date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Content, {
                        body: post.body
                    })
                ]
            })
        ]
    });
};
// Server Side Rendering
async function getServerSideProps(context) {
    const query = `*[_type == "post" && slug.current == '${context.params.slug}'][0] `;
    const post = await client/* client.fetch */.Lp.fetch(query);
    return {
        props: {
            post
        }
    };
}
// Static Side Generation
// export async function getStaticPaths() {
// 	const query = `*[type == "post"]{
// 		slug{
// 			current
// 		}
// 	}`;
// 	const posts = await client.fetch(query);
// 	const paths = posts.map(post => ({
// 		params: post.slug.current,
// 	}));
// 	return {
// 		paths,
// 		fallback: 'blocking',
// 	};
// }
// export async function getStaticProps(context) {
// 	const query = `*[_type == "post" && slug.current == '${context.params.slug}'][0] `;
// 	const post = await client.fetch(query);
// 	return {
// 		props: {
// 			post,
// 		},
// 	};
// }
/* harmony default export */ const _slug_ = (Post);


/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [380], () => (__webpack_exec__(1464)));
module.exports = __webpack_exports__;

})();