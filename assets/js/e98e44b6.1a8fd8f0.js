"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},26414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={authors:["frank"],tags:["Python Celery"],description:"Python Celery",keywords:["Python Celery"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-12-20T00:00:00.000Z"),draft:!1,enableComments:!0},i="Python Celery",l={permalink:"/blog/python-celery-workflow",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/python-celery-workflow.mdx",source:"@site/../../blog/python-celery-workflow.mdx",title:"Python Celery",description:"Python Celery",date:"2023-12-20T00:00:00.000Z",formattedDate:"December 20, 2023",tags:[{label:"Python Celery",permalink:"/blog/tags/python-celery"}],readingTime:.35,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["Python Celery"],description:"Python Celery",keywords:["Python Celery"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-12-20T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki VPN",permalink:"/blog/wiki-vpn"},nextItem:{title:"Python C Library",permalink:"/blog/python-c-library"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What's ",(0,o.kt)("strong",{parentName:"p"},"workflow")," in Celery?"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Celery"),", ",(0,o.kt)("strong",{parentName:"p"},"workflow")," is composed of multiple ",(0,o.kt)("strong",{parentName:"p"},"tasks"),", and a ",(0,o.kt)("strong",{parentName:"p"},"task")," is deemed to be a universal unit of the ",(0,o.kt)("strong",{parentName:"p"},"workflow"),", as a function in the program. In ",(0,o.kt)("strong",{parentName:"p"},"Celery"),", it's recommended to divide a long-running task into multiple short-running tasks. ",(0,o.kt)("strong",{parentName:"p"},"workflow")," comes out to help ease the orchestrations of the work, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"chain()")," three tasks."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviaerxin/fastapi-celery-ml/blob/main/app/examples/celery_workflow.py"},"A demo workflow")))}u.isMDXComponent=!0}}]);