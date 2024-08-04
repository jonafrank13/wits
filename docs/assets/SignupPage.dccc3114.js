import{u as E,a as R,b as G,c as H,Q as T}from"./QInput.d1901083.js";import{j as _,c as n,h as i,r as p,U as x,g as O,x as L,y as J,G as j,H as N,I as h,L as K,J as f,f as X,V as Y}from"./index.eb739f4d.js";import{h as C,u as Z,b as ee,e as te,Q as ae,f as le,i as ne,a as ue,d as oe,R as se}from"./QBtn.2c717510.js";import{Q as re}from"./QPage.6be9ef99.js";import"./uid.937d8ee7.js";var ie=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:s}){const e=n(()=>parseInt(t.lines,10)),l=n(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(e.value===1?" ellipsis":"")),o=n(()=>t.lines!==void 0&&e.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":e.value}:null);return()=>i("div",{style:o.value,class:l.value},C(s.default))}}),A=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:s}){const e=n(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:e.value},C(s.default))}});function ce(t,s){const e=p(null),l=n(()=>t.disable===!0?null:i("span",{ref:e,class:"no-outline",tabindex:-1}));function o(r){const d=s.value;r!==void 0&&r.type.indexOf("key")===0?d!==null&&document.activeElement!==d&&d.contains(document.activeElement)===!0&&d.focus():e.value!==null&&(r===void 0||d!==null&&d.contains(r.target)===!0)&&e.value.focus()}return{refocusTargetEl:l,refocusTarget:o}}var de={xs:30,sm:35,md:40,lg:50,xl:60};const ve={...R,...te,...G,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},me=["update:modelValue"];function fe(t,s){const{props:e,slots:l,emit:o,proxy:r}=O(),{$q:d}=r,S=E(e,d),y=p(null),{refocusTargetEl:V,refocusTarget:g}=ce(e,y),k=Z(e,de),m=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),v=n(()=>{const a=x(e.val);return m.value===!0?e.modelValue.findIndex(b=>x(b)===a):-1}),c=n(()=>m.value===!0?v.value!==-1:x(e.modelValue)===x(e.trueValue)),q=n(()=>m.value===!0?v.value===-1:x(e.modelValue)===x(e.falseValue)),I=n(()=>c.value===!1&&q.value===!1),w=n(()=>e.disable===!0?-1:e.tabindex||0),$=n(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(S.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),u=n(()=>{const a=c.value===!0?"truthy":q.value===!0?"falsy":"indet",b=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?c.value===!0:q.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${a}${b}`}),B=n(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{".checked":c.value,"^checked":c.value===!0?"checked":void 0,name:e.name,value:m.value===!0?e.val:e.trueValue}),a}),D=H(B),F=n(()=>{const a={tabindex:w.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":I.value===!0?"mixed":c.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function Q(a){a!==void 0&&(L(a),g(a)),e.disable!==!0&&o("update:modelValue",z(),a)}function z(){if(m.value===!0){if(c.value===!0){const a=e.modelValue.slice();return a.splice(v.value,1),a}return e.modelValue.concat([e.val])}if(c.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(q.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function U(a){(a.keyCode===13||a.keyCode===32)&&L(a)}function M(a){(a.keyCode===13||a.keyCode===32)&&Q(a)}const W=s(c,I);return Object.assign(r,{toggle:Q}),()=>{const a=W();e.disable!==!0&&D(a,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const b=[i("div",{class:u.value,style:k.value,"aria-hidden":"true"},a)];V.value!==null&&b.push(V.value);const P=e.label!==void 0?ee(l.default,[e.label]):C(l.default);return P!==void 0&&b.push(i("div",{class:`q-${t}__label q-anchor--skip`},P)),i("div",{ref:y,class:$.value,...F.value,onClick:Q,onKeydown:U,onKeyup:M},b)}}var be=_({name:"QToggle",props:{...ve,icon:String,iconColor:String},emits:me,setup(t){function s(e,l){const o=n(()=>(e.value===!0?t.checkedIcon:l.value===!0?t.indeterminateIcon:t.uncheckedIcon)||t.icon),r=n(()=>e.value===!0?t.iconColor:null);return()=>[i("div",{class:"q-toggle__track"}),i("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[i(ae,{name:o.value,color:r.value})]:void 0)]}return fe("toggle",s)}}),ge=_({name:"QItem",props:{...R,...le,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:s,emit:e}){const{proxy:{$q:l}}=O(),o=E(t,l),{hasLink:r,linkAttrs:d,linkClass:S,linkTag:y,navigateOnClick:V}=ne(),g=p(null),k=p(null),m=n(()=>t.clickable===!0||r.value===!0||t.tag==="label"),v=n(()=>t.disable!==!0&&m.value===!0),c=n(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(r.value===!0&&t.active===null?S.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),q=n(()=>{if(t.insetLevel===void 0)return null;const u=l.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+t.insetLevel*56+"px"}});function I(u){v.value===!0&&(k.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===g.value?k.value.focus():document.activeElement===k.value&&g.value.focus()),V(u))}function w(u){if(v.value===!0&&J(u,[13,32])===!0){L(u),u.qKeyEvent=!0;const B=new MouseEvent("click",u);B.qKeyEvent=!0,g.value.dispatchEvent(B)}e("keyup",u)}function $(){const u=ue(s.default,[]);return v.value===!0&&u.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:k})),u}return()=>{const u={ref:g,class:c.value,style:q.value,role:"listitem",onClick:I,onKeyup:w};return v.value===!0?(u.tabindex=t.tabindex||"0",Object.assign(u,d.value)):m.value===!0&&(u["aria-disabled"]="true"),i(y.value,u,$())}}}),ke=_({name:"QList",props:{...R,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:s}){const e=O(),l=E(t,e.proxy.$q),o=n(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>i(t.tag,{class:o.value},C(s.default))}});const qe={class:"flex column q-px-md"},xe=K("h4",{class:"text-h4 text-left text-bold"},"Sign up",-1),Ie=Object.assign({name:"SignupPage"},{__name:"SignupPage",setup(t){const s=p(!1);return(e,l)=>(j(),N(re,{class:"flex flex-start column"},{default:h(()=>[K("div",qe,[xe,f(T,{class:"q-mt-sm",modelValue:e.email,"onUpdate:modelValue":l[0]||(l[0]=o=>e.email=o),label:"Email"},null,8,["modelValue"]),f(T,{class:"q-my-sm",modelValue:e.password,"onUpdate:modelValue":l[1]||(l[1]=o=>e.password=o),label:"Password"},null,8,["modelValue"]),f(ke,null,{default:h(()=>[X((j(),N(ge,{tag:"label"},{default:h(()=>[f(A,null,{default:h(()=>[f(ie,{class:"q-mx-none"},{default:h(()=>[Y("I want to stay logged-in")]),_:1})]),_:1}),f(A,{avatar:""},{default:h(()=>[f(be,{color:"blue",modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=o=>s.value=o),size:"xl"},null,8,["modelValue"])]),_:1})]),_:1})),[[se]])]),_:1}),f(oe,{class:"q-my-lg q-py-sm q-px-xl self-end",rounded:"",unelevated:"","no-caps":"",color:"black",label:"Signup",onClick:l[3]||(l[3]=o=>e.$router.push({name:"Verify"}))})])]),_:1}))}});export{Ie as default};