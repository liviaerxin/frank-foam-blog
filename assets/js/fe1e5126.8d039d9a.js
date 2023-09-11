"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-ffmpeg.md"},authors:["frank"],description:"Setup Intel VROC RAID on Ubuntu",keywords:["Setup Intel VROC RAID on Ubuntu"],image:"https://i.imgur.com/mErPwqL.png",tags:["intel vroc","raid","ubuntu","best practice"],date:new Date("2023-08-29T00:00:00.000Z"),last_update:new Date("2023-08-29T00:00:00.000Z")},i="Intel VROC RAID on Ubuntu",d={permalink:"/blog/ubuntu-intel-vroc-raid",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/ubuntu-intel-vroc-raid.mdx",source:"@site/../../blog/ubuntu-intel-vroc-raid.mdx",title:"Intel VROC RAID on Ubuntu",description:"Setup Intel VROC RAID on Ubuntu",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"intel vroc",permalink:"/blog/tags/intel-vroc"},{label:"raid",permalink:"/blog/tags/raid"},{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"best practice",permalink:"/blog/tags/best-practice"}],readingTime:6.22,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-ffmpeg.md"},authors:["frank"],description:"Setup Intel VROC RAID on Ubuntu",keywords:["Setup Intel VROC RAID on Ubuntu"],image:"https://i.imgur.com/mErPwqL.png",tags:["intel vroc","raid","ubuntu","best practice"],date:"2023-08-29T00:00:00.000Z",last_update:"2023-08-29T00:00:00.000Z"},prevItem:{title:"Install FFmpeg on Nvidia CUDA Container",permalink:"/blog/ffmpeg-on-cuda-container"},nextItem:{title:"RAID on Ubuntu",permalink:"/blog/ubuntu-raid"}},s={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Set up RAID 5 array",id:"set-up-raid-5-array",level:2},{value:"Create RAID array",id:"create-raid-array",level:3},{value:"Mount the RAID array for use",id:"mount-the-raid-array-for-use",level:3},{value:"Save RAID array configuration",id:"save-raid-array-configuration",level:3},{value:"Remove RAID Array",id:"remove-raid-array",level:2},{value:"Optional Umount the array from filesystem",id:"optional-umount-the-array-from-filesystem",level:3},{value:"Stop RAID container and array",id:"stop-raid-container-and-array",level:3},{value:"Removes the RAID metadata",id:"removes-the-raid-metadata",level:3},{value:"Optional Remove RAID configuration",id:"optional-remove-raid-configuration",level:3},{value:"Manage RAID Array with mdadm",id:"manage-raid-array-with-mdadm",level:2}],m={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.intel.com/content/dam/support/us/en/documents/memory-and-storage/ssd-software/Linux_VROC_6-0_User_Guide.pdf"},"Linux VROC User Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.intel.com/content/dam/support/us/en/documents/memory-and-storage/ssd-software/VROC-Ubuntu-Setup-UserGuide-342787-US.pdf"},"VROC Ubuntu Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/ubuntu-raid"},"Ubuntu RAID"))),(0,r.kt)("p",null,"This document will present how to create and manage ",(0,r.kt)("strong",{parentName:"p"},"Intel VROC RAID")," on Ubuntu with ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," utility(It should also work in other Linux)."),(0,r.kt)("p",null,"For setting up ",(0,r.kt)("strong",{parentName:"p"},"Intel VROC RAID")," on Ubuntu in ",(0,r.kt)("inlineCode",{parentName:"p"},"BIOS"),", go to see ",(0,r.kt)("a",{parentName:"p",href:"https://www.intel.com/content/dam/support/us/en/documents/memory-and-storage/ssd-software/VROC-Ubuntu-Setup-UserGuide-342787-US.pdf"},"VROC Ubuntu Setup"),"."),(0,r.kt)("p",null,"For creating ",(0,r.kt)("strong",{parentName:"p"},"software RAID")," on Ubuntu, go to see ",(0,r.kt)("a",{parentName:"p",href:"/blog/ubuntu-raid"},"Ubuntu RAID"),"."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"On the premise machine, there are 2 NVMe SSDs and 8 SATA hard drives(HDDs), and also it ships with a in-box hardware-assisted RAID controller(",(0,r.kt)("strong",{parentName:"p"},"Intel VROC"),") on the Intel CPU, which is supposed to keep overall advantages over ",(0,r.kt)("strong",{parentName:"p"},"software RAID"),"."),(0,r.kt)("p",null,"For me, I would like to use these 8 HDDs(sda, sdb, ..., sdh) to store data for long time, while retaining the balance between redundancy and performance. So here ",(0,r.kt)("strong",{parentName:"p"},"RAID 5"),"(Stripping with Parity) comes into my mind."),(0,r.kt)("p",null,"To leverage the power of ",(0,r.kt)("strong",{parentName:"p"},"Intel VROC")," in Ubuntu(Linux), you also need the ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," command line tool to manage intel VROC which support RAID 0, RAID 1, RAID 5 and RAID 10"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In my understanding, the intel VROC register in system with the common interface with ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm"),", so the ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," software can operate it. And running command will show the ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," is using intel VROC,"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo mdadm --detail-platform\n\n       Platform : Intel(R) Virtual RAID on CPU\n        Version : 8.0.3.1002\n    RAID Levels : raid0 raid1 raid10 raid5\n    Chunk Sizes : 4k 8k 16k 32k 64k 128k\n    2TB volumes : supported\n      2TB disks : supported\n      Max Disks : 8\n    Max Volumes : 2 per array, 8 per controller\n I/O Controller : /sys/devices/pci0000:00/0000:00:17.0 (SATA)\n          Port7 : /dev/sdh (ZR909K07)\n          Port6 : /dev/sdg (ZV70BN24)\n          Port3 : /dev/sdd (ZV70BD3T)\n          Port4 : /dev/sde (ZR909Q89)\n          Port1 : /dev/sdb (ZRT0S2FM)\n          Port5 : /dev/sdf (ZR9099MM)\n          Port2 : /dev/sdc (ZR909AGN)\n          Port0 : /dev/sda (ZV70BMH9)\n\n       Platform : Intel(R) Virtual RAID on CPU\n        Version : 8.0.3.1002\n    RAID Levels : raid0 raid1 raid10\n    Chunk Sizes : 4k 8k 16k 32k 64k 128k\n    2TB volumes : supported\n      2TB disks : supported\n      Max Disks : 96\n    Max Volumes : 2 per array, 24 per controller\n 3rd party NVMe : supported\n I/O Controller : /sys/devices/pci0000:8d/0000:8d:00.5 (VMD)\n NVMe under VMD : /dev/nvme0n1 (633FC084FCVK)\n NVMe under VMD : /dev/nvme1n1 (633FC0DEFCVK)\n I/O Controller : /sys/devices/pci0000:6f/0000:6f:00.5 (VMD)\n I/O Controller : /sys/devices/pci0000:51/0000:51:00.5 (VMD)\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Install Ubuntu Server on RAID:\nUbuntu Server Image has inbox ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," utilities and ",(0,r.kt)("inlineCode",{parentName:"p"},"VMD")," drivers(which enable intel VROC functionalities), so it is quite convenient to create the RAID 1 on 2 SSDs either in BIOS stage(for intel VROC only) or in storage layer step during OS installation stage(software RAID), then install Ubuntu Server OS on the RAID 1."),(0,r.kt)("p",{parentName:"admonition"},"After creating the RAID 1 via intel VROC in BIOS, Ubuntu Server installation can detect the RAID created by VROC in step when set up the storage layer."),(0,r.kt)("p",{parentName:"admonition"},"If you skip BIOS to create RAID during OS installation, remember to add ",(0,r.kt)("inlineCode",{parentName:"p"},"-e isms")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," to create RAID(you can enter the terminal, do ``) otherwise the RAID is software based and does not apply VROC."),(0,r.kt)("p",{parentName:"admonition"},"Install Ubuntu Desktop on RAID:\nUbuntu Desk Image does not ship the ",(0,r.kt)("inlineCode",{parentName:"p"},"mdadm")," tool, so it is nearly impossible to create RAID and install Ubuntu Desktop OS on the RAID(however this one ",(0,r.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1299978/install-ubuntu-20-04-desktop-with-raid-1-and-lvm-on-machine-with-uefi-bios"},"Install Ubuntu 20.04 desktop with RAID 1 and LVM on machine with UEFI BIOS")," from stackoverflow seems to be successful)")),(0,r.kt)("h2",{id:"set-up-raid-5-array"},"Set up RAID 5 array"),(0,r.kt)("p",null,"Here, I use 8 disks: ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sdb"),", ..., ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sdh")," to create ",(0,r.kt)("strong",{parentName:"p"},"RAID 5")," array and mount it for use in practice."),(0,r.kt)("h3",{id:"create-raid-array"},"Create RAID array"),(0,r.kt)("p",null,"When creating RAID array, ",(0,r.kt)("strong",{parentName:"p"},"Intel VROC")," is different with ",(0,r.kt)("strong",{parentName:"p"},"software RAID")," array creation as an additional container is needed to create firstly. Inside the container, some information is labelled into the drives for Intel VROC controller to recognize them."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create RAID Container with Intel IMSM Metadata")),(0,r.kt)("p",null,"the total number of drives is 8 and ",(0,r.kt)("inlineCode",{parentName:"p"},"-e imsm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --create /dev/md/imsm0 /dev/sd[a-h] -n 8 -e imsm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then, Create a RAID array in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/md/imsm0")," container using total 8 drives with ",(0,r.kt)("strong",{parentName:"li"},"RAID 5"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --create /dev/md/md0 /dev/md/imsm0 -l 0 -n 2\n")),(0,r.kt)("h3",{id:"mount-the-raid-array-for-use"},"Mount the RAID array for use"),(0,r.kt)("p",null,"After you create the RAID array in above step, all partitions and data will be erased from all individual disks."),(0,r.kt)("p",null,"The RAID array is treated as a ",(0,r.kt)("strong",{parentName:"p"},"logical drive")," now."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"ext4")," filesystem on the RAID array")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkfs.ext4 -F /dev/md/md0\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Mount the RAID array")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /mnt/md0\n\nsudo mount /dev/md/md0 /mnt/md0\n")),(0,r.kt)("h3",{id:"save-raid-array-configuration"},"Save RAID array configuration"),(0,r.kt)("p",null,"To make sure that the RAID array is reassembled and mounted automatically after reboot, we will have to add some necessary information into ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mdadm/mdadm.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Scan active array and append into ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/mdadm/mdadm.conf")," file with following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"initramfs"),", so the array will be available at early boot:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo update-initramfs -u\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add mount options to ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/fstab"),", you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"UUID=xxxx")," instead of the ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/md0"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"echo '/dev/md0 /mnt/md0 ext4 defaults,nofail,discard 0 0' | sudo tee -a /etc/fstab\n")),(0,r.kt)("h2",{id:"remove-raid-array"},"Remove RAID Array"),(0,r.kt)("h3",{id:"optional-umount-the-array-from-filesystem"},"[Optional]"," Umount the array from filesystem"),(0,r.kt)("p",null,"Umount the array from filesystem if mounted,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo umount /dev/md/md0\n")),(0,r.kt)("h3",{id:"stop-raid-container-and-array"},"Stop RAID container and array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Stop RAID container\nsudo mdadm --stop /dev/md/imsm0\n# Stop RAID array\nsudo mdadm --stop /dev/md/md0\n\n# Stop all arrays and containers\nsudo mdadm --stop --scan\n")),(0,r.kt)("h3",{id:"removes-the-raid-metadata"},"Removes the RAID metadata"),(0,r.kt)("p",null,"Removes the RAID metadata on each ",(0,r.kt)("strong",{parentName:"p"},"drive")," and resets the ",(0,r.kt)("strong",{parentName:"p"},"drive")," to normal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --zero-superblock /dev/sda\nsudo mdadm --zero-superblock /dev/sd[a-h]\n")),(0,r.kt)("h3",{id:"optional-remove-raid-configuration"},"[Optional]"," Remove RAID configuration"),(0,r.kt)("p",null,"Remove mount information to the array if exist. Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="/etc/fstab"',title:'"/etc/fstab"'},"sudo nano /etc/fstab\n")),(0,r.kt)("p",null,"Also, remove the array definition if exist, from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mdadm/mdadm.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="/etc/mdadm/mdadm.conf"',title:'"/etc/mdadm/mdadm.conf"'},"sudo nano /etc/mdadm/mdadm.conf\n")),(0,r.kt)("h2",{id:"manage-raid-array-with-mdadm"},"Manage RAID Array with mdadm"),(0,r.kt)("p",null,"Finding the RAID arrays,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /proc/mdstat\n\nPersonalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10] \nmd126 : active raid1 nvme0n1[1] nvme1n1[0]\n      3800741888 blocks super external:/md127/0 [2/2] [UU]\n      \nmd127 : inactive nvme0n1[1](S) nvme1n1[0](S)\n      10402 blocks super external:imsm\n       \nunused devices: <none>\n")),(0,r.kt)("p",null,"Querying for Information on RAID array,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --detail /dev/md0\nsudo mdadm --query /dev/md0\n")),(0,r.kt)("p",null,"Getting Information on individual physical Devices,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --query /dev/sda\nsudo mdadm --examine /dev/sda\n")),(0,r.kt)("p",null,"Stop RAID array,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm --stop /dev/md0\n# Stop all arrays\nsudo mdadm --stop --scan\n")),(0,r.kt)("p",null,"Starting an Array,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# This works if the array is defined in the configuration `/etc/mdadm/mdadm.conf` file.\nsudo mdadm --assemble --scan\nsudo mdadm --assemble /dev/md0\n# If the array is not persisted in `/etc/mdadm/mdadm.conf` file but keeping RAID metadata\nsudo mdadm --assemble /dev/md0 /dev/sda /dev/sdb\n")),(0,r.kt)("p",null,"Adding a Spare Device to an Array,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mdadm /dev/md0 --add /dev/sde\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ lsblk -f\nNAME        FSTYPE          FSVER  LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS\nloop0       squashfs        4.0                                                     0   100% /snap/core20/1974\nloop1       squashfs        4.0                                                     0   100% /snap/lxd/24322\nloop2       squashfs        4.0                                                     0   100% /snap/snapd/19457\nsda         isw_raid_member 1.3.00                                                           \nsdb         isw_raid_member 1.3.00                                                           \nsdc         isw_raid_member 1.3.00                                                           \nsdd         isw_raid_member 1.3.00                                                           \nsde         isw_raid_member 1.3.00                                                           \nsdf         isw_raid_member 1.3.00                                                           \nsdg         isw_raid_member 1.3.00                                                           \nsdh         isw_raid_member 1.3.00                                                           \nnvme0n1     isw_raid_member 1.3.00                                                           \n\u251c\u2500md126                                                                                      \n\u2502 \u251c\u2500md126p1 vfat            FAT32        292B-DB66                                 1G     1% /boot/efi\n\u2502 \u2514\u2500md126p2 ext4            1.0          0f58386c-334d-4877-8051-b855bae37fb0    3.3T     0% /\n\u2514\u2500md127                                                                                      \nnvme1n1     isw_raid_member 1.3.00                                                           \n\u251c\u2500md126                                                                                      \n\u2502 \u251c\u2500md126p1 vfat            FAT32        292B-DB66                                 1G     1% /boot/efi\n\u2502 \u2514\u2500md126p2 ext4            1.0          0f58386c-334d-4877-8051-b855bae37fb0    3.3T     0% /\n\u2514\u2500md127                         \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo fdisk -l /dev/sda\n")),(0,r.kt)("p",null,"Delete partition and data in drive,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dd if=/dev/zero of=/dev/sda  bs=512  count=1\n")))}p.isMDXComponent=!0}}]);