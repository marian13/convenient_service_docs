"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[4618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,f=p["".concat(o,".").concat(v)]||p[v]||d[v]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={slug:"/guides/how_to_debug_services_via_callbacks",sidebar_position:4,title:"How to debug services via callbacks?"},i=void 0,l={unversionedId:"guides/how_to_debug_services_via_callbacks",id:"guides/how_to_debug_services_via_callbacks",title:"How to debug services via callbacks?",description:"Use after result",source:"@site/docs/guides/how_to_debug_services_via_callbacks.mdx",sourceDirName:"guides",slug:"/guides/how_to_debug_services_via_callbacks",permalink:"/convenient_service_docs/guides/how_to_debug_services_via_callbacks",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/how_to_debug_services_via_callbacks.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/guides/how_to_debug_services_via_callbacks",sidebar_position:4,title:"How to debug services via callbacks?"},sidebar:"docs",previous:{title:"How to pass a value to step from class/instance scope?",permalink:"/convenient_service_docs/guides/how_to_pass_value_to_step_class_or_instance_scope"},next:{title:"How to find result parents?",permalink:"/convenient_service_docs/guides/how_to_find_result_parents"}},o={},c=[{value:"Use <code>after</code> result",id:"use-after-result",level:2},{value:"Use <code>after</code> step",id:"use-after-step",level:2},{value:"Use <code>around</code> result",id:"use-around-result",level:2},{value:"Use <code>after</code> step",id:"use-after-step-1",level:2},{value:"Real-world example",id:"real-world-example",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"use-after-result"},"Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"after")," result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"after :result do |result|\n  binding.pry\nend\n")),(0,a.kt)("h2",{id:"use-after-step"},"Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"after")," step"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"##\n# Step is Result-like duck.\n#\nafter :step do |step|\n  byebug\nend\n")),(0,a.kt)("h2",{id:"use-around-result"},"Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"around")," result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'after :result do |chain|\n  puts "before"\n\n  result = chain.yield\n\n  p "after"\nend\n')),(0,a.kt)("h2",{id:"use-after-step-1"},"Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"after")," step"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'##\n# Step is Result-like duck.\n#\nafter :step do |step|\n  binding.break\n\n  step = chain.yield\n\n  print "after"\nend\n')),(0,a.kt)("h2",{id:"real-world-example"},"Real-world example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'# frozen_string_literal: true\n\nmodule Services\n  class AssertNpmPackageAvailable\n    include ConvenientService::Standard::Config\n\n    attr_reader :name\n\n    step :validate_name\n\n    step Services::AssertNodeAvailable\n\n    step Services::RunShell, in: {command: -> { "npm list #{name} --depth=0 > /dev/null 2>&1" }}\n\n    # highlight-start\n    after :result do |result|\n      binding.pry\n    end\n\n    after :step do |step|\n      byebug\n    end\n    # highlight-end\n\n    def initialize(name:)\n      @name = name\n    end\n\n    private\n\n    def validate_name\n      return failure(name: "Name is `nil`") if name.nil?\n      return failure(name: "Name is empty") if name.empty?\n\n      success\n    end\n  end\nend\n')))}d.isMDXComponent=!0}}]);