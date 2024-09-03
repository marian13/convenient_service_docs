"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[2374],{1634:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),o=n(8453);const i={slug:"/glossary/boolean_service",sidebar_position:1,title:"Boolean Service"},t=void 0,a={id:"glossary/boolean_service",title:"Boolean Service",description:"- Boolean service is a service that confirms/denies the concrete assumption.",source:"@site/docs/glossary/boolean_service.mdx",sourceDirName:"glossary",slug:"/glossary/boolean_service",permalink:"/glossary/boolean_service",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/glossary/boolean_service.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/glossary/boolean_service",sidebar_position:1,title:"Boolean Service"},sidebar:"docs",previous:{title:"Glossary",permalink:"/category/glossary"},next:{title:"Clean Code",permalink:"/glossary/clean_code"}},l={},c=[];function d(e){const s={code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Boolean service"})," is a service that confirms/denies the concrete assumption."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Boolean service"})," is a service that answers to the specific question."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Boolean service"})," is a service whose ",(0,r.jsx)(s.code,{children:"success"})," result has no data."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"success"})," result from the boolean service confirms the assumption stated in its name."]}),"\n",(0,r.jsx)(s.p,{children:"In other words, it answers positively to the question."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"failure"})," result from the boolean service tells why exactly the assumption is NOT accurate."]}),"\n",(0,r.jsx)(s.p,{children:"In other words, it answers negatively to the question + provides the reason."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"error"})," result explains why there is no even hypothetical opportunity to confirm/deny the assumption."]}),"\n",(0,r.jsx)(s.p,{children:"In other words, it gives no answer to the question at all."}),"\n",(0,r.jsx)(s.p,{children:"Here are some examples of such services:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:'class IsEmployeeFree\n  attr_reader :employee\n\n  def initialize(employee:)\n    @employee = employee\n  end\n\n  def result\n    return error("Employee can\'t be blank") if employee.blank?\n    return failure("Employee `#{employee.id}` has task `#{employee.tasks.find(&:in_progress?).id}` in progress") if employee.tasks.any?(&:in_progress?)\n\n    success\n  end\nend\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"IsEmployeeFree"})," assumes that an employee is available."]}),"\n",(0,r.jsx)(s.p,{children:"The following command either confirms or denies that assumption."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:"IsEmployeeFree.success?(employee: employee)\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:'class IsTaskUnassigned\n  attr_reader :task\n\n  def initialize(task:)\n    @task = task\n  end\n\n  def result\n    return error("Task can\'t be blank") if task.blank?\n    return failure("Task `#{task.id}` has employee `#{task.employee}`") if task.employee.present?\n\n    success\n  end\nend\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"IsTaskUnassigned"})," asks a question - is a task not assigned to anyone?"]}),"\n",(0,r.jsx)(s.p,{children:"The expression below answers it either positively or negatively."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:"IsEmployeeFree.success?(employee: employee)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Also as with any other type of service, the boolean service can be triggered via the ",(0,r.jsx)(s.code,{children:"result"})," method or a step:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:"result = IsEmployeeFree.result(employee: employee)\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ruby",children:'class AssignTaskToEmployee\n  include ConvenientService::Standard::Config\n\n  attr_reader :task, :employee\n\n  step IsTaskUnassigned,\n    in: :task\n\n  step IsEmployeeFree,\n    in: :employee\n\n  def initialize(task:, employee:)\n    @task = task\n    @employee = employee\n  end\n\n  def result\n    task.employee = employee\n\n    saved = task.save\n\n    return failure("Employee `#{employee.id}` is NOT saved to task `#{task.id}`") unless saved\n\n    success\n  end\nend\n'})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);