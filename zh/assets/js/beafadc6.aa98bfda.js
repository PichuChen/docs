"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9390],{16:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=r(5893),t=r(1151);const d={title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93"},i=void 0,c={id:"datastore/ha",title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/ha.md",sourceDirName:"datastore",slug:"/datastore/ha",permalink:"/zh/datastore/ha",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha.md",tags:[],version:"current",lastUpdatedAt:171596476e4,frontMatter:{title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93"},sidebar:"mySidebar",previous:{title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",permalink:"/zh/datastore/ha-embedded"},next:{title:"Cluster Load Balancer",permalink:"/zh/datastore/cluster-loadbalancer"}},l={},a=[{value:"\u5b89\u88c5\u6982\u8981",id:"\u5b89\u88c5\u6982\u8981",level:2},{value:"1. \u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8",id:"1-\u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8",level:3},{value:"2. \u542f\u52a8 Server \u8282\u70b9",id:"2-\u542f\u52a8-server-\u8282\u70b9",level:3},{value:"3. \u53ef\u9009\uff1a\u52a0\u5165\u5176\u5b83 Server \u8282\u70b9",id:"3-\u53ef\u9009\u52a0\u5165\u5176\u5b83-server-\u8282\u70b9",level:3},{value:"4. \u53ef\u9009\uff1a\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",id:"4-\u53ef\u9009\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",level:3},{value:"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9",id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u53ef\u4ee5\u6ee1\u8db3\u5404\u79cd\u7528\u4f8b\uff0c\u4f46\u5982\u679c\u4f60\u7684\u73af\u5883\u5bf9 Kubernetes control plane \u7684\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4\u6709\u8981\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728 HA \u914d\u7f6e\u4e2d\u8fd0\u884c K3s\u3002\u4e00\u4e2a HA K3s \u96c6\u7fa4\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e24\u4e2a\u6216\u591a\u4e2a ",(0,s.jsx)(n.strong,{children:"Server \u8282\u70b9"}),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5916\u90e8\u6570\u636e\u5b58\u50a8"}),"\uff08\u4e0e\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\u4f7f\u7528\u7684\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5b58\u50a8\u76f8\u53cd\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ef\u9009\uff1a\u96f6\u4e2a\u6216\u591a\u4e2a ",(0,s.jsx)(n.strong,{children:"Agent \u8282\u70b9"}),"\uff0c\u7528\u4e8e\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ef\u9009\uff1a",(0,s.jsx)(n.strong,{children:"\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"}),"\uff0c\u4f9b Agent \u8282\u70b9\u6ce8\u518c\u5230\u96c6\u7fa4"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u8fd9\u4e9b\u7ec4\u4ef6\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/architecture#%E9%AB%98%E5%8F%AF%E7%94%A8-k3s",children:"\u67b6\u6784"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5\u6982\u8981",children:"\u5b89\u88c5\u6982\u8981"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e HA \u96c6\u7fa4\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8",children:"1. \u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u9996\u5148\u9700\u8981\u4e3a\u96c6\u7fa4\u521b\u5efa\u4e00\u4e2a\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/datastore/",children:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879"}),"\u6587\u6863\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u542f\u52a8-server-\u8282\u70b9",children:"2. \u542f\u52a8 Server \u8282\u70b9"}),"\n",(0,s.jsxs)(n.p,{children:["K3s \u9700\u8981\u4e24\u4e2a\u6216\u66f4\u591a\u7684 Server \u8282\u70b9\u6765\u5b9e\u73b0 HA \u914d\u7f6e\u3002\u6709\u5173\u6700\u4f4e\u4e3b\u673a\u8981\u6c42\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/installation/requirements",children:"\u5b89\u88c5\u8981\u6c42"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e9b\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"k3s server"})," \u547d\u4ee4\u65f6\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"datastore-endpoint"})," \u53c2\u6570\uff0c\u4ee5\u4fbf K3s \u77e5\u9053\u5982\u4f55\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002",(0,s.jsx)(n.code,{children:"token"})," \u53c2\u6570\u4e5f\u53ef\u4ee5\u7528\u6765\u5728\u6dfb\u52a0\u8282\u70b9\u65f6\u8bbe\u7f6e\u4e00\u4e2a\u56fa\u5b9a\u7684 token\u3002\u5f53\u4e3a\u7a7a\u65f6\uff0c\u5c06\u81ea\u52a8\u751f\u6210 token\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 K3s Server\uff0c\u5e76\u4f7f\u7528 MySQL \u6570\u636e\u5e93\u4f5c\u4e3a\u5916\u90e8\u6570\u636e\u5b58\u50a8\u548c",(0,s.jsx)(n.a,{href:"/zh/cli/server#%E9%9B%86%E7%BE%A4%E9%80%89%E9%A1%B9",children:"\u8bbe\u7f6e token"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n  --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u6570\u636e\u5e93\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u7684\u683c\u5f0f\u4e5f\u4e0d\u540c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/datastore/#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E7%AB%AF%E7%82%B9%E6%A0%BC%E5%BC%8F%E5%92%8C%E5%8A%9F%E8%83%BD",children:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5728\u542f\u52a8 server \u8282\u70b9\u65f6\u914d\u7f6e TLS \u8bc1\u4e66\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/datastore/#%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0",children:"\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u6307\u5357"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u5355\u53f0 Server \u5b89\u88c5\u65f6\u53ef\u7528\u7684\u5b89\u88c5\u9009\u9879\u4e5f\u9002\u7528\u4e8e\u9ad8\u53ef\u7528\u5b89\u88c5\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/installation/configuration",children:"\u914d\u7f6e\u9009\u9879"}),"\u6587\u6863\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cServer \u8282\u70b9\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u56e0\u6b64\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u5728\u5b83\u4eec\u4e0a\u542f\u52a8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u62e5\u6709\u4e00\u4e2a\u4e0d\u4f1a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u7684\u4e13\u7528 control plane\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6c61\u70b9\uff08taint\uff09\u3002",(0,s.jsx)(n.code,{children:"node-taint"})," \u53c2\u6570\u5c06\u5141\u8bb8\u4f60\u914d\u7f6e\u5e26\u6709\u6c61\u70b9\u7684\u8282\u70b9\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"--node-taint CriticalAddonsOnly=true:NoExecute"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6240\u6709 server \u8282\u70b9\u4e0a\u542f\u52a8 ",(0,s.jsx)(n.code,{children:"k3s server"})," \u8fdb\u7a0b\u540e\uff0c\u8bf7\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"k3s kubectl get nodes"})," \u786e\u4fdd\u96c6\u7fa4\u5df2\u6b63\u786e\u542f\u52a8\u3002\u4f60\u5e94\u8be5\u770b\u5230 server \u8282\u70b9\u5904\u4e8e Ready \u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"3-\u53ef\u9009\u52a0\u5165\u5176\u5b83-server-\u8282\u70b9",children:"3. \u53ef\u9009\uff1a\u52a0\u5165\u5176\u5b83 Server \u8282\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u6b65\u9aa4 2 \u4e2d\u7684\u76f8\u540c\u793a\u4f8b\u547d\u4ee4\u53ef\u7528\u4e8e\u52a0\u5165\u5176\u4ed6 Server \u8282\u70b9\uff0c\u5176\u4e2d\u9700\u8981\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684 Token\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u662f\u5728\u6ca1\u6709 ",(0,s.jsx)(n.code,{children:"--token"})," CLI \u6807\u5fd7\u6216 ",(0,s.jsx)(n.code,{children:"K3S_TOKEN"})," \u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u542f\u52a8\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u4ece\u4efb\u4f55\u5df2\u7ecf\u52a0\u5165\u96c6\u7fa4\u7684 Server \u8282\u70b9\u4e2d\u68c0\u7d22\u5230 Token\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u53ef\u4ee5",(0,s.jsx)(n.a,{href:"/zh/cli/server#%E9%9B%86%E7%BE%A4%E9%80%89%E9%A1%B9",children:"\u4f7f\u7528 Token"})," \u6dfb\u52a0\u5176\u4ed6 Server \u8282\u70b9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u51e0\u4e2a\u914d\u7f6e\u6807\u5fd7\u5728\u6240\u6709 Server \u8282\u70b9\u4e2d\u5fc5\u987b\u662f\u76f8\u540c\u7684:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7f51\u7edc\u76f8\u5173\u6807\u5fd7\uff1a",(0,s.jsx)(n.code,{children:"--cluster-dns"}),"\u3001",(0,s.jsx)(n.code,{children:"--cluster-domain"}),"\u3001",(0,s.jsx)(n.code,{children:"--cluster-cidr"}),"\u3001",(0,s.jsx)(n.code,{children:"--service- cidr"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a7\u5236\u67d0\u4e9b\u7ec4\u4ef6\u90e8\u7f72\u7684\u6807\u5fd7\uff1a",(0,s.jsx)(n.code,{children:"--disable-helm-controller"}),"\u3001",(0,s.jsx)(n.code,{children:"--disable-kube-proxy"}),"\u3001",(0,s.jsx)(n.code,{children:"--disable-network-policy"})," \u548c\u4efb\u4f55\u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"--disable"})," \u7684\u7ec4\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:["\u529f\u80fd\u76f8\u5173\u6807\u5fd7\uff1a",(0,s.jsx)(n.code,{children:"--secrets-encryption"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u4f60\u9700\u8981\u5907\u4efd token \u7684\u503c\uff0c\u56e0\u4e3a\u6062\u590d\u5907\u4efd\u548c\u6dfb\u52a0\u8282\u70b9\u65f6\u90fd\u9700\u8981\u8be5 token\u3002\u4ee5\u524d\uff0cK3s \u5728\u4f7f\u7528\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\u65f6\u4e0d\u5f3a\u5236\u4f7f\u7528 token\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u53ef\u9009\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",children:"4. \u53ef\u9009\uff1a\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"}),"\n",(0,s.jsx)(n.p,{children:"Agent \u8282\u70b9\u9700\u8981\u4e00\u4e2a URL \u6765\u6ce8\u518c\u3002\u8fd9\u53ef\u4ee5\u662f\u4efb\u4f55 server \u8282\u70b9\u7684 IP \u6216\u4e3b\u673a\u540d\uff0c\u4f46\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u8282\u70b9\u53ef\u80fd\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u6539\u53d8\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5728\u652f\u6301\u6269\u5c55\u7ec4\u7684\u4e91\u4e0a\u8fd0\u884c\u96c6\u7fa4\uff0c\u5219\u53ef\u80fd\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u521b\u5efa\u548c\u9500\u6bc1\u8282\u70b9\uff0c\u4ece\u800c\u66f4\u6539\u4e3a\u4e0e\u521d\u59cb Server \u8282\u70b9\u96c6\u4e0d\u540c\u7684 IP\u3002\u6700\u597d\u5728 Server \u8282\u70b9\u524d\u9762\u6709\u4e00\u4e2a\u4e0d\u4f1a\u968f\u65f6\u95f4\u53d8\u5316\u7684\u7a33\u5b9a\u7aef\u70b9\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u65b9\u6cd5\u6765\u8bbe\u7f6e\u6b64\u7aef\u70b9\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4 \u5c42 (TCP) \u8d1f\u8f7d\u5747\u8861\u5668"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6e\u8be2 DNS"}),"\n",(0,s.jsx)(n.li,{children:"\u865a\u62df\u6216\u5f39\u6027 IP \u5730\u5740"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u793a\u4f8b\u914d\u7f6e\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"/zh/datastore/cluster-loadbalancer",children:"\u96c6\u7fa4\u8d1f\u8f7d\u5747\u8861\u5668"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7aef\u70b9\u4e5f\u53ef\u4ee5\u7528\u6765\u8bbf\u95ee Kubernetes API\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539 ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," \u6587\u4ef6\u6765\u6307\u5411\u5b83\uff0c\u800c\u4e0d\u662f\u7279\u5b9a\u7684\u8282\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u907f\u514d\u6b64\u7c7b\u914d\u7f6e\u4e2d\u7684\u8bc1\u4e66\u9519\u8bef\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"--tls-san YOUR_IP_OR_HOSTNAME_HERE"})," \u9009\u9879\u6765\u914d\u7f6e Server\u3002\u8fd9\u4e2a\u9009\u9879\u5728 TLS \u8bc1\u4e66\u4e2d\u589e\u52a0\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u4e3b\u673a\u540d\u6216 IP \u4f5c\u4e3a Subject Alternative Name\uff0c\u5982\u679c\u4f60\u60f3\u901a\u8fc7 IP \u548c\u4e3b\u673a\u540d\u8bbf\u95ee\uff0c\u53ef\u4ee5\u591a\u6b21\u6307\u5b9a\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9",children:"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a K3s Server \u8282\u70b9\u9ed8\u8ba4\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u6240\u4ee5 HA K3s \u96c6\u7fa4\u4e0d\u9700\u8981 Agent \u8282\u70b9\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528\u4e13\u95e8\u7684 Agent \u8282\u70b9\u6765\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 HA \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9\u4e0e\u5728\u5355\u4e2a Server \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9\u662f\u4e00\u6837\u7684\u3002\u4f60\u53ea\u9700\u8981\u6307\u5b9a Agent \u5e94\u8be5\u6ce8\u518c\u7684 URL\uff08server IP \u4e4b\u4e00\u6216\u56fa\u5b9a\u6ce8\u518c\u5730\u5740\uff09\u548c\u8981\u4f7f\u7528\u7684 Token \u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"K3S_TOKEN=SECRET k3s agent --server https://server-or-fixed-registration-address:6443\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(7294);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);