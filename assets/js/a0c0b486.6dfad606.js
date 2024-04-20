"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(r),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=r[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),i=r(4996);const a={slug:"/guides/advanced/logging/how_to_print_lib_logs",sidebar_position:2,title:"How to print library logs?"},l=void 0,s={unversionedId:"guides/advanced/logging/how_to_print_lib_logs",id:"guides/advanced/logging/how_to_print_lib_logs",title:"How to print library logs?",description:"Log levels",source:"@site/docs/guides/advanced/logging/how_to_print_lib_logs.mdx",sourceDirName:"guides/advanced/logging",slug:"/guides/advanced/logging/how_to_print_lib_logs",permalink:"/guides/advanced/logging/how_to_print_lib_logs",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/advanced/logging/how_to_print_lib_logs.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/guides/advanced/logging/how_to_print_lib_logs",sidebar_position:2,title:"How to print library logs?"},sidebar:"docs",previous:{title:"Logging",permalink:"/category/logging"},next:{title:"How to migrate from `Standard::V1`?",permalink:"/guides/advanced/how_to_migrate_from_standard_v1"}},g={},c=[{value:"Log levels",id:"log-levels",level:2},{value:"Colored logs",id:"colored-logs",level:2},{value:"Configuration via script",id:"configuration-via-script",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"log-levels"},"Log levels"),(0,o.kt)("p",null,"It is possible to configure internal library logging by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVENIENT_SERVICE_LOGGER_LEVEL")," env variable."),(0,o.kt)("p",null,"It is defaulting to ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", which is why the majority of the logs are skipped most of the time."),(0,o.kt)("p",null,"But you can modify this behavior by setting a different ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger/Severity.html"},"severity level"),"."),(0,o.kt)("p",null,"Just place the env variable in front of the command that starts your Ruby process which utilizes ",(0,o.kt)("a",{parentName:"p",href:"/"},"Convenient Service"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CONVENIENT_SERVICE_LOGGER_LEVEL=debug bundle exec rails console\n")),(0,o.kt)("p",null,"Since the ",(0,o.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," logger is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ruby/logger"},"Ruby stdlib Logger"),", it supports the same levels."),(0,o.kt)("p",null,"Here is the screenshot straight from its official ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html"},"docs"),"."),(0,o.kt)("img",{src:(0,i.Z)("img/guides/advanced/how_to_print_lib_logs/log_levels.png")}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"When your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ruby/logger/tree/v1.2.8.1"},"Ruby stdlib Logger")," with a version older than ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.0"),", then ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ruby/logger/commit/74690b87b15244e19dd91cd06ae295251e1e5781"},"log levels as words are not supported yet"),"."),(0,o.kt)("p",{parentName:"admonition"},"Pass numbers in such cases."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CONVENIENT_SERVICE_LOGGER_LEVEL=0 bundle exec rails console\n")),(0,o.kt)("img",{src:(0,i.Z)("img/guides/advanced/how_to_print_lib_logs/log_levels_as_numbers.png")})),(0,o.kt)("h2",{id:"colored-logs"},"Colored logs"),(0,o.kt)("p",null,"If you have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janlelis/paint#setup"},"Ruby Paint")," gem as a dependency, and it is ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Kernel.html#method-i-require"},"required"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVENIENT_SERVICE_LOGGER_ENABLE_COLORS")," env variable activates coloring like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CONVENIENT_SERVICE_LOGGER_LEVEL=0 CONVENIENT_SERVICE_LOGGER_ENABLE_COLORS=true bundle exec rails console\n")),(0,o.kt)("h2",{id:"configuration-via-script"},"Configuration via script"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," logger can be accessed inside any Ruby source as well."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"ConvenientService.logger.level = Logger::INFO\n")))}d.isMDXComponent=!0}}]);