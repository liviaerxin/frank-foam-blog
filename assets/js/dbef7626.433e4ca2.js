"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1469],{18959:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>r,metadata:()=>m,toc:()=>k});var a=n(87462),o=(n(67294),n(3905)),i=n(1841),s=n.n(i),p=n(54072),c=n(21542),l=n(70222);const r={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/lock-http-request.md"},sidebar_label:"Lock Http Request",description:"Lock Endpoint Request At A Time",keywords:["limit only one access to endpoint at a time","lock access to endpoint at a time"],image:"https://i.imgur.com/mErPwqL.png",tags:["fastapi","python","http"],last_update:{date:new Date("2023-06-21T00:00:00.000Z"),author:"frank"}},u="FastAPI Best Practices",m={permalink:"/blog/fastapi-best-practices",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/fastapi-best-practices.mdx",source:"@site/../../blog/fastapi-best-practices.mdx",title:"FastAPI Best Practices",description:"Lock Endpoint Request At A Time",date:"2023-09-11T13:32:35.000Z",formattedDate:"September 11, 2023",tags:[{label:"fastapi",permalink:"/blog/tags/fastapi"},{label:"python",permalink:"/blog/tags/python"},{label:"http",permalink:"/blog/tags/http"}],readingTime:.83,hasTruncateMarker:!1,authors:[],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/lock-http-request.md"},sidebar_label:"Lock Http Request",description:"Lock Endpoint Request At A Time",keywords:["limit only one access to endpoint at a time","lock access to endpoint at a time"],image:"https://i.imgur.com/mErPwqL.png",tags:["fastapi","python","http"],last_update:{date:"2023-06-21T00:00:00.000Z",author:"frank"}},prevItem:{title:".NET Finalizer",permalink:"/blog/dotnet-finalizer"},nextItem:{title:"Frequently Asked Questions",permalink:"/blog/frequently-asked-questions"}},d={authorsImageUrls:[]},k=[{value:"Limit Only One Access to Endpoint at a Time",id:"limit-only-one-access-to-endpoint-at-a-time",level:2},{value:"Attach A Background Service Into the Application",id:"attach-a-background-service-into-the-application",level:2}],h={toc:k},y="wrapper";function f(t){let{components:e,...n}=t;return(0,o.kt)(y,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"limit-only-one-access-to-endpoint-at-a-time"},"Limit Only One Access to Endpoint at a Time"),(0,o.kt)("p",null,"Limit only one access to an endpoint at a time with ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio.Lock")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," in ",(0,o.kt)("strong",{parentName:"p"},"FastAPI"),"."),(0,o.kt)(s(),{language:"python",title:"../code-snippets/app_request_lock.py",mdxType:"CodeBlock"},p.Z),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio.Lock")," only take effect in the ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," loop level, if using ",(0,o.kt)("inlineCode",{parentName:"p"},"unicorn")," to run server in multiple processes, it can not lock the request! ")),(0,o.kt)("p",null,"No limitation."),(0,o.kt)(s(),{language:"python",title:"../code-snippets/app_request_nolock.py",mdxType:"CodeBlock"},c.Z),(0,o.kt)("p",null,"Limit only one access to an endpoint at a time with ",(0,o.kt)("inlineCode",{parentName:"p"},"thread.Lock")),(0,o.kt)("p",null,"Limit only one access to an endpoint at a time with ",(0,o.kt)("inlineCode",{parentName:"p"},"process.Lock")),(0,o.kt)("h2",{id:"attach-a-background-service-into-the-application"},"Attach A Background Service Into the Application"),(0,o.kt)("p",null,"Run a background service behind the FastAPI server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"share the same ",(0,o.kt)("inlineCode",{parentName:"li"},"asyncio")," main loop with the server"),(0,o.kt)("li",{parentName:"ul"},"the service start when the server starts and stop when the server stops"),(0,o.kt)("li",{parentName:"ul"},"it should be light-weight and non-CPU heavy workload")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-task.html#asyncio.Task.cancel"},"Coroutines and Tasks \u2014 Python 3.11.4 documentation"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.create_task"},"Event Loop \u2014 Python 3.11.4 documentation")),(0,o.kt)(s(),{language:"python",title:"../code-snippets/app_background_service.py",mdxType:"CodeBlock"},l.Z))}f.isMDXComponent=!0},70222:(t,e,n)=>{n.d(e,{Z:()=>a});const a='from fastapi import FastAPI\nimport asyncio\nimport os\n\napp = FastAPI()\n\n\nclass BackgroundService:\n    def __init__(self, loop: asyncio.AbstractEventLoop, tasks: list):\n        self.loop = loop\n        self.running = False\n\n    async def work(self):\n        print(f"Start background service")\n        while True:\n            print(f"Run background service...")\n            # Sleep for 1 second\n            await asyncio.sleep(1)\n\n    async def start(self):\n        self.task = self.loop.create_task(self.work())\n\n    async def stop(self):\n        self.task.cancel()\n        try:\n            await self.task\n        except asyncio.CancelledError:\n            print("Clean up background service")\n\n\nservice = BackgroundService(asyncio.get_running_loop())\n\n\n@app.on_event("startup")\nasync def startup():\n    print(f"PID[{os.getpid()}] app startup")\n    # schedule a task on main loop\n    await service.start()\n\n\n@app.on_event("shutdown")\nasync def shutdown():\n    # close ProcessPoolExecutor\n    print(f"PID[{os.getpid()}] app shutdown")\n    await service.stop()\n\n\n@app.post("/")\nasync def hello():\n    return {"value": f"hello world [{service.task.done()}] [{service.task.get_name()}]"}\n'},54072:(t,e,n)=>{n.d(e,{Z:()=>a});const a='# main.py\nfrom fastapi import FastAPI\nimport asyncio\n\napp = FastAPI()\nlock = asyncio.Lock()\n\ncounter = 0\n\n\n@app.post("/limit")\nasync def func():\n    global counter\n    async with lock:\n        print("Hello")\n        counter = counter + 1\n        await asyncio.sleep(2)\n        print("bye")\n        await asyncio.sleep(2)\n        return {"counter": counter}\n\n\n"""\nMake 2 requests at a time, output from server:\n\nINFO:     127.0.0.1:60228 - "POST /limit HTTP/1.1" 200 OK\nHello\nbye\nINFO:     127.0.0.1:51010 - "POST /limit HTTP/1.1" 200 OK\nHello\nbye\nINFO:     127.0.0.1:51022 - "POST /limit HTTP/1.1" 200 OK\n\nRequest 1:\n\n\u276f curl -X \'POST\' \\\n  \'http://127.0.0.1:8000/limit\' \\\n  -H \'accept: application/json\' \\\n  -d \'\'\n{"counter":1}%\n\nRequest 2:\n\n\u276f curl -X \'POST\' \\\n  \'http://127.0.0.1:8000/limit\' \\\n  -H \'accept: application/json\' \\\n  -d \'\'\n{"counter":2}%\n"""\n'},21542:(t,e,n)=>{n.d(e,{Z:()=>a});const a='# main.py\nfrom fastapi import FastAPI\nimport asyncio\n\napp = FastAPI()\nlock = asyncio.Lock()\n\ncounter = 0\n\n\n@app.post("/limit")\nasync def func():\n    global counter\n    print("Hello")\n    counter = counter + 1\n    await asyncio.sleep(2)\n    print("bye")\n    await asyncio.sleep(2)\n    return {"counter": counter}\n\n\n"""\nMake 2 requests at a time, output from server:\n\nHello\nHello\nbye\nbye\nINFO:     127.0.0.1:45160 - "POST /limit HTTP/1.1" 200 OK\nINFO:     127.0.0.1:45172 - "POST /limit HTTP/1.1" 200 OK\n\nRequest 1:\n\n\u276f curl -X \'POST\' \\\n  \'http://127.0.0.1:8000/limit\' \\\n  -H \'accept: application/json\' \\\n  -d \'\'\n{"counter":2}%\n\nRequest 2:\n\n\u276f curl -X \'POST\' \\\n  \'http://127.0.0.1:8000/limit\' \\\n  -H \'accept: application/json\' \\\n  -d \'\'\n{"counter":2}%\n"""\n'}}]);