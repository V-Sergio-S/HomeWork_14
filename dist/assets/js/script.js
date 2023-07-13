!function(){var e={872:function(e,t){var n,i;n=function(e,t){"use strict";var n,i;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){return t.indexOf(e)>=0}function a(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function s(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||function(){function e(){o(this,e),this.keys=[],this.values=[]}return l(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++)if(this.keys[t]===e)return this.values[t]}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===e)return this.values[n]=t,this;return this.keys.push(e),this.values.push(t),this}}]),e}(),c=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function e(){o(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return l(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,i),d=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,(function(e,t){return t.toUpperCase()}));var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},v=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new u,this.wowEvent=function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o}(this.config.boxClass)}return l(e,[{key:"init",value:function(){this.element=window.document.documentElement,r(document.readyState,["interactive","complete"])?this.start():a(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}this.disabled()||(a(this.config.scrollContainer||window,"scroll",this.scrollHandler),a(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new c((function(t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.addedNodes.length;o++){var l=i.addedNodes[o];e.doSync(l)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,s(this.config.scrollContainer||window,"scroll",this.scrollHandler),s(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){c.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];r(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),a(e,"animationend",this.resetAnimation),a(e,"oanimationend",this.resetAnimation),a(e,"webkitAnimationEnd",this.resetAnimation),a(e,"MSAnimationEnd",this.resetAnimation),e;var t,n}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),l=e.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(e,t,i,o,l)}))}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++)this.boxes[e].style.visibility="visible"}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++)e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}},{key:"vendorCSS",value:function(e,t){for(var n=d(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var l=this.vendors[o];i=i||n.getPropertyCSSValue("-"+l+"-"+t)}return i}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=d(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),l=o+e.clientHeight;return o<=i&&l>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=v,e.exports=t.default},void 0===(i=n.apply(t,[e,t]))||(e.exports=i)}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=e=>{e.classList.add("form__input--error"),e.nextElementSibling.style.display="block",e.previousElementSibling.classList.add("form__input-label--error")},t=e=>{e.classList.remove("form__input--error");try{e.nextElementSibling.style.display="none"}catch{}try{e.previousElementSibling.classList.remove("form__input-label--error")}catch{}},n=(e,t,n,i,o,l,r)=>{e.innerText="Log in to the system",t.value="Sign In",n.previousElementSibling.remove(),n.parentNode.removeChild(n),i.previousElementSibling.remove(),i.remove(),o.previousElementSibling.remove(),o.remove(),l.nextElementSibling.remove(),l.remove(),r.innerText="Registration"},i=()=>{document.body.classList.add("loaded__hiding"),setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded__hiding")}),1e3),setTimeout((function(){document.body.classList.remove("loaded")}),1100)},o=()=>{document.querySelectorAll(".form__input").forEach((e=>{e.value=null}))},l=(n,o,l,r,a,s,u)=>{let c=!1;try{!n.value||n.value.length<3?(c=!0,e(n)):t(n)}catch{}!o.value||o.value.length<3?(c=!0,e(o)):t(o);try{!l.value||l.value.length<6?(c=!0,e(l)):t(l)}catch{}!r.value&&r.value.length<8?(c=!0,e(r)):t(r);try{r.value!==a.value&&a.value.length<8?(c=!0,e(a)):t(a)}catch{}try{s.checked?s.nextElementSibling.nextElementSibling.style.display="none":(c=!0,s.nextElementSibling.nextElementSibling.style.display="block")}catch{}c||"Sign Up"!==u.value||(((e,t,n)=>{const i=JSON.parse(localStorage.getItem("dataClient"));let o=null,l=null;try{for(let e of i)o=e.log,l=e.pass}catch{}if(t.value!==o&&n.value!==l){let i=[],o={name:e.value,log:t.value,pass:n.value},l=localStorage.getItem("dataClient");l&&(i=JSON.parse(l)),i.push(o),localStorage.setItem("dataClient",JSON.stringify(i))}})(n,o,r),((e,t)=>{const n=document.querySelector(e),o=document.querySelector(t);n.classList.add("visible"),document.body.style.overflow="hidden",document.body.style.margin="0 17px 0 0",o.addEventListener("click",(function(){n.classList.remove("visible"),document.body.style.overflow="",document.body.style.margin="0",i()}))})("#layer","[data-close]"))},r=(r,a,s,u,c,d,v,h,m,f,y)=>{const p=document.querySelector(r),g=document.querySelector(s),b=document.querySelector(u),S=document.querySelector(c),w=document.querySelector(d),E=document.querySelector(v),x=document.querySelector(a),k=document.querySelector(h),C=document.querySelector(m),L=document.querySelector(f),T=document.querySelector(y);g.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[0-9.,=+:;?!_/]/g,"")})),((n,i)=>{const o=JSON.parse(localStorage.getItem("dataClient"));let l=null;try{for(let r of o)l=r.log,n.addEventListener("input",(o=>{o.target.value=o.target.value.replace(/[.,=+;:?!* /]/g,""),t(n),n.previousElementSibling.innerText="Your username",n.value===l&&"Sign Up"===i.value&&(e(n),n.previousElementSibling.innerText="Имя занято")}))}catch{}})(b,k),(n=>{const i=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;n.addEventListener("input",(function(){var o;o=n.value,i.test(o)?(t(n),n.previousElementSibling.innerText="E-mail"):(e(n),n.previousElementSibling.innerText="Некорректный e-mail")}))})(S),(n=>{const i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;n.addEventListener("input",(function(){var o;o=n.value,i.test(o)?(t(n),n.previousElementSibling.innerText="Password"):(e(n),n.previousElementSibling.innerText="Добавте: один спец-символ и заглавную букву")}))})(w),((n,i)=>{n.addEventListener("input",(function(){n.value===i.value?(t(n),n.previousElementSibling.innerText="Repeat Password"):(e(n),n.previousElementSibling.innerText="Несовпадает!!!")}))})(E,w);const _=e=>{N(e),l(g,b,S,w,E,x,k)};function A(){p.removeEventListener("submit",_,A),p.removeEventListener("submit",O,A)}function N(e){e.preventDefault()}function O(n){if(N(n),"Registration"===T.innerText)try{((n,l,r,a,s)=>{const u=JSON.parse(localStorage.getItem("dataClient"));let c=null,d=null,v=null;for(let h of u){d=h.name,c=h.log,v=h.pass;let u=!1;t(r),r.nextElementSibling.innerText="Заполните поле Your username!",t(a),a.nextElementSibling.innerText="Пароль должен содержать не менее 8 символов",r.value?c!==r.value&&(u=!0,r.nextElementSibling.innerText="Такой пользователь не зарегистрирован",e(r)):(u=!0,r.nextElementSibling.innerText="Заполните поле Your username!",e(r)),a.value?v!==a.value&&(u=!0,a.nextElementSibling.innerText="Неверный пароль",e(a)):(u=!0,a.nextElementSibling.innerText="Введите пароль",e(a)),u||c!==r.value||v!==a.value||(i(),o(),n.innerText=`Welcome, ${d}!`,n.nextElementSibling.remove(),l.value="Exit",r.previousElementSibling.remove(),r.parentNode.removeChild(r),a.previousElementSibling.remove(),a.remove(),s.remove())}})(C,k,b,w,T)}catch{}}p.addEventListener("submit",_,A),L.addEventListener("click",(function(){o();try{n(C,k,g,S,E,x,T)}catch{}i()})),T.addEventListener("click",(e=>{if(N(e),"Already have an account?"===T.innerText){try{n(C,k,g,S,E,x,T)}catch{}i()}else{try{location.reload()}catch{}i()}})),p.addEventListener("submit",O,A),k.addEventListener("click",(function(){"Exit"==k.value&&(i(),location.reload())}))};window.addEventListener("DOMContentLoaded",(()=>{r("#formSubmit",".form__agree","#Full_Name","#Your_username","#E_mail","#Password","#Repeat_Password","#form__btn",".form-section__account","[data-close]","[data-account]"),wowJS()}))}(),function(){"use strict";var e=n(872);(new(n.n(e)())).init()}()}();