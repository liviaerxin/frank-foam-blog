"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/fastapi-celery-serving-ml-model.md"},authors:["frank"],tags:["fastapi","celery","machine learning"],description:"FastAPI Celery Serving ML Model",keywords:["FastAPI Celery Serving ML Model"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-08-09T00:00:00.000Z"),draft:!1,enableComments:!0},i="FastAPI Celery Serving ML Model",o={permalink:"/blog/fastapi-celery-serving-ml-model",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/fastapi-celery-serving-ml-model.md",source:"@site/../../blog/fastapi-celery-serving-ml-model.md",title:"FastAPI Celery Serving ML Model",description:"FastAPI Celery Serving ML Model",date:"2023-08-09T00:00:00.000Z",formattedDate:"August 9, 2023",tags:[{label:"fastapi",permalink:"/blog/tags/fastapi"},{label:"celery",permalink:"/blog/tags/celery"},{label:"machine learning",permalink:"/blog/tags/machine-learning"}],readingTime:3.34,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/fastapi-celery-serving-ml-model.md"},authors:["frank"],tags:["fastapi","celery","machine learning"],description:"FastAPI Celery Serving ML Model",keywords:["FastAPI Celery Serving ML Model"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-08-09T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"WPF",permalink:"/blog/wpf"},nextItem:{title:"Git Best Practices",permalink:"/blog/git-best-practices"}},s={authorsImageUrls:[void 0]},p=[{value:"Celery Worker",id:"celery-worker",level:2},{value:"Option --pool=prefork",id:"option---poolprefork",level:3},{value:"Option --pool=eventlet or --pool=gevent",id:"option---pooleventlet-or---poolgevent",level:3},{value:"Option --pool=solo",id:"option---poolsolo",level:3},{value:"Celery Task",id:"celery-task",level:2},{value:"What is Task in Celery",id:"what-is-task-in-celery",level:3},{value:"How Task be Executed",id:"how-task-be-executed",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"References",id:"references",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"celery-worker"},"Celery Worker"),(0,r.kt)("p",null,"Celery Worker Mechanism:"),(0,r.kt)("p",null,"To start a Celery worker will start a main process that will spawn child processes or threads(based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool")," option): the main process will handle receiving task/sending task result the and these child processes/threads(a.k.a ",(0,r.kt)("inlineCode",{parentName:"p"},"execution pool"),") execute the actual tasks."),(0,r.kt)("p",null,"To increase the number of child processes/threads(via ",(0,r.kt)("inlineCode",{parentName:"p"},"--concurrency")," option) will increase the number of tasks the Celery worker can process in parallel. More processes are usually better."),(0,r.kt)("p",null,"However, in reality, there are some situations in following modes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run N workers with M child processes each."),(0,r.kt)("li",{parentName:"ol"},"Run 1 worker with N*M child processes."),(0,r.kt)("li",{parentName:"ol"},"Run N workers with only 1 main process each."),(0,r.kt)("li",{parentName:"ol"},"Run N workers with M child threads each."),(0,r.kt)("li",{parentName:"ol"},"Run 1 worker with N*M child threads.")),(0,r.kt)("p",null,"Whether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"processes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"threads")," depends on what your tasks will actually do and whether they are GPU bound or IO bound."),(0,r.kt)("h3",{id:"option---poolprefork"},"Option --pool=prefork"),(0,r.kt)("p",null,"It spawns multiple processes."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --concurrency 3 --pool=prefork"),", what will happen underneath?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Celery start a main process."),(0,r.kt)("li",{parentName:"ol"},"The main process will then spawn 3 child processes. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"concurrency")," is based on the number of ",(0,r.kt)("inlineCode",{parentName:"li"},"CPU")," available on the machine. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"pool")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"prefork")," which uses ",(0,r.kt)("inlineCode",{parentName:"li"},"multiprocessing")," library from Python."),(0,r.kt)("li",{parentName:"ol"},"These child processes will execute the tasks assigned from the main process.")),(0,r.kt)("h3",{id:"option---pooleventlet-or---poolgevent"},"Option --pool=eventlet or --pool=gevent"),(0,r.kt)("p",null,"It creates multiple threads."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --concurrency 3 --pool=eventlet")),(0,r.kt)("h3",{id:"option---poolsolo"},"Option --pool=solo"),(0,r.kt)("p",null,"It will not create any child process or thread to run task. The tasks will be executed in main process, which causes the main process to be blocked."),(0,r.kt)("p",null,"It seems as: Run 1 worker with 1 process, however ",(0,r.kt)("inlineCode",{parentName:"p"},"--concurrency")," will not take any effect when ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=solo"),"!"),(0,r.kt)("p",null,"When coming to a microservices environment, this option becomes useful and practical especially running CPU intensive tasks. The container manager such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker")," can increase the task processing capabilities through managing the number of worker containers instead of managing the number of pool processes per worker."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --pool=solo")),(0,r.kt)("h2",{id:"celery-task"},"Celery Task"),(0,r.kt)("h3",{id:"what-is-task-in-celery"},"What is Task in Celery"),(0,r.kt)("h3",{id:"how-task-be-executed"},"How Task be Executed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from celery import Celery, Task\n\napp = Celery(...)\n\n@app.task(base=Task)\ndef add(x, y):\n  return x + y\n\n@app.task(base=Task)\ndef mul(x, y):\n  return x * y\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@app.task")," decoration will use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," class in default if you don't specify explicitly."),(0,r.kt)("p",null,"When a worker start by ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker"),","),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Worker will spawn child Processes, the number of child Processes is based on CPU cores in default."),(0,r.kt)("li",{parentName:"ol"},"Each child Process will initialize a ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance for every decorated function. Here ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," has its own ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance and ",(0,r.kt)("inlineCode",{parentName:"li"},"mul()")," also has its own ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance respectively.")),(0,r.kt)("p",null,"When a client call ",(0,r.kt)("inlineCode",{parentName:"p"},"add.delay(1, 2)"),","),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Worker receive a Task in Queue."),(0,r.kt)("li",{parentName:"ol"},"Worker assign the Task to a child Process, which will determine to use which ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance to execute. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance is initialized in each decorated function and registered with a task name using function name in default(such as ",(0,r.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mul"),"). Here is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance with name ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," should be picked up to run the task."),(0,r.kt)("li",{parentName:"ol"},"When be decorated in ",(0,r.kt)("inlineCode",{parentName:"li"},"add()"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance ",(0,r.kt)("inlineCode",{parentName:"li"},"run()")," method will be ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," original function body. The child Process will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance's ",(0,r.kt)("inlineCode",{parentName:"li"},"__call__()")," method to run task, and ",(0,r.kt)("inlineCode",{parentName:"li"},"__call__()")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"run()")," within itself.  ")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celery/celery/issues/2146"},"Result state is always PENDING in windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"FIX: use ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=solo")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=prefork")," in default. ",(0,r.kt)("inlineCode",{parentName:"p"},"multiprocessing")," may cause this problem as its some defect in windows!")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://distributedpython.com/posts/celery-execution-pools-what-is-it-all-about/"},"Celery Execution Pools: What is it all about?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://distributedpython.com/posts/celery-pool-types-part-1-the-worker-and-the-pool/"},"Celery Exececution Pool: The worker and the pool - separation of concerns")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/deploying-ml-models-in-production-with-fastapi-and-celery-7063e539a5db"},"Serving ML Models in Production with FastAPI and Celery | by Jonathan Readshaw | Towards Data Science")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/liviaerxin/FastAPISpamDetection"},'GitHub - liviaerxin/FastAPISpamDetection: Code for my Medium article: "How you can quickly deploy your ML models with\xa0FastAPI"')))}u.isMDXComponent=!0}}]);