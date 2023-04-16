"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[4588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=i,k=d["".concat(l,".").concat(s)]||d[s]||u[s]||o;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"\u5143\u7d20\u9762\u677f\u91cc\u7684\u7f16\u8f91\u5668",open:!0},a=void 0,p={unversionedId:"chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_02",id:"chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_02",title:"\u5143\u7d20\u9762\u677f\u91cc\u7684\u7f16\u8f91\u5668",description:"\u4ed4\u7ec6\u6df1\u5165\u7684\u8bdd\uff0c\u5143\u7d20\u9762\u677f\u91cc\u9762\u8fd8\u6709\u5f88\u591a\u88ab\u5ffd\u7565\u7684\u529f\u80fd\u3002",source:"@site/docs/chrome-tricks/04-\u5143\u7d20\u9762\u677f/03-elementInDeep_02.md",sourceDirName:"chrome-tricks/04-\u5143\u7d20\u9762\u677f",slug:"/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_02",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_02",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5143\u7d20\u9762\u677f\u91cc\u7684\u7f16\u8f91\u5668",open:!0},sidebar:"tutorialSidebar",previous:{title:"\u5143\u7d20\u9762\u677f\u8c03\u8bd5\u6280\u5de7",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/elementInDeep_01"},next:{title:"\u989c\u8272\u9009\u62e9\u5668",permalink:"/docs/chrome-tricks/\u5143\u7d20\u9762\u677f/colorPicker"}},l={},c=[{value:"1. \u5143\u7d20\u9762\u677f\u4e2d\u7c7b\u4f3c\u4e8e\u57fa\u7840\u7f16\u8f91\u5668\u7684\u64cd\u4f5c",id:"1-\u5143\u7d20\u9762\u677f\u4e2d\u7c7b\u4f3c\u4e8e\u57fa\u7840\u7f16\u8f91\u5668\u7684\u64cd\u4f5c",level:3},{value:"2. <code>Shadow editor</code> \u9634\u5f71\u7f16\u8f91\u5668",id:"2-shadow-editor-\u9634\u5f71\u7f16\u8f91\u5668",level:3},{value:"3. <code>Cubic bezier</code> \u8d1d\u585e\u5c14\u66f2\u7ebf\u7f16\u8f91\u5668",id:"3-cubic-bezier-\u8d1d\u585e\u5c14\u66f2\u7ebf\u7f16\u8f91\u5668",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4ed4\u7ec6\u6df1\u5165\u7684\u8bdd\uff0c\u5143\u7d20\u9762\u677f\u91cc\u9762\u8fd8\u6709\u5f88\u591a\u88ab\u5ffd\u7565\u7684\u529f\u80fd\u3002")),(0,i.kt)("h3",{id:"1-\u5143\u7d20\u9762\u677f\u4e2d\u7c7b\u4f3c\u4e8e\u57fa\u7840\u7f16\u8f91\u5668\u7684\u64cd\u4f5c"},"1. \u5143\u7d20\u9762\u677f\u4e2d\u7c7b\u4f3c\u4e8e\u57fa\u7840\u7f16\u8f91\u5668\u7684\u64cd\u4f5c"),(0,i.kt)("p",null,"\u4ece\u67d0\u4e00\u70b9\u6765\u770b\uff0c\u6211\u4eec\u53ef\u4ee5\u62d6\u52a8\uff0c\u653e\u7f6e\uff0c\u7f16\u8f91\uff0c\u590d\u5236(\u5f53\u7136\uff0c\u4ee5\u53ca\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[ctrl]")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[v]")," \u6765\u7c98\u8d34)\uff0c \u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u5143\u7d20\u9762\u677f\u91cc\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML")," \u7ed3\u6784\u641e\u5f97\u4e00\u56e2\u7cdf\u3002\u5728\u4efb\u610f\u4e00\u4e2a\u7f16\u8f91\u5668\u4e2d\u90fd\u6709\u4e00\u4e2a\u6807\u51c6\uff0c\u90a3\u4e48\u5982\u4f55\u64a4\u56de\u4f60\u7684\u64cd\u4f5c\u5462\uff1f"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[ctrl]")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[z]")," ( ",(0,i.kt)("inlineCode",{parentName:"p"},"[\u2318]")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[z]")," on Mac)\u64a4\u9500\u6211\u4eec\u7684\u4efb\u4f55\u6539\u52a8\u3002\n\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[ctrl]")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[shift]")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[z]")," \u91cd\u65b0\u7f16\u8f91\u6211\u4eec\u7684\u4efb\u4f55\u4fee\u6539\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/element-edit.gif",alt:null})),(0,i.kt)("h3",{id:"2-shadow-editor-\u9634\u5f71\u7f16\u8f91\u5668"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"Shadow editor")," \u9634\u5f71\u7f16\u8f91\u5668"),(0,i.kt)("p",null,"\u542c\u8d77\u6765\u5f88\u4e0d\u5409\u5229(\u8bd1\u8005\u6ce8\uff1a\u9634\u5f71\u54ea\u91cc\u4e0d\u5409\u5229\u4e86\uff01)\uff0c\u4f46\u662f\u5b83\u4e5f\u53ea\u662f\u4e00\u4e2a\u5c0f\u90e8\u4ef6\u800c\u5df2\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Style")," \u9762\u677f\u4e2d\u70b9\u51fb\u9760\u8fd1 ",(0,i.kt)("inlineCode",{parentName:"p"},"box-shadow")," \u5c5e\u6027\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"text-shadow")," \u5c5e\u6027\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u9634\u5f71\u65b9\u5f62\u7b26\u53f7")," \u6765\u6253\u5f00\u5b83\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/element-shadow.gif",alt:null})),(0,i.kt)("h3",{id:"3-cubic-bezier-\u8d1d\u585e\u5c14\u66f2\u7ebf\u7f16\u8f91\u5668"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"Cubic bezier")," \u8d1d\u585e\u5c14\u66f2\u7ebf\u7f16\u8f91\u5668"),(0,i.kt)("p",null,"\u8d1d\u585e\u5c14\u66f2\u7ebf\uff0c\u901a\u5e38\u7528\u6765\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"CSS")," \u7684\u52a8\u753b\u901f\u5ea6\u5728\u52a8\u753b\u5404\u4e2a\u9636\u6bb5\u4e2d\u7684\u53d8\u5316 \u3002\u4e00\u822c\u5c06\u5176\u5b9a\u4e49\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"transition-timing-function")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"animation-timing-function")," CSS \u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u50cf\u4e4b\u524d\u8bf4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Color picker")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Shadow editor")," \u4e00\u6837\uff0c\u76f4\u63a5\u70b9\u51fb\u8fb9\u4e0a\u7684\u66f2\u7ebf\u7b26\u53f7\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C05/bezier.gif",alt:null})),(0,i.kt)("admonition",{title:"\u8bf7\u6ce8\u610f",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u7b80\u5199\u7684\u5f62\u5f0f\uff0c\u4f46\u662f\u6ca1\u6709\u5b9a\u4e49\u8fd9\u4e2a\u503c\u7684\u8bdd\uff0c\u662f\u770b\u4e0d\u5230\u8fd9\u4e2a\u66f2\u7ebf\u7b26\u53f7\u7684")),(0,i.kt)("p",null,"\u7f51\u4e0a\u6709\u5f88\u591a\u5173\u4e8e\u8d1d\u585e\u5c14\u66f2\u7ebf\u7684\u89e3\u91ca\uff0c\u4e00\u6253\u5f00\u90fd\u662f\u4e00\u5806\u516c\u5f0f\u548c\u51fd\u6570\uff0c\u6709\u5174\u8da3\u94bb\u7814\u662f\u6700\u597d\uff0c\u4f46\u662f\u6700\u57fa\u672c\u7684\uff0c\u4f60\u53ea\u8981\u77e5\u9053\u8fd9\u4e2a\u7ebf\u662f\u600e\u4e48\u5f71\u54cd\u52a8\u753b\u7684\u901f\u5ea6\u5c31\u77e5\u9053\u600e\u4e48\u7528\u4e86\uff1a"),(0,i.kt)("p",null,"\u6a2a\u8f74\u662f\u65f6\u95f4\uff0c\u7ad6\u8f74\u662f\u52a8\u753b\u7684\u6574\u4e2a\u8fdb\u7a0b\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4e24\u4e2a\u70b9\u4e4b\u95f4\u7684\u7ebf\uff0c\u8d8a\u63a5\u8fd1\u5782\u76f4\uff1a\u6a2a\u5750\u6807\u7684\u5dee\u8d8a\u5c0f\u610f\u5473\u7740 \u2192 \u65f6\u95f4\u8d8a\u77ed\uff1b\u7eb5\u5750\u6807\u7684\u5dee\u8d8a\u5927 \u2192 \u8fdb\u7a0b\u5360\u6bd4\u8d8a\u5927\u3002"),(0,i.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u5728\u8d8a\u77ed\u7684\u65f6\u95f4\u8981\u6267\u884c\u8d8a\u591a\u7684\u52a8\u753b\uff0cprocess(\u5927)/time(\u5c0f) = v (\u8d8a\u5927)\uff0c\u52a8\u753b\u7684\u901f\u5ea6\u8d8a\u5feb\uff01"),(0,i.kt)("p",null,"\u53cd\u8fc7\u6765\uff0c\u7ebf\u8d8a\u63a5\u8fd1\u6c34\u5e73\uff1a\u65f6\u95f4\u8d8a\u957f\uff0c\u8fdb\u7a0b\u5360\u6bd4\u8d8a\u5c0f\uff0cprocess(\u5c0f)/time(\u5927) = v(\u8d8a\u5c0f)\uff0c\u52a8\u753b\u7684\u901f\u5ea6\u8d8a\u6162\u3002"),(0,i.kt)("p",null,"\u89e3\u91ca\u5b8c\u6bd5\uff0c\u4e00\u4e2a\u516c\u5f0f\u90fd\u4e0d\u9700\u8981\u4f1a\u3002"),(0,i.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u60f3\u8bd5\u8bd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"3D")," \u52a8\u753b\uff1a\u76f4\u63a5\u5728\u5bb9\u5668\u5143\u7d20\u4e2d\u8bbe\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"perspective")," \u5c5e\u6027\u3002\u4f8b\u5982\uff1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," \u5143\u7d20\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"perspective: 200px;")," ")))}u.isMDXComponent=!0}}]);