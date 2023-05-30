"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},i="Skia",s={unversionedId:"skia",id:"skia",title:"Skia",description:"What the difference between SkImage/SkPicture/SkCanvas/SkSurface?",source:"@site/../../docs/skia.md",sourceDirName:".",slug:"/skia",permalink:"/docs/skia",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../docs/skia.md",tags:[],version:"current",lastUpdatedBy:"frankchen",lastUpdatedAt:1685434769,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KillSwitch",permalink:"/docs/network/vpn/kill-switch"},next:{title:"LevelDB",permalink:"/docs/storage/storage-engine/leveldb"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"skia"},"Skia"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/rNWV-oYtps"},"What the difference between SkImage/SkPicture/SkCanvas/SkSurface?")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/zatUu89s5_I"},"SkBitmap based SkCanvas very slow... How to improve draw speeds?")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/M6G_bQd8Vf8"},"How to move SkImage from CPU to GPU?")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/EqvExXnEUbI"},"How to control the SkImage GPU back cache size?")),(0,n.kt)("p",null,"As far as I understand when I load SkImage from file or SkBitmap the SkImage lives in CPU side memory. Then the moment I draw this SkImage on a GPU backed canvas it will make a copy of the CPU data into a GPU backed texture. So now we technically have two copies available on the SkImage. Then each time I draw that SkImage it will do it quickly cause it's already in the GPU side."))}m.isMDXComponent=!0}}]);