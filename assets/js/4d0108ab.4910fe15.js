"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,h=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},40585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-proxy.mdx"},authors:["frank"],tags:["wiki","network","proxy"],description:"Wiki Proxy",keywords:["Wiki Proxy"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-11-29T00:00:00.000Z"),draft:!1,enableComments:!0},o="Wiki Network",l={permalink:"/blog/wiki-network",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-network.mdx",source:"@site/../../blog/wiki-network.mdx",title:"Wiki Network",description:"Wiki Proxy",date:"2023-11-29T00:00:00.000Z",formattedDate:"November 29, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"network",permalink:"/blog/tags/network"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:.3,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-proxy.mdx"},authors:["frank"],tags:["wiki","network","proxy"],description:"Wiki Proxy",keywords:["Wiki Proxy"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-11-29T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki Development Environment",permalink:"/blog/wiki-dev-environment"},nextItem:{title:"Wiki Assembly",permalink:"/blog/wiki-assembly"}},s={authorsImageUrls:[void 0]},p=[{value:"TCP handshake",id:"tcp-handshake",level:2},{value:"TLS handshake",id:"tls-handshake",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How does ",(0,a.kt)("strong",{parentName:"p"},"Wireshark")," sniff the network traffic on OSX?"),(0,a.kt)("p",null,"On OSX, ",(0,a.kt)("strong",{parentName:"p"},"Wireshark")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/bpf*")," which is the OSX system's packet capture devices.\nOn Linux, ",(0,a.kt)("strong",{parentName:"p"},"Wireshark")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," to capture the network interface such as ",(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"."),(0,a.kt)("h2",{id:"tcp-handshake"},"TCP handshake"),(0,a.kt)("h2",{id:"tls-handshake"},"TLS handshake"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/"},"https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/")))}m.isMDXComponent=!0}}]);