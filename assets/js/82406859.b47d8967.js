"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3319],{8322:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(5893),r=s(1151);const a={title:"Automated Upgrades",weight:20},o=void 0,l={id:"upgrades/automated",title:"Automated Upgrades",description:"Overview",source:"@site/docs/upgrades/automated.md",sourceDirName:"upgrades",slug:"/upgrades/automated",permalink:"/upgrades/automated",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/automated.md",tags:[],version:"current",lastUpdatedAt:1712594807e3,frontMatter:{title:"Automated Upgrades",weight:20},sidebar:"mySidebar",previous:{title:"Manual Upgrades",permalink:"/upgrades/manual"},next:{title:"Security",permalink:"/security/"}},i={},d=[{value:"Overview",id:"overview",level:3},{value:"Install the system-upgrade-controller",id:"install-the-system-upgrade-controller",level:3},{value:"Configure plans",id:"configure-plans",level:3},{value:"Downgrade Prevention",id:"downgrade-prevention",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["You can manage K3s cluster upgrades using Rancher's system-upgrade-controller. This is a Kubernetes-native approach to cluster upgrades. It leverages a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources",children:"custom resource definition (CRD)"}),", a ",(0,t.jsx)(n.code,{children:"plan"}),", and a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/architecture/controller/",children:"controller"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The plan defines upgrade policies and requirements. It also defines which nodes should be upgraded through a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"label selector"}),". See below for plans with defaults appropriate for upgrading a K3s cluster. For more advanced plan configuration options, please review the ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go",children:"CRD"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The controller schedules upgrades by monitoring plans and selecting nodes to run upgrade ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",children:"jobs"})," on. When a job has run to completion successfully, the controller will label the node on which it ran accordingly."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"The upgrade job that is launched must be highly privileged. It is configured with the following:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Host ",(0,t.jsx)(n.code,{children:"IPC"}),", ",(0,t.jsx)(n.code,{children:"NET"}),", and ",(0,t.jsx)(n.code,{children:"PID"})," namespaces"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"CAP_SYS_BOOT"})," capability"]}),"\n",(0,t.jsxs)(n.li,{children:["Host root mounted at ",(0,t.jsx)(n.code,{children:"/host"})," with read and write permissions"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"To automate upgrades in this manner, you must do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the system-upgrade-controller into your cluster"}),"\n",(0,t.jsx)(n.li,{children:"Configure plans"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"If the K3s cluster is managed by Rancher, you should use the Rancher UI to manage upgrades."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the K3s cluster was imported into Rancher, Rancher will manage the system-upgrade-controller deployment and plans. Do not follow the steps on this page."}),"\n",(0,t.jsx)(n.li,{children:"If the K3s cluster was provisioned by Rancher, Rancher will use system agent to manage version upgrades. Do not follow the steps on this page."}),"\n",(0,t.jsxs)(n.li,{children:["If the K3s cluster is ",(0,t.jsx)(n.em,{children:"not"})," managed Rancher, you may follow the steps below."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"For more details on the design and architecture of the system-upgrade-controller or its integration with K3s, see the following Git repositories:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade",children:"k3s-upgrade"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When attempting to upgrade to a new version of K3s, the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes version skew policy"})," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version."]})}),"\n",(0,t.jsx)(n.h3,{id:"install-the-system-upgrade-controller",children:"Install the system-upgrade-controller"}),"\n",(0,t.jsx)(n.p,{children:"The system-upgrade-controller can be installed as a deployment into your cluster. The deployment requires a service-account, clusterRoleBinding, and a configmap. To install these components, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"The controller can be configured and customized via the previously mentioned configmap, but the controller must be redeployed for the changes to be applied."}),"\n",(0,t.jsx)(n.p,{children:"To be able to apply plans, the system-upgrade-controller CRD has to be deployed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/crd.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configure-plans",children:"Configure plans"}),"\n",(0,t.jsx)(n.p,{children:"It is recommended you create at least two plans: a plan for upgrading server (control-plane) nodes and a plan for upgrading agent nodes. You can create additional plans as needed to control the rollout of the upgrade across nodes. Once the plans are created, the controller will pick them up and begin to upgrade your cluster."}),"\n",(0,t.jsx)(n.p,{children:"The following two example plans will upgrade your cluster to K3s v1.24.6+k3s1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: In\n      values:\n      - "true"\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: DoesNotExist\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/k3s-upgrade\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n'})}),"\n",(0,t.jsx)(n.p,{children:"There are a few important things to call out regarding these plans:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The plans must be created in the same namespace where the controller was deployed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"concurrency"})," field indicates how many nodes can be upgraded at the same time."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The server-plan targets server nodes by specifying a label selector that selects nodes with the ",(0,t.jsx)(n.code,{children:"node-role.kubernetes.io/control-plane"})," label. The agent-plan targets agent nodes by specifying a label selector that select nodes without that label."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prepare"})," step in the agent-plan will cause upgrade jobs for that plan to wait for the server-plan to complete before they execute."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Both plans have the ",(0,t.jsx)(n.code,{children:"version"})," field set to v1.24.6+k3s1. Alternatively, you can omit the ",(0,t.jsx)(n.code,{children:"version"})," field and set the ",(0,t.jsx)(n.code,{children:"channel"})," field to a URL that resolves to a release of K3s. This will cause the controller to monitor that URL and upgrade the cluster any time it resolves to a new release. This works well with the ",(0,t.jsx)(n.a,{href:"/upgrades/manual#release-channels",children:"release channels"}),". Thus, you can configure your plans with the following channel to ensure your cluster is always automatically upgraded to the newest stable release of K3s:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.k3s.io/v1-release/channels/stable\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"As stated, the upgrade will begin as soon as the controller detects that a plan was created. Updating a plan will cause the controller to re-evaluate the plan and determine if another upgrade is needed."}),"\n",(0,t.jsx)(n.p,{children:"You can monitor the progress of an upgrade by viewing the plan and jobs via kubectl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"downgrade-prevention",children:"Downgrade Prevention"}),"\n",(0,t.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,t.jsxs)(n.p,{children:["Starting with the 2023-07 releases (",(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.27.4%2Bk3s1",children:"v1.27.4+k3s1"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.26.7%2Bk3s1",children:"v1.26.7+k3s1"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.25.12%2Bk3s1",children:"v1.25.12+k3s1"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.24.16%2Bk3s1",children:"v1.24.16+k3s1"}),")"]})}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes does not support downgrades of control-plane components. The k3s-upgrade image used by upgrade plans will refuse to downgrade K3s, failing the plan and leaving your nodes cordoned."}),"\n",(0,t.jsx)(n.p,{children:"Here is an example cluster, showing failed upgrade pods and cordoned nodes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"ubuntu@user:~$ kubectl get pods -n system-upgrade\nNAME                                                              READY   STATUS    RESTARTS   AGE\napply-k3s-server-on-ip-172-31-0-16-with-7af95590a5af8e8c3-2cdc6   0/1     Error     0          9m25s\napply-k3s-server-on-ip-172-31-10-23-with-7af95590a5af8e8c-9xvwg   0/1     Error     0          14m\napply-k3s-server-on-ip-172-31-13-213-with-7af95590a5af8e8-8j72v   0/1     Error     0          18m\nsystem-upgrade-controller-7c4b84d5d9-kkzr6                        1/1     Running   0          20m\nubuntu@user:~$ kubectl get nodes\nNAME               STATUS                     ROLES                       AGE   VERSION\nip-172-31-0-16     Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-10-23    Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-13-213   Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-2-13     Ready                      <none>                      19h   v1.27.4+k3s1\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can return your cordoned nodes to service by either of the following methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Change the version or channel on your plan to target a release that is the same or newer than what is currently running on the cluster, so that the plan succeeds."}),"\n",(0,t.jsxs)(n.li,{children:["Delete the plan and manually uncordon the nodes.\nUse ",(0,t.jsx)(n.code,{children:"kubectl get plan -n system-upgrade"})," to find the plan name, then ",(0,t.jsx)(n.code,{children:"kubectl delete plan -n system-upgrade PLAN_NAME"})," to delete it. Once the plan has been deleted, use ",(0,t.jsx)(n.code,{children:"kubectl uncordon NODE_NAME"})," to uncordon each of the nodes."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);