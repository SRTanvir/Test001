exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sliders_GallerySlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./public/images/one.png
/* harmony default export */ const one = ({"src":"/_next/static/media/one.eea10cac.png","height":380,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALklEQVR42mPYs2cvEO3dw7B75w4Q2M2wc96cuQtnztnOsHvH9h1AtJthz16IGgCAJBxwLUjOWwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/three.png
/* harmony default export */ const three = ({"src":"/_next/static/media/three.eea10cac.png","height":380,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALklEQVR42mPYs2cvEO3dw7B75w4Q2M2wc96cuQtnztnOsHvH9h1AtJthz16IGgCAJBxwLUjOWwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/two.png
/* harmony default export */ const two = ({"src":"/_next/static/media/two.eea10cac.png","height":380,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALklEQVR42mPYs2cvEO3dw7B75w4Q2M2wc96cuQtnztnOsHvH9h1AtJthz16IGgCAJBxwLUjOWwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
;// CONCATENATED MODULE: ./components/sliders/GallerySlider.jsx









const GallerySlider = ()=>{
    const settings = {
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "mx-0 mx-sm-4",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
            ...settings,
            children: [
                one,
                two,
                three,
                one,
                two,
                three
            ].map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sick--gallery",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gallery__single",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: item,
                            alt: item,
                            className: "w-100"
                        })
                    })
                }, i))
        })
    });
};
/* harmony default export */ const sliders_GallerySlider = (GallerySlider);


/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;