"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const l={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/git-submodules.md"},authors:["frank"],tags:["git","git submodules","best practice"],description:"Git Submodules",keywords:["Git Submodules"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-08-02T00:00:00.000Z"),draft:!1,enableComments:!0},r="Git Best Practices",o={permalink:"/blog/git-best-practices",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/git-best-practices.md",source:"@site/../../blog/git-best-practices.md",title:"Git Best Practices",description:"Git Submodules",date:"2023-08-02T00:00:00.000Z",formattedDate:"August 2, 2023",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"git submodules",permalink:"/blog/tags/git-submodules"},{label:"best practice",permalink:"/blog/tags/best-practice"}],readingTime:2.95,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/git-submodules.md"},authors:["frank"],tags:["git","git submodules","best practice"],description:"Git Submodules",keywords:["Git Submodules"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-08-02T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Set Up NFS Sever in Docker",permalink:"/blog/docker-setup-nfs-sever"},nextItem:{title:"Share Data between Docker Containers",permalink:"/blog/docker-containers-data-sharing"}},s={authorsImageUrls:[void 0]},u=[{value:"Git SSH key",id:"git-ssh-key",level:2},{value:"Git credential",id:"git-credential",level:2},{value:"Git submodule",id:"git-submodule",level:2},{value:"Discard local commits",id:"discard-local-commits",level:2},{value:"Create a subdirectory inside Git and use it as Git submodule",id:"create-a-subdirectory-inside-git-and-use-it-as-git-submodule",level:2},{value:"Carve out a subdirectory from Git and use it as Git submodule",id:"carve-out-a-subdirectory-from-git-and-use-it-as-git-submodule",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Global configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global --list\ngit config --local --list\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GIT")," two popular authentication methods: ",(0,i.kt)("a",{parentName:"p",href:"#git-ssh-key"},"SSH Key")," and ",(0,i.kt)("a",{parentName:"p",href:"#git-credentials"},"Credentials")),(0,i.kt)("h2",{id:"git-ssh-key"},"Git SSH key"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hackernoon.com/how-to-authenticate-your-git-to-github-with-ssh-keys"},"How to Authenticate Your Git to GitHub with SSH Keys")),(0,i.kt)("h2",{id:"git-credential"},"Git credential"),(0,i.kt)("p",null,"Store username/password instead of ssh for multiple remotes"),(0,i.kt)("p",null,"To enable git credentials"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# local\ngit config credential.helper store\n# global\ngit config --global credential.helper store\n")),(0,i.kt)("p",null,"Each credential is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.git-credentials")," file on its own line as a URL like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"https://<USERNAME>:<PASSWORD>@github.com\n")),(0,i.kt)("p",null,"Configure credentials,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Global\ngit config --global credential.https://github.com.username <your_username>\n\n# Or \ngit config --local user.name <your_username>\ngit config --local user.email <your_useremail>\n# Then git pull or git push to let it cache your username/password after it prompt you to input password in the first time\n")),(0,i.kt)("p",null,"Alternatively, we can directly edit our global Git config file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitconfig"),","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'[credential "https://github.com"]\n    username = <username>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.shellhacks.com/git-config-username-password-store-credentials/"},"Git - Config Username & Password - Store Credentials - ShellHacks")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.baeldung.com/ops/git-configure-credentials"},"Configuring Git Credentials")),(0,i.kt)("h2",{id:"git-submodule"},"Git submodule"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pull the repo and its all submodules in ",(0,i.kt)("strong",{parentName:"li"},"the first time"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone http://10.6.64.66:30000/mtr/mtr.git\n\ncd mtr\n\ngit submodule update --init --recursive --progress\n")),(0,i.kt)("p",null,"Or just one command to clone with all the submodules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --recursive http://10.6.64.66:30000/mtr/mtr.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Pull the repo and its all submodules later")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule update --recursive --progress\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Enter each sub repository to pull its own latest of ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," per repository, when the parent repo does point to the latest branch of its submodules!")),(0,i.kt)("p",null,"Sometimes, it is very annoying to keep the parent repository up to date on the latest reference of its every sub repository!\nThis approach give you the flexibility while being like a shortcut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule foreach git checkout main\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule foreach git pull\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule foreach git pull origin main\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule update --recursive --remote\n")),(0,i.kt)("h2",{id:"discard-local-commits"},"Discard local commits"),(0,i.kt)("p",null,"Assume your local repo has 10 commits ahead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin/main"),", and you want to move back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin/main"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git reset --hard origin/main\n")),(0,i.kt)("h2",{id:"create-a-subdirectory-inside-git-and-use-it-as-git-submodule"},"Create a subdirectory inside Git and use it as Git submodule"),(0,i.kt)("p",null,"First, create a subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"./include/private")," and initialize it as a new Git repository inside Git repo, then push it to remote."),(0,i.kt)("p",null,"Once done, we'll have subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"./include/private")," which has been gitted."),(0,i.kt)("p",null,"Check current parent Git submodule, and our ",(0,i.kt)("inlineCode",{parentName:"p"},"./include/private")," sit outside."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ git submodule\n-96788d8ac53a815778a8cfd19addb3590a8be5ea code-snippets/assembly\n-990e3db80c61c64ba9097adb7e729a6568c272ec code-snippets/c\n-dd2097c0884363948877dea2b3f68efb90e6d204 code-snippets/cpp\n-a4c753b89c423cd02718bece5a8a6302bd2385c7 code-snippets/docker-compose\n-e23cfb82c6fefae4fdc6a144228bebb580bf7c13 code-snippets/python\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 1, Using ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule add")," command in ",(0,i.kt)("strong",{parentName:"li"},"parent")," directory(note: works even ",(0,i.kt)("inlineCode",{parentName:"li"},"./include/private")," folder exists):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule add https://github.com/liviaerxin/private.git include/private\n")),(0,i.kt)("p",null,"Finally, commit,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "add submodule private"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 2, Editing ",(0,i.kt)("inlineCode",{parentName:"li"},".gitmodules")," file in ",(0,i.kt)("strong",{parentName:"li"},"parent")," directory by adding:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".gitmodules"',title:'".gitmodules"'},'[submodule "include/private"]\n    path = include/private\n    url = https://github.com/liviaerxin/private.git\n')),(0,i.kt)("p",null,"Indexing the submodule,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git add include/private\n")),(0,i.kt)("p",null,"Verifying that the submodule has been included,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ git submodule\n-96788d8ac53a815778a8cfd19addb3590a8be5ea code-snippets/assembly\n-990e3db80c61c64ba9097adb7e729a6568c272ec code-snippets/c\n-dd2097c0884363948877dea2b3f68efb90e6d204 code-snippets/cpp\n-a4c753b89c423cd02718bece5a8a6302bd2385c7 code-snippets/docker-compose\n-e23cfb82c6fefae4fdc6a144228bebb580bf7c13 code-snippets/python\n-e9e1b5f114e5da1896dae6c08ca01bc83b844b4d include/private\n")),(0,i.kt)("p",null,"For managing the submodule,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sync local private file: ",(0,i.kt)("inlineCode",{parentName:"li"},".git/config")," by running ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule init"),", which will let the submodule update when running ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule update")," later. ")),(0,i.kt)("p",null,"Finally, commit,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "add submodule private"\n')),(0,i.kt)("p",null,"In conclusion, ",(0,i.kt)("inlineCode",{parentName:"p"},"git submodule add")," equals:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone {submodule} include/{submodule}"),"."),(0,i.kt)("li",{parentName:"ol"},"Add submodule configuration such as ",(0,i.kt)("inlineCode",{parentName:"li"},"path = include/{submodule}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"url=https://github.com/xxx/{submodule}.git")," into ",(0,i.kt)("inlineCode",{parentName:"li"},".gitmodules")," file."),(0,i.kt)("li",{parentName:"ol"},"Add the sub folder ",(0,i.kt)("inlineCode",{parentName:"li"},"include/{submodule}"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git add include/{submodule}"),"."),(0,i.kt)("li",{parentName:"ol"},"Sync ",(0,i.kt)("inlineCode",{parentName:"li"},".git/config")," file: ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule init"),".")),(0,i.kt)("h2",{id:"carve-out-a-subdirectory-from-git-and-use-it-as-git-submodule"},"Carve out a subdirectory from Git and use it as Git submodule"))}d.isMDXComponent=!0}}]);