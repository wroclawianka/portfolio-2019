(window["webpackJsonpportfolio-react"]=window["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),s=(a(18),a(1)),o=a(2),c=a(4),u=a(3),p=a(5),m=(a(19),a(20),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"links"},r.a.createElement("a",{className:"icon",href:"https://github.com/wroclawianka",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),r.a.createElement("a",{className:"icon",href:"https://www.linkedin.com/in/dorotazelga",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))}}]),t}(n.Component)),h=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).blinkUnderscore=function(){var e=!0,t=document.getElementById("underscore");window.setInterval((function(){!0===e?(t.className="console-underscore hidden",e=!1):(t.className="console-underscore",e=!0)}),400)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.blinkUnderscore()}},{key:"render",value:function(){return r.a.createElement("div",{className:"page-title"},r.a.createElement("div",{className:"title"},"dorota.zelga",r.a.createElement("span",{className:"console"},">",r.a.createElement("span",{className:"console-underscore",id:"underscore"},"_"))),r.a.createElement(m,null))}}]),t}(n.Component)),g=(a(22),[{id:"i_1",className:"content1",renderContent:function(){return r.a.createElement("p",null,"I am a ",r.a.createElement("strong",null,"Front-end developer")," with such skills as ",r.a.createElement("strong",null,"Angular"),", ",r.a.createElement("strong",null,"React"),", ",r.a.createElement("strong",null,"JavaScript"),", ",r.a.createElement("strong",null,"TypeScript")," and more. I am a huge ",r.a.createElement("strong",null,"agile enthusiast")," and I believe in the",r.a.createElement("strong",null," power of teamwork"),"!")}},{id:"i_2",className:"content2",renderContent:function(){return r.a.createElement("p",null,"I am working in IT since ",r.a.createElement("strong",null,"2014"),", being part of ",r.a.createElement("strong",null,"international teams")," from various countries. In ",r.a.createElement("strong",null,"mid-2017")," I started my journey with front-end development.")}},{id:"i_3",className:"content3",renderContent:function(){return r.a.createElement("p",null,"I am a well-organized person with ",r.a.createElement("strong",null,"plenty of motivation "),"and I consider myself a",r.a.createElement("strong",null," good self-learner"),". I do not afraid of relocation and challenges at work.",r.a.createElement("strong",null," Scroll down")," to find a couple of my ",r.a.createElement("strong",null,"personal projects"),"!")}}]),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOptionChange=function(e){a.setState({selectedOption:e.target.value})},a.nextSlide=function(e){var t=g.findIndex((function(t){return e===t.id})),n=t<g.length-1?++t:0;a.setState({selectedOption:g[n].id})},a.renderSlide=function(e,t,n){return r.a.createElement("div",{className:"slide",key:"slide-"+t,value:e,onClick:function(){return a.nextSlide(e)}},r.a.createElement("div",{className:"content-inner "+t},n()))},a.state={selectedOption:g[0].id},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"intro-content",className:"content"},r.a.createElement("div",{className:"slider"},g.map((function(t){var a=t.id;return r.a.createElement("input",{type:"radio",name:"switch",value:a,id:a,key:a,checked:e.state.selectedOption===a,onChange:e.handleOptionChange})})),r.a.createElement("div",{className:"wrapper"},g.map((function(t){var a=t.id,n=t.className,r=t.renderContent;return e.renderSlide(a,n,r)}))),r.a.createElement("div",{className:"controls"},g.map((function(e){var t=e.id;return r.a.createElement("label",{htmlFor:t,key:t},"\u2b24")})))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"intro",className:"block"},r.a.createElement(h,null),r.a.createElement("div",{className:"introduction animated animatedFadeInUp fadeInUp"},r.a.createElement(d,null),r.a.createElement("div",{className:"main-picture"})))}}]),t}(n.Component),f=a(10),k=a(12),w=(a(23),a(24),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box project animated animatedFadeInUp fadeInUp",key:this.props.title},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(this.props.img,")")}},this.props.isFullStack?r.a.createElement("div",{className:"ribbon ribbon-top-right"},r.a.createElement("span",null,"Full-stack")):null,r.a.createElement("div",{className:"icons"},this.props.webpage?r.a.createElement("a",{className:"icon",href:this.props.webpage,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-laptop","aria-hidden":"true"})):null,this.props.repo?r.a.createElement("a",{className:"icon",href:this.props.repo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})):null),r.a.createElement("div",{className:"layer"})),r.a.createElement("div",{className:"project-title"},this.props.title))}}]),t}(n.Component));function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=[{value:"REACT",label:"React"},{value:"ANGULAR",label:"Angular 2+"},{value:"NODEJS",label:"Node.js"},{value:"MONGO",label:"MongoDB"},{value:"TS",label:"TypeScript"},{value:"JS",label:"JavaScript"},{value:"JQUERY",label:"jQuery"},{value:"HTML/CSS",label:"HTML/CSS"},{value:"BOOTSTRAP",label:"Bootstrap"}],O=[{title:"Phonebook",img:"assets/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg",repo:"https://github.com/wroclawianka/phonebook",stack:["REACT","JS","MONGO","NODEJS","HTML/CSS"],isFullStack:!0},{title:"Sorting Algorithms",img:"assets/ferdinand-stohr-rzA7ZuI8M5o-unsplash.jpg",webpage:"https://sorting-algorithms-app.netlify.com/",repo:"https://github.com/wroclawianka/sorting",stack:["REACT","TS","HTML/CSS","BOOTSTRAP"]},{title:"Panowie z warsztatu",img:"assets/thibaut-nagorny-ozTOWTr_i74-unsplash.jpg",webpage:"https://wroclawianka.github.io/workshop-modern/",repo:"https://github.com/wroclawianka/workshop-modern",stack:["JQUERY","JS","HTML/CSS"]},{title:"Loan Ratings App",img:"assets/sabine-peters-4IqiPGAuTVE-unsplash.jpg",webpage:"https://wroclawianka.github.io/loan-ratings-app/",repo:"https://github.com/wroclawianka/loan-ratings-app",stack:["ANGULAR","TS","HTML/CSS"]},{title:"Portfolio 2019",img:"assets/crew-4Hg8LH9Hoxc-unsplash.jpg",webpage:"https://wroclawianka.github.io/portfolio",repo:"https://github.com/wroclawianka/portfolio",stack:["REACT","JS","HTML/CSS"]},{title:"Prague with my eyes",img:"assets/wojtek-witkowski-1fpyA_z2woY-unsplash.jpg",webpage:"https://praha-blog.netlify.com/",repo:"https://github.com/wroclawianka/BlogApi/tree/master/Blog2.0/blog2.0",stack:["ANGULAR","TS","HTML/CSS"]},{title:"Book List",img:"assets/lou-levit-XiCZpdoX4lE-unsplash.jpg",webpage:"https://book-list-dorota-zelga.netlify.com/",repo:"https://github.com/wroclawianka/book-list-assignment",stack:["REACT","JS","HTML/CSS","BOOTSTRAP"]},{title:"Graphical Dashboard",img:"assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg",webpage:"https://graphical-dashboard.netlify.com/",repo:"https://github.com/wroclawianka/graphical-dashboard",stack:["JS","HTML/CSS"]},{title:"Ordering App",img:"assets/david-clarke-wQSe8GKVKoE-unsplash.jpg",repo:"https://github.com/wroclawianka/ordering-assignment",stack:["REACT","JS","HTML/CSS"]},{title:"Portfolio 2018",img:"assets/temple-cerulean-tP8ZwlCF8og-unsplash.jpg",webpage:"https://wroclawianka.github.io/portfolio-2018/",repo:"https://github.com/wroclawianka/portfolio-2018",stack:["JQUERY","JS","HTML/CSS"]},{title:"Binary Calculator",img:"assets/agence-producteurs-locaux-damien-kuhn-d-pPg9pnZRY-unsplash.jpg",webpage:"https://wroclawianka.github.io/binary-calculator/",repo:"https://github.com/wroclawianka/binary-calculator",stack:["JQUERY","JS","BOOTSTRAP","HTML/CSS"]},{title:"Workshop Website",img:"assets/maksym-kaharlytskyi-ERt5AiGT7Xg-unsplash.jpg",webpage:"https://wroclawianka.github.io/car-service-webpage/",repo:"https://github.com/wroclawianka/car-service-webpage",stack:["JQUERY","JS","HTML/CSS"]}];var j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).findLength=function(){var e,t=window.innerWidth;switch(!0){case t>1200:e=8;break;case t>1e3:e=6;break;case t>550:e=4;break;default:e=3}a.setState({initLength:e,length:e})},a.filterByStack=function(e){var t=e?a.filterProjectsByStack(e):O;a.setState({filteredProjects:t,selectedStack:e})},a.filterProjectsByStack=function(e){return O.filter((function(t){return e.some((function(e){return t.stack.indexOf(e.value)>=0}))}))},a.clickMore=function(){a.setState({length:a.state.length+a.state.initLength})},a.state={length:0,maxLength:O.length,selectedStack:S.slice(0,6),filteredProjects:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.findLength(),this.filterByStack(this.state.selectedStack)}},{key:"render",value:function(){return r.a.createElement("div",{id:"portfolio",className:"block"},r.a.createElement("div",{className:"title"},"Portfolio"),r.a.createElement("div",{className:"filter"},r.a.createElement(k.a,{value:this.state.selectedStack,onChange:this.filterByStack,isMulti:!0,name:"colors",options:S,className:"basic-multi-select animated animatedFadeInUp fadeInUp",classNamePrefix:"select",placeholder:"Select technologies...",theme:function(e){return E({},e,{borderRadius:0,colors:E({},e.colors,{primary25:"rgba(68,220,200,0.28)",dangerLight:"rgba(68,220,200,0.28)",danger:"rgb(43,146,122)",primary:"#d7d7d7"})})}})),r.a.createElement("div",{className:"content"},this.state.filteredProjects.slice(0,this.state.length).map((function(e){return r.a.createElement(w,{title:e.title,img:e.img,webpage:e.webpage,repo:e.repo,isFullStack:e.isFullStack,key:e.title})}))),this.state.maxLength>this.state.length?r.a.createElement("div",{className:"show-more animated animatedFadeInUp fadeInUp"},r.a.createElement("div",{className:"show-more-inside"},r.a.createElement("p",{className:"show-more-content",onClick:this.clickMore},r.a.createElement("a",null,"More")))):null)}}]),t}(n.Component),y=(a(27),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},"Copyright \xa9",(new Date).getFullYear()," All rights reserved | Photos:",r.a.createElement("a",{href:"https://unsplash.com"}," Unsplash"))}}]),t}(n.Component)),N=(a(28),[{label:"React",img:"assets/technologies/icon-react.svg"},{label:"Angular",img:"assets/technologies/icon-angular.svg"},{label:"JavaScript",img:"assets/technologies/icon-javascript.svg"},{label:"TypeScript",img:"assets/technologies/icon-typescript.svg"},{label:"jQuery",img:"assets/technologies/icon-jquery.svg"},{label:"CSS",img:"assets/technologies/icon-css.svg"},{label:"HTML",img:"assets/technologies/icon-html.svg"},{label:"Selenium",img:"assets/technologies/icon-selenium.svg"}]),C=function(){return r.a.createElement("div",{id:"technologies",className:"short-block"},r.a.createElement("div",{className:"content"},N.map((function(e){return r.a.createElement("div",{className:"stack opacity animated animatedFadeInUp fadeInUp"},r.a.createElement("img",{className:"",id:e.label.toLowerCase(),src:e.img,alt:e.label}),r.a.createElement("p",{className:"stack-label"},e.label))}))))};i.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(y,null))}),null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.b17b21bf.chunk.js.map