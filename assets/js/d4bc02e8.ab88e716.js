"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1467,8401],{5108:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=s(4848),r=s(8453),i=s(1470),o=s(9365),a=s(4428);const c={slug:"/best_practices/services_with_or_conditionals",sidebar_position:3,title:"Services with `or` conditionals"},l=void 0,u={id:"best_practices/services_with_or_conditionals",title:"Services with `or` conditionals",description:"Convenient Service shines very brightly when you have and conditional logic.",source:"@site/docs/best_practices/services_with_or_conditionals.mdx",sourceDirName:"best_practices",slug:"/best_practices/services_with_or_conditionals",permalink:"/best_practices/services_with_or_conditionals",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/services_with_or_conditionals.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/best_practices/services_with_or_conditionals",sidebar_position:3,title:"Services with `or` conditionals"},sidebar:"docs",previous:{title:"Service has only one `success`",permalink:"/best_practices/service_has_only_one_success"},next:{title:"Skip `result` call for boolean services",permalink:"/best_practices/skip_result_call_for_boolean_services"}},d={},p=[{value:"Zombie version \ud83e\udddf",id:"zombie-version-",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/",children:"Convenient Service"})," shines very brightly when you have ",(0,t.jsx)(n.code,{children:"and"})," conditional logic."]}),"\n",(0,t.jsxs)(n.p,{children:["It is very easy to construct such behavior using the ",(0,t.jsx)(n.code,{children:"step"})," DSL."]}),"\n",(0,t.jsx)(n.p,{children:"Check out the following service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class RefreshSubscription\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :user, :subscription_id\n\n  step IsSubscriptionOwner,\n    in: [:user, :subscription_id]\n\n  step FindSubscription,\n    in: :subscription_id,\n    out: :subscription\n\n  step RegenerateSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  step UploadSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  def initialize(:user, :subscription_id)\n    @user = user\n    @subscription_id = subscription_id\n  end\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let's use the pseudo notation below to describe a sequence of steps from ",(0,t.jsx)(n.code,{children:"RefreshSubscription"})," as ",(0,t.jsx)(n.code,{children:"and"})," conditionals:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"`IsSubscriptionOwner`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pretty simple and straightforward."}),"\n",(0,t.jsx)(n.p,{children:"But, but, but \ud83d\ude22..."}),"\n",(0,t.jsxs)(n.p,{children:["What should we do when we have some ",(0,t.jsx)(n.code,{children:"or"})," conditionals?"]}),"\n",(0,t.jsx)(n.p,{children:"For example, two additional requirements are introduced to the one we had before:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Super admin can refresh any user subscriptions."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A user with a special ability can refresh other user's subscriptions."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User can refresh its own subscription (already existing requirement)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In our pseudo notation it will look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"`IsSuperAdmin` or `HasAbility`or `IsSubscriptionOwner`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is not the time to give up \ud83d\ude2d."}),"\n",(0,t.jsx)(n.p,{children:"The list of to-do actions is not so long:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new service which name generalizes all ",(0,t.jsx)(n.code,{children:"or"})," conditions, for instance - ",(0,t.jsx)(n.code,{children:"IsAuthorizedForSubscriptionRefresh"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Then the updated pseudo notation can be displayed as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"`IsAuthorizedForSubscriptionRefresh`\n  and `FindSubscription`\n  and `RegenerateSubscriptionTokens`\n  and `UploadSubscriptionTokens`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can utilize all the ",(0,t.jsxs)(n.a,{href:"/basics/step_to_result_translation_table",children:[(0,t.jsx)(n.code,{children:"step"})," DSL"]})," s usual."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class RefreshSubscription\n  # ...\n\n  step IsAuthorizedForSubscriptionRefresh,\n    in: [:user, :subscription_id]\n\n  step FindSubscription,\n    in: :subscription_id,\n    out: :subscription\n\n  step RegenerateSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  step UploadSubscriptionTokens\n    in: :subscription,\n    out: :tokens\n\n  # ...\nend\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Prepare a common template for a service with ",(0,t.jsx)(n.code,{children:"or"})," conditionals."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here it is for our particular case:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"class IsAuthorizedForSubscriptionRefresh\n  include ::ConvenientService::Standard::Config\n\n  attr_reader :user, :subscription_id\n\n  def initialize(:user, :subscription_id)\n    @user = user\n    @subscription_id = subscription_id\n  end\n\n  def result\n    # TODO: Implement\n  end\n\n  private\n\n  def is_super_admin_result\n    @is_super_admin_result ||= IsSuperAdmin.result(user: user)\n  end\n\n  def has_ability_result\n    @has_ability_result ||= HasAbility.result(user: user, ability: :refresh_someone_else_subscription)\n  end\n\n  def is_subscription_owner_result\n    @is_subscription_owner_result ||= IsSubscriptionOwner.result(user: user, subscription_id: subscription_id)\n  end\nend\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Implement the ",(0,t.jsx)(n.code,{children:"result"})," method."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Before we move on to the final polished chuck of code, let's discuss the common anti-patterns."}),"\n",(0,t.jsxs)(n.p,{children:["Please, welcome ",(0,t.jsx)(n.a,{href:"https://lawyerdev.medium.com/i-never-write-nested-ifs-e4e91a5440ee",children:"deeply nested if statements"})," and ",(0,t.jsx)(n.a,{href:"/best_practices/service_has_only_one_success",children:"multiple success calls"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"zombie-version-",children:"Zombie version \ud83e\udddf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'# bad - zombie\ndef result\n  if is_super_admin_result.not_success?\n    if has_ability_result.not_success?\n      if is_subscription_owner_result.not_success?\n        error(\n          "All conditions are not satisfied:"\n            + " and "\n            + is_super_admin_result.message\n            + " and "\n            + has_ability_result.message\n            + " and "\n            + is_subscription_owner_result.message\n        )\n      else\n        success\n      end\n    else\n      success\n    end\n  else\n    success\n  end\nend\n'})}),"\n",(0,t.jsx)(n.p,{children:'Although, this code is "perfect" from the performance point of view and it works exactly as needed according to the requirements...'}),"\n",(0,t.jsx)(n.p,{children:"Please, do not commit it."}),"\n",(0,t.jsx)(n.p,{children:"Just imagine what will happen with an additional fourth or fifth condition."}),"\n",(0,t.jsx)(n.p,{children:"How can we make it simpler and more readable?"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"or_step"}),"."]}),"\n",(0,t.jsxs)(i.A,{groupId:"examples",children:[(0,t.jsx)(o.A,{value:"source",label:"Source",default:!0,children:(0,t.jsx)(a.A,{language:"ruby",children:"\n        class CreateButton\n          include ConvenientService::Standard::Config\n          -\n          step CreateWebButtonFactory,\n            in: :app,\n            out: :button\n          -\n          or_step CreateAndroidButtonFactory,\n            in: :app,\n            out: {action: :button}\n          -\n          or_step CreateIosButtonFactory,\n            in: :app,\n            out: {control: :button}\n          -\n          or_step CreateDesktopButtonFactory,\n            in: :app,\n            out: {knob: :button}\n          -\n          step :result,\n            in: :app,\n            out: :button\n          -\n          attr_reader :app\n          -\n          def initialize(:app)\n            @app = app\n          end\n          -\n          def result\n            success(button: button)\n          end\n        end\n      "})}),(0,t.jsx)(o.A,{value:"rspec",label:"RSpec",children:(0,t.jsx)(a.A,{language:"ruby",children:'\n        require "spec_helper"\n        -\n        RSpec.describe CreateButton do\n          include ConvenientService::RSpec::Matchers::Results\n          -\n          example_group "class methods" do\n            describe ".result" do\n              subject(:result) { described_class.result(app: app) }\n              -\n              let(:app) { App.new(platform: :cli) }\n              -\n              context "when `CreateButton` is NOT successful" do\n                context "when all alternatives are NOT successful" do\n                  it "returns intermediate step" do\n                    expect(result).to be_not_success.of_service(described_class).of_step(CreateDesktopButtonFactory)\n                  end\n                end\n              end\n              -\n              context "when `CreateButton` is successful" do\n                context "when `CreateWebButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :web) }\n                  let(:button) { App::UI::Web::Button.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).of_step(:result)\n                  end\n                end\n                -\n                context "when `CreateAndroidButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :android) }\n                  let(:button) { App::UI::Android::Action.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).of_step(:result)\n                  end\n                end\n                -\n                context "when `CreateIosButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :ios) }\n                  let(:button) { App::UI::Ios::Control.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).of_step(:result)\n                  end\n                end\n                -\n                context "when `CreateDesktopButtonFactory` is successful" do\n                  let(:app) { App.new(platform: :desktop) }\n                  let(:button) { App::UI::Desktop::Knob.new }\n                  -\n                  it "returns success" do\n                    expect(result).to be_success.with_data(button: button).of_service(described_class).of_step(:result)\n                  end\n                end\n              end\n            end\n          end\n        end\n      '})})]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>o});s(6540);var t=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>g});var t=s(6540),r=s(4164),i=s(3104),o=s(6347),a=s(205),c=s(7485),l=s(1682),u=s(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function _(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=p(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,d]=b({queryString:s,groupId:r}),[_,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=l??_;return h({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=s(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(4848);function x(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),r=a[s].value;r!==t&&(l(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=_(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function g(e){const n=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},4428:(e,n,s)=>{s.d(n,{A:()=>o});s(6540);var t=s(1432),r=s(4848);const i=e=>{let n=e.toString().split("\n");n=""===n[0]?n.slice(1):n;const s=n.find((e=>e.length)).search(/[^ ]/),t=-1===s?0:s;return n.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(t))).join("\n")};function o(e){let{children:n,...s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.A,{...s,children:i(n)})})}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);