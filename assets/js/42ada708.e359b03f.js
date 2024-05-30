"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3402],{3700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(74848),n=r(28453);const i={},s="Saturday, April 6, 2024",a={permalink:"/journal/2024/04/06/",source:"@site/../../journal/2024-04-06.md",title:"Saturday, April 6, 2024",description:"Globally ignore .DS_Store from all the git repos in macOS",date:"2024-04-06T00:00:00.000Z",tags:[],readingTime:.42,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Sunday, April 7, 2024",permalink:"/journal/2024/04/07/"},nextItem:{title:"Friday, April 5, 2024",permalink:"/journal/2024/04/05/"}},l={authorsImageUrls:[]},c=[{value:"Globally ignore <code>.DS_Store</code> from all the git repos in <code>macOS</code>",id:"globally-ignore-ds_store-from-all-the-git-repos-in-macos",level:2},{value:"List Git remote branches",id:"list-git-remote-branches",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"globally-ignore-ds_store-from-all-the-git-repos-in-macos",children:["Globally ignore ",(0,o.jsx)(t.code,{children:".DS_Store"})," from all the git repos in ",(0,o.jsx)(t.code,{children:"macOS"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"# remove any existing files from the repo, skipping over ones not in repo\nfind . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch\n# specify a global exclusion list\ngit config --global core.excludesfile ~/.gitignore\n# adding .DS_Store to that list\necho .DS_Store >> ~/.gitignore\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://stackoverflow.com/questions/107701/how-can-i-remove-ds-store-files-from-a-git-repository",children:"macos - How can I Remove .DS_Store files from a Git repository? - Stack Overflow"})}),"\n",(0,o.jsx)(t.h2,{id:"list-git-remote-branches",children:"List Git remote branches"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"git branch -r\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var o=r(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);