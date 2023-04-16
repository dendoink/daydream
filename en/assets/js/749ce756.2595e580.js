"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[5498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Source diff",open:!0},a=void 0,c={unversionedId:"chrome-tricks/\u5b9e\u9a8c\u7bc7/Source_diff",id:"chrome-tricks/\u5b9e\u9a8c\u7bc7/Source_diff",title:"Source diff",description:"\u770b\u5b8c worksapce \u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6539\u52a8\u540c\u6b65\u5230\u672c\u5730\u7684\u6587\u4ef6\u4e2d\uff0c\u4f46\u662f\u5bf9\u4e8e\u4fee\u6539\u4e86\u4ec0\u4e48\uff0c\u4ee5\u53ca\u54ea\u4e9b\u662f\u65b0\u589e\u7684\u90e8\u5206\uff0c\u8fd8\u662f\u4f1a\u6a21\u7cca\u4e0d\u6e05\u5bf9\u5417\uff1f",source:"@site/docs/chrome-tricks/06-\u5b9e\u9a8c\u7bc7/04-Source_diff.md",sourceDirName:"chrome-tricks/06-\u5b9e\u9a8c\u7bc7",slug:"/chrome-tricks/\u5b9e\u9a8c\u7bc7/Source_diff",permalink:"/en/docs/chrome-tricks/\u5b9e\u9a8c\u7bc7/Source_diff",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Source diff",open:!0},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u6362 Devtool \u4e3b\u9898\uff1f",permalink:"/en/docs/chrome-tricks/\u5b9e\u9a8c\u7bc7/Custom_UI_Themes"},next:{title:"\u5199\u5728\u6700\u540e",permalink:"/en/docs/chrome-tricks/\u7ed3\u5c3e/\u5199\u5728\u6700\u540e"}},l={},p=[{value:"1. Source diff",id:"1-source-diff",level:3},{value:"2. Source diff \u4f7f\u7528",id:"2-source-diff-\u4f7f\u7528",level:3},{value:"3. \u914d\u5408 Drawer \u7684 changes \u4f7f\u7528",id:"3-\u914d\u5408-drawer-\u7684-changes-\u4f7f\u7528",level:3}],u={toc:p},f="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u770b\u5b8c worksapce \u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6539\u52a8\u540c\u6b65\u5230\u672c\u5730\u7684\u6587\u4ef6\u4e2d\uff0c\u4f46\u662f\u5bf9\u4e8e\u4fee\u6539\u4e86\u4ec0\u4e48\uff0c\u4ee5\u53ca\u54ea\u4e9b\u662f\u65b0\u589e\u7684\u90e8\u5206\uff0c\u8fd8\u662f\u4f1a\u6a21\u7cca\u4e0d\u6e05\u5bf9\u5417\uff1f")),(0,o.kt)("h3",{id:"1-source-diff"},"1. Source diff"),(0,o.kt)("p",null,"::: warning \u8bf7\u6ce8\u610f\n\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u4e2d\u7684\u529f\u80fd\uff0c\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u95ee\u9898\u3002\n:::"),(0,o.kt)("p",null,"\u867d\u7136\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u4e2d\u7684\u529f\u80fd\uff0c\u4f46\u662f\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u6211\u89c9\u5f97\u4ed6\u771f\u7684\u5f88\u597d\u7528\uff0c\u5982\u679c\u4f60\u559c\u6b22\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace")," \u6765\u7f16\u5199\u4ee3\u7801\uff0c\u90a3\u8fd9\u4e2a\u529f\u80fd\u4e00\u5b9a\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u5728\u8bbe\u7f6e\u4e2d\u6253\u5f00\u8fd9\u4e2a\u529f\u80fd\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C07/sourcediff_01.gif",alt:null})),(0,o.kt)("admonition",{title:"\u8bf7\u6ce8\u610f",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u6253\u5f00\u8fd9\u4e2a\u9009\u9879\u4e4b\u540e\uff0c\u8bf7\u52a1\u5fc5\u5728 ",(0,o.kt)("strong",{parentName:"p"},"\u65b0\u7684\u6807\u7b7e\u9875\u91cd\u65b0\u6253\u5f00")," ",(0,o.kt)("inlineCode",{parentName:"p"},"devtools")," \u4ee5\u786e\u4fdd\u6b64\u9009\u9879\u80fd\u591f\u751f\u6548\uff01")),(0,o.kt)("h3",{id:"2-source-diff-\u4f7f\u7528"},"2. Source diff \u4f7f\u7528"),(0,o.kt)("p",null,"\u9996\u5148\u4f60\u9700\u8981\u6709\u4e00\u4e2a\u672c\u5730\u7684\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u62d6\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Source")," \u6216\u8005\u6309 ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," \u53f7\u6765\u9009\u62e9\u5bf9\u5e94\u7684\u6587\u4ef6\u76ee\u5f55\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C07/sourcediff_02.gif",alt:null})),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"}),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u542f\u7528\u4e86 Source diff \u4e4b\u540e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7d2b\u8272\u4ee3\u8868\uff1a\u4fee\u6539\u7684\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"\u7ea2\u8272\u4ee3\u8868\uff1a\u5220\u9664\u7684\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"\u7eff\u8272\u4ee3\u8868\uff1a\u65b0\u589e\u7684\u5185\u5bb9")),(0,o.kt)("h3",{id:"3-\u914d\u5408-drawer-\u7684-changes-\u4f7f\u7528"},"3. \u914d\u5408 Drawer \u7684 changes \u4f7f\u7528"),(0,o.kt)("p",null,"Source diff \u914d\u5408 Drawer \u7684 changes \u4f7f\u7528\u6548\u679c\u66f4\u4f73\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C07/sourcediff_03.gif",alt:null})),(0,o.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"}))}s.isMDXComponent=!0}}]);