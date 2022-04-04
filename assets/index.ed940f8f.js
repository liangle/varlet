var te=Object.defineProperty;var X=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var H=(e,o,r)=>o in e?te(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,q=(e,o)=>{for(var r in o||(o={}))ne.call(o,r)&&H(e,r,o[r]);if(X)for(var r of X(o))re.call(o,r)&&H(e,r,o[r]);return e};import{a as ue,g as S,h as oe}from"./components.38f1d302.js";import{F as se,u as ie}from"./provide.515f51d9.js";import{a as de}from"./elements.92736b4e.js";import{t as V,d,i as ce}from"./shared.506a394a.js";import{_ as me}from"./elevation.229458c1.js";import{d as ve,r as $,q as be,b as k,y as G,x as he,e as fe,o as w,c as F,a as m,p as s,n as g,F as Ve,k as ge,G as Se,i as ye,z as pe,t as ke}from"./vendor.49f89f0d.js";function ze(e){return["always","normal","never"].includes(e)}const Ce={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:ze},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Ne,classes:Te}=oe("slider");var j=(e=>(e.First="1",e.Second="2",e))(j||{});const $e=ve({name:"VarSlider",components:{VarFormDetails:se},props:Ce,setup(e){const{bindForm:o,form:r}=ie(),{errorMessage:P,validateWithTrigger:D,validate:M,resetValidation:z}=ue(),u=()=>M(e.rules,e.modelValue),c=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),J=()=>pe(()=>D(["onChange"],"onChange",e.rules,e.modelValue)),T=$(null),v=$(0),C=$(!1),n=be({["1"]:c(),["2"]:c()}),b=k(()=>v.value/100*V(e.step)),K=k(()=>{let a=[{value:e.modelValue,enumValue:"1"}];return e.range&&d(e.modelValue)&&(a=[{value:e.modelValue[0],enumValue:"1"},{value:e.modelValue[1],enumValue:"2"}]),a}),O=a=>{let l;return e.thumbSize!==void 0&&(l=n[a.enumValue].active?`${3*V(e.thumbSize)}px`:"0px"),{height:l,width:l}},Q=a=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[a].active,Y=k(()=>{const{activeColor:a,range:l,modelValue:t}=e,h=l&&d(t)?Math.abs(t[0]-t[1]):t,i=l&&d(t)?Math.min(t[0],t[1]):0;return{width:`${h}%`,left:`${i}%`,background:a}}),y=k(()=>e.disabled||(r==null?void 0:r.disabled.value)),N=k(()=>e.readonly||(r==null?void 0:r.readonly.value)),B=(a,l)=>{let t=[];const{step:h,range:i,modelValue:f,onChange:ae}=e,R=V(h),p=Math.round(a/b.value)*R,le=n[l].percentValue;if(n[l].percentValue=p/R,i&&d(f)&&(t=l==="1"?[p,f[1]]:[f[0],p]),le!==p){const U=i?t:p;S(ae,U),S(e["onUpdate:modelValue"],U),J()}},Z=a=>{if(!e.range)return"1";const l=n["1"].percentValue*b.value,t=n["2"].percentValue*b.value,h=Math.abs(a-l),i=Math.abs(a-t);return h<=i?"1":"2"},_=(a,l)=>{v.value||(v.value=T.value.offsetWidth),!(y.value||N.value)&&(S(e.onStart),C.value=!0,n[l].startPosition=a.touches[0].clientX)},x=(a,l)=>{if(y.value||N.value||!C.value)return;let t=a.touches[0].clientX-n[l].startPosition+n[l].currentLeft;n[l].active=!0,t<=0?t=0:t>=v.value&&(t=v.value),B(t,l)},W=a=>{const{range:l,modelValue:t,onEnd:h}=e;if(y.value||N.value)return;let i=[];n[a].currentLeft=n[a].percentValue*b.value,n[a].active=!1;const f=n[a].percentValue;l&&d(t)&&(i=a==="1"?[f,t[1]]:[t[0],f]),S(h,l?i:f),C.value=!1},ee=a=>{if(y.value||N.value||a.target.closest(".var-slider__thumb"))return;const l=a.clientX-de(a.currentTarget),t=Z(l);B(l,t),W(t)},E=()=>{const a=V(e.step);return isNaN(a)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):a<1||a>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==a?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},A=()=>{const{range:a,modelValue:l}=e;return a&&!d(l)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!a&&d(l)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):a&&d(l)&&l.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},I=(a=e.modelValue,l=V(e.step))=>{e.range&&d(a)?(n["1"].percentValue=a[0]/l,n["1"].currentLeft=n["1"].percentValue*b.value,n["2"].percentValue=a[1]/l,n["2"].currentLeft=n["2"].percentValue*b.value):ce(a)&&(n["1"].currentLeft=a/l*b.value)};return G([()=>e.modelValue,()=>e.step],([a,l])=>{!E()||!A()||C.value||I(a,V(l))}),G(v,()=>I()),he(()=>{!E()||!A()||(v.value=T.value.offsetWidth)}),S(o,{reset:()=>{const a=e.range?[0,0]:0;S(e["onUpdate:modelValue"],a),z()},validate:u,resetValidation:z}),{n:Ne,classes:Te,Thumbs:j,sliderEl:T,getFillStyle:Y,isDisabled:y,errorMessage:P,thumbsProps:n,thumbList:K,toNumber:V,getRippleSize:O,showLabel:Q,start:_,move:x,end:W,click:ee}}}),we=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Fe(e,o,r,P,D,M){const z=fe("var-form-details");return w(),F("div",{class:s(e.n())},[m("div",{class:s(e.classes(e.n("block"),e.isDisabled?e.n("--disabled"):null,e.errorMessage?e.n("--error"):null)),style:g({height:e.thumbSize===void 0?e.thumbSize:`${3*e.toNumber(e.thumbSize)}px`,margin:e.thumbSize===void 0?e.thumbSize:`0 ${e.toNumber(e.thumbSize)/2}px`}),ref:"sliderEl",onClick:o[0]||(o[0]=(...u)=>e.click&&e.click(...u))},[m("div",{class:s(e.n("track"))},[m("div",{class:s(e.n("track-background")),style:g({background:e.trackColor,height:e.trackHeight+"px"})},null,6),m("div",{class:s(e.n("track-fill")),style:g(e.getFillStyle)},null,6)],2),(w(!0),F(Ve,null,ge(e.thumbList,u=>(w(),F("div",{class:s(e.n("thumb")),key:u.enumValue,style:g({left:`${u.value}%`,zIndex:e.thumbsProps[u.enumValue].active?1:void 0}),onTouchstart:c=>e.start(c,u.enumValue),onTouchmove:c=>e.move(c,u.enumValue),onTouchend:c=>e.end(u.enumValue),onTouchcancel:c=>e.end(u.enumValue)},[Se(e.$slots,"button",{currentValue:u.value},()=>[m("div",{class:s(e.n("thumb-block")),style:g({background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"})},null,6),m("div",{class:s(e.classes(e.n("thumb-ripple"),e.thumbsProps[u.enumValue].active?e.n("thumb-ripple-active"):null)),style:g(q({background:e.thumbColor},e.getRippleSize(u)))},null,6),m("div",{class:s(e.classes(e.n("thumb-label"),e.showLabel(u.enumValue)?e.n("thumb-label-active"):null)),style:g({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`,width:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`})},[m("span",null,ke(u.value),1)],6)])],46,we))),128))],6),ye(z,{"error-message":e.errorMessage,class:s(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}var L=me($e,[["render",Fe]]);L.install=function(e){e.component(L.name,L)};export{L as S};
