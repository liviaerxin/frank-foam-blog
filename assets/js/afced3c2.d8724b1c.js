"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=i,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},46524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["wiki","vcpkg"],date:new Date("2023-06-23T00:00:00.000Z"),author:"frank"},r="Wiki vcpkg",o={permalink:"/blog/wiki-vcpkg",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-vcpkg.mdx",source:"@site/../../blog/wiki-vcpkg.mdx",title:"Wiki vcpkg",description:"learn vcpkg",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"vcpkg",permalink:"/blog/tags/vcpkg"}],readingTime:2.97,hasTruncateMarker:!0,authors:[{name:"frank"}],frontMatter:{sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["wiki","vcpkg"],date:"2023-06-23T00:00:00.000Z",author:"frank"},prevItem:{title:"Learn CMake",permalink:"/blog/wiki-cmake"},nextItem:{title:"FastAPI Best Practices",permalink:"/blog/fastapi-best-practices"}},s={authorsImageUrls:[void 0]},p=[{value:"Classic mode",id:"classic-mode",level:2},{value:"Classic mode how-to",id:"classic-mode-how-to",level:3},{value:"Manifest mode",id:"manifest-mode",level:2},{value:"Manifest mode how-to",id:"manifest-mode-how-to",level:3},{value:"Useful environment variables for development",id:"useful-environment-variables-for-development",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"How to specify a compiler fof <code>vcpkg install</code>?",id:"how-to-specify-a-compiler-fof-vcpkg-install",level:3},{value:"Install <code>*-osx-dynamic</code>",id:"install--osx-dynamic",level:3},{value:"Reinstall packages without caching",id:"reinstall-packages-without-caching",level:3},{value:"Clean up all packages",id:"clean-up-all-packages",level:3},{value:"Clean up all caching packages",id:"clean-up-all-caching-packages",level:3},{value:"<code>INSTALL_RPATH_USE_LINK_PATH</code> different behaviours in <strong>manifest mode</strong> and <strong>classic mode</strong>",id:"install_rpath_use_link_path-different-behaviours-in-manifest-mode-and-classic-mode",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg")," is cross-platform ",(0,i.kt)("strong",{parentName:"p"},"C/C++ package manager"),", and its peers include ",(0,i.kt)("inlineCode",{parentName:"p"},"conan"),"."),(0,i.kt)("p",null,"The most common type of package is a C/C++ library consisting of headers, source code, and binaries."),(0,i.kt)("p",null,"Some useful folders in ",(0,i.kt)("inlineCode",{parentName:"p"},"VCPKG_ROOT=/path/to/vcpkg")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg"),":"),(0,i.kt)("p",null,"How ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg")," install ",(0,i.kt)("inlineCode",{parentName:"p"},"fmt")," library when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg install fmt")," in classic mode?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the source code ",(0,i.kt)("inlineCode",{parentName:"li"},"fmt.tar.gz")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/downloads/")," directory."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"build tree")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/buildtrees"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Put the source code under ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/buildtrees/fmt/src/xxxx-xxxx.clean/")," directory."),(0,i.kt)("li",{parentName:"ol"},"Create building directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/buildtrees/fmt/arm64-osx-dynamic-rel/"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"triplet"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"release/debug"),") and then start building"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"package tree")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/package"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Package ",(0,i.kt)("inlineCode",{parentName:"li"},"fmt")," built library like ",(0,i.kt)("inlineCode",{parentName:"li"},"fmt.dylib"),", its ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," files and ",(0,i.kt)("inlineCode",{parentName:"li"},"binaries"),"(tools) in ",(0,i.kt)("strong",{parentName:"li"},"build tree")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/packages/fmt_arm64-osx-dynamic/")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"install tree")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/installed"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"fmt"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"libs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"headers")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tools")," in ",(0,i.kt)("strong",{parentName:"li"},"package tree")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/installed/arm64-osx-dynamic/lib"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/installed/arm64-osx-dynamic/include")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"%VCPKG_ROOT%/installed/arm64-osx-dynamic/tools")," respectively.")))),(0,i.kt)("p",null,"As it outlines, ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg")," builds each package separately in ",(0,i.kt)("strong",{parentName:"p"},"build tree")," and ",(0,i.kt)("strong",{parentName:"p"},"package tree")," stages and finally in ",(0,i.kt)("strong",{parentName:"p"},"install tree")," stage ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce")," all packages into the central set in ",(0,i.kt)("inlineCode",{parentName:"p"},"%VCPKG_ROOT%/installed/arm64-osx-dynamic/"),"."),(0,i.kt)("h2",{id:"classic-mode"},"Classic mode"),(0,i.kt)("p",null,"Official saying: In Classic mode, vcpkg maintains a central ",(0,i.kt)("strong",{parentName:"p"},"installed tree")," inside the vcpkg instance built up by individual ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg install")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg remove")," commands. This central set of packages can then be shared by any number of projects."),(0,i.kt)("p",null,"All packages are installed in a common ",(0,i.kt)("inlineCode",{parentName:"p"},"%VCPKG_ROOT%/installed")," directory."),(0,i.kt)("h3",{id:"classic-mode-how-to"},"Classic mode how-to"),(0,i.kt)("p",null,"Just run ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg install %package%")," to use ",(0,i.kt)("strong",{parentName:"p"},"classic mode")," as the package will be installed into ",(0,i.kt)("inlineCode",{parentName:"p"},"%VCPKG_ROOT%/installed/"),"."),(0,i.kt)("h2",{id:"manifest-mode"},"Manifest mode"),(0,i.kt)("p",null,"Official saying: In Manifest mode, vcpkg creates separate ",(0,i.kt)("strong",{parentName:"p"},"installed trees")," for each project and configuration. This allows separate projects to use different versions of libraries. The ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg.json")," file and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg-configuration.json")," file form a project's manifest. The manifest declares the project's direct dependencies, version constraints, and registries used."),(0,i.kt)("p",null,"All packages are installed in their own ",(0,i.kt)("inlineCode",{parentName:"p"},"${project}/vcpkg_installed")," directory inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"${project}")," directory."),(0,i.kt)("h3",{id:"manifest-mode-how-to"},"Manifest mode how-to"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg.json")," in the project, then run ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg install")," to use ",(0,i.kt)("strong",{parentName:"p"},"manifest mode")," as all the packages declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg.json")," will be installed into ",(0,i.kt)("inlineCode",{parentName:"p"},"${project}/vcpkg_installed/"),"."),(0,i.kt)("h2",{id:"useful-environment-variables-for-development"},"Useful environment variables for development"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CURRENT_INSTALLED_DIR"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"CURRENT_PACKAGES_DIR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'set(VCPKG_RELEASE_LIBDIR "${CURRENT_INSTALLED_DIR}/lib")\nset(VCPKG_DEBUG_LIBDIR "${CURRENT_INSTALLED_DIR}/debug/lib")\nset(VCPKG_TOOLS_DIR "${CURRENT_INSTALLED_DIR}/tools")\nset(VCPKG_SHARE_DIR "${CURRENT_INSTALLED_DIR}/share")\nset(VCPKG_INCLUDE_DIR "${CURRENT_INSTALLED_DIR}/include")\n')),(0,i.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,i.kt)("h3",{id:"how-to-specify-a-compiler-fof-vcpkg-install"},"How to specify a compiler fof ",(0,i.kt)("inlineCode",{parentName:"h3"},"vcpkg install"),"?"),(0,i.kt)("p",null,"As ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpkg")," just use ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," toolchain to do install, how to set a specific compile is ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," things."),(0,i.kt)("p",null,"A fast way is use ",(0,i.kt)("inlineCode",{parentName:"p"},"CC")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CXX")," environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export CC=gcc-4.2\nexport CXX=/usr/bin/g++-4.2\n")),(0,i.kt)("p",null,"See more ways at ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/45933732/how-to-specify-a-compiler-in-cmake"},"iar - How to specify a compiler in CMake? - Stack Overflow")),(0,i.kt)("h3",{id:"install--osx-dynamic"},"Install ",(0,i.kt)("inlineCode",{parentName:"h3"},"*-osx-dynamic")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"vcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\n")),(0,i.kt)("h3",{id:"reinstall-packages-without-caching"},"Reinstall packages without caching"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\nvcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\n\nvcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\n')),(0,i.kt)("h3",{id:"clean-up-all-packages"},"Clean up all packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /opt/vcpkg/installed/\nrm -rf /opt/vcpkg/packages/\nrm -rf /opt/vcpkg/buildtrees/\n")),(0,i.kt)("h3",{id:"clean-up-all-caching-packages"},"Clean up all caching packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.cache/vcpkg/archives/\n")),(0,i.kt)("h3",{id:"install_rpath_use_link_path-different-behaviours-in-manifest-mode-and-classic-mode"},(0,i.kt)("inlineCode",{parentName:"h3"},"INSTALL_RPATH_USE_LINK_PATH")," different behaviours in ",(0,i.kt)("strong",{parentName:"h3"},"manifest mode")," and ",(0,i.kt)("strong",{parentName:"h3"},"classic mode")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_RPATH_USE_LINK_PATH")," will not work properly when being used in the ",(0,i.kt)("strong",{parentName:"p"},"manifest mode"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"CMake")," will don't handle libraries located in ",(0,i.kt)("inlineCode",{parentName:"p"},"buildtree"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'set_target_properties(${PROJECT_NAME} PROPERTIES\n    INSTALL_RPATH "@executable_path/../Frameworks"\n    INSTALL_RPATH_USE_LINK_PATH ON\n)\n')),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,i.kt)("strong",{parentName:"p"},"manifest mode"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,i.kt)("strong",{parentName:"p"},"classic mode"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 56\n         path /opt/vcpkg/installed/arm64-osx-dynamic/lib (offset 12)\nLoad command 27\n      cmd LC_FUNCTION_STARTS\n--\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,i.kt)("p",null,"[wiki-cmake.mdx#RPATH in CMake]","(/blog/wiki-cmake#RPATH in CMake)"),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"TODO: Fix qtbase tools/config in release/debug osx  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase"},"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup"},"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup")))}d.isMDXComponent=!0}}]);