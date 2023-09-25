"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 5501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./src/common/scrollAnims.js


const scrollAnimation = ()=>{
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
    // appearance
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section)=>{
        external_gsap_.gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            ease: "sine"
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    // rotate
    const rotate = document.querySelectorAll(".mil-rotate");
    rotate.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            rotate: 0
        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    // scroll progress
    external_gsap_.gsap.to(".mil-progress", {
        height: "100%",
        ease: "linear",
        scrollTrigger: {
            scrub: 1
        }
    });
    // back to top
    const btt = document.querySelector(".mil-back-to-top .mil-link");
    external_gsap_.gsap.set(btt, {
        opacity: .5
    });
    external_gsap_.gsap.to(btt, {
        opacity: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: "body",
            start: "top -20%",
            end: "top -20%",
            toggleActions: "play none reverse none"
        }
    });
};

;// CONCATENATED MODULE: ./src/common/preloader.js

const preloaderAnimation = ()=>{
    var timeline = gsap.timeline();
    timeline.to(".mil-preloader-content", {
        ease: "sine",
        y: 0,
        duration: 0.4,
        scale: 1,
        opacity: 1,
        delay: ".2"
    });
    timeline.to(".mil-preloader-content", {
        ease: "sine",
        y: "-200",
        duration: 0.4,
        scale: .6,
        opacity: 0,
        delay: "1.2"
    });
    timeline.to(".mil-preloader-frame", {
        ease: "sine",
        duration: 0.4,
        height: 0,
        onComplete: function() {
            document.querySelector("html").classList.remove("is-animating");
        }
    });
};

;// CONCATENATED MODULE: ./src/common/counters.js


const countersAnimation = ()=>{
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
    // counters
    const number = document.querySelectorAll(".mil-counter");
    number.forEach((element)=>{
        const count = element, zero = {
            val: 0
        }, num = count.dataset.number, split = (num + "").split("."), decimals = split.length > 1 ? split[1].length : 0;
        external_gsap_.gsap.to(zero, {
            val: num,
            duration: 2,
            ScrollTrigger: {
                trigger: count,
                toggleActions: "play none none reverse"
            },
            onUpdate: function() {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });
    // progressbar type 1
    const progGo = document.querySelectorAll(".mil-circular-progress");
    progGo.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            "--p": "0",
            ease: "sine"
        }, {
            "--p": value,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    // progressbars type 2
    const width = document.querySelectorAll(".mil-bar");
    width.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            width: 0,
            duration: 5000,
            ease: "sine"
        }, {
            width: value,
            scrollTrigger: {
                trigger: section,
                toggleClass: "mil-active",
                toggleActions: "play none none reverse"
            }
        });
    });
};

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(2459);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);
;// CONCATENATED MODULE: ./src/common/parallax.js

const parallaxAnimation = ()=>{
    var scene = document.getElementById("scene");
    if (scene != undefined) {
        var parallaxInstance = new (external_parallax_js_default())(scene, {
            limitY: 15
        });
    }
};

