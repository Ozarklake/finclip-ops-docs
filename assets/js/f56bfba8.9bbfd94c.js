"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[614],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(r),k=a,m=s["".concat(u,".").concat(k)]||s[k]||l[k]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9812:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return p},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"\u6d88\u606f\u961f\u5217",author:"xulishan@finogeeks.com"},u="kafka",f={unversionedId:"infrastructure/kafka",id:"infrastructure/kafka",isDocsHomePage:!1,title:"\u6d88\u606f\u961f\u5217",description:"&emsp;\u5728\u9ad8\u5e76\u53d1\u7cfb\u7edf\u4e2d\uff0c\u4f7f\u7528\u6d88\u606f\u961f\u5217\u8fdb\u884c\u5f02\u6b65\u5904\u7406\u662f\u60ef\u7528\u7684\u6a21\u5f0f\u3002FinClip\u91c7\u7528Kafka\u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u4e2d\u95f4\u4ef6\uff0c\u57fa\u4e8e Kafka\u7684\u591a\u5206\u533a\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u541e\u5410\u91cf\u6d88\u606f\u961f\u5217\u7ba1\u7406\u3002Apache Kafka \u662f\u4e00\u4e2a\u5f00\u6e90\u5206\u5e03\u5f0f\u4e8b\u4ef6\u6d41\u5e73\u53f0\uff0c\u88ab\u6570\u5343\u5bb6 \u516c\u53f8\u7528\u4e8e\u9ad8\u6027\u80fd\u6570\u636e\u7ba1\u9053\u3001\u6d41\u5206\u6790\u3001\u6570\u636e\u96c6\u6210\u548c\u5173\u952e\u4efb\u52a1\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/infrastructure/06-kafka.md",sourceDirName:"infrastructure",slug:"/infrastructure/kafka",permalink:"/docs/infrastructure/kafka",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u6d88\u606f\u961f\u5217",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u8c61\u5b58\u50a8",permalink:"/docs/infrastructure/minio"},next:{title:"\u884c\u4e3a\u6570\u636e\u5b58\u50a8",permalink:"/docs/infrastructure/es"}},p=[],l={toc:p};function s(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka"},"kafka"),(0,o.kt)("p",null,"\u2003","\u5728\u9ad8\u5e76\u53d1\u7cfb\u7edf\u4e2d\uff0c\u4f7f\u7528\u6d88\u606f\u961f\u5217\u8fdb\u884c\u5f02\u6b65\u5904\u7406\u662f\u60ef\u7528\u7684\u6a21\u5f0f\u3002FinClip\u91c7\u7528Kafka\u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u4e2d\u95f4\u4ef6\uff0c\u57fa\u4e8e Kafka\u7684\u591a\u5206\u533a\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u541e\u5410\u91cf\u6d88\u606f\u961f\u5217\u7ba1\u7406\u3002Apache Kafka \u662f\u4e00\u4e2a\u5f00\u6e90\u5206\u5e03\u5f0f\u4e8b\u4ef6\u6d41\u5e73\u53f0\uff0c\u88ab\u6570\u5343\u5bb6 \u516c\u53f8\u7528\u4e8e\u9ad8\u6027\u80fd\u6570\u636e\u7ba1\u9053\u3001\u6d41\u5206\u6790\u3001\u6570\u636e\u96c6\u6210\u548c\u5173\u952e\u4efb\u52a1\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u2003","\u540c\u6837\u5730\uff0c\u5728\u751f\u4ea7\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u591a\u8282\u70b9\u90e8\u7f72Kafka\u96c6\u7fa4\uff0c\u4ece\u800c\u5b9e\u73b0\u9ad8\u541e\u5410\u91cf\u3001\u9ad8\u53ef\u7528\u5df2\u7ecf\u53ef\u6269\u5c55\u7684\u8fd0\u7ef4\u529f \u80fd:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kafka",src:r(6762).Z})))}s.isMDXComponent=!0},6762:function(e,t,r){t.Z=r.p+"assets/images/kafka-9c0c4c17fc1b874d6c4f2152dd03be93.png"}}]);