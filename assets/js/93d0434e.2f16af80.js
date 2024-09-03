"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1253],{3170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(4848),i=r(8453);const a={slug:"/faq/why_both_failure_and_error",sidebar_position:1,title:"Why failures and errors? Why not just failure or error?"},t=void 0,l={id:"faq/why_both_failure_and_error",title:"Why failures and errors? Why not just failure or error?",description:"Failure and errors have different fallbacks",source:"@site/docs/faq/why_both_failure_and_error.mdx",sourceDirName:"faq",slug:"/faq/why_both_failure_and_error",permalink:"/faq/why_both_failure_and_error",draft:!1,unlisted:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/faq/why_both_failure_and_error.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/faq/why_both_failure_and_error",sidebar_position:1,title:"Why failures and errors? Why not just failure or error?"},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/category/frequently-asked-questions"},next:{title:"Why errors? Why not exceptions?",permalink:"/faq/why_error_not_exception"}},o={},d=[{value:"Failure and errors have different fallbacks",id:"failure-and-errors-have-different-fallbacks",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"failure-and-errors-have-different-fallbacks",children:"Failure and errors have different fallbacks"}),"\n",(0,s.jsx)(n.p,{children:"Consider the following user story."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a doctor I would like to see a list of the patient's allergies."})}),"\n",(0,s.jsx)(n.p,{children:"The list is received from the third-party API."}),"\n",(0,s.jsx)(n.p,{children:"Sometimes a controller for this task may be implemented as follows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",metastring:'title="controllers/allergies_controller.rb"',children:'class AllergiesController < ApplicationController\n  # ...\n  def index\n    # `response` is a `Hash`.\n    response = ApiClient.get(\n      "/allergies",\n      params: {patient_id: allowed_patient_id}\n    )\n\n    @allergies = response.dig(:data, :allergies)\n  end\nend\n'})}),"\n",(0,s.jsx)(n.p,{children:"And the corresponding view."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-erb",metastring:'title="views/allergies/index.html.erb"',children:'<h2>Allergies</h2>\n\n<% if @allergies.present? %>\n  <% @allergies.each do |allergy| %>\n    <p>\n      <div>\n        Name: <%= allergy[:name] %>\n      </div>\n      <div>\n        Symptoms: <%= allergy[:symptoms].join(", ") %>\n      </div>\n    </p>\n  <% end %>\n<% else %>\n  <span>\n    Patient has no allergies.\n  </span>\n<% end %>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The code may look innocent from the first point of view, but the devil is in the details."}),"\n",(0,s.jsxs)(n.p,{children:["In a case, the API response has an unexpected format, ",(0,s.jsx)(n.code,{children:"response.dig(:data, :allergies)"})," returns ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Then ",(0,s.jsx)(n.code,{children:"@allergies.present?"})," is evaluated as ",(0,s.jsx)(n.code,{children:"false"})," in the view."]}),"\n",(0,s.jsxs)(n.p,{children:["As a consequence, the ",(0,s.jsx)(n.code,{children:'"Patient has no allergies"'})," string is displayed in the doctor's browser."]}),"\n",(0,s.jsx)(n.p,{children:"Just try to imagine what may happen when a doctor blindly relies on the page text \ud83d\ude2c?"}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, a code with similar problems sometimes may be written even by senior developers \ud83d\ude22."}),"\n",(0,s.jsxs)(n.p,{children:["That is the main reason of why ",(0,s.jsx)(n.a,{href:"/",children:"Convenient Service"})," differentiate ",(0,s.jsx)(n.a,{href:"/basics/failures",children:"failures"})," and ",(0,s.jsx)(n.a,{href:"/basics/errors",children:"errors"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Sure, the lib still can NOT 100% guarantee the complete elimination of the issue."}),"\n",(0,s.jsx)(n.p,{children:"However, it encourages the users to think about fallbacks and split the failures and errors from the beginning."}),"\n",(0,s.jsxs)(n.p,{children:["The curiosity or the confusion that people feel when they find it difficult to decide whether to use a ",(0,s.jsx)(n.a,{href:"/basics/failures",children:"failure"})," or an ",(0,s.jsx)(n.a,{href:"/basics/errors",children:"error"})," works as a provocation for them to open and read this article."]}),"\n",(0,s.jsx)(n.p,{children:"This way they become aware of the issue and share it with others more frequently."}),"\n",(0,s.jsxs)(n.p,{children:["Refactoring using ",(0,s.jsx)(n.a,{href:"/",children:"Convenient Service"})," is the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",metastring:'title="controllers/allergies_controller.rb"',children:'class FetchAllergies\n  include ::ConvenientService::Standard::Config\n  # ...\n  def result\n    return error("API response does not have `data` key") unless response.has_key?(:data)\n    return error("API response data does not have `allergies` key") unless response[:data].has_key?(:allergies)\n\n    return failure("Patient `#{allowed_patient_id}` has no allergies") if response[:data][:allergies].empty?\n\n    success(allergies: response[:data][:allergies])\n  end\n\n  private\n\n  def response\n    # `response` is a `Hash`.\n    @response ||= ApiClient.get("/allergies", params: {patient_id: allowed_patient_id})\n  end\nend\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",metastring:'title="controllers/allergies_controller.rb"',children:"class AllergiesController < ApplicationController\n  # ...\n  def index\n    @fetch_allergies_result = FetchAllergies.result(allowed_patient_id: allowed_patient_id)\n  end\nend\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-erb",metastring:'title="views/allergies/index.html.erb"',children:'<h2>Allergies</h2>\n\n<% if @fetch_allergies_result.success? %>\n  <% @fetch_allergies_result.data[:allergies].each do |allergy| %>\n    <p>\n      <div>\n        Name: <%= allergy[:name] %>\n      </div>\n      <div>\n        Symptoms: <%= allergy[:symptoms].join(", ") %>\n      </div>\n    </p>\n  <% end %>\n<% elsif @fetch_allergies_result.failure? %>\n  <span>\n    Patient has no allergies.\n  </span>\n<% else # @fetch_allergies_result.error? %>\n  <span>\n    No allergies information available.\n  </span>\n  <div>\n    Try to refresh the page after a while.\n  <div>\n  <div>\n    If the issue persists please contact the support.\n  </div>\n<% end %>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The code is more verbose, but that is the price of reliability."}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.a,{href:"/basics/service_goals",children:"service goal resolution terminology"}),", this is what we have as a summary."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@fetch_allergies_result.success?"})," means that a patient 100% has allergies (positive service goal resolution)."]}),"\n",(0,s.jsx)(n.p,{children:"That is why we freely display them."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@fetch_allergies_result.failure?"})," means that a patient 100% has NO allergies (negative service goal resolution)."]}),"\n",(0,s.jsx)(n.p,{children:'So we are confident in the "Patient has no allergies" text.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@fetch_allergies_result.error?"})," means that even after service invocation, we still don't know whether a patient has allergies or not (no service goal resolution at all)."]}),"\n",(0,s.jsx)(n.p,{children:'Due to that, we are telling the truth that "No allergies information available" instead of the false-negative resolution that we had before the separation of failure and errors.'}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);