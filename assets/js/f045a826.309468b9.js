"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[5029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"/basics/errors",sidebar_position:4,title:"Errors"},i=void 0,s={unversionedId:"basics/errors",id:"basics/errors",title:"Errors",description:"Now, it is the time to describe each result type. Let's start with errors.",source:"@site/docs/basics/errors.mdx",sourceDirName:"basics",slug:"/basics/errors",permalink:"/basics/errors",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/errors.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/basics/errors",sidebar_position:4,title:"Errors"},sidebar:"docs",previous:{title:"Service goals",permalink:"/basics/service_goals"},next:{title:"Failures",permalink:"/basics/failures"}},c={},l=[{value:"What is an error?",id:"what-is-an-error",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now, it is the time to describe each result type. Let's start with ",(0,a.kt)("em",{parentName:"p"},"errors"),"."),(0,a.kt)("h2",{id:"what-is-an-error"},"What is an error?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Error")," is a result type caused either by the wrong input data (",(0,a.kt)("em",{parentName:"p"},"validation error"),") or by the exceptional behaviour (",(0,a.kt)("em",{parentName:"p"},"exception error"),")."),(0,a.kt)("p",null,"In some cases, it may be a validation rule violation, unsatisfied ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.c2.com/?ReplaceCommentWithAssertion"},"assertion"),", or unmet precondition based on the service arguments."),(0,a.kt)("p",null,"It is a responsibility of a developer/service user to provide correct inputs."),(0,a.kt)("p",null,"Otherwise, there is no sense in even starting any service processing."),(0,a.kt)("p",null,"Also errors are often semantically close to the ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Exception.html"},"exceptions"),"."),(0,a.kt)("p",null,"In other words, service errors are frequently located at the same places where ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Exception.html"},"exceptions")," are ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.com/docs/ProgrammingRuby/html/tut_exceptions.html"},"raised/rescued")," in the reqular methods."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Exceptional behaviour like HTTP connection issues, database inconsistencies, timeouts, etc are also errors.")),(0,a.kt)("p",null,"Check out the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class EnsureFeatureActive\n  # ...\n  def initialize(name:)\n    @name = name\n  end\n\n  def result\n    return error("Feature name can NOT be `nil`") if name.nil?\n    return error("Unknown feature `#{name}`") unless Feature.exist?(name: name)\n\n    # ... Tricky and non trivial logic to ensure that feature is active...\n  rescue Feature::Exceptions::ConnectionTimeout => exception\n    return error("Feature `#{name}` connection timeout due to `#{exception.message}`")\n  end\nend\n')),(0,a.kt)("p",null,"And this is how it can be triggerred:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'result = EnsureFeatureActive.result(name: "Fancy feature")\n\nif result.error?\n  # `result.message` is a string-like object with error reason.\n  result.message\nend\n')),(0,a.kt)("p",null,"There is no point to involve all the heavy machinery when the feature name is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("p",null,"Why do we need to waste any expensive resources if the feature name is unknown?"),(0,a.kt)("p",null,"Can we guarantee whether the feature is actually active when a connection timeout happens?"),(0,a.kt)("p",null,"So, the one of the purposes of the error result is to say that the callers need to make adjustments in their code/config/dependency, not the service authors."))}p.isMDXComponent=!0}}]);