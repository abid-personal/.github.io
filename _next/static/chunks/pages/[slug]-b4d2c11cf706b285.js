(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{9618:function(e,t,r){var n={"./ListLayout":951,"./ListLayout.tsx":951,"./PostLayout":5104,"./PostLayout.tsx":5104};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},4008:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return r(5084)}])},5941:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){var t=e.children;return(0,n.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},1476:function(e,t,r){"use strict";r.d(t,{TQ:function(){return l},$t:function(){return d},Uy:function(){return u}});var n=r(5893),a=r(9008),i=r(1163),s=r(7059),o=r.n(s),c=function(e){var t=e.title,r=e.description,s=e.ogType,c=e.ogImage,l=(e.twImage,(0,i.useRouter)());return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(l.asPath)}),(0,n.jsx)("meta",{property:"og:type",content:s}),(0,n.jsx)("meta",{property:"og:site_name",content:o().title}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:title",content:t}),Array.isArray(c)?c.map((function(e){var t=e.url;return(0,n.jsx)("meta",{property:"og:image",content:t},t)})):(0,n.jsx)("meta",{property:"og:image",content:c},c)]})},l=function(e){var t=e.title,r=e.description,a=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,n.jsx)(c,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,s=o().siteUrl+o().socialBanner,l=o().siteUrl+o().socialBanner,d=(0,i.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{title:t,description:r,ogType:"website",ogImage:s,twImage:l}),(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(o().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,s=e.summary,l=e.date,d=e.lastmod,u=e.url,x=e.images,m=void 0===x?[]:x,p=(0,i.useRouter)(),h=new Date(l).toISOString(),f=new Date(d||l).toISOString(),g=(0===m.length?[o().socialBanner]:"string"===typeof m?[m]:m).map((function(e){return{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(e)}})),y={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:g,datePublished:h,dateModified:f,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:o().author},publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:s},j=g[0].url;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{title:r,description:s,ogType:"article",ogImage:g,twImage:j}),(0,n.jsxs)(a.default,{children:[l&&(0,n.jsx)("meta",{property:"article:published_time",content:h}),d&&(0,n.jsx)("meta",{property:"article:modified_time",content:f}),(0,n.jsx)("link",{rel:"canonical",href:"".concat(o().siteUrl).concat(p.asPath)}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(y,null,2)}})]})]})}},8167:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(1664),i=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")},s=function(e){var t=e.text;return(0,n.jsx)(a.default,{href:"/tags/".concat(i(t)),children:(0,n.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},951:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),a=r(5741),i=r(8167);function s(e){var t=e.totalPages,r=e.currentPage,i=r-1>0,s=r+1<=t;return(0,n.jsx)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.jsxs)("nav",{className:"flex justify-between",children:[!i&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.jsx)(a.Z,{href:r-1===1?"/archive/":"/archive/".concat(r-1),children:(0,n.jsx)("button",{children:"Previous"})}),(0,n.jsxs)("span",{children:[r," of ",t]}),!s&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!s,children:"Next"}),s&&(0,n.jsx)(a.Z,{href:"/archive/".concat(r+1),children:(0,n.jsx)("button",{children:"Next"})})]})})}var o=r(2497);function c(e){var t=e.posts,r=e.title,c=e.initialDisplayPosts,l=void 0===c?[]:c,d=e.pagination,u=l.length>0?l:t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r})}),(0,n.jsxs)("ul",{children:[!t.length&&"No posts found.",u.map((function(e){var t=e.slug,r=e.date,s=e.title,c=e.summary,l=e.tags;return(0,n.jsx)("li",{className:"py-2",children:(0,n.jsxs)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:r,children:(0,o.Z)(r)})})]}),(0,n.jsxs)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.jsx)(a.Z,{href:"/".concat(t),className:"text-gray-900 dark:text-gray-100",children:s})}),(0,n.jsx)("div",{className:"flex flex-wrap",children:l.map((function(e){return(0,n.jsx)(i.Z,{text:e},e)}))})]}),(0,n.jsx)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:c})]})]})},t)}))]})]}),d&&d.totalPages>1&&(0,n.jsx)(s,{currentPage:d.currentPage,totalPages:d.totalPages})]})}},5104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),a=r(5741),i=r(5941),s=r(3653),o=r(1476),c=r(8167),l=r(7059),d=r.n(l);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var m={weekday:"long",year:"numeric",month:"long",day:"numeric"};function p(e){var t=e.frontMatter,r=e.authorDetails,l=e.next,u=e.prev,p=e.children,h=t.slug,f=(t.fileName,t.date),g=t.title,y=t.tags;return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Uy,x({url:"".concat(d().siteUrl,"/blog/").concat(h),authorDetails:r},t)),(0,n.jsx)("article",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{className:"pt-6 xl:pb-6",children:(0,n.jsx)("div",{className:"space-y-1 text-center",children:(0,n.jsx)(i.Z,{children:g})})}),(0,n.jsxs)("div",{className:"pt-10 pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.jsx)("div",{className:"text-xl prose dark:prose-dark max-w-none",children:p})}),(0,n.jsxs)("div",{className:"text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2",children:[(0,n.jsx)("dl",{className:"py-4 space-y-10",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,n.jsx)("dd",{className:"text-s font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:f,children:new Date(f).toLocaleDateString(d().locale,m)})})]})}),y&&(0,n.jsxs)("div",{className:"py-4",children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.jsx)("div",{className:"flex flex-wrap",children:y.map((function(e){return(0,n.jsx)(c.Z,{text:e},e)}))})]}),(l||u)&&(0,n.jsxs)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8",children:[u&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.jsx)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.jsx)(a.Z,{href:"/".concat(u.slug),children:u.title})})]}),l&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.jsx)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.jsx)(a.Z,{href:"/".concat(l.slug),children:l.title})})]})]}),(0,n.jsx)("div",{className:"py-4",children:(0,n.jsx)(a.Z,{href:"/archive",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the archive"})})]})]})]})})]})}},2497:function(e,t,r){"use strict";var n=r(7059),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},5084:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return w}});var n=r(5893),a=r(5941),i=r(7294),s=r(3194),o=r(5675);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e){var t=e.src;e.width,e.quality;return t},u=function(e){var t=l({},e);return(0,n.jsx)(o.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({unoptimized:!0,loader:d},t))},x=r(5741),m=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,s=void 0===i?1:i,o=e.toHeading,c=void 0===o?6:o,l=e.asDisclosure,d=void 0!==l&&l,u=e.exclude,x=void 0===u?"":u,m=Array.isArray(x)?new RegExp("^("+x.join("|")+")$","i"):new RegExp("^("+x+")$","i"),p=t.filter((function(e){return e.depth>=s&&e.depth<=c&&!m.test(e.value)})),h=(0,n.jsx)("ul",{children:p.map((function(e){return(0,n.jsx)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.jsx)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.jsx)(n.Fragment,{children:d?(0,n.jsxs)("details",{open:!0,children:[(0,n.jsx)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.jsx)("div",{className:"ml-6",children:h})]}):h})},p=function(e){var t=e.children,r=(0,i.useRef)(null),a=(0,i.useState)(!1),s=a[0],o=a[1],c=(0,i.useState)(!1),l=c[0],d=c[1];return(0,n.jsxs)("div",{ref:r,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1),d(!1)},className:"relative",children:[s&&(0,n.jsx)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(l?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(r.current.innerText),setTimeout((function(){d(!1)}),2e3)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:l?"text-green-400":"text-gray-300",children:l?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.jsx)("pre",{children:t})]})},h=r(5665);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var j={Image:u,TOCInline:m,a:x.Z,pre:p,wrapper:function(e){var t=e.layout,a=y(e,["layout"]),i=r(9618)("./".concat(t)).default;return(0,n.jsx)(i,g({},a))},ThemeSwitch:h.Z},v=function(e){var t=e.layout,r=e.mdxSource,a=y(e,["layout","mdxSource"]),o=(0,i.useMemo)((function(){return(0,s.getMDXComponent)(r)}),[r]);return(0,n.jsx)(o,g({layout:t,components:j},a))},b=!0;function w(e){var t=e.post,r=e.authorDetails,i=e.prev,s=e.next,o=t.mdxSource,c=t.toc,l=t.frontMatter;return(0,n.jsx)(n.Fragment,{children:"draft"in l&&!0!==l.draft?(0,n.jsx)(v,{layout:l.layout||"PostLayout",toc:c,mdxSource:o,frontMatter:l,authorDetails:r,prev:i,next:s}):(0,n.jsx)("div",{className:"mt-24 text-center",children:(0,n.jsxs)(a.Z,{children:["Under Construction"," ",(0,n.jsx)("span",{role:"img","aria-label":"roadwork sign",children:"\ud83d\udea7"})]})})})}}},function(e){e.O(0,[107,774,888,179],(function(){return t=4008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);