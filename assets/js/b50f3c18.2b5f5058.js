"use strict";(self.webpackChunkwingman_website=self.webpackChunkwingman_website||[]).push([[2579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u81ea\u5b9a\u4e49\u683c\u5f0f\u8f6c\u6362\u5668",open:!0},l=void 0,i={unversionedId:"chrome-tricks/Console/formatInConsole",id:"chrome-tricks/Console/formatInConsole",title:"\u81ea\u5b9a\u4e49\u683c\u5f0f\u8f6c\u6362\u5668",description:"\u6709\u6ca1\u6709\u60f3\u8fc7\uff0c\u5728 Chrome \u4e2d\u7528\u81ea\u5df1\u5b9a\u4e49\u7684\u683c\u5f0f\u6765\u6253\u5370\u4e00\u4e2a\u5bf9\u8c61\u5462?",source:"@site/docs/chrome-tricks/02-Console/05-formatInConsole.md",sourceDirName:"chrome-tricks/02-Console",slug:"/chrome-tricks/Console/formatInConsole",permalink:"/daydream/docs/chrome-tricks/Console/formatInConsole",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u81ea\u5b9a\u4e49\u683c\u5f0f\u8f6c\u6362\u5668",open:!0},sidebar:"tutorialSidebar",previous:{title:"Ninja console.log",permalink:"/daydream/docs/chrome-tricks/Console/ninjaLog"},next:{title:"\u5bf9\u8c61&\u65b9\u6cd5",permalink:"/daydream/docs/chrome-tricks/Console/object&function"}},p={},m=[{value:"1. Custom Formatter",id:"1-custom-formatter",level:3},{value:"2. \u5e94\u7528\u5b9e\u8df5",id:"2-\u5e94\u7528\u5b9e\u8df5",level:3}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u95ee\u9898",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6709\u6ca1\u6709\u60f3\u8fc7\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Chrome")," \u4e2d\u7528\u81ea\u5df1\u5b9a\u4e49\u7684\u683c\u5f0f\u6765\u6253\u5370\u4e00\u4e2a\u5bf9\u8c61\u5462?")),(0,o.kt)("h3",{id:"1-custom-formatter"},"1. Custom Formatter"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u8f93\u51fa\u5bf9\u8c61\u7684\u51fd\u6570\uff0c\u88ab\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Formatter")," \u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f: \u5728\u6211\u4eec\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"DevTools")," \u8bbe\u7f6e (\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"DevTools")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," \u4e0b\u62c9\u6846\u627e\u5230\u8bbe\u7f6e\uff0c\u6216\u8005\u6309\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"F1")," ) \u4e2d\u628a\u5bf9\u5e94\u7684\u9009\u9879\u6253\u5f00:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/Custom_Formatter.gif",alt:null})),(0,o.kt)("p",null,"\u6211\u4eec\u8981\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"formatter")," \u662f\u4e00\u4e2a\u5305\u542b\u4e09\u4e2a\u65b9\u6cd5\u7684\u5bf9\u8c61\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"header")," : \u5904\u7406\u5982\u4f55\u5c55\u793a\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"console")," \u7684\u65e5\u5fd7\u4e2d\u7684\u4e3b\u8981\u90e8\u5206\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hasbody")," : \u5982\u679c\u4f60\u60f3\u663e\u793a\u4e00\u4e2a\u7528\u6765\u5c55\u5f00\u5bf9\u8c61\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"\u25b6")," \u7bad\u5934\uff0c\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"body")," : \u5b9a\u4e49\u5c06\u4f1a\u88ab\u663e\u793a\u5728\u5c55\u5f00\u90e8\u5206\u7684\u5185\u5bb9\u4e2d\u3002")),(0,o.kt)("p",null,"\u5199\u5b8c\u4e4b\u540e\u5927\u6982\u5c31\u662f\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.devtoolsFormatters = [{\n    header: function(obj){\n        return ['div',{},`${JSON.stringfy(obj, null, 7)}`]\n    },\n    hasBody: function(){\n        return false;\n    }\n}]\n")),(0,o.kt)("admonition",{title:"\u6572\u9ed1\u677f",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5b50\u91cc\u79fb\u9664\u4e86\u5faa\u73af\u7ed3\u6784\u7684\u9519\u8bef\u5904\u7406\uff0c\u8ba9\u5b83\u770b\u8d77\u6765\u66f4\u52a0\u7b80\u6d01")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"header")," \u65b9\u6cd5\u8fd4\u56de\u4e86\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"http://www.jsonml.org/"},"JsonML")," (\u6ce8\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonML")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Markup Language")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," \u6807\u8bb0\u8bed\u8a00) \u6570\u7ec4\uff0c\u7531\u8fd9\u4e9b\u7ec4\u6210\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u540d"),(0,o.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ol"},"\u5185\u5bb9 (\u6587\u672c\u503c\u6216\u8005\u5176\u4ed6\u5143\u7d20)")),(0,o.kt)("p",null,"(\u5982\u679c\u770b\u8d77\u6765\u5f88\u773c\u719f\u7684\u8bdd\uff0c\u90a3\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u4e4b\u524d\u5199\u8fc7\u4e00\u4e9b ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-without-jsx.html"},"React \u4ee3\u7801")," : D)"),(0,o.kt)("p",null,"\u5728\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u7b80\u5355\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"formatter")," \u5bf9\u4e8e\u6bcf\u4e00\u5c42\u5d4c\u5957\uff0c\u76f4\u63a5\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"7")," \u4e2a\u7a7a\u683c\u7684\u7f29\u8fdb\u6253\u5370\u8fd9\u4e2a\u5bf9\u8c61\u3002\u6240\u4ee5\u73b0\u5728\u6211\u4eec\u7684\u8f93\u51fa\u770b\u8d77\u6765\u662f\u8fd9\u6837\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/custom_formatter01.gif",alt:null})),(0,o.kt)("h3",{id:"2-\u5e94\u7528\u5b9e\u8df5"},"2. \u5e94\u7528\u5b9e\u8df5"),(0,o.kt)("p",null,"\u73b0\u6709\u597d\u51e0\u79cd ",(0,o.kt)("inlineCode",{parentName:"p"},"custom formatter")," \u53ef\u4f9b\u9009\u62e9\uff0c\u4f8b\u5982\uff1a\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/andrewdavey/immutable-devtools"},"immutable-devtools ")," \u4ed3\u5e93\u4e2d\u627e\u5230\u5bf9\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/immutable-js/"},"Immutable.js"),"  \u7ed3\u6784\u7684\u5b8c\u7f8e\u5c55\u793a\u3002"),(0,o.kt)("p",null,"\u5de5\u4f5c\u4e2d\u4f60\u9047\u5230\u7ed3\u6784\u4e0d\u5bfb\u5e38\u7684\u5bf9\u8c61\u65f6\uff0c\u6216\u5728\u5927\u91cf\u7684\u65e5\u5fd7(\u6700\u597d\u907f\u514d\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u4f46\u662f\u6709\u65f6\u5019\u5f88\u6709\u7528)\u4e2d\u53bb\u533a\u5206\u4e00\u4e9b\u5bf9\u8c61\u65f6\uff0c\u5c31\u53ef\u4ee5\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"custom formatter")," \u6765\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u5c0f\u7a8d\u95e8\uff1a\u5c06\u4f60\u4e0d\u5173\u5fc3\u7684\u5bf9\u8c61\u8fc7\u6ee4\u51fa\u6765\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," \u65b9\u6cd5\u91cc\u9762 ",(0,o.kt)("inlineCode",{parentName:"p"},"return null")," \u3002\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"DevTools")," \u4f7f\u7528\u9ed8\u8ba4\u7684\u683c\u5f0f\u5316\u65b9\u5f0f\u6765\u5904\u7406\u8fd9\u4e9b\u503c\u3002"),(0,o.kt)("p",null,"\u6487\u5f00\u5b9e\u7528\u6027\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u627e\u70b9\u4e50\u5b50\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"console.clown()")," : \u5c06\u6253\u5370\u5bf9\u8c61\u8fdb\u884c\u8f6c\u6362\uff0c\u800c\u4e14\u5728\u5bf9\u8c61\u524d\u9762\u52a0\u4e0a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"emoji")," \u8868\u60c5 ... "),(0,o.kt)("p",null,"\u6e90\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.devtoolsFormatters = [{\n    header: function(obj) {\n        if (!obj.__clown) {\n            return null;\n        }\n        delete obj.__clown;\n        const style = `\n        color: red;\n        border: dotted 2px gray;\n        border-radius: 4px;\n        padding: 5px;\n      `\n        const content = `\ud83e\udd21 ${JSON.stringify(obj, null, 2)}` ;\n\n        try {\n            return ['div', {\n                style\n            }, content]\n        } catch (err) { // for circular structures\n            return null; // use the default formatter\n        }\n    },\n    hasBody: function() {\n        return false;\n    }\n}]\n\nconsole.clown = function(obj) {\n    console.log({\n        ...obj,\n        __clown: true\n    });\n}\n\nconsole.log({\n    message: 'hello!'\n}); // normal log\nconsole.clown({\n    message: 'hello!'\n}); // a silly log\n")),(0,o.kt)("p",null,"\u5c31\u50cf\u4f60\u770b\u5230\u7684\u4e00\u6837\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"console.clown")," \u65b9\u6cd5\u6253\u5370\u51fa\u6765\u7684\u5bf9\u8c61\u88ab\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u5c5e\u6027\uff0c\u65b9\u4fbf\u6211\u4eec\u5c06\u5b83\u533a\u5206\u51fa\u6765\u3002"),(0,o.kt)("p",null,"\u5e73\u65f6\u81ea\u5df1\u7528\u7684\u8bdd\uff0c\u5efa\u8bae\u4f60\u8fd8\u662f\u8bbe\u7f6e\u4e00\u4e2a\u5224\u65ad\uff0c\u68c0\u67e5\u8fd9\u4e2a\u5bf9\u8c61\u662f\u4e0d\u662f\u67d0\u4e00\u4e2a\u7279\u6b8a\u7c7b\u7684\u5b9e\u4f8b\u7b49\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clown")," \u6253\u5370\u51fa\u6765\u4e86\u4ec0\u4e48\u4e1c\u897f\u5462\uff1f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://wingman-1300536089.file.myqcloud.com//chrome/C03/custom_result.png",alt:null})))}u.isMDXComponent=!0}}]);