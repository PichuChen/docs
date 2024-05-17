"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[547],{3865:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var n=t(5893),r=t(1151);const d={title:"etcd-snapshot"},c="k3s etcd-snapshot",i={id:"cli/etcd-snapshot",title:"etcd-snapshot",description:"Available as of v1.19.1+k3s1",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/etcd-snapshot.md",sourceDirName:"cli",slug:"/cli/etcd-snapshot",permalink:"/kr/cli/etcd-snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/etcd-snapshot.md",tags:[],version:"current",lastUpdatedAt:171596476e4,frontMatter:{title:"etcd-snapshot"},sidebar:"mySidebar",previous:{title:"certificate",permalink:"/kr/cli/certificate"},next:{title:"secrets-encrypt",permalink:"/kr/cli/secrets-encrypt"}},o={},a=[{value:"Creating Snapshots",id:"creating-snapshots",level:4},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:4},{value:"Options",id:"options",level:4},{value:"S3 Compatible API Support",id:"s3-compatible-api-support",level:4},{value:"Etcd Snapshot and Restore Subcommands",id:"etcd-snapshot-and-restore-subcommands",level:4}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{TabItem:t,Tabs:d}=s;return t||p("TabItem",!0),d||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"k3s-etcd-snapshot",children:"k3s etcd-snapshot"}),"\n",(0,n.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,n.jsxs)(s.p,{children:["Available as of ",(0,n.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1",children:"v1.19.1+k3s1"})]})}),"\n",(0,n.jsx)(s.p,{children:"In this section, you'll learn how to create backups of the K3s embedded etcd datastore, and to restore the cluster from backup."}),"\n",(0,n.jsx)(s.h4,{id:"creating-snapshots",children:"Creating Snapshots"}),"\n",(0,n.jsxs)(s.p,{children:["Snapshots are enabled by default, at 00:00 and 12:00 system time, with 5 snapshots retained. To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,n.jsx)(s.a,{href:"#options",children:"options"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The snapshot directory defaults to ",(0,n.jsx)(s.code,{children:"${data-dir}/server/db/snapshots"}),". The data-dir value defaults to ",(0,n.jsx)(s.code,{children:"/var/lib/rancher/k3s"})," and can be changed by setting the ",(0,n.jsx)(s.code,{children:"--data-dir"})," flag."]}),"\n",(0,n.jsx)(s.h4,{id:"restoring-a-cluster-from-a-snapshot",children:"Restoring a Cluster from a Snapshot"}),"\n",(0,n.jsxs)(s.p,{children:["When K3s is restored from backup, the old data directory will be moved to ",(0,n.jsx)(s.code,{children:"${data-dir}/server/db/etcd-old/"}),". Then K3s will attempt to restore the snapshot by creating a new data directory, then starting etcd with a new K3s cluster with one etcd member."]}),"\n",(0,n.jsx)(s.p,{children:"To restore the cluster from backup:"}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsxs)(t,{value:"Single Server",children:[(0,n.jsxs)(s.p,{children:["Run K3s with the ",(0,n.jsx)(s.code,{children:"--cluster-reset"})," option, with the ",(0,n.jsx)(s.code,{children:"--cluster-reset-restore-path"})," also given:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Result:"})," A message in the logs says that K3s can be restarted without the flags. Start k3s again and should run successfully and be restored from the specified snapshot."]})]}),(0,n.jsxs)(t,{value:"High Availability",children:[(0,n.jsxs)(s.p,{children:["In this example there are 3 servers, ",(0,n.jsx)(s.code,{children:"S1"}),", ",(0,n.jsx)(s.code,{children:"S2"}),", and ",(0,n.jsx)(s.code,{children:"S3"}),". The snapshot is located on ",(0,n.jsx)(s.code,{children:"S1"}),"."]}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On S1, start K3s with the ",(0,n.jsx)(s.code,{children:"--cluster-reset"})," option, with the ",(0,n.jsx)(s.code,{children:"--cluster-reset-restore-path"})," also given:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Result:"})," A message in the logs says that K3s can be restarted without the flags."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On S2 and S3, stop K3s. Then delete the data directory, ",(0,n.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/db/"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"systemctl stop k3s\nrm -rf /var/lib/rancher/k3s/server/db/\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"On S1, start K3s again:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"On S2 and S3, start K3s again to join the restored cluster:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(s.p,{children:["These options can be passed in with the command line, or in the ",(0,n.jsx)(s.a,{href:"/kr/installation/configuration#configuration-file",children:"configuration file,"})," which may be easier to use."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Options"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-disable-snapshots"})}),(0,n.jsx)(s.td,{children:"Disable automatic etcd snapshots"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--etcd-snapshot-schedule-cron"})," value"]}),(0,n.jsxs)(s.td,{children:["Snapshot interval time in cron spec. eg. every 5 hours ",(0,n.jsx)(s.code,{children:"0 */5 * * *"}),"(default: ",(0,n.jsx)(s.code,{children:"0 */12 * * *"}),")"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--etcd-snapshot-retention"})," value"]}),(0,n.jsx)(s.td,{children:"Number of snapshots to retain (default: 5)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--etcd-snapshot-dir"})," value"]}),(0,n.jsxs)(s.td,{children:["Directory to save db snapshots. (Default location: ",(0,n.jsx)(s.code,{children:"${data-dir}/db/snapshots"}),")"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--cluster-reset"})}),(0,n.jsxs)(s.td,{children:["Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,n.jsx)(s.code,{children:"[$K3S_CLUSTER_RESET]"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--cluster-reset-restore-path"})," value"]}),(0,n.jsx)(s.td,{children:"Path to snapshot file to be restored"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"s3-compatible-api-support",children:"S3 Compatible API Support"}),"\n",(0,n.jsx)(s.p,{children:"K3s supports writing etcd snapshots to and restoring etcd snapshots from systems with S3-compatible APIs. S3 support is available for both on-demand and scheduled snapshots."}),"\n",(0,n.jsxs)(s.p,{children:["The arguments below have been added to the ",(0,n.jsx)(s.code,{children:"server"})," subcommand. These flags exist for the ",(0,n.jsx)(s.code,{children:"etcd-snapshot"})," subcommand as well however the ",(0,n.jsx)(s.code,{children:"--etcd-s3"})," portion is removed to avoid redundancy."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Options"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3"})}),(0,n.jsx)(s.td,{children:"Enable backup to S3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-endpoint"})}),(0,n.jsx)(s.td,{children:"S3 endpoint url"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-endpoint-ca"})}),(0,n.jsx)(s.td,{children:"S3 custom CA cert to connect to S3 endpoint"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-skip-ssl-verify"})}),(0,n.jsx)(s.td,{children:"Disables S3 SSL certificate validation"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-access-key"})}),(0,n.jsx)(s.td,{children:"S3 access key"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-secret-key"})}),(0,n.jsx)(s.td,{children:"S3 secret key"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-bucket"})}),(0,n.jsx)(s.td,{children:"S3 bucket name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-region"})}),(0,n.jsx)(s.td,{children:"S3 region / bucket location (optional). defaults to us-east-1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--etcd-s3-folder"})}),(0,n.jsx)(s.td,{children:"S3 folder"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"To perform an on-demand etcd snapshot and save it to S3:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,n.jsx)(s.p,{children:"To perform an on-demand etcd snapshot restore from S3, first make sure that K3s isn't running. Then run the following commands:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,n.jsx)(s.h4,{id:"etcd-snapshot-and-restore-subcommands",children:"Etcd Snapshot and Restore Subcommands"}),"\n",(0,n.jsx)(s.p,{children:"k3s supports a set of subcommands for working with your etcd snapshots."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Subcommand"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"delete"}),(0,n.jsx)(s.td,{children:"Delete given snapshot(s)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ls, list, l"}),(0,n.jsx)(s.td,{children:"List snapshots"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"prune"}),(0,n.jsx)(s.td,{children:"Remove snapshots that exceed the configured retention count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"save"}),(0,n.jsx)(s.td,{children:"Trigger an immediate etcd snapshot"})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"save"})," subcommand is the same as ",(0,n.jsx)(s.code,{children:"k3s etcd-snapshot"}),". The latter will eventually be deprecated in favor of the former."]})}),"\n",(0,n.jsx)(s.p,{children:"These commands will perform as expected whether the etcd snapshots are stored locally or in an S3 compatible object store."}),"\n",(0,n.jsxs)(s.p,{children:["For additional information on the etcd snapshot subcommands, run ",(0,n.jsx)(s.code,{children:"k3s etcd-snapshot"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Delete a snapshot from S3."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Prune local snapshots with the default retention policy (5). The ",(0,n.jsx)(s.code,{children:"prune"})," subcommand takes an additional flag ",(0,n.jsx)(s.code,{children:"--snapshot-retention"})," that allows for overriding the default retention policy."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune --snapshot-retention 10\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>c});var n=t(7294);const r={},d=n.createContext(r);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);