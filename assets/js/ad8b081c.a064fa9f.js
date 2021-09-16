"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[764],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={slug:"frp",title:"frp\u5b9e\u73b0\u5185\u7f51\u7a7f\u900f",author:"yangyehong@finogeeks.com",author_title:"yehong",author_url:"https://github.com/yangyehong",author_image_url:"https://avatars.githubusercontent.com/u/31943904?v=4",tags:["frp","ops"]},l=void 0,c={permalink:"/blog/frp",editUrl:"https://github.com/finogeeks/finclip-ops-docs/blog/blog/2021-08-30-frp.md",source:"@site/blog/2021-08-30-frp.md",title:"frp\u5b9e\u73b0\u5185\u7f51\u7a7f\u900f",description:"\u9879\u76ee\u5730\u5740\uff1a",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"frp",permalink:"/blog/tags/frp"},{label:"ops",permalink:"/blog/tags/ops"}],readingTime:.55,truncated:!1,authors:[{name:"yangyehong@finogeeks.com",title:"yehong",url:"https://github.com/yangyehong",imageURL:"https://avatars.githubusercontent.com/u/31943904?v=4"}]},u={authorsImageUrls:[void 0]},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"1. \u4e0b\u8f7d\u5b89\u88c5\u5305\u3002",id:"1-\u4e0b\u8f7d\u5b89\u88c5\u5305",children:[]},{value:"2.\u670d\u52a1\u7aef\u914d\u7f6e",id:"2\u670d\u52a1\u7aef\u914d\u7f6e",children:[]},{value:"3.\u5ba2\u6237\u7aef\u914d\u7f6e",id:"3\u5ba2\u6237\u7aef\u914d\u7f6e",children:[]},{value:"4.\u9a8c\u8bc1",id:"4\u9a8c\u8bc1",children:[]}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u5730\u5740\uff1a")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/fatedier/frp"},"https://github.com/fatedier/frp")),(0,a.kt)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("p",null,"\u901a\u8fc7frp\uff0c\u4f7f\u5904\u4e8e\u5185\u7f51\u6216\u65e0\u56fa\u5b9a\u516c\u7f51ip\u7684\u673a\u5668\uff0c\u5bf9\u5916\u7f51\u73af\u5883\u63d0\u4f9b tcp \u548c udp \u670d\u52a1\uff0c\u4f8b\u5982\u5728\u5bb6\u91cc\u901a\u8fc7 ssh \u8bbf\u95ee\u5904\u4e8e\u516c\u53f8\u5185\u7f51\u73af\u5883\u5185\u7684\u4e3b\u673a"),(0,a.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"1. \u516c\u7f51\u670d\u52a1\u56681\u53f0 \uff08\u670d\u52a1\u7aef\uff09")),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"2. \u5185\u7f51\u7535\u8111 1 \u53f0 \uff08\u5ba2\u6237\u7aef\uff09")),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h3",{id:"1-\u4e0b\u8f7d\u5b89\u88c5\u5305"},"1. \u4e0b\u8f7d\u5b89\u88c5\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/fatedier/frp/releases"},"https://github.com/fatedier/frp/releases"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u90fd\u6267\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /opt/frp \n\ncd /opt/frp\n\nwget https://github.com/fatedier/frp/releases/download/v0.25.0/frp_0.25.0_linux_amd64.tar.gz\n\ntar -zxvf frp_0.25.0_linux_amd64.tar.gz\n")),(0,a.kt)("h3",{id:"2\u670d\u52a1\u7aef\u914d\u7f6e"},"2.\u670d\u52a1\u7aef\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./frps\nvi ./frps.ini\n\n[common]\nbind_port = 7000    #\u4e0e\u5ba2\u6237\u7aef\u7ed1\u5b9a\u7684\u8fdb\u884c\u901a\u4fe1\u7684\u7aef\u53e3\n\n#\u542f\u52a8\nnohup ./frps -c ./frps.ini &\n")),(0,a.kt)("h3",{id:"3\u5ba2\u6237\u7aef\u914d\u7f6e"},"3.\u5ba2\u6237\u7aef\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./frpc\nvi ./frpc.ini\n\n[common]\nserver_addr = 192.168.1.1  #\u670d\u52a1\u7aef\u5730\u5740\nserver_port = 7000             #\u5bf9\u5e94\u7aef\u53e3\n\n[ssh]\ntype = tcp                     #\u534f\u8bae\nlocal_ip = 127.0.0.1             #\u672c\u673aip\nlocal_port = 22                 #ssh\u9ed8\u8ba4\u7aef\u53e3\u53f7\nremote_port = 6000             #\u8fde\u63a5\u5ba2\u6237\u7aef\u7aef\u53e3\uff0c\u6ce8\u610f\u591a\u4e2a\u5ba2\u6237\u7aef\u65f6\u4e0d\u80fd\u76f8\u540c\n\n#\u542f\u52a8\nnohup ./frpc -c ./frpc.ini &\n")),(0,a.kt)("h3",{id:"4\u9a8c\u8bc1"},"4.\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u4e0a\u670d\u52a1\u7aef\u65f6\uff0c\u670d\u52a1\u7aef\u4f1a\u76d1\u542c\u5ba2\u6237\u7aef\u4e0a\u81ea\u5b9a\u4e49\u7684\u7aef\u53e3\u3002\u8bbf\u95ee\n\u670d\u52a1\u7aef\u5730\u5740 192.168.1.1 + \u81ea\u5b9a\u4e49\u7aef\u53e3 6000 \u5373\u53ef"))}m.isMDXComponent=!0}}]);