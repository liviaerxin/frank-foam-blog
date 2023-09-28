"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-emulator.mdx"},authors:["frank"],tags:["wiki","emulator"],description:"Wiki Emulator",keywords:["Wiki Emulator"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-20T00:00:00.000Z"),draft:!1,enableComments:!0},o="Wiki Emulator",l={permalink:"/blog/wiki-emulator",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-emulator.mdx",source:"@site/../../blog/wiki-emulator.mdx",title:"Wiki Emulator",description:"Wiki Emulator",date:"2023-09-20T00:00:00.000Z",formattedDate:"September 20, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"emulator",permalink:"/blog/tags/emulator"}],readingTime:.47,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-emulator.mdx"},authors:["frank"],tags:["wiki","emulator"],description:"Wiki Emulator",keywords:["Wiki Emulator"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-20T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"How to mount ISO image file",permalink:"/blog/how-to-mount-iso-file"},nextItem:{title:"QEMU",permalink:"/blog/wiki-qemu"}},u={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator-acceleration"},"Configure hardware acceleration for the Android Emulator")),(0,n.kt)("p",null,"Hardware acceleration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Graphics acceleration: Improve screen rendering, especially in games"),(0,n.kt)("li",{parentName:"ul"},"VM acceleration(a.k.a, CPU acceleration): Improve execution speed")),(0,n.kt)("p",null,"Graphics acceleration can be enabled with ",(0,n.kt)("inlineCode",{parentName:"p"},"-gpu")," option.\nWindows: It may need you add the ",(0,n.kt)("inlineCode",{parentName:"p"},"emulator.exe")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Graphics settings"),", such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"C:\\Users\\xx\\AppData\\Local\\Android\\Sdk\\emulator\\emulator.exe"')),(0,n.kt)("p",null,"VM acceleration is enabled in default.\nFor instance, if ",(0,n.kt)("inlineCode",{parentName:"p"},"WHPX")," is configured in windows, it will be used automatically. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"emulator.exe -avd Pixel_3a_API_34_extension_level_7_x86_64 -gpu host -no-snapshot\n")))}s.isMDXComponent=!0}}]);