"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,b=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["test","dynamic library"],image:"https://i.imgur.com/mErPwqL.png",tags:["test","dynamic library"],date:new Date("2023-06-02T00:00:00.000Z"),draft:!1},i="Test Dynamic Library",l={permalink:"/blog/test-dynamic-library",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../blog/test-dynamic-library.md",source:"@site/../../blog/test-dynamic-library.md",title:"Test Dynamic Library",description:"Test Dynamic Library",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"test",permalink:"/blog/tags/test"},{label:"dynamic library",permalink:"/blog/tags/dynamic-library"}],readingTime:.065,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["test","dynamic library"],image:"https://i.imgur.com/mErPwqL.png",tags:["test","dynamic library"],date:"2023-06-02T00:00:00.000Z",draft:!1},prevItem:{title:"Todo",permalink:"/blog/todo"},nextItem:{title:"Welcome Docusaurus v2",permalink:"/blog/welcome-docusaurus-v2"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import ctypes\nctypes.cdll.LoadLibrary("libOpenCvSharpExtern.so")\nctypes.CDLL("libOpenCvSharpExtern.so")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"objdump -p /usr/local/lib/libOpenCvSharpExtern.so\n")))}m.isMDXComponent=!0}}]);