"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={tags:["network","network/diagnosis","netstat","route","traceroute"]},i="Network Diagnosis",l={permalink:"/blog/network-diagnosis",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/network-diagnosis.md",source:"@site/../../blog/network-diagnosis.md",title:"Network Diagnosis",description:"Understanding Routing Table Entry | Baeldung on Computer Science",date:"2023-08-10T16:52:56.000Z",formattedDate:"August 10, 2023",tags:[{label:"network",permalink:"/blog/tags/network"},{label:"network/diagnosis",permalink:"/blog/tags/network-diagnosis"},{label:"netstat",permalink:"/blog/tags/netstat"},{label:"route",permalink:"/blog/tags/route"},{label:"traceroute",permalink:"/blog/tags/traceroute"}],readingTime:2.44,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["network","network/diagnosis","netstat","route","traceroute"]},prevItem:{title:"Your markdown including PlantUML code block",permalink:"/blog/markdown-plantuml"},nextItem:{title:"OpenCV tips",permalink:"/blog/opencv-tips"}},s={authorsImageUrls:[]},u=[{value:"Show IP Address",id:"show-ip-address",level:2},{value:"Show Routing Table",id:"show-routing-table",level:2},{value:"Find Gateway Used for Routing",id:"find-gateway-used-for-routing",level:2},{value:"Show Routes across Network",id:"show-routes-across-network",level:2},{value:"Ping Through Specific Interface",id:"ping-through-specific-interface",level:2},{value:"Find Out Address Used by Which Process",id:"find-out-address-used-by-which-process",level:2},{value:"Add a Route",id:"add-a-route",level:2},{value:"FireWall Rule",id:"firewall-rule",level:2},{value:"Get Geolocation of IP Address",id:"get-geolocation-of-ip-address",level:2},{value:"Packet Analyzer",id:"packet-analyzer",level:2},{value:"USB Virtual Ethernet",id:"usb-virtual-ethernet",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/cs/routing-table-entry"},"Understanding Routing Table Entry | Baeldung on Computer Science")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the packs go through the gateway of interface. the same interface can have multiple gateways and different interfaces can have the same gateway.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/ssh-enabled-only-if-connected-through-microusb/192708/12"},"route diagnosis")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/"},"3 Ways to Find Which Linux Process Listening on a Port")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E18752_01/html/816-4554/ipconfig-142.html"},"Monitoring Network Status With the netstat Command - System Administration Guide: IP Services")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"System Administration Guide")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.xmodulo.com/geographic-location-ip-address-command-line.html"},"How to look up the geographic location of an IP address from the command line")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"#geolocation-of-ip")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://danielmiessler.com/study/tcpdump/"},"A tcpdump Tutorial with Examples \u2014 50 Ways to Isolate Traffic - Daniel Miesslersearchmailmailmail")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://resource.nvidia.com/cheatsheets/linux-networking-cheatsheet-tcpdump"},"TCPDump cheatsheet")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.com/article/18/10/introduction-tcpdump"},"An introduction to using tcpdump at the Linux command line | Opensource.com")),(0,r.kt)("p",null,"Knowing ",(0,r.kt)("inlineCode",{parentName:"p"},"simultaneously")," these three things for failing and working circumstances would be quite useful."),(0,r.kt)("h2",{id:"show-ip-address"},"Show IP Address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ifconfig\n")),(0,r.kt)("h2",{id:"show-routing-table"},"Show Routing Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nroute\n# osx\nnetstat -rn\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-r")," flag means to show routes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," flag means to not resolve IPs to hostnames."),(0,r.kt)("h2",{id:"find-gateway-used-for-routing"},"Find Gateway Used for Routing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nip route get 8.8.8.8\n# osx\nroute get 8.8.8.8\n")),(0,r.kt)("h2",{id:"show-routes-across-network"},"Show Routes across Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"traceroute\n# en0 interface\ntraceroute -i en0\n")),(0,r.kt)("h2",{id:"ping-through-specific-interface"},"Ping Through Specific Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nping -I en0 sslvpn.astri.org\n# osx\nping -b en0 sslvpn.astri.org\n")),(0,r.kt)("h2",{id:"find-out-address-used-by-which-process"},"Find Out Address Used by Which Process"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# osx\nnetstat -avn -p tcp\n")),(0,r.kt)("h2",{id:"add-a-route"},"Add a Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# osx\nroute -n add 10.0.0.0/24 10.0.0.1\n# linux\nroute -n add -net 10.0.0.0/24 gw 10.0.0.1\n")),(0,r.kt)("h2",{id:"firewall-rule"},"FireWall Rule"),(0,r.kt)("p",null,"osx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# show all information/stats\nsudo pfctl -sa\n# show rules\nsudo pfctl -sr\n# sanity check edited configuration file\nsudo pfctl -v -n -f /etc/pf.conf\n# load pf with new rules\nsudo pfctl -f /etc/pf.conf\n# enable pf\nsudo pfctl -e\n# disable pf\nsudo pfctl -d\n# add information on the fly\nsudo pfctl -t localsub -T add 127.0.0.0/24\n# flush added rules later\nsudo pfctl -Fa -f /etc/pf.conf\n\nsudo pfctl -si\nsudo pfctl -q\n")),(0,r.kt)("h2",{id:"get-geolocation-of-ip-address"},"Get Geolocation of IP Address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl ipinfo.io/103.216.223.161\n")),(0,r.kt)("h2",{id:"packet-analyzer"},"Packet Analyzer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# list which interfaces are available for capture\ntcpdump --list-interfaces\n# capture all packets in any interface\nsudo tcpdump --interface any\n# limit the number of packets captured then stop `-c number`\nsudo tcpdump -i any -c 5\n# disable name resolution with using `-n` and port resolution with `-nn` \nsudo tcpdump -i any -c5 -nn\n# filter packets by protocol, only capture `ICMP` packets\nsudo tcpdump -i any -c5 icmp\n# capture packets related with host `8.8.8.8`\nsudo tcpdump -i any -c5 -nn host 8.8.8.8\n# capture packets related with port `80`\nsudo tcpdump -i any -c5 -nn port 80\n# capture packets with source address 192.168.0.1\nsudo tcpdump -i any -c5 -nn src 192.168.0.1\n# capture packets with destination address 8.8.8.8\nsudo tcpdump -i any -c5 -nn dst 8.8.8.8\n")),(0,r.kt)("h2",{id:"usb-virtual-ethernet"},"USB Virtual Ethernet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/provide-internet-through-micro-usb-while-doing-ssh/111326/14"},"An explanation on the USB virtual ethernet")))}d.isMDXComponent=!0}}]);