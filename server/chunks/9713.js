"use strict";
exports.id = 9713;
exports.ids = [9713];
exports.modules = {

/***/ 9713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Isotope = ({ Tags , Content , url  })=>{
    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [filterDatas, setFilterDatas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [itemCatagory, setItemCatagory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const res = await fetch(`/api/${url}`);
        const data = await res.json();
        setProjects(data);
        const categories = [
            "all",
            ...new Set(data.map((project)=>project.category))
        ];
        setItemCatagory(categories);
    }, [
        url
    ]);
    const filterCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((filterItem)=>{
        const copyData = [
            ...projects
        ];
        if (filterItem) {
            if (filterItem === "all") {
                setFilterDatas(projects);
            } else {
                const filterData = copyData.filter((one)=>one.category === filterItem);
                setFilterDatas(filterData);
            }
            return;
        }
        setFilterDatas(copyData);
    }, [
        projects
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, [
        fetchData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        filterCategory();
    }, [
        filterCategory,
        projects
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tags, {
                itemCatagory: itemCatagory,
                filterCategory: filterCategory
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                filterDatas: filterDatas
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Isotope);


/***/ })

};
;