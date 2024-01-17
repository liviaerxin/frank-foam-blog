"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1239],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,u=k["".concat(m,".").concat(s)]||k[s]||N[s]||l;return n?a.createElement(u,i(i({ref:e},o),{},{components:n})):a.createElement(u,i({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[k]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17578:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:["frank"],tags:["cheat sheet","x64","nasm","gas"],description:"x64 NASM Cheat Sheet",keywords:["x64 NASM cheat sheet"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-01-14T00:00:00.000Z"),draft:!1,enableComments:!0},i="x64 Assembly Cheat Sheet",d={permalink:"/blog/cheatsheet-assembly-x64",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/cheatsheet-assembly-x64.mdx",source:"@site/../../blog/cheatsheet-assembly-x64.mdx",title:"x64 Assembly Cheat Sheet",description:"x64 NASM Cheat Sheet",date:"2024-01-14T00:00:00.000Z",formattedDate:"January 14, 2024",tags:[{label:"cheat sheet",permalink:"/blog/tags/cheat-sheet"},{label:"x64",permalink:"/blog/tags/x-64"},{label:"nasm",permalink:"/blog/tags/nasm"},{label:"gas",permalink:"/blog/tags/gas"}],readingTime:5.695,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["cheat sheet","x64","nasm","gas"],description:"x64 NASM Cheat Sheet",keywords:["x64 NASM cheat sheet"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-01-14T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"ARM64/AArch64 Assembly Cheat Sheet",permalink:"/blog/cheatsheet-assembly-arm64"},nextItem:{title:"Database Migration Using Alembic in Python",permalink:"/blog/python-alembic"}},m={authorsImageUrls:[void 0]},p=[{value:"Registers",id:"registers",level:2},{value:"Data Type",id:"data-type",level:2},{value:"Memory and Addressing Modes",id:"memory-and-addressing-modes",level:2},{value:"Size Directives in <code>mov</code>",id:"size-directives-in-mov",level:2},{value:"Common instructions",id:"common-instructions",level:2},{value:"Mov and lea",id:"mov-and-lea",level:3},{value:"Stack operation",id:"stack-operation",level:2},{value:"Calling Convention",id:"calling-convention",level:2}],o={toc:p},k="wrapper";function N(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Including two main assembler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GNU Assembler(GAS): AT&T syntax"),(0,r.kt)("li",{parentName:"ul"},"NASM: Intel syntax")),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Register"),(0,r.kt)("th",{parentName:"tr",align:null},"Low 32-bits"),(0,r.kt)("th",{parentName:"tr",align:null},"Low 16-bits"),(0,r.kt)("th",{parentName:"tr",align:null},"Low 8-bit"),(0,r.kt)("th",{parentName:"tr",align:null},"High 8-bits"),(0,r.kt)("th",{parentName:"tr",align:null},"Calling convention"),(0,r.kt)("th",{parentName:"tr",align:null},"Callee-saved?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"General-purpose:"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%eax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%al")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ah")),(0,r.kt)("td",{parentName:"tr",align:null},"Return value"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rbx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ebx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%bx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%bl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%bh")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rcx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ecx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%cx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%cl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ch")),(0,r.kt)("td",{parentName:"tr",align:null},"4th argument"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rdx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%edx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%dx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%dl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%dh")),(0,r.kt)("td",{parentName:"tr",align:null},"3th argument"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rsi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%esi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%si")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%sil")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"2st argument"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rdi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%edi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%di")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%dil")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"1st argument"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r8")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r8d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r8w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r8b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"5th argument"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r9")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r9d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r9w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r9b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"6th argument"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r10d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r10w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r10b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r11")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r11d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r11w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r11b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r12")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r12d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r12w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r12b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r13")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r13d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r13w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r13b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r14")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r14d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r14w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r14b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r15")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r15d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r15w")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%r15b")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Special-purpose:"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rsp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%esp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%sp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%spl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Stack pointer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rbp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ebp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%bp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%bpl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Base pointer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rip")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%eip")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%ip")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Instruction pointer"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%rflags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%eflags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%flags")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Flags and condition codes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"data-type"},"Data Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Definition size"),(0,r.kt)("th",{parentName:"tr",align:null},"NASM"),(0,r.kt)("th",{parentName:"tr",align:null},"-"),(0,r.kt)("th",{parentName:"tr",align:null},"GAS"),(0,r.kt)("th",{parentName:"tr",align:null},"suffix"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8 bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BYTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16 bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dw")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WORD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"word"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"2byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"w"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32 bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DWORD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"int"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"4byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"l"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64 bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ddq"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"do")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"QWORD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quad"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"8byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"q"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dd")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dq")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extended precision"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dt")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ascii"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"asciz")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},".data\n  int8 .db 0x7f\n  msg .db 0x7f, 'E', 'L', 'F', 1, 1, 1, 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},".data\n  int8 .byte 0x7f\n  msg .byte 0x7f, 'E', 'L', 'F', 1, 1, 1, 0\n  ms  .asciz \"ELF\"\n  ms  .ascii \"ELF\", 0x0\n")),(0,r.kt)("h2",{id:"memory-and-addressing-modes"},"Memory and Addressing Modes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"mov eax, [ebx]  ; Move the 4 bytes in memory at the address contained in EBX into EAX\nmov [var], ebx  ; Move the contents of EBX into the 4 bytes at memory address var. (Note, var is a 32-bit constant).\nmov eax, [esi-4]    ; Move 4 bytes at memory address ESI + (-4) into EAX\nmov [esi+eax], cl   ; Move the contents of CL into the byte at address ESI+EAX\nmov edx, [esi+4*ebx]        ; Move the 4 bytes of data at address ESI+4*EBX into EDX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"mov (%ebx), %eax    /* Load 4 bytes from the memory address in EBX into EAX. */\nmov %ebx, var(,1)   /* Move the contents of EBX into the 4 bytes at memory address var.\n(Note, var is a 32-bit constant). */\nmov -4(%esi), %eax  /* Move 4 bytes at memory address ESI + (-4) into EAX. */\nmov %cl, (%esi,%eax,1)      /* Move the contents of CL into the byte at address ESI+EAX. */\nmov (%esi,%ebx,4), %edx         /* Move the 4 bytes of data at address ESI+4*EBX into EDX. */\n")),(0,r.kt)("h2",{id:"size-directives-in-mov"},"Size Directives in ",(0,r.kt)("inlineCode",{parentName:"h2"},"mov")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"mov BYTE [ebx], 2   ; Move 2 into the single byte at the address stored in EBX.\nmov WORD [ebx], 2   ; Move the 16-bit integer representation of 2 into the 2 bytes starting at the address in EBX.\nmov DWORD [ebx], 2      ; Move the 32-bit integer representation of 2 into the 4 bytes starting at the address in EBX.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"movb $2, (%ebx) /* Move 2 into the single byte at the address stored in EBX. */\nmovw $2, (%ebx) /* Move the 16-bit integer representation of 2 into the 2 bytes starting at the address in EBX. */\nmovl $2, (%ebx)         /* Move the 32-bit integer representation of 2 into the 4 bytes starting at the address in EBX. */\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"movsbl %al, %edx    # copy 1-byte %al, sign-extend into 4-byte %edx\nmovzbl %al, %edx    # copy 1-byte %al, zero-extend into 4-byte %edx\n")),(0,r.kt)("h2",{id:"common-instructions"},"Common instructions"),(0,r.kt)("h3",{id:"mov-and-lea"},"Mov and lea"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"mov src, dst              # general form of instruction dst = src\nmov $0, %eax              # %eax = 0\nmovb %al, 0x409892        # write to address 0x409892 low-byte of %eax\nmov 8(%rsp), %eax         # %eax = value read from address %rsp + 8\n\nlea 0x20(%rsp), %rdi      # %rdi = %rsp + 0x20 (no dereference!)\nlea (%rdi,%rdx,1), %rax   # %rax = %rdi + %rdx\n")),(0,r.kt)("h2",{id:"stack-operation"},"Stack operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"push %rbx         # push value of %rbx onto stack\npushq $0x3        # push immediate value 3 onto stack\nsub $0x10, %rsp   # adjust stack pointer to set aside 16 more bytes\n\npop %rax          # pop topmost value from stack into register %rax\nadd $0x10, %rsp   # adjust stack point to remove topmost 16 bytes\n")),(0,r.kt)("h2",{id:"calling-convention"},"Calling Convention"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"mov $0x3, %rdi    # first arg is passed in %rdi\nmov $0x7, %rsi    # second arg is passed in %rsi\ncallq binky       # transfers control to function binky\n")))}N.isMDXComponent=!0}}]);