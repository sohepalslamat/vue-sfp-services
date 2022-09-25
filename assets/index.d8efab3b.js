import Le,{defineComponent as ue}from"vue";import{SfpService as De}from"vue-sfp-services";function mr(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const et=ue({__name:"App",setup(e){return{__sfc:!0}}});function ce(e,t,r,i,n,a,o,s){var u=typeof e=="function"?e.options:e;t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a);var c;if(o?(c=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),n&&n.call(this,p),p&&p._registeredComponents&&p._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=s?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(v,h){return c.call(h),d(v,h)}}else{var y=u.beforeCreate;u.beforeCreate=y?[].concat(y,c):[c]}return{exports:e,options:u}}var tt=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("div",{attrs:{id:"app"}},[r("router-view")],1)},rt=[],nt=ce(et,tt,rt,!1,null,"5357ff77",null,null);const it=nt.exports;/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function $(e,t){for(var r in t)e[r]=t[r];return e}var at=/[!'()*]/g,ot=function(e){return"%"+e.charCodeAt(0).toString(16)},st=/%2C/g,q=function(e){return encodeURIComponent(e).replace(at,ot).replace(st,",")};function re(e){try{return decodeURIComponent(e)}catch{}return e}function ut(e,t,r){t===void 0&&(t={});var i=r||ct,n;try{n=i(e||"")}catch{n={}}for(var a in t){var o=t[a];n[a]=Array.isArray(o)?o.map(ge):ge(o)}return n}var ge=function(e){return e==null||typeof e=="object"?e:String(e)};function ct(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e&&e.split("&").forEach(function(r){var i=r.replace(/\+/g," ").split("="),n=re(i.shift()),a=i.length>0?re(i.join("=")):null;t[n]===void 0?t[n]=a:Array.isArray(t[n])?t[n].push(a):t[n]=[t[n],a]}),t}function ft(e){var t=e?Object.keys(e).map(function(r){var i=e[r];if(i===void 0)return"";if(i===null)return q(r);if(Array.isArray(i)){var n=[];return i.forEach(function(a){a!==void 0&&(a===null?n.push(q(r)):n.push(q(r)+"="+q(a)))}),n.join("&")}return q(r)+"="+q(i)}).filter(function(r){return r.length>0}).join("&"):null;return t?"?"+t:""}var K=/\/?$/;function G(e,t,r,i){var n=i&&i.options.stringifyQuery,a=t.query||{};try{a=ne(a)}catch{}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:a,params:t.params||{},fullPath:me(t,n),matched:e?pt(e):[]};return r&&(o.redirectedFrom=me(r,n)),Object.freeze(o)}function ne(e){if(Array.isArray(e))return e.map(ne);if(e&&typeof e=="object"){var t={};for(var r in e)t[r]=ne(e[r]);return t}else return e}var O=G(null,{path:"/"});function pt(e){for(var t=[];e;)t.unshift(e),e=e.parent;return t}function me(e,t){var r=e.path,i=e.query;i===void 0&&(i={});var n=e.hash;n===void 0&&(n="");var a=t||ft;return(r||"/")+a(i)+n}function qe(e,t,r){return t===O?e===t:t?e.path&&t.path?e.path.replace(K,"")===t.path.replace(K,"")&&(r||e.hash===t.hash&&V(e.query,t.query)):e.name&&t.name?e.name===t.name&&(r||e.hash===t.hash&&V(e.query,t.query)&&V(e.params,t.params)):!1:!1}function V(e,t){if(e===void 0&&(e={}),t===void 0&&(t={}),!e||!t)return e===t;var r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length!==i.length?!1:r.every(function(n,a){var o=e[n],s=i[a];if(s!==n)return!1;var u=t[n];return o==null||u==null?o===u:typeof o=="object"&&typeof u=="object"?V(o,u):String(o)===String(u)})}function lt(e,t){return e.path.replace(K,"/").indexOf(t.path.replace(K,"/"))===0&&(!t.hash||e.hash===t.hash)&&ht(e.query,t.query)}function ht(e,t){for(var r in t)if(!(r in e))return!1;return!0}function je(e){for(var t=0;t<e.matched.length;t++){var r=e.matched[t];for(var i in r.instances){var n=r.instances[i],a=r.enteredCbs[i];if(!(!n||!a)){delete r.enteredCbs[i];for(var o=0;o<a.length;o++)n._isBeingDestroyed||a[o](n)}}}}var vt={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,r){var i=r.props,n=r.children,a=r.parent,o=r.data;o.routerView=!0;for(var s=a.$createElement,u=i.name,c=a.$route,d=a._routerViewCache||(a._routerViewCache={}),y=0,p=!1;a&&a._routerRoot!==a;){var v=a.$vnode?a.$vnode.data:{};v.routerView&&y++,v.keepAlive&&a._directInactive&&a._inactive&&(p=!0),a=a.$parent}if(o.routerViewDepth=y,p){var h=d[u],f=h&&h.component;return f?(h.configProps&&_e(f,o,h.route,h.configProps),s(f,o,n)):s()}var l=c.matched[y],g=l&&l.components[u];if(!l||!g)return d[u]=null,s();d[u]={component:g},o.registerRouteInstance=function(m,R){var b=l.instances[u];(R&&b!==m||!R&&b===m)&&(l.instances[u]=R)},(o.hook||(o.hook={})).prepatch=function(m,R){l.instances[u]=R.componentInstance},o.hook.init=function(m){m.data.keepAlive&&m.componentInstance&&m.componentInstance!==l.instances[u]&&(l.instances[u]=m.componentInstance),je(c)};var w=l.props&&l.props[u];return w&&($(d[u],{route:c,configProps:w}),_e(g,o,c,w)),s(g,o,n)}};function _e(e,t,r,i){var n=t.props=dt(r,i);if(n){n=t.props=$({},n);var a=t.attrs=t.attrs||{};for(var o in n)(!e.props||!(o in e.props))&&(a[o]=n[o],delete n[o])}}function dt(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0}}function Ue(e,t,r){var i=e.charAt(0);if(i==="/")return e;if(i==="?"||i==="#")return t+e;var n=t.split("/");(!r||!n[n.length-1])&&n.pop();for(var a=e.replace(/^\//,"").split("/"),o=0;o<a.length;o++){var s=a[o];s===".."?n.pop():s!=="."&&n.push(s)}return n[0]!==""&&n.unshift(""),n.join("/")}function yt(e){var t="",r="",i=e.indexOf("#");i>=0&&(t=e.slice(i),e=e.slice(0,i));var n=e.indexOf("?");return n>=0&&(r=e.slice(n+1),e=e.slice(0,n)),{path:e,query:r,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var Q=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},U=He,gt=fe,mt=bt,_t=Ie,wt=Ne,Rt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function fe(e,t){for(var r=[],i=0,n=0,a="",o=t&&t.delimiter||"/",s;(s=Rt.exec(e))!=null;){var u=s[0],c=s[1],d=s.index;if(a+=e.slice(n,d),n=d+u.length,c){a+=c[1];continue}var y=e[n],p=s[2],v=s[3],h=s[4],f=s[5],l=s[6],g=s[7];a&&(r.push(a),a="");var w=p!=null&&y!=null&&y!==p,m=l==="+"||l==="*",R=l==="?"||l==="*",b=s[2]||o,x=h||f;r.push({name:v||i++,prefix:p||"",delimiter:b,optional:R,repeat:m,partial:w,asterisk:!!g,pattern:x?$t(x):g?".*":"[^"+k(b)+"]+?"})}return n<e.length&&(a+=e.substr(n)),a&&r.push(a),r}function bt(e,t){return Ie(fe(e,t),t)}function xt(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Et(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Ie(e,t){for(var r=new Array(e.length),i=0;i<e.length;i++)typeof e[i]=="object"&&(r[i]=new RegExp("^(?:"+e[i].pattern+")$",le(t)));return function(n,a){for(var o="",s=n||{},u=a||{},c=u.pretty?xt:encodeURIComponent,d=0;d<e.length;d++){var y=e[d];if(typeof y=="string"){o+=y;continue}var p=s[y.name],v;if(p==null)if(y.optional){y.partial&&(o+=y.prefix);continue}else throw new TypeError('Expected "'+y.name+'" to be defined');if(Q(p)){if(!y.repeat)throw new TypeError('Expected "'+y.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(p.length===0){if(y.optional)continue;throw new TypeError('Expected "'+y.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(v=c(p[h]),!r[d].test(v))throw new TypeError('Expected all "'+y.name+'" to match "'+y.pattern+'", but received `'+JSON.stringify(v)+"`");o+=(h===0?y.prefix:y.delimiter)+v}continue}if(v=y.asterisk?Et(p):c(p),!r[d].test(v))throw new TypeError('Expected "'+y.name+'" to match "'+y.pattern+'", but received "'+v+'"');o+=y.prefix+v}return o}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function $t(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function pe(e,t){return e.keys=t,e}function le(e){return e&&e.sensitive?"":"i"}function Ct(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return pe(e,t)}function Pt(e,t,r){for(var i=[],n=0;n<e.length;n++)i.push(He(e[n],t,r).source);var a=new RegExp("(?:"+i.join("|")+")",le(r));return pe(a,t)}function At(e,t,r){return Ne(fe(e,r),t,r)}function Ne(e,t,r){Q(t)||(r=t||r,t=[]),r=r||{};for(var i=r.strict,n=r.end!==!1,a="",o=0;o<e.length;o++){var s=e[o];if(typeof s=="string")a+=k(s);else{var u=k(s.prefix),c="(?:"+s.pattern+")";t.push(s),s.repeat&&(c+="(?:"+u+c+")*"),s.optional?s.partial?c=u+"("+c+")?":c="(?:"+u+"("+c+"))?":c=u+"("+c+")",a+=c}}var d=k(r.delimiter||"/"),y=a.slice(-d.length)===d;return i||(a=(y?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),n?a+="$":a+=i&&y?"":"(?="+d+"|$)",pe(new RegExp("^"+a,le(r)),t)}function He(e,t,r){return Q(t)||(r=t||r,t=[]),r=r||{},e instanceof RegExp?Ct(e,t):Q(e)?Pt(e,t,r):At(e,t,r)}U.parse=gt;U.compile=mt;U.tokensToFunction=_t;U.tokensToRegExp=wt;var we=Object.create(null);function F(e,t,r){t=t||{};try{var i=we[e]||(we[e]=U.compile(e));return typeof t.pathMatch=="string"&&(t[0]=t.pathMatch),i(t,{pretty:!0})}catch{return""}finally{delete t[0]}}function he(e,t,r,i){var n=typeof e=="string"?{path:e}:e;if(n._normalized)return n;if(n.name){n=$({},e);var a=n.params;return a&&typeof a=="object"&&(n.params=$({},a)),n}if(!n.path&&n.params&&t){n=$({},n),n._normalized=!0;var o=$($({},t.params),n.params);if(t.name)n.name=t.name,n.params=o;else if(t.matched.length){var s=t.matched[t.matched.length-1].path;n.path=F(s,o,"path "+t.path)}return n}var u=yt(n.path||""),c=t&&t.path||"/",d=u.path?Ue(u.path,c,r||n.append):c,y=ut(u.query,n.query,i&&i.options.parseQuery),p=n.hash||u.hash;return p&&p.charAt(0)!=="#"&&(p="#"+p),{_normalized:!0,path:d,query:y,hash:p}}var Tt=[String,Object],St=[String,Array],Re=function(){},Ot={name:"RouterLink",props:{to:{type:Tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:St,default:"click"}},render:function(t){var r=this,i=this.$router,n=this.$route,a=i.resolve(this.to,n,this.append),o=a.location,s=a.route,u=a.href,c={},d=i.options.linkActiveClass,y=i.options.linkExactActiveClass,p=d==null?"router-link-active":d,v=y==null?"router-link-exact-active":y,h=this.activeClass==null?p:this.activeClass,f=this.exactActiveClass==null?v:this.exactActiveClass,l=s.redirectedFrom?G(null,he(s.redirectedFrom),null,i):s;c[f]=qe(n,l,this.exactPath),c[h]=this.exact||this.exactPath?c[f]:lt(n,l);var g=c[f]?this.ariaCurrentValue:null,w=function(te){be(te)&&(r.replace?i.replace(o,Re):i.push(o,Re))},m={click:be};Array.isArray(this.event)?this.event.forEach(function(te){m[te]=w}):m[this.event]=w;var R={class:c},b=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:w,isActive:c[h],isExactActive:c[f]});if(b){if(b.length===1)return b[0];if(b.length>1||!b.length)return b.length===0?t():t("span",{},b)}if(this.tag==="a")R.on=m,R.attrs={href:u,"aria-current":g};else{var x=Me(this.$slots.default);if(x){x.isStatic=!1;var E=x.data=$({},x.data);E.on=E.on||{};for(var P in E.on){var ee=E.on[P];P in m&&(E.on[P]=Array.isArray(ee)?ee:[ee])}for(var H in m)H in E.on?E.on[H].push(m[H]):E.on[H]=w;var ye=x.data.attrs=$({},x.data.attrs);ye.href=u,ye["aria-current"]=g}else R.on=m}return t(this.tag,R,this.$slots.default)}};function be(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Me(e){if(e){for(var t,r=0;r<e.length;r++)if(t=e[r],t.tag==="a"||t.children&&(t=Me(t.children)))return t}}var X;function ie(e){if(!(ie.installed&&X===e)){ie.installed=!0,X=e;var t=function(n){return n!==void 0},r=function(n,a){var o=n.$options._parentVnode;t(o)&&t(o=o.data)&&t(o=o.registerRouteInstance)&&o(n,a)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",vt),e.component("RouterLink",Ot);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var N=typeof window<"u";function M(e,t,r,i,n){var a=t||[],o=r||Object.create(null),s=i||Object.create(null);e.forEach(function(d){ae(a,o,s,d,n)});for(var u=0,c=a.length;u<c;u++)a[u]==="*"&&(a.push(a.splice(u,1)[0]),c--,u--);return{pathList:a,pathMap:o,nameMap:s}}function ae(e,t,r,i,n,a){var o=i.path,s=i.name,u=i.pathToRegexpOptions||{},c=qt(o,n,u.strict);typeof i.caseSensitive=="boolean"&&(u.sensitive=i.caseSensitive);var d={path:c,regex:Lt(c,u),components:i.components||{default:i.component},alias:i.alias?typeof i.alias=="string"?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:s,parent:n,matchAs:a,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:i.props==null?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach(function(f){var l=a?A(a+"/"+f.path):void 0;ae(e,t,r,f,d,l)}),t[d.path]||(e.push(d.path),t[d.path]=d),i.alias!==void 0)for(var y=Array.isArray(i.alias)?i.alias:[i.alias],p=0;p<y.length;++p){var v=y[p],h={path:v,children:i.children};ae(e,t,r,h,n,d.path||"/")}s&&(r[s]||(r[s]=d))}function Lt(e,t){var r=U(e,[],t);return r}function qt(e,t,r){return r||(e=e.replace(/\/$/,"")),e[0]==="/"||t==null?e:A(t.path+"/"+e)}function jt(e,t){var r=M(e),i=r.pathList,n=r.pathMap,a=r.nameMap;function o(v){M(v,i,n,a)}function s(v,h){var f=typeof v!="object"?a[v]:void 0;M([h||v],i,n,a,f),f&&f.alias.length&&M(f.alias.map(function(l){return{path:l,children:[h]}}),i,n,a,f)}function u(){return i.map(function(v){return n[v]})}function c(v,h,f){var l=he(v,h,!1,t),g=l.name;if(g){var w=a[g];if(!w)return p(null,l);var m=w.regex.keys.filter(function(P){return!P.optional}).map(function(P){return P.name});if(typeof l.params!="object"&&(l.params={}),h&&typeof h.params=="object")for(var R in h.params)!(R in l.params)&&m.indexOf(R)>-1&&(l.params[R]=h.params[R]);return l.path=F(w.path,l.params),p(w,l,f)}else if(l.path){l.params={};for(var b=0;b<i.length;b++){var x=i[b],E=n[x];if(Ut(E.regex,l.path,l.params))return p(E,l,f)}}return p(null,l)}function d(v,h){var f=v.redirect,l=typeof f=="function"?f(G(v,h,null,t)):f;if(typeof l=="string"&&(l={path:l}),!l||typeof l!="object")return p(null,h);var g=l,w=g.name,m=g.path,R=h.query,b=h.hash,x=h.params;if(R=g.hasOwnProperty("query")?g.query:R,b=g.hasOwnProperty("hash")?g.hash:b,x=g.hasOwnProperty("params")?g.params:x,w)return a[w],c({_normalized:!0,name:w,query:R,hash:b,params:x},void 0,h);if(m){var E=It(m,v),P=F(E,x);return c({_normalized:!0,path:P,query:R,hash:b},void 0,h)}else return p(null,h)}function y(v,h,f){var l=F(f,h.params),g=c({_normalized:!0,path:l});if(g){var w=g.matched,m=w[w.length-1];return h.params=g.params,p(m,h)}return p(null,h)}function p(v,h,f){return v&&v.redirect?d(v,f||h):v&&v.matchAs?y(v,h,v.matchAs):G(v,h,f,t)}return{match:c,addRoute:s,getRoutes:u,addRoutes:o}}function Ut(e,t,r){var i=t.match(e);if(i){if(!r)return!0}else return!1;for(var n=1,a=i.length;n<a;++n){var o=e.keys[n-1];o&&(r[o.name||"pathMatch"]=typeof i[n]=="string"?re(i[n]):i[n])}return!0}function It(e,t){return Ue(e,t.parent?t.parent.path:"/",!0)}var Nt=N&&window.performance&&window.performance.now?window.performance:Date;function Ve(){return Nt.now().toFixed(3)}var ke=Ve();function Y(){return ke}function Fe(e){return ke=e}var Be=Object.create(null);function ze(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),r=$({},window.history.state);return r.key=Y(),window.history.replaceState(r,"",t),window.addEventListener("popstate",xe),function(){window.removeEventListener("popstate",xe)}}function T(e,t,r,i){if(!!e.app){var n=e.options.scrollBehavior;!n||e.app.$nextTick(function(){var a=Ht(),o=n.call(e,t,r,i?a:null);!o||(typeof o.then=="function"?o.then(function(s){Ce(s,a)}).catch(function(s){}):Ce(o,a))})}}function Ke(){var e=Y();e&&(Be[e]={x:window.pageXOffset,y:window.pageYOffset})}function xe(e){Ke(),e.state&&e.state.key&&Fe(e.state.key)}function Ht(){var e=Y();if(e)return Be[e]}function Mt(e,t){var r=document.documentElement,i=r.getBoundingClientRect(),n=e.getBoundingClientRect();return{x:n.left-i.left-t.x,y:n.top-i.top-t.y}}function Ee(e){return j(e.x)||j(e.y)}function $e(e){return{x:j(e.x)?e.x:window.pageXOffset,y:j(e.y)?e.y:window.pageYOffset}}function Vt(e){return{x:j(e.x)?e.x:0,y:j(e.y)?e.y:0}}function j(e){return typeof e=="number"}var kt=/^#\d/;function Ce(e,t){var r=typeof e=="object";if(r&&typeof e.selector=="string"){var i=kt.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var n=e.offset&&typeof e.offset=="object"?e.offset:{};n=Vt(n),t=Mt(i,n)}else Ee(e)&&(t=$e(e))}else r&&Ee(e)&&(t=$e(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var S=N&&function(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function W(e,t){Ke();var r=window.history;try{if(t){var i=$({},r.state);i.key=Y(),r.replaceState(i,"",e)}else r.pushState({key:Fe(Ve())},"",e)}catch{window.location[t?"replace":"assign"](e)}}function oe(e){W(e,!0)}var L={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(e,t){return Z(e,t,L.redirected,'Redirected when going from "'+e.fullPath+'" to "'+Gt(t)+'" via a navigation guard.')}function Bt(e,t){var r=Z(e,t,L.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return r.name="NavigationDuplicated",r}function Pe(e,t){return Z(e,t,L.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function zt(e,t){return Z(e,t,L.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Z(e,t,r,i){var n=new Error(i);return n._isRouter=!0,n.from=e,n.to=t,n.type=r,n}var Kt=["params","query","hash"];function Gt(e){if(typeof e=="string")return e;if("path"in e)return e.path;var t={};return Kt.forEach(function(r){r in e&&(t[r]=e[r])}),JSON.stringify(t,null,2)}function J(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function D(e,t){return J(e)&&e._isRouter&&(t==null||e.type===t)}function Ae(e,t,r){var i=function(n){n>=e.length?r():e[n]?t(e[n],function(){i(n+1)}):i(n+1)};i(0)}function Qt(e){return function(t,r,i){var n=!1,a=0,o=null;Ge(e,function(s,u,c,d){if(typeof s=="function"&&s.cid===void 0){n=!0,a++;var y=Te(function(f){Wt(f)&&(f=f.default),s.resolved=typeof f=="function"?f:X.extend(f),c.components[d]=f,a--,a<=0&&i()}),p=Te(function(f){var l="Failed to resolve async component "+d+": "+f;o||(o=J(f)?f:new Error(l),i(o))}),v;try{v=s(y,p)}catch(f){p(f)}if(v)if(typeof v.then=="function")v.then(y,p);else{var h=v.component;h&&typeof h.then=="function"&&h.then(y,p)}}}),n||i()}}function Ge(e,t){return Qe(e.map(function(r){return Object.keys(r.components).map(function(i){return t(r.components[i],r.instances[i],r,i)})}))}function Qe(e){return Array.prototype.concat.apply([],e)}var Xt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Wt(e){return e.__esModule||Xt&&e[Symbol.toStringTag]==="Module"}function Te(e){var t=!1;return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];if(!t)return t=!0,e.apply(this,r)}}var C=function(t,r){this.router=t,this.base=Jt(r),this.current=O,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};C.prototype.listen=function(t){this.cb=t};C.prototype.onReady=function(t,r){this.ready?t():(this.readyCbs.push(t),r&&this.readyErrorCbs.push(r))};C.prototype.onError=function(t){this.errorCbs.push(t)};C.prototype.transitionTo=function(t,r,i){var n=this,a;try{a=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach(function(u){u(s)}),s}var o=this.current;this.confirmTransition(a,function(){n.updateRoute(a),r&&r(a),n.ensureURL(),n.router.afterHooks.forEach(function(s){s&&s(a,o)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(s){s(a)}))},function(s){i&&i(s),s&&!n.ready&&(!D(s,L.redirected)||o!==O)&&(n.ready=!0,n.readyErrorCbs.forEach(function(u){u(s)}))})};C.prototype.confirmTransition=function(t,r,i){var n=this,a=this.current;this.pending=t;var o=function(f){!D(f)&&J(f)&&(n.errorCbs.length?n.errorCbs.forEach(function(l){l(f)}):console.error(f)),i&&i(f)},s=t.matched.length-1,u=a.matched.length-1;if(qe(t,a)&&s===u&&t.matched[s]===a.matched[u])return this.ensureURL(),t.hash&&T(this.router,a,t,!1),o(Bt(a,t));var c=Yt(this.current.matched,t.matched),d=c.updated,y=c.deactivated,p=c.activated,v=[].concat(Dt(y),this.router.beforeHooks,er(d),p.map(function(f){return f.beforeEnter}),Qt(p)),h=function(f,l){if(n.pending!==t)return o(Pe(a,t));try{f(t,a,function(g){g===!1?(n.ensureURL(!0),o(zt(a,t))):J(g)?(n.ensureURL(!0),o(g)):typeof g=="string"||typeof g=="object"&&(typeof g.path=="string"||typeof g.name=="string")?(o(Ft(a,t)),typeof g=="object"&&g.replace?n.replace(g):n.push(g)):l(g)})}catch(g){o(g)}};Ae(v,h,function(){var f=tr(p),l=f.concat(n.router.resolveHooks);Ae(l,h,function(){if(n.pending!==t)return o(Pe(a,t));n.pending=null,r(t),n.router.app&&n.router.app.$nextTick(function(){je(t)})})})};C.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)};C.prototype.setupListeners=function(){};C.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=O,this.pending=null};function Jt(e){if(!e)if(N){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return e.charAt(0)!=="/"&&(e="/"+e),e.replace(/\/$/,"")}function Yt(e,t){var r,i=Math.max(e.length,t.length);for(r=0;r<i&&e[r]===t[r];r++);return{updated:t.slice(0,r),activated:t.slice(r),deactivated:e.slice(r)}}function ve(e,t,r,i){var n=Ge(e,function(a,o,s,u){var c=Zt(a,t);if(c)return Array.isArray(c)?c.map(function(d){return r(d,o,s,u)}):r(c,o,s,u)});return Qe(i?n.reverse():n)}function Zt(e,t){return typeof e!="function"&&(e=X.extend(e)),e.options[t]}function Dt(e){return ve(e,"beforeRouteLeave",Xe,!0)}function er(e){return ve(e,"beforeRouteUpdate",Xe)}function Xe(e,t){if(t)return function(){return e.apply(t,arguments)}}function tr(e){return ve(e,"beforeRouteEnter",function(t,r,i,n){return rr(t,i,n)})}function rr(e,t,r){return function(n,a,o){return e(n,a,function(s){typeof s=="function"&&(t.enteredCbs[r]||(t.enteredCbs[r]=[]),t.enteredCbs[r].push(s)),o(s)})}}var We=function(e){function t(r,i){e.call(this,r,i),this._startLocation=I(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=S&&a;o&&this.listeners.push(ze());var s=function(){var u=i.current,c=I(i.base);i.current===O&&c===i._startLocation||i.transitionTo(c,function(d){o&&T(n,d,u,!0)})};window.addEventListener("popstate",s),this.listeners.push(function(){window.removeEventListener("popstate",s)})}},t.prototype.go=function(i){window.history.go(i)},t.prototype.push=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(c){W(A(o.base+c.fullPath)),T(o.router,c,u,!1),n&&n(c)},a)},t.prototype.replace=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(c){oe(A(o.base+c.fullPath)),T(o.router,c,u,!1),n&&n(c)},a)},t.prototype.ensureURL=function(i){if(I(this.base)!==this.current.fullPath){var n=A(this.base+this.current.fullPath);i?W(n):oe(n)}},t.prototype.getCurrentLocation=function(){return I(this.base)},t}(C);function I(e){var t=window.location.pathname,r=t.toLowerCase(),i=e.toLowerCase();return e&&(r===i||r.indexOf(A(i+"/"))===0)&&(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var Je=function(e){function t(r,i,n){e.call(this,r,i),!(n&&nr(this.base))&&Se()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=S&&a;o&&this.listeners.push(ze());var s=function(){var c=i.current;!Se()||i.transitionTo(B(),function(d){o&&T(i.router,d,c,!0),S||z(d.fullPath)})},u=S?"popstate":"hashchange";window.addEventListener(u,s),this.listeners.push(function(){window.removeEventListener(u,s)})}},t.prototype.push=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(c){Oe(c.fullPath),T(o.router,c,u,!1),n&&n(c)},a)},t.prototype.replace=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(c){z(c.fullPath),T(o.router,c,u,!1),n&&n(c)},a)},t.prototype.go=function(i){window.history.go(i)},t.prototype.ensureURL=function(i){var n=this.current.fullPath;B()!==n&&(i?Oe(n):z(n))},t.prototype.getCurrentLocation=function(){return B()},t}(C);function nr(e){var t=I(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function Se(){var e=B();return e.charAt(0)==="/"?!0:(z("/"+e),!1)}function B(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function se(e){var t=window.location.href,r=t.indexOf("#"),i=r>=0?t.slice(0,r):t;return i+"#"+e}function Oe(e){S?W(se(e)):window.location.hash=e}function z(e){S?oe(se(e)):window.location.replace(se(e))}var ir=function(e){function t(r,i){e.call(this,r,i),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index+1).concat(s),o.index++,n&&n(s)},a)},t.prototype.replace=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index).concat(s),n&&n(s)},a)},t.prototype.go=function(i){var n=this,a=this.index+i;if(!(a<0||a>=this.stack.length)){var o=this.stack[a];this.confirmTransition(o,function(){var s=n.current;n.index=a,n.updateRoute(o),n.router.afterHooks.forEach(function(u){u&&u(o,s)})},function(s){D(s,L.duplicated)&&(n.index=a)})}},t.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},t.prototype.ensureURL=function(){},t}(C),_=function(t){t===void 0&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=jt(t.routes||[],this);var r=t.mode||"hash";switch(this.fallback=r==="history"&&!S&&t.fallback!==!1,this.fallback&&(r="hash"),N||(r="abstract"),this.mode=r,r){case"history":this.history=new We(this,t.base);break;case"hash":this.history=new Je(this,t.base,this.fallback);break;case"abstract":this.history=new ir(this,t.base);break}},Ye={currentRoute:{configurable:!0}};_.prototype.match=function(t,r,i){return this.matcher.match(t,r,i)};Ye.currentRoute.get=function(){return this.history&&this.history.current};_.prototype.init=function(t){var r=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var o=r.apps.indexOf(t);o>-1&&r.apps.splice(o,1),r.app===t&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=t;var i=this.history;if(i instanceof We||i instanceof Je){var n=function(o){var s=i.current,u=r.options.scrollBehavior,c=S&&u;c&&"fullPath"in o&&T(r,o,s,!1)},a=function(o){i.setupListeners(),n(o)};i.transitionTo(i.getCurrentLocation(),a,a)}i.listen(function(o){r.apps.forEach(function(s){s._route=o})})}};_.prototype.beforeEach=function(t){return de(this.beforeHooks,t)};_.prototype.beforeResolve=function(t){return de(this.resolveHooks,t)};_.prototype.afterEach=function(t){return de(this.afterHooks,t)};_.prototype.onReady=function(t,r){this.history.onReady(t,r)};_.prototype.onError=function(t){this.history.onError(t)};_.prototype.push=function(t,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.push(t,a,o)});this.history.push(t,r,i)};_.prototype.replace=function(t,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.replace(t,a,o)});this.history.replace(t,r,i)};_.prototype.go=function(t){this.history.go(t)};_.prototype.back=function(){this.go(-1)};_.prototype.forward=function(){this.go(1)};_.prototype.getMatchedComponents=function(t){var r=t?t.matched?t:this.resolve(t).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]};_.prototype.resolve=function(t,r,i){r=r||this.history.current;var n=he(t,r,i,this),a=this.match(n,r),o=a.redirectedFrom||a.fullPath,s=this.history.base,u=ar(s,o,this.mode);return{location:n,route:a,href:u,normalizedTo:n,resolved:a}};_.prototype.getRoutes=function(){return this.matcher.getRoutes()};_.prototype.addRoute=function(t,r){this.matcher.addRoute(t,r),this.history.current!==O&&this.history.transitionTo(this.history.getCurrentLocation())};_.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==O&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(_.prototype,Ye);var Ze=_;function de(e,t){return e.push(t),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function ar(e,t,r){var i=r==="hash"?"#"+t:t;return e?A(e+"/"+i):i}_.install=ie;_.version="3.6.5";_.isNavigationFailure=D;_.NavigationFailureType=L;_.START_LOCATION=O;N&&window.Vue&&window.Vue.use(_);const or={page:1,search:"",user_id:1},sr=ue({data(){return{...new De(this.$router,this.$route,or).queries}},computed:{queriesAsUrl(){const e=this.$route.query;return Object.keys(e).map(r=>`${r}=${e[r]}`).join("&")}},setup(){}});var ur=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("div",{staticClass:"form"},[r("label",{attrs:{for:"search"}},[t._v("Search")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{input:function(i){i.target.composing||(t.search=i.target.value)}}}),r("label",{attrs:{for:"user_id"}},[t._v("User Id")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{id:"user_id",type:"number"},domProps:{value:t.user_id},on:{input:function(i){i.target.composing||(t.user_id=i.target.value)}}}),r("div",{staticClass:"pagination"},[r("a",{on:{click:function(i){t.page>1?t.page--:t.page=1}}},[t._v("\xAB")]),t._l(6,function(i){return r("a",{key:i,class:{active:t.page==i},on:{click:function(n){t.page=i}}},[t._v(t._s(i))])}),r("a",{on:{click:function(i){t.page<6?t.page++:t.page=6}}},[t._v("\xBB")])],2),r("div",[r("h5",[t._v("Queries As Object: "+t._s(t.$route.query))]),r("h5",[t._v("Queries As Url: "+t._s(t.queriesAsUrl))])])])},cr=[],fr=ce(sr,ur,cr,!1,null,null,null,null);const pr=fr.exports,lr=ue({__name:"HomeView",setup(e){return{__sfc:!0,HelloSfp:pr}}});var hr=function(){var t=this,r=t._self._c,i=t._self._setupProxy;return r("main",[r(i.HelloSfp)],1)},vr=[],dr=ce(lr,hr,vr,!1,null,null,null,null);const yr=dr.exports;Le.use(Ze);const gr=new Ze({mode:"history",base:"/vue-sfp-services/",routes:[{path:"/",name:"home",component:yr}]});new Le({router:gr,render:e=>e(it)}).$mount("#app");export{mr as __vite_legacy_guard};
