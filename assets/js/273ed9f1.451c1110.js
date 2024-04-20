"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[6810],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||s;return t?r.createElement(b,c(c({ref:n},u),{},{components:t})):r.createElement(b,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=f;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<s;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={slug:"/best_practices/skip_result_call_for_boolean_services",sidebar_position:4,title:"Skip `result` call for boolean services"},c=void 0,i={unversionedId:"best_practices/skip_result_call_for_boolean_services",id:"best_practices/skip_result_call_for_boolean_services",title:"Skip `result` call for boolean services",description:"Let's check the following boolean service:",source:"@site/docs/best_practices/skip_result_call_for_boolean_services.mdx",sourceDirName:"best_practices",slug:"/best_practices/skip_result_call_for_boolean_services",permalink:"/best_practices/skip_result_call_for_boolean_services",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/skip_result_call_for_boolean_services.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/best_practices/skip_result_call_for_boolean_services",sidebar_position:4,title:"Skip `result` call for boolean services"},sidebar:"docs",previous:{title:"Services with `or` conditionals",permalink:"/best_practices/services_with_or_conditionals"},next:{title:"Frequently Asked Questions",permalink:"/category/frequently-asked-questions"}},a={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's check the following ",(0,o.kt)("a",{parentName:"p",href:"/glossary/boolean_service"},"boolean service"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'class IsConnectionActive\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :connection\n\n  def initialize(:connection)\n    @connection = connection\n  end\n\n  def result\n    return error("Connection: can\'t be blank") if connection.blank?\n    return failure("Connection `#{connection.id}` is NOT connected") unless connection.connected?\n    return failure("Connection `#{connection.id}` has NO task") if connection.task.blank?\n    return failure("Connection `#{connection.id}` task is NOT in progress") unless connection.task.in_progres?\n\n    success\n  end\nend\n')),(0,o.kt)("p",null,"A common way to run a usual service is like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# okish\nresult = IsConnectionActive.result(connection: connection)\n\nif result.success?\n  ##\n  # `result.data` is processed somehow by the end-user here...\n  #\n  result.data\nelse\n\nend\n")),(0,o.kt)("p",null,"Most of the time you will probably work with ",(0,o.kt)("inlineCode",{parentName:"p"},"result.data")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"if result.success?")," branch."),(0,o.kt)("p",null,"But that is not the case for the ",(0,o.kt)("a",{parentName:"p",href:"/glossary/boolean_service"},"boolean services"),"."),(0,o.kt)("p",null,"Their ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," calls do NOT accept any data, that is why the previous chunk of code can be written in a shorter form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# better\nif IsConnectionActive.success?(connection: connection)\n\nelse\n\nend\n")))}p.isMDXComponent=!0}}]);