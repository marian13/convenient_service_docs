"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[4376],{6090:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=s(4848),i=s(8453);const r={slug:"/basics/steps",sidebar_position:7,title:"Steps"},o=void 0,c={id:"basics/steps",title:"Steps",description:"What is a step?",source:"@site/docs/basics/steps.mdx",sourceDirName:"basics",slug:"/basics/steps",permalink:"/basics/steps",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/steps.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/basics/steps",sidebar_position:7,title:"Steps"},sidebar:"docs",previous:{title:"Result-ducks",permalink:"/basics/results_are_ducks"},next:{title:"Translation table",permalink:"/basics/step_to_result_translation_table"}},a={},u=[{value:"What is a step?",id:"what-is-a-step",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"what-is-a-step",children:"What is a step?"}),"\n",(0,n.jsx)(t.p,{children:"After a while service logic may grow into more complicated and less straightforward."}),"\n",(0,n.jsx)(t.p,{children:"Therefore, a future developer spends more time trying to figure out what is going on."}),"\n",(0,n.jsx)(t.p,{children:"That is probably an inevitable process since:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Complex problem can not have non-complex solution in a global sense."}),"\n",(0,n.jsx)(t.p,{children:"But a particular step (piece) from that solution can be simple."}),"\n",(0,n.jsx)(t.p,{children:"\u2014 Own savvy"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"That is what steps are all about."}),"\n",(0,n.jsx)(t.p,{children:"As soon as you start to see that service logic becomes too difficult to digest for a minute or two."}),"\n",(0,n.jsx)(t.p,{children:"It is a clear sign that you need to split it into multiple sub-services and combine them back into a step sequence."}),"\n",(0,n.jsx)(t.p,{children:"This is how it looks in practice:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"class PurchaseBook\n  # ...\n  step AuthenticateUser, in: :user_id, out: :user\n  step SearchBooks, in: [:title, :author_id], out: [:book, :count]\n  step VerifyPaymentMethod, in: :user\n  step CalculatePrice in: :book, out: {price: :price_without_discount}\n  step ApplyDiscounts, in: [:book, {price: :price_without_discount}], out: {price: :price_with_discount}\n  # ...\nend\n"})}),"\n",(0,n.jsx)(t.p,{children:"For the sake of completeness, here is the same service, but without steps:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"class PurchaseBook\n  # ...\n  def result\n    authenticate_user_result = AuthenticateUser.result(user_id: user_id)\n\n    return authenticate_user_result unless authenticate_user_result.success?\n\n    user = authenticate_user_result.data[:user]\n\n    search_book_result = SearchBook.result(title: title, author_id: author_id)\n\n    return search_book_result if search_book_result.not_success?\n\n    # NOTE: One service may return multiple values if needed.\n    book = search_book_result.data[:book]\n    count = search_book_result.data[:count]\n\n    verify_payment_method = VerifyPaymentMethod.result(user: user)\n\n    return verify_payment_method unless verify_payment_method.success?\n\n    calculate_price_result = CalculatePrice.result(book: book)\n\n    return calculate_price_result if calculate_price_result.not_success?\n\n    # NOTE: Aliasing `data[:price]` to `price_without_discount`.\n    price_without_discount = calculate_price_result.data[:price]\n\n    apply_discounts_result = ApplyDiscounts.result(book: book, price: :price_without_discount)\n\n    return apply_discounts_result unless apply_discounts_result.success?\n\n    # NOTE: Aliasing `data[:price]` to `price_with_discount`.\n    price_with_discount = apply_discounts_result.data[:price]\n    # ...\n  end\nend\n"})}),"\n",(0,n.jsx)(t.p,{children:"Looks pretty impressive, isn't it?"}),"\n",(0,n.jsxs)(t.p,{children:["So steps are just regular services, but their ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Declarative_programming",children:"declarative interface"})," hides the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Boilerplate_code",children:"boilerplate code"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"They are executed in the same order as they are defined."}),"\n",(0,n.jsxs)(t.p,{children:["If any intermediate step service result is not successful, the step sequence is stopped, and that unsuccessful result is returned (similar to ",(0,n.jsx)(t.a,{href:"https://vimeo.com/97344498",children:"Railway Oriented Programming"}),")."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);