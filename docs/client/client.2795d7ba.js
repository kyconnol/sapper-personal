function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function v(t){return _(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function P(t){x=t}function R(){if(!x)throw new Error("Function called outside component initialization");return x}const A=[],j=[],L=[],C=[],O=Promise.resolve();let k=!1;function q(t){L.push(t)}let N=!1;const U=new Set;function D(){if(!N){N=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];P(e),H(e.$$)}for(A.length=0;j.length;)j.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(A.length);for(;C.length;)C.pop()();k=!1,N=!1,U.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const T=new Set;let I;function B(){I={r:0,c:[],p:I}}function J(){I.r||o(I.c),I=I.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),q(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),k||(k=!0,O.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,c,i,a,l=[-1]){const u=x;P(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&X(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),G(e,n.target,n.anchor),D()}P(u)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const nt={};function rt(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&a(r,n,t,t[0],e,null,null)},i(t){e||(K(r,t),e=!0)},o(t){V(r,t),e=!1},d(t){r&&r.d(t)}}}function ot(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class st extends Z{constructor(t){super(),Q(this,t,ot,rt,c,{})}}function ct(e){let n,r,o,s,c,i,a,p=e[0].message+"";return{c(){n=d("h1"),r=h(e[1]),o=m(),s=d("p"),c=h(p),i=m(),a=g()},l(t){n=b(t,"H1",{});var l=y(n);r=_(l,e[1]),l.forEach(f),o=v(t),s=b(t,"P",{});var u=y(s);c=_(u,p),u.forEach(f),i=v(t),a=g()},m(t,e){u(t,n,e),l(n,r),u(t,o,e),u(t,s,e),l(s,c),u(t,i,e),u(t,a,e)},p(t,[e]){2&e&&S(r,t[1]),1&e&&p!==(p=t[0].message+"")&&S(c,p)},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(s),t&&f(i),t&&f(a)}}}function it(t,e,n){let{error:r}=e,{status:o}=e;return t.$$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class at extends Z{constructor(t){super(),Q(this,t,it,ct,c,{error:0,status:1})}}function lt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&z(n.$$.fragment),r=g()},l(t){n&&F(n.$$.fragment,t),r=g()},m(t,e){n&&G(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?M(s,[Y(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){B();const t=n;V(t.$$.fragment,1,0,()=>{W(t,1)}),J()}c?(n=new c(i()),z(n.$$.fragment),K(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function ut(t){let e,n;return e=new at({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ft(t){let e,n,r,o;const s=[ut,lt],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(B(),V(c[a],1,1,()=>{c[a]=null}),J(),n=c[e],n||(n=c[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function pt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ft]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new st({props:s}),{c(){z(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?M(o,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function dt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=nt,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class ht extends Z{constructor(t){super(),Q(this,t,dt,pt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const mt=[/^\/blog\.json$/,/^\/blog\/jshelpers\/daArticles\/?$/,/^\/blog\/([^\/]+?)\.json$/],gt=[{js:()=>import("./index.121f0fb7.js"),css:["index.121f0fb7.css"]},{js:()=>import("./index.5c4ecf22.js"),css:["index.5c4ecf22.css"]},{js:()=>import("./index.4b2d8795.js"),css:[]},{js:()=>import("./devils-advocate.4bc4e596.js"),css:[]},{js:()=>import("./[slug].e84058df.js"),css:["[slug].e84058df.css"]}],$t=(yt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/tasks\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/devils-advocate\/?$/,parts:[null,{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:yt(t[1])})}]}]);var yt;const bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let _t,vt,St,Et=!1,wt=[],xt="{}";const Pt={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:et(null),session:et(bt&&bt.session)};let Rt,At;Pt.session.subscribe(async t=>{if(Rt=t,!Et)return;At=!0;const e=Ut(new URL(location.href)),n=vt={},{redirect:r,props:o,branch:s}=await It(e);n===vt&&await Tt(r,s,o,e.page)});let jt,Lt=null;let Ct,Ot=1;const kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},qt={};function Nt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ut(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(bt.baseUrl))return null;let e=t.pathname.slice(bt.baseUrl.length);if(""===e&&(e="/"),!mt.some(t=>t.test(e)))for(let n=0;n<$t.length;n+=1){const r=$t[n],o=r.pattern.exec(e);if(o){const n=Nt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Dt(){return{x:pageXOffset,y:pageYOffset}}async function Ht(t,e,n,r){if(e)Ct=e;else{const t=Dt();qt[Ct]=t,e=Ct=++Ot,qt[Ct]=n?t:{x:0,y:0}}Ct=e,_t&&Pt.preloading.set(!0);const o=Lt&&Lt.href===t.href?Lt.promise:It(t);Lt=null;const s=vt={},{redirect:c,props:i,branch:a}=await o;if(s===vt&&(await Tt(c,a,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=qt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}qt[Ct]=t,t&&scrollTo(t.x,t.y)}}async function Tt(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Ut(new URL(t,document.baseURI));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:Ct},"",t),Ht(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});Pt.page.set(r),Pt.preloading.set(!1),_t?_t.$set(n):(n.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},n.level0={props:await St},n.notify=Pt.page.notify,_t=new ht({target:jt,props:n,hydrate:!0})),wt=e,xt=JSON.stringify(r.query),Et=!0,At=!1}async function It(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!St){const t=()=>{};St=bt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Rt)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==xt)return!0;const o=wt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!At&&!u&&wt[i]&&wt[i].part===e.i)return wt[i];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Bt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(gt[e.i]);let m;return m=Et||!bt.preloaded[i+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Rt):{}:bt.preloaded[i+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}function Bt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Jt(t){const e=Ut(new URL(t,document.baseURI));if(e)return Lt&&t===Lt.href||function(t,e){Lt={href:t,promise:e}}(t,It(e)),Lt.promise}let Kt;function Vt(t){clearTimeout(Kt),Kt=setTimeout(()=>{Mt(t)},20)}function Mt(t){const e=zt(t.target);e&&"prefetch"===e.rel&&Jt(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ut(o);if(s){Ht(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),kt.pushState({id:Ct},"",o.href)}}function zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ft(t){if(qt[Ct]=Dt(),t.state){const e=Ut(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else Ot=Ot+1,function(t){Ct=t}(Ot),kt.replaceState({id:Ct},"",location.href)}var Gt;Gt={target:document.querySelector("body")},"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{kt.scrollRestoration="auto"}),addEventListener("load",()=>{kt.scrollRestoration="manual"}),function(t){jt=t}(Gt.target),addEventListener("click",Yt),addEventListener("popstate",Ft),addEventListener("touchstart",Mt),addEventListener("mousemove",Vt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;kt.replaceState({id:Ot},"",e);const n=new URL(location.href);if(bt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:i}=bt;St||(St=s&&s[0]),Tt(null,[],{error:i,status:c,session:o,level0:{props:St},level1:{props:{status:c,error:i},component:at},segments:s},{host:e,path:n,query:Nt(r),params:{}})}();const r=Ut(n);return r?Ht(r,Ot,!0,t):void 0});export{Z as S,m as a,y as b,b as c,_ as d,d as e,f,v as g,$ as h,Q as i,u as j,l as k,p as l,E as m,t as n,S as o,w as q,c as s,h as t};
