"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[6729,7918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const s="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),s=t(6010),i=t(2389),o=t(7392),l=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:m,groupId:b,className:h}=e,_=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??_.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,o.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(n=_.find((e=>e.props.default)))?void 0:n.props.value)??_[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[g,N]=(0,a.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=b){const e=v[b];null!=e&&e!==g&&f.some((n=>n.value===e))&&N(e)}const T=e=>{const n=e.currentTarget,t=S.indexOf(n),r=f[t].value;r!==g&&(C(n),N(r),null!=b&&w(b,String(r)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>S.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":g===n})}),t??n)}))),t?(0,a.cloneElement)(_.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},_.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function m(e){const n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},8573:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7410),a=t(7294),s=t(814);(void 0!==t.g?t.g:window).Prism=r.Z,t(9385);function i(e){let{children:n,...t}=e;return a.createElement(a.Fragment,null,a.createElement(s.Z,t,(e=>{let n=e.toString().split("\n");n=""===n[0]?n.slice(1):n;const t=n.find((e=>e.length)).search(/[^ ]/),r=-1===t?0:t;return n.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(r))).join("\n")})(n)))}},9494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),s=t(5488),i=t(5162),o=t(8573);const l={slug:"/best_practices/services_with_or_conditionals",sidebar_position:3,title:"Services with `or` conditionals"},c=void 0,u={unversionedId:"best_practices/services_with_or_conditionals",id:"best_practices/services_with_or_conditionals",title:"Services with `or` conditionals",description:"Convenient Service shines very brightly when you have and conditional logic.",source:"@site/docs/best_practices/services_with_or_conditionals.mdx",sourceDirName:"best_practices",slug:"/best_practices/services_with_or_conditionals",permalink:"/convenient_service_docs/best_practices/services_with_or_conditionals",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/services_with_or_conditionals.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/best_practices/services_with_or_conditionals",sidebar_position:3,title:"Services with `or` conditionals"},sidebar:"docs",previous:{title:"Service has only one `success`",permalink:"/convenient_service_docs/best_practices/service_has_only_one_success"},next:{title:"Glossary",permalink:"/convenient_service_docs/category/glossary"}},p={},d=[],m={toc:d};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," shines very brightly when you have ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," conditional logic."),(0,a.kt)("p",null,"It is very easy to construct such behavior using the ",(0,a.kt)("inlineCode",{parentName:"p"},"step")," DSL."),(0,a.kt)("p",null,"Check out the following service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class RefreshSubscription\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :user, :subscription_id\n\n  step IsSubscriptionOwner,\n    in: [:user, :subscription_id]\n\n  step FindSubscription,\n    in: :subscription_id,\n    out: :subscription\n\n  step RegenerateSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  step UploadSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  def initialize(:user, :subscription_id)\n    @user = user\n    @subscription_id = subscription_id\n  end\nend\n")),(0,a.kt)("p",null,"Let's use the pseudo notation below to describe a sequence of steps from ",(0,a.kt)("inlineCode",{parentName:"p"},"RefreshSubscription")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," conditionals:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"`IsSubscriptionOwner`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`.\n")),(0,a.kt)("p",null,"Pretty simple and straightforward."),(0,a.kt)("p",null,"But, but, but \ud83d\ude22..."),(0,a.kt)("p",null,"What should we do when we have some ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," conditionals?"),(0,a.kt)("p",null,"For example, two additional requirements are introduced to the one we had before:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Super admin can refresh any user subscriptions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A user with a special ability can refresh other user's subscriptions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User can refresh its own subscription (already existing requirement)."))),(0,a.kt)("p",null,"In our pseudo notation it will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"`IsSuperAdmin` or `HasAbility`or `IsSubscriptionOwner`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`\n")),(0,a.kt)("p",null,"It is not the time to give up \ud83d\ude2d."),(0,a.kt)("p",null,"The list of to-do actions is not so long:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new service which name generalizes all ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," conditions, for instance - ",(0,a.kt)("inlineCode",{parentName:"p"},"IsAuthorizedForSubscriptionRefresh"),"."),(0,a.kt)("p",{parentName:"li"},"Then the updated pseudo notation can be displayed as:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"`IsAuthorizedForSubscriptionRefresh`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`\n")),(0,a.kt)("p",{parentName:"li"},"Now, we can utilize all the ",(0,a.kt)("a",{parentName:"p",href:"/basics/step_to_result_translation_table"},(0,a.kt)("inlineCode",{parentName:"a"},"step")," DSL")," s usual."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class RefreshSubscription\n  # ...\n\n  step IsAuthorizedForSubscriptionRefresh,\n    in: [:user, :subscription_id]\n\n  step FindSubscription,\n    in: :subscription_id,\n    out: :subscription\n\n  step RegenerateSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  step UploadSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  # ...\nend\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare a common template for a service with ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," conditionals."),(0,a.kt)("p",{parentName:"li"},"Here it is for our particular case:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class IsAuthorizedForSubscriptionRefresh\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :user, :subscription_id\n\n  def initialize(:user, :subscription_id)\n    @user = user\n    @subscription_id = subscription_id\n  end\n\n  def result\n    # TODO: Implement\n  end\n\n  private\n\n  def is_super_admin_result\n    @is_super_admin_result ||= IsSuperAdmin.result(user: user)\n  end\n\n  def has_ability_result\n    @has_ability_result ||= HasAbility.result(user: user, ability: :refresh_someone_else_subscription)\n  end\n\n  def is_subscription_owner_result\n    @is_subscription_owner_result ||= IsSubscriptionOwner.result(user: user, subscription_id: subscription_id)\n  end\nend\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," method."),(0,a.kt)("p",{parentName:"li"},"Before we move on to the final polished chuck of code, let's discuss the common anti-patterns."),(0,a.kt)("p",{parentName:"li"},"Please, welcome ",(0,a.kt)("a",{parentName:"p",href:"https://lawyerdev.medium.com/i-never-write-nested-ifs-e4e91a5440ee"},"deeply nested if statements")," and ",(0,a.kt)("a",{parentName:"p",href:"/best_practices/service_has_only_one_success"},"multiple success calls"),"."),(0,a.kt)("h3",{parentName:"li",id:"zombie-version-"},"Zombie version \ud83e\udddf"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'# bad - zombie\ndef result\n  if is_super_admin_result.not_success?\n    if has_ability_result.not_success?\n      if is_subscription_owner_result.not_success?\n        error(\n          "All conditions are not satisfied:"\n            + " and "\n            + is_super_admin_result.message\n            + " and "\n            + has_ability_result.message\n            + " and "\n            + is_subscription_owner_result.message\n        )\n      else\n        success\n      end\n    else\n      success\n    end\n  else\n    success\n  end\nend\n')),(0,a.kt)("p",{parentName:"li"},'Although, this code is "perfect" from the performance point of view and it works exactly as needed according to the requirements...'),(0,a.kt)("p",{parentName:"li"},"Please, do not commit it."),(0,a.kt)("p",{parentName:"li"},"Just imagine what will happen with an additional fourth or fifth condition."),(0,a.kt)("p",{parentName:"li"},"How can we make it simpler and more readable?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/best_practices/service_has_only_one_success"},"Call ",(0,a.kt)("inlineCode",{parentName:"a"},"success")," only once"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerable.html"},"Leverage Ruby collections"),"."))),(0,a.kt)("h3",{parentName:"li",id:"array-version"},"Array version"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'# better - array, but it preloads all conditions even when they are not used\ndef result\n  if conditions.all?(&:not_success?)\n    return error("All conditions are not satisfied: " + conditions.map(&:message).join(" and "))\n  end\n\n  success\nend\n\nprivate\n\ndef conditions\n  @conditions ||= [\n    is_super_admin_result,\n    has_ability_result,\n    is_subscription_owner_result\n  ]\nend\n')),(0,a.kt)("p",{parentName:"li"},"As you can see, it removes ",(0,a.kt)("a",{parentName:"p",href:"https://lawyerdev.medium.com/i-never-write-nested-ifs-e4e91a5440ee"},"deeply nested if statements")," completely."),(0,a.kt)("p",{parentName:"li"},"Also it allows to use ",(0,a.kt)("a",{parentName:"p",href:"/best_practices/service_has_only_one_success"},"only one success"),"."),(0,a.kt)("p",{parentName:"li"},"The array version is a lot better than what we had before, but it still has one hidden problem that is not obvious."),(0,a.kt)("p",{parentName:"li"},"When you create an array, its elements are immediately calculated, no matter whether you access them later or not."),(0,a.kt)("p",{parentName:"li"},"If we make an assumption that a user has the ability to refresh someone else subscription, then we don't need to check whether that user is the subscription owner at all."),(0,a.kt)("p",{parentName:"li"},"This extra verification can become a huge issue if it is resource-heavy like a long-running SQL query or low-responding HTTP request."),(0,a.kt)("p",{parentName:"li"},"Luckily, Ruby has a ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerator.html"},"build-in class")," that has the array-like interface, but with lazy elements calculation."),(0,a.kt)("h3",{parentName:"li",id:"enumerator-version"},"Enumerator version:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'# very good - enumerator, simple code and lazy calculation\ndef result\n  if conditions.all?(&:not_success?)\n    return error("All conditions are not satisfied: " + conditions.map(&:message).join(" and "))\n  end\n\n  success\nend\n\nprivate\n\ndef conditions\n  @conditions ||= ::Enumerator.new do |collection|\n    collection << is_super_admin_result\n    collection << has_ability_result\n    collection << is_subscription_owner_result\n  end\nend\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerator.html"},"Enumerator")," is a duck for ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Array.html"},"Array")," most of the time, since both of them include the ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerable.html"},"Enumerable")," module."),(0,a.kt)("p",{parentName:"li"},"But the crucial moment is that ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerator.html"},"Enumerator")," may lazily calculate its elements when used properly."),(0,a.kt)("h3",{parentName:"li",id:"pattern"},"Pattern"),(0,a.kt)("p",{parentName:"li"},"The final full version will quickly become a pattern in your codebase."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class IsAuthorizedForSubscriptionRefresh\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :user, :subscription_id\n\n  def initialize(:user, :subscription_id)\n    @user = user\n    @subscription_id = subscription_id\n  end\n\n  def result\n    if conditions.all?(&:not_success?)\n      return error("All conditions are not satisfied: " + conditions.map(&:message).join(" and "))\n    end\n\n    success\n  end\n\n  private\n\n  def conditions\n    @conditions ||= ::Enumerator.new do |collection|\n      collection << is_super_admin_result\n      collection << has_ability_result\n      collection << is_subscription_owner_result\n    end\n  end\n\n  def is_super_admin_result\n    @is_super_admin_result ||= IsSuperAdmin.result(user: user)\n  end\n\n  def has_ability_result\n    @has_ability_result ||= HasAbility.result(user: user, ability: :refresh_someone_else_subscription)\n  end\n\n  def is_subscription_owner_result\n    @is_subscription_owner_result ||= IsSubscriptionOwner.result(user: user, subscription_id: subscription_id)\n  end\nend\n')),(0,a.kt)("p",{parentName:"li"},"In order to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," condition just create a new memoized method with a result and push it into the ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Enumerator.html"},"Enumerator")," collection."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Convenient Service authors highly encourage the usage of the pattern from this article since it will be abstracted away in one of the future releases by a new DSL macro like ",(0,a.kt)("inlineCode",{parentName:"p"},"step"),"."),(0,a.kt)("p",{parentName:"admonition"},"This way you will have all the preconditions met for minimal refactoring.")),(0,a.kt)("h3",{parentName:"li",id:"extended-pattern"},"Extended pattern"),(0,a.kt)("p",{parentName:"li"},"It is also very common to have services with ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," conditions for ",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/factory-method"},"factory methods"),"."),(0,a.kt)("p",{parentName:"li"},"In such a scenario original pattern is extended by hashes."),(0,a.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"source",label:"Source",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class CreateButton\n          include ::ConvenientService::Standard::Config\n          -\n          attr_reader :app\n          -\n          def initialize(:app)\n            @app = app\n          end\n          -\n          def result\n            if factories.all? { |factory| factory[:result].not_success? }\n              return error("All factories are not satisfied: " + factories.map { |factory| factory[:result].message }.join(" and "))\n            end\n            -\n            success(button: factories.find { |factory| factory[:result].success? }.values_at(:result, :data_key).then { |result, key| result.data[key] })\n          end\n          -\n          private\n          -\n          def factories\n            @factories ||= ::Enumerator.new do |collection|\n              collection << create_web_button_factory\n              collection << create_android_button_factory\n              collection << create_ios_button_factory\n              collection << create_desktop_button_factory\n            end\n          end\n          -\n          def create_web_button_factory\n            @create_web_button_factory ||= {\n              result: CreateWebButtonFactory.result(app: app),\n              data_key: :button\n            }\n          end\n          -\n          def create_android_button_factory\n            @create_android_button_factory ||= {\n              result: CreateAndroidButtonFactory.result(app: app),\n              data_key: :action\n            }\n          end\n          -\n          def create_ios_button_factory\n            @create_ios_button_factory ||= {\n              result: CreateIosButtonFactory.result(app: app),\n              data_key: :control\n            }\n          end\n          -\n          def create_desktop_button_factory\n            @create_desktop_button_factory ||= {\n              result: CreateDesktopButtonFactory.result(app: app),\n              data_key: :knob\n            }\n          end\n        end\n      ')),(0,a.kt)(i.Z,{value:"rspec",label:"RSpec",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        require "spec_helper"\n        -\n        RSpec.describe CreateButton do\n          include ConvenientService::RSpec::Matchers::Results\n          -\n          example_group "class methods" do\n            describe ".result" do\n              subject(:result) { described_class.result(app: app) }\n              -\n              context "when `CreateButton` is NOT successful" do\n                let(:app) { App.new(platform: :cli) }\n                -\n                context "when all factories are NOT successful" do\n                  let(:message) do\n                    [\n                      "All factories are not satisfied: ",\n                      CreateWebButtonFactory.result(app: app),\n                      CreateAndroidButtonFactory.result(app: app),\n                      CreateIosButtonFactory.result(app: app),\n                      CreateDesktopButtonFactory.result(app: app)\n                    ]\n                      .each(&:success?)\n                      .map(&:message)\n                      .join(" and ")\n                  end\n                  -\n                  it "returns error with message" do\n                    expect(result).to be_error.with_message(message).of_service(described_class).without_step\n                  end\n                end\n              end\n              -\n              context "when `CreateButton` is successful" do\n                context "when `CreateWebButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :web) }\n                  let(:button) { App::UI::Web::Button.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).without_step\n                  end\n                end\n                -\n                context "when `CreateAndroidButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :android) }\n                  let(:button) { App::UI::Android::Action.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).without_step\n                  end\n                end\n                -\n                context "when `CreateIosButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :ios) }\n                  let(:button) { App::UI::IOS::Control.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).without_step\n                  end\n                end\n                -\n                context "when `CreateDesktopButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :desktop) }\n                  let(:button) { App::UI::Desktop::Knob.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).without_step\n                  end\n                end\n              end\n            end\n          end\n        end\n      '))))))}b.isMDXComponent=!0}}]);