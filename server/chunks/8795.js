exports.id = 8795;
exports.ids = [8795];
exports.modules = {

/***/ 8795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sliders_TestimonialSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./public/images/testimonial/avatar.png
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.033948b6.png","height":80,"width":80,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAOUlEQVR42jXLOxIAEBAE0bl/TuBXnIKyM3s2AV7USYN2wYw3KEoisWMuKdSJXdtouS/QJXcR9uDvB2GpLWKxP/vPAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
;// CONCATENATED MODULE: ./components/sliders/TestimonialSlider.jsx







function NextArrow({ onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: "slick-next arrow--button",
        onClick: onClick,
        children: "Next Btn"
    });
}
function PrevArrow({ onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: "slick-prev arrow--button",
        onClick: onClick,
        children: "Next Btn"
    });
}
const TestimonialSlider = ({ cls  })=>{
    const settings = {
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(PrevArrow, {})
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        // className={`testimonial testimonial__bg section__space pos__rel over__hi bg__img ${cls}`}
        className: `testimonial testimonial__bg section__space pos__rel over__hi bg__img ${cls}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "testimonial__area",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section__header",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "neutral-top ",
                                children: "Investors Trust Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Trusted by Over 40,000 Worldwide Customer since 2022"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "neutral-bottom",
                                children: "We divide each property into shares so anyone can get started. Kindly check out our Investors say about Homevest."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ...settings,
                        className: "testimonial__item__wrapper",
                        children: [
                            ...Array(4)
                        ].map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "testimonial__support",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial__item bg__img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "testimonial__author__ratings",
                                            children: [
                                                ...Array(5)
                                            ].map((ite, i)=>/*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStar, {}, i))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "tertiary",
                                            children: "Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "testimonial__author",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "testimonial__author__info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "avatar__wrapper",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: avatar,
                                                            alt: "avatar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "Allan Murphy"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "neutral-bottom",
                                                                children: "United States"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, i))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sliders_TestimonialSlider = (TestimonialSlider);


/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;