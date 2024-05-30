"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6095],{25553:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(74848),s=t(28453);const r={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-wpf.mdx"},authors:["frank"],tags:["wiki","wpf"],description:"Wiki WPF",keywords:["Wiki WPF"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-15T00:00:00.000Z"),draft:!1,enableComments:!0},o="Wiki WPF",a={permalink:"/blog/wiki-wpf",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-wpf.md",source:"@site/../../blog/wiki-wpf.md",title:"Wiki WPF",description:"Wiki WPF",date:"2023-09-15T00:00:00.000Z",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"wpf",permalink:"/blog/tags/wpf"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-wpf.mdx"},authors:["frank"],tags:["wiki","wpf"],description:"Wiki WPF",keywords:["Wiki WPF"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-15T00:00:00.000Z",draft:!1,enableComments:!0},unlisted:!1,prevItem:{title:"Wiki Samba",permalink:"/blog/wiki-samba"},nextItem:{title:"Wiki FFmpeg",permalink:"/blog/wiki-ffmpeg"}},l={authorsImageUrls:[void 0]},c=[{value:"MVVM",id:"mvvm",level:2},{value:"Features",id:"features",level:2},{value:"Principles",id:"principles",level:2},{value:"Access Database",id:"access-database",level:2},{value:"ReactiveUI",id:"reactiveui",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/SingletonSean/wpf-tutorials",children:"GitHub - SingletonSean/wpf-tutorials: Tutorial source code for WPF concepts."})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/liviaerxin/WPF-MVVM-EFC-Example",children:"GitHub - liviaerxin/WPF-MVVM-EFC-Example: \ud83d\udcf2 MVVM (WPF) application built with EFCore, Abstract Factory pattern and dependency injection (Microsoft Unity)"})}),"\n",(0,n.jsx)(i.h2,{id:"mvvm",children:"MVVM"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.codeproject.com/Articles/278901/MVVM-Pattern-Made-Simple",children:"MVVM Pattern Made Simple - CodeProject"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.codeproject.com/Articles/659614/MVVM-in-Depth",children:"MVVM in Depth - CodeProject"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.reddit.com/r/csharp/comments/i3pbmt/my_attempt_to_understand_mvvm_pattern_and/",children:"My attempt to understand MVVM pattern and questions raised during it : csharp"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern",children:"Patterns - WPF Apps With The Model-View-ViewModel Design Pattern | Microsoft Docs"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/windows/communitytoolkit/mvvm/introduction",children:"Introduction to the MVVM Toolkit - Windows Community Toolkit | Microsoft Docs"})}),"\n",(0,n.jsx)(i.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"IoC, Inversion of Control"}),"\n",(0,n.jsx)(i.li,{children:"DI, Dependency Injection"}),"\n",(0,n.jsx)(i.li,{children:"Navigation"}),"\n",(0,n.jsxs)(i.li,{children:["ViewModel-to-ViewModel Communication","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://dotnetpattern.com/mvvm-light-messenger/",children:"MVVM Light Messenger"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://prismlibrary.com/docs/event-aggregator.html",children:"Event Aggregator | Prism"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.reactiveui.net/docs/handbook/message-bus/",children:"ReactiveUI - Message Bus"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Observable Object in ViewModel","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Wrapping a non-observable model"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-C#",children:"// https://docs.microsoft.com/en-us/windows/communitytoolkit/mvvm/observableobject#wrapping-a-non-observable-model\npublic class ObservableUser : ObservableObject\n{\n    private readonly User user;mvvm-application.png\n\n    public ObservableUser(User user) => this.user = user;\n\n    public string Name\n    {\n        get => user.Name;\n        set => SetProperty(user.Name, value, user, (u, n) => u.Name = n);\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"principles",children:"Principles"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"MVVM Application",src:t(52702).A+"",width:"521",height:"381"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"View-to-ViewModel one-to-one/many-to-one mapping"}),"\n",(0,n.jsx)(i.li,{children:"ViewModel-to-ViewModel communication"}),"\n",(0,n.jsx)(i.li,{children:"ViewModel-to-Model one-to-one/one-to-many binding"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"access-database",children:"Access Database"}),"\n",(0,n.jsx)(i.p,{children:"DAO or Repository"}),"\n",(0,n.jsx)(i.p,{children:"Entity\nDB Context"}),"\n",(0,n.jsx)(i.h2,{id:"reactiveui",children:"ReactiveUI"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://pasoft-sharereactiveui.readthedocs.io/en/stable/basics/to-property/",children:"To property - pasoft-share/ReactiveUI"})}),"\n",(0,n.jsx)(i.p,{children:"One of the core features of ReactiveUI is to be able to convert properties to Observables, via WhenAny , and to convert Observables into Properties, via a method called ToProperty . These properties are called Output Properties in ReactiveUI, and they are a huge part of using the framework effectively."})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},52702:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/mvvm-application-7d0e85c342205cb80179944264fc8d19.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);