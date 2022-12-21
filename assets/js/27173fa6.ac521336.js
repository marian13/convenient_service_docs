"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[9792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,_=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(_,o(o({ref:t},l),{},{components:r})):n.createElement(_,o({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const i={slug:"/basics/steps",sidebar_position:7,title:"Steps"},o="What is a Step?",a={unversionedId:"basics/steps",id:"basics/steps",title:"Steps",description:"After a while service logic may grow into more complicated and less straightforward.",source:"@site/docs/basics/steps.mdx",sourceDirName:"basics",slug:"/basics/steps",permalink:"/convenient_service_docs/basics/steps",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/steps.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/basics/steps",sidebar_position:7,title:"Steps"},sidebar:"docs",previous:{title:"Result-Ducks",permalink:"/convenient_service_docs/basics/results_are_ducks"},next:{title:"Translation table",permalink:"/convenient_service_docs/basics/step_to_result_translation_table"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-a-step"},"What is a Step?"),(0,s.kt)("p",null,"After a while service logic may grow into more complicated and less straightforward."),(0,s.kt)("p",null,"Therefore, a future developer spends more time trying to figure out what is going on."),(0,s.kt)("p",null,"That is probably an inevitable process since:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Complex problem can not have non-complex solution in a global sense."),(0,s.kt)("p",{parentName:"blockquote"},"But a particular step (piece) from that solution can be simple."),(0,s.kt)("p",{parentName:"blockquote"},"\u2014 Own savvy")),(0,s.kt)("p",null,"That is what steps are all about."),(0,s.kt)("p",null,"As soon as you start to see that service logic becomes too difficult to digest for a minute or two."),(0,s.kt)("p",null,"It is a clear sign that you need to split it into multiple sub-services and combine them back into a step sequence."),(0,s.kt)("p",null,"This is how it looks in practice:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class PurchaseBook\n  # ...\n  step AuthenticateUser, in: :user_id, out: :user\n  step SearchBooks, in: [:title, :author_id], out: [:book, :count]\n  step VerifyPaymentMethod, in: :user\n  step CalculatePrice in: :book, out: {price: :price_without_discount}\n  step ApplyDiscounts, in: [:book, {price: :price_without_discount}], out: {price: :price_with_discount}\n  # ...\nend\n")),(0,s.kt)("p",null,"For the sake of completeness, here is the same service, but without steps:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class PurchaseBook\n  # ...\n  def result\n    authenticate_user_result = AuthenticateUser.result(user_id: user_id)\n\n    return authenticate_user_result unless authenticate_user_result.success?\n\n    user = authenticate_user_result.data[:user]\n\n    search_book_result = SearchBook.result(title: title, author_id: author_id)\n\n    return search_book_result if search_book_result.not_success?\n\n    # NOTE: One service may return multiple values if needed.\n    book = search_book_result.data[:book]\n    count = search_book_result.data[:count]\n\n    verify_payment_method = VerifyPaymentMethod.result(user: user)\n\n    return verify_payment_method unless verify_payment_method.success?\n\n    calculate_price_result = CalculatePrice.result(book: book)\n\n    return calculate_price_result if calculate_price_result.not_success?\n\n    # NOTE: Aliasing `data[:price]` to `price_without_discount`.\n    price_without_discount = calculate_price_result.data[:price]\n\n    apply_discounts_result = ApplyDiscounts.result(book: book, price: :price_without_discount)\n\n    return apply_discounts_result unless apply_discounts_result.success?\n\n    # NOTE: Aliasing `data[:price]` to `price_with_discount`.\n    price_with_discount = apply_discounts_result.data[:price]\n    # ...\n  end\nend\n")),(0,s.kt)("p",null,"Looks pretty impressive, isn't it?"),(0,s.kt)("p",null,"So steps are just regular services, but their ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Declarative_programming"},"declarative interface")," hides the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boilerplate_code"},"boilerplate code"),"."),(0,s.kt)("p",null,"They are executed in the same order as they are defined."),(0,s.kt)("p",null,"If any intermediate step service result is not successful, the step sequence is stopped, and that unsuccessful result is returned (similar to ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/97344498"},"Railway Oriented Programming"),")."))}p.isMDXComponent=!0}}]);