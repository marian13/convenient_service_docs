"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[7225],{7726:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=s(4848),r=s(8453),t=s(6025);const c={slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",sidebar_position:1,title:"How to rescue all result unhandled exceptions?"},l=void 0,o={id:"guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",title:"How to rescue all result unhandled exceptions?",description:"Use RescuesResultUnhandledExceptions plugin",source:"@site/docs/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions.mdx",sourceDirName:"guides/exception_handling",slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",permalink:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",sidebar_position:1,title:"How to rescue all result unhandled exceptions?"},sidebar:"docs",previous:{title:"Exception handling",permalink:"/category/exception-handling"},next:{title:"FDD",permalink:"/category/fdd"}},d={},a=[{value:"Use <strong>RescuesResultUnhandledExceptions</strong> plugin",id:"use-rescuesresultunhandledexceptions-plugin",level:2},{value:"Option 1: Modify config to rescue results in all services",id:"option-1-modify-config-to-rescue-results-in-all-services",level:3},{value:"Option 2: Modify service to rescue results in a single service",id:"option-2-modify-service-to-rescue-results-in-a-single-service",level:3},{value:"Result with exception becomes an error",id:"result-with-exception-becomes-an-error",level:2},{value:"Result has access to the original exception object",id:"result-has-access-to-the-original-exception-object",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"use-rescuesresultunhandledexceptions-plugin",children:["Use ",(0,i.jsx)(n.strong,{children:"RescuesResultUnhandledExceptions"})," plugin"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RescuesResultUnhandledExceptions"})," plugin intentionally ",(0,i.jsx)(n.a,{href:"https://thoughtbot.com/blog/rescue-standarderror-not-exception",children:"rescues only StandardErrors, not Exceptions"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RescuesResultUnhandledExceptions"})," plugin is especially useful for the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Fault_tolerance",children:"Fault Tolerant"})," production environments."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RescuesResultUnhandledExceptions"})," plugin is NOT included in the Standard config by default."]}),(0,i.jsx)(n.p,{children:"It is up to the end-users to decide whether it is needed for thier applications or not."})]}),"\n",(0,i.jsx)(n.h3,{id:"option-1-modify-config-to-rescue-results-in-all-services",children:"Option 1: Modify config to rescue results in all services"}),"\n",(0,i.jsx)("img",{src:(0,t.Ay)("img/guides/how_to_rescue_all_result_unhandled_exceptions/all_services_setup.png")}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# highlight-start\nConvenientService::Dependencies.require_rescues_result_unhandled_exceptions\n# highlight-end\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"module ApplicationService\n  module Config\n    include ConvenientService::Concern\n\n    included do |service_class|\n      service_class.class_exec do\n        include ConvenientService::Standard::Config\n\n        # highlight-start\n        middlewares :result, scope: :class do\n          use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n        end\n        # highlight-end\n      end\n    end\n  end\nend\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:'class Service\n  include ApplicationService::Config\n\n  def result\n    raise StandardError, "exception message"\n  end\nend\n'})}),"\n",(0,i.jsx)(n.h3,{id:"option-2-modify-service-to-rescue-results-in-a-single-service",children:"Option 2: Modify service to rescue results in a single service"}),"\n",(0,i.jsx)("img",{src:(0,t.Ay)("img/guides/how_to_rescue_all_result_unhandled_exceptions/single_service_setup.png")}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# highlight-start\nConvenientService::Dependencies.require_rescues_result_unhandled_exceptions\n# highlight-end\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"module ApplicationService\n  module Config\n    include ConvenientService::Concern\n\n    included do |service_class|\n      service_class.class_exec do\n        include ConvenientService::Standard::Config\n      end\n    end\n  end\nend\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:'class Service\n  include ApplicationService::Config\n\n  # highlight-start\n  middlewares :result, scope: :class do\n    use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n  end\n  # highlight-end\n\n  def result\n    raise StandardError, "exception message"\n  end\nend\n'})}),"\n",(0,i.jsx)(n.h2,{id:"result-with-exception-becomes-an-error",children:"Result with exception becomes an error"}),"\n",(0,i.jsx)("img",{src:(0,t.Ay)("img/guides/how_to_rescue_all_result_unhandled_exceptions/failure_example.png")}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Convenient Service"})," core team strongly believes that it is a responsibility of a developer to predict all possible exceptions reasonably."]}),(0,i.jsxs)(n.p,{children:["That is why the ",(0,i.jsx)(n.a,{href:"/basics/results",children:"result"})," is an ",(0,i.jsx)(n.a,{href:"/basics/errors",children:"error"}),", not a ",(0,i.jsx)(n.a,{href:"/basics/failures",children:"failure"}),"."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result = Service.result\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.success?\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"puts result.message\n"})}),"\n",(0,i.jsx)(n.h2,{id:"result-has-access-to-the-original-exception-object",children:"Result has access to the original exception object"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result.data[:exception]"})," is Ruby's ",(0,i.jsx)(n.a,{href:"https://ruby-doc.org/core-2.7.0/StandardError.html",children:"StandardError"})," object that inherits from ",(0,i.jsx)(n.a,{href:"https://ruby-doc.org/core-2.7.0/Exception.html",children:"Exception"}),"."]})}),"\n",(0,i.jsx)("img",{src:(0,t.Ay)("img/guides/how_to_rescue_all_result_unhandled_exceptions/original_exception.png")}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.data[:exception]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.data[:exception].class\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.data[:exception].message\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.data[:exception].backtrace.to_a.take(10)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"result.data[:exception].cause\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);