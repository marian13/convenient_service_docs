"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[2112],{3158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(4848),d=t(8453);const s={slug:"/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method",sidebar_position:1,title:"Invoke proxy middleware behavior via public method"},r=void 0,o={id:"best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method",title:"Invoke proxy middleware behavior via public method",description:"How?",source:"@site/docs/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method.mdx",sourceDirName:"best_practices/advanced",slug:"/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method",permalink:"/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method",sidebar_position:1,title:"Invoke proxy middleware behavior via public method"},sidebar:"docs",previous:{title:"Advanced",permalink:"/category/advanced-1"},next:{title:"Frequently Asked Questions",permalink:"/category/frequently-asked-questions"}},a={},l=[{value:"How?",id:"how",level:2},{value:"Why?",id:"why",level:2},{value:"Why not?",id:"why-not",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"how",children:"How?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"##\n# Okish.\n#\nmodule Plugins\n  module CanHaveConnectedSteps\n    class Middleware < MethodChainMiddleware\n      intended_for :result, entity: :service\n\n      def next(...)\n        return chain.next(...) if entity.steps.none?\n\n        entity.steps.each_evaluated_step do |step|\n          step.save_outputs_in_organizer!\n\n          # ...\n        end\n\n        entity.steps.result\n      end\n    end\n  end\nend\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"##\n# Better.\n#\nmodule Plugins\n  module CanHaveConnectedSteps\n    class Middleware < MethodChainMiddleware\n      intended_for :result, entity: :service\n\n      def next(...)\n        return chain.next(...) if entity.steps.none?\n\n        entity.steps_result(...)\n      end\n    end\n  end\nend\n\nmodule Plugins\n  module CanHaveConnectedSteps\n    module Concern\n      include Support::Concern\n\n      instance_methods do\n        def steps_result\n          # ...\n\n          steps.each_evaluated_step do |step|\n            step.save_outputs_in_organizer!\n\n            # ...\n          end\n\n          steps.result\n        end\n\n        # ...\n      end\n    end\n  end\nend\n"})}),"\n",(0,i.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It allows end-users to create middlewares specifically for proxy middleware behavior. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"##\n# Good.\n#\nclass Service\n  include ConvenientService::Standard::Config\n\n  middlewares :steps_result do\n    # ...\n  end\n\n  # ...\nend\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It decreases the amount of type checks."}),"\n",(0,i.jsx)(n.p,{children:"Without the extracted method, the end-user requries to utilize type checks to distinguish return values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"##\n# Bad.\n#\nclass Middleware < MethodChainMiddleware\n  intended_for :result, entity: :service\n\n  def next(...)\n    result = chain.next(...)\n\n    if result.from_step? # Type check.\n      some_logic_with(result)\n    else\n      # ...\n    end\n  end\nend\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"##\n# Better.\n#\nclass Middleware < MethodChainMiddleware\n  intended_for :step_result, entity: :service\n\n  def next(...)\n    result = chain.next(...)\n\n    some_logic_with(result)\n  end\nend\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It decreases the amount of order-dependent middlewares."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It simplifies specs. Methods are easier to tests than middlewares."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-not",children:"Why not?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When proxy middleware behavior is truly private."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const d={},s=i.createContext(d);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);