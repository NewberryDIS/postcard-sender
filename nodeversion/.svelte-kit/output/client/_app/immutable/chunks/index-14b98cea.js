function S(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function O(){return Object.create(null)}function p(t){t.forEach(T)}function W(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function at(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(J(n,e))}function _t(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,l){if(r){const s=L(n,e,i,l);t.p(s,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function gt(t){const n={};for(const e in t)n[e]=!0;return n}let v=!1;function K(){v=!0}function Q(){v=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:R(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function V(t,n){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function xt(t,n,e){v&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function $t(){return A("")}function vt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function q(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:q(t,i,n[i])}function Et(t,n){for(const e in n)q(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function D(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function kt(t,n,e){return D(t,n,e,Y)}function Nt(t,n,e){return D(t,n,e,Z)}function et(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function jt(t){return et(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n){t.value=n==null?"":n}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Ot(t){w().$$.on_mount.push(t)}function Pt(t){w().$$.after_update.push(t)}function Tt(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=it(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Lt(t){return w().$$.context.get(t)}function qt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],P=[],b=[],k=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function Bt(){return F(),z}function j(t){b.push(t)}function Dt(t){k.push(t)}const E=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),rt(n.$$)}for(h(null),d.length=0,x=0;P.length;)P.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;k.length;)k.pop()();N=!1,E.clear(),h(t)}function rt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function zt(){_={r:0,c:[],p:_}}function Ft(){_.r||p(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function It(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=n[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Wt(t){return typeof t=="object"&&t!==null?t:{}}function Gt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Jt(t){t&&t.c()}function Kt(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const c=l.map(T).filter(W);s?s.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Qt(t,n,e,i,r,l,s,o=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:l,update:S,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...C)=>{const M=C.length?C[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&ut(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){K();const a=tt(n.target);u.fragment&&u.fragment.l(a),a.forEach(X)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),Q(),H()}h(c)}class Rt{$destroy(){ot(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Gt as $,S as A,_t as B,ht as C,mt as D,dt as E,V as F,ft as G,yt as H,I,pt as J,qt as K,wt as L,Mt as M,vt as N,It as O,p as P,Lt as Q,gt as R,Rt as S,P as T,Wt as U,Z as V,Nt as W,Et as X,At as Y,Tt as Z,j as _,bt as a,Dt as a0,at as a1,xt as b,jt as c,Ft as d,$t as e,ct as f,zt as g,X as h,Qt as i,Pt as j,Y as k,kt as l,tt as m,q as n,Ot as o,Ct as p,A as q,et as r,lt as s,Ht as t,St as u,Jt as v,Kt as w,st as x,ot as y,Bt as z};