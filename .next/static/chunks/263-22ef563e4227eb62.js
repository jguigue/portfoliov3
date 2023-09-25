"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{7263:function(e,l,s){s.d(l,{Z:function(){return T}});var r=s(5893),a=s(7294),i=s(990),n=s(6546);let t=()=>{i.p8.registerPlugin(n.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{i.p8.fromTo(e,{opacity:0,y:50,ease:"sine"},{y:0,opacity:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-rotate");l.forEach(e=>{var l=e.dataset.value;i.p8.fromTo(e,{ease:"sine",rotate:0},{rotate:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})}),i.p8.to(".mil-progress",{height:"100%",ease:"linear",scrollTrigger:{scrub:1}});let s=document.querySelector(".mil-back-to-top .mil-link");i.p8.set(s,{opacity:.5}),i.p8.to(s,{opacity:1,ease:"sine",scrollTrigger:{trigger:"body",start:"top -20%",end:"top -20%",toggleActions:"play none reverse none"}})},c=()=>{i.p8.registerPlugin(n.ScrollTrigger);let e=document.querySelectorAll(".mil-counter");e.forEach(e=>{let l=e,s={val:0},r=l.dataset.number,a=(r+"").split("."),n=a.length>1?a[1].length:0;i.p8.to(s,{val:r,duration:2,ScrollTrigger:{trigger:l,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=s.val.toFixed(n)}})});let l=document.querySelectorAll(".mil-circular-progress");l.forEach(e=>{var l=e.dataset.value;i.p8.fromTo(e,{"--p":"0",ease:"sine"},{"--p":l,duration:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-bar");s.forEach(e=>{var l=e.dataset.value;i.p8.fromTo(e,{width:0,duration:5e3,ease:"sine"},{width:l,scrollTrigger:{trigger:e,toggleClass:"mil-active",toggleActions:"play none none reverse"}})})};var o=s(3411),m=s.n(o);let d=()=>{var e=document.getElementById("scene");void 0!=e&&new(m())(e,{limitY:15})},h=()=>{let e=document.querySelectorAll('a[href^="#"]');e.forEach(e=>{e.addEventListener("click",l=>{event.preventDefault();var s=document.querySelector(e.getAttribute("href"));window.scrollTo({top:s.offsetTop-90,behavior:"smooth"})})})};var g=s(1664),p=s.n(g),u=s(2806);let v=e=>{let{extraClass:l}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("footer",{className:"mil-fw",children:[(0,r.jsx)("p",{className:"mil-light-soft",children:u.Mv.J}),(0,r.jsx)("p",{className:"mil-light-soft",dangerouslySetInnerHTML:{__html:u.Mv.W}})]})})},x=e=>{let{layout:l,bg:s,instagram:a,extraClass:i}=e;switch(l){case 1:case 2:return;default:return(0,r.jsx)(v,{bg:s,instagram:a,extraclassName:i})}};var j=s(1163);let f=e=>{let{extraClass:l}=e,[s,i]=(0,a.useState)(!1),n=[],{asPath:t}=(0,j.useRouter)();return u.Fs.GI.forEach((e,l)=>{let s="";0!=e.children&&(s="mil-has-children"),(-1!=t.indexOf(e.link)&&"/"!=e.link||t==e.link)&&(s+=" mil-active");let r=Object.assign({},e,{classes:s});n.push(r)}),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mil-top-panel",children:[(0,r.jsx)(p(),{href:u.Fs.jY.p,className:"mil-logo",children:(0,r.jsx)("span",{className:"",children:(0,r.jsx)("img",{src:"/img/logos/logo_blanc.svg"})})}),(0,r.jsx)("div",{className:"mil-navigation ".concat(s?"mil-active":""),children:(0,r.jsx)("nav",{id:"swupMenu",className:"mil-menu-transition",children:(0,r.jsx)("ul",{children:n.map((e,l)=>(0,r.jsxs)("li",{className:e.classes,children:[(0,r.jsx)("a",{href:e.link,children:e.label}),0!=e.children&&(0,r.jsx)("ul",{children:e.children.map((e,s)=>(0,r.jsx)("li",{children:(0,r.jsx)(p(),{href:e.link,children:e.label})},"header-submenu".concat(l,"-item-").concat(s)))})]},"header-menu-item-".concat(l)))})})}),(0,r.jsxs)("div",{className:"mil-top-panel-btns",children:[(0,r.jsx)(p(),{href:u.Fs.LI.p,className:"mil-contact-btn",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-mail",children:[(0,r.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,r.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),(0,r.jsx)("div",{className:"mil-menu-btn ".concat(s?"mil-active":""),onClick:()=>i(!s),children:(0,r.jsx)("span",{})})]})]})})},N=e=>{let{layout:l,extraClass:s}=e;switch(l){case 1:case 2:return;default:return(0,r.jsx)(f,{extarclassName:s})}},b=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mil-left-panel",children:[(0,r.jsx)("div",{className:"mil-page-name mil-upper mil-dark",children:"ACcueil"}),(0,r.jsxs)("ul",{className:"mil-social-icons",children:[u.xs.map((e,l)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e.link,target:"_blank",className:"social-icon",children:(0,r.jsx)("i",{className:e.icon})})},"lp-social-item-".concat(l))),(0,r.jsx)("li",{children:(0,r.jsx)("a",{class:"photo-icon",href:"http://photo.louisguigue.com",target:"_blank",children:(0,r.jsxs)("svg",{id:"Calque_2","data-name":"Calque 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 189.93 135.66",children:[(0,r.jsx)("defs",{}),(0,r.jsx)("g",{id:"Calque_1-2","data-name":"Calque 1",children:(0,r.jsxs)("g",{children:[(0,r.jsxs)("g",{children:[(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{class:"cls-1",d:"M83.86,89.8h14.35c-1.45-1.43-2.41-3.56-2.41-6.38v-29.04c0-9.55,11.06-11.19,14.64-4.68,2.02,3.66,6.32,5.12,10.04,3.2,3.72-2.15,5.01-6.92,2.86-10.64-10.3-18.98-42.46-14.3-42.46,13.44v31.12c0,1.65,1.33,2.98,2.98,2.98Z"}),(0,r.jsx)("path",{class:"cls-1",d:"M118.84,61.47h-7.46c-4.12,0-7.47,3.34-7.47,7.46s3.35,7.46,7.47,7.46v6.83c0,2.59-.89,4.96-2.47,6.58h5.54c4.25,0,7.69,3.45,7.69,7.69,0,.17,0,.34-.02,.51,4.68-9.64,4.68-18.68,4.36-23.2-.02-.6-.18-5.86-.18-5.86-.06-4.04-3.16-7.42-7.46-7.46Z"})]}),(0,r.jsx)("path",{class:"cls-1",d:"M71.16,28.61c4.23,.08,7.54,3.71,7.54,7.94v51.66c0,1.92,1.55,3.47,3.47,3.47h30.19c4.23,0,7.86,3.31,7.94,7.54,.08,4.31-3.39,7.84-7.69,7.84h-41.6c-4.25,0-7.69-3.44-7.69-7.69V36.29c0-4.29,3.52-7.77,7.83-7.69Z"})]}),(0,r.jsx)("path",{class:"cls-1",d:"M170.37,0H19.56C8.77,0,0,8.78,0,19.56V116.1c0,10.78,8.77,19.56,19.56,19.56H170.37c10.79,0,19.56-8.78,19.56-19.56V19.56c0-10.78-8.77-19.56-19.56-19.56Zm5.99,94.96h-20.35v-20.35h20.35v20.35ZM13.57,74.61h20.35v20.35H13.57v-20.35Zm0-33.92h20.35v20.35H13.57v-20.35ZM47.48,13.57h94.96V122.1H47.48V13.57Zm108.53,47.48v-20.35h20.35v20.35h-20.35Zm20.35-41.49v7.57h-20.35V13.57h14.35c3.31,0,5.99,2.69,5.99,5.99Zm-162.79,0c0-3.31,2.69-5.99,5.99-5.99h14.35v13.57H13.57v-7.57Zm0,96.54v-7.57h20.35v13.57h-14.35c-3.31,0-5.99-2.69-5.99-5.99Zm162.79,0c0,3.31-2.69,5.99-5.99,5.99h-14.35v-13.57h20.35v7.57Z"})]})})]})})})]})]})}),w=e=>{let{background:l,img:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mil-right-banner",id:"scene",children:[(0,r.jsx)("div",{className:"mil-progress-track",children:(0,r.jsx)("div",{className:"mil-progress"})}),(0,r.jsx)("div",{className:"mil-banner-wrapper","data-depth":"1",children:(0,r.jsx)("div",{id:"swupBg",className:"mil-banner-frame",children:(0,r.jsx)("img",{src:l,alt:"background",className:s?"mil-banner-bg mil-blur":"mil-banner-bg"})})}),(0,r.jsx)("div",{className:"mil-banner-wrapper","data-depth":"0.2",children:void 0!=s&&(0,r.jsx)("div",{id:"swupPerson",className:"mil-banner-frame",children:(0,r.jsx)("img",{src:s,alt:"person",className:"mil-banner-person"})})})]})})},y=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mil-back-to-top",children:(0,r.jsxs)("a",{href:"#top",className:"mil-link mil-btt-icon",children:[(0,r.jsx)("span",{children:"Back to top"}),(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})]})})}),k=e=>{let{children:l,header:s,footer:i,noHeader:n,noFooter:o,fullWidth:m,rightPanelBackground:g,rightPanelImg:p,fullWidth100:u,extraClass:v}=e,j=!1,f=!1;return m&&u?(j=["mil-fw-page","mil-100-page"],f="mil-container-100"):m?(j="mil-fw-page",f="mil-container-fw"):j=!1,(0,a.useEffect)(()=>{t(),c(),d(),h(),void 0!=document&&j?document.querySelector("body").classList.add(...j):(document.querySelector("body").classList.remove("mil-fw-page"),document.querySelector("body").classList.remove("mil-100-page"))},[]),(0,r.jsxs)("div",{className:"mil-wrapper",id:"top",children:[(0,r.jsxs)("div",{className:"mil-frame",children:[!n&&(0,r.jsx)(N,{layout:s,extraclassName:v}),(0,r.jsx)(b,{}),(0,r.jsx)(y,{})]}),(0,r.jsxs)("div",{className:"mil-content",children:[(0,r.jsx)("div",{className:"mil-scroll-wrapper transition-fade",id:"swupMain",children:(0,r.jsxs)("div",{className:f||"mil-container",children:[l,!o&&(0,r.jsx)(x,{layout:i})]})}),!m&&(0,r.jsx)(w,{background:g,img:p})]})]})};var T=k}}]);