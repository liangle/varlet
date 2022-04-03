import{d as k,r as i,b as z,y as d,x as L,C as E,i as r,I as F,T as M,w as I,v as N,J as O,z as U}from"./vendor.49f89f0d.js";import{g as h,a as _,t as p}from"./elements.92736b4e.js";import{u as $}from"./zIndex.8c13fd4c.js";import{u as j,e as A}from"./components.38f1d302.js";import"./index.f8492b74.js";function V(e){return["top","bottom"].includes(e)}const X={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:V},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:String,default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}};function Y(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!O(e)}var f=k({name:"VarMenu",props:X,setup(e,{slots:a}){const l=i(null),v=i(null),u=i(),m=i(0),y=i(0),{zIndex:b}=$(()=>e.show,1),{disabled:S}=j();let c=!1;const x=t=>t==="top"?h(l.value):h(l.value)-v.value.offsetHeight,C=()=>{c=!0},w=()=>{var t;if(c){c=!1;return}!e.show||(t=e["onUpdate:show"])==null||t.call(e,!1)},o=()=>{m.value=x(e.alignment),y.value=_(l.value)},T=z(()=>({top:`calc(${m.value}px + ${p(e.offsetY)})`,left:`calc(${y.value}px + ${p(e.offsetX)})`,zIndex:b.value})),g=()=>r(M,{name:"var-menu",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>{var t;return[I(r("div",{class:"var-menu__menu var-elevation--3",ref:v,style:T.value,onClick:n=>{n.stopPropagation()}},[(t=a.menu)==null?void 0:t.call(a)]),[[N,e.show]])]}});return d(()=>e.alignment,o),d(()=>e.show,async t=>{const{onOpen:n,onClose:s}=e;t&&(await U(),o()),t?n==null||n():s==null||s()}),d(()=>e.teleport,t=>{u.value=t}),L(()=>{u.value=e.teleport,o(),document.addEventListener("click",w),window.addEventListener("resize",o)}),E(()=>{document.removeEventListener("click",w),window.removeEventListener("resize",o)}),A({resize:o}),()=>{var n;let t;return r("div",{class:"var-menu",ref:l,onClick:C},[(n=a.default)==null?void 0:n.call(a),u.value?r(F,{to:u.value,disabled:S.value},Y(t=g())?t:{default:()=>[t]}):g()])}}});f.install=function(e){e.component(f.name,f)};export{f as M};
