"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},w="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),w=c(n),m=r,d=w["".concat(l,".").concat(m)]||w[m]||u[m]||o;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[w]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/wifi-autoswitch-windows.md"},sidebar_label:"WiFi AutoSwitch Windows",description:"WiFi AutoSwitch Windows",keywords:["autoswitch","wifi","windows"],image:"https://i.imgur.com/mErPwqL.png",tags:["autoswitch","wifi","windows"],last_update:{date:new Date("2023-06-01T00:00:00.000Z"),author:"frank"}},a="WiFi AutoSwitch Windows",s={permalink:"/blog/wifi-autoswitch-windows",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wifi-autoswitch-windows.md",source:"@site/../../blog/wifi-autoswitch-windows.md",title:"WiFi AutoSwitch Windows",description:"WiFi AutoSwitch Windows",date:"2023-10-04T00:50:46.000Z",formattedDate:"October 4, 2023",tags:[{label:"autoswitch",permalink:"/blog/tags/autoswitch"},{label:"wifi",permalink:"/blog/tags/wifi"},{label:"windows",permalink:"/blog/tags/windows"}],readingTime:.855,hasTruncateMarker:!1,authors:[],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/wifi-autoswitch-windows.md"},sidebar_label:"WiFi AutoSwitch Windows",description:"WiFi AutoSwitch Windows",keywords:["autoswitch","wifi","windows"],image:"https://i.imgur.com/mErPwqL.png",tags:["autoswitch","wifi","windows"],last_update:{date:"2023-06-01T00:00:00.000Z",author:"frank"}},prevItem:{title:"VPN",permalink:"/blog/vpn"},nextItem:{title:"Learn CMake",permalink:"/blog/wiki-cmake"}},l={authorsImageUrls:[]},c=[],p={toc:c},w="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(w,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"autoSwitch")," is turned on, it allows Windows to continue looking for other auto-connected wireless networks while connected to the current wireless network. If a higher priority auto-connected wireless network than the currently connected wireless network comes in range, Windows will automatically connect to it instead."),(0,r.kt)("p",null,"It also needs to work along with ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," setting."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"There're 3 networks of profile name: ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-3"),". PC(windows) will try to connect ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-3")," if it's in range when it's already connected to ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TP-Link-2"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup ",(0,r.kt)("inlineCode",{parentName:"li"},"autoswitch"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'netsh wlan set profileparameter name="TP-Link-1" autoswitch=Yes\nnetsh wlan set profileparameter name="TP-Link-2" autoswitch=Yes\nnetsh wlan set profileparameter name="TP-Link-3" autoswitch=No\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setup ",(0,r.kt)("inlineCode",{parentName:"li"},"priority"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'netsh wlan set profileorder name="TP-Link-1" interface="Wi-Fi" priority=3\nnetsh wlan set profileorder name="TP-Link-2" interface="Wi-Fi" priority=2\nnetsh wlan set profileorder name="TP-Link-3" interface="Wi-Fi" priority=1\n')),(0,r.kt)("p",null,"other tools:"),(0,r.kt)("p",null,"List profile name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"netsh wlan show profiles\n")),(0,r.kt)("p",null,"List connected WiFi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"netsh wlan show interfaces\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://winaero.com/enable-auto-switch-for-wireless-network-connection-in-windows-10/"},"Enable Auto Switch for Wireless Network Connection in Windows 10")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://winaero.com/change-wifi-network-priority-in-windows-10/"},"Change WiFi network priority in Windows 10")))}u.isMDXComponent=!0}}]);