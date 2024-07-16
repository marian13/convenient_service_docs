"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[6760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/faq/why_error_not_exception",sidebar_position:1,title:"Why errors? Why not exceptions?"},i=void 0,s={unversionedId:"faq/why_error_not_exception",id:"faq/why_error_not_exception",title:"Why errors? Why not exceptions?",description:"Unhandled exceptions are crashing important flows for minor reasons too often",source:"@site/docs/faq/why_error_not_exception.md",sourceDirName:"faq",slug:"/faq/why_error_not_exception",permalink:"/faq/why_error_not_exception",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/faq/why_error_not_exception.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/faq/why_error_not_exception",sidebar_position:1,title:"Why errors? Why not exceptions?"},sidebar:"docs",previous:{title:"Why failures and errors? Why not just failure or error?",permalink:"/faq/why_both_failure_and_error"},next:{title:"Is it possible to modify the step collection from a callback?",permalink:"/faq/is_it_possible_to_modify_step_collection_from_callback"}},l={},p=[{value:"Unhandled exceptions are crashing important flows for minor reasons too often",id:"unhandled-exceptions-are-crashing-important-flows-for-minor-reasons-too-often",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unhandled-exceptions-are-crashing-important-flows-for-minor-reasons-too-often"},"Unhandled exceptions are crashing important flows for minor reasons too often"),(0,a.kt)("p",null,"Imagine we have a travel app."),(0,a.kt)("p",null,"A typical apartment booking flow may look like the following."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User opens the application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User selects location, dates, guest number, etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User books an apartment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Host accepts the booking.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User pays for the apartment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"And so on..."))),(0,a.kt)("p",null,"After a while, a new requirement is received to display a small discount proposals widget for the apartments that are located in the not popular regions."),(0,a.kt)("p",null,"Business truly and argumentably believes that such a feature will increase the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conversion_rate_optimization"},"conversion rate"),"."),(0,a.kt)("p",null,"The region popularity detection algorithm is developed by a different team, which swears that it works as expected, but the unit tests are not finished due to other commitments."),(0,a.kt)("p",null,"With constant pressure from the higher management, an inexperienced developer agrees to add the widget with the subsequent release."),(0,a.kt)("p",null,"Once the new app version is deployed, apartment selection starts to crash, preventing the users from completing bookings."),(0,a.kt)("p",null,"The rest is history."),(0,a.kt)("p",null,"Massive panic."),(0,a.kt)("p",null,"Endless late-night meetings and discussions."),(0,a.kt)("p",null,"DevOps engineers who know how to roll back the change are on vacation."),(0,a.kt)("p",null,"End-users are posting negative feedback on their social media, etc."),(0,a.kt)("p",null,"Instead of increasing the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conversion_rate_optimization"},"conversion rate"),", it is now significantly degraded."),(0,a.kt)("p",null,"The moral of the story is that the new feature was added in a non ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fault_tolerance"},"fault-tolerant")," way."),(0,a.kt)("p",null,"Sure, the discount widget is a useful functionality when properly implemented."),(0,a.kt)("p",null,"But, it is just a tiny component in the context of the full apartment booking flow."),(0,a.kt)("p",null,"Thus not having a feature-specific exception handler for it is an unjustified risk."),(0,a.kt)("p",null,"That is why ",(0,a.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," promotes the idea of using ",(0,a.kt)("a",{parentName:"p",href:"/basics/errors"},"error results")," instead of regular exceptions."),(0,a.kt)("p",null,"They help to develop ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fault_tolerance"},"fault-tolerant")," systems right from the beginning."),(0,a.kt)("p",null,"Let's tackle a more ground-facing example, that every Ruby developer experiences from time to time."),(0,a.kt)("p",null,"Data and time formatting \ud83e\udd72."),(0,a.kt)("p",null,"A minimal code snippet to illustrate the issue is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'require "date"\n\ndef format_date(string)\n  Date.strptime(string, "%Y-%m-%d")\nend\n')),(0,a.kt)("p",null,"Once the user's browser localization format changes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"format_date")," method breaks the whole page by raising ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid date (Date::Error)")," exceptions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'format_date("2024/07/16")\n# =>\n#   `strptime\': invalid date (Date::Error)\n#\n#   Date.strptime(string, "%Y-%m-%d")\n#                 ^^^^^^^^^^^^^^^^^^\n')),(0,a.kt)("p",null,"At the same time, a corresponding service encloses unhandled exceptions by converting them into error results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'require "convenient_service"\n\nConvenientService::Dependencies.require_rescues_result_unhandled_exceptions\n\nclass FormatDate\n  include ConvenientService::Standard::Config\n\n  attr_reader :string\n\n middlewares :result do\n use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n  end\n\n  def initialize(string:)\n    @string = string\n  end\n\n  def result\n formatted_date = Date.strptime(string, "%Y-%m-%d")\n\n    success(formatted_date: formatted_date)\n  end\nend\n')),(0,a.kt)("p",null,"Technically speaking, it creates so-called ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/cppblog/exception-boundaries"},"exception boundaries"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'result = FormatDate.result(string: "2024/07/16")\n# =>\n#   <FormatDate::Result status: :error data_keys: [:exception] message: "Date::Error:\n#   ...\n#\n')),(0,a.kt)("p",null,"As a consequence, only a single service has an unpredicted mistake, but since its negative effect is isolated, the rest of the system stays functional."),(0,a.kt)("p",null,"Due to the fact that unhandled exceptions can not leak outside error results boundaries, the code becomes ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fault_tolerance"},"fault-tolerant")," by default."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RescuesResultUnhandledExceptions")," plugin is not included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Standard")," configuration."),(0,a.kt)("p",{parentName:"admonition"},"End-users have the ability to decide by themselves whether to add it or not."),(0,a.kt)("p",{parentName:"admonition"},"For example, the best practice says to use it for development and production environments."),(0,a.kt)("p",{parentName:"admonition"},"This way you can learn how the plugin works during development and have a calm and healthy sleep when the code is released."),(0,a.kt)("p",{parentName:"admonition"},"But for the testing environment, it is still beneficial to not auto rescue exceptions to find them faster.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This article demonstrates the concept that there is a possibility of an automated fallback for exceptions."),(0,a.kt)("p",{parentName:"admonition"},"However, developers still need to reasonably predict the edge cases and describe them explicitly in order to have more explanatory error messages."),(0,a.kt)("p",{parentName:"admonition"},"So, the properly finished ",(0,a.kt)("inlineCode",{parentName:"p"},"FormatDate")," service is written below."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class FormatDate\n  include ConvenientService::Standard::Config\n\n  attr_reader :string\n\n middlewares :result do\n use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n  end\n\n  def initialize(string:)\n    @string = string\n  end\n\n  def result\n    success(date_time: ::DateTime.strptime(string, format))\n  rescue ::Date::Error\n    error("String `#{string}` does NOT follow date time `#{format}`")\n  end\nend\n'))))}d.isMDXComponent=!0}}]);