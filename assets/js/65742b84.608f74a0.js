"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[6145],{6482:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453),o=i(2879);const d={slug:"/guides/debugging/how_to_call_method_skipping_its_middlewares",sidebar_position:3,title:"How to call a method skipping its middlewares?"},r=void 0,l={id:"guides/debugging/how_to_call_method_skipping_its_middlewares",title:"How to call a method skipping its middlewares?",description:"For some rare cases, it may be useful to have a way to call a method skipping all its middlewares.",source:"@site/docs/guides/debugging/how_to_call_method_skipping_its_middlewares.mdx",sourceDirName:"guides/debugging",slug:"/guides/debugging/how_to_call_method_skipping_its_middlewares",permalink:"/guides/debugging/how_to_call_method_skipping_its_middlewares",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/debugging/how_to_call_method_skipping_its_middlewares.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/guides/debugging/how_to_call_method_skipping_its_middlewares",sidebar_position:3,title:"How to call a method skipping its middlewares?"},sidebar:"docs",previous:{title:"How to skip internal library frames in the debugger session?",permalink:"/guides/debugging/how_to_skip_internal_library_frames_in_debugger_session"},next:{title:"Exception handling",permalink:"/category/exception-handling"}},a={},c=[];function u(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{version:"0.20"}),"\n",(0,t.jsx)(n.p,{children:"For some rare cases, it may be useful to have a way to call a method skipping all its middlewares."}),"\n",(0,t.jsx)(n.p,{children:"Consider the following example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class Service\n  include ConvenientService::Standard::Config\n\n  def result\n    success\n  end\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To make it more illustrative, let's add a simple middleware that just prints some text before and after calling the original ",(0,t.jsx)(n.code,{children:"result"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'class Middleware < ConvenientService::MethodChainMiddleware\n  def next(...)\n    puts "Before calling `#{method}`..."\n\n    value = chain.next(...)\n\n    puts "After calling `#{method}`..."\n\n    value\n  end\nend\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is how it can be registered."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class Service\n  include ConvenientService::Standard::Config\n\n  middlewares :result, scope: :class do\n    use Middleware\n  end\n\n  def result\n    success\n  end\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["So now, when we invoke ",(0,t.jsx)(n.code,{children:"Service.result"}),", additional logs are printed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"result = Service.result\n# Before calling result...\n# After calling result...\n# => <Service::Result status: :success>\n"})}),"\n",(0,t.jsx)(n.p,{children:"But there is still a possibility to call it without middlewares like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"result = Service.result_without_middlewares\n# => <Service::Result status: :success>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["When the original method ends with ",(0,t.jsx)(n.code,{children:"?"}),", like ",(0,t.jsx)(n.code,{children:"success?"}),", the corresponding skipping method is ",(0,t.jsx)(n.code,{children:"success_without_middlewares?"}),"."]}),(0,t.jsxs)(n.p,{children:["The same rule is applicable for methods with trailing ",(0,t.jsx)(n.code,{children:"!"}),"."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bar!"})," -> ",(0,t.jsx)(n.code,{children:"bar_without_middlewares!"}),"."]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.p,{children:"Keep in mind that the ability to skip middlewares is present just for debugging purposes."}),(0,t.jsx)(n.p,{children:"There are NO common use cases for the production business code with it."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7293:(e,n,i)=>{i.d(n,{A:()=>T});var t=i(6540),s=i(4848);function o(e){const{mdxAdmonitionTitle:n,rest:i}=function(e){const n=t.Children.toArray(e),i=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==i)),d=i?.props.children;return{mdxAdmonitionTitle:d,rest:o.length>0?(0,s.jsx)(s.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:i}}var d=i(4164),r=i(1312),l=i(7559);const a={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:n,className:i,children:t}=e;return(0,s.jsx)("div",{className:(0,d.A)(l.G.common.admonition,l.G.common.admonitionType(n),a.admonition,i),children:t})}function u(e){let{icon:n,title:i}=e;return(0,s.jsxs)("div",{className:a.admonitionHeading,children:[(0,s.jsx)("span",{className:a.admonitionIcon,children:n}),i]})}function h(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:a.admonitionContent,children:n}):null}function m(e){const{type:n,icon:i,title:t,children:o,className:d}=e;return(0,s.jsxs)(c,{type:n,className:d,children:[t||i?(0,s.jsx)(u,{title:t,icon:i}):null,(0,s.jsx)(h,{children:o})]})}function p(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(m,{...g,...e,className:(0,d.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(m,{...j,...e,className:(0,d.A)("alert alert--success",e.className),children:e.children})}function _(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,s.jsx)(_,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,s.jsx)(m,{...w,...e,className:(0,d.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const C={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const M={...{note:x,tip:v,info:b,warning:function(e){return(0,s.jsx)(m,{...k,...e,className:(0,d.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(m,{...A,...e,className:(0,d.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(b,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),caution:function(e){return(0,s.jsx)(m,{...C,...e,className:(0,d.A)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=o(e),i=(t=n.type,M[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),M.info));var t;return(0,s.jsx)(i,{...n})}},2879:(e,n,i)=>{i.d(n,{A:()=>d});i(6540);var t=i(7293),s=i(6261),o=i(4848);const d=e=>{let{version:n}=e;return parseFloat(s.A)>=parseFloat(n)?null:(0,o.jsx)(t.A,{type:"warning",children:(0,o.jsxs)("p",{children:["The functionality described on this page is available from v",n,"."]})})}},6261:(e,n,i)=>{i.d(n,{A:()=>t});const t="0.19.1"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);