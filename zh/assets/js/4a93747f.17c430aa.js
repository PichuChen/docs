"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[596],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,d=k["".concat(c,".").concat(m)]||k[m]||p[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),l=r(941),o=r(4996),c=["components"],s={title:"\u67b6\u6784",weight:1},u=void 0,p={unversionedId:"architecture/architecture",id:"architecture/architecture",title:"\u67b6\u6784",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/architecture.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/zh/architecture/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture/architecture.md",tags:[],version:"current",lastUpdatedAt:1677696435,formattedLastUpdatedAt:"2023\u5e743\u67081\u65e5",frontMatter:{title:"\u67b6\u6784",weight:1},sidebar:"mySidebar",previous:{title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes",permalink:"/zh/"},next:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/quick-start/"}},k={},m=[{value:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e",id:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e",level:3},{value:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s Server",id:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528-k3s-server",level:3},{value:"Agent \u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740",id:"agent-\u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740",level:3},{value:"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406",id:"agent-\u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u81ea\u52a8\u90e8\u7f72\u7684\u6e05\u5355",id:"\u81ea\u52a8\u90e8\u7f72\u7684\u6e05\u5355",level:3}],d={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u8fd8\u63cf\u8ff0\u4e86 Agent \u8282\u70b9\u662f\u5982\u4f55\u6ce8\u518c\u5230 K3s Server \u7684\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Server \u8282\u70b9\u6307\u7684\u662f\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"k3s server")," \u547d\u4ee4\u7684\u4e3b\u673a\uff0ccontrol plane \u548c\u6570\u636e\u5b58\u50a8\u7ec4\u4ef6\u7531 K3s \u7ba1\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"Agent \u8282\u70b9\u6307\u7684\u662f\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"k3s agent")," \u547d\u4ee4\u7684\u4e3b\u673a\uff0c\u4e0d\u5177\u6709\u4efb\u4f55\u6570\u636e\u5b58\u50a8\u6216 control plane \u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"Server \u548c Agent \u90fd\u8fd0\u884c kubelet\u3001\u5bb9\u5668\u8fd0\u884c\u65f6\u548c CNI\u3002\u6709\u5173\u8fd0\u884c\u65e0 Agent \u7684 Server \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/advanced/#%E8%BF%90%E8%A1%8C%E6%97%A0-agent-%E7%9A%84-server%E5%AE%9E%E9%AA%8C%E6%80%A7"},"\u9ad8\u7ea7\u9009\u9879"),"\u3002")),(0,i.kt)("p",null,"\u672c\u6587\u6db5\u76d6\u4ee5\u4e0b\u4e3b\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%B8%A6%E6%9C%89%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%8D%95%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%AE%BE%E7%BD%AE"},"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%85%B7%E6%9C%89%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E9%AB%98%E5%8F%AF%E7%94%A8-k3s-server"},"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s Server"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#agent-%E8%8A%82%E7%82%B9%E7%9A%84%E5%9B%BA%E5%AE%9A%E6%B3%A8%E5%86%8C%E5%9C%B0%E5%9D%80"},"Agent \u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#agent-%E8%8A%82%E7%82%B9%E6%B3%A8%E5%86%8C%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E7%9A%84%E6%B8%85%E5%8D%95"},"\u81ea\u52a8\u90e8\u7f72\u7684\u6e05\u5355"))),(0,i.kt)("h3",{id:"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e"},"\u5e26\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u5355\u670d\u52a1\u5668\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u5177\u6709\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u7684\u5355\u8282\u70b9 K3s Server \u96c6\u7fa4\u793a\u4f8b\u3002"),(0,i.kt)("p",null,"\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a Agent \u8282\u70b9\u90fd\u6ce8\u518c\u5230\u540c\u4e00\u4e2a Server \u8282\u70b9\u3002K3s \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 Server \u8282\u70b9\u4e0a\u7684 K3s API \u6765\u64cd\u4f5c Kubernetes \u8d44\u6e90\u3002"),(0,i.kt)(l.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,o.Z)("/img/k3s-architecture-single-server.svg"),dark:(0,o.Z)("/img/k3s-architecture-single-server-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528-k3s-server"},"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s Server"),(0,i.kt)("p",null,"\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u53ef\u4ee5\u6ee1\u8db3\u5404\u79cd\u7528\u4f8b\uff0c\u4f46\u5982\u679c\u4f60\u7684\u73af\u5883\u5bf9 Kubernetes control plane \u7684\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4\u6709\u8981\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728 HA \u914d\u7f6e\u4e2d\u8fd0\u884c K3s\u3002\u4e00\u4e2a HA K3s \u96c6\u7fa4\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6216\u591a\u4e2a ",(0,i.kt)("strong",{parentName:"li"},"Server \u8282\u70b9"),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u5b58\u50a8"),"\uff08\u4e0e\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\u4f7f\u7528\u7684\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5b58\u50a8\u76f8\u53cd\uff09")),(0,i.kt)(l.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,o.Z)("/img/k3s-architecture-ha-server.svg"),dark:(0,o.Z)("/img/k3s-architecture-ha-server-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"agent-\u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"},"Agent \u8282\u70b9\u7684\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"),(0,i.kt)("p",null,"\u5728 HA \u670d\u52a1\u5668\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u8fd8\u5fc5\u987b\u4f7f\u7528\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740\u5411 Kubernetes API \u6ce8\u518c\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("p",null,"\u6ce8\u518c\u540e\uff0cAgent \u8282\u70b9\u76f4\u63a5\u4e0e\u5176\u4e2d\u4e00\u4e2a Server \u8282\u70b9\u5efa\u7acb\u8fde\u63a5\u3002"),(0,i.kt)(l.Z,{alt:"Agent Registration HA",sources:{light:(0,o.Z)("/img/k3s-production-setup.svg"),dark:(0,o.Z)("/img/k3s-production-setup-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"agent-\u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406"},"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"Agent \u8282\u70b9\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s agent")," \u8fdb\u7a0b\u53d1\u8d77\u7684 WebSocket \u8fde\u63a5\u8fdb\u884c\u6ce8\u518c\uff0c\u8fde\u63a5\u7531\u4f5c\u4e3a agent \u8fdb\u7a0b\u4e00\u90e8\u5206\u8fd0\u884c\u7684\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7ef4\u62a4\u3002"),(0,i.kt)("p",null,"Agent \u5c06\u4f7f\u7528\u8282\u70b9\u96c6\u7fa4 Secret \u4ee5\u53ca\u968f\u673a\u751f\u6210\u7684\u8282\u70b9\u5bc6\u7801\u6ce8\u518c\u5230 Server\uff0c\u5bc6\u7801\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/password")," \u4e2d\u3002Server \u4f1a\u5c06\u5404\u4e2a\u8282\u70b9\u7684\u5bc6\u7801\u5b58\u50a8\u4e3a Kubernetes Secret\uff0c\u540e\u7eed\u7684\u4efb\u4f55\u5c1d\u8bd5\u90fd\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u7801\u3002\u8282\u70b9\u5bc6\u7801 Secret \u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u540d\u79f0\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>.node-password.k3s")," \u6a21\u677f\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5728 K3s v1.20.2 \u4e4b\u524d\uff0cServer \u5c06\u5bc6\u7801\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/cred/node-passwd")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u5982\u679c Agent \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node")," \u76ee\u5f55\u88ab\u5220\u9664\uff0c\u4f60\u9700\u8981\u4e3a Agent \u91cd\u65b0\u521b\u5efa\u5bc6\u7801\u6587\u4ef6\uff0c\u6216\u8005\u4ece Server \u4e2d\u5220\u9664\u8be5\u6761\u76ee\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-node-id")," \u6807\u5fd7\u542f\u52a8 K3s Server \u6216 Agent\uff0c\u53ef\u4ee5\u5c06\u552f\u4e00\u8282\u70b9 ID \u9644\u52a0\u5230\u4e3b\u673a\u540d\u3002"),(0,i.kt)("h3",{id:"\u81ea\u52a8\u90e8\u7f72\u7684\u6e05\u5355"},"\u81ea\u52a8\u90e8\u7f72\u7684\u6e05\u5355"),(0,i.kt)("p",null,"\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u8def\u5f84\u4e0b\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/tree/master/manifests"},"\u6e05\u5355"),"\u5728\u6784\u5efa\u65f6\u88ab\u6346\u7ed1\u5230 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5c06\u7531 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller#helm-controller"},"rancher/helm-controller")," \u5728\u8fd0\u884c\u65f6\u5b89\u88c5\u3002"))}g.isMDXComponent=!0}}]);