"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[7215],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const a={slug:"/glossary/boolean_service",sidebar_position:1,title:"Boolean Service"},o=void 0,l={unversionedId:"glossary/boolean_service",id:"glossary/boolean_service",title:"Boolean Service",description:"- Boolean service is a service that confirms/denies an assumption.",source:"@site/docs/glossary/boolean_service.mdx",sourceDirName:"glossary",slug:"/glossary/boolean_service",permalink:"/convenient_service_docs/glossary/boolean_service",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/glossary/boolean_service.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/glossary/boolean_service",sidebar_position:1,title:"Boolean Service"},sidebar:"docs",previous:{title:"Glossary",permalink:"/convenient_service_docs/category/glossary"},next:{title:"Clean Code",permalink:"/convenient_service_docs/glossary/clean_code"}},i={},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Boolean service")," is a service that confirms/denies an assumption.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Boolean service")," is a service that answers to a question.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Boolean service")," is a service whose ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," result has no data."))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"success")," result from the boolean service confirms the assumption stated in its name, in other words, it answers positively to the question."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"error")," result from the boolean service tells why exactly the assumption is NOT accurate, in other words, it answers negatively to the question + provides the reason."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"failure")," result explains why there is no even hypothetical opportunity to confirm/deny the assumption, in other words, it gives no answer to the question at all."),(0,s.kt)("p",null,"Here are some examples of such services:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class IsEmployeeFree\n  attr_reader :employee\n\n  def initialize(:employee)\n    @employee = employee\n  end\n\n  def result\n    return failure(employee: "can\'t be blank") if employee.blank?\n    return error("Employee `#{employee.id}` has task `#{employee.tasks.find(&:in_progress?).id}` in progress") if employee.tasks.any?(&:in_progress?)\n\n    success\n  end\nend\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"IsEmployeeFree")," assumes that an employee is available."),(0,s.kt)("p",null,"The following command either confirms or denies that assumption."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"IsEmployeeFree.success?(employee: employee)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class IsTaskUnassigned\n  attr_reader :task\n\n  def initialize(:task)\n    @task = task\n  end\n\n  def result\n    return failure(task: "can\'t be blank") if task.blank?\n    return error("Task `#{task.id}` has employee `#{task.employee}`") if task.employee.present?\n\n    success\n  end\nend\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"IsTaskUnassigned")," asks a question - is a task not assigned to anyone?"),(0,s.kt)("p",null,"The expression below answers it either positively or negatively."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"IsEmployeeFree.success?(employee: employee)\n")),(0,s.kt)("p",null,"Also as with any other type of service, the boolean service can be triggered via the ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," method or a step:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result = IsEmployeeFree.result(employee: employee)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class AssignTaskToEmployee\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :task, :employee\n\n  step IsTaskUnassigned,\n    in: :task\n\n  step IsEmployeeFree,\n    in: :employee\n\n  def initialize(task:, employee:)\n    @task = task\n    @employee = employee\n  end\n\n  def result\n    task.employee = employee\n\n    saved = task.save\n\n    return error("Task `#{task.id}` employee `#{employee.id}` is NOT saved") unless saved\n\n    success\n  end\nend\n')))}u.isMDXComponent=!0}}]);