(this["webpackJsonpyaminig.github.io"]=this["webpackJsonpyaminig.github.io"]||[]).push([[6],{174:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n(5),c=n(21),s=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year,", GPA: ",t.gpa]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(s,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}var j=n(59),v=n(58),O=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},k=function(e){var t=e.data,n=e.categories,i=t.category,a=t.competency,c=t.title,s={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:s,children:Object(r.jsx)("span",{children:c})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};k.defaultProps={categories:[]};var x=k,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,i,a=y(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&m(t.prototype,n),i&&m(t,i),c}(i.Component);S.defaultProps={skills:[],categories:[]};var E=S,C=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var P=C,T=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};T.defaultProps={data:[]};var N=T,w=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(a.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},D=[{title:"Advanced Computer Architecture",number:"ECE 5504",link:"https://ece.vt.edu/grad/courses/5504",university:"Virginia Tech"},{title:"Network Security",number:"ECE 5584",link:"https://ece.vt.edu/grad/courses/5584",university:"Virginia Tech"},{title:"Multiprocessor Programming",number:"ECE 5510",link:"https://ece.vt.edu/grad/courses/5510",university:"Virginia Tech"},{title:"Microcontroller Interfacing",number:"ECE 2534",link:"https://ece.vt.edu/grad/courses/2534",university:"Virginia Tech"},{title:"Computer Vision",number:"ECE 5554",link:"https://ece.vt.edu/grad/courses/5554",university:"Virginia Tech"},{title:"Virtual Environments",number:"CS 5754",link:"https://courses.cs.vt.edu/cs5754/",university:"Virginia Tech"},{title:"Big Data and Text Summarization",number:"CS 5984",link:"",university:"Virginia Tech"},{title:"Data Structures and Algorithms",number:"CSE 2003",link:"",university:"VIT"},{title:"Intro to C",number:"CSE 101",link:"",university:"VIT"},{title:"Computer Vision and Image Processing",number:"ECE 4001",link:"",university:"VIT"},{title:"Digital Signal Processing",number:"ECE 303",link:"",university:"VIT"},{title:"Introduction to Microcontrollers",number:"ECE 3003",link:"",university:"VIT"},{title:"Signals and Systems",number:"ECE 1004",link:"",university:"VIT"},{title:"Control Systems",number:"ECE 2010",link:"",university:"VIT"},{title:"Digital Logic and Design",number:"ECE 103",link:"",university:"VIT"},{title:"VLSI",number:"ECE 301",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"VIT"},{title:"Embedded Systems",number:"",link:"",university:"VIT"},{title:"Introduction to Computer Architecture",number:"CSE 2001",link:"",university:"VIT"}],V=[{school:"Virginia Tech",degree:"M.S. Computer Engineering",link:"https://ece.vt.edu/grad/masters",year:2019,gpa:3.85},{school:"Vellore Institute of Technology",degree:"B.S. Electronics and Communication Engineering",link:"https://vit.ac.in/",year:2017,gpa:8.72}],I=[{company:"Citrix Systems",position:"Software Engineer 2",link:"https://citrix.com",daterange:"August 2019 - Present",points:["Designed and developed an end-to-end dashboard to monitor releases, bugs and security critical issues across all teams at Citrix using React, Ant Design framework and C#.","Developed a schedule based email notification service that allows users to create reusable templates, schedule one-time/recurring emails, generate alerts, etc and integrated this functionality in the dashboard.","Wrote automation scripts using Python (Pandas, OpenPyXL, Jira's REST API) to read data from Excel sheets, perform text processing, validate the data from Jira and modify the Excel sheets accordingly. The automation saves Program Managers 5-6 hours of work per quarter. Integrated the scripts into the dashboard for self-service.","Created several front-end modules for the dashboard such as a drag-and-drop modifiable, hierarchical menu for business logic using React.","Wrote scripts to automate mundane program management tasks like tracking releases using Python and Jira's REST API"]},{company:"Virginia Tech",position:"Graduate Teaching Assistant",link:"https://ece.vt.edu/",daterange:"August 2017 - December 2018",points:["Created tutorials and GitHub repositories with boilerplate peripheral integration for MSP-432 Microcontroller. Developed projects like car racing game, Tic-Tac-Toe etc. on the Microcontroller using C.","Held 10 office hours a week to assist undergraduate students with assignments, projects, grading and coursework."]},{company:"VeriSign",position:"Software Engineering Intern",link:"http://enveritas.org",daterange:"May 2018 - August 2018",points:["Developed the frontend and backend of a bulk domain name lookup system using Angular JS and Java.","Improved lookup speed by 2.5 times by using local storage, caching and data pre-fetching techniques. Enhanced functionality of the tool by identifying bottlenecks and redundant function calls.","Automated the task of creating bi-monthly Confluence pages based on Sprint data using Confluence and Jira's REST API and Python."]}],A=n(17);var R=n(25);var L,J=[{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"C#",competency:4,category:["Backend Engineering","Languages"]},{title:"React",competency:3,category:["Web Development","Javascript","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"Java",competency:5,category:["Languages","Backend Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C",competency:3,category:["Languages","Backend Engineering"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"DAX",competency:3,category:["Languages","Data Science"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),M=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],B=(L=new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(A.a)(e)}(L)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(L)||Object(R.a)(L)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:M[t]}})),_=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(c.a,{title:"Resume",description:"Yamini Gaur's Resume. Citrix, Virginia Tech, Verisign, VIT.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:V}),Object(r.jsx)(b,{data:I}),Object(r.jsx)(E,{skills:J,categories:B}),Object(r.jsx)(N,{data:D}),Object(r.jsx)(w,{})]})})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(59);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.1d9ff250.chunk.js.map