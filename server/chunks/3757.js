"use strict";
exports.id = 3757;
exports.ids = [3757];
exports.modules = {

/***/ 6848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/banner/blog__thumb.png
/* harmony default export */ const blog_thumb = ({"src":"/_next/static/media/blog__thumb.ddf5e067.png","height":513,"width":502,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AdD//wAvvQEAtQPriDwvDGG8t9T48P4HwmNXG4TyBRLZAcPW+AATGQeC3MvqfQkNBwAGEQUA/Pf8ABsTBegZEf47AYoAvA8nxDzdIyIHE9vEuv0TFxsC9AQe+xP87wYhMxq3AbDC9l7l4wGhEh8B/x3YswENLTYA9BQbAObd6wApJQv4AcXb+PMKDAcM2M7c/7uh1wFAPBAARDsYAOTm/AATKRf7Adro+fYMCgYJqaHD/rFtzAJ4bwUAFhoL+ytZRwXxFRnKAe3z+WwCBASTi3zAABkU/f8QFg4AOywQAQ8rJPb2/QA/Af///wD2AABcg3Sykvz2/RAUGQMBPlI4zjkrFl/7AADUErVsYXgqyoEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/blog/Banner.jsx



const Banner = ({ children , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "banner clear__top bg__img banner--secondary blog-banner key-banner",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "banner__area",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "neutral-top",
                            children: title
                        }),
                        children
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: blog_thumb,
                alt: "blog__thumb",
                className: "banner__thumb"
            })
        ]
    });
};
/* harmony default export */ const blog_Banner = (Banner);


/***/ }),

/***/ 2258:
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
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _articleData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4626);






const BlogOverview = ()=>{
    const blogPost = _articleData__WEBPACK_IMPORTED_MODULE_5__/* ["default"][0] */ .Z[0];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog__overview section__space",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "blog__overview__area",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "search__bar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Articles & Resources"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "#",
                                method: "post",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "post_search",
                                                id: "postSearch",
                                                placeholder: "Search for articles",
                                                required: "required"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "button",
                                        children: "Search"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "featured__large__post",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/blog/{id}",
                                            className: "thumbnail",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: blogPost.img,
                                                alt: blogPost.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "blog__content",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/blog/{id}",
                                                        children: blogPost.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: blogPost.description
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/blog/{id}",
                                                    children: [
                                                        "Read More ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRight, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "featured__post",
                                    children: _articleData__WEBPACK_IMPORTED_MODULE_5__/* ["default"].slice */ .Z.slice(1, 5).map((item)=>{
                                        const { id , img , title  } = item;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "featured__post-single",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/blog/{id}",
                                                    className: "thumbnail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        src: img,
                                                        alt: title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "featured__post-single-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/blog/{id}",
                                                                children: title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog/{id}",
                                                            children: [
                                                                "Read More ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRight, {})
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, id);
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogOverview);


/***/ }),

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_articleData)
});

