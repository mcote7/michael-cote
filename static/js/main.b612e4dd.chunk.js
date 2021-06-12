(this["webpackJsonpmichael-cote"]=this["webpackJsonpmichael-cote"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(8),r=c.n(a),o=c(2),l=c(0),n=function(){return Object(l.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10",children:Object(l.jsxs)("div",{className:"self-wrap",children:[Object(l.jsxs)("div",{className:"self-text",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," hello world"]}),Object(l.jsx)("p",{children:"i'm michael, a software developer in Seattle."})]}),Object(l.jsxs)("div",{className:"self",children:[Object(l.jsx)("span",{className:"back-1"}),Object(l.jsx)("span",{className:"back-2"})]})]})})},d=function(){return Object(l.jsxs)("div",{className:"main-wrap",children:[Object(l.jsx)("div",{id:"about",className:"row",style:{minHeight:"100vh"},children:Object(l.jsx)(n,{})}),Object(l.jsx)("div",{id:"projects",className:"row",style:{minHeight:"100vh"},children:"Projects"}),Object(l.jsx)("div",{id:"education",className:"row",style:{minHeight:"100vh"},children:"Education"})]})},u=c(9),j=c.n(u),b=function(e){var t=e.darkMode,c=e.handleDarkMode,i=e.setColorMode,a=e.isBlueActive,r=e.isOrangeActive,o=e.isGreenActive,n=j()({borderFloatClass:"abo-select",isAboutActive:"active",isProjectsActive:"",isEducationActive:""}),d=function(){var e=document.getElementById("projects").offsetTop-300,t=document.getElementById("education").offsetTop-300,c=+window.scrollY.toFixed();c<e&&(n.borderFloatClass="abo-select",n.isAboutActive="active",n.isProjectsActive="",n.isEducationActive="",document.title="Michael Cote \ud83d\udc68\u200d\ud83d\udd2c"),c>=e&&c<t&&(n.borderFloatClass="pro-select",n.isAboutActive="",n.isProjectsActive="active",n.isEducationActive="",document.title="Cote's projects \ud83d\udc68\u200d\ud83d\udcbb"),c>=t&&(n.borderFloatClass="edu-select",n.isAboutActive="",n.isProjectsActive="",n.isEducationActive="active",document.title="Cote's education \ud83d\udc68\u200d\ud83c\udf93")};Object(s.useEffect)((function(){return document.title="Michael Cote \ud83d\udc4b",document.addEventListener("scroll",d),function(){return document.removeEventListener("scroll",d)}}),[]);var u=function(e,t){var c=document.getElementById(t),s=c.offsetTop;c&&s&&window.scrollTo({top:"".concat(s-24),behavior:"smooth"})};return Object(l.jsxs)("div",{className:"neu-left-nav",children:[Object(l.jsxs)("div",{className:"left-nav-title",children:[Object(l.jsx)("h4",{children:"Michael Cote"}),Object(l.jsx)("small",{children:"software developer"})]}),Object(l.jsxs)("div",{className:"left-nav-social-links",children:[Object(l.jsx)("button",{onClick:function(e){return c(e)},children:t?Object(l.jsx)("i",{className:"fa fa-sun-o","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-moon-o","aria-hidden":"true"})}),Object(l.jsx)("a",{title:"\ud83d\udd17 GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mcote7",children:Object(l.jsx)("i",{className:"fa fa-github-alt","aria-hidden":"true"})}),Object(l.jsx)("a",{title:"\ud83d\udd17 LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/michael-cote-wa",children:Object(l.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})]}),Object(l.jsxs)("div",{className:"left-nav-main-links",children:[Object(l.jsx)("button",{id:"a",className:"neu-btn ".concat(n.isAboutActive),onClick:function(e){return u(0,"about")},children:"About"}),Object(l.jsx)("button",{id:"p",className:"neu-btn ".concat(n.isProjectsActive),onClick:function(e){return u(0,"projects")},children:"Projects"}),Object(l.jsx)("button",{id:"e",className:"neu-btn ".concat(n.isEducationActive),onClick:function(e){return u(0,"education")},children:"Education"}),Object(l.jsx)("div",{className:"border-float ".concat(n.borderFloatClass)})]}),Object(l.jsxs)("div",{className:"colors",children:[Object(l.jsx)("button",{onClick:function(e){return i("blue")},className:"color-pick blue ".concat(a),children:a?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(l.jsx)("button",{onClick:function(e){return i("green")},className:"color-pick green ".concat(o),children:o?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(l.jsx)("button",{onClick:function(e){return i("orange")},className:"color-pick orange ".concat(r),children:r?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})})]})]})},h=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1];Object(s.useEffect)((function(){var e=document.documentElement;null===e||void 0===e||e.style.setProperty("--bgcolor",c?"#444444":"#e4ebf5"),null===e||void 0===e||e.style.setProperty("--dark-shadow",c?"#363636":"#bec8e4"),null===e||void 0===e||e.style.setProperty("--light-shadow",c?"#525252":"#ffffff"),null===e||void 0===e||e.style.setProperty("--text-color-primary",c?"rgba(255, 255, 255, 0.93)":"rgba(0, 0, 0, 0.93)"),null===e||void 0===e||e.style.setProperty("--text-color-secondary",c?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"),null===e||void 0===e||e.style.setProperty("--text-color-disabled",c?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.45)"),null===e||void 0===e||e.style.setProperty("--bg-color-disabled",c?"#727272":"#dee5e8"),console.log("dark mode?",c)}),[c]);var a=Object(s.useState)("blue"),r=Object(o.a)(a,2),n=r[0],u=r[1],j=Object(s.useState)("active"),h=Object(o.a)(j,2),m=h[0],v=h[1],f=Object(s.useState)(""),O=Object(o.a)(f,2),p=O[0],x=O[1],y=Object(s.useState)(""),g=Object(o.a)(y,2),N=g[0],k=g[1];return Object(s.useEffect)((function(){var e=document.documentElement;"blue"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(218, 100%, 58%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(230, 100%, 58%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(217, 100%, 75%)"),v("active"),x(""),k("")),"green"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(108, 100%, 38%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(120, 100%, 38%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(107, 100%, 52%)"),x("active"),v(""),k("")),"orange"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(32, 100%, 48%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(28, 100%, 48%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(32, 100%, 62%)"),k("active"),v(""),x("")),console.log("color mode?",n)}),[n]),Object(l.jsxs)("div",{className:"container-fluid neu-app",children:[Object(l.jsx)(b,{handleDarkMode:function(e){i(!c)},colorMode:n,setColorMode:u,isBlueActive:m,isGreenActive:p,isOrangeActive:N}),Object(l.jsx)(d,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),i(e),a(e),r(e)}))};c(29),c(30),c(31);r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.b612e4dd.chunk.js.map