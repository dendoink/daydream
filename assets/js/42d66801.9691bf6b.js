"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[4406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),k=l,s=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(s,a(a({ref:t},c),{},{components:n})):r.createElement(s,a({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),l=(n(7294),n(3905));const i={title:"\u5143\u7d20\u9762\u677f\u8c03\u8bd5\u6280\u5de7",open:!0},a=void 0,o={unversionedId:"chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_01",id:"chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_01",title:"\u5143\u7d20\u9762\u677f\u8c03\u8bd5\u6280\u5de7",description:"\u9664\u4e86\u57fa\u672c\u7684\u529f\u80fd\uff0c\u8fd8\u6709\u54ea\u4e9b\u597d\u7528\u5374\u4e0d\u4e3a\u4eba\u77e5\u7684\u6280\u5de7\uff1f",source:"@site/docs/chrome-tricks/04-\u5143\u7d20\u9762\u677f/02-elementInDeep_01.md",sourceDirName:"chrome-tricks/04-\u5143\u7d20\u9762\u677f",slug:"/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_01",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_01",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5143\u7d20\u9762\u677f\u8c03\u8bd5\u6280\u5de7",open:!0},sidebar:"tutorialSidebar",previous:{title:"\u5143\u7d20\u9762\u677f\u7684\u57fa\u672c\u64cd\u4f5c",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementTips"},next:{title:"\u5143\u7d20\u9762\u677f\u91cc\u7684\u7f16\u8f91\u5668",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_02"}},p={},m=[{value:"1. \u63d2\u5165\u6837\u5f0f\u89c4\u5219\u7684\u6309\u94ae",id:"1-\u63d2\u5165\u6837\u5f0f\u89c4\u5219\u7684\u6309\u94ae",level:3},{value:"2. \u5728\u5143\u7d20\u9762\u677f\u4e2d\u5c55\u5f00\u6240\u6709\u7684\u5b50\u8282\u70b9",id:"2-\u5728\u5143\u7d20\u9762\u677f\u4e2d\u5c55\u5f00\u6240\u6709\u7684\u5b50\u8282\u70b9",level:3},{value:"3. DOM \u65ad\u70b9",id:"3-dom-\u65ad\u70b9",level:3}],c={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u57fa\u672c\u7684\u529f\u80fd\uff0c\u8fd8\u6709\u54ea\u4e9b\u597d\u7528\u5374\u4e0d\u4e3a\u4eba\u77e5\u7684\u6280\u5de7\uff1f")),(0,l.kt)("h3",{id:"1-\u63d2\u5165\u6837\u5f0f\u89c4\u5219\u7684\u6309\u94ae"},"1. \u63d2\u5165\u6837\u5f0f\u89c4\u5219\u7684\u6309\u94ae"),(0,l.kt)("p",null,"\u628a\u9f20\u6807\u60ac\u505c\u5728\u6837\u5f0f\u9009\u62e9\u5668\u7684\u6700\u4e0b\u9762\uff0c\u4f1a\u770b\u5230\u51e0\u4e2a\u53ef\u4ee5\u5feb\u901f\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Color")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Shadow")," \u5c5e\u6027\u7684\u6309\u94ae\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text-shadow")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"box-shadow")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"background-color")," ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/element_addrule.gif",alt:null})),(0,l.kt)("p",null,"::: warning \u8bf7\u6ce8\u610f\n\u6700\u65b0\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"90.0.4430.85")," \u5df2\u7ecf\u79fb\u9664\u4e86\u8fd9\u90e8\u5206\u529f\u80fd\u7684\u652f\u6301\u3002\u611f\u8c22\u8bfb\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e09\u601d")," \u7684\u63d0\u9192\u3002\n:::"),(0,l.kt)("h3",{id:"2-\u5728\u5143\u7d20\u9762\u677f\u4e2d\u5c55\u5f00\u6240\u6709\u7684\u5b50\u8282\u70b9"},"2. \u5728\u5143\u7d20\u9762\u677f\u4e2d\u5c55\u5f00\u6240\u6709\u7684\u5b50\u8282\u70b9"),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e00\u4e2a\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"\u25b6")," \u5c55\u5f00\u592a\u6162\uff1f\u53f3\u952e\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"expand recursively")," \uff01\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/recursively.gif",alt:null})),(0,l.kt)("h3",{id:"3-dom-\u65ad\u70b9"},"3. DOM \u65ad\u70b9"),(0,l.kt)("p",null,"\u6709\u65f6\u811a\u672c\u4fee\u6539\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"DOM")," \uff0c\u4f46\u4fee\u6539\u7684\u662f\u54ea\u90e8\u5206\uff1f\u4ec0\u4e48\u65f6\u5019\u4fee\u6539\u7684\u5462\uff1f"),(0,l.kt)("p",null,"\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c31\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"DOM")," \u65ad\u70b9\uff1a\u76d1\u542c\u8282\u70b9\u88ab\u6dfb\u52a0\u6216\u8005\u79fb\u9664 / \u5c5e\u6027\u88ab\u6539\u53d8\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u70b9\u51fb"..." \u7b26\u53f7\u6216\u8005\u53f3\u51fb\u4f60\u60f3\u6dfb\u52a0\u76d1\u542c\u7684\u5143\u7d20')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"subtree modifications")," : \u76d1\u542c\u4efb\u4f55\u5b83\u5185\u90e8\u7684\u8282\u70b9\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"\u79fb\u9664")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6dfb\u52a0")," \u7684\u4e8b\u4ef6"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"attribute modifications")," : \u76d1\u542c\u4efb\u4f55\u5f53\u524d\u9009\u4e2d\u7684\u8282\u70b9\u88ab ",(0,l.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"\u79fb\u9664")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u88ab\u4fee\u6539\u503c")," \u7684\u4e8b\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node removal")," : \u76d1\u542c\u88ab\u9009\u4e2d\u7684\u5143\u7d20\u88ab ",(0,l.kt)("inlineCode",{parentName:"li"},"\u79fb\u9664")," \u7684\u4e8b\u4ef6")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/dom_break.png",alt:null})),(0,l.kt)("p",null,"\u9875\u9762\u91cd\u65b0\u52a0\u8f7d\u65f6\u4f1a\u8bb0\u4f4f\u65ad\u70b9\u3002\u5f53\u4f60\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u65ad\u70b9\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u90fd\u5fd8\u4e86\u5b83\u4eec\u6240\u6807\u8bb0\u7684\u4f4d\u7f6e\u4e86\u3002\u600e\u4e48\u627e\u5b83\u4eec\u5462\uff1f\uff1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Elements")," \u89c6\u56fe\u4e2d\u6709\u89c6\u89c9\u63d0\u793a\uff0c"),(0,l.kt)("p",null,"\u6709\u65f6\u4f60\u6dfb\u52a0\u4e86\u65ad\u70b9\u7684\u5143\u7d20\u88ab\u9690\u85cf\u5728\u4e00\u4e9b\u6298\u53e0\u8d77\u6765\u7684\u7236\u7ea7\u5143\u7d20\u4e2d\uff0c\u4e0d\u8981\u62c5\u5fc3 - \u4ed6\u4eec\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Element")," \u4e2d\u7528\u9ad8\u4eae\u5c55\u793a\u51fa\u6765:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/dom_break_02.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Sources")," \u4e2d\u4e5f\u6709\u4e13\u7528\u5217\u8868:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/dom_%20break_01.png",alt:null})))}d.isMDXComponent=!0}}]);