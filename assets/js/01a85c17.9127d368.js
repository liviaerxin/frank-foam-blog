"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4013],{2599:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),r=a(6010),n=a(2929),s=a(7524),i=a(212),c=a(9960),m=a(3102);function o(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(m.Zo,{component:o,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(i.Z,{sidebar:t}):null}function u(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(6010),n=a(5999);const s=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1944),c=a(5281),m=a(2599),o=a(3008);const b={tag:"tag_Nnez"};function d(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:b.tag},l.createElement(o.Z,e))))),l.createElement("hr",null))}function u(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(d,{key:e.letter,letterEntry:e}))))}var g=a(197);function E(e){let{tags:t,sidebar:a}=e;const n=s();return l.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(i.d,{title:n}),l.createElement(g.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("h1",null,n),l.createElement(u,{tags:t})))}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(6010),n=a(9960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},212:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),r=a(6010),n=a(9960),s=a(5999);const i={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",navbarHideable:"navbarHideable_AITv",navbarHidden:"navbarHidden_L3EK"};var c=a(9445);function m(e){let{sidebar:t}=e;const{navbarRef:a,isNavbarVisible:m}=(0,c.c)(true);return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{ref:a,className:(0,r.Z)(i.sidebar,[i.navbarHideable,!m&&i.navbarHidden],"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}}}]);