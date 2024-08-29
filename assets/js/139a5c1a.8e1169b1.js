"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[9776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/best_practices/fdd/describe_feature_public_interface_using_entries",sidebar_position:1,title:"Describe feature public interface using entries"},c=void 0,o={unversionedId:"best_practices/fdd/describe_feature_public_interface_using_entries",id:"best_practices/fdd/describe_feature_public_interface_using_entries",title:"Describe feature public interface using entries",description:"This way it becomes easier to get an overview of what a feature can do.",source:"@site/docs/best_practices/fdd/describe_feature_public_interface_using_entries.mdx",sourceDirName:"best_practices/fdd",slug:"/best_practices/fdd/describe_feature_public_interface_using_entries",permalink:"/best_practices/fdd/describe_feature_public_interface_using_entries",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/fdd/describe_feature_public_interface_using_entries.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/best_practices/fdd/describe_feature_public_interface_using_entries",sidebar_position:1,title:"Describe feature public interface using entries"},sidebar:"docs",previous:{title:"FDD",permalink:"/category/fdd-1"},next:{title:"Cast feature arguments inside entries",permalink:"/best_practices/fdd/cast_feature_arguments_inside_entries"}},s={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This way it becomes easier to get an overview of what a feature can do."),(0,a.kt)("p",null,"Here is an example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Gemfile")," feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"module Features\n  class Gemfile\n    include ConvenientService::Feature::Standard::Config\n\n    entry :format\n    entry :lint\n    entry :update\n    entry :regenerate\n\n    def format\n      # ...\n    end\n\n    def lint\n      # ...\n    end\n\n    def update\n      # ...\n    end\n\n    def regenerate\n      # ...\n    end\n  end\nend\n")),(0,a.kt)("p",null,"Having a quick eye on the list of entries you immediately realize that there are abilities to ",(0,a.kt)("inlineCode",{parentName:"p"},"format"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"regenerate")," Gemfiles."),(0,a.kt)("p",null,"Now, check out the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestParams")," feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"module Features\n  class RequestParams\n    include ConvenientService::Feature::Standard::Config\n\n    entry :extract_from_url_path\n    entry :extract_from_url_query\n    entry :extract_from_body\n\n    def extract_from_url_path\n      # ...\n    end\n\n    def extract_from_url_query\n      # ...\n    end\n\n    def extract_from_body\n      # ...\n    end\n  end\nend\n")),(0,a.kt)("p",null,"The same story, once you review the entries' names, you get the idea of what the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestParams")," feature is about."),(0,a.kt)("p",null,"It gives the opportunity to extract parameters from the request body and URL path/query."))}p.isMDXComponent=!0}}]);