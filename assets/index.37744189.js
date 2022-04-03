var oe=Object.defineProperty;var A=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var F=(e,s,n)=>s in e?oe(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,Y=(e,s)=>{for(var n in s||(s={}))ne.call(s,n)&&F(e,n,s[n]);if(A)for(var n of A(s))te.call(s,n)&&F(e,n,s[n]);return e};import{p as ae,S as se}from"./index.bef32d81.js";import{S as ie}from"./index.0b755aaa.js";import{I as re}from"./index.8ccfa1b5.js";import{p as le,P as ce}from"./index.67e4e0e5.js";import{p as P,m as ue}from"./components.38f1d302.js";import{t as B,g as me,c as pe,d as de}from"./shared.506a394a.js";import{_ as ve}from"./elevation.229458c1.js";import{d as he,r as h,b as ge,y as fe,e as _,o as S,l as X,j as k,i as we,c as E,k as Te,a as $,n as Ce,F as ye,G as D,H as Se,t as M,h as L,q as _e,z as ke}from"./vendor.49f89f0d.js";const Ie=Y(Y({show:{type:Boolean,default:!1},images:{type:Array,default:()=>[]},current:{type:String},zoom:{type:[String,Number],default:2},closeable:{type:Boolean,default:!1},"onUpdate:show":{type:Function}},P(ae,["loop","indicator","onChange"])),P(le,["lockScroll","teleport","onOpen","onClose","onOpened","onClosed","onRouteChange"]));const U=12,H=200,Ye=350,q=200,Xe=he({name:"VarImagePreview",components:{VarSwipe:se,VarSwipeItem:ie,VarPopup:ce,VarIcon:re},inheritAttrs:!1,props:Ie,setup(e){const s=h(!1),n=ge(()=>{const{images:o,current:t}=e,a=o.findIndex(l=>l===t);return a>=0?a:0}),u=h(1),r=h(0),f=h(0),w=h(void 0),T=h(void 0),C=h(!0);let p=null,i=null,c=null;const O=(o,t)=>{const{clientX:a,clientY:l}=o,{clientX:m,clientY:d}=t;return Math.abs(Math.sqrt((m-a)**2+(d-l)**2))},R=(o,t)=>({clientX:o.clientX,clientY:o.clientY,timestamp:Date.now(),target:t}),W=()=>{u.value=B(e.zoom),C.value=!1,i=null,window.setTimeout(()=>{w.value="linear",T.value="0s"},q)},z=()=>{u.value=1,r.value=0,f.value=0,C.value=!0,i=null,w.value=void 0,T.value=void 0},j=o=>i?O(i,o)<=U&&o.timestamp-i.timestamp<=H&&i.target===o.target:!1,G=o=>!o||!p||!i?!1:O(p,i)<=U&&Date.now()-i.timestamp<Ye&&(o===p.target||o.parentNode===p.target),Z=o=>{c=window.setTimeout(()=>{G(o.target)&&b(),p=null},H)},J=o=>{c&&window.clearTimeout(c);const{touches:t}=o,a=R(t[0],o.currentTarget);if(p=a,j(a)){u.value>1?z():W();return}i=a},N=o=>{const{offsetWidth:t,offsetHeight:a}=o,{naturalWidth:l,naturalHeight:m}=o.querySelector(".var-image-preview__image");return{width:t,height:a,imageRadio:m/l,rootRadio:a/t,zoom:B(e.zoom)}},K=o=>{const{zoom:t,imageRadio:a,rootRadio:l,width:m,height:d}=N(o);if(!a)return 0;const y=a>l?d/a:m;return Math.max(0,(t*y-m)/2)/t},Q=o=>{const{zoom:t,imageRadio:a,rootRadio:l,width:m,height:d}=N(o);if(!a)return 0;const y=a>l?d:m*a;return Math.max(0,(t*y-d)/2)/t},V=(o,t,a)=>o+t>=a?a:o+t<=-a?-a:o+t,x=o=>{if(!i)return;const t=o.currentTarget,{touches:a}=o,l=R(a[0],t);if(u.value>1){const m=l.clientX-i.clientX,d=l.clientY-i.clientY,y=K(t),ee=Q(t);r.value=V(r.value,m,y),f.value=V(f.value,d,ee)}i=l},b=()=>{var o;if(u.value>1){z(),setTimeout(()=>{var t;return(t=e["onUpdate:show"])==null?void 0:t.call(e,!1)},q);return}(o=e["onUpdate:show"])==null||o.call(e,!1)};return fe(()=>e.show,o=>{s.value=o},{immediate:!0}),{initialIndex:n,popupShow:s,scale:u,translateX:r,translateY:f,canSwipe:C,transitionTimingFunction:w,transitionDuration:T,handleTouchstart:J,handleTouchmove:x,handleTouchend:Z,close:b}}}),$e=["src","alt"],De={key:0,class:"var-image-preview__indicators"},Oe={class:"var-image-preview__extra"};function Re(e,s,n,u,r,f){const w=_("var-swipe-item"),T=_("var-swipe"),C=_("var-icon"),p=_("var-popup");return S(),X(p,{class:"var-image-preview__popup","var-image-preview-cover":"",transition:"var-fade",show:e.popupShow,overlay:!1,"close-on-click-overlay":!1,"lock-scroll":e.lockScroll,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange},{default:k(()=>[we(T,Se({class:"var-image-preview__swipe","var-image-preview-cover":"",touchable:e.canSwipe,indicator:e.indicator&&e.images.length>1,"initial-index":e.initialIndex,loop:e.loop,onChange:e.onChange},e.$attrs),{default:k(()=>[(S(!0),E(ye,null,Te(e.images,i=>(S(),X(w,{class:"var-image-preview__swipe-item","var-image-preview-cover":"",key:i},{default:k(()=>[$("div",{class:"var-image-preview__zoom-container",style:Ce({transform:`scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,transitionTimingFunction:e.transitionTimingFunction,transitionDuration:e.transitionDuration}),onTouchstart:s[0]||(s[0]=(...c)=>e.handleTouchstart&&e.handleTouchstart(...c)),onTouchmove:s[1]||(s[1]=(...c)=>e.handleTouchmove&&e.handleTouchmove(...c)),onTouchend:s[2]||(s[2]=(...c)=>e.handleTouchend&&e.handleTouchend(...c))},[$("img",{class:"var-image-preview__image",src:i,alt:i},null,8,$e)],36)]),_:2},1024))),128))]),indicator:k(({index:i,length:c})=>[D(e.$slots,"indicator",{index:i,length:c},()=>[e.indicator&&e.images.length>1?(S(),E("div",De,M(i+1)+" / "+M(c),1)):L("v-if",!0)])]),_:3},16,["touchable","indicator","initial-index","loop","onChange"]),D(e.$slots,"close-icon",{},()=>[e.closeable?(S(),X(C,{key:0,class:"var-image-preview__close-icon",name:"close-circle","var-image-preview-cover":"",onClick:e.close},null,8,["onClick"])):L("v-if",!0)]),$("div",Oe,[D(e.$slots,"extra")])]),_:3},8,["show","lock-scroll","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange"])}var g=ve(Xe,[["render",Re]]);let v;function I(e){if(!me())return;I.close();const s=pe(e)?{images:[e]}:de(e)?{images:e}:e,n=_e(s);n.teleport="body",v=n;const{unmountInstance:u}=ue(g,n,{onClose:()=>{var r;return(r=n.onClose)==null?void 0:r.call(n)},onClosed:()=>{var r;(r=n.onClosed)==null||r.call(n),u(),v===n&&(v=null)},onRouteChange:()=>{u(),v===n&&(v=null)},"onUpdate:show":r=>{n.show=r}});n.show=!0}I.close=()=>{if(v!=null){const e=v;v=null,ke().then(()=>{e.show=!1})}};g.install=function(e){e.component(g.name,g)};I.install=function(e){e.component(g.name,g)};I.Component=g;export{I};
