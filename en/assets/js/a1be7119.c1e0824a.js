"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[6716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),k=c(n),u=l,d=k["".concat(p,".").concat(u)]||k[u]||s[u]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[k]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={title:"\u521d\u7aa5 Network",open:!0},i=void 0,a={unversionedId:"chrome-tricks/Network/networkBasic",id:"chrome-tricks/Network/networkBasic",title:"\u521d\u7aa5 Network",description:"Network \u4f5c\u4e3a\u8c03\u8bd5\u4e2d\u6bd4\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u4f46\u4f60\u5bf9\u5b83\u7684\u4e86\u89e3\u6709\u591a\u5c11\u5462\uff1f",source:"@site/docs/chrome-tricks/03-Network/01-networkBasic.md",sourceDirName:"chrome-tricks/03-Network",slug:"/chrome-tricks/Network/networkBasic",permalink:"/daydream/en/docs/chrome-tricks/Network/networkBasic",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u521d\u7aa5 Network",open:!0},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u63a5\u628a `log` \u4f5c\u4e3a\u56de\u8c03\u51fd\u6570",permalink:"/daydream/en/docs/chrome-tricks/Console/consoleTips_04"},next:{title:"Network \u6df1\u5165",permalink:"/daydream/en/docs/chrome-tricks/Network/networkDetail_01"}},p={},c=[{value:"1. Filter",id:"1-filter",level:3},{value:"2. Preserve log",id:"2-preserve-log",level:3},{value:"3. \u591a\u7c7b\u578b\u7b5b\u9009",id:"3-\u591a\u7c7b\u578b\u7b5b\u9009",level:3},{value:"4. \u67e5\u770b\u672a\u538b\u7f29\u7684\u6587\u4ef6\u4f53\u79ef",id:"4-\u67e5\u770b\u672a\u538b\u7f29\u7684\u6587\u4ef6\u4f53\u79ef",level:3}],m={toc:c},k="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Network")," \u4f5c\u4e3a\u8c03\u8bd5\u4e2d\u6bd4\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u4f46\u4f60\u5bf9\u5b83\u7684\u4e86\u89e3\u6709\u591a\u5c11\u5462\uff1f")),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"Network")," \u7684\u7b2c\u4e00\u5370\u8c61\uff0c\u6ee1\u5c4f\u90fd\u662f\u8bf7\u6c42:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/network-overview.png",alt:null})),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u622a\u56fe\uff0c\u597d\u50cf\u6ca1\u6709\u7f3a\u5c11\u4efb\u4f55\u6709\u6548\u4fe1\u606f\uff0c\u4f46\u662f\u4f60\u53ea\u770b\u5230\u4e86\u81ea\u5df1\u60f3\u770b\u5230\u7684\uff0c\u6709\u5f88\u591a\u7684\u5173\u952e\u4fe1\u606f\u5728\u4e0d\u8d77\u773c\u7684\u4f4d\u7f6e\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/DOM_LOAD_Time.png",alt:null})),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u5927\u90e8\u5206\u65f6\u5019\u6ca1\u6709\u6ce8\u610f\u5230\u5462\uff1f\u56e0\u4e3a DOM \u7ed3\u6784\u6e32\u67d3\u7684\u65f6\u95f4\uff0c\u548c\u6267\u884c load \u811a\u672c\u7684\u8017\u65f6\uff0c\u662f\u5728\u5df2\u7ecf\u5b8c\u6210\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6027\u80fd\u4f18\u5316\u7684\u65f6\u5019\u624d\u4f1a\u7528\u5230\u3002"),(0,l.kt)("p",null,"\u65e5\u5e38\u5de5\u4f5c\u7684\u6838\u5fc3\uff0c\u53ea\u662f\u901a\u8fc7\u8fd9\u4e2a\u9762\u677f\u4e0a\u7684\u8fc7\u6ee4\u5668\uff0c\u627e\u5230\u90a3\u4e9b\u6211\u4eec\u9700\u8981\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u67e5\u770b\u5b83\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5224\u65ad\u5b83\u662f\u5426\u6b63\u786e\u5f97\u8fd4\u56de\u4e86\u6211\u4eec\u9700\u8981\u7684\u503c\u3002"),(0,l.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7ec6\u5fc3\u7684\u8bdd\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0cWaterfall \u8fd9\u4e00\u680f\u4e0b\uff0c\u84dd\u8272\u7684\u7ebf\u4ee3\u8868\u7684\u662fDOM \u52a0\u8f7d\u5b8c\u6bd5\u7684\u8282\u70b9\uff0c\u800c\u7ea2\u8272\u7684\u7ebf\u4ee3\u8868\u7684\u662f load \u811a\u672c\u6267\u884c\u7ed3\u675f\u7684\u8282\u70b9\u3002")),(0,l.kt)("h3",{id:"1-filter"},"1. Filter"),(0,l.kt)("p",null,"\u521a\u521a\u63d0\u5230\uff0c\u9762\u677f\u4e0a\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e00\u4e2a filter \u5e2e\u52a9\u8fc7\u6ee4\u8bf7\u6c42:"),(0,l.kt)("p",null,"\u8fc7\u6ee4\u5668\u7684\u8f93\u5165\u6846\u63a5\u53d7\u5b57\u7b26\u4e32\uff0c\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4f1a\u663e\u793a\u5339\u914d\u6761\u4ef6\u8bf7\u6c42\u3002 "),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u8f93\u5165 \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"method")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"mime-type")," \u8fd9\u6837\u7684\u6761\u4ef6\u6765\u8bd5\u8bd5:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/network-search.gif",alt:null})),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u7b5b\u9009\uff0c\u4f46\u662f\u53c8\u4e0d\u77e5\u9053\u652f\u6301\u54ea\u4e9b\u7b5b\u9009\u6761\u4ef6\uff0c\u53ef\u4ee5\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \u6765\u67e5\u770b\u6240\u6709\u7684\u6761\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/network-search02.png",alt:null})),(0,l.kt)("h3",{id:"2-preserve-log"},"2. Preserve log"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Preserve")," \uff08\u4fdd\u7559\uff09\u65e5\u5fd7\uff0c\u5728\u4ec0\u4e48\u65f6\u5019\u4f1a\u7528\u5230\u5462\uff1f\u5f53\u9700\u8981\u8bb0\u5f55\u9875\u9762\u5237\u65b0\u524d\u540e\u7684 log \u6216\u8005\u662f\u9875\u9762\u8df3\u8f6c\u524d\u540e\u7684 log \u6765\u8fdb\u884c\u5bf9\u6bd4\u8c03\u8bd5\u7684\u65f6\u5019\u3002"),(0,l.kt)("p",null,"\u5b83\u4f1a\u4e00\u76f4\u4fdd\u7559\u4e4b\u524d\u7684\u65e5\u5fd7\uff0c\u65e0\u8bba\u662f\u5237\u65b0\u8fd8\u662f\u9875\u9762\u7684\u8df3\u8f6c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/Preserve_log.gif",alt:null})),(0,l.kt)("h3",{id:"3-\u591a\u7c7b\u578b\u7b5b\u9009"},"3. \u591a\u7c7b\u578b\u7b5b\u9009"),(0,l.kt)("p",null,"\u5f53\u4f60\u7b5b\u9009\u51fa\u4e00\u5927\u5806\u7684 log \u8bb0\u5f55\uff0c\u4f46\u53ea\u60f3\u770b\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CSS")," \u7684\u8bf7\u6c42\u7684\u65f6\u5019\u600e\u4e48\u505a\u5462\uff1f"),(0,l.kt)("p",null,"\u6309\u4f4f ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd")," \uff0c\u7136\u540e\u9f20\u6807\u5de6\u952e\u9009\u62e9\u4f60\u60f3\u6dfb\u52a0\u7b5b\u9009\u7684\u7c7b\u76ee\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/select.gif",alt:null})),(0,l.kt)("h3",{id:"4-\u67e5\u770b\u672a\u538b\u7f29\u7684\u6587\u4ef6\u4f53\u79ef"},"4. \u67e5\u770b\u672a\u538b\u7f29\u7684\u6587\u4ef6\u4f53\u79ef"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Network")," \u9762\u677f\u4e2d\u53ef\u4ee5\u5f88\u76f4\u89c2\u7684\u770b\u5230\u6587\u4ef6\u7684\u4f53\u79ef\uff0c\u4f46\u662f\u5982\u679c\u6211\u60f3\u770b\u5230\u672a\u538b\u7f29\u7684\u4f53\u79ef\u5462\uff1f"),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Network")," \u9762\u677f\u4e2d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"Use large request rows")," :"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C04/large_request_rows.gif",alt:null})),(0,l.kt)("p",null,"\u5237\u65b0\u9875\u9762\u53d1\u73b0\uff0c\u8fd9\u5f20\u56fe\u7684\u5927\u5c0f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"29.7kb")," \u4f46\u662f\u5b9e\u9645\u4e0a\u7f51\u7edc\u4f20\u8f93\u7684\u4f53\u79ef\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"29.3kb")," \u3002"),(0,l.kt)("p",null,"\u539f\u56e0\u5c31\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Response header")," \u91cc\u9762\uff1a\u8fd9\u5f20\u56fe\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Nginx")," \u4e2d\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"gzip")," \u538b\u7f29\u3002"))}s.isMDXComponent=!0}}]);