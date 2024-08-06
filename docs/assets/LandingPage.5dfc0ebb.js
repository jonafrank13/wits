import{b as G,u as Z,a as X,Q as N}from"./QSpinner.209dac0a.js";import{Q as p,a as ee}from"./QSeparator.664cce77.js";import{Q as te}from"./QInput.2dd02b71.js";import{v as F,b as ae,d as ne,Q as B}from"./QBtn.a347b9c8.js";import{c,j as R,r as k,k as le,b as oe,h as g,T as ie,w as re,g as W,o as ce,x as E,G as Y,H as J,I as v,L as f,V as w,J as i,a0 as se,a1 as ue,a2 as de,$ as O}from"./index.9d9df68a.js";import{h as M,b as me}from"./render.7c7394e0.js";import{u as K}from"./use-timeout.53fd6c11.js";import{b as ge,e as fe,c as ve,a as he,u as Se}from"./private.use-form.64d199ed.js";import{b as ye}from"./format.2bd3f3a3.js";import{Q as be}from"./QPage.48785fbd.js";import"./uid.937d8ee7.js";const _e={ratio:[String,Number]};function qe(e,r){return c(()=>{const o=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const xe=1.7778;var Ae=R({name:"QImg",props:{..._e,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:xe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:o}){const d=k(e.initialRatio),s=qe(e,d),I=W(),{registerTimeout:T,removeTimeout:m}=K(),{registerTimeout:x,removeTimeout:C}=K(),Q=c(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),D=c(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),h=[k(null),k(Q.value)],S=k(0),$=k(!1),L=k(!1),V=c(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),P=c(()=>({width:e.width,height:e.height})),z=c(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),n=c(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function t(){if(C(),e.loadingShowDelay===0){$.value=!0;return}x(()=>{$.value=!0},e.loadingShowDelay)}function u(){C(),$.value=!1}function _({target:l}){F(I)===!1&&(m(),d.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,y(l,1))}function y(l,q){q===1e3||F(I)===!0||(l.complete===!0?a(l):T(()=>{y(l,q+1)},50))}function a(l){F(I)!==!0&&(S.value=S.value^1,h[S.value].value=null,u(),l.getAttribute("__qerror")!=="true"&&(L.value=!1),o("load",l.currentSrc||l.src))}function b(l){m(),u(),L.value=!0,h[S.value].value=D.value,h[S.value^1].value=Q.value,o("error",l)}function A(l){const q=h[l].value,j={key:"img_"+l,class:z.value,style:n.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...q};return S.value===l?Object.assign(j,{class:j.class+"current",onLoad:_,onError:b}):j.class+="loaded",g("div",{class:"q-img__container absolute-full",key:"img"+l},g("img",j))}function H(){return $.value===!1?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},M(r[L.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[g(G,{color:e.spinnerColor,size:e.spinnerSize})])}{let l=function(){re(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,q=>{m(),L.value=!1,q===null?(u(),h[S.value^1].value=Q.value):t(),h[S.value].value=q},{immediate:!0})};le.value===!0?oe(l):l()}return()=>{const l=[];return s.value!==null&&l.push(g("div",{key:"filler",style:s.value})),h[0].value!==null&&l.push(A(0)),h[1].value!==null&&l.push(A(1)),l.push(g(ie,{name:"q-transition--fade"},H)),g("div",{key:"main",class:V.value,style:P.value,role:"img","aria-label":e.alt},l)}}}),U=R({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const o=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:o.value},M(r.default))}}),we=R({name:"QRating",props:{...Z,...ge,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:r,emit:o}){const{proxy:{$q:d}}=W(),s=X(e),I=fe(e),T=ve(I),m=k(0);let x={};const C=c(()=>e.readonly!==!0&&e.disable!==!0),Q=c(()=>`q-rating row inline items-center q-rating--${C.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),D=c(()=>{const n=Array.isArray(e.icon)===!0?e.icon.length:0,t=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,u=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,_=Array.isArray(e.color)===!0?e.color.length:0,y=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:n,icon:n>0?e.icon[n-1]:e.icon,selIconLen:t,selIcon:t>0?e.iconSelected[t-1]:e.iconSelected,halfIconLen:u,halfIcon:u>0?e.iconHalf[t-1]:e.iconHalf,colorLen:_,color:_>0?e.color[_-1]:e.color,selColorLen:y,selColor:y>0?e.colorSelected[y-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),h=c(()=>{if(typeof e.iconAriaLabel=="string"){const n=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return t=>`${n}${t}`}if(Array.isArray(e.iconAriaLabel)===!0){const n=e.iconAriaLabel.length;if(n>0)return t=>e.iconAriaLabel[Math.min(t,n)-1]}return(n,t)=>`${t} ${n}`}),S=c(()=>{const n=[],t=D.value,u=Math.ceil(e.modelValue),_=C.value===!0?0:null,y=e.iconHalf===void 0||u===e.modelValue?-1:u;for(let a=1;a<=e.max;a++){const b=m.value===0&&e.modelValue>=a||m.value>0&&m.value>=a,A=y===a&&m.value<a,H=m.value>0&&(A===!0?u:e.modelValue)>=a&&m.value<a,l=A===!0?a<=t.halfColorLen?e.colorHalf[a-1]:t.halfColor:t.selColor!==void 0&&b===!0?a<=t.selColorLen?e.colorSelected[a-1]:t.selColor:a<=t.colorLen?e.color[a-1]:t.color,q=(A===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(b===!0||H===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||d.iconSet.rating.icon;n.push({name:(A===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(b===!0||H===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||d.iconSet.rating.icon,attrs:{tabindex:_,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":h.value(a,q)},iconClass:"q-rating__icon"+(b===!0||A===!0?" q-rating__icon--active":"")+(H===!0?" q-rating__icon--exselected":"")+(m.value===a?" q-rating__icon--hovered":"")+(l!==void 0?` text-${l}`:"")})}return n}),$=c(()=>{const n={role:"radiogroup"};return e.disable===!0&&(n["aria-disabled"]="true"),e.readonly===!0&&(n["aria-readonly"]="true"),n});function L(n){if(C.value===!0){const t=ye(parseInt(n,10),1,parseInt(e.max,10)),u=e.noReset!==!0&&e.modelValue===t?0:t;u!==e.modelValue&&o("update:modelValue",u),m.value=0}}function V(n){C.value===!0&&(m.value=n)}function P(n,t){switch(n.keyCode){case 13:case 32:return L(t),E(n);case 37:case 40:return x[`rt${t-1}`]&&x[`rt${t-1}`].focus(),E(n);case 39:case 38:return x[`rt${t+1}`]&&x[`rt${t+1}`].focus(),E(n)}}function z(){m.value=0}return ce(()=>{x={}}),()=>{const n=[];return S.value.forEach(({iconClass:t,name:u,attrs:_},y)=>{const a=y+1;n.push(g("div",{key:a,ref:b=>{x[`rt${a}`]=b},class:"q-rating__icon-container flex flex-center",..._,onClick(){L(a)},onMouseover(){V(a)},onMouseout:z,onFocus(){V(a)},onBlur:z,onKeyup(b){P(b,a)}},me(r[`tip-${a}`],[g(N,{class:t,name:u})])))}),e.name!==void 0&&e.disable!==!0&&T(n,"push"),g("div",{class:Q.value,style:s.value,...$.value},n)}}}),ke=R({name:"QCardActions",props:{...ae,vertical:Boolean},setup(e,{slots:r}){const o=ne(e),d=c(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>g("div",{class:d.value},M(r.default))}}),Ce=R({name:"QCard",props:{...he,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:r}){const{proxy:{$q:o}}=W(),d=Se(e,o),s=c(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:s.value},M(r.default))}});const Le=f("h4",{class:"text-h4 q-mb-sm text-center text-secondary cooper_italics"}," Welcome Reynard! ",-1),Ie={class:"text-h5 text-center text-bold text-white"},$e=f("h6",{class:"text-h6 text-center text-white q-mb-sm"},"Popular Subjects:",-1),Be={class:"flex row justify-center"},Qe={class:"flex column q-ma-md"},He={class:"flex column q-ma-md"},Re=f("b",null,"Name",-1),Ve=f("b",null,"Qualifications",-1),ze=f("b",null,"Ratings",-1),We=Object.assign({name:"LandingPage"},{__name:"LandingPage",setup(e){const r=k([{id:1,name:"Shannon Yap",qualification:"Degree in Computer Science at NUS",ratings:4,totalRatings:45,photo:"https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1.jpg"},{id:2,name:"Tim Cook",qualification:"Degree in Business at Harward",ratings:5,totalRatings:45e3,photo:"https://cdn.outsideonline.com/wp-content/uploads/2021/02/03/tim-cook-apple-park_s.jpg?crop=1:1&width=600&enable=upscale&quality=100"},{id:3,name:"Elon Musk",qualification:"College Dropout",ratings:2,totalRatings:5,photo:"https://i.insider.com/5db36222dee019314343a5b6?width=600&format=jpeg&auto=webp"},{id:4,name:"Vinicius Jr",qualification:"2nd Year JC1 student",ratings:1,totalRatings:77,photo:"https://t4.ftcdn.net/jpg/00/55/95/23/360_F_55952330_seOl7utkPA1281NkW0rkMd7fl2glYZsH.jpg"},{id:5,name:"Sakina Karchaoui",qualification:"Year 2 Ngee Ann engineering student",ratings:4.5,totalRatings:18,photo:"https://static1.purepeople.com/articles/3/24/54/43/@/3441799-sakina-karchaoui-membre-de-l-equipe-de-580x0-3.jpg"}]);return(o,d)=>(Y(),J(be,{class:"flex flex-start column bg-primary q-px-md q-pb-lg"},{default:v(()=>[Le,f("h5",Ie,[w(" Your Wits streak "),i(N,{name:"bolt",color:"white",size:"2rem"}),i(p,{color:"white",size:"28px","text-color":"accent"},{default:v(()=>[w("50")]),_:1})]),i(te,{color:"accent",standout:"",rounded:"",outlined:"",modelValue:o.text,"onUpdate:modelValue":d[0]||(d[0]=s=>o.text=s),label:"Search for subjects offered by tutors",class:"q-mx-sm text-caption"},{prepend:v(()=>[i(N,{name:"search"})]),append:v(()=>[i(N,{name:"close"})]),_:1},8,["modelValue"]),$e,f("div",Be,[f("div",Qe,[i(B,{unelevated:"",class:"q-ma-sm",rounded:"",color:"accent",label:"Math"}),i(B,{unelevated:"",class:"q-ma-sm",rounded:"",color:"secondary",label:"Science"})]),f("div",He,[i(B,{unelevated:"",class:"q-ma-sm",rounded:"",color:"red",label:"Humans"}),i(B,{unelevated:"",class:"q-ma-sm",rounded:"",color:"pink",label:"English"})])]),(Y(!0),se(de,null,ue(r.value,s=>(Y(),J(Ce,{key:s.id,class:"q-ma-md rounded-corners",flat:"",bordered:"",rounded:""},{default:v(()=>[i(U,{horizontal:""},{default:v(()=>[i(U,{class:"col-5 flex flex-center"},{default:v(()=>[i(Ae,{height:"105px",width:"120px",src:s.photo},null,8,["src"])]),_:2},1024),i(U,null,{default:v(()=>[f("p",null,[Re,w(": "+O(s.name),1)]),f("p",null,[Ve,w(": "+O(s.qualification),1)]),f("p",null,[ze,w(": "),i(we,{"model-value":s.ratings,color:"black",max:5},null,8,["model-value"]),w(" ("+O(s.totalRatings)+") ",1)])]),_:2},1024)]),_:2},1024),i(ee),i(ke,{class:"q-px-md",align:"between"},{default:v(()=>[i(B,{unelevated:"","no-caps":"",rounded:"",color:"black",class:"q-px-md"},{default:v(()=>[w(" Start Session ")]),_:1}),i(B,{unelevated:"","no-caps":"",rounded:"",color:"primary",class:"q-px-md text-black",onClick:d[1]||(d[1]=I=>o.$router.push({name:"BookSession"}))},{default:v(()=>[w(" Check All Sessions ")]),_:1})]),_:1})]),_:2},1024))),128))]),_:1}))}});export{We as default};
