"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[925],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(n),N=r,c=d["".concat(i,".").concat(N)]||d[N]||u[N]||l;return n?a.createElement(c,o(o({ref:e},k),{},{components:n})):a.createElement(c,o({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8286:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return k},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],p={title:"\u6570\u636e\u5b58\u50a8",author:"xulishan@finogeeks.com"},i="\u6570\u636e\u5b58\u50a8",m={unversionedId:"infrastructure/mongo",id:"infrastructure/mongo",isDocsHomePage:!1,title:"\u6570\u636e\u5b58\u50a8",description:"FinClip \u6570\u636e\u5b58\u50a8\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u901a\u5e38\u6211\u4eec\u91c7\u7528 MongoDB \u4f5c\u4e3a\u4e3b\u8981\u7684\u5b58\u50a8\u65b9\u6848\uff0cMongoDB \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206 \u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\uff0c\u7531 C++ \u8bed\u8a00\u7f16\u5199\uff0c\u65e8\u5728\u4e3a WEB \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u4e14\u652f\u6301\u591a \u673a\u623f\u90e8\u7f72\u3002 \u5728\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5ba2\u6237\u4f7f\u7528 MongoDB \u7684\u526f\u672c\u96c6\u3001\u5206\u7247\u6a21\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u53ef\u6269\u5c55\u3001\u9ad8\u53ef\u7528\u7684\u8fd0\u7ef4\u9700 \u6c42\u3002",source:"@site/docs/infrastructure/04-mongo.md",sourceDirName:"infrastructure",slug:"/infrastructure/mongo",permalink:"/docs/infrastructure/mongo",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u5b58\u50a8",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u6cbb\u7406",permalink:"/docs/infrastructure/consul"},next:{title:"\u6587\u4ef6\u5b58\u50a8",permalink:"/docs/infrastructure/minio"}},k=[{value:"\u90e8\u7f72\u67b6\u6784",id:"\u90e8\u7f72\u67b6\u6784",children:[{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",children:[]},{value:"\u6570\u636e\u76ee\u5f55",id:"\u6570\u636e\u76ee\u5f55",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[]}]},{value:"\u72b6\u6001\u68c0\u67e5",id:"\u72b6\u6001\u68c0\u67e5",children:[]},{value:"\u8282\u70b9\u589e\u3001\u5220",id:"\u8282\u70b9\u589e\u5220",children:[]},{value:"\u6570\u636e\u5bfc\u51fa\u3001\u6062\u590d",id:"\u6570\u636e\u5bfc\u51fa\u6062\u590d",children:[]},{value:"\u5e38\u89c1\u707e\u96be\u573a\u666f",id:"\u5e38\u89c1\u707e\u96be\u573a\u666f",children:[]}],u={toc:k};function d(t){var e=t.components,p=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5b58\u50a8"},"\u6570\u636e\u5b58\u50a8"),(0,l.kt)("p",null,"FinClip \u6570\u636e\u5b58\u50a8\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u901a\u5e38\u6211\u4eec\u91c7\u7528 MongoDB \u4f5c\u4e3a\u4e3b\u8981\u7684\u5b58\u50a8\u65b9\u6848\uff0cMongoDB \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206 \u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\uff0c\u7531 C++ \u8bed\u8a00\u7f16\u5199\uff0c\u65e8\u5728\u4e3a WEB \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u4e14\u652f\u6301\u591a \u673a\u623f\u90e8\u7f72\u3002 \u5728\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5ba2\u6237\u4f7f\u7528 MongoDB \u7684\u526f\u672c\u96c6\u3001\u5206\u7247\u6a21\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u53ef\u6269\u5c55\u3001\u9ad8\u53ef\u7528\u7684\u8fd0\u7ef4\u9700 \u6c42\u3002"),(0,l.kt)("h2",{id:"\u90e8\u7f72\u67b6\u6784"},"\u90e8\u7f72\u67b6\u6784"),(0,l.kt)("p",null,"MongoDB \u7684\u62d3\u6251\u56fe\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mongo",src:n(2398).Z})),(0,l.kt)("h3",{id:"\u670d\u52a1\u914d\u7f6e"},"\u670d\u52a1\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8282\u70b9\uff08Replica\uff09"),"\uff1a\u6b64\u4e2d\u95f4\u4ef6\u9ed8\u8ba4\uff08\u6700\u4f4e\uff09\u4ea4\u4ed8\u72b6\u6001\u4e0b\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u4e09\u526f\u672c\u96c6"),"\u90e8\u7f72\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u76ee\u5f55"},"\u6570\u636e\u76ee\u5f55"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u8ba1\u7528\u9014"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/mongo")))),(0,l.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e95\u5c42"),"\uff1a\u6b64\u4e2d\u95f4\u4ef6\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u542f\u52a8\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u57fa\u4e8e docker0 \u865a\u62df\u7f51\u5361\u8fdb\u884c\u901a\u4fe1\uff0c\u56e0\u6b64\u672c\u4e2d\u95f4\u4ef6\u5728\u6240\u6709\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u5747\u901a\u8fc7 docker0 \u7f51\u5361\u5212\u5206\u51fa\u7684\u5b50\u7f51\u8fdb\u884c\u901a\u4fe1\uff0c\u5e76\u4e14\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--network=host"),"  \u914d\u7f6e\u8fd0\u884c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b50\u7f51\u7f51\u6bb5\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ifconfig docker0")," \u8fdb\u884c\u786e\u8ba4\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u5c42"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u8ba1\u7528\u9014"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"27017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"9216")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"27017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"9216")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"27017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"9216")))),(0,l.kt)("h2",{id:"\u72b6\u6001\u68c0\u67e5"},"\u72b6\u6001\u68c0\u67e5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 MongoDB \u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"docker exec -it mongo bash")," \u8fdb\u5165\u5bb9\u5668"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5bb9\u5668\u4e2d\u7684 Shell \u6267\u884c mongo\uff0c\u786e\u8ba4\u547d\u4ee4\u884c\u5934\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"rs0:PROMARY> "),"\uff0c\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"rs0:SECONDARY> ")," \u5219\u6362\u53e6\u4e00\u53f0\u90e8\u7f72\u4e86 MongoDB \u7684\u670d\u52a1\u5668\uff0c\u91cd\u590d\u6b65\u9aa4 1 \u4e0e\u6b65\u9aa4 2\uff0c\u76f4\u5230\u547d\u4ee4\u884c\u5934\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"rs0:PROMARY> "),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"use admin")," \u5207\u6362\u5230 admin \u5e93\uff0c\u7136\u540e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"db.auth('<\u7528\u6237\u540d>','<\u5bc6\u7801>')")," \u4f7f\u7528\u9ad8\u6743\u9650\u8d26\u53f7\u767b\u5f55\u5230\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"rs.status();")," \u786e\u8ba4\u96c6\u7fa4\u72b6\u6001")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u901a\u8fc7\u4e0b\u5217\u547d\u4ee4\u67e5\u8be2\u6162 SQL \u6216\u64cd\u4f5c\u65f6\u95f4\u8fc7\u957f\u7684\u52a8\u4f5c"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},'db.currentOp({"active" : true,"secs_running" : { "$gt" : 2000 }});'))),(0,l.kt)("h2",{id:"\u8282\u70b9\u589e\u5220"},"\u8282\u70b9\u589e\u3001\u5220"),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u589e\u8282\u70b9"),"\uff1a\u82e5\u9700\u8981\u65b0\u589e\u8282\u70b9\uff0c\u8bf7\u4f9d\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u65b0\u8282\u70b9\u5df2\u7ecf\u5b89\u88c5\u597d Docker 19.03 \u6216\u66f4\u9ad8\u7248\u672c\u3001\u5df2\u7ecf\u5b89\u88c5\u597d docker-compose 1.27 \u6216\u66f4\u9ad8\u7248\u672c"),(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u65b0\u8282\u70b9\u5bf9\u4e8e\u5f53\u524d MongoDB \u6240\u5728\u7684",(0,l.kt)("strong",{parentName:"li"},"\u6240\u6709\u670d\u52a1\u5668"),"\u7684 27017\u30019216 \u5747\u4e3a\u4e92\u76f8\u53ef\u8fbe\u72b6\u6001"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u65e7\u670d\u52a1\u5668\u7684 \u201c\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55\u201d \u4e2d\u590d\u5236 conf \u6587\u4ef6\u5939\u7684 mongo.conf \u6587\u4ef6\u5230\u65b0\u670d\u52a1\u5668\u7684\u540c\u540d\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u65e7\u670d\u52a1\u5668\u7684 \u201cdocker-compose \u6587\u4ef6\u76ee\u5f55\u201c \u590d\u5236 docker-compose.yaml \u5230\u65b0\u670d\u52a1\u5668\u7684\u540c\u540d\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," \u542f\u52a8\u65b0 MongoDB \u5b9e\u4f8b"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u65e7\u96c6\u7fa4\u7684 PRIMARY \u8282\u70b9\u4e0a\uff0c\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},'rs.add("<\u65b0\u670d\u52a1\u5668IP>:<\u7aef\u53e3>");')),(0,l.kt)("li",{parentName:"ol"},"\u7a0d\u7b49\u4e00\u4f1a\u513f\uff0c\u518d\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"rs.status();")," \u786e\u8ba4\u96c6\u7fa4\u72b6\u6001")),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664\u8282\u70b9"),"\uff1a\u82e5\u9700\u8981\u79fb\u9664\u8282\u70b9\uff0c\u8bf7\u4f9d\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230\u96c6\u7fa4\u7684 PRIMARY \u8282\u70b9\u4e0a\uff0c\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},'rs.remove("<\u9700\u8981\u79fb\u9664\u7684\u670d\u52a1\u5668IP>:<\u7aef\u53e3>");')),(0,l.kt)("li",{parentName:"ol"},"\u7a0d\u7b49\u4e00\u4f1a\u513f\uff0c\u518d\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"rs.status();")," \u786e\u8ba4\u96c6\u7fa4\u72b6\u6001")),(0,l.kt)("h2",{id:"\u6570\u636e\u5bfc\u51fa\u6062\u590d"},"\u6570\u636e\u5bfc\u51fa\u3001\u6062\u590d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u4e00\uff1a\u76f4\u63a5\u5b58\u6863\u6570\u636e\u76ee\u5f55"),(0,l.kt)("p",{parentName:"li"},"MongoDB \u5728\u542f\u52a8\u65f6\u652f\u6301\u81ea\u52a8\u8f7d\u5165\u65e7\u6570\u636e\uff0c\u5f53\u90e8\u7f72\u670d\u52a1\u5668\u7684 IP \u4e0d\u5b58\u5728\u53d8\u52a8\u7684\u60c5\u51b5\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u9488\u5bf9\u6570\u636e\u76ee\u5f55\u8fdb\u884c\u538b\u7f29\u5b58\u6863\u7684\u65b9\u5f0f\u4fdd\u5b58\u6570\u636e\u5e93\uff1b\u82e5\u5b58\u5728 IP \u53d8\u52a8\u3001\u8282\u70b9\u65b0\u589e\u6216\u51cf\u5c11\uff0c\u4e5f\u4ecd\u7136\u53ef\u6309\u7167\u6b64\u65b9\u6cd5\u5206\u522b\u653e\u7f6e\u4e3b\u5e93\u4e0e\u4ece\u5e93\u7684\u6570\u636e\u5b58\u6863\u5230\u76f8\u5e94\u76ee\u5f55\uff0c\u4f46\u9700\u8981\u91cd\u65b0\u9488\u5bf9\u6570\u636e\u5e93\u7684\u96c6\u7fa4\u4fe1\u606f\u8fdb\u884c\u4fee\u6539\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u4e8c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"mongodump")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mongorestore")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"mongodump")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"mongorestore")," \u547d\u4ee4\u53ef\u80fd\u4f1a\u968f\u7740\u7248\u672c\u53d8\u5316\u5b58\u5728\u5dee\u5f02\uff0c\u8bf7\u4ee5\u5b98\u65b9\u6587\u6863\u4e3a\u51c6")),(0,l.kt)("p",{parentName:"li"},"\u90e8\u7f72\u6240\u4f7f\u7528\u5230\u7684 MongoDB \u955c\u50cf\u4e2d\u9ed8\u8ba4\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"mongodump")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"mongorestore")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u6574\u4e2a\u96c6\u7fa4\uff08\u5305\u62ec\u4ece\u5e93\uff09\u8fdb\u884c\u5168\u91cf dump \u5907\u4efd\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'mongodump -u <\u7528\u6237\u540d> -p <\u5bc6\u7801> -h "rs0/<\u4e3b\u5e93IP>:<\u7aef\u53e3>,<\u4ece\u5e931IP>:<\u7aef\u53e3>,<\u4ece\u5e932IP>:<\u7aef\u53e3>" --oplog -o /<\u6587\u4ef6>/<\u8f93\u51fa>/<\u8def\u5f84>\n')),(0,l.kt)("p",{parentName:"li"},"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-u"),"\uff1a\u7528\u6237\u540d"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-p"),"\uff1a\u5bc6\u7801"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-h"),"\uff1a\u6570\u636e\u5e93\u8bbf\u95ee\u5730\u5740\uff0c\u56e0\u4e3a\u662f\u9488\u5bf9\u96c6\u7fa4 dump\uff0c\u6240\u4ee5\u5fc5\u987b\u8981\u5e26\u4e0a ReplicaSet Name \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"rs0"),"\uff0c\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"<\u5e93IP>:<\u7aef\u53e3>")," \u7684\u5177\u4f53\u53c2\u6570\u8bf7\u4f9d\u636e\u4f60\u5f53\u524d\u7684\u7f51\u7edc\u73af\u5883\u8fdb\u884c\u4fee\u6539\u3002\u5982\u679c\u662f\u5bb9\u5668\u5185 dump\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 DNS Name\uff0c\u6bd4\u5982 \u201cmongo-cluster-0.storage.svc.cluster.local\u201d\uff0c\u5728\u5bb9\u5668\u5916\u5219\u9700\u8981\u4f7f\u7528\u5177\u4f53\u7684 \u201cPOD IP\u201d\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--oplog"),"\uff1a\u662f\u5426\u542f\u7528 oplog \u6765\u5bf9\u6570\u636e\u5e93\u505a\u70b9\u5bf9\u70b9\u7684\u955c\u50cf"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-o"),"\uff1a\u8f93\u51fa\u5230\u6587\u4ef6\uff0c\u8bf7\u6ce8\u610f\u5bb9\u5668\u5185\u8f93\u51fa\u5bf9\u5199\u5165\u76ee\u5f55\u6709\u6743\u9650\u4e0a\u7684\u9650\u5236\uff0c\u53ea\u80fd\u8f93\u51fa\u5230 log \u6587\u4ef6\u5939"))),(0,l.kt)("p",null,"  \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u6574\u4e2a\u96c6\u7fa4\uff08\u5305\u62ec\u4ece\u5e93\uff09\u8fdb\u884c\u6570\u636e\u6062\u590d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mongorestore -u <\u7528\u6237\u540d> -p <\u5bc6\u7801> -h "rs0/<\u4e3b\u5e93IP>:<\u7aef\u53e3>,<\u4ece\u5e931IP>:<\u7aef\u53e3>,<\u4ece\u5e932IP>:<\u7aef\u53e3>" --oplogReplay /<\u6587\u4ef6>/<\u8f93\u51fa>/<\u8def\u5f84>\n')),(0,l.kt)("h2",{id:"\u5e38\u89c1\u707e\u96be\u573a\u666f"},"\u5e38\u89c1\u707e\u96be\u573a\u666f"),(0,l.kt)("p",null,"MongoDB \u9ed8\u8ba4\u72b6\u6001\u4e0b\u4e3a\u591a\u70b9\u4e3b\u4ece\u5f0f\u90e8\u7f72\uff0c\u82e5\u5176\u4e2d\u4e3b\u8282\u70b9\u6545\u969c\u4e0b\u7ebf\uff0c\u5fc3\u8df3\u68c0\u6d4b\u5931\u8d25\u540e\u4f1a\u81ea\u52a8\u5728\u4ece\u8282\u70b9\u4e2d\u9009\u4e3e\u51fa\u65b0\u7684\u4e3b\u8282\u70b9\uff0c\u5b9e\u73b0\u6545\u969c\u8f6c\u79fb\uff1b\u5f53\u4e0b\u7ebf\u7684\u4e3b\u8282\u70b9\u6062\u590d\u4e0a\u7ebf\u65f6\uff0c\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u4ece\u8282\u70b9\u6a21\u5f0f\u3002\u53ea\u8981\u4fdd\u8bc1\u63d0\u4f9b\u4e00\u5b9a\u6570\u91cf\u7684\u4ece\u8282\u70b9\uff0c\u5219\u96c6\u7fa4\u5c31\u80fd\u62e5\u6709\u4e00\u5b9a\u80fd\u529b\u7684\u6545\u969c\u8f6c\u79fb\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u82e5\u53d1\u751f\u6570\u636e\u5e93\u6240\u6709\u8282\u70b9\u5168\u90e8\u762b\u75ea\u7684\u60c5\u51b5\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u6570\u636e\u5e93\u91cd\u65b0\u90e8\u7f72\u6d41\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5305\u5e76\u5b58\u6863\u6570\u636e\u5e93\u76ee\u5f55\u3001\u6570\u636e\u5e93\u914d\u7f6e\uff1b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6b64\u65f6\u4e1a\u52a1\u670d\u52a1\u5df2\u7ecf\u65e0\u6cd5\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u4efb\u4f55\u5199\u5165\u4e86\uff0c\u53ef\u4ee5\u6682\u505c\u751f\u4ea7\u4e0a\u7684\u6240\u6709\u670d\u52a1\uff1b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e25\u683c\u6309\u7167\u8def\u5f84\u3001\u6587\u4ef6\u6743\u9650\u8bbe\u7f6e\uff0c\u5c06\u6570\u636e\u76ee\u5f55\u4e0e\u5fc5\u8981\u6587\u4ef6\u4e0a\u4f20\u5e76\u6062\u590d\u5230\u65b0\u7684\u670d\u52a1\u5668\u4e0a\uff1b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u65b0\u670d\u52a1\u5668\u4e0a\u91cd\u65b0\u6267\u884c docker-compose \u62c9\u8d77\u6570\u636e\u5e93\uff1b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u542f\u52a8\u540e\uff0c\u5728\u6240\u6709 MongoDB \u8282\u70b9\u4e0a\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c IP \u53d8\u66f4\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'1. \u767b\u5165 mongoCLI\n    # mongo -u <\u7528\u6237\u540d> -p <\u5bc6\u7801>\n    \n2. \u8fdb\u5165 local \u5e93\n    > use local\n    \n3. \u786e\u8ba4\u4e3b\u4ece\u914d\u7f6e\n    > db.system.replset,find()\n| \u5982\u679c\u6b64\u6761\u547d\u4ee4\u62a5\u9274\u6743\u5931\u8d25\uff0c\u8bf7\u5207\u6362\u5230 admin \u5e93\uff0c\u6267\u884c db.grantRolesToUser("admin(\u6216\u4efb\u4f55\u7528\u6237)", [{role: "clusterAdmin", db: "admin"}])\n\n4. \u66f4\u6539\u96c6\u7fa4 IP \u914d\u7f6e\n    > db.system.replset.update({\u201chost\u201d: "${oldIP}:${port}"},{$set:{"${host}": "${newIP}:${port}"}})\n    \n5. \u91cd\u542f\u6570\u636e\u5e93\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6838\u67e5\u542f\u52a8\u65e5\u5fd7\uff0c\u786e\u4fdd\u6b63\u5e38\u542f\u52a8\uff1b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u4e1a\u52a1\u670d\u52a1\u4e2d\u7684 MongoDB \u8fde\u63a5\u5730\u5740\uff0c\u6307\u5411\u5230\u65b0\u7684\u670d\u52a1\u5668\u4e0a\u3002"))))}d.isMDXComponent=!0},2398:function(t,e,n){e.Z=n.p+"assets/images/mongo-b1062224409192ed2f0e71a1ec8621b1.png"}}]);