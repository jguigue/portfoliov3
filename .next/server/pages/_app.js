(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2806);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_scss_style_dark_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6849);
/* harmony import */ var _styles_scss_style_dark_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_style_dark_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_element_bundle__WEBPACK_IMPORTED_MODULE_7__]);
swiper_element_bundle__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







//import '../styles/scss/style-light.scss';


// register Swiper custom elements
(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_7__.register)();
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        react_gtm_module__WEBPACK_IMPORTED_MODULE_4___default().initialize({
            gtmId: "<GTM-TBG5RBNZ>"
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: _data_app_json__WEBPACK_IMPORTED_MODULE_3__/* .settings.siteName */ .Xd.aD
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 6849:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7935:
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ 9179:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/element/bundle");;

/***/ }),

/***/ 2806:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Xd":{"aD":"Louis Guigue, portfolio d\'un chef de projet web","Tb":"https://formspree.io/f/myyqnbea"},"Fs":{"jY":{"p":"/"},"LI":{"p":"/contact"},"GI":[{"label":"Accueil","link":"/","children":0},{"label":"Portfolio","link":"/projects","children":0},{"label":"Contact","link":"/contact","children":0}]},"Mv":{"J":"© 2023. GUIGUE Julien Louis. Tous droits réservés.","W":"Développé en ReactJS"},"xs":[{"link":"https://www.linkedin.com/in/julien-guigue-92976615b/","icon":"fab fa-linkedin","title":"Behance"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8375)));
module.exports = __webpack_exports__;

})();