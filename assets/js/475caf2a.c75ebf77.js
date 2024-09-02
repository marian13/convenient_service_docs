"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[3767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(r),g=s,v=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var o=2;o<i;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(7462),s=(r(7294),r(3905));const i={slug:"/guides/debugging/how_to_access_result_original_service",sidebar_position:5,title:"How to access result original service?"},a=void 0,c={unversionedId:"guides/debugging/how_to_access_result_original_service",id:"guides/debugging/how_to_access_result_original_service",title:"How to access result original service?",description:"The Result#service method returns the service instance that created its result.",source:"@site/docs/guides/debugging/how_to_access_result_original_service.mdx",sourceDirName:"guides/debugging",slug:"/guides/debugging/how_to_access_result_original_service",permalink:"/guides/debugging/how_to_access_result_original_service",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/debugging/how_to_access_result_original_service.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/guides/debugging/how_to_access_result_original_service",sidebar_position:5,title:"How to access result original service?"},sidebar:"docs",previous:{title:"How to access result attributes without checking its status?",permalink:"/guides/debugging/how_to_access_result_attributes_without_checking_its_status"},next:{title:"How to check whether the result comes from an unhandled exception?",permalink:"/guides/debugging/how_to_check_whether_result_comes_from_exception"}},l={},o=[],u={toc:o};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Result#service")," method returns the service instance that created its result."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class Service\n  include ConvenientService::Standard::Config\n\n  def result\n    success\n  end\nend\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result = Service.result\n# => <Service::Result status: :success>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result.service\n# => <Service>\n")),(0,s.kt)("p",null,"When the result is bubbled up from a deeply nested step, the ",(0,s.kt)("inlineCode",{parentName:"p"},"Result#service")," method returns a top-level organizer instance."),(0,s.kt)("p",null,"Let's see it in practice:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class TwoLevelsNestedService\n  include ConvenientService::Standard::Config\n\n  def result\n    success\n  end\nend\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class OneLevelNestedService\n  include ConvenientService::Standard::Config\n\n  step TwoLevelsNestedService\nend\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class Service\n  include ConvenientService::Standard::Config\n\n  step OneLevelNestedService\nend\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result = Service.result\n# => <Service::Result status: :success>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result.service\n# => <Service>\n")),(0,s.kt)("p",null,"Here, the ",(0,s.kt)("inlineCode",{parentName:"p"},"TwoLevelsNestedService")," creates a ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," result."),(0,s.kt)("p",null,"Later this result is processed by steps from the ",(0,s.kt)("inlineCode",{parentName:"p"},"OneLevelNestedService")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Service")," services."),(0,s.kt)("p",null,"That is why it becomes the ",(0,s.kt)("inlineCode",{parentName:"p"},"Service")," overall result."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result.service\n# => <Service>\n")),(0,s.kt)("p",null,"Sometimes it may be useful to access the original service instance, e.g. for debugging purposes."),(0,s.kt)("p",null,"For that reason the ",(0,s.kt)("inlineCode",{parentName:"p"},"Result#original_service")," method is available."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result.original_service\n# => <TwoLevelsNestedService>\n")))}p.isMDXComponent=!0}}]);