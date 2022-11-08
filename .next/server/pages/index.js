(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7556:
/***/ ((module) => {

// Exports
module.exports = {
	"buyCoffee": "BuyMeCoffee_buyCoffee__K0pIt",
	"buyCoffeeButton": "BuyMeCoffee_buyCoffeeButton__rf8Fh"
};


/***/ }),

/***/ 488:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Cover_title__ziodO",
	"cover": "Cover_cover__OWb_R"
};


/***/ }),

/***/ 3416:
/***/ ((module) => {

// Exports
module.exports = {
	"postGrid": "PostGrid_postGrid__XW6Pn"
};


/***/ }),

/***/ 4448:
/***/ ((module) => {

// Exports
module.exports = {
	"postTitle": "Post_postTitle__9t2P9",
	"postDescription": "Post_postDescription__0OWMY",
	"postContent": "Post_postContent__Tqixk",
	"postLink": "Post_postLink__qtahO",
	"postImage": "Post_postImage__0iKMX"
};


/***/ }),

/***/ 39:
/***/ ((module) => {

// Exports
module.exports = {
	"screenEgg": "ScreenEgg_screenEgg__YQM3d",
	"screenEggRight": "ScreenEgg_screenEggRight__2zb_8",
	"screenEggLeft": "ScreenEgg_screenEggLeft__VI6HD"
};


/***/ }),

/***/ 4610:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Section_section__vIwb_"
};


/***/ }),

/***/ 3519:
/***/ ((module) => {

// Exports
module.exports = {
	"listItem": "SocialNetworks_listItem__9u3mu",
	"listLink": "SocialNetworks_listLink__Qeo1g"
};


/***/ }),

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Section/index.module.scss
var index_module = __webpack_require__(4610);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Section/index.jsx




const Section = ({ className , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: external_classnames_default()(className, (index_module_default()).section),
        children: children
    });
};
/* harmony default export */ const components_Section = (Section);

// EXTERNAL MODULE: ./components/Cover/index.module.scss
var Cover_index_module = __webpack_require__(488);
var Cover_index_module_default = /*#__PURE__*/__webpack_require__.n(Cover_index_module);
;// CONCATENATED MODULE: ./components/Cover/index.jsx




const Cover = ({ title , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (Cover_index_module_default()).cover),
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: (Cover_index_module_default()).title,
            dangerouslySetInnerHTML: {
                __html: title
            }
        })
    });
};
/* harmony default export */ const components_Cover = (Cover);

// EXTERNAL MODULE: ./components/SocialNetworks/index.module.scss
var SocialNetworks_index_module = __webpack_require__(3519);
var SocialNetworks_index_module_default = /*#__PURE__*/__webpack_require__.n(SocialNetworks_index_module);
// EXTERNAL MODULE: ./components/ScreenEgg/index.module.scss
var ScreenEgg_index_module = __webpack_require__(39);
var ScreenEgg_index_module_default = /*#__PURE__*/__webpack_require__.n(ScreenEgg_index_module);
;// CONCATENATED MODULE: ./components/ScreenEgg/ScreenEgg.jsx




const ScreenEgg = ({ className , type , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (ScreenEgg_index_module_default()).screenEgg, type == "right" ? (ScreenEgg_index_module_default()).screenEggRight : (ScreenEgg_index_module_default()).screenEggLeft),
        children: children
    });
};
/* harmony default export */ const ScreenEgg_ScreenEgg = (ScreenEgg);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/SocialNetworks/index.jsx






const socialsNetworks = [
    {
        id: 1,
        icon: ai_.AiFillYoutube
    },
    {
        id: 2,
        icon: ai_.AiFillFacebook
    },
    {
        id: 3,
        icon: ai_.AiFillTwitterCircle
    }
];
const SocialNetworks = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ScreenEgg_ScreenEgg, {
        className: "",
        type: "left",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: external_classnames_default()((SocialNetworks_index_module_default()).list, className),
            children: socialsNetworks.map(({ icon , id  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (SocialNetworks_index_module_default()).listItem,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (SocialNetworks_index_module_default()).listLink,
                        children: /*#__PURE__*/ external_react_default().createElement(icon, {
                            size: 40,
                            color: "black"
                        })
                    })
                }, id))
        })
    });
};
/* harmony default export */ const components_SocialNetworks = (SocialNetworks);

