"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9456],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>h});var m=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,m)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,m,s=function(a,e){if(null==a)return{};var t,m,s={},n=Object.keys(a);for(m=0;m<n.length;m++)t=n[m],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(m=0;m<n.length;m++)t=n[m],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=m.createContext({}),i=function(a){var e=m.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return m.createElement(l.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return m.createElement(m.Fragment,{},e)}},k=m.forwardRef((function(a,e){var t=a.components,s=a.mdxType,n=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),k=s,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||n;return t?m.createElement(h,r(r({ref:e},o),{},{components:t})):m.createElement(h,r({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var n=t.length,r=new Array(n);r[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[N]="string"==typeof a?a:s,r[1]=p;for(var i=2;i<n;i++)r[i]=t[i];return m.createElement.apply(null,r)}return m.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5339:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var m=t(7462),s=(t(7294),t(3905));const n={sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:new Date("2023-06-23T00:00:00.000Z"),author:"frank"}},r="Learn Vcpkg",p={permalink:"/blog/learn-vcpkg",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/learn-vcpkg.md",source:"@site/../../blog/learn-vcpkg.md",title:"Learn Vcpkg",description:"learn vcpkg",date:"2023-07-06T17:16:40.000Z",formattedDate:"July 6, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.03,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:"2023-06-23T00:00:00.000Z",author:"frank"}},prevItem:{title:"Learn PowerShell",permalink:"/blog/learn-powershell"},nextItem:{title:"LevelDB",permalink:"/blog/leveldb"}},l={authorsImageUrls:[]},i=[{value:"Manifest Mode",id:"manifest-mode",level:2},{value:"Classic Mode",id:"classic-mode",level:2},{value:"Useful Environment variables",id:"useful-environment-variables",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"Reinstall packages without caching",id:"reinstall-packages-without-caching",level:3},{value:"Clean up all packages",id:"clean-up-all-packages",level:3},{value:"Clean up all caching packages",id:"clean-up-all-caching-packages",level:3},{value:"<code>INSTALL_RPATH_USE_LINK_PATH</code> different behaviours in <code>manifest</code> and <code>classic</code> mode",id:"install_rpath_use_link_path-different-behaviours-in-manifest-and-classic-mode",level:3}],o={toc:i},N="wrapper";function c(a){let{components:e,...t}=a;return(0,s.kt)(N,(0,m.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"TODO: Fix qtbase tools/config in release/debug osx  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase"},"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup"},"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup")),(0,s.kt)("h2",{id:"manifest-mode"},"Manifest Mode"),(0,s.kt)("h2",{id:"classic-mode"},"Classic Mode"),(0,s.kt)("h2",{id:"useful-environment-variables"},"Useful Environment variables"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CURRENT_INSTALLED_DIR"),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"CURRENT_PACKAGES_DIR")),(0,s.kt)("p",null,'set(VCPKG_RELEASE_LIBDIR "',(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mi",{parentName:"msub"},"I")),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"D"),(0,s.kt)("mi",{parentName:"msub"},"D")),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mi",{parentName:"mrow"},"K"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"G"),(0,s.kt)("mi",{parentName:"msub"},"D")),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"G"),(0,s.kt)("mi",{parentName:"msub"},"L")),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'{CURRENT_INSTALLED_DIR}/lib") set(VCPKG_DEBUG_LIBDIR "')))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"RREN"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07847em"}},"I")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"NST"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"LL"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"D")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")),(0,s.kt)("span",{parentName:"span",className:"mord"},"/"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ib"),(0,s.kt)("span",{parentName:"span",className:"mord"},'"'),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"se"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"CP"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"D")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"EB"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"L")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord"},'"'))))),'{CURRENT_INSTALLED_DIR}/debug/lib")\nset(VCPKG_TOOLS_DIR "',(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mi",{parentName:"msub"},"I")),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"D"),(0,s.kt)("mi",{parentName:"msub"},"D")),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mi",{parentName:"mrow"},"K"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"G"),(0,s.kt)("mi",{parentName:"msub"},"S")),(0,s.kt)("mi",{parentName:"mrow"},"H"),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"E"),(0,s.kt)("mi",{parentName:"msub"},"D")),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'{CURRENT_INSTALLED_DIR}/tools") set(VCPKG_SHARE_DIR "')))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"RREN"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07847em"}},"I")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"NST"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"LL"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"D")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")),(0,s.kt)("span",{parentName:"span",className:"mord"},"/"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"oo"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord"},'"'),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"se"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"CP"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05764em"}},"S")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"D")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord"},'"'))))),'{CURRENT_INSTALLED_DIR}/share")\nset(VCPKG_INCLUDE_DIR "${CURRENT_INSTALLED_DIR}/include")'),(0,s.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,s.kt)("h3",{id:"reinstall-packages-without-caching"},"Reinstall packages without caching"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\nvcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\n\nvcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\n')),(0,s.kt)("h3",{id:"clean-up-all-packages"},"Clean up all packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /opt/vcpkg/installed/\nrm -rf /opt/vcpkg/packages/\nrm -rf /opt/vcpkg/buildtrees/\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"")),(0,s.kt)("h3",{id:"clean-up-all-caching-packages"},"Clean up all caching packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.cache/vcpkg/archives/\n")),(0,s.kt)("h3",{id:"install_rpath_use_link_path-different-behaviours-in-manifest-and-classic-mode"},(0,s.kt)("inlineCode",{parentName:"h3"},"INSTALL_RPATH_USE_LINK_PATH")," different behaviours in ",(0,s.kt)("inlineCode",{parentName:"h3"},"manifest")," and ",(0,s.kt)("inlineCode",{parentName:"h3"},"classic")," mode"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"INSTALL_RPATH_USE_LINK_PATH")," will not work properly when being used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest")," mode, because ",(0,s.kt)("inlineCode",{parentName:"p"},"CMake")," will don't handle libraries located in ",(0,s.kt)("inlineCode",{parentName:"p"},"buildtree"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'set_target_properties(${PROJECT_NAME} PROPERTIES\n    INSTALL_RPATH "@executable_path/../Frameworks"\n    INSTALL_RPATH_USE_LINK_PATH ON\n)\n')),(0,s.kt)("p",null,"After ",(0,s.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest")," mode:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,s.kt)("p",null,"After ",(0,s.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,s.kt)("inlineCode",{parentName:"p"},"classic")," mode:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 56\n         path /opt/vcpkg/installed/arm64-osx-dynamic/lib (offset 12)\nLoad command 27\n      cmd LC_FUNCTION_STARTS\n--\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/blog/learn-cmake#rpath-in-cmake"},"[learn-cmake#RPATH in CMake]")))}c.isMDXComponent=!0}}]);