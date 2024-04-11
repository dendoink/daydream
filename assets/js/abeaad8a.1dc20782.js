"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[2619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"JS\u6f2b\u8c0806-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",description:"06-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",open:!0,authors:["dendoink"]},i=void 0,l={permalink:"/daydream/blog/2024/04/10/index",source:"@site/blog/2024-04-10/index.md",title:"JS\u6f2b\u8c0806-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",description:"06-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",date:"2024-04-10T00:00:00.000Z",formattedDate:"2024\u5e744\u670810\u65e5",tags:[],readingTime:17.215,hasTruncateMarker:!0,authors:[{name:"dendoink",title:"Things we do are all for love",url:"https://github.com/dendoink",imageURL:"https://avatars.githubusercontent.com/u/18694267?v=4",key:"dendoink"}],frontMatter:{title:"JS\u6f2b\u8c0806-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",description:"06-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",open:!0,authors:["dendoink"]},nextItem:{title:"JS\u6f2b\u8c0805-\u4ece IIFE \u5230 Babel",permalink:"/daydream/blog/2024/04/09/index"}},c={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"06-\u4ecePrototype \u5230\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",src:r(8296).Z,width:"3746",height:"2102"})),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5f00\u5934\u8bf4\u70b9\u9898\u5916\u8bdd\uff0c\u4e0d\u77e5\u9053\u4ec0\u4e48\u65f6\u5019\u5f00\u59cb\uff0c\u6211\u53d1\u73b0\u5728 JavaScript \u4e2d\uff0c\u5927\u5bb6\u90fd\u559c\u6b22\u7528 foo \u548c bar \u6765\u7528\u4f5c\u793a\u4f8b\u53d8\u91cf\u540d\uff0c\u4e3a\u6b64\u4e13\u95e8\u67e5\u4e86\u4e00\u4e0b\u8fd9\u5bb6\u4f19\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://en.m.wikipedia.org/wiki/Foobar"},"\u6765\u6e90"),"\uff1a"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u201cThe etymology of foo is obscure. Its use in connection with bar is generally traced to the World War II military slang FUBAR, later bowdlerised to foobar. ... The use of foo in a programming context is generally credited to the Tech Model Railroad Club (TMRC) of MIT from circa 1960.\u201d")),(0,o.kt)("p",null,"foo\u7684\u8bcd\u6e90\u662f\u6a21\u7cca\u7684\u3002 \u5b83\u4e0ebar\u7684\u5173\u7cfb\u53ef\u4ee5\u8ffd\u6eaf\u5230\u7b2c\u4e8c\u6b21\u4e16\u754c\u5927\u6218\u7684\u519b\u4e8b\u4fda\u8bed ",(0,o.kt)("inlineCode",{parentName:"p"},"FUBAR")," \uff0c\u540e\u7b80\u5316\u4e3afoobar\u3002 \u800c\u5728\u7f16\u7a0b\u73af\u5883\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u901a\u5e38\u8ba4\u4e3a\u8d77\u6e90\u4e8e\u7ea6 1960 \u5e74\u65f6\u9ebb\u7701\u7406\u5de5\u5b66\u9662\u7684\u6280\u672f\u6a21\u578b\u94c1\u8def\u4ff1\u4e50\u90e8\uff08TMRC\uff09\u3002"))}d.isMDXComponent=!0},8296:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-874f579d95cf762ce0630a22911cd8b2.png"}}]);