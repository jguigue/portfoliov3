"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"ri":{"B":"/img/logos/logo_couleur.svg","w":"avatar"},"TN":"Louis Guigue, chef de projet fraîchement diplômé avec six années d\'expériences à son actif","WL":"Je m’appelle Louis Guigue, 26 ans, 6 années d’alternances à mon actif et fraîchement diplômé d’un Master Ingémédia, Information Communication parcours Création, Innovation et Management de projets numériques à l\'Université de Toulon. J\'ai fait mes classes pendant deux années à Airbus Helicopters en tant que Community Manager, et responsable des communautés digitales mais aussi à My Groom Service une agence de création de sites pour hôtels et restaurants en tant qu’Assistant marketing.  Ma dernière expérience est celle de chef de projet numérique où j’ai eu l’opportunité de gérer de nombreux clients du secteur public dans la création de leurs sites. Mon objectif est de devenir Chef de projet web, Product Owner ou Scrum master. Ce qui m\'importe le plus est d\'exploiter mes expériences dans le multimédia au service d\'une équipe (développement FE et BE, UX/UI, design graphique .etc)","uF":{"B":"/img/person/sign.jpg","w":"signature"}}');
;// CONCATENATED MODULE: ./src/components/sections/About.jsx


const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            id: "about",
            className: "mil-p-0-90",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-oval-frame-2 mil-mb-90",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: about_namespaceObject.ri.B,
                        alt: about_namespaceObject.ri.w
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "mil-up mil-mb-30",
                                    dangerouslySetInnerHTML: {
                                        __html: about_namespaceObject.TN
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-quote mil-up mil-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-quote-left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-up mil-description mil-mb-30",
                                    children: about_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: about_namespaceObject.uF.B,
                                    alt: about_namespaceObject.uF.w,
                                    className: "mil-up mil-sign"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroOne)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-1.json
const hero_1_namespaceObject = JSON.parse('{"Oc":"Bonjour! Je suis","TN":"Louis<br/>Guigue","WL":"Chef de projet web"}');
;// CONCATENATED MODULE: ./src/components/sections/HeroOne.jsx


const HeroOne = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "mil-side-banner mil-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-banner-top mil-up"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-banner-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-upper mil-dark mil-up mil-mb-30",
                            children: hero_1_namespaceObject.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "mil-up mil-mb-30",
                            dangerouslySetInnerHTML: {
                                __html: hero_1_namespaceObject.TN
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-upper mil-dark mil-up",
                            children: hero_1_namespaceObject.WL
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-up mil-oval-frame",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-circle-text",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 300 300",
                                enableBackground: "new 0 0 300 300",
                                xmlSpace: "preserve",
                                className: "mil-ct-svg mil-rotate",
                                "data-value": "360",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            id: "circlePath",
                                            d: "M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                        cx: "150",
                                        cy: "100",
                                        r: "75",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("use", {
                                                xlinkHref: "#circlePath",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("text", {
                                                style: {
                                                    "letterSpacing": "6.5px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("textPath", {
                                                    xlinkHref: "#circlePath",
                                                    children: "Mon Curriculum vitae \xe0 jour"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#about",
                                className: "mil-button",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "feather feather-arrow-down",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                            points: "19 12 12 19 5 12"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sections_HeroOne = (HeroOne);


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"T":"Latest from blog","j":2}');
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./src/lib/date.js


function date_Date({ dateString  }) {
    const date = parseISO(dateString);
    return /*#__PURE__*/ _jsx("time", {
        dateTime: dateString,
        children: format(date, "LLLL d, yyyy")
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts , layout , imageHorizontal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: latest_posts_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-30",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: posts.slice(0, latest_posts_namespaceObject.j).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/blog/${item.id}`,
                                className: "mil-blog-card mil-mb-60",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-cover mil-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-link mil-icon-link",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
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
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-descr",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: "mil-up mil-mb-30",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mil-up",
                                                children: item.short
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `blog-post-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"T":"Langues","e":[{"title":"Français","icon":"/img/icons/france.svg","text":"Langue natale","link":"/services/service-1"},{"title":"Anglais","icon":"/img/icons/great-britain.svg","text":"Niveau avancé, TOEIC 895","link":"/services/service-2"},{"title":"Italien","icon":"/img/icons/italy.svg","text":"Apprentissage en cours (A1)","link":"/services/service-3"}]}');
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx


const ServicesSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: services_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-30",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-icon-box mil-center mil-mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-service-icon mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.icon,
                                            alt: item.title,
                                            className: "mil-mb-30"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "mil-up mil-mb-30",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        children: item.text
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-up"
                                    })
                                ]
                            })
                        }, `services-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_SkillsTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/skills-2.json
const skills_2_namespaceObject = JSON.parse('{"T":"Compétences","e":[{"label":"Gestion de projet agile & en cascade","value":"90"},{"label":"Communication digitale","value":"90"},{"label":"HTML5/CSS3/WP","value":"90"},{"label":"Figma / Adobe XD","value":"80"},{"label":"Prompt Engineering","value":"80"},{"label":"Adobe Illustrator","value":"80"},{"label":"Adobe Indesign","value":"70"},{"label":"SEO/SMO","value":"60"},{"label":"Adobe Premiere Pro","value":"60"},{"label":"VueJS / Laravel","value":"50"},{"label":"Adobe After Effects","value":"40"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/sections/SkillsTwo.jsx



const SkillsTwo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: skills_2_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: skills_2_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-lang-skills-item mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mil-up mil-mb-30",
                                        children: item.label
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-line-progress mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-bar",
                                            "data-value": `${item.value}%`
                                        })
                                    })
                                ]
                            })
                        }, `skills2-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const sections_SkillsTwo = (SkillsTwo);


/***/ })

};
;