"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="RPC vs MQ",c={permalink:"/blog/rpc_vs_mq",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/rpc_vs_mq.md",source:"@site/../../blog/rpc_vs_mq.md",title:"RPC vs MQ",description:"RPC: synchronous, client needs to preserve the request until the client receives response.",date:"2023-11-21T06:19:09.000Z",formattedDate:"November 21, 2023",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Python Benchmark",permalink:"/blog/python-benchmark"},nextItem:{title:"Serialization",permalink:"/blog/serialization"}},s={authorsImageUrls:[]},l=[{value:"RPC",id:"rpc",level:2},{value:"IPC",id:"ipc",level:2},{value:"MQ",id:"mq",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RPC: synchronous, client needs to preserve the request until the client receives response.\nMQ(Message Queue): asynchronous, there is no need for client to wait for the response."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://particular.net/blog/rpc-vs-messaging-which-is-faster"},"RPC vs. Messaging \u2013 which is faster?")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54091672/low-latency-communication-of-micro-services-in-remote-ipc-and-threading-scenari"},"Low-latency communication of micro-services in remote, IPC and threading scenarios")),(0,o.kt)("h2",{id:"rpc"},"RPC"),(0,o.kt)("h2",{id:"ipc"},"IPC"),(0,o.kt)("p",null,"IPC: (local)Inter-Process Communication"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mpi-hd.mpg.de/personalhomes/fwerner/research/2021/09/grpc-for-ipc/"},"Using gRPC for (local) inter-process communication")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/goldsborough/ipc-bench"},"IPC Benchmark")),(0,o.kt)("h2",{id:"mq"},"MQ"))}m.isMDXComponent=!0}}]);