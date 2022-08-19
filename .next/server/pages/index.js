"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPlus = function SvgPlus(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 45 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M43.393 25c0 1.727-1.44 3.126-3.214 3.126H25.715v14.062c0 1.728-1.44 3.124-3.215 3.124s-3.214-1.396-3.214-3.123V28.125H4.822c-1.775 0-3.215-1.399-3.215-3.126 0-1.727 1.44-3.124 3.215-3.124h14.464V7.813c0-1.727 1.44-3.125 3.214-3.125 1.775 0 3.215 1.398 3.215 3.125v14.063h14.464c1.778-.001 3.214 1.395 3.214 3.124Z",
    fill: "#000"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgPlus);

/***/ }),

/***/ 913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7445);
/* harmony import */ var _public_images_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1675);
/* harmony import */ var _SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5453);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_4__]);
_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MainPage = ({ store  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const select = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.search);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setState(true), []);
    const handlerAddingLink = ()=>router.push("/creating");
    const renderLastPost = ()=>{
        const arr = [];
        store.forEach((row)=>{
            const len = row.posts.length;
            arr.push({
                category: row.name,
                ...row.posts[len - 1]
            });
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrapper-category",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_4__/* .SwiperCard */ .R, {
                categoryName: arr[0].category,
                posts: arr,
                last: true,
                search: select
            })
        });
    };
    if (state) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__/* .MainPage */ .h, {
            children: [
                !react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__/* .TitleMainPage */ .f, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Albums"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: handlerAddingLink,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_images_plus_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "wrapper-category",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Last Addeds"
                        }),
                        store.length > 0 && renderLastPost()
                    ]
                }),
                store.reverse().map(({ name , posts  }, i)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "wrapper-category",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_4__/* .SwiperCard */ .R, {
                                categoryName: name,
                                posts: posts.reverse(),
                                search: select
                            })
                        ]
                    }, `${name}${Date.now()}`);
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: "Error"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ SwiperCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6375);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 








const SwiperCard = ({ categoryName , posts , last =false , search  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClick = (category, id)=>{
        router.push(`/${category}/${id}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setState(true), []);
    const handleSearch = (name, s)=>{
        if (name && s) {
            const low = name.toLocaleLowerCase();
            const ser = s.toLocaleLowerCase();
            return low.startsWith(ser);
        }
        return true;
    };
    if (state) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .WrapperSwiper */ .EZ, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination
                ],
                spaceBetween: 10,
                slidesPerView: react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isMobile ? 1 : 3,
                pagination: {
                    clickable: true
                },
                children: posts.map((item, index)=>{
                    if (handleSearch(item.name, search) || search === "") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .SingleCard */ .tR, {
                        children: item?.id && item?.imgs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .ContainerCard */ ._K, {
                                onClick: ()=>handleClick(last ? item?.category : categoryName, item?.id),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: item?.name
                                            }),
                                            item?.caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: item?.caption
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "blur-img"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: item?.imgs ? item?.imgs[0] : "",
                                        className: "img-card",
                                        alt: ""
                                    })
                                ]
                            })
                        }, `slide${Date.now()}${index * 2}`)
                    }, `item${Date.now()}${index}`);
                })
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Error"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ WrapperSwiper),
/* harmony export */   "_K": () => (/* binding */ ContainerCard),
/* harmony export */   "tR": () => (/* binding */ SingleCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const WrapperSwiper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    width: 100%;
    & > .swiper {
        border-radius: 16px;
        padding-bottom: 30px;
    }
    & > .swiper > .swiper-pagination {
        bottom: 0px;
    }
`;
const SingleCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column;
`;
const ContainerCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column-reverse;
    height: 300px;
    border-radius: 16px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & .blur-img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: rgba(25, 25, 25, 0.55);
        border-radius: 16px;
    }

    & .card-text {
        z-index: 99999;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 0px;
        margin: 0px 20px;
        margin-bottom: 12px;
        color: white;
    }
    & .card-text > p {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
    }
    & .card-text > span {
        white-space: nowrap;
        overflow: hidden;
    }
    & .img-card {
        border-radius: 16px;
    }
`;


/***/ }),

/***/ 7445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ TitleMainPage),
/* harmony export */   "h": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainPage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    & .swiper-slide {
        cursor: pointer;
    }

    & > .wrapper-category {
        padding-bottom: 10px;
        border-bottom: #eaeaea solid 1px;
    }
    & > .wrapper-category:last-child {
        border: none;
    }
`;
const TitleMainPage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    align-items: center;
    gap: 15px;
    & > h1 {
        display: inline-block;
        margin: 0;
    }
    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 5px;
        margin-top: 8px;
        background-color: rgb(158,84,215);
        border-radius: 50%;
        cursor: pointer;
    }
    & > span > svg > path {
        fill: white;
    }
    @media screen and (max-width: 1000px) {
        & > h1 {
            font-size: 25px;   
        }
        & > span {
            margin-top: 4px;
        }
    }
`;


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__]);
_components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Home = ({ store  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__/* .MainPage */ .h, {
        store: store
    });
};
const getServerSideProps = async ()=>{
    const res = await fetch("http://localhost:4000/albums", {
        mode: "cors",
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const album = await res.json();
    if (!album.data?.categoris) return {
        notFound: true
    };
    return {
        props: {
            store: album.data.categoris
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5075));
module.exports = __webpack_exports__;

})();