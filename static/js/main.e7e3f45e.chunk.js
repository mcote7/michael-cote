(this["webpackJsonpmichael-cote"]=this["webpackJsonpmichael-cote"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(10),r=c.n(i),n=c(2),o=c(3),l=c.n(o),d=["JavaScript","TypeScript","HTML5","CSS3","C#","Python"].concat(["Angular","React","SaSS","Bootstrap","Node","RxJS","Lodash"].concat(["Firebase","MySQL","MongoDB"].concat(["VSCode","GitHub","Azure devOps","SQL workbench","PostMan","AdobeXD","InVision"]))),u=c(0),j=function(e){var t=e.darkMode,c=e.primaryColor,s=e.isBlueActive,i=e.isGreenActive,r=e.isOrangeActive,n=e.handleMouseMove,o=e.handleMouseLeave;return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{className:"col col-sm-12",children:[Object(u.jsxs)("div",{className:"self-wrap row",children:[Object(u.jsxs)("div",{className:"self-img col-lg-6",children:[Object(u.jsx)("span",{className:"back-1"}),Object(u.jsx)("span",{className:"back-2"})]}),Object(u.jsxs)("div",{className:"self-text col-lg-6 mt-5",children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," hello world"]}),Object(u.jsx)("p",{children:"i'm michael, a software developer in Seattle."})]})]}),Object(u.jsxs)("div",{className:"stats-wrap row",children:[Object(u.jsx)("div",{onMouseLeave:function(e){return o(e)},onMouseMove:function(e){return n(e)},className:"git-card col-lg-6",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=".concat(c.substring(1),"&border_color=444444&bg_color=444444&text_color=E1E1E1&title_color=").concat(c.substring(1)),alt:"stats"}),Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=dark&border_color=444444&bg_color=444444&text_color=E1E1E1",alt:"langs"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=".concat(c.substring(1),"&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5"),alt:"stats"}),Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=greywhite&border_color=e4ebf5&bg_color=e4ebf5",alt:"langs"})]})}),Object(u.jsxs)("div",{className:"role-card col-lg-6",children:[Object(u.jsxs)("div",{className:"role-title",children:[s&&Object(u.jsx)("div",{className:"angular blue"}),i&&Object(u.jsx)("div",{className:"angular green"}),r&&Object(u.jsx)("div",{className:"angular"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"current role: "}),Object(u.jsx)("p",{className:"sub",children:"software developer @"})]})]}),Object(u.jsxs)("div",{className:"role-body",children:[Object(u.jsxs)("a",{target:"_blank",title:"https://videonet.us/",rel:"noopener noreferrer",href:"https://videonet.us/",children:["videonet holdings\xa0",Object(u.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]}),Object(u.jsx)("div",{className:"quote",children:Object(u.jsx)("small",{children:"We are building secure business solutions using modern communication tools like videoconferencing, live streaming and real-time screen sharing."})}),Object(u.jsxs)("div",{className:"quote via3",children:[Object(u.jsx)("small",{children:"check out our platform:"}),Object(u.jsxs)("a",{target:"_blank",title:"https://unity.via3.com/",rel:"noopener noreferrer",href:"https://unity.via3.com/",children:["via3\xa0",Object(u.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]})]})]})]})]}),Object(u.jsx)("div",{className:"skills-wrap row",children:d&&d.map((function(e,t){return"TypeScript"===e||"Angular"===e||"SASS"===e?Object(u.jsx)("div",{className:"skill-badge key",children:e},t):Object(u.jsx)("div",{className:"skill-badge",children:e},t)}))})]})})},b=c(6),m=c.n(b),h=[{title:"O-SHOP",date:"5/21",url:"https://o-shop-c0e98.web.app/",repoUrl:"https://github.com/mcote7/o-shop",info:"A mock produce storefront, e-commerce functionality.",tech:["Angular","RXJS","SaSS","Firebase"]},{title:"MENU-CUBE",date:"12/20",url:"https://mcote7.github.io/react-menu-cube/",repoUrl:"https://github.com/mcote7/react-menu-cube",info:"3D navigation menu component.",tech:["React","css","JavaScript"]},{title:"JITSI-REACT",date:"12/20",url:"https://mcote7.github.io/jitsi-chat/",repoUrl:"https://github.com/mcote7/jitsi-chat",info:"Jitsi video chat with React.",tech:["React","SaSS","Jitsi"]}],v=function(e){var t=e.handleMouseMove,c=e.handleMouseLeave,i=Object(s.useState)(),r=Object(n.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(),j=Object(n.a)(d,2),b=j[0],v=j[1];Object(s.useEffect)((function(){fetch("https://api.github.com/users/mcote7/repos?page=1&per_page=100",{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.sort((function(e,t){var c=new Date(e.created_at);return new Date(t.created_at)-c}));l(t),v(t)}))}),[]);return Object(u.jsxs)("div",{className:"col col-sm-12",children:[Object(u.jsx)("div",{className:"featured-projects-wrap row",children:h&&h.map((function(e,t){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsxs)("div",{className:"featured-project",children:[Object(u.jsxs)("div",{className:"proj-info",children:[Object(u.jsxs)("div",{className:"proj-title",children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsx)("small",{children:e.date})]}),Object(u.jsx)("p",{children:e.info})]}),Object(u.jsx)("div",{className:"feat-proj-card",children:Object(u.jsx)("iframe",{src:e.url,frameBorder:"0",title:"o-shop"})}),Object(u.jsx)("div",{className:"tech-used row",children:e.tech.map((function(e,t){return Object(u.jsx)("div",{className:"tech-badge",children:e},t)}))}),Object(u.jsxs)("div",{className:"proj-links",children:[Object(u.jsxs)("a",{target:"_blank",title:"\ud83d\udd17 git repo code",rel:"noopener noreferrer",href:e.repoUrl,children:["git\xa0",Object(u.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]}),Object(u.jsxs)("a",{target:"_blank",title:"\ud83d\udd17 live site",rel:"noopener noreferrer",href:e.url,children:["live\xa0",Object(u.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]})]})]}),Object(u.jsx)("div",{className:"break-proj"})]},t)}))}),Object(u.jsxs)("div",{id:"git",className:"git-pinned-row row",children:[Object(u.jsx)("div",{className:"git-title-col",children:Object(u.jsxs)("div",{className:"git-title-col-card",children:[Object(u.jsxs)("div",{className:"control-git mb-4",children:[Object(u.jsx)("i",{class:"fa fa-code-fork","aria-hidden":"true"}),"\xa0github repositorys\xa0",Object(u.jsx)("i",{class:"fa fa-code-fork fa-flip-horizontal","aria-hidden":"true"})]}),Object(u.jsxs)("div",{className:"input-group mb-4",children:[Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})}),Object(u.jsx)("input",{onBlur:function(e){return e.target.value=""},onChange:function(e){return function(e){var t=b.filter((function(t){return t.name.includes(e.target.value)}));l(t)}(e)},className:"form-control",type:"text",placeholder:"search git repos..."})]}),Object(u.jsxs)("div",{className:"git-buttons",children:[Object(u.jsx)("button",{onClick:function(e){l(b)},children:"All Repos"}),Object(u.jsx)("button",{onClick:function(e){return function(e){var t=b.filter((function(e){return e.name.includes("react")||e.description.includes("React")}));l(t)}()},children:"React"}),Object(u.jsx)("button",{onClick:function(e){return function(e){var t=b.filter((function(e){return e.name.includes("angular")||e.description.includes("Angular")||e.name.includes("rxjs")||e.description.includes("RXJS")||e.name.includes("typescript")||e.description.includes("TypeScript")||e.name.includes("ngrx")||e.description.includes("NGRX")}));l(t)}()},children:"Angular"})]})]})}),o&&o.map((function(e,s){return Object(u.jsx)("div",{className:"col-xl-4 col-lg-6 my-3 git-col",children:Object(u.jsxs)("a",{onMouseMove:function(e){return t(e)},onMouseLeave:function(e){return c(e)},id:"".concat(s,"card"),className:s%2===0?"card git-card even":"card git-card",href:"".concat(e.html_url),target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("div",{className:"card-title",children:Object(u.jsx)("div",{children:e.name})}),Object(u.jsxs)("div",{className:"card-info",children:[Object(u.jsx)("div",{className:"card-desc",children:Object(u.jsx)("small",{children:e.description})}),Object(u.jsxs)("div",{title:"\ud83d\udd17 code_repo :\r\n".concat(e.html_url),className:"repo-languages mt-3",children:[e.language?Object(u.jsxs)("strong",{children:["<",e.language,"/>"]}):Object(u.jsx)("strong",{children:"<code/>"}),"\xa0",Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:Object(u.jsxs)("sub",{children:[e.size,"kb."]})})})]})]}),Object(u.jsxs)("div",{className:"card-foot mt-auto",children:[Object(u.jsxs)("div",{className:"card-dates",children:[Object(u.jsxs)("small",{children:["updated:\xa0",Object(u.jsx)("span",{children:m()(e.updated_at).format("MM.DD.YY")})]}),Object(u.jsxs)("small",{children:["created:\xa0",Object(u.jsx)("span",{children:m()(e.created_at).format("MM.DD.YY")})]})]}),Object(u.jsx)("div",{className:"git-circle-outer ms-auto",children:Object(u.jsx)("div",{className:"git-logo",children:Object(u.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})})})]})]})},s)}))]})]})},f=function(e){var t=e.darkMode,c=e.primaryColor,s=e.isBlueActive,i=e.isGreenActive,r=e.isOrangeActive,n=e.handleMouseMove,o=e.handleMouseLeave;return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("div",{id:"about",className:"row",style:{minHeight:"100vh"},children:Object(u.jsx)(j,{darkMode:t,primaryColor:c,isBlueActive:s,isGreenActive:i,isOrangeActive:r,handleMouseMove:n,handleMouseLeave:o})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"break-section"})}),Object(u.jsxs)("div",{id:"projects",className:"row",style:{minHeight:"100vh"},children:[Object(u.jsx)("p",{children:"Projects"}),Object(u.jsx)(v,{handleMouseMove:n,handleMouseLeave:o})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"break-section"})}),Object(u.jsxs)("div",{id:"education",className:"row",style:{minHeight:"100vh"},children:[Object(u.jsx)("p",{children:"Education"}),Object(u.jsx)("small",{children:"\ud83d\udea7 in dev..."})]})]})},p=function(e){var t=e.darkMode,c=e.handleDarkMode,a=e.setColorMode,i=e.isBlueActive,r=e.isGreenActive,n=e.isOrangeActive,o=l()({borderFloatClass:"abo-select",isAboutActive:"active",isProjectsActive:"",isEducationActive:""}),d=function(){var e=document.getElementById("projects").offsetTop-300,t=document.getElementById("education").offsetTop-300,c=+window.scrollY.toFixed();c<e&&(o.borderFloatClass="abo-select",o.isAboutActive="active",o.isProjectsActive="",o.isEducationActive="",document.title="about me \ud83d\udc68\u200d\ud83d\udd2c"),c>=e&&c<t&&(o.borderFloatClass="pro-select",o.isAboutActive="",o.isProjectsActive="active",o.isEducationActive="",document.title="my projects \ud83d\udc68\u200d\ud83d\udcbb"),c>=t&&(o.borderFloatClass="edu-select",o.isAboutActive="",o.isProjectsActive="",o.isEducationActive="active",document.title="my education \ud83d\udc68\u200d\ud83c\udf93")};Object(s.useEffect)((function(){return document.title="Hi \ud83d\udc4b",document.addEventListener("scroll",d),function(){return document.removeEventListener("scroll",d)}}),[]);var j=function(e,t){var c=document.getElementById(t),s=c.offsetTop;"about"!==c.id?window.scrollTo({top:"".concat(s-24),behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})},b=function(){document.getElementById("nav").classList.toggle("show-nav")};return Object(u.jsxs)("div",{id:"nav",className:"neu-left-nav",children:[Object(u.jsx)("button",{className:"nav-toggle",onClick:function(e){return b()},children:Object(u.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(u.jsxs)("div",{className:"left-nav-title",onClick:function(e){return b()},children:[Object(u.jsx)("h4",{children:"Michael Cote"}),Object(u.jsx)("small",{children:"software developer"})]}),Object(u.jsxs)("div",{className:"left-nav-social-links",children:[Object(u.jsx)("button",{onClick:function(e){return c(e)},children:t?Object(u.jsx)("i",{className:"fa fa-sun-o","aria-hidden":"true"}):Object(u.jsx)("i",{className:"fa fa-moon-o","aria-hidden":"true"})}),Object(u.jsx)("a",{title:"\ud83d\udd17 GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mcote7",children:Object(u.jsx)("i",{className:"fa fa-github-alt","aria-hidden":"true"})}),Object(u.jsx)("a",{title:"\ud83d\udd17 LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/michael-cote-wa",children:Object(u.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})]}),Object(u.jsxs)("div",{className:"left-nav-main-links",children:[Object(u.jsx)("button",{id:"a",className:"neu-btn ".concat(o.isAboutActive),onClick:function(e){return j(0,"about")},children:"About"}),Object(u.jsx)("button",{id:"p",className:"neu-btn ".concat(o.isProjectsActive),onClick:function(e){return j(0,"projects")},onDoubleClick:function(e){return j(0,"git")},children:"Projects"}),Object(u.jsx)("button",{id:"e",className:"neu-btn ".concat(o.isEducationActive),onClick:function(e){return j(0,"education")},children:"Education"}),Object(u.jsx)("div",{className:"border-float ".concat(o.borderFloatClass)})]}),Object(u.jsxs)("div",{className:"colors",children:[Object(u.jsx)("button",{onClick:function(){return a("blue")},className:"color-pick blue ".concat(i),children:i?Object(u.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(u.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(u.jsx)("button",{onClick:function(){return a("green")},className:"color-pick green ".concat(r),children:r?Object(u.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(u.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(u.jsx)("button",{onClick:function(){return a("orange")},className:"color-pick orange ".concat(n),children:n?Object(u.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(u.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})})]})]})},O=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){document.body.classList.add("no-transition");var e=document.documentElement;null===e||void 0===e||e.style.setProperty("--bgcolor",c?"#444444":"#e4ebf5"),null===e||void 0===e||e.style.setProperty("--dark-shadow",c?"#363636":"#bec8e4"),null===e||void 0===e||e.style.setProperty("--light-shadow",c?"#525252":"#ffffff"),null===e||void 0===e||e.style.setProperty("--text-color-primary",c?"rgba(255, 255, 255, 0.93)":"rgba(0, 0, 0, 0.93)"),null===e||void 0===e||e.style.setProperty("--text-color-secondary",c?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"),null===e||void 0===e||e.style.setProperty("--text-color-disabled",c?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.45)"),setTimeout((function(){document.body.classList.remove("no-transition")}),100)}),[c]);var i=Object(s.useState)("blue"),r=Object(n.a)(i,2),o=r[0],d=r[1],j=Object(s.useState)("#2977ff"),b=Object(n.a)(j,2),m=b[0],h=b[1],v=Object(s.useState)("active"),O=Object(n.a)(v,2),x=O[0],g=O[1],N=Object(s.useState)(""),y=Object(n.a)(N,2),k=y[0],A=y[1],w=Object(s.useState)(""),M=Object(n.a)(w,2),C=M[0],S=M[1];Object(s.useEffect)((function(){document.body.classList.add("no-transition");var e=document.documentElement;"blue"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#2978FF"),null===e||void 0===e||e.style.setProperty("--primary-dark","#0151D9"),null===e||void 0===e||e.style.setProperty("--primary-light","#7DADFE"),h("#2978FF"),g("active"),A(""),S("")),"green"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#28C200"),null===e||void 0===e||e.style.setProperty("--primary-dark","#219C00"),null===e||void 0===e||e.style.setProperty("--primary-light","#6BDD4D"),h("#28C200"),A("active"),g(""),S("")),"orange"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#F58300"),null===e||void 0===e||e.style.setProperty("--primary-dark","#C16700"),null===e||void 0===e||e.style.setProperty("--primary-light","#FFB560"),h("#F58300"),S("active"),g(""),A("")),setTimeout((function(){document.body.classList.remove("no-transition")}),100)}),[o]);var E=l()({x:0,y:0});return Object(u.jsxs)("div",{className:"container-fluid neu-app",children:[Object(u.jsx)(p,{darkMode:c,handleDarkMode:function(){a(!c)},setColorMode:d,isBlueActive:x,isGreenActive:k,isOrangeActive:C}),Object(u.jsx)(f,{darkMode:c,primaryColor:m,isBlueActive:x,isGreenActive:k,isOrangeActive:C,handleMouseMove:function(e){e.preventDefault(),document.getElementById("follow").classList.add("on"),E.x=e.clientX-18,E.y=e.clientY-18},handleMouseLeave:function(e){document.getElementById("follow").classList.remove("on")}}),Object(u.jsx)("div",{id:"follow",className:"follow",style:{top:"".concat(E.y,"px"),left:"".concat(E.x,"px")}})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),i(e),r(e)}))};c(31),c(32),c(33);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.e7e3f45e.chunk.js.map