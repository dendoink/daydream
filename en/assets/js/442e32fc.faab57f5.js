"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[9154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||k[u]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5f02\u6b65\u7684 console",open:!0},l=void 0,i={unversionedId:"chrome-tricks/Console/asyncConsole",id:"chrome-tricks/Console/asyncConsole",title:"\u5f02\u6b65\u7684 console",description:"\u4e0e\u6d4f\u89c8\u5668\u6709\u5173\u7684 API \u5927\u90e8\u5206\u90fd\u57fa\u4e8e Promise , \u4f46\u5728 Console \u9762\u677f\u7528\u8d77\u6765\u5f88\u4e0d\u65b9\u4fbf\u3002\u6709\u6ca1\u6709\u4f7f\u7528\u7684\u6280\u5de7\u5462\uff1f",source:"@site/docs/chrome-tricks/02-Console/03-asyncConsole.md",sourceDirName:"chrome-tricks/02-Console",slug:"/chrome-tricks/Console/asyncConsole",permalink:"/en/docs/chrome-tricks/Console/asyncConsole",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5f02\u6b65\u7684 console",open:!0},sidebar:"tutorialSidebar",previous:{title:'console.log \u7684 "bug" ?',permalink:"/en/docs/chrome-tricks/Console/bugInConsole"},next:{title:"Ninja console.log",permalink:"/en/docs/chrome-tricks/Console/ninjaLog"}},p={},c=[{value:"1.\u4f8b\u5b50",id:"1\u4f8b\u5b50",level:3},{value:"2.<code>Storage</code> \u7cfb\u7edf\u7684 <strong>\u5360\u7528\u6570</strong> \u548c <strong>\u7a7a\u95f2\u6570</strong>",id:"2storage-\u7cfb\u7edf\u7684-\u5360\u7528\u6570-\u548c-\u7a7a\u95f2\u6570",level:3},{value:"3.\u8bbe\u5907\u7684 <strong>\u7535\u6c60\u4fe1\u606f</strong>",id:"3\u8bbe\u5907\u7684-\u7535\u6c60\u4fe1\u606f",level:3},{value:"4.\u5a92\u4f53\u80fd\u529b",id:"4\u5a92\u4f53\u80fd\u529b",level:3},{value:"5.Cache storage",id:"5cache-storage",level:3}],s={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0e\u6d4f\u89c8\u5668\u6709\u5173\u7684 API \u5927\u90e8\u5206\u90fd\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," , \u4f46\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," \u9762\u677f\u7528\u8d77\u6765\u5f88\u4e0d\u65b9\u4fbf\u3002\u6709\u6ca1\u6709\u4f7f\u7528\u7684\u6280\u5de7\u5462\uff1f")),(0,a.kt)("h3",{id:"1\u4f8b\u5b50"},"1.\u4f8b\u5b50"),(0,a.kt)("p",null,"\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript/TypeScript")," \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \u7684\u65f6\u5019\uff0c\u901a\u5e38\u4f1a\u914d\u5957\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".then")," \uff0c\u4f46\u5982\u679c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," \u9762\u677f\u4e2d\u6572\u8d77\u6765\u5f88\u4e0d\u65b9\u4fbf\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console01.png",alt:null})),(0,a.kt)("p",null,"\u6216\u8005\u8fd9\u6837"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console02.png",alt:null})),(0,a.kt)("p",null,"\u8bd5\u4e00\u8bd5\u5427\uff0c\u5927\u591a\u6570\u65f6\u5019\uff0c\u4ee3\u7801\u4f1a\u5728\u8f93\u5165\u5b8c\u6210\u4e4b\u524d\u8bef\u89e6\u53d1\uff0c\u6216\u8005\u6f0f\u5199\u62ec\u53f7\u62a5\u9519..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f46\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"strong"},"console")," \u9ed8\u8ba4\u5c31\u88ab ",(0,a.kt)("inlineCode",{parentName:"strong"},"async")," \u5305\u88f9\u5462\uff1f"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console03.gif",alt:null})),(0,a.kt)("p",null,"\u4e8b\u5b9e\u4e0a, \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \u6bd4\u5728 JavaScript \u4e2d\u4f7f\u7528\u8d77\u6765\u8fd8\u8981\u7b80\u5355\uff01"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u89c9\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u7684\u4f8b\u5b50\u5f88\u65e0\u804a\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b\u66f4\u6709\u610f\u601d\u7684\uff1a"),(0,a.kt)("h3",{id:"2storage-\u7cfb\u7edf\u7684-\u5360\u7528\u6570-\u548c-\u7a7a\u95f2\u6570"},"2.",(0,a.kt)("inlineCode",{parentName:"h3"},"Storage")," \u7cfb\u7edf\u7684 ",(0,a.kt)("strong",{parentName:"h3"},"\u5360\u7528\u6570")," \u548c ",(0,a.kt)("strong",{parentName:"h3"},"\u7a7a\u95f2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await navigator.storage.estimate()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console04.png",alt:null})),(0,a.kt)("h3",{id:"3\u8bbe\u5907\u7684-\u7535\u6c60\u4fe1\u606f"},"3.\u8bbe\u5907\u7684 ",(0,a.kt)("strong",{parentName:"h3"},"\u7535\u6c60\u4fe1\u606f")),(0,a.kt)("p",null,"\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u6548\u679c\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u6280\u5de7\u548c\u524d\u51e0\u5929\u4e2d\u63d0\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"console.table")," \u6765\u5408\u5e76\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,"\u6572\u9ed1\u677f\uff1a\u8fd9\u662f\u4e00\u6761",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"},"\u4e0d\u63a8\u8350\u4f7f\u7528\u7684API"),", \u5c3d\u7ba1\u770b\u8d77\u6765\u8fd9\u4e48\u9177\u70ab..."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console05.png",alt:null})),(0,a.kt)("h3",{id:"4\u5a92\u4f53\u80fd\u529b"},"4.\u5a92\u4f53\u80fd\u529b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Media Capabilities")," \u8ba9\u5f00\u53d1\u8005\u83b7\u53d6\u5230\u7528\u6237\u8bbe\u5907/\u7cfb\u7edf/\u6d4f\u89c8\u5668\u89e3\u7801\u80fd\u529b\u7684\u4fe1\u606f\uff0c\u4f5c\u4e3a\u524d\u7aef\u5de5\u7a0b\u5e08\u5728\u4e3a\u7528\u6237\u9009\u62e9\u5a92\u4f53\u6d41\u65f6\u53ef\u4ee5\u505a\u51fa\u6700\u4f73\u51b3\u7b56\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/async_console06.png",alt:null})),(0,a.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u9605\u8bfb w3c \u76f8\u5173\u7684",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/media-capabilities/"},"\u6587\u6863"),"\u6765\u4e86\u89e3\u66f4\u591a\u5a92\u4f53\u80fd\u529b\u7684\u4fe1\u606f")),(0,a.kt)("h3",{id:"5cache-storage"},"5.Cache storage"),(0,a.kt)("p",null,"\u5728\u5bf9\u8fd9\u4e2a\u7279\u6027\u8fdb\u884c\u6f14\u793a\u4e4b\u524d\uff0c\u8fd8\u5f97\u804a\u804a\u4ec0\u4e48\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage"},"Cache storage"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u82b1\u4e9b\u7bc7\u5e45\u7b80\u5355\u804a\u804a\uff0c\u56e0\u4e3a\u6709\u7684\u540c\u5b66\u53ef\u80fd\u6ca1\u63a5\u89e6\u8fc7\uff0c\uff08\u5982\u679c\u4f60\u5df2\u7ecf\u4e86\u89e3\u53ef\u4ee5\u8df3\u8fc7\uff09\u3002")),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u7528\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache storage")," \u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," \u7684 API\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Cache")," \u8fd9\u4e2a\u8bcd\u672c\u8eab\u662f\u7f13\u5b58\u7684\u610f\u601d\uff0c\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u7528\u5230\u7f13\u5b58\u5462\uff1f"),(0,a.kt)("p",null,"\u7f13\u5b58\u89c6\u9891\u662f\u4e3a\u4e86\u5728\u6ca1\u6709\u7f51\u7edc\u7684\u65f6\u5019\u4e0d\u5f71\u54cd\u4f60\u7684\u89c2\u770b\u4f53\u9a8c\u3002\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u4e5f\u4e00\u6837\uff0c\u5728\u8bbe\u5907\u5904\u4e8e\u79bb\u7ebf\u72b6\u6001\u65f6\uff0c\u7ed9\u7528\u6237\u66f4\u597d\u7684\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u6709\u4e2a\u8bcd\u53eb \u201c\u79bb\u7ebf\u5f00\u53d1\u201d \u8bf4\u7684\u5c31\u662f\u8fd9\u4e48\u4e00\u56de\u4e8b\u3002(H5 \u6709\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_manifest_in_HTML5"},"manifest \u7f13\u5b58\u6280\u672f"),"\uff0c\u4f46\u662f\u505a\u8d77\u6765\u5f88\u9ebb\u70e6\uff0c\u6548\u679c\u4e5f\u4e0d\u597d\uff0c\u6240\u4ee5\u4e00\u822c\u662f\u7528 Service Worker \u914d\u5408 Cache storage \u6765\u5b9e\u73b0)"),(0,a.kt)("p",null,"\u4e86\u89e3\u6982\u5ff5\u4ee5\u540e\uff0c\u5176\u5b9e\u5c31\u5f88\u597d\u7406\u89e3\uff0c\u8fd9\u4e2a\u7f13\u5b58\u7684\u8fc7\u7a0b\u80af\u5b9a\u9700\u8981\u505a\u4e09\u4ef6\u4e8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7f51\u9875\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u7f13\u5b58\u7684\u6570\u636e\u5b58\u8d77\u6765"),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c\u7528\u6237\u7684\u8bf7\u6c42\u52a8\u4f5c\uff0c\u8fd4\u56de\u7f13\u5b58\u7684\u6570\u636e")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u8fc7\u7a0b\u4e2d\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," \u8d1f\u8d23\u76d1\u542c\u7528\u6237\u7684\u52a8\u4f5c\uff0c\u6355\u83b7\u5404\u79cd\u4e8b\u4ef6\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache storage")," \u8d1f\u8d23\u5b58\u53d6\u6570\u636e\u3002\uff08\u4e3a\u4e86\u4e0d\u5f71\u54cd\u9875\u9762\u7684\u6b63\u5e38\u6e32\u67d3\u8fc7\u7a0b\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," \u5728\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u3002\uff09"),(0,a.kt)("p",null,"OK\uff0c\u57fa\u672c\u7684\u6982\u5ff5\u77e5\u9053\u4e86\uff0c\u60f3\u518d\u6df1\u5165\u4e00\u4e9b\u4e86\u89e3",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},"\u70b9\u8fd9\u91cc"),", \u6709\u5f88\u591a\u5185\u5bb9\uff0c\u4e0d\u662f\u4e09\u8a00\u4e24\u8bed\u80fd\u8bf4\u5b8c\u7684\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd9\u6837\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," \u5bf9\u8c61:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await caches.keys();\n")),(0,a.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5728\u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"caches.keys()")," \u7684\u65f6\u5019\u7528\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," \u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," \u7684 API \u51e0\u4e4e\u90fd\u662f\u5c01\u88c5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," \u3002")))}k.isMDXComponent=!0}}]);