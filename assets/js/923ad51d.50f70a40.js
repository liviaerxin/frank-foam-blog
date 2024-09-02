"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8572],{81671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=r(74848),s=r(28453);const t={authors:["frank"],tags:["qemu","raspberry-pi","osx"],description:"QEMU emulate Raspberry Pi 3/4",keywords:["QEMU Raspberry Pi 3/4"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-23T00:00:00.000Z"),draft:!1,enableComments:!0},o="QEMU Emulate Raspberry Pi 3 and 4",d={id:"qemu-raspberry-pi",title:"QEMU Emulate Raspberry Pi 3 and 4",description:"QEMU emulate Raspberry Pi 3/4",source:"@site/../../docs/qemu-raspberry-pi.mdx",sourceDirName:".",slug:"/qemu-raspberry-pi",permalink:"/docs/qemu-raspberry-pi",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/qemu-raspberry-pi.mdx",tags:[{inline:!0,label:"qemu",permalink:"/docs/tags/qemu"},{inline:!0,label:"raspberry-pi",permalink:"/docs/tags/raspberry-pi"},{inline:!0,label:"osx",permalink:"/docs/tags/osx"}],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:172524916e4,frontMatter:{authors:["frank"],tags:["qemu","raspberry-pi","osx"],description:"QEMU emulate Raspberry Pi 3/4",keywords:["QEMU Raspberry Pi 3/4"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-23T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"QEMU Direct Linux Kernel Boot",permalink:"/docs/qemu-linux-kernel-boot"},next:{title:"Intel VROC RAID on Ubuntu",permalink:"/docs/raid-intel-vroc"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Raspberry Pi image",id:"raspberry-pi-image",level:2},{value:"Docker Ubuntu container",id:"docker-ubuntu-container",level:2},{value:"Extracting Kernel and device tree",id:"extracting-kernel-and-device-tree",level:2},{value:"Setting up default user",id:"setting-up-default-user",level:2},{value:"Running QEMU",id:"running-qemu",level:2},{value:"Emulate Raspberry Pi 3",id:"emulate-raspberry-pi-3",level:3},{value:"Emulate Raspberry Pi 4 with <code>virt</code>",id:"emulate-raspberry-pi-4-with-virt",level:3},{value:"For <code>SCSI hard disk</code>",id:"for-scsi-hard-disk",level:4},{value:"For <code>virtual disk</code> storage device",id:"for-virtual-disk-storage-device",level:4},{value:"For <code>NVMe</code> storage device",id:"for-nvme-storage-device",level:4},{value:"For <code>usb storage</code>",id:"for-usb-storage",level:4},{value:"Test Raspberry Pi VM",id:"test-raspberry-pi-vm",level:2},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"qemu-emulate-raspberry-pi-3-and-4",children:"QEMU Emulate Raspberry Pi 3 and 4"}),"\n",(0,i.jsxs)(n.p,{children:["In this blog, ",(0,i.jsx)(n.strong,{children:"QEMU"})," is employed to emulate ",(0,i.jsx)(n.strong,{children:"Raspberry Pi 3/4"})," in ",(0,i.jsx)(n.strong,{children:"mac M1"})," host(it's also supposed to work in ",(0,i.jsx)(n.strong,{children:"Windows/Linux"})," with a little tweak). I will demonstrate ",(0,i.jsx)(n.strong,{children:"two"})," different ways to emulate ",(0,i.jsx)(n.strong,{children:"Raspberry Pi 3"})," and ",(0,i.jsx)(n.strong,{children:"Raspberry Pi 4"})," in respect. These two ways are different by using different ",(0,i.jsx)(n.strong,{children:"QEMU machines"})," as you would like to use:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-machine raspi3b"}),": raspberry pi 3b machine to emulate ",(0,i.jsx)(n.strong,{children:"Raspberry Pi 3"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-machine virt"}),": general arm machine to emulate ",(0,i.jsx)(n.strong,{children:"Raspberry Pi 4"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In mac M1 with setting ",(0,i.jsx)(n.code,{children:"-machine virt"}),", I use the hardware acceleration by ",(0,i.jsx)(n.code,{children:"-accel hvf"}),". In Windows(x86_64), the hardware acceleration for ",(0,i.jsx)(n.code,{children:"aarch64"})," is not available, so removing the hardware acceleration will work as well in Windows."]})}),"\n",(0,i.jsxs)(n.p,{children:["For both of these two, we still need prepare some common steps before running ",(0,i.jsx)(n.strong,{children:"QEMU"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Extract the appropriate kernel, device tree or root filesystem"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This blog will emulate Raspberry Pi using QEMU in mac M1 host using the new image ",(0,i.jsx)(n.code,{children:"2023-05-03-raspios-bullseye-arm64-lite.img"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"user:pi"})," and ",(0,i.jsx)(n.code,{children:"password:raspberry"})," have been removed from this image. In order to log in, we have to write ",(0,i.jsx)(n.code,{children:"user"})," and ",(0,i.jsx)(n.code,{children:"password"})," to the image before booting. These steps can be skipped when booting previous images."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"be required in macOS"}),"\n",(0,i.jsx)(n.li,{children:"can be skipped in Linux"}),"\n",(0,i.jsxs)(n.li,{children:["can use ",(0,i.jsx)(n.code,{children:"wsl"})," as an alternative in Windows"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"QEMU"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"homebrew"})," install in macOS"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Raspberry Pi image"}),": ",(0,i.jsx)(n.code,{children:"2023-05-03-raspios-bullseye-arm64-lite.img"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since I am in mac M1, and the ",(0,i.jsx)(n.code,{children:"raspberry pi"})," image which contains a ",(0,i.jsx)(n.code,{children:"fat"})," filesystem as boot and a ",(0,i.jsx)(n.code,{children:"ext4"})," filesystem as OS, we need write some configuration into it. So I will use a ",(0,i.jsx)(n.strong,{children:"Docker Ubuntu"})," container to do the operation on the the filesystem. There some other tools to do the like of these operations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ext4fuse"})," is free and easy to install via ",(0,i.jsx)(n.code,{children:"homebrew"}),", but it has limit as read-only access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ExtFS"})," from ",(0,i.jsx)(n.code,{children:"Paragon"})," supports read-write access while you need pay for it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"virtual machine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Docker"})," in OSX make use of ",(0,i.jsx)(n.code,{children:"virtual machine"})," while it is quick and flexible to use."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"raspberry-pi-image",children:"Raspberry Pi image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~\nwget https://downloads.raspberrypi.org/raspios_arm64/images/raspios_arm64-2023-05-03/2023-05-03-raspios-bullseye-arm64-lite.img.xz\nxz -d 2023-05-03-raspios-bullseye-arm64-lite.img.xz\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-ubuntu-container",children:"Docker Ubuntu container"}),"\n",(0,i.jsxs)(n.p,{children:["Mount the ",(0,i.jsx)(n.strong,{children:"folder"})," including ",(0,i.jsx)(n.code,{children:"2023-05-03-raspios-bullseye-arm64-lite.img"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker run -it -d --privileged -v $PWD:/qemu --name ubuntu ubuntu\ndocekr exec -it ubuntu bash\n"})}),"\n",(0,i.jsx)(n.h2,{id:"extracting-kernel-and-device-tree",children:"Extracting Kernel and device tree"}),"\n",(0,i.jsx)(n.p,{children:"Operations all in Ubuntu container."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# fdisk -l 2023-05-03-raspios-bullseye-arm64-lite.img \nDisk 2023-05-03-raspios-bullseye-arm64-lite.img: 1.96 GiB, 2101346304 bytes, 4104192 sectors\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0x544c6228\n\nDevice                                      Boot  Start     End Sectors  Size Id Type\n2023-05-03-raspios-bullseye-arm64-lite.img1        8192  532479  524288  256M  c W95 FAT32 (LBA)\n2023-05-03-raspios-bullseye-arm64-lite.img2      532480 4104191 3571712  1.7G 83 Linux\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first partition is boot filesystem."}),"\n",(0,i.jsx)(n.li,{children:"The second partition is real root filesystem."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All the data we need is in the first partition, to do the operation is mounting it."}),"\n",(0,i.jsx)(n.p,{children:"The offset of the first partition: 8192 * 512 = 4194304,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# mount -o loop,offset=4194304 2023-05-03-raspios-bullseye-arm64-lite.img /mnt/rpi-boot/\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# ls -ls /mnt/rpi-boot/\ntotal 30244\n  20 -rwxr-xr-x 1 root root   18693 Apr  5 11:32 COPYING.linux\n   2 -rwxr-xr-x 1 root root    1594 Apr  5 11:32 LICENCE.broadcom\n  30 -rwxr-xr-x 1 root root   30390 Apr  5 11:32 bcm2710-rpi-2-b.dtb\n  32 -rwxr-xr-x 1 root root   32753 Apr  5 11:32 bcm2710-rpi-3-b-plus.dtb\n  32 -rwxr-xr-x 1 root root   32142 Apr  5 11:32 bcm2710-rpi-3-b.dtb\n  30 -rwxr-xr-x 1 root root   30285 Apr  5 11:32 bcm2710-rpi-cm3.dtb\n  32 -rwxr-xr-x 1 root root   31318 Apr  5 11:32 bcm2710-rpi-zero-2-w.dtb\n  32 -rwxr-xr-x 1 root root   31318 Apr  5 11:32 bcm2710-rpi-zero-2.dtb\n  52 -rwxr-xr-x 1 root root   52593 Apr  5 11:32 bcm2711-rpi-4-b.dtb\n  52 -rwxr-xr-x 1 root root   52682 Apr  5 11:32 bcm2711-rpi-400.dtb\n  38 -rwxr-xr-x 1 root root   38182 Apr  5 11:32 bcm2711-rpi-cm4-io.dtb\n  52 -rwxr-xr-x 1 root root   53202 Apr  5 11:32 bcm2711-rpi-cm4.dtb\n  50 -rwxr-xr-x 1 root root   50504 Apr  5 11:32 bcm2711-rpi-cm4s.dtb\n  52 -rwxr-xr-x 1 root root   52476 Apr  5 11:32 bootcode.bin\n   2 -rwxr-xr-x 1 root root     154 May  3 03:11 cmdline.txt\n   4 -rwxr-xr-x 1 root root    2109 May  3 02:53 config.txt\n  ...\n   2 -rwxr-xr-x 1 root root     145 May  3 03:11 issue.txt\n8028 -rwxr-xr-x 1 root root 8219600 Apr  5 11:32 kernel8.img\n  ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To run QEMU we will need the ",(0,i.jsx)(n.strong,{children:"kernel"})," and ",(0,i.jsx)(n.strong,{children:"device tree"}),", so let\u2019s copy them out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# cp /mnt/rpi-boot/kernel8.img .\nroot@f36a3251391d:/qemu# cp /mnt/rpi-boot/bcm2710-rpi-3-b.dtb .\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-default-user",children:"Setting up default user"}),"\n",(0,i.jsx)(n.p,{children:"Operations all in docker container."}),"\n",(0,i.jsxs)(n.p,{children:["Now in order to set up user and enable ssh in default, we need write files into ",(0,i.jsx)(n.code,{children:"/userconf"})," and ",(0,i.jsx)(n.code,{children:"/ssh"})," under the boot filesystem mounted as ",(0,i.jsx)(n.code,{children:"/mnt/rpi-boot/"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Set up a default ",(0,i.jsx)(n.code,{children:"user:pi"})," and ",(0,i.jsx)(n.code,{children:"password:raspberry"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Hash password ",(0,i.jsx)(n.code,{children:"raspberry"})," using ",(0,i.jsx)(n.code,{children:"openssl"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# openssl passwd\nPassword: \nVerifying - Password: \n$1$d...AvcL$wqfUqTIauUP1TVJ/uU1td0\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# echo 'pi:$1$d...AvcL$wqfUqTIauUP1TVJ/uU1td0' | tee /mnt/rpi-boot/userconf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.code,{children:"ssh"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# touch /mnt/rpi-boot/ssh\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"root@f36a3251391d:/qemu# umount /mnt/rpi-boot\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-qemu",children:"Running QEMU"}),"\n",(0,i.jsx)(n.h3,{id:"emulate-raspberry-pi-3",children:"Emulate Raspberry Pi 3"}),"\n",(0,i.jsxs)(n.p,{children:["Now switch back to the host macOS to run ",(0,i.jsx)(n.code,{children:"QEMU"}),","]}),"\n",(0,i.jsx)(n.p,{children:"Resize the image to the next power of 2 size,"}),"\n",(0,i.jsx)(n.p,{children:"The original size,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u276f stat -f%z 2023-05-03-raspios-bullseye-arm64-lite.img\n2101346304\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To resize to ",(0,i.jsx)(n.code,{children:"4GB"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"qemu-img resize ./2023-05-03-raspios-bullseye-arm64-lite.img 4G\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'qemu-system-aarch64 \\\n    -machine raspi3b \\\n    -cpu cortex-a72 \\\n    -nographic \\\n    -m 1G \\\n    -smp 4 \\\n    -dtb bcm2710-rpi-3-b.dtb \\\n    -kernel kernel8.img \\\n    -append "rw earlyprintk loglevel=8 console=ttyAMA0,115200 dwc_otg.lpm_enable=0 root=/dev/mmcblk0p2 rootdelay=1" \\\n    -netdev user,id=net0,hostfwd=tcp::2222-:22 \\\n    -device usb-net,netdev=net0 \\\n    -sd 2023-05-03-raspios-bullseye-arm64-lite.img\n'})}),"\n",(0,i.jsx)(n.p,{children:"Options in detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-machine raspi3b"}),": use raspberry pi 3 machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-append"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"console=ttyAMA0"}),": output the ",(0,i.jsx)(n.strong,{children:"VM"})," std to ",(0,i.jsx)(n.strong,{children:"QEMU"})," console."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"root=/dev/mmcblk0p2"}),": mount ",(0,i.jsx)(n.strong,{children:"real root filesystem"})," to ",(0,i.jsx)(n.code,{children:"/dev/mmcblk0p2"}),"(the second partition of ",(0,i.jsx)(n.code,{children:"mmcblk0"}),") as we ",(0,i.jsx)(n.code,{children:"-sd xx"})," will be mounted to ",(0,i.jsx)(n.code,{children:"/dev/mmcblk0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-netdev user,id=net0,hostfwd=tcp::2222-:22"}),": network mapping host port ",(0,i.jsx)(n.code,{children:"2222"})," to the ",(0,i.jsx)(n.strong,{children:"VM"})," ",(0,i.jsx)(n.code,{children:"22"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-device usb-net,netdev=net0"}),": expose ",(0,i.jsx)(n.code,{children:"netdev=net0"})," as ",(0,i.jsx)(n.code,{children:"usb-net"})," in the raspberry pi 3 machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-sd 2023-05-03-raspios-bullseye-arm64-lite.img"}),": ",(0,i.jsx)(n.code,{children:"sd"})," drive is available in the raspberry pi 3 machine."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"emulate-raspberry-pi-4-with-virt",children:["Emulate Raspberry Pi 4 with ",(0,i.jsx)(n.code,{children:"virt"})]}),"\n",(0,i.jsxs)(n.p,{children:["We will use generic virtual machine ",(0,i.jsx)(n.code,{children:"virt"})," to act as ",(0,i.jsx)(n.code,{children:"raspi4"}),", since there is no ",(0,i.jsx)(n.code,{children:"raspi4"})," machine defined in QEMU official machines. However you can still use ",(0,i.jsx)(n.code,{children:"raspi3"})," to act as ",(0,i.jsx)(n.code,{children:"raspi4"})," as they are same!"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hardware Acceleration"})," can be enable in ",(0,i.jsx)(n.code,{children:"virt"})," machine by using ",(0,i.jsx)(n.code,{children:"-accel hvf"})," option in my ",(0,i.jsx)(n.strong,{children:"mac M1"})," host as it's ",(0,i.jsx)(n.strong,{children:"arm-based"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["So ",(0,i.jsx)(n.code,{children:"virt"})," will bring high performance and increase efficiency!"]}),"\n",(0,i.jsx)(n.p,{children:"After tuning options and searching from many resources, the operational setting for QEMU to emulate is,"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"ubuntu-22.04.3-preinstalled-server-arm64+raspi.img"}),", of which the default user is ",(0,i.jsx)(n.code,{children:"ubuntu"})," and password is ",(0,i.jsx)(n.code,{children:"ubuntu"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'kernel="$PWD/ubuntu-22.04.3-preinstalled-server-arm64+raspi-boot/vmlinuz"\ninitrd="$PWD/ubuntu-22.04.3-preinstalled-server-arm64+raspi-boot/initrd.img"\nimg="$PWD/ubuntu-22.04.3-preinstalled-server-arm64+raspi.img"\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"for-scsi-hard-disk",children:["For ",(0,i.jsx)(n.code,{children:"SCSI hard disk"})]}),"\n",(0,i.jsxs)(n.p,{children:["This storage device file will be named ",(0,i.jsx)(n.code,{children:"/dev/sdX"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'qemu-system-aarch64 \\\n    -machine virt \\\n    -accel hvf \\\n    -cpu host \\\n    -smp 4 \\\n    -m 4G \\\n    -nographic \\\n    -kernel $kernel \\\n    -initrd $initrd \\\n    -append "earlyprintk loglevel=8 root=/dev/sda2 rootfstype=ext4 rw console=ttyAMA0" \\\n    -drive file=$img,format=raw,if=none,id=drive0 \\\n    -device virtio-scsi-pci,id=scsi \\\n    -device scsi-hd,drive=drive0,bus=scsi.0 \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n'})}),"\n",(0,i.jsx)(n.p,{children:"Options in detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-accel hvf"}),": ",(0,i.jsx)(n.strong,{children:"hardware acceleration"})," in mac M1. Don't use in ",(0,i.jsx)(n.strong,{children:"x86_64"})," host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-cpu host"}),": change to ",(0,i.jsx)(n.code,{children:"-cpu cortex-a72"})," when no ",(0,i.jsx)(n.strong,{children:"hardware acceleration"})," available such as in ",(0,i.jsx)(n.strong,{children:"x86_64"})," host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-append"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"root=/dev/sda2"}),": the second partition of the ",(0,i.jsx)(n.code,{children:"ubuntu-22.04.3-preinstalled-server-arm64+raspi.img"})," disk image hold the real root filesystem."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-initrd $initrd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the boot loader works using configuration like ",(0,i.jsx)(n.code,{children:"vmlinuz initrd=initrd.img root=/dev/sda2"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"for-virtual-disk-storage-device",children:["For ",(0,i.jsx)(n.code,{children:"virtual disk"})," storage device"]}),"\n",(0,i.jsxs)(n.p,{children:["This storage device file will be named ",(0,i.jsx)(n.code,{children:"/dev/vdX"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'qemu-system-aarch64 \\\n    -machine virt \\\n    -accel hvf \\\n    -cpu host \\\n    -smp 4 \\\n    -m 4G \\\n    -nographic \\\n    -kernel $kernel \\\n    -initrd $initrd \\\n    -append "earlyprintk loglevel=8 root=/dev/vda2 rootfstype=ext4 rw console=ttyAMA0" \\\n    -drive file=$img,format=raw,if=none,id=drive0 \\\n    -device virtio-blk-pci,drive=drive0 \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"for-nvme-storage-device",children:["For ",(0,i.jsx)(n.code,{children:"NVMe"})," storage device"]}),"\n",(0,i.jsxs)(n.p,{children:["This storage device file will be named ",(0,i.jsx)(n.code,{children:"/dev/nvmeX"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'qemu-system-aarch64 \\\n    -machine virt \\\n    -accel hvf \\\n    -cpu host \\\n    -smp 4 \\\n    -m 4G \\\n    -nographic \\\n    -kernel $kernel \\\n    -append "earlyprintk loglevel=8 root=/dev/nvme0n1p2 rootfstype=ext4 rw console=ttyAMA0" \\\n    -drive file=$img,format=raw,if=none,id=drive0 \\\n    -device nvme,drive=drive0,serial=deadbeaf1 \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n'})}),"\n",(0,i.jsx)(n.p,{children:"Options in detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["no ",(0,i.jsx)(n.code,{children:"-initrd $initrd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the boot loader works using configuration like ",(0,i.jsx)(n.code,{children:"vmlinuz root=/dev/nvme0n1p2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["we directly mount the real filesystem ",(0,i.jsx)(n.code,{children:"/dev/nvme0n1p2"}),", skipping to mount the ",(0,i.jsx)(n.strong,{children:"initial RAM disk"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["I test other type storage device must binding ",(0,i.jsx)(n.code,{children:"-initrd $initrd"})," while there is no need for ",(0,i.jsx)(n.code,{children:"NVME"}),". In my assumption, those ",(0,i.jsx)(n.code,{children:"storage devices"})," need to be configured in the ",(0,i.jsx)(n.code,{children:"initramfs"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"for-usb-storage",children:["For ",(0,i.jsx)(n.code,{children:"usb storage"})]}),"\n",(0,i.jsxs)(n.p,{children:["This storage device file will be named ",(0,i.jsx)(n.code,{children:"/dev/sdX"}),","]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'qemu-system-aarch64 \\\n    -machine virt \\\n    -cpu cortex-a57 \\\n    -smp 4 \\\n    -m 4G \\\n    -no-reboot \\\n    -nographic \\\n    -kernel $kernel \\\n    -initrd $initrd \\\n    -append "earlyprintk loglevel=8 root=/dev/sda2 rootfstype=ext4 console=ttyAMA0 raid=noautodetect" \\\n    -device usb-ehci \\\n    -device usb-storage,drive=disk0 \\\n    -drive file=$img,format=raw,if=none,id=disk0 \\\n    -device virtio-net-pci,netdev=mynet \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22\n'})}),"\n",(0,i.jsx)(n.p,{children:"Options in detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-device usb-ehci"}),": usb bus -> PCI bus"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-device usb-storage"}),": usb storage device -> usb bus"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-raspberry-pi-vm",children:"Test Raspberry Pi VM"}),"\n",(0,i.jsxs)(n.p,{children:["Log into the ",(0,i.jsx)(n.strong,{children:"Raspberry Pi"})," via ",(0,i.jsx)(n.code,{children:"ssh"})," from the macOS host,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u276f ssh -p 2222 pi@localhost\nThe authenticity of host '[localhost]:2222 ([127.0.0.1]:2222)' can't be established.\nED25519 key fingerprint is SHA256:6igL6iaigBCszv8m6nyNl+tsB2siV/tL+TRQANC6nBw.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[localhost]:2222' (ED25519) to the list of known hosts.\npi@localhost's password: \nLinux raspberrypi 6.1.21-v8+ #1642 SMP PREEMPT Mon Apr  3 17:24:16 BST 2023 aarch64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nLast login: Fri Sep 22 16:30:58 2023\n\nSSH is enabled and the default password for the 'pi' user has not been changed.\nThis is a security risk - please login as the 'pi' user and type 'passwd' to set a new password.\n\npi@raspberrypi:~ $ \n"})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://interrupt.memfault.com/blog/emulating-raspberry-pi-in-qemu",children:"Emulating a Raspberry Pi in QEMU | InterruptEmulating a Raspberry Pi in QEMU"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blogs.oracle.com/linux/post/how-to-emulate-block-devices-with-qemu",children:"How to emulate block devices with QEMU"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://u-boot.readthedocs.io/en/latest/board/emulation/blkdev.html",children:"Emulation of block devices \u2014 Das U-Boot unknown version documentation"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);