"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[4500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,_=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return n?a.createElement(_,l(l({ref:t},u),{},{components:n})):a.createElement(_,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={slug:"/basics/step_to_result_translation_table",sidebar_position:8,title:"Translation table"},l=void 0,o={unversionedId:"basics/step_to_result_translation_table",id:"basics/step_to_result_translation_table",title:"Translation table",description:"This page contains a table of demonstrative translations of step definitions into result invocations.",source:"@site/docs/basics/step_to_result_translation_table.mdx",sourceDirName:"basics",slug:"/basics/step_to_result_translation_table",permalink:"/convenient_service_docs/basics/step_to_result_translation_table",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/step_to_result_translation_table.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/basics/step_to_result_translation_table",sidebar_position:8,title:"Translation table"},sidebar:"docs",previous:{title:"Steps",permalink:"/convenient_service_docs/basics/steps"},next:{title:"Guides",permalink:"/convenient_service_docs/category/guides"}},i={},p=[{value:"No <code>in</code> or <code>out</code>",id:"no-in-or-out",level:3},{value:"One <code>in</code> usual method",id:"one-in-usual-method",level:3},{value:"Multiple <code>in</code> usual methods",id:"multiple-in-usual-methods",level:3},{value:"One <code>in</code> alias method",id:"one-in-alias-method",level:3},{value:"Multiple <code>in</code> alias method",id:"multiple-in-alias-method",level:3},{value:"One <code>out</code> usual method",id:"one-out-usual-method",level:3},{value:"Multiple <code>out</code> usual methods",id:"multiple-out-usual-methods",level:3},{value:"One <code>out</code> alias method",id:"one-out-alias-method",level:3},{value:"Multiple <code>out</code> alias methods",id:"multiple-out-alias-methods",level:3},{value:"One <code>in</code> raw value",id:"one-in-raw-value",level:3},{value:"Multiple <code>in</code> raw values",id:"multiple-in-raw-values",level:3},{value:"One <code>in</code> proc method",id:"one-in-proc-method",level:3},{value:"Multiple <code>in</code> proc methods",id:"multiple-in-proc-methods",level:3},{value:"All-in-one example:",id:"all-in-one-example",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains a table of demonstrative translations of step definitions into result invocations."),(0,r.kt)("p",null,"It is especially useful for newcomers that are not familiar with the Convenient Service DSL yet."),(0,r.kt)("admonition",{type:"success"},(0,r.kt)("p",{parentName:"admonition"},"Any combination of the ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"out")," argument types described throughout this reference can be used together.")),(0,r.kt)("h3",{id:"no-in-or-out"},"No ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"out")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step AssertNodeAvailable\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||= AssertNodeAvailable.result\nend\n")),(0,r.kt)("h3",{id:"one-in-usual-method"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," usual method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ValidateUncastedParams,\n  in: :params\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ValidateUncastedParams,\n  in: [\n    :params\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    ValidateUncastedParams.result(\n      params: params\n    )\nend\n")),(0,r.kt)("h3",{id:"multiple-in-usual-methods"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," usual methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step LogRequestParams,\n  in: [\n    :request,\n    :params\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    LogRequestParams.result(\n      request: request,\n      params: params\n    )\nend\n")),(0,r.kt)("h3",{id:"one-in-alias-method"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," alias method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ValidateCastedParams,\n  in: {casted_params: :params}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ValidateCastedParams,\n  in: [\n    {casted_params: :params}\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    ValidateCastedParams.result(\n      casted_params: params\n    )\nend\n")),(0,r.kt)("h3",{id:"multiple-in-alias-method"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," alias method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step AuditContent,\n  in: [\n    {content: :content_without_comments},\n    {verbose: :debug}\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    AuditContent.result(\n      content: content_without_comments,\n      verbose: debug\n    )\nend\n")),(0,r.kt)("h3",{id:"one-out-usual-method"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"out")," usual method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ReadFileContent,\n  in: :path,\n  out: :content\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ReadFileContent,\n  in: :path,\n  out: [\n    :content\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    ReadFileContent.result(\n      path: path\n    )\nend\n\ndef content\n  step_result.data[:content]\nend\n")),(0,r.kt)("h3",{id:"multiple-out-usual-methods"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"out")," usual methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step CastParams,\n  in: :params,\n  out: [\n    :original_params,\n    :casted_params\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    CastParams.result(\n      params: params\n    )\nend\n\ndef original_params\n  step_result.data[:original_params]\nend\n\ndef casted_params\n  step_result.data[:casted_params]\nend\n")),(0,r.kt)("h3",{id:"one-out-alias-method"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"out")," alias method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step FormatHeader,\n  in: :parsed_content,\n  out: {formatted_content: :formatted_header_content}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step FormatHeader,\n  in: :parsed_content,\n  out: [\n    {formatted_content: :formatted_header_content}\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    FormatHeader.result(\n      parsed_content: parsed_content\n    )\nend\n\ndef formatted_header_content\n  step_result.data[:formatted_content]\nend\n")),(0,r.kt)("h3",{id:"multiple-out-alias-methods"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"out")," alias methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step ExtractParamsFromRequest,\n  in: :request,\n  out: [\n    {header_params: :request_params_from_header},\n    {body_params: :request_params_from_body}\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    ExtractParamsFromRequest.result(\n      request: request\n    )\nend\n\ndef request_params_from_header\n  step_result.data[:header_params]\nend\n\ndef request_params_from_body\n  step_result.data[:body_params]\nend\n")),(0,r.kt)("h3",{id:"one-in-raw-value"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," raw value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step AssertFeatureEnabled,\n  in: {name: raw(:chat_v2)}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step AssertFeatureEnabled,\n  in: [\n    {name: raw(:chat_v2)}\n  ]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def step_result\n  @step_result ||=\n    AssertFeatureEnabled.result(\n      name: :chat_v2\n    )\nend\n")),(0,r.kt)("h3",{id:"multiple-in-raw-values"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," raw values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step PrintShellCommand,\n  in: [\n    {text: raw("ls -a")}\n    {stream: raw($stdout)}\n  ]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def step_result\n  @step_result ||=\n    PrintShellCommand.result(\n      text: "ls -a",\n      stream: $stdout\n    )\nend\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"in")," raw values are useful for passing values, constants, methods, etc from the class scope."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step PrintShellCommand,\n  in: [\n    {text: raw(display_directory_structure_command)}\n    {stream: raw($stdout)}\n  ]\n\ndef self.display_directory_structure_command\n  "ls -a"\nend\n'))),(0,r.kt)("h3",{id:"one-in-proc-method"},"One ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," proc method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions (equivalent):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step RemoveDirectoryRecursively,\n  in: {path: ->{ "/tmp" }}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step RemoveDirectoryRecursively,\n  in: [\n    {path: ->{ "/tmp" }}\n  ]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def step_result\n  @step_result ||=\n    RemoveDirectoryRecursively.result(\n      path: "/tmp"\n    )\nend\n')),(0,r.kt)("h3",{id:"multiple-in-proc-methods"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},"in")," proc methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step CreateSoftLink,\n  in: [\n    {source: ->{ "~/.bash_profile" }},\n    {destination: ->{ "#{Dir.pwd}/bash_profile_link" }}\n  ]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def step_result\n  @step_result ||=\n    CreateSoftLink.result(\n      source: "~/.bash_profile",\n      destination: "#{Dir.pwd}/bash_profile_link"\n    )\nend\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"in")," proc methods are useful for passing values, constants, methods, etc from the instance scope."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step CreateSoftLink,\n  in: [\n    {source: ->{ "~/.bash_profile" }},\n    {destination: ->{ generate_destination_path }}\n  ]\n\ndef generate_destination_path\n  "#{Dir.pwd}/bash_profile_link"\nend\n'))),(0,r.kt)("h3",{id:"all-in-one-example"},"All-in-one example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'ENV["API_ONLY"] = true\n\nclass UpdatePost\n  include ConvenientService::Standard::Config\n\n  PERMITTED_PARAMS = [:id, :format, :title, :description, :tags, :sources]\n\n  attr_reader :http_string\n\n  # ...\n\n  # highlight-start\n  step PrepareRequestObject\n    in: [\n      :http_string,\n      {url_pattern: raw(url_pattern)},\n      {role: ->{ admin? }},\n      {permitted_keys: raw(PERMITTED_PARAMS)}\n      {defaults: ->{ resolve_defaults_values }}\n    ],\n    out: [\n      :params_from_path,\n      :params_from_body,\n      {headers: :request_headers}\n    ]\n  # highlight-end\n\n  # ...\n\n  def self.url_pattern\n    /^\\/rules\\/(?<id>\\d+)\\.(?<format>\\w+)$/\n  end\n\n  def admin?\n    false\n  end\n\n  def resolve_defaults_values\n    defaults_values = {format: "html", tags: [], sources: []}\n\n    defaults_values[:format] = "json" if ENV["API_ONLY"]\n\n    defaults_values\n  end\n\n  # ...\nend\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'ENV["API_ONLY"] = true\n\nclass UpdatePost\n  include ConvenientService::Standard::Config\n\n  PERMITTED_PARAMS = [:id, :format, :title, :description, :tags, :sources]\n\n  attr_reader :http_string\n\n  # ...\n\n  # highlight-start\n  def step_result\n    @step_result ||= PrepareRequestObject.result(\n      http_string: http_string,\n      url_pattern: /^\\/rules\\/(?<id>\\d+)\\.(?<format>\\w+)$/,\n      role: admin?, # => false\n      permitted_keys: [:id, :format, :title, :description, :tags, :sources],\n      defaults: resolve_defaults_values # => {format: "json", tags: [], sources: []}\n    )\n  end\n\n  def params_from_path\n    step_result.data[:params_from_path]\n  end\n\n  def params_from_body\n    step_result.data[:params_from_body]\n  end\n\n  def request_headers\n    step_result.data[:headers]\n  end\n  # highlight-end\n\n  # ...\n\n  def self.url_pattern\n    /^\\/rules\\/(?<id>\\d+)\\.(?<format>\\w+)$/\n  end\n\n  def admin?\n    false\n  end\n\n  def resolve_defaults_values\n    defaults_values = {format: "html", tags: [], sources: []}\n\n    defaults_values[:format] = "json" if ENV["API_ONLY"]\n\n    defaults_values\n  end\n\n  # ...\nend\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"def step_result")," is used to express the concept."),(0,r.kt)("p",{parentName:"admonition"},"In reality, such a method is not generated by the ",(0,r.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," under the hood."),(0,r.kt)("p",{parentName:"admonition"},"It utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/service/plugins/has_result_steps/concern.rb"},"a lower-level toolset")," that is out of the scope of this guide.")))}d.isMDXComponent=!0}}]);