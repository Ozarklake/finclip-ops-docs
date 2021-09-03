"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[925],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8286:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"\u4e1a\u52a1\u6570\u636e\u5b58\u50a8",author:"xulishan@finogeeks.com"},l=void 0,u={unversionedId:"infrastructure/mongo",id:"infrastructure/mongo",isDocsHomePage:!1,title:"\u4e1a\u52a1\u6570\u636e\u5b58\u50a8",description:"mongo",source:"@site/docs/infrastructure/04-mongo.md",sourceDirName:"infrastructure",slug:"/infrastructure/mongo",permalink:"/finclip-docs/docs/infrastructure/mongo",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u4e1a\u52a1\u6570\u636e\u5b58\u50a8",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u6cbb\u7406",permalink:"/finclip-docs/docs/infrastructure/consul"},next:{title:"\u5bf9\u8c61\u5b58\u50a8",permalink:"/finclip-docs/docs/infrastructure/minio"}},p=[{value:"mongo",id:"mongo",children:[]},{value:"mongo\u526f\u672c\u96c6",id:"mongo\u526f\u672c\u96c6",children:[]},{value:"mongo\u8fd0\u7ef4",id:"mongo\u8fd0\u7ef4",children:[]},{value:"\u6269\u5bb9\u7f29\u5bb9",id:"\u6269\u5bb9\u7f29\u5bb9",children:[]},{value:"\u5907\u4efd\u6062\u590d",id:"\u5907\u4efd\u6062\u590d",children:[]}],s={toc:p};function m(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"mongo"},"mongo"),(0,i.kt)("p",null,"\u2003","FinClip\u4e1a\u52a1\u6570\u636e\u5b58\u50a8\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u901a\u5e38\u6211\u4eec\u91c7\u7528MongoDB\u4f5c\u4e3a\u4e3b\u8981\u7684\u5b58\u50a8\u65b9\u6848\uff0cMongoDB \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206 \u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\uff0c\u7531 C++ \u8bed\u8a00\u7f16\u5199\uff0c\u65e8\u5728\u4e3a WEB \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u4e14\u652f\u6301\u591a \u673a\u623f\u90e8\u7f72\u3002 \u5728\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5ba2\u6237\u4f7f\u7528MongoDB\u7684\u526f\u672c\u96c6\u3001\u5206\u7247\u6a21\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u53ef\u6269\u5c55\u3001\u9ad8\u53ef\u7528\u7684\u8fd0\u7ef4\u9700 \u6c42\u3002"),(0,i.kt)("h3",{id:"mongo\u526f\u672c\u96c6"},"mongo\u526f\u672c\u96c6"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mongo",src:t(2398).Z})),(0,i.kt)("p",null,"\u526f\u672c\u96c6\u662f\u4e00\u7ec4\u7ef4\u62a4\u76f8\u540c\u6570\u636e\u96c6\u5408\u7684 mongod\u5b9e\u4f8b\u3002\u526f\u672c\u96c6\u5305\u542b\u591a\u4e2a\u6570\u636e\u627f\u8f7d\u8282\u70b9\u548c\u4e00\u4e2a\u53ef\u9009\u7684\u4ef2\u88c1\u8282\u70b9\u3002\u5728\u6570\u636e\u627f\u8f7d\u8282\u70b9\u4e2d\uff0c\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u6210\u5458\u4e3a\u4e3b\u8282\u70b9\uff0c\u5176\u4ed6\u8282\u70b9\u4e3a\u4ece\u8282\u70b9\u3002"),(0,i.kt)("h3",{id:"mongo\u8fd0\u7ef4"},"mongo\u8fd0\u7ef4"),(0,i.kt)("p",null,"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rs.status();\n")),(0,i.kt)("p",null,"\u67e5\u770b\u6267\u884c\u64cd\u4f5c\u65f6\u95f4\u8f83\u957f\u7684\u52a8\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'db.currentOp({"active" : true,"secs_running" : { "$gt" : 2000 }});\n')),(0,i.kt)("h3",{id:"\u6269\u5bb9\u7f29\u5bb9"},"\u6269\u5bb9\u7f29\u5bb9"),(0,i.kt)("p",null,"\u8fdb\u5165\u590d\u5236\u96c6\u7684\u4e3b\u8282\u70b9\uff0c\u6267\u884c\u6dfb\u52a0\u65b0\u7684\u8282\u70b9\u547d\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'rs.add("hostNameNew:portNew"); \n')),(0,i.kt)("p",null,"\u7b49\u5f85\u6240\u6709\u6210\u5458\u6062\u590d\u6b63\u5e38,\u68c0\u6d4b\u6210\u5458\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rs.status();\n")),(0,i.kt)("p",null,"\u79fb\u9664\u539f\u6765\u7684\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'rs.remove("hostNameOld>:portOld"); \n')),(0,i.kt)("h3",{id:"\u5907\u4efd\u6062\u590d"},"\u5907\u4efd\u6062\u590d"),(0,i.kt)("p",null,"\u5907\u4efd\uff1amongodump --d ${db} -o ./backup/\n\u6062\u590d\uff1amongorestore  -d ${db} ./${db}/${db}"))}m.isMDXComponent=!0},2398:function(e,n,t){n.Z=t.p+"assets/images/mongo-b1062224409192ed2f0e71a1ec8621b1.png"}}]);