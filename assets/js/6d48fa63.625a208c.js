"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(f,r(r({ref:t},m),{},{components:n})):o.createElement(f,r({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const a={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/how-to-mount-iso-file.mdx"},authors:["frank"],tags:["how-to","iso","osx","linux"],description:"How to mount ISO file",keywords:["How to mount ISO file"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-21T00:00:00.000Z"),draft:!1,enableComments:!0},r="How to mount ISO image file",l={permalink:"/blog/how-to-mount-iso-file",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/how-to-mount-iso-file.mdx",source:"@site/../../blog/how-to-mount-iso-file.mdx",title:"How to mount ISO image file",description:"How to mount ISO file",date:"2023-09-21T00:00:00.000Z",formattedDate:"September 21, 2023",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"iso",permalink:"/blog/tags/iso"},{label:"osx",permalink:"/blog/tags/osx"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.61,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/how-to-mount-iso-file.mdx"},authors:["frank"],tags:["how-to","iso","osx","linux"],description:"How to mount ISO file",keywords:["How to mount ISO file"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-21T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"QEMU Emulate Raspberry Pi 3 and 4",permalink:"/blog/qemu-raspberry-pi"},nextItem:{title:"Wiki Emulator",permalink:"/blog/wiki-emulator"}},s={authorsImageUrls:[void 0]},u=[{value:"Mount ISO file on Linux",id:"mount-iso-file-on-linux",level:2},{value:"Mount ISO file on macOS",id:"mount-iso-file-on-macos",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For viewing the content of the ",(0,i.kt)("strong",{parentName:"p"},"ISO")," image file like ",(0,i.kt)("inlineCode",{parentName:"p"},"*.iso"),", we can mount it to filesystem and loop up its contained files."),(0,i.kt)("p",null,"Mounting the ",(0,i.kt)("strong",{parentName:"p"},"ISO")," image file in linux is much easier than doing in macOS. Because ",(0,i.kt)("strong",{parentName:"p"},"ISO")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"ISO9660")," file system while the ",(0,i.kt)("inlineCode",{parentName:"p"},"hdiutil")," in macOS does not support it originally. That will require more steps to implement in comparison with one command like ",(0,i.kt)("inlineCode",{parentName:"p"},"mount ")," in Linux."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cyberciti.biz/tips/how-to-mount-iso-image-under-linux.html"},"How to mount iso image in Linux")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/298685/can-a-mac-mount-a-debian-install-cd"},"osx - Can a Mac mount a Debian install CD? - Unix & Linux Stack Exchange")),(0,i.kt)("h2",{id:"mount-iso-file-on-linux"},"Mount ISO file on Linux"),(0,i.kt)("h2",{id:"mount-iso-file-on-macos"},"Mount ISO file on macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Attaching as a block device")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# the '-nomount' option avoids the 'mount failed' error\n\u276f hdiutil attach -nomount mantic-mini-iso-amd64.iso\n/dev/disk6              GUID_partition_scheme           \n/dev/disk6s1            Microsoft Basic Data            \n/dev/disk6s2            EFI                             \n/dev/disk6s3            Microsoft Basic Data  \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f diskutil info /dev/disk6s2\n   Device Identifier:         disk6s2\n   Device Node:               /dev/disk6s2\n   Whole:                     No\n   Part of Whole:             disk6\n\n   Volume Name:               ESP\n   Mounted:                   No\n\n   Partition Type:            EFI\n   File System Personality:   MS-DOS FAT12\n   Type (Bundle):             msdos\n   Name (User Visible):       MS-DOS (FAT12)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"[Optional]"," Load CD9660")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Load the kext module\n\u276f sudo kmutil load -p /System/Library/Extensions/cd9660.kext\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Mount the disk with cd9660 (aka ISO9660) file system")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# create mount point\n\u276f mkdir -p /tmp/ubuntu-mantic-iso\n\n# mount the disk\n\u276f mount -t cd9660 /dev/disk6 /tmp/ubuntu-mantic-iso\n")),(0,i.kt)("p",null,"View the ",(0,i.kt)("inlineCode",{parentName:"p"},"iso")," files,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f tree -h -L 3 /tmp/ubuntu-mantic-iso\n[2.0K]  /tmp/ubuntu-mantic-iso\n\u251c\u2500\u2500 [2.0K]  EFI\n\u2502\xa0\xa0 \u2514\u2500\u2500 [2.0K]  boot\n\u2502\xa0\xa0     \u251c\u2500\u2500 [938K]  bootx64.efi\n\u2502\xa0\xa0     \u251c\u2500\u2500 [2.2M]  grubx64.efi\n\u2502\xa0\xa0     \u2514\u2500\u2500 [841K]  mmx64.efi\n\u251c\u2500\u2500 [2.0K]  boot\n\u2502\xa0\xa0 \u2514\u2500\u2500 [2.0K]  grub\n\u2502\xa0\xa0     \u251c\u2500\u2500 [2.0K]  fonts\n\u2502\xa0\xa0     \u251c\u2500\u2500 [ 169]  grub.cfg\n\u2502\xa0\xa0     \u251c\u2500\u2500 [ 38K]  i386-pc\n\u2502\xa0\xa0     \u2514\u2500\u2500 [ 36K]  x86_64-efi\n\u251c\u2500\u2500 [2.0K]  boot.catalog\n\u2514\u2500\u2500 [2.0K]  casper\n    \u251c\u2500\u2500 [ 56M]  initrd\n    \u2514\u2500\u2500 [ 13M]  vmlinuz\n\n9 directories, 7 files\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Umount the disk")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f umount /dev/disk6\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Detach the disk")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f hdiutil detach /dev/disk6\n")))}c.isMDXComponent=!0}}]);