"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||k[u]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-celery.mdx"},authors:["frank"],tags:["wiki","celery","best practice"],description:"wiki celery",keywords:["celery"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-10-30T00:00:00.000Z"),draft:!1,enableComments:!0},i="Wiki Celery",o={permalink:"/blog/wiki-celery",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-celery.mdx",source:"@site/../../blog/wiki-celery.mdx",title:"Wiki Celery",description:"wiki celery",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"celery",permalink:"/blog/tags/celery"},{label:"best practice",permalink:"/blog/tags/best-practice"}],readingTime:7.475,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-celery.mdx"},authors:["frank"],tags:["wiki","celery","best practice"],description:"wiki celery",keywords:["celery"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-10-30T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki VPN",permalink:"/blog/wiki-vpn"},nextItem:{title:"Generate self-signed SSL/TLS certificate for local IP address or local domain",permalink:"/blog/certificate-sign"}},s={authorsImageUrls:[void 0]},p=[{value:"Celery worker",id:"celery-worker",level:2},{value:"Worker procedure",id:"worker-procedure",level:3},{value:"Option --pool=prefork",id:"option---poolprefork",level:3},{value:"Option --pool=eventlet or --pool=gevent",id:"option---pooleventlet-or---poolgevent",level:3},{value:"Option --pool=solo",id:"option---poolsolo",level:3},{value:"Celery Task",id:"celery-task",level:2},{value:"Serve machine learning model",id:"serve-machine-learning-model",level:2},{value:"Different workers for different tasks",id:"different-workers-for-different-tasks",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"What is the ",(0,r.kt)("strong",{parentName:"p"},"Celery"),"? ",(0,r.kt)("strong",{parentName:"p"},"Celery")," is a simple, flexible, and reliable distributed system to process vast amounts of tasks. In practice,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Celery")," can be used to execute long-running jobs behind web servers to let your servers handle requests/responses in non-blocking ways."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Celery")," can do scheduled jobs.")),(0,r.kt)("p",null,"Here are some production-ready use cases for ",(0,r.kt)("strong",{parentName:"p"},"Celery")," I have encountered."),(0,r.kt)("h2",{id:"celery-worker"},"Celery worker"),(0,r.kt)("p",null,"Celery worker Mechanism:"),(0,r.kt)("p",null,"To start a Celery worker will start a main process that will spawn child processes or threads(based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool")," option): the main process will handle receiving task/sending task result the and these child processes/threads(a.k.a ",(0,r.kt)("inlineCode",{parentName:"p"},"execution pool"),") execute the actual tasks."),(0,r.kt)("p",null,"To increase the number of child processes/threads(via ",(0,r.kt)("inlineCode",{parentName:"p"},"--concurrency")," option) will increase the number of tasks the Celery worker can process in parallel. More processes are usually better."),(0,r.kt)("p",null,"However, in reality, there are some situations in following modes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run N workers with M child processes each."),(0,r.kt)("li",{parentName:"ol"},"Run 1 worker with N*M child processes."),(0,r.kt)("li",{parentName:"ol"},"Run N workers with only 1 main process each."),(0,r.kt)("li",{parentName:"ol"},"Run N workers with M child threads each."),(0,r.kt)("li",{parentName:"ol"},"Run 1 worker with N*M child threads.")),(0,r.kt)("p",null,"Whether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"processes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"threads")," depends on what your tasks will actually do and whether they are GPU bound or IO bound."),(0,r.kt)("h3",{id:"worker-procedure"},"Worker procedure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from celery import Celery\n\napp = Celery(...)\n\n@app.task()\ndef add(x, y):\n  return x + y\n\n@app.task()\ndef mul(x, y):\n  return x * y\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@app.task")," decoration will use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," class in default if you don't specify explicitly."),(0,r.kt)("p",null,"When a worker start by ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker"),","),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Worker will spawn child Processes, the number of child Processes is based on CPU cores in default."),(0,r.kt)("li",{parentName:"ol"},"Each child Process will initialize a ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance for every decorated function. Here ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," has its own ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance and ",(0,r.kt)("inlineCode",{parentName:"li"},"mul()")," also has its own ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance respectively.")),(0,r.kt)("p",null,"When a client call ",(0,r.kt)("inlineCode",{parentName:"p"},"add.delay(1, 2)"),","),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Worker receive a Task in Queue."),(0,r.kt)("li",{parentName:"ol"},"Worker assign the Task to a child Process, which will determine to use which ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance to execute. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance is initialized in each decorated function and registered with a task name using function name in default(such as ",(0,r.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mul"),"). Here is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance with name ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," should be picked up to run the task."),(0,r.kt)("li",{parentName:"ol"},"When be decorated in ",(0,r.kt)("inlineCode",{parentName:"li"},"add()"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance ",(0,r.kt)("inlineCode",{parentName:"li"},"run()")," method will be ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," original function body. The child Process will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," instance's ",(0,r.kt)("inlineCode",{parentName:"li"},"__call__()")," method to run task, and ",(0,r.kt)("inlineCode",{parentName:"li"},"__call__()")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"run()")," within itself.  ")),(0,r.kt)("h3",{id:"option---poolprefork"},"Option --pool=prefork"),(0,r.kt)("p",null,"It spawns multiple processes."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --concurrency 3 --pool=prefork"),", what will happen underneath?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Celery start a main process."),(0,r.kt)("li",{parentName:"ol"},"The main process will then spawn 3 child processes. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"concurrency")," is based on the number of ",(0,r.kt)("inlineCode",{parentName:"li"},"CPU")," available on the machine. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"pool")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"prefork")," which uses ",(0,r.kt)("inlineCode",{parentName:"li"},"multiprocessing")," library from Python."),(0,r.kt)("li",{parentName:"ol"},"These child processes will execute the tasks assigned from the main process.")),(0,r.kt)("h3",{id:"option---pooleventlet-or---poolgevent"},"Option --pool=eventlet or --pool=gevent"),(0,r.kt)("p",null,"It creates multiple threads."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --concurrency 3 --pool=eventlet")),(0,r.kt)("h3",{id:"option---poolsolo"},"Option --pool=solo"),(0,r.kt)("p",null,"It will not create any child process or thread to run task. The tasks will be executed in main process, which causes the main process to be blocked."),(0,r.kt)("p",null,"It seems as: Run 1 worker with 1 process, however ",(0,r.kt)("inlineCode",{parentName:"p"},"--concurrency")," will not take any effect when ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=solo"),"!"),(0,r.kt)("p",null,"When coming to a microservices environment, this option becomes useful and practical especially running CPU intensive tasks. The container manager such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker")," can increase the task processing capabilities through managing the number of worker containers instead of managing the number of pool processes per worker."),(0,r.kt)("p",null,"When start a Celery worker via ",(0,r.kt)("inlineCode",{parentName:"p"},"celery -A tasks worker --loglevel INFO --pool=solo")),(0,r.kt)("h2",{id:"celery-task"},"Celery Task"),(0,r.kt)("p",null,"What's the lifecycle of a Celery task from the time it's created to the it's done?"),(0,r.kt)("p",null,"Here we analyze a simple task with all ",(0,r.kt)("strong",{parentName:"p"},"Celery")," configuration in default and use ",(0,r.kt)("strong",{parentName:"p"},"Redis")," as ",(0,r.kt)("strong",{parentName:"p"},"broker")," and ",(0,r.kt)("strong",{parentName:"p"},"backend")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'@app.task(acks_late=True)\ndef wait(secs: float) -> str:\n    print(f"wait() - Start, secs[{secs}]s")\n    time.sleep(secs)\n    print(f"wait() - Done, secs[{secs}]s")\n    return f"wait() - Done, secs[{secs}]s"\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When a client call ",(0,r.kt)("inlineCode",{parentName:"li"},"wait.delay(60)"),", this task is added to a default queue named ",(0,r.kt)("inlineCode",{parentName:"li"},"celery")," in ",(0,r.kt)("strong",{parentName:"li"},"Redis"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Celery")," worker polls the queue and pulls the task, then it removes the task from the queue and moves it a special queue named ",(0,r.kt)("inlineCode",{parentName:"li"},"unacked")," in ",(0,r.kt)("strong",{parentName:"li"},"Redis"),"."),(0,r.kt)("li",{parentName:"ol"},"The worker holds on to the task(",(0,r.kt)("inlineCode",{parentName:"li"},"prefetch"),"), until it has abilities to process the task."),(0,r.kt)("li",{parentName:"ol"},"Once after The worker successfully processes the task, it ",(0,r.kt)("inlineCode",{parentName:"li"},"acks")," now (",(0,r.kt)("inlineCode",{parentName:"li"},"acks_late=True"),") that it removes the task from the ",(0,r.kt)("inlineCode",{parentName:"li"},"unacked")," queue in ",(0,r.kt)("strong",{parentName:"li"},"Redis"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"acks_late=False"),", the worker ",(0,r.kt)("inlineCode",{parentName:"li"},"acks")," before processing the task.")))),(0,r.kt)("p",null,"Let's get more concrete understanding in practices."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, let's enter a ",(0,r.kt)("inlineCode",{parentName:"li"},"redis-cli")," interactive mode with the newly launched application,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> KEYS *\n1) "_kombu.binding.email_service"\n2) "_kombu.binding.ml_service"\n3) "_kombu.binding.celery.pidbox"\n4) "_kombu.binding.celeryev"\n5) "_kombu.binding.celery"\n')),(0,r.kt)("p",null,"At the beginning, you can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"celery")," key and the ",(0,r.kt)("inlineCode",{parentName:"p"},"unacked")," key do not exist in ",(0,r.kt)("strong",{parentName:"p"},"Redis"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then, let's call ",(0,r.kt)("inlineCode",{parentName:"li"},"wait.delay(60)")," multiple times at the same time,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> KEYS *\n 1) "unacked_index"\n 2) "_kombu.binding.email_service"\n 3) "_kombu.binding.celery.pidbox"\n 4) "celery-task-meta-3d6b2028-6ee6-4e2c-85f1-cbeba644aca5"\n 5) "celery"\n 6) "_kombu.binding.celeryev"\n 7) "_kombu.binding.celery"\n 8) "_kombu.binding.ml_service"\n 9) "celery-task-meta-e5a1b7db-f1ad-4d3e-b2b9-3b7de8f8c87e"\n10) "unacked"\n127.0.0.1:6379> TYPE unacked\nhash\n127.0.0.1:6379> TYPE celery\nlist\n')),(0,r.kt)("p",null,"After we create tasks, the ",(0,r.kt)("inlineCode",{parentName:"p"},"celery")," key of ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," type and the ",(0,r.kt)("inlineCode",{parentName:"p"},"unacked")," key of ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," type are both created in ",(0,r.kt)("strong",{parentName:"p"},"Redis"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> LRANGE celery 0 -1\n1) "{\\"body\\": \\"W1s2MC4wXSwge30sIHsiY2FsbGJhY2tzIjogbnVsbCwgImVycmJhY2tzIjogbnVsbCwgImNoYWluIjogbnVsbCwgImNob3JkIjogbnVsbH1d\\", \\"content-encoding\\": \\"utf-8\\", \\"content-type\\": \\"application/json\\", \\"headers\\": {\\"lang\\": \\"py\\", \\"task\\": \\"app.celery_app.tasks.wait\\", \\"id\\": \\"da959152-1f45-4846-99e4-5205d30c1be7\\", \\"shadow\\": null, \\"eta\\": null, \\"expires\\": null, \\"group\\": null, \\"group_index\\": null, \\"retries\\": 0, \\"timelimit\\": [null, null], \\"root_id\\": \\"da959152-1f45-4846-99e4-5205d30c1be7\\", \\"parent_id\\": null, \\"argsrepr\\": \\"(60.0,)\\", \\"kwargsrepr\\": \\"{}\\", \\"origin\\": \\"gen11@a840cdd15b13\\", \\"ignore_result\\": false}, \\"properties\\": {\\"correlation_id\\": \\"da959152-1f45-4846-99e4-5205d30c1be7\\", \\"reply_to\\": \\"4b0f2f2d-aee2-3349-81ab-e95a1f0e9f02\\", \\"delivery_mode\\": 2, \\"delivery_info\\": {\\"exchange\\": \\"\\", \\"routing_key\\": \\"celery\\"}, \\"priority\\": 0, \\"body_encoding\\": \\"base64\\", \\"delivery_tag\\": \\"d657c66d-4e4b-483d-9fbe-fe4b5b9541e7\\"}}"\n2) "{\\"body\\": \\"W1s2MC4wXSwge30sIHsiY2FsbGJhY2tzIjogbnVsbCwgImVycmJhY2tzIjogbnVsbCwgImNoYWluIjogbnVsbCwgImNob3JkIjogbnVsbH1d\\", \\"content-encoding\\": \\"utf-8\\", \\"content-type\\": \\"application/json\\", \\"headers\\": {\\"lang\\": \\"py\\", \\"task\\": \\"app.celery_app.tasks.wait\\", \\"id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"shadow\\": null, \\"eta\\": null, \\"expires\\": null, \\"group\\": null, \\"group_index\\": null, \\"retries\\": 0, \\"timelimit\\": [null, null], \\"root_id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"parent_id\\": null, \\"argsrepr\\": \\"(60.0,)\\", \\"kwargsrepr\\": \\"{}\\", \\"origin\\": \\"gen11@a840cdd15b13\\", \\"ignore_result\\": false}, \\"properties\\": {\\"correlation_id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"reply_to\\": \\"4b0f2f2d-aee2-3349-81ab-e95a1f0e9f02\\", \\"delivery_mode\\": 2, \\"delivery_info\\": {\\"exchange\\": \\"\\", \\"routing_key\\": \\"celery\\"}, \\"priority\\": 0, \\"body_encoding\\": \\"base64\\", \\"delivery_tag\\": \\"927d1ac0-3709-4e23-8c0f-037713c55217\\"}}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> HGETALL unacked\n1) "927d1ac0-3709-4e23-8c0f-037713c55217"\n2) "[{\\"body\\": \\"W1s2MC4wXSwge30sIHsiY2FsbGJhY2tzIjogbnVsbCwgImVycmJhY2tzIjogbnVsbCwgImNoYWluIjogbnVsbCwgImNob3JkIjogbnVsbH1d\\", \\"content-encoding\\": \\"utf-8\\", \\"content-type\\": \\"application/json\\", \\"headers\\": {\\"lang\\": \\"py\\", \\"task\\": \\"app.celery_app.tasks.wait\\", \\"id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"shadow\\": null, \\"eta\\": null, \\"expires\\": null, \\"group\\": null, \\"group_index\\": null, \\"retries\\": 0, \\"timelimit\\": [null, null], \\"root_id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"parent_id\\": null, \\"argsrepr\\": \\"(60.0,)\\", \\"kwargsrepr\\": \\"{}\\", \\"origin\\": \\"gen11@a840cdd15b13\\", \\"ignore_result\\": false}, \\"properties\\": {\\"correlation_id\\": \\"1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8\\", \\"reply_to\\": \\"4b0f2f2d-aee2-3349-81ab-e95a1f0e9f02\\", \\"delivery_mode\\": 2, \\"delivery_info\\": {\\"exchange\\": \\"\\", \\"routing_key\\": \\"celery\\"}, \\"priority\\": 0, \\"body_encoding\\": \\"base64\\", \\"delivery_tag\\": \\"927d1ac0-3709-4e23-8c0f-037713c55217\\"}}, \\"\\", \\"celery\\"]"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Wait for all these tasks to be done")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> KEYS *\n 1) "_kombu.binding.email_service"\n 2) "celery-task-meta-da959152-1f45-4846-99e4-5205d30c1be7"\n 3) "celery-task-meta-815587f5-782d-454a-8498-b4ebbb91abd8"\n 4) "_kombu.binding.celery.pidbox"\n 5) "celery-task-meta-3d6b2028-6ee6-4e2c-85f1-cbeba644aca5"\n 6) "_kombu.binding.celeryev"\n 7) "_kombu.binding.celery"\n 8) "_kombu.binding.ml_service"\n 9) "celery-task-meta-1ddc3c5e-fa33-4d12-aa3f-c3d13581a4c8"\n10) "celery-task-meta-e5a1b7db-f1ad-4d3e-b2b9-3b7de8f8c87e"\n')),(0,r.kt)("p",null,"After all tasks are done successfully, both keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"celery")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unacked")," are removed from ",(0,r.kt)("strong",{parentName:"p"},"Redis"),"."),(0,r.kt)("p",null,"The result of a task is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"celery-task-meta-{{uuid}}")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> TYPE celery-task-meta-da959152-1f45-4846-99e4-5205d30c1be7\nstring\n127.0.0.1:6379> GET celery-task-meta-da959152-1f45-4846-99e4-5205d30c1be7\n"{\\"status\\": \\"SUCCESS\\", \\"result\\": \\"wait() - Done, secs[60.0]s\\", \\"traceback\\": null, \\"children\\": [], \\"date_done\\": \\"2023-11-07T07:54:16.954872\\", \\"task_id\\": \\"da959152-1f45-4846-99e4-5205d30c1be7\\"}"\n')),(0,r.kt)("h2",{id:"serve-machine-learning-model"},"Serve machine learning model"),(0,r.kt)("p",null,"Properly running a machine learning model in task is different with running other jobs as we need avoiding loading ML model every time we run tasks. So it is stateful that we should keep something in worker."),(0,r.kt)("h2",{id:"different-workers-for-different-tasks"},"Different workers for different tasks"),(0,r.kt)("p",null,"Assuming a such situation:\nThere is a worker ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to only handle email tasks and a worker ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to only handle machine learning related tasks."),(0,r.kt)("p",null,"These are configurations for project ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"#Celery routing.\napp.conf.task_routes = {\n    'celery_app.email_tasks.*': {\n        'queue': 'email_service',\n    },\n}\n\n#Run celery.\ncelery -A celery_app.email_tasks:app worker -l info -E -Q email_service\n")),(0,r.kt)("p",null,"These are configurations for project ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"#Celery routing.\napp.conf.task_routes = {\n    'celery_app.ml_tasks.*': {\n        'queue': 'ml_service',\n    },\n}\n\n#Run celery.\ncelery -A celery_app.ml_tasks:app worker -l info -E -Q ml_service\n")),(0,r.kt)("p",null,"Details in explanation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Different workers handle their own queues for separate tasks.")),(0,r.kt)("p",null,"Look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/liviaerxin/fastapi-celery-ml"},"https://github.com/liviaerxin/fastapi-celery-ml")," for see a complete ",(0,r.kt)("strong",{parentName:"p"},"Celery")," project."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celery/celery/issues/2146"},"Result state is always PENDING in windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"FIX: use ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=solo")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"--pool=prefork")," in default. ",(0,r.kt)("inlineCode",{parentName:"p"},"multiprocessing")," may cause this problem as its some defect in windows!")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celery/celery/issues/5935"},"Long running jobs redelivering after broker visibility timeout with celery and redis \xb7 Issue #5935 \xb7 celery/celery \xb7 GitHub"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celery/celery/issues/3430"},"Long tasks are executed multiple times \xb7 Issue #3430 \xb7 celery/celery \xb7 GitHub")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celery/celery/issues/3768"},"No Worker Heartbeat With Solo Pool \xb7 Issue #3768 \xb7 celery/celery \xb7 GitHub")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.celeryq.dev/en/latest/index.html#"},"Celery - Distributed Task Queue \u2014 Celery 5.3.4 documentation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://celery.school/post/2023-10-20_execution-pools/"},"Celery Execution Pools: What is it all about?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://celery.school/posts/celery-pool-types-1-introduction/"},"Celery Execution Pool: The worker and the pool - separation of concerns")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/deploying-ml-models-in-production-with-fastapi-and-celery-7063e539a5db"},"Serving ML Models in Production with FastAPI and Celery | by Jonathan Readshaw | Towards Data Science")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/liviaerxin/FastAPISpamDetection"},'GitHub - liviaerxin/FastAPISpamDetection: Code for my Medium article: "How you can quickly deploy your ML models with\xa0FastAPI"')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://engineering.instawork.com/celery-eta-tasks-demystified-424b836e4e94"},"Celery ETA Tasks Demystified. At Instawork, we use Celery to queue\u2026 | by Oleg Pesok | Instawork Engineering")))}k.isMDXComponent=!0}}]);