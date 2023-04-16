"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[7698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),k=l,s=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(s,a(a({ref:t},c),{},{components:n})):r.createElement(s,a({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),l=(n(7294),n(3905));const o={title:"\u4f7f\u7528 Command",open:!0},a=void 0,i={unversionedId:"chrome-tricks/\u901a\u7528\u7bc7/command",id:"chrome-tricks/\u901a\u7528\u7bc7/command",title:"\u4f7f\u7528 Command",description:"\u6211\u4eec\u770b\u5230\u7684 DevTools \u7684\u529f\u80fd\uff0c\u5176\u5b9e\u53ea\u662f\u6709\u9650\u7684\u8868\u9762\u90e8\u5206\uff0c\u600e\u4e48\u53bb\u63a2\u7d22\u66f4\u591a\u7684\u529f\u80fd\u5462\uff1f",source:"@site/docs/chrome-tricks/01-\u901a\u7528\u7bc7/04-command.md",sourceDirName:"chrome-tricks/01-\u901a\u7528\u7bc7",slug:"/chrome-tricks/\u901a\u7528\u7bc7/command",permalink:"/docs/chrome-tricks/\u901a\u7528\u7bc7/command",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u4f7f\u7528 Command",open:!0},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u6377\u952e\u548c\u901a\u7528\u6280\u5de7",permalink:"/docs/chrome-tricks/\u901a\u7528\u7bc7/hotkey"},next:{title:"\u4ee3\u7801\u5757\u7684\u4f7f\u7528",permalink:"/docs/chrome-tricks/\u901a\u7528\u7bc7/code_block"}},p={},m=[{value:"1. Command Menu",id:"1-command-menu",level:3},{value:"2. \u622a\u5c4f\u7684\u65b0\u59ff\u52bf",id:"2-\u622a\u5c4f\u7684\u65b0\u59ff\u52bf",level:3},{value:"3. \u5feb\u901f\u5207\u6362\u9762\u677f",id:"3-\u5feb\u901f\u5207\u6362\u9762\u677f",level:3},{value:"4. \u5feb\u901f\u5207\u6362\u4e3b\u9898",id:"4-\u5feb\u901f\u5207\u6362\u4e3b\u9898",level:3}],c={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u770b\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u7684\u529f\u80fd\uff0c\u5176\u5b9e\u53ea\u662f\u6709\u9650\u7684\u8868\u9762\u90e8\u5206\uff0c\u600e\u4e48\u53bb\u63a2\u7d22\u66f4\u591a\u7684\u529f\u80fd\u5462\uff1f")),(0,l.kt)("h3",{id:"1-command-menu"},"1. Command Menu"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Command")," \u83dc\u5355\uff0c\u5feb\u901f\u627e\u5230\u90a3\u4e9b\u88ab\u9690\u85cf\u8d77\u6765\u7684\u529f\u80fd\u3002\u5b83\u5c31\u76f8\u5f53\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"WebStorm")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Find Action")," (\u67e5\u627e\u52a8\u4f5c) \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"Visual Studio Code")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Command Palette")," \uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Chrome")," \u7684\u8c03\u8bd5\u6253\u5f00\u7684\u60c5\u51b5\u4e0b \u6309\u4e0b ","[ `Ctrl]",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"[Shift]",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"[P]",(0,l.kt)("inlineCode",{parentName:"li"},"(Mac\uff1a"),"[\u2318]",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"[Shift]",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"[P]","` )"),(0,l.kt)("li",{parentName:"ul"},"\u6216\u8005\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"DevTools")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"dropdown")," \u6309\u94ae\u4e0b\u7684\u8fd9\u4e2a\u9009\u9879:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/dropdowm.png",alt:null})),(0,l.kt)("p",null,"\u4e0b\u56fe\u4e2d\uff0c\u6211\u6574\u7406\u4e86\u53ef\u4f9b\u9009\u62e9\u7684\u547d\u4ee4\u5217\u8868\uff0c\u5f52\u4e3a\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/cmd_menu_section.png",alt:null})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"Chrome DevTools")," \u7adf\u7136\u6709\u90a3\u4e48\u591a\u5f3a\u5927\u7684\u529f\u80fd!")),(0,l.kt)("h3",{id:"2-\u622a\u5c4f\u7684\u65b0\u59ff\u52bf"},"2. \u622a\u5c4f\u7684\u65b0\u59ff\u52bf"),(0,l.kt)("p",null,"\u5f53\u4f60\u53ea\u60f3\u5bf9\u67d0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"DOM")," \u8282\u70b9\u622a\u56fe\u65f6\uff0c\u5927\u6982\u7387\u4f1a\u7528\u5de5\u5177\u5f04\u534a\u5929\uff0c\u4f46\u73b0\u5728\u4e0d\u9700\u8981\u4e86\uff1a"),(0,l.kt)("p",null,"\u76f4\u63a5\u9009\u4e2d\u90a3\u4e2a\u8282\u70b9\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"Command")," \u83dc\u5355\u5e76\u4e14\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u8282\u70b9\u622a\u56fe")," \u7684\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,l.kt)("p",null,"\u4f60\u4ee5\u4e3a\u8fd9\u5c31\u662f\u5168\u90e8\u4e86\u5417\uff1f\u4f60\u8fd8\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c4f\u622a\u56fe"),"  - \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Capture full size screenshot")," \u547d\u4ee4\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u91cc\u8bf4\u7684\u662f\u5168\u5c4f\uff0c\u5e76\u4e0d\u662f\u5d4c\u5165\u9875\u9762\u7684\u4e00\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u8fd9\u53ef\u662f\u5f97\u4f7f\u7528\u6d4f\u89c8\u5668\u63d2\u4ef6\u624d\u80fd\u505a\u5230\u7684\u4e8b\u60c5\uff01"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/capture.gif",alt:null})),(0,l.kt)("p",null,"::: warning \u6ce8\u610f\n",(0,l.kt)("strong",{parentName:"p"},"\u8282\u70b9\u622a\u56fe\u6709\u65f6\u4f1a\u5931\u6548"),"\uff0c\u5168\u5c4f\u622a\u56fe\u5982\u679c\u9875\u9762\u5185\u5bb9\u8fc7\u591a\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u622a\u56fe\u4e0d\u5168\uff0c\u5efa\u8bae\u5927\u5bb6\u8c28\u614e\u4f7f\u7528\u3002\n:::"),(0,l.kt)("h3",{id:"3-\u5feb\u901f\u5207\u6362\u9762\u677f"},"3. \u5feb\u901f\u5207\u6362\u9762\u677f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u4f7f\u7528\u53cc\u9762\u677f\u5e03\u5c40\uff0c\u4e00\u822c\u90fd\u662f\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5143\u7d20\u9762\u677f")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u9762\u677f")," \uff0c\u4f1a\u81ea\u52a8\u6839\u636e\u5c4f\u5e55\u53ef\u7528\u7684\u90e8\u5206\uff0c\u5c06\u4e0d\u540c\u9762\u677f\u6a2a\u5411\u6216\u7eb5\u5411\u6392\u5217\u3002"),(0,l.kt)("p",null,"\u4f46\u6211\u4eec\u5728\u8c03\u8bd5 PC \u7aef\u7684\u4ee3\u7801\u548c\u624b\u673a\u7aef\u7684\u4ee3\u7801\u65f6\uff0c\u4e60\u60ef\u4e8e\u7528\u4e0d\u540c\u7684\u5e03\u5c40\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u600e\u4e48\u91cd\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u7684\u5e03\u5c40\u5462\uff1f\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6837\u5f0f\u9762\u677f")," \u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"html\u9884\u89c8")," \u7684\u5e95\u90e8\u79fb\u52a8\u5230\u53f3\u8fb9\u6216\u8005\u5468\u56f4\u5176\u4ed6\u7684\u4f4d\u7f6e\u5462\uff1f"),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"Commands")," \u83dc\u5355\u5e76\u4e14\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"layout")," (\u8fd9\u91cc\u4e0d\u518d\u663e\u793a\u4f60\u5df2\u7ecf\u6fc0\u6d3b\u7684\u9009\u9879)\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6a2a\u5411\u9762\u677f\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7eb5\u5411\u9762\u677f\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u52a8\u9762\u677f\u5e03\u5c40")),(0,l.kt)("p",null,"\u8bd5\u8bd5\u770b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/layout.gif",alt:null})),(0,l.kt)("p",null,"\u8981\u8fbe\u5230\u8fd9\u4e00\u6548\u679c\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7528 dock \u76f8\u5173\u7684\u547d\u4ee4\uff0c\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"dock to left")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"dock to bottom")," \u8bd5\u8bd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/Dock-to-button.gif",alt:null})),(0,l.kt)("h3",{id:"4-\u5feb\u901f\u5207\u6362\u4e3b\u9898"},"4. \u5feb\u901f\u5207\u6362\u4e3b\u9898"),(0,l.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u5728\u7535\u8111\u524d\u4e00\u5750\u5c31\u662f\u4e00\u5929\uff0c\u4f60\u80fd\u5fcd\u53d7\u4e00\u76f4\u770b\u7740\u767d\u95ea\u95ea\u7684\u5c4f\u5e55\u5417\uff1f"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Commands")," \u83dc\u5355\u4e2d\u5bfb\u627e\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"theme")," \u76f8\u5173\u7684\u9009\u9879\uff0c\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u660e\u4eae")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6697\u9ed1")," \u4e24\u79cd\u4e3b\u9898\u4e4b\u95f4\u7684\u5207\u6362\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C02/theme.gif",alt:null})))}d.isMDXComponent=!0}}]);