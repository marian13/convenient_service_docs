"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[6990],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),i=t(4996);const l={slug:"/troubleshooting/i18n_translate_wrong_number_of_arguments",sidebar_position:2,title:"I18n.translate wrong number of arguments"},o=void 0,s={unversionedId:"troubleshooting/i18n_translate_wrong_number_of_arguments",id:"troubleshooting/i18n_translate_wrong_number_of_arguments",title:"I18n.translate wrong number of arguments",description:"This exception may happen when HasResultParamsValidations::UsingActiveModelValidations plugin is used in an environemnt with Ruby 3+ and Rails 5.",source:"@site/docs/troubleshooting/i18n_translate_wrong_number_of_arguments.mdx",sourceDirName:"troubleshooting",slug:"/troubleshooting/i18n_translate_wrong_number_of_arguments",permalink:"/convenient_service_docs/troubleshooting/i18n_translate_wrong_number_of_arguments",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/troubleshooting/i18n_translate_wrong_number_of_arguments.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/troubleshooting/i18n_translate_wrong_number_of_arguments",sidebar_position:2,title:"I18n.translate wrong number of arguments"},sidebar:"docs",previous:{title:"I am a Convenient Service debuggerer",permalink:"/convenient_service_docs/troubleshooting/i_am_a_convenient_service_debuggerer"},next:{title:"Best Practices",permalink:"/convenient_service_docs/category/best-practices"}},c={},u=[],b={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Failure/Error: @errors ||= entity.tap(&:valid?).errors.messages.transform_values(&:first)\n\nArgumentError:\n  wrong number of arguments (given 2, expected 0..1)\n# /usr/local/bundle/gems/i18n-1.12.0/lib/i18n.rb:210:in `translate'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/naming.rb:190:in `human'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/errors.rb:424:in `generate_message'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/errors.rb:454:in `normalize_message'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/errors.rb:298:in `add'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validations/presence.rb:7:in `validate_each'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validator.rb:152:in `block in validate'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validator.rb:149:in `each'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validator.rb:149:in `validate'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:426:in `block in make_lambda'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:198:in `block (2 levels) in halting'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:606:in `block (2 levels) in default_termi\nnator'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:605:in `catch'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:605:in `block in default_terminator'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:199:in `block in halting'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:513:in `block in invoke_before'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:513:in `each'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:513:in `invoke_before'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:131:in `run_callbacks'\n# /usr/local/bundle/gems/activesupport-5.2.8.1/lib/active_support/callbacks.rb:816:in `_run_validate_callbacks'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validations.rb:409:in `run_validations!'\n# /usr/local/bundle/gems/activemodel-5.2.8.1/lib/active_model/validations.rb:339:in `valid?'\n# ./lib/convenient_service/service/plugins/has_result_params_validations/using_active_model_validations/middleware.rb:28\n:in `errors'\n# ./lib/convenient_service/service/plugins/has_result_params_validations/using_active_model_validations/middleware.rb:10\n:in `next'\n")),(0,a.kt)("p",null,"This exception may happen when ",(0,a.kt)("inlineCode",{parentName:"p"},"HasResultParamsValidations::UsingActiveModelValidations")," plugin is used in an environemnt with ",(0,a.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/"},"Ruby 3+")," and ",(0,a.kt)("a",{parentName:"p",href:"https://api.rubyonrails.org/v5.0.0/"},"Rails 5"),"."),(0,a.kt)("p",null,"It is caused by ",(0,a.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/news/2019/12/12/separation-of-positional-and-keyword-arguments-in-ruby-3-0/"},"separation of positional and keyword arguments in Ruby 3.0"),"."),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://eregon.me/blog/2021/02/13/correct-delegation-in-ruby-2-27-3.html"},"correct Delegation with Ruby 2.6, 2.7 and 3.0")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ruby-i18n/i18n/blob/v1.12.0/lib/i18n.rb#L195"},"I18n.translate")," for more details."),(0,a.kt)("img",{src:(0,i.Z)("/img/troubleshooting/i18n_translate_wrong_number_of_arguments/i18n_translate.png")}),(0,a.kt)("p",null,"Currenty, there is no a simple workaround for it."),(0,a.kt)("p",null,"Actually, you may choose any of the following two options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html"},"Upgrade to Rails 6 or higher"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Or remove ",(0,a.kt)("inlineCode",{parentName:"p"},"HasResultParamsValidations::UsingActiveModelValidations")," plugin from config ",(0,a.kt)("br",null),"\n(do not forget to remove ",(0,a.kt)("a",{parentName:"p",href:"https://edgeguides.rubyonrails.org/active_record_validations.html"},"validates")," calls as well)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"concerns do\n  delete Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Concern\nend\n\nmiddlewares :result do\n  delete Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Middleware\nend\n")))))}p.isMDXComponent=!0}}]);