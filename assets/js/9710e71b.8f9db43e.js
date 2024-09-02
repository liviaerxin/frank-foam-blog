"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4233],{97606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(74848),s=t(28453);const r={},a="Python Benchmark",i={id:"python-benchmark",title:"Python Benchmark",description:"Ok, here is the cost of acquiring and releasing an uncontended lock",source:"@site/../../docs/python-benchmark.md",sourceDirName:".",slug:"/python-benchmark",permalink:"/docs/python-benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/python-benchmark.md",tags:[],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:172524916e4,frontMatter:{},sidebar:"docs",previous:{title:"Database Migration Using Alembic in Python",permalink:"/docs/python-alembic"},next:{title:"Python C Library",permalink:"/docs/python-c-library"}},c={},l=[];function h(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"python-benchmark",children:"Python Benchmark"}),"\n",(0,o.jsx)(n.p,{children:"Ok, here is the cost of acquiring and releasing an uncontended lock\nunder Linux, with Python 3.2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ ./python -m timeit \\\n  -s "from threading import Lock; l=Lock(); a=l.acquire; r=l.release" \\\n  "a(); r()"\n10000000 loops, best of 3: 0.127 usec per loop\n'})}),"\n",(0,o.jsx)(n.p,{children:"And here is the cost of calling a dummy Python function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ ./python -m timeit -s "def a(): pass" "a(); a()"\n1000000 loops, best of 3: 0.221 usec per loop\n'})}),"\n",(0,o.jsx)(n.p,{children:"And here is the cost of calling a trivial C function (which returns the\nFalse singleton):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ ./python -m timeit -s "a=bool" "a(); a()"\n10000000 loops, best of 3: 0.164 usec per loop\n'})}),"\n",(0,o.jsx)(n.p,{children:"Also, note that using the lock as a context manager is actually slower,\nnot faster as you might imagine:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ ./python -m timeit -s "from threading import Lock; l=Lock()" \\\n  "with l: pass"\n1000000 loops, best of 3: 0.242 usec per loop\n'})}),"\n",(0,o.jsx)(n.p,{children:"At least under Linux, there doesn't seem to be a lot of room for\nimprovement in lock performance, to say the least."}),"\n",(0,o.jsx)(n.p,{children:"PS: RLock is now as fast as Lock:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ ./python -m timeit \\\n-s "from threading import RLock; l=RLock(); a=l.acquire; r=l.release" \\\n"a(); r()"\n10000000 loops, best of 3: 0.114 usec per loop\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);