;// CONCATENATED MODULE: ./src/common/utilits.js
const anchorSscroll = ()=>{
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link)=>{
        link.addEventListener("click", (e)=>{
            event.preventDefault();
            var target = document.querySelector(link.getAttribute("href"));
            var offset = 90;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });
};
const accordion = ()=>{
    var acc = document.getElementsByClassName("mil-navigation");
    var menu = document.getElementsByClassName("mil-menu-btn");
    var i;
    for(i = 0; i < acc.length; i++){
        acc[i].onclick = function() {
            this.classList.toggle("mil-active");
            var panel = this.nextElementSibling;
            if (panel.style.height) {
                panel.style.height = null;
            } else {
                panel.style.height = panel.scrollHeight + "px";
            }
        };
    }
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/layouts/footers/LayoutDefault.js



const DefaultFooter = ({ extraClass  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "mil-fw",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "mil-light-soft",
                    children: app/* footer.copy */.Mv.J
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "mil-light-soft",
                    dangerouslySetInnerHTML: {
                        __html: app/* footer.dev */.Mv.W
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const LayoutDefault = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js


const Footer = ({ layout , bg , instagram , extraClass  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(LayoutDefault, {
                bg: bg,
                instagram: instagram,
                extraclassName: extraClass
            });
    }
};
/* harmony default export */ const Index = (Footer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/layouts/headers/LayoutDefault.js





const DefaultHeader = ({ extraClass  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const navItems = [];
    const { asPath  } = (0,router_.useRouter)();
    app/* header.menu.forEach */.Fs.GI.forEach((item, index)=>{
        let s_class1 = "";
        if (item.children != 0) {
            s_class1 = "mil-has-children";
        }
        if (asPath.indexOf(item.link) != -1 && item.link != "/" || asPath == item.link) {
            s_class1 += " mil-active";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-top-panel",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: app/* header.logo.link */.Fs.jY.p,
                    className: "mil-logo",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/logos/logo_blanc.svg"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `mil-navigation ${toggle ? "mil-active" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        id: "swupMenu",
                        className: "mil-menu-transition",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: item.classes,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: item.link,
                                            children: item.label
                                        }),
                                        item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            children: item.children.map((subitem, key2)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: subitem.link,
                                                        children: subitem.label
                                                    })
                                                }, `header-submenu${key}-item-${key2}`))
                                        })
                                    ]
                                }, `header-menu-item-${key}`))
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-top-panel-btns",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: app/* header.button.link */.Fs.LI.p,
                            className: "mil-contact-btn",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "feather feather-mail",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                        points: "22,6 12,13 2,6"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                            onClick: ()=>setToggle(!toggle),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const headers_LayoutDefault = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js


