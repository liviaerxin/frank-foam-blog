"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{47713:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(21312),i=a(39022),n=a(74848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(i.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,n.jsx)(i.A,{permalink:r,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(7131),i=a(89147),n=a(74848);function r(e){let{items:t,component:a=i.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.i,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},84189:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(21312),i=a(28774),n=a(74848);function r(){return(0,n.jsx)("b",{children:(0,n.jsx)(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function l(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(i.A,{className:"button button--secondary","aria-label":(0,s.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(r,{})})}},89147:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(7131),i=a(84640),n=a(13955),r=a(95293),l=a(92303),o=a(74848);const d=a(26582);function c(e){const{metadata:t,isBlogPostPage:a}=(0,s.e)(),{frontMatter:c,title:g}=((0,l.A)(),t),{enableComments:m}=c,{colorMode:b}=(0,r.G)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{...e}),m&&a&&(0,o.jsx)(n.A,{repo:`${d.GITHUB_USER}/${d.GITHUB_REPOSITORY}`,repoId:"R_kgDOJotYAg",category:"General",categoryId:"DIC_kwDOJotYAs4CXD_G",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:b,lang:"en",loading:"lazy"})]})}},91843:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var s=a(34164),i=a(28774),n=a(21312);const r={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",navbarHideable:"navbarHideable_AITv",navbarHidden:"navbarHidden_L3EK"};var l=a(61182),o=a(74848);function d(e){let{sidebar:t}=e;const a=!0,{navbarRef:d,isNavbarVisible:c}=(0,l.S)(a);return(0,o.jsx)("aside",{className:"col col--3",children:(0,o.jsxs)("nav",{ref:d,className:(0,s.A)(r.sidebar,[r.navbarHideable,!c&&r.navbarHidden],"thin-scrollbar"),"aria-label":(0,n.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,o.jsx)("div",{className:(0,s.A)(r.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,o.jsx)("ul",{className:(0,s.A)(r.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,o.jsx)("li",{className:r.sidebarItem,children:(0,o.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:r.sidebarItemLink,activeClassName:r.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}},84549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(96540);var s=a(34164),i=a(21312),n=a(53465),r=a(61213),l=a(17559),o=a(28774),d=a(49328),c=a(47713),g=a(41463),m=a(33892),b=a(74848);function p(e){const t=function(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=p(t);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.be,{title:a}),(0,b.jsx)(g.A,{tag:"blog_tags_posts"})]})}function u(e){let{tag:t,items:a,sidebar:s,listMetadata:n}=e;const r=p(t);return s={title:"All posts with tags",items:a.map((function(e){return{title:e.content.metadata.title,permalink:e.content.metadata.permalink}}))},(0,b.jsxs)(d.A,{sidebar:s,children:[(0,b.jsxs)("header",{className:"margin-bottom--xl",children:[(0,b.jsx)("h1",{children:r}),(0,b.jsx)(o.A,{href:t.allTagsPath,children:(0,b.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,b.jsx)(m.A,{items:a}),(0,b.jsx)(c.A,{metadata:n})]})}function x(e){return(0,b.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,b.jsx)(h,{...e}),(0,b.jsx)(u,{...e})]})}},14860:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),i=a(21312),n=a(56133);const r={tags:"tags_ysAR",tag:"tag_DyE2"};var l=a(74848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(n.A,{label:t,permalink:a})},a)}))})]})}},26582:e=>{e.exports=JSON.parse('{"GITHUB_USER":"liviaerxin","STACKOVERFLOW_USER":"4331167","LINKEDIN_USER":"siyao-chen-704770159","GITHUB_REPOSITORY":"liviaerxin.github.io"}')}}]);