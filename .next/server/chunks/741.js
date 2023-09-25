"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"T":"Une question ? Un projet ?","L":{"P":"Contactez-moi !","p":"/contact"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/CallToAction.jsx



const CallToActionSection = ({ bg  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-divider mil-up mil-mb-90"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-p-0-90",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "mil-up mil-mb-30",
                                    children: call_to_action_namespaceObject.T
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-up",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: call_to_action_namespaceObject.L.p,
                                        className: "mil-btn mil-sm-btn",
                                        children: call_to_action_namespaceObject.L.P
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;