"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),b=n,d=c["".concat(p,".").concat(b)]||c[b]||m[b]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/resumable-upload.md"},authors:["frank"],tags:["fastapi","backend","protocol","tus"],description:"Resumable Upload",keywords:["file upload","resumable"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-07-07T00:00:00.000Z"),draft:!1,enableComments:!0},l="Resumable Upload",i={permalink:"/blog/resumable-upload",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/resumable-upload.md",source:"@site/../../blog/resumable-upload.md",title:"Resumable Upload",description:"Resumable Upload",date:"2023-07-07T00:00:00.000Z",formattedDate:"July 7, 2023",tags:[{label:"fastapi",permalink:"/blog/tags/fastapi"},{label:"backend",permalink:"/blog/tags/backend"},{label:"protocol",permalink:"/blog/tags/protocol"},{label:"tus",permalink:"/blog/tags/tus"}],readingTime:.71,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/resumable-upload.md"},authors:["frank"],tags:["fastapi","backend","protocol","tus"],description:"Resumable Upload",keywords:["file upload","resumable"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-07-07T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"C/C++ Build System",permalink:"/blog/c-build-system"},nextItem:{title:"Learn FFmpeg",permalink:"/blog/learn-ffmpeg"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To implement a resumable file upload, it is necessary to contain three parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Protocol: provide a mechanism for resumable file uploads"),(0,n.kt)("li",{parentName:"ul"},"Upload Server: receive an interrupted upload and store it in local machine or in cloud storage"),(0,n.kt)("li",{parentName:"ul"},"Upload Client: upload the file which may be interrupted")))}m.isMDXComponent=!0}}]);