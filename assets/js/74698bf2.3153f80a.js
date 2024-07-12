"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[5147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),_=r,d=u["".concat(s,".").concat(_)]||u[_]||f[_]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",sidebar_position:2,title:"Is it possible to modify the step collection from a callback?"},a=void 0,l={unversionedId:"faq/is_it_possible_to_modify_step_collection_from_callback",id:"faq/is_it_possible_to_modify_step_collection_from_callback",title:"Is it possible to modify the step collection from a callback?",description:"No\u2757",source:"@site/docs/faq/is_it_possible_to_modify_step_collection_from_callback.mdx",sourceDirName:"faq",slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",permalink:"/faq/is_it_possible_to_modify_step_collection_from_callback",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/faq/is_it_possible_to_modify_step_collection_from_callback.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",sidebar_position:2,title:"Is it possible to modify the step collection from a callback?"},sidebar:"docs",previous:{title:"Why failures and errors? Why not just failure?",permalink:"/faq/why_both_failure_and_error"},next:{title:"Why `case/when` does NOT work with just result codes?",permalink:"/faq/why_case_when_does_not_work_with_jus_result_codes"}},s={},c=[],p={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No\u2757"),(0,r.kt)("p",null,"That is done by design."),(0,r.kt)("p",null,"One of the main ",(0,r.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," goals is the representation of the complex logic as a sequence of simple declarative steps."),(0,r.kt)("p",null,"This idea is completely lost when a callback allows modification of step collection."),(0,r.kt)("p",null,"Right after the first such mutation, you can not rely on what you see."),(0,r.kt)("p",null,"In order to make sure, that the steps declared at the build time are actually the same at runtime, you need to check implementation of every callback."),(0,r.kt)("p",null,"This contradicts the ",(0,r.kt)("a",{parentName:"p",href:"/glossary/clean_code"},"Clean Code")," definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'class Service\n  include ConvenientService::Standard::Config\n\n  step :one\n\n  step :two\n\n  step :three\n\n  before :step do\n    byebug\n\n    steps.clear\n    # => FrozenError\n  end\n\n  def one\n    puts "one"\n\n    success\n  end\n\n  def two\n    puts "two"\n\n    success\n  end\n\n  def three\n    puts "three"\n\n    success\n  end\nend\n\nService.result\n')))}f.isMDXComponent=!0}}]);