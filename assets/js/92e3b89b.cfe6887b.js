"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6633],{17439:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=s(74848),i=s(28453);const t={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-coral.mdx"},authors:["frank"],tags:["wiki","coral","serial console"],description:"wiki-coral",keywords:["wiki","coral","mendel"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-18T00:00:00.000Z"),draft:!1,enableComments:!0},r="Wiki Coral",a={permalink:"/blog/wiki-coral",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-coral.mdx",source:"@site/../../blog/wiki-coral.mdx",title:"Wiki Coral",description:"wiki-coral",date:"2023-09-18T00:00:00.000Z",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"coral",permalink:"/blog/tags/coral"},{label:"serial console",permalink:"/blog/tags/serial-console"}],readingTime:2.06,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-coral.mdx"},authors:["frank"],tags:["wiki","coral","serial console"],description:"wiki-coral",keywords:["wiki","coral","mendel"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-18T00:00:00.000Z",draft:!1,enableComments:!0},unlisted:!1,prevItem:{title:"Wiki QEMU",permalink:"/blog/wiki-qemu"},nextItem:{title:"Wiki Cross Compilation",permalink:"/blog/wiki-cross-compilation"}},l={authorsImageUrls:[void 0]},d=[{value:"Resources",id:"resources",level:2},{value:"Background",id:"background",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Set up Coral Dev Board for employing an Edge TPU coprocessor."}),"\n",(0,n.jsx)(o.p,{children:"Prototype new projects demanding fast on-device inference for the ML models."}),"\n",(0,n.jsx)(o.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://coral.ai/docs/dev-board/get-started/",children:"Get started with the Dev Board | CoralCoralClose"})}),"\n",(0,n.jsx)(o.h2,{id:"background",children:"Background"}),"\n",(0,n.jsxs)(o.p,{children:["The official documents ",(0,n.jsx)(o.a,{href:"https://coral.ai/docs/dev-board/get-started/",children:"Get started with the Dev Board"})," contains comprehensive how-to contents and rich examples. Here are just some experiences from myself. You can always go back to the official website to review and get the details."]}),"\n",(0,n.jsxs)(o.p,{children:["The recommended method to access the Coral board is using ",(0,n.jsx)(o.a,{href:"https://coral.ai/docs/dev-board/mdt/",children:"Mendel Development Tool (mdt)"}),", which is required to be installed on your host machine alongside the ",(0,n.jsx)(o.code,{children:"Python"}),". Common steps to enter the shell terminal from ",(0,n.jsx)(o.code,{children:"mdt"})," are in following:"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"mdt"})," tool generate a pair of ",(0,n.jsx)(o.code,{children:"SSH key"}),"s, save the ",(0,n.jsx)(o.code,{children:"private key"})," on the host and push the ",(0,n.jsx)(o.code,{children:"public key"})," to the Coral using ",(0,n.jsx)(o.code,{children:"http"})," via ",(0,n.jsx)(o.code,{children:"41337"})," port."]}),"\n",(0,n.jsxs)(o.li,{children:["Coral board has a running a ",(0,n.jsx)(o.code,{children:"mdt-keymaster"})," server that is listening ",(0,n.jsx)(o.code,{children:"41337"})," port, and put the ",(0,n.jsx)(o.code,{children:"public key"})," into ",(0,n.jsx)(o.code,{children:"~/.ssh/authorized_keys"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"mdt shell"})," now can login to the shell terminal of Coral board like ",(0,n.jsx)(o.code,{children:"ssh mendel@192.168.100.2"})," when connecting over USB-C(OTG) or ",(0,n.jsx)(o.code,{children:"ssh mendel@indigo-quill.local"})," over the same network where your host PC is."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Coral board is set up by disabling password login in ",(0,n.jsx)(o.code,{children:"OpenSSH"})," in default, so it must be provided with ",(0,n.jsx)(o.code,{children:"SSH key"})," otherwise you change the setting to be like ",(0,n.jsx)(o.code,{children:"PasswordAuthentication yes"}),"."]})}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsxs)(o.p,{children:["You can check the ",(0,n.jsx)(o.code,{children:"key master"})," by,"]}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"mendel@indigo-quill:~$ lsof -i:41337\nCOMMAND    PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nmdt-keyma 7846 mendel    5u  IPv4  20302      0t0  TCP 192.168.100.2:41337 (LISTEN)\nmdt-keyma 7847 mendel    6u  IPv4  20619      0t0  TCP 192.168.101.2:41337 (LISTEN)\n"})})]}),"\n",(0,n.jsxs)(o.p,{children:["Although ",(0,n.jsx)(o.code,{children:"mdt"})," maybe facilitate the access to the Coral board, some magics and additional steps are kept from sight."]}),"\n",(0,n.jsxs)(o.p,{children:["To do not use ",(0,n.jsx)(o.code,{children:"mdt"}),", we need access the dev board through ",(0,n.jsx)(o.code,{children:"serial console"})," instead of ",(0,n.jsx)(o.code,{children:"mdt keymaster"})," server, to make configuration."]}),"\n",(0,n.jsx)(o.p,{children:"There are general ways to access a just-setup Coral in brief steps:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Connect to Coral board's ",(0,n.jsx)(o.code,{children:"serial console"})," by the instructions ",(0,n.jsx)(o.a,{href:"https://coral.ai/docs/dev-board/serial-console/",children:"Connect to the Dev Board's serial console"})]}),"\n",(0,n.jsxs)(o.li,{children:["Log into the Dev board by username: ",(0,n.jsx)(o.code,{children:"mendel"})," and password: ",(0,n.jsx)(o.code,{children:"mendel"})," in default."]}),"\n",(0,n.jsxs)(o.li,{children:["Enable SSH Password Authentication. Edit ",(0,n.jsx)(o.code,{children:"/etc/ssh/sshd_config"})," to change ",(0,n.jsx)(o.code,{children:"PasswordAuthentication no"})," to ",(0,n.jsx)(o.code,{children:"PasswordAuthentication yes"}),", and ",(0,n.jsx)(o.code,{children:"sudo service ssh restart"})," to restart the ssh service."]}),"\n",(0,n.jsxs)(o.li,{children:["Log into the shell using username: ",(0,n.jsx)(o.code,{children:"mendel"})," and password: ",(0,n.jsx)(o.code,{children:"mendel"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["If you want to keep the secure shell, generate ",(0,n.jsx)(o.code,{children:"private SSH key"})," stored in host and ",(0,n.jsx)(o.code,{children:"public SSH key"})," saved into Coral."]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>a});var n=s(96540);const i={},t=n.createContext(i);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);