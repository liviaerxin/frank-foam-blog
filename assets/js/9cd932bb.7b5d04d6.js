"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="Your markdown including PlantUML code block",c={permalink:"/blog/markdown-plantuml",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/markdown-plantuml.md",source:"@site/../../blog/markdown-plantuml.md",title:"Your markdown including PlantUML code block",description:"",date:"2023-07-19T15:02:40.000Z",formattedDate:"July 19, 2023",tags:[],readingTime:.665,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"LevelDB",permalink:"/blog/leveldb"},nextItem:{title:"Network Diagnosis",permalink:"/blog/network-diagnosis"}},i={authorsImageUrls:[]},p=[],m={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plantumlcode"},'@startuml\n:User: --\x3e (Use)\n"Main Admin" as Admin\n"Use the application" as (Use)\nAdmin --\x3e (Admin the application)\n@enduml\n')),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9sGo6ARNHr2QY66kwGcfS2T300",alt:null}),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROz1ImCn58Jl-HNJfL251V5UIgjjJwuBKdeIbcVoreQ-v2r9jkY_Tril7hmDpCmtp3eNIcKCOcO-MXaTOnceSF8a3rP3qBWo2nmKFWoQ2ig9aOVa2wFtmlZM4TlsTN50P7OeYa78CWX3ujv_pVu3zogEKnVqmYjZcastRr-skxUkQO-xkwUfVwxnMCFvL2EnBHG_XMjK6mXzi5Jtnjp6gwnZciQiEdwFotcWxY-w0kMRzvj-RkZCLvNDcgERJly0",alt:null}),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP5D2y8m38Rl_HLrU50OYdSHj-bHXEqa8YDsKOVj9cq7YlZVpVmUQdieVVFcIL8oDXQqhPHahRmGiigG3nLOr3d8lYYLAelHRol3TAr1eFdlWzPmSkDxj8u21z1Os1qQLnSBMtBPB4YZ-MIQXd4GJPDEAAcupmS-DsMb1VfyaqkwlUGcUKIertrHGHm7Ymz8ADY_cMX6gdwRdZrQ1zQWdf0htwohN6Pl90bhxNNvcLqOgwFyFl2IVGpEXcq5QMC7gqTsutzKXTEv6r-CHot6M6Iq_Ii0",alt:null}))}s.isMDXComponent=!0}}]);