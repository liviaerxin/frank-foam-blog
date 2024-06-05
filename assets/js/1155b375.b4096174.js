"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6326],{32397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const o={},s="Friday, April 12, 2024",a={permalink:"/journal/2024/04/12/",source:"@site/../../journal/2024-04-12.md",title:"Friday, April 12, 2024",description:"Docker Build Args vs Runtime Env Variables: Optimizing Frontend Deployment",date:"2024-04-12T00:00:00.000Z",tags:[],readingTime:.725,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Monday, April 15, 2024",permalink:"/journal/2024/04/15/"},nextItem:{title:"Sunday, April 7, 2024",permalink:"/journal/2024/04/07/"}},l={authorsImageUrls:[]},c=[{value:"Docker Build Args vs Runtime Env Variables: Optimizing Frontend Deployment",id:"docker-build-args-vs-runtime-env-variables-optimizing-frontend-deployment",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"docker-build-args-vs-runtime-env-variables-optimizing-frontend-deployment",children:"Docker Build Args vs Runtime Env Variables: Optimizing Frontend Deployment"}),"\n",(0,i.jsx)(n.p,{children:"During the building stage, environment variables are passed as arguments to the Docker image, influencing the build process. Then, during container execution, environment variables are set within the running container, ensuring customization without the need for rebuilding the image each time the application is spun up."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:'FROM mhart/alpine-node:10\nARG NODE_ENV\nENV NODE_ENV $NODE_ENV\nADD . /app\nWORKDIR /app\n\n# install dependencies\nCOPY app/package.json app/package-lock.json ./\nRUN npm install\nRUN yarn build\n\nEXPOSE 7000\n\nCMD ["yarn", "start"]\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"build:\n  context: .\n  dockerfile: Dockerfile-preprod\n  args:\n    - NODE_ENV=${NODE_ENV}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The use case is:"}),"\n",(0,i.jsx)(n.p,{children:"For frontend apps, building into either page or static formats is standard, followed by client-side execution. To customize with env variables, like server addresses for dev or prod, they're set during building. Avoiding rebuilding for every runtime spin-up ensures swift deployment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/52429984/docker-compose-build-environment-variable",children:"https://stackoverflow.com/questions/52429984/docker-compose-build-environment-variable"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);