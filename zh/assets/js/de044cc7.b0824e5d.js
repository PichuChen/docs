"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[374],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,u(u({ref:t},c),{},{components:n})):a.createElement(b,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),u=n(2389),s=n(7392),o=n(7094),i=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,u=e.lazy,p=e.block,m=e.defaultValue,b=e.values,k=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),O=N.tabGroupChoices,w=N.setTabGroupChoices,E=(0,r.useState)(g),T=E[0],_=E[1],C=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=O[k];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&_(I)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(D(t),_(a),null!=k&&w(k,String(a)))},x=function(e){var t,n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var l,u=C.indexOf(e.currentTarget)-1;n=null!=(l=C[u])?l:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onClick:S},u,{className:(0,l.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,u.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),u=n(5488),s=n(5162),o=["components"],i={title:"Kubernetes \u4eea\u8868\u677f",weight:60},c=void 0,d={unversionedId:"installation/kube-dashboard",id:"installation/kube-dashboard",title:"Kubernetes \u4eea\u8868\u677f",description:"\u672c\u5b89\u88c5\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5728 K3s \u4e0a\u90e8\u7f72\u548c\u914d\u7f6e Kubernetes \u4eea\u8868\u677f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/kube-dashboard.md",sourceDirName:"installation",slug:"/installation/kube-dashboard",permalink:"/zh/installation/kube-dashboard",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/kube-dashboard.md",tags:[],version:"current",lastUpdatedAt:1677696435,formattedLastUpdatedAt:"2023\u5e743\u67081\u65e5",frontMatter:{title:"Kubernetes \u4eea\u8868\u677f",weight:60},sidebar:"mySidebar",previous:{title:"\u7981\u7528\u7ec4\u4ef6\u6807\u5fd7",permalink:"/zh/installation/disable-flags"},next:{title:"\u5378\u8f7d K3s",permalink:"/zh/installation/uninstall"}},p={},m=[{value:"\u90e8\u7f72 Kubernetes \u4eea\u8868\u677f",id:"\u90e8\u7f72-kubernetes-\u4eea\u8868\u677f",level:3},{value:"\u4eea\u8868\u677f RBAC \u914d\u7f6e",id:"\u4eea\u8868\u677f-rbac-\u914d\u7f6e",level:3},{value:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c",id:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c",level:3},{value:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f",id:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f",level:3},{value:"\u9ad8\u7ea7\uff1a\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f",id:"\u9ad8\u7ea7\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f",level:4},{value:"\u5347\u7ea7\u4eea\u8868\u677f",id:"\u5347\u7ea7\u4eea\u8868\u677f",level:3},{value:"\u5220\u9664\u4eea\u8868\u677f\u548c admin-user \u914d\u7f6e",id:"\u5220\u9664\u4eea\u8868\u677f\u548c-admin-user-\u914d\u7f6e",level:3}],b={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u5b89\u88c5\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5728 K3s \u4e0a\u90e8\u7f72\u548c\u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes \u4eea\u8868\u677f"),"\u3002"),(0,l.kt)("h3",{id:"\u90e8\u7f72-kubernetes-\u4eea\u8868\u677f"},"\u90e8\u7f72 Kubernetes \u4eea\u8868\u677f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n")),(0,l.kt)("h3",{id:"\u4eea\u8868\u677f-rbac-\u914d\u7f6e"},"\u4eea\u8868\u677f RBAC \u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u5728\u672c\u6307\u5357\u4e2d\u521b\u5efa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin-user")," \u5c06\u5728\u4eea\u8868\u677f\u4e2d\u62e5\u6709\u7ba1\u7406\u6743\u9650\u3002")),(0,l.kt)("p",null,"\u521b\u5efa\u4ee5\u4e0b\u8d44\u6e90\u6e05\u5355\u6587\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user-role.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,l.kt)("p",null,"\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin-user")," \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl create -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c"},"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c"),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"v1.24 \u548c\u66f4\u65b0\u7248\u672c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\n"))),(0,l.kt)(s.Z,{value:"v1.23 \u548c\u66f4\u4f4e\u7248\u672c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard describe secret admin-user-token | grep '^token'\n")))),(0,l.kt)("h3",{id:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f"},"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f"),(0,l.kt)("p",null,"\u8981\u8bbf\u95ee\u4eea\u8868\u677f\uff0c\u4f60\u5fc5\u987b\u4e3a\u4f60\u7684 K3s \u96c6\u7fa4\u521b\u5efa\u4e00\u4e2a\u5b89\u5168\u901a\u9053\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl proxy\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7f51\u5740\u8bbf\u95ee\u4eea\u8868\u76d8\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"admin-user")," \u6301\u6709\u8005\u4ee4\u724c\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"\u767b\u5f55"),"\u3002")),(0,l.kt)("h4",{id:"\u9ad8\u7ea7\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f"},"\u9ad8\u7ea7\uff1a\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f"),(0,l.kt)("p",null,"\u8bf7\u53c2\u9605\u4eea\u8868\u677f\u6587\u6863\uff1a\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"\u7aef\u53e3\u8f6c\u53d1"),"\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"\u5347\u7ea7\u4eea\u8868\u677f"},"\u5347\u7ea7\u4eea\u8868\u677f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nGITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,l.kt)("h3",{id:"\u5220\u9664\u4eea\u8868\u677f\u548c-admin-user-\u914d\u7f6e"},"\u5220\u9664\u4eea\u8868\u677f\u548c admin-user \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nsudo k3s kubectl delete clusterrolebinding kubernetes-dashboard\nsudo k3s kubectl delete clusterrole kubernetes-dashboard\n")))}k.isMDXComponent=!0}}]);