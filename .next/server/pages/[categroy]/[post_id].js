"use strict";
(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 7852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _post_id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/SinglePost/styled.ts
var styled = __webpack_require__(8951);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/delete.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDelete = function SvgDelete(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.594 4.688V2.342a.781.781 0 0 1 .781-.781h6.25a.781.781 0 0 1 .781.781v2.346h6.25a.781.781 0 1 1 0 1.562H2.344a.781.781 0 0 1 0-1.562h6.25Zm1.562 0h4.688V3.125h-4.688v1.563Zm-5.469 18.75a.781.781 0 0 1-.78-.782V6.25h17.187v16.406a.781.781 0 0 1-.782.782H4.688Zm5.47-4.688a.781.781 0 0 0 .78-.781v-7.813a.781.781 0 0 0-1.562 0v7.813a.781.781 0 0 0 .781.781Zm4.687 0a.781.781 0 0 0 .781-.781v-7.813a.781.781 0 0 0-1.563 0v7.813a.781.781 0 0 0 .782.781Z",
    fill: "#000"
  })));
};

/* harmony default export */ const images_delete = (SvgDelete);
;// CONCATENATED MODULE: ./pages/[categroy]/[post_id]/index.tsx
/* eslint-disable @next/next/no-img-element */ 



const SinglePost = ({ post =[] , category =""  })=>{
    const router = (0,router_.useRouter)();
    const { id , name , caption =null , description =null , imgs  } = post[0] || post;
    const handleDeletePost = async (categroy, post_id)=>{
        try {
            const res = await fetch(`http://localhost:4000/albums/${categroy}/${post_id}`, {
                mode: "cors",
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const { status  } = await res.json();
            if (status === "ok") {
                router.push("/");
                return;
            }
            throw new Error("SERVER ERR DELETE POST");
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(styled/* MainSinglePost */.A, {
        category: category,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "wrapper-container-post",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "text-single-post",
                    children: [
                        caption && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: caption
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "header-single-post",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>handleDeletePost(category, id),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(images_delete, {})
                                })
                            ]
                        }),
                        description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "grid-img",
                    children: imgs.map((src, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(styled/* WrapperImgs */.I, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "wrapper-imgs",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: src,
                                    alt: "",
                                    className: "img-grid",
                                    width: "100%"
                                })
                            })
                        }, `img:${Date.now() * i}`);
                    })
                })
            ]
        })
    });
};
const getServerSideProps = async (context)=>{
    const { post_id , categroy  } = context.params;
    if (!post_id || !categroy) return {
        notFound: true
    };
    const res = await fetch(`http://localhost:4000/albums/${categroy}/${post_id}`, {
        mode: "cors",
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const post = await res.json();
    return {
        props: {
            post: post.data || [],
            category: categroy
        }
    };
};
/* harmony default export */ const _post_id_ = (SinglePost);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [951], () => (__webpack_exec__(7852)));
module.exports = __webpack_exports__;

})();