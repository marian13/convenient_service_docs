"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1670,7918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6915:(e,t,a)=>{a.d(t,{Z:()=>n});const n="0.12.0"},8573:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7410),r=a(7294),i=a(814);(void 0!==a.g?a.g:window).Prism=n.Z,a(9385);function o(e){let{children:t,...a}=e;return r.createElement(r.Fragment,null,r.createElement(i.Z,a,(e=>{let t=e.toString().split("\n");t=""===t[0]?t.slice(1):t;const a=t.find((e=>e.length)).search(/[^ ]/),n=-1===a?0:a;return t.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(n))).join("\n")})(t)))}},2339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(8573),o=a(4996),p=a(6915);const s={slug:"/guides/advanced/how_to_debug_lib",sidebar_position:1,title:"How to debug the lib?"},l=void 0,c={unversionedId:"guides/advanced/how_to_debug_lib",id:"guides/advanced/how_to_debug_lib",title:"How to debug the lib?",description:"Convenient Service has already more than 5000 unit and integration tests.",source:"@site/docs/guides/advanced/how_to_debug_lib.mdx",sourceDirName:"guides/advanced",slug:"/guides/advanced/how_to_debug_lib",permalink:"/guides/advanced/how_to_debug_lib",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/advanced/how_to_debug_lib.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/advanced/how_to_debug_lib",sidebar_position:1,title:"How to debug the lib?"},sidebar:"docs",previous:{title:"Advanced",permalink:"/category/advanced"},next:{title:"Monitoring",permalink:"/category/monitoring"}},u={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," has already more than ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marian13/convenient_service/tree/main/spec"},"5000 unit and integration tests"),"."),(0,r.kt)("p",null,"That is not the end, more specs are constantly added to ",(0,r.kt)("a",{parentName:"p",href:"https://coveralls.io/github/marian13/convenient_service?branch=main"},"cover")," even the craziest cases."),(0,r.kt)("p",null,"But since it is relatively a new library something unpredicatable may still happen."),(0,r.kt)("p",null,"Prefer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marian13/convenient_service/issues"},"create a GitHub issue"),", when you encounter unexpected behavior."),(0,r.kt)("p",null,"However, if you are curious and enthusiastic enough, you can always try to dive deep and debug ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marian13/convenient_service"},'the "nifty" inner parts')," by yourself."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First of all, navigate to the directory with a project that uses ",(0,r.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," as a dependency."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd your_project\n")),(0,r.kt)("p",{parentName:"li"},"In other words, you have it in your project ",(0,r.kt)("a",{parentName:"p",href:"https://bundler.io/guides/gemfile.html"},"Gemfile")," like so:"),(0,r.kt)(i.Z,{language:"ruby",title:"Gemfile",mdxType:"CodeBlock"},`gem "convenient_service", "~> ${p.Z}"`)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure ",(0,r.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," is ",(0,r.kt)("a",{parentName:"p",href:"/installation"},"installed"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"bundle install\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the gem source. Set the ",(0,r.kt)("a",{parentName:"p",href:"https://bash.cyberciti.biz/guide/$EDITOR_variable"},"EDITOR env variable")," to your favorite code editing tool. The command below uses ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"EDITOR=code bundle open convenient_service\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select any file you need and place a debugger call in it."),(0,r.kt)("p",{parentName:"li"},"The following example utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deivid-rodriguez/byebug"},"byebug"),"."),(0,r.kt)("img",{src:(0,o.Z)("img/guides/advanced/how_to_debug_lib/byebug.png")})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start your project (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ruby/irb"},"irb console"),", ",(0,r.kt)("a",{parentName:"p",href:"https://edgeguides.rubyonrails.org/command_line.html#bin-rails-server"},"Rails server"),", ",(0,r.kt)("a",{parentName:"p",href:"https://manny.codes/7-ways-to-selectively-run-rspec-tests/"},"RSpec suite"),", ",(0,r.kt)("a",{parentName:"p",href:"https://ruby.github.io/rake/"},"Rake tasks"),") to trigger the code that seems to be broken.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Happy debugging!"),(0,r.kt)("admonition",{parentName:"li",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not forget to erase the debugger call once finished debugging.")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/pry/pry"},"binding.pry")," is an amazing instrument, but is NOT a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Debugger"},"debugger"),", it is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop"},"REPL"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://replit.com/languages/ruby"},"REPL")," has a completely different purpose, it can enhance the debugger, but not replace it."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib-2.7.0/libdoc/irb/rdoc/IRB.html"},"A casual REPL does not support even half of the possibilities")," that a mature debugger provides."),(0,r.kt)("p",{parentName:"admonition"},"Just to name some of them, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deivid-rodriguez/byebug/blob/master/GUIDE.md"},"line-by-line debugging, up and down stack navigation, dynamic breakpoints"),", etc."),(0,r.kt)("p",{parentName:"admonition"},"Don't like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deivid-rodriguez/byebug"},"byebug")," since it does not highlight the syntax \ud83e\udd26? Then ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/66809857/12201472"},"this gist is for you"),"."),(0,r.kt)("p",{parentName:"admonition"},"Still don't like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deivid-rodriguez/byebug"},"byebug"),"? Use ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/70104440/12201472"},"binding.break")," - a modern debugger developed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ruby/debug"},"the Ruby core team"),".")))))}g.isMDXComponent=!0}}]);