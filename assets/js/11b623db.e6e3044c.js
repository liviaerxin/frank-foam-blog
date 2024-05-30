"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8886],{41679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(74848),i=n(28453);const r={},a="Tuesday, July 25, 2023",c={permalink:"/journal/2023/07/25/",source:"@site/../../journal/2023-07-25.md",title:"Tuesday, July 25, 2023",description:"- [ ] Authentication and Authorization in Microservices",date:"2023-07-25T00:00:00.000Z",tags:[],readingTime:1.405,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Wednesday, July 26, 2023",permalink:"/journal/2023/07/26/"},nextItem:{title:"Friday, July 21, 2023",permalink:"/journal/2023/07/21/"}},o={authorsImageUrls:[]},l=[];function h(e){const t={a:"a",blockquote:"blockquote",input:"input",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Authentication and Authorization in Microservices"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Authentication in microservices involves two main occasions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"authentication required when end users communicate with services."}),"\n",(0,s.jsx)(t.li,{children:"authentication happens between internal services."}),"\n",(0,s.jsx)(t.li,{children:"authentication needed when external services enter internal services."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"OAuth 2.0 provides the industry-standard protocol for authorizing users in distributed systems. The OAuth framework reduces the burden on developers, eliminating duplications to build their own authentication mechanism in each microservice."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://dev.to/behalf/authentication-authorization-in-microservices-architecture-part-i-2cn0",children:"Authentication & Authorization in Microservices Architecture - Part I"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://softwareengineering.stackexchange.com/questions/366815/microservice-architecture-using-auth-server-as-a-user-resource-server",children:"https://softwareengineering.stackexchange.com/questions/366815/microservice-architecture-using-auth-server-as-a-user-resource-server"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://auth0.com/docs/get-started",children:"https://auth0.com/docs/get-started"})}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","User registration flow in microservice"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Communication between microservices"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Share user data between micro services"}),"\n",(0,s.jsx)(t.p,{children:"User service and Comment service"}),"\n",(0,s.jsx)(t.p,{children:"populate user data into Comment service, save user data in comment service, update user data in comment service"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://stackoverflow.com/questions/67543408/microservices-storing-user-data-in-separate-database",children:"https://stackoverflow.com/questions/67543408/microservices-storing-user-data-in-separate-database"})}),"\n",(0,s.jsx)(t.p,{children:"Ideally, the client communicates with the each service directly, and no interaction between the services!"}),"\n",(0,s.jsx)(t.p,{children:"However, there is the need for communication between these services."}),"\n",(0,s.jsx)(t.p,{children:'For example, o what happens if a user deletes his account? What if you delete a TV show? You probably want to trigger some events that will update the data in your comment microservice. In the long run you want to keep everything "eventually consistent".'}),"\n",(0,s.jsx)(t.p,{children:"The event-driven architecture comes up!"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Data retrieved from two or more services"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'For example, you send a request from UI saying "give me comments with usernames",'}),"\n",(0,s.jsx)(t.p,{children:"GraphQL interface then first issues a request to comments service, then to user service and finally sends one response with combined data"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"NOTE: issue a number of requests to various micro-services to collect all the data and return it in only 1 response"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Rest needs to send many."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://softwareengineering.stackexchange.com/questions/418153/design-a-correct-microservices-architecture-with-data-relations",children:"https://softwareengineering.stackexchange.com/questions/418153/design-a-correct-microservices-architecture-with-data-relations"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.nginx.com/blog/event-driven-data-management-microservices/",children:"Event-Driven Data Management for Microservices - NGINX"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);