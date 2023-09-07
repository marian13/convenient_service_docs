"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[5930,7918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6915:(e,t,n)=>{n.d(t,{Z:()=>r});const r="0.12.0"},8573:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7410),i=n(7294),o=n(814);(void 0!==n.g?n.g:window).Prism=r.Z,n(9385);function a(e){let{children:t,...n}=e;return i.createElement(i.Fragment,null,i.createElement(o.Z,n,(e=>{let t=e.toString().split("\n");t=""===t[0]?t.slice(1):t;const n=t.find((e=>e.length)).search(/[^ ]/),r=-1===n?0:n;return t.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(r))).join("\n")})(t)))}},694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),o=n(8573),a=n(6915);const l={slug:"/installation",sidebar_position:1,title:"Installation"},c=void 0,s={unversionedId:"installation",id:"installation",title:"Installation",description:"There are multiple installation methods. Pick the one that best fits your needs.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/convenient_service_docs/installation",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/installation",sidebar_position:1,title:"Installation"},sidebar:"docs",previous:{title:"Requirements",permalink:"/convenient_service_docs/requirements"},next:{title:"Basics",permalink:"/convenient_service_docs/category/basics"}},u={},p=[{value:"Bundler",id:"bundler",level:2},{value:"Without Bundler",id:"without-bundler",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are multiple installation methods. Pick the one that best fits your needs."),(0,i.kt)("h2",{id:"bundler"},"Bundler"),(0,i.kt)("p",null,"Add the following line to your Gemfile:"),(0,i.kt)(o.Z,{language:"ruby",mdxType:"CodeBlock"},`gem "convenient_service", "~> ${a.Z}"`),(0,i.kt)("p",null,"And then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bundle install\n")),(0,i.kt)("h2",{id:"without-bundler"},"Without Bundler"),(0,i.kt)("p",null,"Execute the command below:"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},`gem install convenient_service -v ${a.Z}`),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Convenient Service follows the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," standard.")))}m.isMDXComponent=!0}}]);