const Header = ({ layout , extraClass  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_LayoutDefault, {
                extarclassName: extraClass
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

;// CONCATENATED MODULE: ./src/layouts/preloader/Index.jsx

const CursorModule = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "mil-preloader-frame",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "mil-preloader-content",
                style: {
                    "transform": "scale(.6) translateY(200px)",
                    "opacity": "0"
                },
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mil-preloader",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "mil-circ-1"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "mil-circ-2"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "mil-circ-3"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "mil-circ-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "mil-upper",
                        children: "Loading"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const preloader_Index = ((/* unused pure expression or super */ null && (CursorModule)));

;// CONCATENATED MODULE: ./src/layouts/left-bar/Index.jsx


const leftPanelModule = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-left-panel",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-page-name mil-upper mil-dark",
                    children: "ACcueil"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "mil-social-icons",
                    children: [
                        app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: item.link,
                                    target: "_blank",
                                    className: "social-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: item.icon
                                    })
                                })
                            }, `lp-social-item-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                class: "photo-icon",
                                href: "http://photo.louisguigue.com",
                                target: "_blank",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    id: "Calque_2",
                                    "data-name": "Calque 2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 189.93 135.66",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("defs", {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("g", {
                                            id: "Calque_1-2",
                                            "data-name": "Calque 1",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        class: "cls-1",
                                                                        d: "M83.86,89.8h14.35c-1.45-1.43-2.41-3.56-2.41-6.38v-29.04c0-9.55,11.06-11.19,14.64-4.68,2.02,3.66,6.32,5.12,10.04,3.2,3.72-2.15,5.01-6.92,2.86-10.64-10.3-18.98-42.46-14.3-42.46,13.44v31.12c0,1.65,1.33,2.98,2.98,2.98Z"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        class: "cls-1",
                                                                        d: "M118.84,61.47h-7.46c-4.12,0-7.47,3.34-7.47,7.46s3.35,7.46,7.47,7.46v6.83c0,2.59-.89,4.96-2.47,6.58h5.54c4.25,0,7.69,3.45,7.69,7.69,0,.17,0,.34-.02,.51,4.68-9.64,4.68-18.68,4.36-23.2-.02-.6-.18-5.86-.18-5.86-.06-4.04-3.16-7.42-7.46-7.46Z"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                class: "cls-1",
                                                                d: "M71.16,28.61c4.23,.08,7.54,3.71,7.54,7.94v51.66c0,1.92,1.55,3.47,3.47,3.47h30.19c4.23,0,7.86,3.31,7.94,7.54,.08,4.31-3.39,7.84-7.69,7.84h-41.6c-4.25,0-7.69-3.44-7.69-7.69V36.29c0-4.29,3.52-7.77,7.83-7.69Z"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        class: "cls-1",
                                                        d: "M170.37,0H19.56C8.77,0,0,8.78,0,19.56V116.1c0,10.78,8.77,19.56,19.56,19.56H170.37c10.79,0,19.56-8.78,19.56-19.56V19.56c0-10.78-8.77-19.56-19.56-19.56Zm5.99,94.96h-20.35v-20.35h20.35v20.35ZM13.57,74.61h20.35v20.35H13.57v-20.35Zm0-33.92h20.35v20.35H13.57v-20.35ZM47.48,13.57h94.96V122.1H47.48V13.57Zm108.53,47.48v-20.35h20.35v20.35h-20.35Zm20.35-41.49v7.57h-20.35V13.57h14.35c3.31,0,5.99,2.69,5.99,5.99Zm-162.79,0c0-3.31,2.69-5.99,5.99-5.99h14.35v13.57H13.57v-7.57Zm0,96.54v-7.57h20.35v13.57h-14.35c-3.31,0-5.99-2.69-5.99-5.99Zm162.79,0c0,3.31-2.69,5.99-5.99,5.99h-14.35v-13.57h20.35v7.57Z"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const left_bar_Index = (leftPanelModule);

;// CONCATENATED MODULE: ./src/layouts/right-bar/Index.jsx

const rightPanelModule = ({ background , img  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-right-banner",
            id: "scene",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-progress-track",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-progress"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-banner-wrapper",
                    "data-depth": "1",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        id: "swupBg",
                        className: "mil-banner-frame",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: background,
                            alt: "background",
                            className: img ? "mil-banner-bg mil-blur" : "mil-banner-bg"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-banner-wrapper",
                    "data-depth": "0.2",
                    children: img != undefined && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        id: "swupPerson",
                        className: "mil-banner-frame",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: img,
                            alt: "person",
                            className: "mil-banner-person"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const right_bar_Index = (rightPanelModule);

;// CONCATENATED MODULE: ./src/layouts/back-to-top/Index.jsx

const backToTopModule = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mil-back-to-top",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                href: "#top",
                className: "mil-link mil-btt-icon",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "Back to top"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-arrow-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                points: "12 5 19 12 12 19"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const back_to_top_Index = (backToTopModule);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js













const Layouts = ({ children , header , footer , noHeader , noFooter , fullWidth , rightPanelBackground , rightPanelImg , fullWidth100 , extraClass  })=>{
    let bodyClass = false;
    let containerClass = false;
    if (fullWidth && fullWidth100) {
        bodyClass = [
            "mil-fw-page",
            "mil-100-page"
        ];
        containerClass = "mil-container-100";
    } else if (fullWidth) {
        bodyClass = "mil-fw-page";
        containerClass = "mil-container-fw";
    } else {
        bodyClass = false;
    }
    (0,external_react_.useEffect)(()=>{
        //preloaderAnimation();
        scrollAnimation();
        countersAnimation();
        parallaxAnimation();
        anchorSscroll();
        if (document != undefined && bodyClass) {
            document.querySelector("body").classList.add(...bodyClass);
        } else {
            document.querySelector("body").classList.remove("mil-fw-page");
            document.querySelector("body").classList.remove("mil-100-page");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-wrapper",
        id: "top",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-frame",
                children: [
                    !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                        layout: header,
                        extraclassName: extraClass
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(left_bar_Index, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(back_to_top_Index, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-content",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-scroll-wrapper transition-fade",
                        id: "swupMain",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: containerClass ? containerClass : "mil-container",
                            children: [
                                children,
                                !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                                    layout: footer
                                })
                            ]
                        })
                    }),
                    !fullWidth && /*#__PURE__*/ jsx_runtime.jsx(right_bar_Index, {
                        background: rightPanelBackground,
                        img: rightPanelImg
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"Xd":{"aD":"Louis Guigue, portfolio d\'un chef de projet web","Tb":"https://formspree.io/f/myyqnbea"},"Fs":{"jY":{"p":"/"},"LI":{"p":"/contact"},"GI":[{"label":"Accueil","link":"/","children":0},{"label":"Portfolio","link":"/projects","children":0},{"label":"Contact","link":"/contact","children":0}]},"Mv":{"J":"© 2023. GUIGUE Julien Louis. Tous droits réservés.","W":"Développé en ReactJS"},"xs":[{"link":"https://www.linkedin.com/in/julien-guigue-92976615b/","icon":"fab fa-linkedin","title":"Behance"}]}');

/***/ })

};
;