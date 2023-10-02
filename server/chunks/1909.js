"use strict";
exports.id = 1909;
exports.ids = [1909];
exports.modules = {

/***/ 7621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_CountdownDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9721);






const BusinessCard = ({ singleData , colActiv  })=>{
    const { name , title , totalInvest , investAmount , investPer , img , annualReturn , max_term , investLink  } = singleData;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${colActiv ? "col-12 alt__loan__list" : "col-md-6 col-xl-4"}  alt__loan__grid`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "alt__loan__grid__single",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "imi__alt",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "img__effect",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: investLink,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: img,
                                        alt: name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ribbon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Waiting For Invest"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "alt__loan__content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item__head",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item__head__left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: investLink,
                                                    children: title
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "progress__type progress__type--three",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "collected",
                                            children: "Collected Amount"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress-bar",
                                                role: "progressbar",
                                                "aria-valuenow": "25",
                                                "aria-valuemin": "0",
                                                "aria-valuemax": "100"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "project__has",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "project__has__investors",
                                                    children: [
                                                        totalInvest,
                                                        " Investors"
                                                    ]
                                                }),
                                                " ",
                                                "|",
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "project__has__investors__amount",
                                                    children: [
                                                        "$",
                                                        investAmount
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "project__has__investors__percent",
                                                    children: [
                                                        "(",
                                                        investPer,
                                                        "%)"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item__info",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item__info__single",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Annual Return"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        annualReturn.regular,
                                                        "% + ",
                                                        annualReturn.bonus,
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item__info__single",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Maximum Term"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        max_term,
                                                        " Months"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "alt__loan__foot",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "invest__cta__wrapper",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "countdown__wrapper",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "secondary",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaClock, {}),
                                            "Left to invest"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        date: Date.now() + 10000000000,
                                        renderer: _common_CountdownDisplay__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "invest__cta",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: investLink,
                                        className: "button button--effect",
                                        children: "Invest Now"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "secondary",
                                        children: "Business loan #00134"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessCard);


/***/ }),

/***/ 1140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data_businessData)
});

;// CONCATENATED MODULE: ./public/images/property/one.png
/* harmony default export */ const one = ({"src":"/_next/static/media/one.c91e11ac.png","height":2304,"width":4096,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEX////+/////v7+/v7//fz8/f37+/v6+/v/+ff89vX09vf09vb+8vD77evx7u3u7Oz44dzq4d/u3dri2NYMyIPlAAAALklEQVR42h3Gxw0AMAzDQNlK72X/XWMEfPBA+JKcKIi5bgetcXb7iDUHG6gQqjwWEwDdjQoeuAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/property/three.png
/* harmony default export */ const three = ({"src":"/_next/static/media/three.fc589c5d.png","height":2304,"width":4096,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdElEQVR42g2MUQ7CIBAFuf/JjPEAGtooaCModFl2aYGmTffjJW+SySjnfYzAvHJZiRdE0sNgrFEhzGWpL/vU47223rcjRPg6r3IuEUCPj5QCcU6ZxBNbJSSB6+2CCJkQEkrz9w9KJu8zTeZtW99r22ZA5/0JH9ZvNDZKLHMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/property/two.png
/* harmony default export */ const two = ({"src":"/_next/static/media/two.f17fa7f1.png","height":2304,"width":4096,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX///7+//7//v3+/v38/Pr6+vr5+fr5+fn5+Pn5+Pj4+Pn4+Pj39/f29vb19vX19fX09fX08/Ty8vLt8Pbv7e7l6fLl3OXd3eluwwROAAAAMElEQVR42g3GxwHAIAwEMCd07KOX/TfFeokACVYAgpi5f9HE71zKGu5rtKQp7DxXPClEAd6HHsndAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./data/businessData.js



const businessData = [
    {
        id: "238haas72&#",
        name: "Elegant Industries",
        title: "LTD Statybų taktikos",
        totalInvest: 19,
        investAmount: "6,94,196",
        investPer: 35.73,
        img: one,
        annualReturn: {
            regular: 7.5,
            bonus: 3
        },
        max_term: 12,
        investLink: "/business-loan/{id}"
    },
    {
        id: "238hs72&#",
        name: "Tagline Industries",
        title: "LTD Orandis",
        totalInvest: 58,
        investAmount: "1,04,196",
        investPer: 94.73,
        img: two,
        annualReturn: {
            regular: 9.5,
            bonus: 12
        },
        max_term: 48,
        investLink: "/business-loan/{id}"
    },
    {
        id: "238s72&#",
        name: "Circle Tree",
        title: "LTD Pri,ita",
        totalInvest: 99,
        investAmount: "1,04,196",
        investPer: 14.73,
        img: three,
        annualReturn: {
            regular: 1.5,
            bonus: 1
        },
        max_term: 36,
        investLink: "/business-loan/{id}"
    }
];
/* harmony default export */ const data_businessData = (businessData);


/***/ })

};
;