// EXTERNAL MODULE: ./components/BuyMeCoffee/index.module.scss
var BuyMeCoffee_index_module = __webpack_require__(7556);
var BuyMeCoffee_index_module_default = /*#__PURE__*/__webpack_require__.n(BuyMeCoffee_index_module);
;// CONCATENATED MODULE: ./components/BuyMeCoffee/index.jsx





const BuyMeCoffee = ({ className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ScreenEgg_ScreenEgg, {
        type: "right",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()(className, (BuyMeCoffee_index_module_default()).buyCoffee),
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (BuyMeCoffee_index_module_default()).buyCoffeeButton,
                children: "Buy me some coffee"
            })
        })
    });
};
/* harmony default export */ const components_BuyMeCoffee = (BuyMeCoffee);

// EXTERNAL MODULE: ./components/Title/index.jsx
var Title = __webpack_require__(7045);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(5018);
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
    const { posts , total  } = await client/* client.fetch */.Lp.fetch(query);
    return {
        posts,
        total
    };
}

// EXTERNAL MODULE: ./components/PostGrid/index.module.scss
var PostGrid_index_module = __webpack_require__(3416);
var PostGrid_index_module_default = /*#__PURE__*/__webpack_require__.n(PostGrid_index_module);
;// CONCATENATED MODULE: ./components/PostGrid/index.jsx



const PostGrid = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (PostGrid_index_module_default()).postGrid,
        children: children
    });
};
/* harmony default export */ const components_PostGrid = (PostGrid);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Post/index.module.scss
var Post_index_module = __webpack_require__(4448);
var Post_index_module_default = /*#__PURE__*/__webpack_require__.n(Post_index_module);
;// CONCATENATED MODULE: ./components/Post/index.jsx







const Post = ({ image , title , slug , description  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `Post/${slug}`,
        className: `${(Post_index_module_default()).post} ${(Post_index_module_default()).postLink}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                type: "small",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Post_index_module_default()).postContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: (0,client/* urlFor */.uH)(image).url(),
                            width: 100,
                            height: 100,
                            alt: image.caption
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Post_index_module_default()).postDescription,
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Post = (Post);

// EXTERNAL MODULE: ./components/Button/index.jsx
var Button = __webpack_require__(6077);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.js












const LOAD_MORE_STEP = 4;
const getServerSideProps = async ()=>{
    const { posts , total  } = await loadPosts(0, 4);
    return {
        props: {
            posts,
            total
        }
    };
};
function Home({ posts , total  }) {
    const [postData, setPostData] = (0,external_react_.useState)(posts);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [loadedAmount, setLoadedAmount] = (0,external_react_.useState)(LOAD_MORE_STEP);
    const isLoadButton = total > loadedAmount;
    const geyMorePosts = async ()=>{
        setIsLoading(true);
        try {
            const { posts  } = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`).then((res)=>res.json());
            setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
            setPostData([
                ...postData,
                ...posts
            ]);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Narek Grigoryan test blog with project next.js and sanity"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Cover, {
                        title: "Narek <br /> Grigoryan"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SocialNetworks, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_BuyMeCoffee, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        children: "New Post"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_PostGrid, {
                        children: postData.map(({ title , image , _id , publishedDate , slug: { current  } , description  })=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(components_Post, {
                                title: title,
                                slug: current,
                                image: image,
                                description: description
                            }, _id);
                        })
                    }),
                    isLoadButton && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            disabled: isLoading,
                            onClick: geyMorePosts,
                            children: "Load more posts..."
                        })
                    })
                ]
            })
        ]
    });
}


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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,380], () => (__webpack_exec__(1841)));
module.exports = __webpack_exports__;

})();