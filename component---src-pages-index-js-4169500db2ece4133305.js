/*! For license information please see component---src-pages-index-js-4169500db2ece4133305.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_resume=self.webpackChunkgatsby_starter_resume||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,o){var n=o(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3913:function(e){function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},9754:function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:function(e,t,o){var n=o(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8585:function(e,t,o){var n=o(8).default,r=o(1506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,o){var n=o(3646),r=o(6860),a=o(379),l=o(8206);e.exports=function(e){return n(e)||r(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function t(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,o){var n=o(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var s in o)n.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},4266:function(e,t,o){"use strict";var n=o(5318);t.Z=void 0;var r=n(o(7154)),a=n(o(9713)),l=n(o(319)),s=n(o(4575)),i=n(o(8585)),c=n(o(9754)),u=n(o(1506)),p=n(o(3913)),f=n(o(2205)),d=n(o(5697)),m=n(o(7294)),h=n(o(5900)),v=n(o(2470));var y=function(e){function t(e){var o;return(0,s.default)(this,t),(o=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},o._handleSpy=o._handleSpy.bind((0,u.default)(o)),o}return(0,f.default)(t,e),(0,p.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,p.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var o=[],n=0,r=e.length;n<r;n++)o[n]=t;return o}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],o=[],n=[],r=e||this.state.targetItems,a=!1,s=0,i=r.length;s<i;s++){var c=r[s],u=!a&&this._isInView(c);u?(a=!0,t.push(c)):o.push(c);var p=s===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&p&&f&&(o.pop(),o.push.apply(o,(0,l.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:o,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,o=this.props,n=o.rootEl,r=o.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var a=e.getBoundingClientRect(),l=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+l,c=n?a.top+s-t.top+r:a.top+s+r,u=c+e.offsetHeight;return c<i&&u>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),o=t.scrollTop,n=t.scrollHeight;return o+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,o=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:o.viewStatusList,isScrolledPast:o.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,o;(t=this.state.inViewState,o=e,t.length===o.length&&t.every((function(e,t){return e===o[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,o=this.props,n=o.children,l=o.className,s=o.scrolledPastClassName,i=o.style,c=0,u=m.default.Children.map(n,(function(t,o){var n;if(!t)return null;var l=t.type,i=s&&e.state.isScrolledPast[o],u=(0,h.default)((n={},(0,a.default)(n,"".concat(t.props.className),t.props.className),(0,a.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[o]),(0,a.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return m.default.createElement(l,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),p=(0,h.default)((0,a.default)({},"".concat(l),l));return m.default.createElement(t,{className:p,style:i},u)}}]),t}(m.default.Component);t.Z=y},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(o),o=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=o},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var o=f(this),n=o.getBoundingClientRect(),a=this.getBoundingClientRect();o!==t.body?(m.call(this,o,o.scrollLeft+a.left-n.left,o.scrollTop+a.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function p(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function f(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function d(t){var o,n,r,l,s=(a()-t.startTime)/468;l=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function m(o,n,l){var i,c,u,p,f=a();o===t.body?(i=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=r.scroll):(i=o,c=o.scrollLeft,u=o.scrollTop,p=s),d({scrollable:i,method:p,startTime:f,startX:c,startY:u,x:n,y:l})}}}}()},8514:function(e){e.exports={siteTitle:"Evan Trock's Portfolio",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#3455ea",manifestThemeColor:"#3455ea",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/",firstName:"Evan",lastName:"Trock",bio:"I am currently a student at Staples High school and I am very interested in pursuing computer science, but more specifically data science and statistics in college. My passion for data science comes into play with my weekly radio show where I cite stats while entertaining fans with my sports analysis. Additionally, in my fantasy sports leagues, I grade players based on their stats and find great success due to my abilities. I have taken multiple summer courses to learn more about data science and I have taken AP statistics and AP computer science where I have gained experience coding in python and in Java. I also enjoy playing the violin and playing golf. At my school, I am the captain of the golf team, and I play in the chamber orchestra. Please review my GitHub and my recordings on this site.",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/EvanTrock"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/evan-trock-124bb4216"},{icon:"fa-facebook-f",name:"Facebook",url:"https://www.facebook.com/profile.php?id=100011839743039"}],experiences:[{title:"Senior Web Developer",location:"Intelitec Solutions",description:"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",date:"March 2013 - Present"}],media:[{name:"Trock Talk with special guest Joe DeMayo",location:"https://www.youtube.com/embed/J847gMNUeTo"},{name:"Superbowl 2021",location:"https://www.youtube.com/embed/aiAAQFwGpb8"},{name:"National History Day Competition: Egypt-Israel Peace Treaty Interview",location:"https://www.youtube.com/embed/gl-ewagwgtY"},{name:"Andy Viggiano Korean War Experience",location:"https://www.youtube.com/embed/xORIUfy9oIc"},{name:"Orion and the scorpion violin",location:"https://www.youtube.com/embed/wVcPHdnFwyg"}],email:"evanrtrock@gmail.com",phone:"203-216-8981"}},1730:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(7294),r=o(1646);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=o(3552),s=o(4266),i=o(9634),c=o.n(i),u=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(a(t)),t}(0,l.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){c().polyfill()},o.handleClick=function(e){e.preventDefault();var t=0,o=!0,n=this.props,r=n.type,a=n.element,l=n.offset,s=n.timeout;if(r&&a)switch(r){case"class":o=!!(t=document.getElementsByClassName(a)[0]);break;case"id":o=!!(t=document.getElementById(a))}o?this.scrollTo(t,l,s):console.log("Element not found: "+a)},o.scrollTo=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;o?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),o):window.scroll({top:n+t,left:0,behavior:"smooth"})},o.render=function(){return n.createElement(u,null,"object"==typeof this.props.children?n.cloneElement(this.props.children,{onClick:this.handleClick}):n.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.Component),f=o.p+"static/avatar-82bba9a9dcf0dbeb304aa3be7b3d98cd.png",d=o(8514),m=o.n(d),h=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Media",href:"media"},{content:"Resume",href:"resume"}],isCollapsed:!0},o.toggleNavbar=o.toggleNavbar.bind(a(o)),o}(0,l.Z)(t,e);var o=t.prototype;return o.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},o.render=function(){var e=this.state,t=e.tabs,o=e.isCollapsed;return n.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.createElement("a",{className:"navbar-brand",href:"#page-top"},n.createElement("span",{className:"d-block d-lg-none"},m().firstName," ",m().lastName),n.createElement("span",{className:"d-none d-lg-block"},n.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f,alt:""}))),n.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(o?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse "+(o?"":"show"),id:"navbarSupportedContent"},n.createElement(s.Z,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var o=e.href,r=e.content;return n.createElement("li",{className:"nav-item",key:o},n.createElement(p,{type:"id",element:o},n.createElement("a",{className:"nav-link",href:"#"+o},r)))})))))},t}(n.Component),v=o.p+"static/resume-57fead2e8b0ae548e6b6fe0b5726c5cc.pdf",y=function(){return n.createElement(r.Z,null,n.createElement(h,null),n.createElement("div",{className:"container-fluid p-0"},n.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},n.createElement("div",{className:"w-100"},n.createElement("h1",{className:"mb-0"},m().firstName,n.createElement("span",{className:"text-primary"},m().lastName)),n.createElement("div",{className:"subheading mb-5"},m().phone," ·",n.createElement("a",{href:"mailto:"+m().email},m().email)),n.createElement("p",{className:"lead mb-5"},m().bio),n.createElement("div",{className:"social-icons"},m().socialLinks.map((function(e){var t=e.icon,o=e.url;return n.createElement("a",{key:o,href:o},n.createElement("i",{className:"fab "+t}))}))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"media"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Media"),m().media.map((function(e){return n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},e.name),n.createElement("iframe",{width:"320",height:"240",src:e.location})))})))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"resume"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Resume"),n.createElement("a",{href:v},n.createElement("div",{className:"subheading mb-3"},"Download here"))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4169500db2ece4133305.js.map