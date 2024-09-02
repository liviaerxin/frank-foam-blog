"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8806],{56418:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(74848),t=i(28453);const s={authors:["frank"],tags:["Python","C","C++","Shared library","Dynamic library"],description:"Python C",keywords:["Python C"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-12-18T00:00:00.000Z"),draft:!1,enableComments:!0},o="Python C Library",l={id:"python-c-library",title:"Python C Library",description:"Python C",source:"@site/../../docs/python-c-library.mdx",sourceDirName:".",slug:"/python-c-library",permalink:"/docs/python-c-library",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/python-c-library.mdx",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"C",permalink:"/docs/tags/c"},{inline:!0,label:"C++",permalink:"/docs/tags/c"},{inline:!0,label:"Shared library",permalink:"/docs/tags/shared-library"},{inline:!0,label:"Dynamic library",permalink:"/docs/tags/dynamic-library"}],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:172524916e4,frontMatter:{authors:["frank"],tags:["Python","C","C++","Shared library","Dynamic library"],description:"Python C",keywords:["Python C"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-12-18T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"Python Benchmark",permalink:"/docs/python-benchmark"},next:{title:"Python Celery",permalink:"/docs/python-celery-workflow"}},a={},c=[{value:"Python <code>int</code> object",id:"python-int-object",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"python-c-library",children:"Python C Library"}),"\n",(0,r.jsx)(n.p,{children:"How many ways Python can interact with C libraries?"}),"\n",(0,r.jsx)(n.p,{children:"Two. There are two different modes totally."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctypes"})," to load any dynamic library from a C libraries"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"import module"})," to import a dynamic library written using the Python C API"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Let's clarify the terminology a bit:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctypes"})," to Load Dynamic Libraries (including any C library):"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctypes"})," is a foreign function interface (FFI) library in Python that allows you to call functions from dynamic/shared libraries written in languages like C."]}),"\n",(0,r.jsx)(n.li,{children:"It can be used to load and call functions from C libraries (or any dynamic/shared libraries), and it's a more manual, low-level approach to interfacing with C code."}),"\n",(0,r.jsxs)(n.li,{children:["Example with ",(0,r.jsx)(n.code,{children:"ctypes"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"import module"})," for Dynamic Libraries written in Python C API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If a C library is written using the Python C API and compiled as a Python extension module (",(0,r.jsx)(n.code,{children:".pyd"})," on Windows or ",(0,r.jsx)(n.code,{children:".so"})," on Unix-like systems), you can use the import statement to ",(0,r.jsx)(n.code,{children:"import"})," and use it in Python."]}),"\n",(0,r.jsxs)(n.li,{children:["This ",(0,r.jsx)(n.code,{children:"Pythonic"})," approach typically provides a more seamless integration as it allows the C code to be treated as a native Python module."]}),"\n",(0,r.jsxs)(n.li,{children:["Example with ",(0,r.jsx)(n.code,{children:"import module"}),":"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["What's the file's name that Python look for when using ",(0,r.jsx)(n.code,{children:"import module"})," to import C API libraries?"]}),"\n",(0,r.jsxs)(n.p,{children:["Python will look for a shared library with a suitable name, as determined by the platform conventions.\nThe shared library could be named something like ",(0,r.jsx)(n.code,{children:"libexample.so"})," on Unix-like systems or ",(0,r.jsx)(n.code,{children:"example.dll"})," on Windows. The ",(0,r.jsx)(n.code,{children:"PyInit_example"})," function initializes the module."]}),"\n",(0,r.jsxs)(n.h2,{id:"python-int-object",children:["Python ",(0,r.jsx)(n.code,{children:"int"})," object"]}),"\n",(0,r.jsx)(n.p,{children:"Python uses a variable-size integer representation,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Overhead size"}),": 24 bytes, including Python header object"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Data size"}),": 4 or 8 bytes, storing smaller ",(0,r.jsx)(n.code,{children:"int"})," using 4 bytes and bigger ",(0,r.jsx)(n.code,{children:"int"})," using 8 bytes."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:">>> sys.getsizeof(0x560f7ab1e1c0)\n32\n>>> sys.getsizeof(0xc0)\n28\n"})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);