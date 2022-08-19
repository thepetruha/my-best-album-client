"use strict";
(() => {
var exports = {};
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 2962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ creating),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/SinglePost/styled.ts
var styled = __webpack_require__(8951);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/images/close.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8 8.707 3.646 3.647.708-.706L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707Z",
    fill: "#000"
  })));
};

/* harmony default export */ const images_close = (SvgClose);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/creating/index.tsx





var TypeInput;
(function(TypeInput) {
    TypeInput[TypeInput["shortDesc"] = 0] = "shortDesc";
    TypeInput[TypeInput["title"] = 1] = "title";
    TypeInput[TypeInput["description"] = 2] = "description";
    TypeInput[TypeInput["selecte"] = 3] = "selecte";
})(TypeInput || (TypeInput = {}));
const Creating = ({ categoris  })=>{
    const router = (0,router_.useRouter)();
    const [images, setImages] = external_react_default().useState([
        "",
        "",
        "",
        ""
    ]);
    const [publish, setPublish] = external_react_default().useState(false);
    const [title, setTitle] = external_react_default().useState("");
    const [shortDesc, setShortDesc] = external_react_default().useState("");
    const [desctiption, setDescription] = external_react_default().useState("");
    const [select, setSelect] = external_react_default().useState(categoris[0]);
    (0,external_react_.useEffect)(()=>{
        if (title !== "" && shortDesc !== "" && desctiption !== "") {
            setPublish(true);
        }
    }, [
        title,
        shortDesc,
        desctiption
    ]);
    (0,external_react_.useEffect)(()=>{
        let i = 0;
        images.forEach((item)=>item !== null && ++i);
        if (i !== 0 && title !== "") setPublish(true);
        if (i === 0 && title === "" && shortDesc === "" && desctiption === "") {
            setPublish(false);
        }
    }, [
        images,
        title
    ]);
    const handleChangeFile = (event, index)=>{
        const file = event.target.files;
        if (typeof file === "object") {
            const arr = images;
            arr[index] = file[0];
            setImages([
                ...arr
            ]);
        }
    };
    const hadnleDeleteImg = (index)=>{
        const arr = images;
        arr[index] = "";
        setImages([
            ...arr
        ]);
    };
    const renderImg = (imgs)=>{
        return imgs.map((img, i)=>{
            if (img === "") {
                return /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    htmlFor: `input:img${i}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "add-img-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "add-img-gird",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "+"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "file",
                                    accept: "image/*",
                                    id: `input:img${i}`,
                                    onChange: (event)=>handleChangeFile(event, i)
                                })
                            ]
                        })
                    }, `img:ip${i}`)
                }, `img:ip${i}`);
            }
            const url = img !== String ? URL.createObjectURL(img) : "";
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "add-img-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>hadnleDeleteImg(i),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(images_close, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: url,
                        alt: ""
                    })
                ]
            }, `img:ip${i}`);
        });
    };
    const handleChagneText = (event, type)=>{
        const value = event.target.value;
        switch(type){
            case 0:
                setShortDesc(value);
                break;
            case 1:
                setTitle(value);
                break;
            case 2:
                setDescription(value);
                break;
            case 3:
                setTitle("");
                setSelect(value);
                break;
        }
    };
    const handlePublishPost = async ()=>{
        const imgs = [];
        images.forEach((item)=>{
            const url = typeof item !== "string" ? URL.createObjectURL(item) : null;
            if (url !== null) {
                imgs.push(url);
            }
        });
        const data = select === categoris[0] ? JSON.stringify({
            categoryName: select,
            post: {
                id: Date.now(),
                name: title,
                imgs: imgs
            }
        }) : JSON.stringify({
            categoryName: select,
            post: {
                id: Date.now(),
                name: title,
                imgs: imgs,
                description: desctiption,
                caption: shortDesc
            }
        });
        const res = await fetch(`http://localhost:4000/albums/create`, {
            mode: "cors",
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const { status  } = await res.json();
        if (status === "ok") {
            router.push("/");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(styled/* MainSinglePost */.A, {
        category: "Images",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "wrapper-container-post",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    value: select,
                    onChange: (e)=>handleChagneText(e, TypeInput.selecte),
                    children: categoris.map((i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: i,
                            children: i
                        }, `${i}${Date.now()}`);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        select === categoris[0] && /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            value: title,
                            id: "title-inp",
                            placeholder: "Title",
                            onChange: (e)=>handleChagneText(e, TypeInput.title)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Images"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "grid-img",
                            children: renderImg(images)
                        })
                    ]
                }),
                select !== categoris[0] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "text-single-post",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            value: shortDesc,
                            placeholder: "Short Description",
                            onChange: (e)=>handleChagneText(e, TypeInput.shortDesc),
                            id: "short-desc-inp"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            value: title,
                            id: "title-inp",
                            placeholder: "Title",
                            onChange: (e)=>handleChagneText(e, TypeInput.title)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            id: "desc-inp",
                            value: desctiption,
                            placeholder: "Description...",
                            onChange: (e)=>handleChagneText(e, TypeInput.description)
                        })
                    ]
                }),
                publish && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handlePublishPost,
                    children: "Publish"
                })
            ]
        })
    });
};
const getServerSideProps = async ()=>{
    const res = await fetch(`http://localhost:4000/albums/categoris`, {
        mode: "cors",
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const categoris = await res.json();
    if (categoris.data.length === 0) return {
        notFound: true
    };
    return {
        props: {
            categoris: categoris.data
        }
    };
};
/* harmony default export */ const creating = (Creating);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [951], () => (__webpack_exec__(2962)));
module.exports = __webpack_exports__;

})();