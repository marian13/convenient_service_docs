"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[8994],{8848:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=o(4848),i=o(8453),s=o(6025);const r={slug:"/troubleshooting/awesome_print_inspect_does_not_colorize",sidebar_position:2,title:"`AwesomePrintInspect` does not colorize"},c=void 0,l={id:"troubleshooting/awesome_print_inspect_does_not_colorize",title:"`AwesomePrintInspect` does not colorize",description:"Consider a service that includes the AwesomePrintInspect configuration.",source:"@site/docs/troubleshooting/awesome_print_inspect_does_not_colorize.mdx",sourceDirName:"troubleshooting",slug:"/troubleshooting/awesome_print_inspect_does_not_colorize",permalink:"/troubleshooting/awesome_print_inspect_does_not_colorize",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/troubleshooting/awesome_print_inspect_does_not_colorize.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/troubleshooting/awesome_print_inspect_does_not_colorize",sidebar_position:2,title:"`AwesomePrintInspect` does not colorize"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/category/troubleshooting"},next:{title:"`AmazingPrintInspect` does not colorize",permalink:"/troubleshooting/amazing_print_inspect_does_not_colorize"}},d={},a=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Consider a service that includes the ",(0,t.jsx)(n.code,{children:"AwesomePrintInspect"})," configuration."]}),"\n",(0,t.jsx)(n.p,{children:"Here is a minimal example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"ConvenientService::Dependencies.require_awesome_print_inspect\n\nclass Service\n  include ::ConvenientService::Standard::Config\n  include ::ConvenientService::AwesomePrintInspect::Config\n\n  def result\n    success(foo: :bar, baz: :qux)\n  end\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When it is called from the console like ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/irb",children:"IRB"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"Service.result\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The result should be pretty-printed by ",(0,t.jsx)(n.a,{href:"https://github.com/awesome-print/awesome_print",children:"awesome_print"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["But it actually outputs some ",(0,t.jsx)(n.a,{href:"https://colors.sh",children:'"weird escape characters"'})," ",(0,t.jsx)(n.code,{children:"^[[0;37m"}),", ",(0,t.jsx)(n.code,{children:"^[[0m"}),", or ",(0,t.jsx)(n.code,{children:"^[[0;33m"})," like in the screenshot below."]}),"\n",(0,t.jsx)("img",{src:(0,s.Ay)("./img/troubleshooting/awesome_print_inspect_does_not_colorize_results/weird_escape_characters.png")}),"\n",(0,t.jsxs)(n.p,{children:["After a deep diving into ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/irb",children:"IRB"})," ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/irb/blob/v1.13.1/lib/irb/inspector.rb#L113",children:"source"})," ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/irb/blob/v1.13.1/lib/irb/color.rb#L150",children:"code"}),", it was figured out that the issue may be caused by the upgrade of the ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/reline",children:"Reline"})," gem from Ruby std lib."]}),"\n",(0,t.jsxs)(n.p,{children:["To be more precise, the ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/reline/blob/v0.5.8/lib/reline/unicode.rb#L44C12-L44C28",children:(0,t.jsx)(n.code,{children:"Reline::Unicode.escape_for_print"})})," method now has more escaping rules."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ruby/reline/blob/v0.5.8/lib/reline/unicode.rb#L30",children:"One of them"})," replaces ",(0,t.jsx)(n.code,{children:"0x1B.ord"})," to ",(0,t.jsx)(n.code,{children:"^["}),"."]}),"\n",(0,t.jsx)(n.p,{children:"That is why the coloring becomes broken."}),"\n",(0,t.jsx)(n.p,{children:"There is one workaround to avoid the issue."}),"\n",(0,t.jsx)(n.p,{children:"Check the following monkey patch."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class Reline::Unicode\n  def self.escape_for_print(str)\n    str\n  end\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once it is applied, the output is colorized as expected."}),"\n",(0,t.jsx)("img",{src:(0,s.Ay)("./img/troubleshooting/awesome_print_inspect_does_not_colorize_results/proper_coloring.png")}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsxs)(n.p,{children:["Currently, it is not known which exact problem was solved by the Reline developers by ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/reline/commit/e7af054ba5ab8e749c92f9e5cf032f362ebbe747",children:"introducing additional escape rules"}),"."]}),(0,t.jsxs)(n.p,{children:["We are preparing to open a ",(0,t.jsx)(n.a,{href:"https://github.com/ruby/reline/issues",children:"GitHub issue"})," to ask."]}),(0,t.jsx)(n.p,{children:"Consequently, although the suggested monkey patch looks safe, we can not estimate its possible negative effect."}),(0,t.jsx)(n.p,{children:"Use it at your own risk."})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);