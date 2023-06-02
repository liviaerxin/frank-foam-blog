"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={},a="RPC vs MQ",i={unversionedId:"network/rpc/rpc_vs_mq",id:"network/rpc/rpc_vs_mq",title:"RPC vs MQ",description:"RPC: synchronous, client needs to preserve the request until the client receives response.",source:"@site/../../docs/network/rpc/rpc_vs_mq.md",sourceDirName:"network/rpc",slug:"/network/rpc/rpc_vs_mq",permalink:"/docs/network/rpc/rpc_vs_mq",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../docs/network/rpc/rpc_vs_mq.md",tags:[],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:1685717305,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Diagnosis",permalink:"/docs/network/diagnosis/network-diagnosis"},next:{title:"VPN",permalink:"/docs/network/vpn/"}},s={},p=[{value:"RPC",id:"rpc",level:2},{value:"IPC",id:"ipc",level:2},{value:"MQ",id:"mq",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rpc-vs-mq"},"RPC vs MQ"),(0,o.kt)("p",null,"RPC: synchronous, client needs to preserve the request until the client receives response.\nMQ(Message Queue): asynchronous, there is no need for client to wait for the response."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://particular.net/blog/rpc-vs-messaging-which-is-faster"},"RPC vs. Messaging \u2013 which is faster?")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54091672/low-latency-communication-of-micro-services-in-remote-ipc-and-threading-scenari"},"Low-latency communication of micro-services in remote, IPC and threading scenarios")),(0,o.kt)("h2",{id:"rpc"},"RPC"),(0,o.kt)("h2",{id:"ipc"},"IPC"),(0,o.kt)("p",null,"IPC: (local)Inter-Process Communication"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mpi-hd.mpg.de/personalhomes/fwerner/research/2021/09/grpc-for-ipc/"},"Using gRPC for (local) inter-process communication")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/goldsborough/ipc-bench"},"IPC Benchmark")),(0,o.kt)("h2",{id:"mq"},"MQ"))}m.isMDXComponent=!0}}]);