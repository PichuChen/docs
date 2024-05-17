"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9778],{1753:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=s(5893),t=s(1151);const i={title:"Resource Profiling"},d=void 0,l={id:"reference/resource-profiling",title:"Resource Profiling",description:"This section captures the results of tests to determine minimum resource requirements for K3s.",source:"@site/docs/reference/resource-profiling.md",sourceDirName:"reference",slug:"/reference/resource-profiling",permalink:"/reference/resource-profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md",tags:[],version:"current",lastUpdatedAt:171596476e4,frontMatter:{title:"Resource Profiling"},sidebar:"mySidebar",previous:{title:"Flag Deprecation",permalink:"/reference/flag-deprecation"},next:{title:"v1.29.X",permalink:"/release-notes/v1.29.X"}},o={},a=[{value:"Scope of Resource Testing",id:"scope-of-resource-testing",level:2},{value:"Components Included for Baseline Measurements",id:"components-included-for-baseline-measurements",level:2},{value:"Methodology",id:"methodology",level:2},{value:"Environment",id:"environment",level:2},{value:"Baseline Resource Requirements",id:"baseline-resource-requirements",level:2},{value:"K3s Server with a Workload",id:"k3s-server-with-a-workload",level:3},{value:"K3s Cluster with a Single Agent",id:"k3s-cluster-with-a-single-agent",level:3},{value:"K3s Server",id:"k3s-server",level:4},{value:"K3s Agent",id:"k3s-agent",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Primary Resource Utilization Drivers",id:"primary-resource-utilization-drivers",level:3},{value:"Preventing Agents and Workloads from Interfering with the Cluster Datastore",id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This section captures the results of tests to determine minimum resource requirements for K3s."}),"\n",(0,n.jsx)(r.p,{children:"The results are summarized as follows:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Components"}),(0,n.jsx)(r.th,{children:"Processor"}),(0,n.jsx)(r.th,{children:"Min CPU"}),(0,n.jsx)(r.th,{children:"Min RAM with Kine/SQLite"}),(0,n.jsx)(r.th,{children:"Min RAM with Embedded etcd"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s server with a workload"}),(0,n.jsx)(r.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,n.jsx)(r.td,{children:"6% of a core"}),(0,n.jsx)(r.td,{children:"1596 M"}),(0,n.jsx)(r.td,{children:"1606 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s cluster with a single agent"}),(0,n.jsx)(r.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,n.jsx)(r.td,{children:"5% of a core"}),(0,n.jsx)(r.td,{children:"1428 M"}),(0,n.jsx)(r.td,{children:"1450 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s agent"}),(0,n.jsx)(r.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,n.jsx)(r.td,{children:"3% of a core"}),(0,n.jsx)(r.td,{children:"275 M"}),(0,n.jsx)(r.td,{children:"275 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s server with a workload"}),(0,n.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,n.jsx)(r.td,{children:"30% of a core"}),(0,n.jsx)(r.td,{children:"1588 M"}),(0,n.jsx)(r.td,{children:"1613 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s cluster with a single agent"}),(0,n.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,n.jsx)(r.td,{children:"25% of a core"}),(0,n.jsx)(r.td,{children:"1215 M"}),(0,n.jsx)(r.td,{children:"1413 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"K3s agent"}),(0,n.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,n.jsx)(r.td,{children:"10% of a core"}),(0,n.jsx)(r.td,{children:"268 M"}),(0,n.jsx)(r.td,{children:"268 M"})]})]})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#scope-of-resource-testing",children:"Scope of Resource Testing"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#components-included-for-baseline-measurements",children:"Components Included for Baseline Measurements"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#methodology",children:"Methodology"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#environment",children:"Environment"})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#baseline-resource-requirements",children:"Baseline Resource Requirements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#k3s-server-with-a-workload",children:"K3s Server with a Workload"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#k3s-cluster-with-a-single-agent",children:"K3s Cluster with a Single Agent"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#k3s-agent",children:"K3s Agent"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#analysis",children:"Analysis"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#primary-resource-utilization-drivers",children:"Primary Resource Utilization Drivers"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",children:"Preventing Agents and Workloads from Interfering with the Cluster Datastore"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"scope-of-resource-testing",children:"Scope of Resource Testing"}),"\n",(0,n.jsx)(r.p,{children:"The resource tests were intended to address the following problem statements:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"On a single-node cluster, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside to run the entire K3s stack server stack, assuming that a real workload will be deployed on the cluster."}),"\n",(0,n.jsx)(r.li,{children:"On an agent (worker) node, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside for the Kubernetes and K3s control plane components (the kubelet and k3s agent)."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"components-included-for-baseline-measurements",children:"Components Included for Baseline Measurements"}),"\n",(0,n.jsx)(r.p,{children:"The tested components are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"K3s v1.26.5 with all packaged components enabled"}),"\n",(0,n.jsx)(r.li,{children:"Prometheus + Grafana monitoring stack"}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"Kubernetes Example Nginx Deployment"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"These are baseline figures for a stable system using only K3s packaged components (Traefik Ingress, Klipper lb, local-path storage) running a standard monitoring stack (Prometheus and Grafana) and the Guestbook example app."}),"\n",(0,n.jsx)(r.p,{children:"Resource figures including IOPS are for the Kubernetes datastore and control plane only, and do not include overhead for system-level management agents or logging, container image management, or any workload-specific requirements."}),"\n",(0,n.jsx)(r.h2,{id:"methodology",children:"Methodology"}),"\n",(0,n.jsxs)(r.p,{children:["A standalone instance of Prometheus v2.43.0 was used to collect host CPU, memory, and disk IO statistics using ",(0,n.jsx)(r.code,{children:"prometheus-node-exporter"})," installed via apt."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"systemd-cgtop"})," was used to spot-check systemd cgroup-level CPU and memory utilization. ",(0,n.jsx)(r.code,{children:"system.slice/k3s.service"})," tracks resource utilization for both K3s and containerd, while individual pods are under the ",(0,n.jsx)(r.code,{children:"kubepods"})," hierarchy."]}),"\n",(0,n.jsxs)(r.p,{children:["Additional detailed K3s memory utilization data was collected from ",(0,n.jsx)(r.code,{children:"kubectl top node"})," using the integrated metrics-server for the server and agent processes."]}),"\n",(0,n.jsx)(r.p,{children:"Utilization figures were based on 95th percentile readings from steady state operation on nodes running the described workloads."}),"\n",(0,n.jsx)(r.h2,{id:"environment",children:"Environment"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Arch"}),(0,n.jsx)(r.th,{children:"OS"}),(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"CPU"}),(0,n.jsx)(r.th,{children:"RAM"}),(0,n.jsx)(r.th,{children:"Disk"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"x86_64"}),(0,n.jsx)(r.td,{children:"Ubuntu 22.04"}),(0,n.jsx)(r.td,{children:"AWS c6id.xlarge"}),(0,n.jsx)(r.td,{children:"Intel Xeon Platinum 8375C CPU, 4 Core 2.90 GHz"}),(0,n.jsx)(r.td,{children:"8 GB"}),(0,n.jsx)(r.td,{children:"NVME SSD"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"aarch64"}),(0,n.jsx)(r.td,{children:"Raspberry Pi OS 11"}),(0,n.jsx)(r.td,{children:"Raspberry Pi 4 Model B"}),(0,n.jsx)(r.td,{children:"BCM2711, 4 Core 1.50 GHz"}),(0,n.jsx)(r.td,{children:"8 GB"}),(0,n.jsx)(r.td,{children:"UHS-III SDXC"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"baseline-resource-requirements",children:"Baseline Resource Requirements"}),"\n",(0,n.jsx)(r.p,{children:"This section captures the results of tests to determine minimum resource requirements for basic K3s operation."}),"\n",(0,n.jsx)(r.h3,{id:"k3s-server-with-a-workload",children:"K3s Server with a Workload"}),"\n",(0,n.jsxs)(r.p,{children:["These are the requirements for a single-node cluster in which the K3s server shares resources with a ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"simple workload"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The CPU requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"CPU Core Usage"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"6% of a core"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"30% of a core"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"The Memory Requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Tested Datastore"}),(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"Memory"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Kine/SQLite"}),(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"1596 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"1588 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Embedded etcd"}),(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"1606 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"1613 M"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"The Disk requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Tested Datastore"}),(0,n.jsx)(r.th,{children:"IOPS"}),(0,n.jsx)(r.th,{children:"KiB/sec"}),(0,n.jsx)(r.th,{children:"Latency"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Kine/SQLite"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"500"}),(0,n.jsx)(r.td,{children:"< 10 ms"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Embedded etcd"}),(0,n.jsx)(r.td,{children:"50"}),(0,n.jsx)(r.td,{children:"250"}),(0,n.jsx)(r.td,{children:"< 5 ms"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"k3s-cluster-with-a-single-agent",children:"K3s Cluster with a Single Agent"}),"\n",(0,n.jsx)(r.p,{children:"These are the baseline requirements for a K3s cluster with a K3s server node and a K3s agent, but no workload."}),"\n",(0,n.jsx)(r.h4,{id:"k3s-server",children:"K3s Server"}),"\n",(0,n.jsx)(r.p,{children:"The CPU requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"CPU Core Usage"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"5% of a core"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"25% of a core"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"The Memory Requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Tested Datastore"}),(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"Memory"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Kine/SQLite"}),(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"1428 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"1215 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Embedded etcd"}),(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"1450 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"1413 M"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"k3s-agent",children:"K3s Agent"}),"\n",(0,n.jsx)(r.p,{children:"The requirements are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"System"}),(0,n.jsx)(r.th,{children:"CPU Core Usage"}),(0,n.jsx)(r.th,{children:"RAM"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Intel 8375C"}),(0,n.jsx)(r.td,{children:"3% of a core"}),(0,n.jsx)(r.td,{children:"275 M"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pi4B"}),(0,n.jsx)(r.td,{children:"5% of a core"}),(0,n.jsx)(r.td,{children:"268 M"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"analysis",children:"Analysis"}),"\n",(0,n.jsx)(r.p,{children:"This section captures what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."}),"\n",(0,n.jsx)(r.h3,{id:"primary-resource-utilization-drivers",children:"Primary Resource Utilization Drivers"}),"\n",(0,n.jsx)(r.p,{children:"K3s server utilization figures are primarily driven by support of the Kubernetes datastore (kine or etcd), API Server, Controller-Manager, and Scheduler control loops, as well as any management tasks necessary to effect changes to the state of the system. Operations that place additional load on the Kubernetes control plane, such as creating/modifying/deleting resources, will cause temporary spikes in utilization. Using operators or apps that make extensive use of the Kubernetes datastore (such as Rancher or other Operator-type applications) will increase the server's resource requirements. Scaling up the cluster by adding additional nodes or creating many cluster resources will increase the server's resource requirements."}),"\n",(0,n.jsx)(r.p,{children:"K3s agent utilization figures are primarily driven by support of container lifecycle management control loops. Operations that involve managing images, provisioning storage, or creating/destroying containers will cause temporary spikes in utilization. Image pulls in particular are typically highly CPU and IO bound, as they involve decompressing image content to disk. If possible, workload storage (pod ephemeral storage and volumes) should be isolated from the agent components (/var/lib/rancher/k3s/agent) to ensure that there are no resource conflicts."}),"\n",(0,n.jsx)(r.h3,{id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",children:"Preventing Agents and Workloads from Interfering with the Cluster Datastore"}),"\n",(0,n.jsx)(r.p,{children:"When running in an environment where the server is also hosting workload pods, care should be taken to ensure that agent and workload IOPS do not interfere with the datastore."}),"\n",(0,n.jsx)(r.p,{children:"This can be best accomplished by placing the server components (/var/lib/rancher/k3s/server) on a different storage medium than the agent components (/var/lib/rancher/k3s/agent), which include the containerd image store."}),"\n",(0,n.jsx)(r.p,{children:"Workload storage (pod ephemeral storage and volumes) should also be isolated from the datastore."}),"\n",(0,n.jsx)(r.p,{children:"Failure to meet datastore throughput and latency requirements may result in delayed response from the control plane and/or failure of the control plane to maintain system state."})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>d});var n=s(7294);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);