"use strict";
exports.id = 7626;
exports.ids = [7626];
exports.modules = {

/***/ 7626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_SingleFaq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/icons/message.png
/* harmony default export */ const message = ({"src":"/_next/static/media/message.c4694668.png","height":28,"width":28,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR4nBVMzSpEYRh+3u98cwillDI3MNkoS1lIyhXY2Fi4BMkVCDXW1MmWBSsLiey4AhfAxk8xM8wx5+f7mfd7fVPv0/v0/NH1ef05phvN8UlhW4tURdCV8a+3z+8Le635mu6vhpJIgunZgH6Ppd9l8p6Lr9rM4S+UdHPhnAqUGMPkLLN3rK3ltzx3u0poiS6zMi4oRBE+YvSNHb44FzKtVJtOjjsraUi2wdjKK3voXSiZ5XtCNzaIaJ1Oj7r46AxaUzrdTKFXFdEiCAZAU0RAZ+3fdNBzjkA70VgTyAwEyzHwGPFA2f4PgogyBQeoKMno5CCyu1h6+geH4on3WEQBhQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/common/SingleFaq.jsx



const SingleFaq = ({ i , item  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "accordion-item content__space",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                className: "accordion-header",
                id: `headingFundOne${i}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon_box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: message,
                            alt: "message"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `accordion-button ${i === 0 ? "" : "collapsed"}`,
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": `#collapseFundOne${i}`,
                        "aria-expanded": "true",
                        "aria-controls": `collapseFundOne${i}`,
                        children: item.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: `collapseFundOne${i}`,
                className: `accordion-collapse collapse ${i === 0 ? "show" : ""}`,
                "aria-labelledby": `headingFundOne${i}`,
                "data-bs-parent": "#accordionExampleFund",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "accordion-body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.details
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const common_SingleFaq = (SingleFaq);


/***/ })

};
;