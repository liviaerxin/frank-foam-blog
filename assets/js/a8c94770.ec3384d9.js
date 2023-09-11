"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),k=o,m=u["".concat(p,".").concat(k)]||u[k]||f[k]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},63738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={keywords:["vpn"],tags:["network","network/vpn","network/router"],more_data:["Can be provided",{as:"objects",or:"arrays"}]},i="VPN",l={permalink:"/blog/vpn",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/vpn.md",source:"@site/../../blog/vpn.md",title:"VPN",description:"OpenVPN: how secure virtual private networks really work",date:"2023-09-11T13:32:35.000Z",formattedDate:"September 11, 2023",tags:[{label:"network",permalink:"/blog/tags/network"},{label:"network/vpn",permalink:"/blog/tags/network-vpn"},{label:"network/router",permalink:"/blog/tags/network-router"}],readingTime:.8,hasTruncateMarker:!1,authors:[],frontMatter:{keywords:["vpn"],tags:["network","network/vpn","network/router"],more_data:["Can be provided",{as:"objects",or:"arrays"}]},prevItem:{title:"Skia",permalink:"/blog/skia"},nextItem:{title:"WiFi AutoSwitch Windows",permalink:"/blog/wifi-autoswitch-windows"}},p={authorsImageUrls:[]},c=[{value:"Routers Support for VPN(OpenVPN) Client",id:"routers-support-for-vpnopenvpn-client",level:2},{value:"Kill Switch",id:"kill-switch",level:2},{value:"PF(packet filter) MacOS",id:"pfpacket-filter-macos",level:2},{value:"Set Up Firewall to Allow Access Only via VPN(KillSwitch)",id:"set-up-firewall-to-allow-access-only-via-vpnkillswitch",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudacademy.com/blog/openvpn-how-secure-virtual-private-networks-really-work/"},"OpenVPN: how secure virtual private networks really work")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"!!!Favorite explanation")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://networkengineering.stackexchange.com/questions/51159/how-do-vpns-forward-network-traffic-layer-3"},"ip - How do VPN's forward network traffic? (Layer 3) - Network Engineering Stack Exchange")),(0,o.kt)("h2",{id:"routers-support-for-vpnopenvpn-client"},"Routers Support for VPN(OpenVPN) Client"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.surfshark.com/hc/en-us/articles/360003103833-How-to-set-up-a-router-with-Surfshark-"},"How to set up a router with Surfshark? \u2013 Surfshark Customer Support")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.tp-link.com/en/home/forum/topic/272492"},"Routers Supporting VPN Client - Home Network Community")),(0,o.kt)("h2",{id:"kill-switch"},"Kill Switch"),(0,o.kt)("p",null,"KillSwitch could be used to block outgoing traffic when the VPN connection drops and crashes."),(0,o.kt)("h2",{id:"pfpacket-filter-macos"},"PF(packet filter) MacOS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://iyanmv.medium.com/setting-up-correctly-packet-filter-pf-firewall-on-any-macos-from-sierra-to-big-sur-47e70e062a0e"},"Setting up correctly Packet Filter (pf) firewall on any macOS")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://superuser.com/questions/468919/prevent-outgoing-traffic-unless-openvpn-connection-is-active-using-pf-conf-on-ma"},"Prevent outgoing traffic unless OpenVPN connection is active using pf.conf on Mac OS X")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.neilsabol.site/post/quickly-easily-adding-pf-packet-filter-firewall-rules-macos-osx/"},"Quick and easy pf (packet filter) firewall rules on macOS")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://krypted.com/mac-security/a-cheat-sheet-for-using-pf-in-os-x-lion-and-up/"},"A Cheat Sheet For Using pf in OS X Lion and Up")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf"},"OS X PF Manual")),(0,o.kt)("h2",{id:"set-up-firewall-to-allow-access-only-via-vpnkillswitch"},"Set Up Firewall to Allow Access Only via VPN(KillSwitch)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zorrovpn.com/articles/windows-firewall-vpn-only?lang=en"},"ENABLING VPN-ONLY ACCESS TO THE INTERNET WITH WINDOWS FIREWALL")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/vpn-kill-switch/killswitch"},"KillSwitch for macOS")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://superuser.com/questions/468919/prevent-outgoing-traffic-unless-openvpn-connection-is-active-using-pf-conf-on-ma"},"Prevent outgoing traffic unless OpenVPN connection is active using pf.conf on Mac OS X")))}f.isMDXComponent=!0}}]);