;// CONCATENATED MODULE: ./public/images/blog/big-poster.png
/* harmony default export */ const big_poster = ({"src":"/_next/static/media/big-poster.aaca0e4d.png","height":461,"width":726,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APDx8PX7+Ziwxq26x/D08/Dz9PP18/Hz8QDv8/L05OHk4eSLgJzm4eL28+jH1+Hq7vEA8/Xz7MnM8+Xn/enk0cnU6MSh37+c3ejrAPTs6sLG06qvwNXDyIuTq46Cn7CRkNjS1wCChqJzY4tpbJt2NnJyb5Nzbo6lk4qqgI2bVFvbYcxajgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./public/images/blog/latest-eight.png
var latest_eight = __webpack_require__(4494);
// EXTERNAL MODULE: ./public/images/blog/latest-four.png
var latest_four = __webpack_require__(8303);
// EXTERNAL MODULE: ./public/images/blog/latest-one.png
var latest_one = __webpack_require__(9743);
// EXTERNAL MODULE: ./public/images/blog/latest-three.png
var latest_three = __webpack_require__(2174);
// EXTERNAL MODULE: ./public/images/blog/latest__five.png
var latest_five = __webpack_require__(4365);
// EXTERNAL MODULE: ./public/images/blog/latest__two.png
var latest_two = __webpack_require__(1387);
;// CONCATENATED MODULE: ./public/images/blog/one.png
/* harmony default export */ const one = ({"src":"/_next/static/media/one.922fae79.png","height":152,"width":226,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AKzM0sjd39Dh4dXl5b3Q0pWhplZiaoOjqgDH3N/b6OjW5eXg7O12dH2frLDc6urB2d0AyNze1+bl3errsby/qpSZ3urq2Ofmw9nbALLR1MTc3p+wswAABkFte7jW2bjU167Q1ABIippDiJgAW3EHXXIpa35Ah5dDiJhGiZmcJ1CxGN6kTQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/blog/three.png
/* harmony default export */ const three = ({"src":"/_next/static/media/three.db457a36.png","height":152,"width":226,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhUlEQVR42hXMsQ6CMBAA0P7/4qqrk6OLCYubURcQo6RCapDEejXXq1gETQCP8D7gCaQ/EmPJTf3LjvJatM4zUi+sY19+bqlZLUAGS4C3BYuOhVSt3kyL7Xo27/aHujlNfB5SxcJgr+9fqZjOQR5Hj2Sn4shYHit6MRA7FUKWaMuXtHpiNwATxmpt2bdj7AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/blog/two.png
/* harmony default export */ const two = ({"src":"/_next/static/media/two.3441ec1d.png","height":152,"width":226,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AHqr34uy5ZC3636w75nF+cXl/9Tj9s22xwCryfTP3f/V4P/i7P/l5+7b19vWy9TfytAA8PP+7eDn9OPm+Onm19Hcy8/o6uzw1On9AOrk7ebL2/Xd3fvw4vPj7dHX/77U8KDL9ADR1u3i2Pb44Oj97ODt3O27xeyUw+2Cv+mUCWZA95hmfgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/blog/articleData.js










const articleData = [
    {
        id: "23h23h2",
        category: "articles",
        title: "Eight Tips For Launching Your Real Estate Investing Career",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: big_poster
    },
    {
        id: "23h@#h2",
        category: "news",
        title: "What Is Turn Key Real Estate Investing?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: one
    },
    {
        id: "23@5=2",
        category: "resources",
        title: "Getting Started in Residential Real Estate Investing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: two
    },
    {
        id: "20@5=2",
        category: "resources",
        title: "Resolving the Real Estate Investing Fear Factor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: two
    },
    {
        id: "2A@5=2",
        category: "news",
        title: "How to Make Better Real Estate Investments",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: three
    },
    {
        id: "2AB@5=2",
        category: "articles",
        title: "Learn the Benefits of Rental Property Investing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_one/* default */.Z
    },
    {
        id: "2AB@@5=2",
        category: "articles",
        title: "A Short Guide on Rental Property Investment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_two/* default */.Z
    },
    {
        id: "2AB8@@5=2",
        category: "resources",
        title: "Getting Started in Residential Real Estate Investing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_three/* default */.Z
    },
    {
        id: "2AB@%@5=2",
        category: "news",
        title: "Five Key Principles to Real Estate Investment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_four/* default */.Z
    },
    {
        id: "2Ab&@@5=2",
        category: "resources",
        title: "Tips For Commercial Real Estate Investment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_five/* default */.Z
    },
    {
        id: "2AB-@5=2",
        category: "articles",
        title: "How to Choose Real Estate Investment Property",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_one/* default */.Z
    },
    {
        id: "2AB5=2",
        category: "news",
        title: "How to Choose Real Estate Investment Property",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_eight/* default */.Z
    },
    {
        id: "2A-~@5=2",
        category: "articles",
        title: "How to Choose Real Estate Investment Property",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        img: latest_five/* default */.Z
    }
];
/* harmony default export */ const blog_articleData = (articleData);


/***/ }),

/***/ 2417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cards_SubscribeCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/blog/newsletter.png
/* harmony default export */ const newsletter = ({"src":"/_next/static/media/newsletter.ab824c6d.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX/+vj/+ff/8vD/8u/28///8e/18v//8O/18v7/7+//7+7+7+//7u3+7u/+7u7+7e3y7/797O345+735+315e705O3s4fbl3PTAs/SpoOyslOyrju+ReeV1VONQAOM+AOHVHaXGAAAAQ0lEQVR42h3LRxaAIBQDwIiiBvix93b/W+pz9gNRHwqUOWciYsraGimCzVwWS0cwHOt2GSG/38/JAHGYxv5fPveV+AJx8gNMm76abAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/cards/SubscribeCard.jsx



const SubscribeCard = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: newsletter,
                alt: "newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Subscribe to our newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "#",
                method: "post",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "input",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            name: "sub_email",
                            id: "subEmail",
                            placeholder: "Enter Your Email",
                            required: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "button button--effect",
                        children: "Subscribe"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_SubscribeCard = (SubscribeCard);


/***/ }),

/***/ 4022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Breadcrumb = ({ breadcrumbs =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "breadcrumb",
            children: breadcrumbs?.map(([itm, link], i, arr)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `breadcrumb-item ${i === arr.length - 1 && "active"}`,
                    children: i !== arr.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: link,
                        children: itm
                    }) : itm
                }, itm))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);



const Pagination = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "pagination justify-content-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "#",
                        className: "page-link",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsArrowLeft, {
                            className: "fs-5"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "#",
                        className: "page-link",
                        children: "01"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "#",
                        className: "page-link",
                        children: "02"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "#",
                        className: "page-link",
                        children: "03"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "#",
                        className: "page-link",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsArrowRight, {
                            className: "fs-5"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;