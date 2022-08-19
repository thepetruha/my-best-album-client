(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 1212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/styled.ts

const HeaderContainer = (external_styled_components_default()).div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    height: 50px;
    border-bottom: #eaeaea solid 1px;
    position: relative;


    #search {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
        width: 300px;
    }
    #search > svg > path {
        fill: #777777;
    }
    #search > input {
        border: #777777 solid 1px;
        padding: 8px;
        width: 100%;
        background-color: #dddddd;
        border-radius: 12px;
    }
    #icon-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    #icon-container > img {
        width: 35px;
    }
    #icon-title-text {
        font-size: 24px;
        font-weight: 800;
    }
    #links-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        justify-content: space-between;
    }
    #links-container > a {
        background-color: red;
        padding: 8px;
        border-radius: 12px;
        color: white;
        background-color: rgb(158, 84, 215);
    }
    @media screen and (max-width: 1000px) {
        #search {
            position: absolute;
            top: 60px;
            width: 100%;
        }
        #icon-container > span {
            font-size: 15px;
        }
        #icon-container > img {
            width: 25px;
        }
        #links-container {
            gap: 10px;
            font-size: 14px;
        }
    }
    @media screen and (max-width: 1000px) {
        #search > input {
            height: 45px;
            font-size: 20px;
        }
    }
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header/index.tsx
/* eslint-disable @next/next/no-img-element */ 




const LinksHeader = [
    {
        name: "Create Post",
        link: "/creating"
    },
    {
        name: "FAQ",
        link: "/faq"
    }
];
const Header = ()=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const select = (0,external_react_redux_.useSelector)((state)=>state.search);
    const handleChangeSearch = (event)=>{
        const value = event.target.value;
        dispatch({
            type: "set",
            search: value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "icon-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "../images/album.png",
                            alt: "Иконка альбома"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                id: "icon-title-text",
                                children: "My Best Album"
                            })
                        })
                    ]
                }),
                router.asPath === "/" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "search",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: select,
                        placeholder: "Search",
                        onChange: handleChangeSearch
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "links-container",
                    children: LinksHeader.map(({ name , link  })=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link,
                            passHref: true,
                            children: name
                        }, `${name}${Date.now()}`);
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./pages/_app.tsx







const reducer = (state = {
    search: ""
}, action)=>{
    switch(action.type){
        case "set":
            return {
                ...state,
                search: action.search
            };
        default:
            return state;
    }
};
const store = (0,external_redux_namespaceObject.createStore)(reducer);
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
                    store: store,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: (Home_module_default()).main,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Home_module_default()).footer,
                children: "www.mybestalbum.org"
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(1212)));
module.exports = __webpack_exports__;

})();