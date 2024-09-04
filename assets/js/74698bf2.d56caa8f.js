"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[4127],{9848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>_,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(4848),s=n(8453);const i={slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",sidebar_position:4,title:"Is it possible to modify the step collection from a callback?"},c=void 0,l={id:"faq/is_it_possible_to_modify_step_collection_from_callback",title:"Is it possible to modify the step collection from a callback?",description:"No\u2757",source:"@site/docs/faq/is_it_possible_to_modify_step_collection_from_callback.mdx",sourceDirName:"faq",slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",permalink:"/faq/is_it_possible_to_modify_step_collection_from_callback",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/faq/is_it_possible_to_modify_step_collection_from_callback.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/faq/is_it_possible_to_modify_step_collection_from_callback",sidebar_position:4,title:"Is it possible to modify the step collection from a callback?"},sidebar:"docs",previous:{title:"Why errors? Why not exceptions?",permalink:"/faq/why_error_not_exception"},next:{title:"Why `case/when` does NOT work with just result codes?",permalink:"/faq/why_case_when_does_not_work_with_jus_result_codes"}},r={},a=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No\u2757"}),"\n",(0,o.jsx)(t.p,{children:"That is done by design."}),"\n",(0,o.jsxs)(t.p,{children:["One of the main ",(0,o.jsx)(t.a,{href:"/",children:"Convenient Service"})," goals is the representation of the complex logic as a sequence of simple declarative steps."]}),"\n",(0,o.jsx)(t.p,{children:"This idea is completely lost when a callback allows modification of step collection."}),"\n",(0,o.jsx)(t.p,{children:"Right after the first such mutation, you can not rely on what you see."}),"\n",(0,o.jsx)(t.p,{children:"In order to make sure, that the steps declared at the build time are actually the same at runtime, you need to check implementation of every callback."}),"\n",(0,o.jsxs)(t.p,{children:["This contradicts the ",(0,o.jsx)(t.a,{href:"/glossary/clean_code",children:"Clean Code"})," definition."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'class Service\n  include ConvenientService::Standard::Config\n\n  step :one\n\n  step :two\n\n  step :three\n\n  before :step do\n    byebug\n\n    steps.clear\n    # => FrozenError\n  end\n\n  def one\n    puts "one"\n\n    success\n  end\n\n  def two\n    puts "two"\n\n    success\n  end\n\n  def three\n    puts "three"\n\n    success\n  end\nend\n\nService.result\n'})})]})}function _(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var o=n(6540);const s={},i=o.createContext(s);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);