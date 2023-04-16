"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[8938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=i,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Network \u7ec6\u8282",open:!0},o=void 0,l={unversionedId:"chrome-tricks/Network/networkDetail_02",id:"chrome-tricks/Network/networkDetail_02",title:"Network \u7ec6\u8282",description:"Network \u8fd8\u6709\u54ea\u4e9b\u4f7f\u7528\u6280\u5de7\u5462\uff1f",source:"@site/docs/chrome-tricks/03-Network/03-networkDetail_02.md",sourceDirName:"chrome-tricks/03-Network",slug:"/chrome-tricks/Network/networkDetail_02",permalink:"/daydream/docs/chrome-tricks/Network/networkDetail_02",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Network \u7ec6\u8282",open:!0},sidebar:"tutorialSidebar",previous:{title:"Network \u6df1\u5165",permalink:"/daydream/docs/chrome-tricks/Network/networkDetail_01"},next:{title:"\u5143\u7d20\u9762\u677f\u7684\u57fa\u672c\u64cd\u4f5c",permalink:"/daydream/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementTips"}},p={},c=[{value:"1. \u91cd\u65b0\u53d1\u9001 <code>XHR</code> \u7684\u8bf7\u6c42",id:"1-\u91cd\u65b0\u53d1\u9001-xhr-\u7684\u8bf7\u6c42",level:3},{value:"2. \u7981\u6b62\u8bf7\u6c42",id:"2-\u7981\u6b62\u8bf7\u6c42",level:3},{value:"3. \u5f3a\u5236\u6e05\u9664\u7f13\u5b58\u5237\u65b0",id:"3-\u5f3a\u5236\u6e05\u9664\u7f13\u5b58\u5237\u65b0",level:3}],d={toc:c},m="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Network")," \u8fd8\u6709\u54ea\u4e9b\u4f7f\u7528\u6280\u5de7\u5462\uff1f")),(0,i.kt)("h3",{id:"1-\u91cd\u65b0\u53d1\u9001-xhr-\u7684\u8bf7\u6c42"},"1. \u91cd\u65b0\u53d1\u9001 ",(0,i.kt)("inlineCode",{parentName:"h3"},"XHR")," \u7684\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5982\u4f55\u91cd\u65b0\u53d1\u9001 ",(0,i.kt)("inlineCode",{parentName:"p"},"XHR")," \u7684\u8bf7\u6c42\uff1f\u8fd8\u5728\u5237\u65b0\u9875\u9762\uff1f"),(0,i.kt)("p",null,"\u592a\u8001\u5957\u4e86\uff0c\u8bd5\u8bd5\u8fd9\u4e48\u505a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4648).Z,width:"505",height:"563"})),(0,i.kt)("h3",{id:"2-\u7981\u6b62\u8bf7\u6c42"},"2. \u7981\u6b62\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5f53\u4f60\u60f3\u6d4b\u8bd5\u9875\u9762\u5728\u67d0\u4e2a\u63a5\u53e3\u5931\u8d25\u65f6\u7684\u8868\u73b0\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Network")," \u9762\u677f\u4e2d\u7684\u7981\u6b62\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u7981\u7528\u4e00\u4e2a\u8bf7\u6c42\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"**\u8bf7\u6c42\u5df2\u7ecf\u5728\u4f60\u7684\u8bf7\u6c42\u5217\u8868\u4e2d**")," \uff0c\u4f60\u53ef\u4ee5\u53f3\u952e\u9009\u62e9\u7981\u7528\u6765\u81ea\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"li"},"URL")," \u7684\u8bf7\u6c42\uff0c\u6216\u8005\u6765\u81ea\u5f53\u524d\u57df\u540d\u7684\u8bf7\u6c42\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7924).Z,width:"884",height:"961"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5728\u751f\u4ea7\u73af\u5883\uff0c\u6216\u8005\u4f60\u60f3\u4f7f\u7528\u4e00\u4e2a\u6b63\u5219\u89c4\u5219\u6765\u5339\u914d\u4e00\u7cfb\u5217\u7684\u8bf7\u6c42\u8fdb\u884c\u7981\u7528\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Drawer")," \u6765\u7981\u7528\u8bf7\u6c42:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8413).Z,width:"700",height:"690"})),(0,i.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8fd8\u4e0d\u77e5\u9053 ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawer")," \u662f\u4ec0\u4e48\uff0c\u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u5728\u540e\u9762\u7684",(0,i.kt)("a",{parentName:"p",href:"https://www.frontendwingman.com/Chrome/C06/drawerTips.html"},"\u7ae0\u8282"),"\u4f1a\u63d0\u5230\u3002")),(0,i.kt)("h3",{id:"3-\u5f3a\u5236\u6e05\u9664\u7f13\u5b58\u5237\u65b0"},"3. \u5f3a\u5236\u6e05\u9664\u7f13\u5b58\u5237\u65b0"),(0,i.kt)("p",null,"\u5728\u4f60\u6ca1\u6709\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"devtools")," \u7684\u60c5\u51b5\u4e0b\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Chrome")," \u7684\u5237\u65b0\u6309\u94ae\u53ea\u80fd\u7b80\u5355\u7684\u5237\u65b0\u5f53\u524d\u9875\u9762\uff0c\u4f46\u662f\u5728\u4f60\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"p"},"devtools")," \u7684\u60c5\u51b5\u4e0b\uff0c\u957f\u6309\u5237\u65b0\u6309\u94ae\u4f1a\u591a\u51fa\u4e24\u4e2a\u9009\u9879\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2354).Z,width:"800",height:"756"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hard Reload \u5f3a\u5236\u5237\u65b0 "),(0,i.kt)("li",{parentName:"ul"},"Empty Cache and Hard Reload \u6e05\u9664\u7f13\u5b58\u5f3a\u5236\u5237\u65b0")),(0,i.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," ( ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows")," ) \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmd")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," ( ",(0,i.kt)("inlineCode",{parentName:"p"},"Mac")," ) \u6765\u5f3a\u5236\u5237\u65b0\u3002")))}s.isMDXComponent=!0},7924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-block_request-9f0646659cf67891c8e4e42b33b3344f.png"},8413:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-block_request_02-e69107d00c42862cfc10025adeb4673a.gif"},2354:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-hardreload-122020fec00b72947e66ebae62654b7b.gif"},4648:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-replayxhr-5f8e0dc8b0c3c2dad2bba5e826d29b55.png"}}]);