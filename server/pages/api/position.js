"use strict";
(() => {
var exports = {};
exports.id = 3460;
exports.ids = [3460];
exports.modules = {

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/images/icons/development.png
/* harmony default export */ const development = ({"src":"/_next/static/media/development.17cd0123.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42g2PQUrEQBBFf8XYCDOgwZVX8ARZxIt4gll5ntxBrzCrcZEThFnqRhhkHAQh6a6uX1ZBwS8eBe8LYvavfJRGRnfvSUfJnKxyB2CW/VtAkfeAXVUPaKA7tNgl7qEFMJp5lxcr7p6ub4ifU2R4Z5Vja9X7dTHcPyCpEttb4CpJ+jwqIN63ORu0MBbYBDyfDA4ir4QI0ealTmb+9HFk2dx5+j0blj8WFyZTTk0p3K2rXeiWvr8qwgWMrDkko0nz/LKdw3womQcaNR5UCw9WfXBi/gcq26dYVonIBgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/icons/marketing.png
/* harmony default export */ const marketing = ({"src":"/_next/static/media/marketing.351b46f0.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42h2MwU3EQAxFPbPRHFYrpLRBBTkECVEB4kYHOVFPeoArxz2xh1SQHhASu4CSyYztb6y1ZPv7vy8H8jq+4jbEMJpZBxhxxSSMwdEcjm8OQzg5bFWN8qIEgFyfpaKPnhr9aEvWevkSOrRGsUHdVmmZdYwq1uVFKO2R7p929PCYaH9jaflTKkW7xgdV78REv5fgGrStIHZPYdSULJOI3X1/op7ea1p+QLuEioDEm02RKwb/cM6rpi0rhUbJd2L3uOoQn18Oswd6ZnwIK5cNLFdtvYHmf7m3qfxtlRJbAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/icons/sales.png
/* harmony default export */ const sales = ({"src":"/_next/static/media/sales.ff32c5a0.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42h2PL07EQBhHf99MGRKypgmBBAiCgNlgcBXlIpwAxWFQPQEGjgBqV/QEFQgSBHo3bEunM98fCvo98R4BwOuzLp2jhggViyJP2nLWewAdvb3okojWqlbGnxkmBTkDs2xmsXZEaESsFNF0cQ1c3RBEJU2jlJm1ccxW9VvG8bmFwxPg6JRwdklhtxXkJFWRJkEcBX7Pw3sCQCiCYewFRoZiitwa7PbzXdKwo6Bq+PrgBK9hitrS02O/FNb1OGg5fMt/pCsM5HXD2Wp397DoYpQapKtwoHl/YXmGq78DU+t+AREEjsJm7P9SAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./data/positionData.js



const positionData = [
    {
        id: "37^2ha",
        category: "sales",
        title: "Director of Sales",
        tags: [
            "Sales",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: sales
    },
    {
        id: "37^24a",
        category: "marketing",
        title: "Business Development Representative",
        tags: [
            "Business",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: sales
    },
    {
        id: "31^2ha",
        category: "engineering",
        title: "Business Development Representative",
        tags: [
            "Business",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: development
    },
    {
        id: "3@1^2ha",
        category: "design",
        title: "Product Marketing Lead",
        tags: [
            "Marketing",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: marketing
    },
    {
        id: "31@!^2ha",
        category: "marketing",
        title: "Business Development Representative",
        tags: [
            "Business",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: development
    },
    {
        id: "3sa7^2ha",
        category: "design",
        title: "Director of Sales",
        tags: [
            "Sales",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: sales
    },
    {
        id: "as1@!^2ha",
        category: "marketing",
        title: "Business Development Representative",
        tags: [
            "Business",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: sales
    },
    {
        id: "37^23a",
        category: "design",
        title: "Product Marketing Lead",
        tags: [
            "Marketing",
            "Remote",
            "Full Time"
        ],
        link: "/career/{id}",
        logo: marketing
    }
];
/* harmony default export */ const data_positionData = (positionData);

;// CONCATENATED MODULE: ./pages/api/position.js

function handler(req, res) {
    res.status(200).json(data_positionData);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8591));
module.exports = __webpack_exports__;

})();