"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6911],{68164:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const s={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/how-to-mount-iso-file.mdx"},authors:["frank"],tags:["how-to","iso","osx","linux"],description:"How to mount ISO file",keywords:["How to mount ISO file"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-21T00:00:00.000Z"),draft:!1,enableComments:!0},l="How to mount ISO image file",a={permalink:"/blog/how-to-mount-iso-file",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/how-to-mount-iso-file.mdx",source:"@site/../../blog/how-to-mount-iso-file.mdx",title:"How to mount ISO image file",description:"How to mount ISO file",date:"2023-09-21T00:00:00.000Z",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"iso",permalink:"/blog/tags/iso"},{label:"osx",permalink:"/blog/tags/osx"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.61,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/how-to-mount-iso-file.mdx"},authors:["frank"],tags:["how-to","iso","osx","linux"],description:"How to mount ISO file",keywords:["How to mount ISO file"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-21T00:00:00.000Z",draft:!1,enableComments:!0},unlisted:!1,prevItem:{title:"QEMU Emulate Raspberry Pi 3 and 4",permalink:"/blog/qemu-raspberry-pi"},nextItem:{title:"Wiki Emulator",permalink:"/blog/wiki-emulator"}},r={authorsImageUrls:[void 0]},c=[{value:"Mount ISO file on Linux",id:"mount-iso-file-on-linux",level:2},{value:"Mount ISO file on macOS",id:"mount-iso-file-on-macos",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["For viewing the content of the ",(0,t.jsx)(n.strong,{children:"ISO"})," image file like ",(0,t.jsx)(n.code,{children:"*.iso"}),", we can mount it to filesystem and loop up its contained files."]}),"\n",(0,t.jsxs)(n.p,{children:["Mounting the ",(0,t.jsx)(n.strong,{children:"ISO"})," image file in linux is much easier than doing in macOS. Because ",(0,t.jsx)(n.strong,{children:"ISO"})," use ",(0,t.jsx)(n.code,{children:"ISO9660"})," file system while the ",(0,t.jsx)(n.code,{children:"hdiutil"})," in macOS does not support it originally. That will require more steps to implement in comparison with one command like ",(0,t.jsx)(n.code,{children:"mount "})," in Linux."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cyberciti.biz/tips/how-to-mount-iso-image-under-linux.html",children:"How to mount iso image in Linux"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/298685/can-a-mac-mount-a-debian-install-cd",children:"osx - Can a Mac mount a Debian install CD? - Unix & Linux Stack Exchange"})}),"\n",(0,t.jsx)(n.h2,{id:"mount-iso-file-on-linux",children:"Mount ISO file on Linux"}),"\n",(0,t.jsx)(n.h2,{id:"mount-iso-file-on-macos",children:"Mount ISO file on macOS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Attaching as a block device"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# the '-nomount' option avoids the 'mount failed' error\n\u276f hdiutil attach -nomount mantic-mini-iso-amd64.iso\n/dev/disk6          \tGUID_partition_scheme          \t\n/dev/disk6s1        \tMicrosoft Basic Data           \t\n/dev/disk6s2        \tEFI                            \t\n/dev/disk6s3        \tMicrosoft Basic Data  \n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u276f diskutil info /dev/disk6s2\n   Device Identifier:         disk6s2\n   Device Node:               /dev/disk6s2\n   Whole:                     No\n   Part of Whole:             disk6\n\n   Volume Name:               ESP\n   Mounted:                   No\n\n   Partition Type:            EFI\n   File System Personality:   MS-DOS FAT12\n   Type (Bundle):             msdos\n   Name (User Visible):       MS-DOS (FAT12)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"[Optional] Load CD9660"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Load the kext module\n\u276f sudo kmutil load -p /System/Library/Extensions/cd9660.kext\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Mount the disk with cd9660 (aka ISO9660) file system"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# create mount point\n\u276f mkdir -p /tmp/ubuntu-mantic-iso\n\n# mount the disk\n\u276f mount -t cd9660 /dev/disk6 /tmp/ubuntu-mantic-iso\n"})}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.code,{children:"iso"})," files,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u276f tree -h -L 3 /tmp/ubuntu-mantic-iso\n[2.0K]  /tmp/ubuntu-mantic-iso\n\u251c\u2500\u2500 [2.0K]  EFI\n\u2502\xa0\xa0 \u2514\u2500\u2500 [2.0K]  boot\n\u2502\xa0\xa0     \u251c\u2500\u2500 [938K]  bootx64.efi\n\u2502\xa0\xa0     \u251c\u2500\u2500 [2.2M]  grubx64.efi\n\u2502\xa0\xa0     \u2514\u2500\u2500 [841K]  mmx64.efi\n\u251c\u2500\u2500 [2.0K]  boot\n\u2502\xa0\xa0 \u2514\u2500\u2500 [2.0K]  grub\n\u2502\xa0\xa0     \u251c\u2500\u2500 [2.0K]  fonts\n\u2502\xa0\xa0     \u251c\u2500\u2500 [ 169]  grub.cfg\n\u2502\xa0\xa0     \u251c\u2500\u2500 [ 38K]  i386-pc\n\u2502\xa0\xa0     \u2514\u2500\u2500 [ 36K]  x86_64-efi\n\u251c\u2500\u2500 [2.0K]  boot.catalog\n\u2514\u2500\u2500 [2.0K]  casper\n    \u251c\u2500\u2500 [ 56M]  initrd\n    \u2514\u2500\u2500 [ 13M]  vmlinuz\n\n9 directories, 7 files\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Umount the disk"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u276f umount /dev/disk6\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Detach the disk"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u276f hdiutil detach /dev/disk6\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);