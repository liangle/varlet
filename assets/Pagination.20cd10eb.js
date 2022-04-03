import{M as x}from"./index.15d91b10.js";import{R as ee}from"./index.f8492b74.js";import{I as ae}from"./index.8ccfa1b5.js";import{C as ie}from"./index.98d79c21.js";import{I as le}from"./index.338e5202.js";import{d as ne,r as b,b as $,y as L,e as I,f as te,o as v,c as m,w as N,p as k,G as O,i as y,V as Q,a as U,t as f,F as R,k as j,m as E,j as F,l as se,h as H}from"./vendor.49f89f0d.js";import{t as u,i as q}from"./shared.506a394a.js";import{p as oe}from"./en-US.628e0d34.js";import{_ as ue}from"./elevation.229458c1.js";const re={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function},"onUpdate:current":{type:Function},"onUpdate:size":{type:Function}};const ve=ne({name:"VarPagination",components:{VarMenu:x,VarIcon:ae,VarCell:ie,VarInput:le},directives:{Ripple:ee},props:re,setup(e){const l=b(!1),w=b(""),V=b("1"),h=b(!1),P=b(!1),n=b(u(e.current)||1),d=b(u(e.size)||10),z=b([]),C=$(()=>Math.ceil(e.maxPagerCount/2)),s=$(()=>Math.ceil(u(e.total)/u(d.value))),i=$(()=>{const a=d.value*(n.value-1)+1,o=Math.min(d.value*n.value,u(e.total));return[a,o]}),g=$(()=>e.showTotal?e.showTotal(u(e.total),i.value):""),B=(a,o)=>q(a)?!1:o===1?h.value:P.value,A=(a,o)=>q(a)?"basic":o===1?"head":"tail",G=(a,o)=>{a===n.value||e.disabled||(q(a)?n.value=a:a==="prev"?n.value>1&&(n.value-=1):a==="next"?n.value<s.value&&(n.value+=1):a==="..."&&(o===1?n.value=Math.max(n.value-e.maxPagerCount,1):n.value=Math.min(n.value+e.maxPagerCount,s.value)))},W=()=>{e.disabled||(l.value=!0)},X=a=>{d.value=a,l.value=!1},D=a=>/^[1-9][0-9]*$/.test(a),Y=(a,o,M)=>{if(M.target.blur(),D(o)){let c=u(o);c>s.value&&(c=s.value,V.value=`${c}`),c!==n.value&&(n.value=c)}a==="quick"&&(w.value=""),a==="simple"&&!D(o)&&(V.value=`${n.value}`)};return L([()=>e.current,()=>e.size],([a,o])=>{n.value=u(a)||1,d.value=u(o||10)}),L([n,d],([a,o],[M,c])=>{var J,K;if(a>s.value){n.value=s.value;return}let r=[];const{maxPagerCount:p,total:Z,onChange:S}=e,_=Math.ceil(u(Z)/u(c)),T=s.value-(p-C.value)-1;if(V.value=`${a}`,s.value-2>p){if(M===void 0||s.value!==_)for(let t=2;t<p+2;t++)r.push(t);if(a<=p&&a<T){r=[];for(let t=1;t<p+1;t++)r.push(t+1);h.value=!0,P.value=!1}if(a>p&&a<T){r=[];for(let t=1;t<p+1;t++)r.push(a+t-C.value);h.value=a===2&&p===1,P.value=!1}if(a>=T){r=[];for(let t=1;t<p+1;t++)r.push(s.value-(p-t)-1);h.value=!1,P.value=!0}r=[1,"...",...r,"...",s.value]}else for(let t=1;t<=s.value;t++)r.push(t);z.value=r,M!==void 0&&(S==null||S(a,o)),(J=e["onUpdate:current"])==null||J.call(e,a),(K=e["onUpdate:size"])==null||K.call(e,o)},{immediate:!0}),{pack:oe,current:n,menuVisible:l,size:d,pageCount:s,pageList:z,inputValue:w,simpleValue:V,totalText:g,getMode:A,isHideEllipsis:B,clickItem:G,showMenu:W,clickSize:X,setPage:Y,toNumber:u}}}),de={class:"var-pagination"},pe=["item-mode","onClick"],me={key:4,class:"var-pagination__total"};function fe(e,l,w,V,h,P){const n=I("var-icon"),d=I("var-input"),z=I("var-cell"),C=I("var-menu"),s=te("ripple");return v(),m("ul",de,[N((v(),m("li",{class:k(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[0]||(l[0]=i=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[y(n,{name:"chevron-left"})])],2)),[[s,{disabled:e.current<=1||e.disabled}]]),e.simple?(v(),m("li",{key:0,class:k(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[y(d,{modelValue:e.simpleValue,"onUpdate:modelValue":l[1]||(l[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[2]||(l[2]=i=>e.setPage("simple",e.simpleValue,i)),onKeydown:l[3]||(l[3]=Q(i=>e.setPage("simple",e.simpleValue,i),["enter"]))},null,8,["modelValue","disabled"]),U("span",null,"/ "+f(e.pageCount),1)],2)):(v(!0),m(R,{key:1},j(e.pageList,(i,g)=>N((v(),m("li",{key:e.toNumber(i)+g,"item-mode":e.getMode(i,g),class:k(["var-pagination__item var-elevation--2",{"var-pagination__item-active":i===e.current&&!e.disabled,"var-pagination__item-hide":e.isHideEllipsis(i,g),"var-pagination__item-disabled":e.disabled,"var-pagination__item-disabled-active":i===e.current&&e.disabled}]),onClick:B=>e.clickItem(i,g)},[E(f(i),1)],10,pe)),[[s,{disabled:e.disabled}]])),128)),N((v(),m("li",{class:k(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[4]||(l[4]=i=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[y(n,{name:"chevron-right"})])],2)),[[s,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(v(),m("li",{key:2,class:k(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[y(C,{show:e.menuVisible,"onUpdate:show":l[6]||(l[6]=i=>e.menuVisible=i),"offset-x":-4},{menu:F(()=>[(v(!0),m(R,null,j(e.sizeOption,(i,g)=>N((v(),se(z,{class:k(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:g,onClick:B=>e.clickSize(i)},{default:F(()=>[E(f(i)+f(e.pack.paginationItem)+" / "+f(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[s]])),128))]),default:F(()=>[U("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:l[5]||(l[5]=(...i)=>e.showMenu&&e.showMenu(...i))},[U("span",null,f(e.size)+f(e.pack.paginationItem)+" / "+f(e.pack.paginationPage),1),y(n,{class:"var-pagination__size-open-icon","var-pagination-cover":"",name:"menu-down"})])]),_:1},8,["show"])],2)):H("v-if",!0),e.showQuickJumper&&!e.simple?(v(),m("li",{key:3,class:k(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[E(f(e.pack.paginationJump)+" ",1),y(d,{modelValue:e.inputValue,"onUpdate:modelValue":l[7]||(l[7]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[8]||(l[8]=i=>e.setPage("quick",e.inputValue,i)),onKeydown:l[9]||(l[9]=Q(i=>e.setPage("quick",e.inputValue,i),["enter"]))},null,8,["modelValue","disabled"])],2)):H("v-if",!0),e.totalText?(v(),m("li",me,f(e.totalText),1)):H("v-if",!0)])}var Ce=ue(ve,[["render",fe]]);export{Ce as P};
