"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(r),p=a,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=r(3117),a=(r(7294),r(3905)),i=r(941),s=r(4996);const o={title:"Architecture",weight:1},l=void 0,d={unversionedId:"architecture/architecture",id:"architecture/architecture",title:"Architecture",description:"This page describes the architecture of a high-availability K3s server cluster and how it differs from a single-node server cluster.",source:"@site/docs/architecture/architecture.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/architecture/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture/architecture.md",tags:[],version:"current",lastUpdatedAt:1678754259,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"Architecture",weight:1},sidebar:"mySidebar",previous:{title:"K3s - Lightweight Kubernetes",permalink:"/"},next:{title:"Quick-Start Guide",permalink:"/quick-start/"}},c={},u=[{value:"Single-server Setup with an Embedded DB",id:"single-server-setup-with-an-embedded-db",level:3},{value:"High-Availability K3s Server with an External DB",id:"high-availability-k3s-server-with-an-external-db",level:3},{value:"Fixed Registration Address for Agent Nodes",id:"fixed-registration-address-for-agent-nodes",level:3},{value:"How Agent Node Registration Works",id:"how-agent-node-registration-works",level:3}],h={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page describes the architecture of a high-availability K3s server cluster and how it differs from a single-node server cluster."),(0,a.kt)("p",null,"It also describes how agent nodes are registered with K3s servers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A server node is defined as a host running the ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s server")," command, with control-plane and datastore components managed by K3s."),(0,a.kt)("li",{parentName:"ul"},"An agent node is defined as a host running the ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s agent")," command, without any datastore or control-plane components."),(0,a.kt)("li",{parentName:"ul"},"Both servers and agents run the kubelet, container runtime, and CNI. See the ",(0,a.kt)("a",{parentName:"li",href:"/advanced/#running-agentless-servers-experimental"},"Advanced Options")," documentation for more information on running agentless servers.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4530).Z,width:"1562",height:"898"})),(0,a.kt)("h3",{id:"single-server-setup-with-an-embedded-db"},"Single-server Setup with an Embedded DB"),(0,a.kt)("p",null,"The following diagram shows an example of a cluster that has a single-node K3s server with an embedded SQLite database."),(0,a.kt)("p",null,"In this configuration, each agent node is registered to the same server node. A K3s user can manipulate Kubernetes resources by calling the K3s API on the server node."),(0,a.kt)(i.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,s.Z)("/img/k3s-architecture-single-server.svg"),dark:(0,s.Z)("/img/k3s-architecture-single-server-dark.svg")},mdxType:"ThemedImage"}),(0,a.kt)("h3",{id:"high-availability-k3s-server-with-an-external-db"},"High-Availability K3s Server with an External DB"),(0,a.kt)("p",null,"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster is comprised of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two or more ",(0,a.kt)("strong",{parentName:"li"},"server nodes")," that will serve the Kubernetes API and run other control plane services"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"external datastore")," (as opposed to the embedded SQLite datastore used in single-server setups)")),(0,a.kt)(i.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,s.Z)("/img/k3s-architecture-ha-server.svg"),dark:(0,s.Z)("/img/k3s-architecture-ha-server-dark.svg")},mdxType:"ThemedImage"}),(0,a.kt)("h3",{id:"fixed-registration-address-for-agent-nodes"},"Fixed Registration Address for Agent Nodes"),(0,a.kt)("p",null,"In the high-availability server configuration, each node must also register with the Kubernetes API by using a fixed registration address, as shown in the diagram below."),(0,a.kt)("p",null,"After registration, the agent nodes establish a connection directly to one of the server nodes."),(0,a.kt)(i.Z,{alt:"Agent Registration HA",sources:{light:(0,s.Z)("/img/k3s-production-setup.svg"),dark:(0,s.Z)("/img/k3s-production-setup-dark.svg")},mdxType:"ThemedImage"}),(0,a.kt)("h3",{id:"how-agent-node-registration-works"},"How Agent Node Registration Works"),(0,a.kt)("p",null,"Agent nodes are registered with a websocket connection initiated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s agent")," process, and the connection is maintained by a client-side load balancer running as part of the agent process. This load-balancer maintains stable connections to all servers in the cluster, providing a connection to the apiserver that tolerates outages of individual servers."),(0,a.kt)("p",null,"Agents will register with the server using the node cluster secret along with a randomly generated password for the node, stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/password"),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace with names using the template ",(0,a.kt)("inlineCode",{parentName:"p"},"<host>.node-password.k3s"),". This is done to protect the integrity of node IDs."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node")," directory of an agent is removed, or you wish to rejoin a node using an existing name, the node should be deleted from the cluster. This will clean up both the old node entry, and the node password secret, and allow the node to (re)join the cluster."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Prior to K3s v1.20.2 servers stored passwords on disk at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/cred/node-passwd"),".")),(0,a.kt)("p",null,"If you frequently reuse hostnames, but are unable to remove the node password secrets, a unique node ID can be automatically appended to the hostname by launching K3s servers or agents using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--with-node-id")," flag. When enabled, the node ID is also stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/"),"."))}p.isMDXComponent=!0},4530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"}}]);