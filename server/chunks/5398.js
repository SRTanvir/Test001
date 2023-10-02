"use strict";
exports.id = 5398;
exports.ids = [5398];
exports.modules = {

/***/ 5398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_VideoPopup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./public/images/video-illustration.png
/* harmony default export */ const video_illustration = ({"src":"/_next/static/media/video-illustration.093f271e.png","height":515,"width":1078,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdElEQVR42gWAuwrCMBRAT+pNsZA6Owpufr7/4SoWxEEFoYiQSFLJU9R9mpovW2Y3YoaCaCEmUC1DtLVzdY9ab3hev5xPltIaWoOoynI5NvFLh31kFMIQPW7OGAPkSOkPSlIKxAB6zKzMgDTN+/Ojr4Hba8cfV6o5DlFBN+8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/common/VideoPopup.jsx





const VideoPopup = ({ cls  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `video ${cls}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "video__area",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: video_illustration,
                        alt: "video illustration"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "video__btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "video__popup",
                            title: "YouTube video player",
                            href: "https://www.youtube.com/watch?v=LCihLrSehCo",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPlay, {})
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const common_VideoPopup = (VideoPopup);


/***/ })

};
;