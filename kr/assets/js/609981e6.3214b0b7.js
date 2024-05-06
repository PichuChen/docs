"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2466],{1488:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),n=i(1151);const s={title:"Private Registry Configuration"},o=void 0,a={id:"installation/private-registry",title:"Private Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull images as needed by the kubelet.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/kr/installation/private-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1715027917e3,frontMatter:{title:"Private Registry Configuration"},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/kr/installation/configuration"},next:{title:"Embedded Registry Mirror",permalink:"/kr/installation/registry-mirror"}},l={},d=[{value:"Default Endpoint Fallback",id:"default-endpoint-fallback",level:2},{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Redirects",id:"redirects",level:4},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3},{value:"Troubleshooting Image Pulls",id:"troubleshooting-image-pulls",level:2},{value:"Adding Images to the Private Registry",id:"adding-images-to-the-private-registry",level:2}];function c(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{TabItem:i,Tabs:s}=r;return i||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Containerd can be configured to connect to private registries and use them to pull images as needed by the kubelet."}),"\n",(0,t.jsxs)(r.p,{children:["Upon startup, K3s will check to see if ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," exists. If so, the registry configuration contained in this file is used when generating the containerd configuration."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If you want to use a private registry as a mirror for a public registry such as docker.io, then you will need to configure ",(0,t.jsx)(r.code,{children:"registries.yaml"})," on each node that you want to use the mirror."]}),"\n",(0,t.jsxs)(r.li,{children:["If your private registry requires authentication, uses custom TLS certificates, or does not use TLS, you will need to configure ",(0,t.jsx)(r.code,{children:"registries.yaml"})," on each node that will pull images from your registry."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them,\nplease ensure you also create the ",(0,t.jsx)(r.code,{children:"registries.yaml"})," file on each server as well."]}),"\n",(0,t.jsx)(r.h2,{id:"default-endpoint-fallback",children:"Default Endpoint Fallback"}),"\n",(0,t.jsxs)(r.p,{children:['Containerd has an implicit "default endpoint" for all registries.\nThe default endpoint is always tried as a last resort, even if there are other endpoints listed for that registry in ',(0,t.jsx)(r.code,{children:"registries.yaml"}),".\nFor example, when pulling ",(0,t.jsx)(r.code,{children:"registry.example.com:5000/rancher/mirrored-pause:3.6"}),", containerd will use a default endpoint of ",(0,t.jsx)(r.code,{children:"https://registry.example.com:5000/v2"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The default endpoint for ",(0,t.jsx)(r.code,{children:"docker.io"})," is ",(0,t.jsx)(r.code,{children:"https://index.docker.io/v2"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["The default endpoint for all other registries is ",(0,t.jsx)(r.code,{children:"https://<REGISTRY>/v2"}),", where ",(0,t.jsx)(r.code,{children:"<REGISTRY>"})," is the registry hostname and optional port."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["In order to be recognized as a registry, the first component of the image name must contain at least one period or colon.\nFor historical reasons, images without a registry specified in their name are implicitly identified as being from ",(0,t.jsx)(r.code,{children:"docker.io"}),"."]}),"\n",(0,t.jsx)(r.admonition,{title:"Version Gate",type:"info",children:(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"--disable-default-registry-endpoint"})," option is available as an experimental feature as of January 2024 releases: v1.26.13+k3s1, v1.27.10+k3s1, v1.28.6+k3s1, v1.29.1+k3s1"]})}),"\n",(0,t.jsxs)(r.p,{children:["Nodes may be started with the ",(0,t.jsx)(r.code,{children:"--disable-default-registry-endpoint"})," option.\nWhen this is set, containerd will not fall back to the default registry endpoint, and will only pull from configured mirror endpoints,\nalong with the distributed registry if it is enabled."]}),"\n",(0,t.jsx)(r.p,{children:"This may be desired if your cluster is in a true air-gapped environment where the upstream registry is not available,\nor if you wish to have only some nodes pull from the upstream registry."}),"\n",(0,t.jsxs)(r.p,{children:["Disabling the default registry endpoint applies only to registries configured via ",(0,t.jsx)(r.code,{children:"registries.yaml"}),".\nIf the registry is not explicitly configured via mirror entry in ",(0,t.jsx)(r.code,{children:"registries.yaml"}),", the default fallback behavior will still be used."]}),"\n",(0,t.jsx)(r.h2,{id:"registries-configuration-file",children:"Registries Configuration File"}),"\n",(0,t.jsx)(r.p,{children:"The file consists of two top-level keys, with subkeys for each registry:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"mirrors:\n  <REGISTRY>:\n    endpoint:\n      - https://<REGISTRY>/v2\nconfigs:\n  <REGISTRY>:\n    auth:\n      username: <BASIC AUTH USERNAME>\n      password: <BASIC AUTH PASSWORD>\n      token: <BEARER TOKEN>\n    tls:\n      ca_file: <PATH TO SERVER CA>\n      cert_file: <PATH TO CLIENT CERT>\n      key_file: <PATH TO CLIENT KEY>\n      insecure_skip_verify: <SKIP TLS CERT VERIFICATION BOOLEAN>\n"})}),"\n",(0,t.jsx)(r.h3,{id:"mirrors",children:"Mirrors"}),"\n",(0,t.jsx)(r.p,{children:"The mirrors section defines the names and endpoints of registries, for example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'mirrors:\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com:5000"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs, plus the default endpoint, and use the first working one."}),"\n",(0,t.jsx)(r.h4,{id:"redirects",children:"Redirects"}),"\n",(0,t.jsxs)(r.p,{children:["If the private registry is used as a mirror for another registry, such as when configuring a ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/registry/recipes/mirror/",children:"pull through cache"}),",\nimages pulls are transparently redirected to the listed endpoints. The original registry name is passed to the mirror endpoint via the ",(0,t.jsx)(r.code,{children:"ns"})," query parameter."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, if you have a mirror configured for ",(0,t.jsx)(r.code,{children:"docker.io"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Then pulling ",(0,t.jsx)(r.code,{children:"docker.io/rancher/mirrored-pause:3.6"})," will transparently pull the image as ",(0,t.jsx)(r.code,{children:"registry.example.com:5000/rancher/mirrored-pause:3.6"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"rewrites",children:"Rewrites"}),"\n",(0,t.jsx)(r.p,{children:"Each mirror can have a set of rewrites. Rewrites can change the name of an image based on regular expressions.\nThis is useful if the organization/project structure in the private registry is different than the registry it is mirroring."}),"\n",(0,t.jsxs)(r.p,{children:["For example, the following configuration would transparently pull the image ",(0,t.jsx)(r.code,{children:"docker.io/rancher/mirrored-pause:3.6"})," as ",(0,t.jsx)(r.code,{children:"registry.example.com:5000/mirrorproject/rancher-images/mirrored-pause:3.6"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["When using redirects and rewrites, images will still be stored under the original name.\nFor example, ",(0,t.jsx)(r.code,{children:"crictl image ls"})," will show ",(0,t.jsx)(r.code,{children:"docker.io/rancher/mirrored-pause:3.6"})," as available on the node, even though the image was pulled from the mirrored registry with a different name."]}),"\n",(0,t.jsx)(r.h3,{id:"configs",children:"Configs"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"configs"})," section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,t.jsx)(r.code,{children:"auth"})," and/or ",(0,t.jsx)(r.code,{children:"tls"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"tls"})," part consists of:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Directive"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"cert_file"})}),(0,t.jsx)(r.td,{children:"The client certificate path that will be used to authenticate with the registry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"key_file"})}),(0,t.jsx)(r.td,{children:"The client key path that will be used to authenticate with the registry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ca_file"})}),(0,t.jsx)(r.td,{children:"Defines the CA certificate path to be used to verify the registry's server cert file"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"insecure_skip_verify"})}),(0,t.jsx)(r.td,{children:"Boolean that defines if TLS verification should be skipped for the registry"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"auth"})," part consists of either username/password or authentication token:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Directive"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"username"})}),(0,t.jsx)(r.td,{children:"user name of the private registry basic auth"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"password"})}),(0,t.jsx)(r.td,{children:"user password of the private registry basic auth"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"auth"})}),(0,t.jsx)(r.td,{children:"authentication token of the private registry basic auth"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Below are basic examples of using private registries in different modes:"}),"\n",(0,t.jsx)(r.h3,{id:"with-tls",children:"With TLS"}),"\n",(0,t.jsxs)(r.p,{children:["Below are examples showing how you may configure ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," on each node when using TLS."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(i,{value:"With Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'})})}),(0,t.jsx)(i,{value:"Without Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'})})})]}),"\n",(0,t.jsx)(r.h3,{id:"without-tls",children:"Without TLS"}),"\n",(0,t.jsxs)(r.p,{children:["Below are examples showing how you may configure ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," on each node when ",(0,t.jsx)(r.em,{children:"not"})," using TLS."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(i,{value:"With Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'})})}),(0,t.jsx)(i,{value:"Without Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\n'})})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["In case of no TLS communication, you need to specify ",(0,t.jsx)(r.code,{children:"http://"})," for the endpoints, otherwise it will default to https."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In order for the registry changes to take effect, you need to restart K3s on each node."}),"\n",(0,t.jsx)(r.h2,{id:"troubleshooting-image-pulls",children:"Troubleshooting Image Pulls"}),"\n",(0,t.jsx)(r.p,{children:"When Kubernetes experiences problems pulling an image, the error displayed by the kubelet may only reflect the terminal error returned\nby the pull attempt made against the default endpoint, making it appear that the configured endpoints are not being used."}),"\n",(0,t.jsxs)(r.p,{children:["Check the containerd log on the node at ",(0,t.jsx)(r.code,{children:"/var/lib/rancher/k3s/agent/containerd/containerd.log"})," for detailed information on the root cause of the failure."]}),"\n",(0,t.jsx)(r.h2,{id:"adding-images-to-the-private-registry",children:"Adding Images to the Private Registry"}),"\n",(0,t.jsxs)(r.p,{children:["Mirroring images to a private registry requires a host with Docker or other 3rd party tooling that is capable of pulling and pushing images.",(0,t.jsx)(r.br,{}),"\n","The steps below assume you have a host with dockerd and the docker CLI tools, and access to both docker.io and your private registry."]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Obtain the ",(0,t.jsx)(r.code,{children:"k3s-images.txt"})," file from GitHub for the release you are working with."]}),"\n",(0,t.jsxs)(r.li,{children:["Pull each of the K3s images listed on the k3s-images.txt file from docker.io.",(0,t.jsx)(r.br,{}),"\n","Example: ",(0,t.jsx)(r.code,{children:"docker pull docker.io/rancher/mirrored-pause:3.6"})]}),"\n",(0,t.jsxs)(r.li,{children:["Retag the images to the private registry.",(0,t.jsx)(r.br,{}),"\n","Example: ",(0,t.jsx)(r.code,{children:"docker tag docker.io/rancher/mirrored-pause:3.6 registry.example.com:5000/rancher/mirrored-pause:3.6"})]}),"\n",(0,t.jsxs)(r.li,{children:["Push the images to the private registry.",(0,t.jsx)(r.br,{}),"\n","Example: ",(0,t.jsx)(r.code,{children:"docker push registry.example.com:5000/rancher/mirrored-pause:3.6"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,r,i)=>{i.d(r,{Z:()=>a,a:()=>o});var t=i(7294);const n={},s=t.createContext(n);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);