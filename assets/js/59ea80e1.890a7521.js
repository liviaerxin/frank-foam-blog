"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/learn-asgi.md"},authors:["frank"],tags:["backend","asgi"],description:"Learn ASGI",keywords:["Learn ASGI"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-07-11T00:00:00.000Z"),draft:!1,enableComments:!0},i="Learn ASGI",l={permalink:"/blog/learn-asgi",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/learn-asgi.md",source:"@site/../../blog/learn-asgi.md",title:"Learn ASGI",description:"Learn ASGI",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[{label:"backend",permalink:"/blog/tags/backend"},{label:"asgi",permalink:"/blog/tags/asgi"}],readingTime:.895,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/learn-asgi.md"},authors:["frank"],tags:["backend","asgi"],description:"Learn ASGI",keywords:["Learn ASGI"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-07-11T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Share Data between Docker Containers",permalink:"/blog/docker-containers-data-sharing"},nextItem:{title:"Avalonia",permalink:"/blog/avalonia"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nowadays as web server framework is getting easy to use and work with. In Python areas, FastAPI obtains nearly 60k stars and becomes the most popular web framework for Pythoners."),(0,r.kt)("p",null,"Looking at the advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"FastAPI"),", it simplifies everything from parsing http requests, middleware processing, authentication, database manipulation and more."),(0,r.kt)("p",null,"Let's dive into the behind-the-scenes technique stacks of ",(0,r.kt)("inlineCode",{parentName:"p"},"FastAPI"),"."),(0,r.kt)("p",null,"Before research, there are some common questions around the web server development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to process messages on ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")," protocol on ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP")," protocol? What're the favorite library used to do that?"),(0,r.kt)("li",{parentName:"ul"},"What are the differences between ",(0,r.kt)("inlineCode",{parentName:"li"},"WSGI")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ASGI"),"?"),(0,r.kt)("li",{parentName:"ul"},"Data model used for database and users")),(0,r.kt)("p",null,"stacks from low-level to high-level"),(0,r.kt)("p",null,"Uvicorn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ASGI web server implementation/interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"scope"),(0,r.kt)("li",{parentName:"ul"},"receive"),(0,r.kt)("li",{parentName:"ul"},"send"))),(0,r.kt)("li",{parentName:"ul"},"h11 to process HTTP messages"),(0,r.kt)("li",{parentName:"ul"},"websocket to process websocket messages")),(0,r.kt)("p",null,"Starlette:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ASGI framework"),(0,r.kt)("li",{parentName:"ul"},"abstract Request class for receive in ",(0,r.kt)("inlineCode",{parentName:"li"},"Uvicorn")),(0,r.kt)("li",{parentName:"ul"},"abstract Response class for send in ",(0,r.kt)("inlineCode",{parentName:"li"},"Uvicorn")),(0,r.kt)("li",{parentName:"ul"},"provide middleware")),(0,r.kt)("p",null,"FastAPI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fast to code"),(0,r.kt)("li",{parentName:"ul"},"OpenAPI docs"),(0,r.kt)("li",{parentName:"ul"},"Pydantic native model")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APIRoute")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APIRouter")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Application")," <-- ",(0,r.kt)("inlineCode",{parentName:"p"},"APIRouter")," <-- ",(0,r.kt)("inlineCode",{parentName:"p"},"APIRoute")))}c.isMDXComponent=!0}}]);