import{k as ye,r as T,b as le,w as P,c as k,o as xe,g as W,p as Ce,W as we,e as ne,X as Me,Y as be,x as Se,n as Q,B as Re,C as qe,h as M,S as X,T as Fe,z as Ve,Z as Ae,j as _e,Q as ie}from"./index.ca7840b8.js";import{Q as se,f as Ee,h as J}from"./QBtn.e6a408aa.js";import{u as oe}from"./uid.937d8ee7.js";import{u as Be,a as $e,b as Te,d as Oe}from"./private.use-form.c28fb4ab.js";function Ie(e){return e==null?null:e}function de(e,t){return e==null?t===!0?`f_${oe()}`:null:e}function Pe({getValue:e,required:t=!0}={}){if(ye.value===!0){const u=e!==void 0?T(Ie(e())):T(null);return t===!0&&u.value===null&&le(()=>{u.value=`f_${oe()}`}),e!==void 0&&P(e,i=>{u.value=de(i,t)}),u}return e!==void 0?k(()=>de(e(),t)):T(`f_${oe()}`)}const fe=/^on[A-Z]/;function De(){const{attrs:e,vnode:t}=W(),u={listeners:T({}),attributes:T({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&fe.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)fe.test(v)===!0&&(d[v]=t.props[v]);u.attributes.value=f,u.listeners.value=d}return xe(i),i(),u}function je({validate:e,resetValidation:t,requiresQForm:u}){const i=Ce(we,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),P(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.bindComponent(d)}),ne(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ce=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ge=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ce.test(e),hexaColor:e=>ve.test(e),hexOrHexaColor:e=>ge.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>ce.test(e)||G.test(e),hexaOrRgbaColor:e=>ve.test(e)||ee.test(e),anyColor:e=>ge.test(e)||G.test(e)||ee.test(e)},ze=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ze.includes(e)}};function Ke(e,t){const{props:u,proxy:i}=W(),f=T(!1),d=T(null),v=T(!1);je({validate:j,resetValidation:D});let x=0,E;const R=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),C=k(()=>u.disable!==!0&&R.value===!0&&t.value===!1),b=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);P(()=>u.modelValue,()=>{v.value=!0,C.value===!0&&u.lazyRules===!1&&O()});function $(){u.lazyRules!=="ondemand"&&C.value===!0&&v.value===!0&&O()}P(()=>u.reactiveRules,N=>{N===!0?E===void 0&&(E=P(()=>u.rules,$,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),P(()=>u.lazyRules,$),P(e,N=>{N===!0?v.value=!0:C.value===!0&&u.lazyRules!=="ondemand"&&O()});function D(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,O.cancel()}function j(N=u.modelValue){if(u.disable===!0||R.value===!1)return!0;const A=++x,H=t.value!==!0?()=>{v.value=!0}:()=>{},K=(S,w)=>{S===!0&&H(),f.value=S,d.value=w||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let B;if(typeof w=="function"?B=w(N,ae):typeof w=="string"&&ae[w]!==void 0&&(B=ae[w](N)),B===!1||typeof B=="string")return K(!0,B),!1;B!==!0&&B!==void 0&&z.push(B)}return z.length===0?(K(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===x&&K(!1),!0;const w=S.find(B=>B===!1||typeof B=="string");return A===x&&K(w!==void 0,w),w===void 0},S=>(A===x&&(console.error(S),K(!0)),!1)))}const O=Me(j,0);return ne(()=>{E!==void 0&&E(),O.cancel()}),Object.assign(i,{resetValidation:D,validate:j}),be(i,"hasError",()=>b.value),{isDirtyModel:v,hasRules:R,hasError:b,errorMessage:U,validate:j,resetValidation:D}}let re=[],Le=[];function pe(e){Le.length===0?e():re.push(e)}function Ze(e){re=re.filter(t=>t!==e)}function ue(e){return e!=null&&(""+e).length!==0}const Ue={...$e,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},He={...Ue,maxlength:[Number,String]},Qe=["update:modelValue","clear","focus","blur"];function Ye({requiredForAttr:e=!0,tagProp:t,changeEvent:u=!1}={}){const{props:i,proxy:f}=W(),d=Be(i,f.$q),v=Pe({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:u,tag:t===!0?k(()=>i.tag):{value:"label"},isDark:d,editable:k(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:De(),targetUid:v,rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function We(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=W(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=k(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{u("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:n,focus:w}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:R,hasError:C,errorMessage:b,resetValidation:U}=Ke(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=k(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),j=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=k(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),K=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=k(()=>{const r={};return e.targetUid.value&&(r.for=e.targetUid.value),t.disable===!0&&(r["aria-disabled"]="true"),r});function S(){const r=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(r===null||r.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==r&&c.focus({preventScroll:!0}))}function w(){pe(S)}function B(){Ze(S);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function a(r){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",r))}function n(r,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",r)),c!==void 0&&c())})}function s(r){Se(r),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),e.changeEvent===!0&&u("change",null),u("clear",t.modelValue),Q(()=>{const c=E.value;U(),E.value=c})}function o(r){[13,32].includes(r.keyCode)&&s(r)}function h(){const r=[];return i.prepend!==void 0&&r.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),r.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),C.value===!0&&t.noErrorIcon===!1&&r.push(m("error",[M(se,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(m("inner-loading-append",i.loading!==void 0?i.loading():[M(Ee,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(m("inner-clearable-append",[M(se,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-label":v.lang.label.clear,onKeyup:o,onClick:s})])),i.append!==void 0&&r.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&r.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function g(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):i.rawControl!==void 0?r.push(i.rawControl()):i.control!==void 0&&r.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),A.value===!0&&r.push(M("div",{class:H.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(J(i.default))}function q(){let r,c;C.value===!0?b.value!==null?(r=[M("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(r=J(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(r=J(i.hint),c="q--slot-hint"));const y=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&y===!1&&r===void 0)return;const F=M("div",{key:c,class:"q-field__messages col"},r);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?F:M(Fe,{name:"q-transition--field-message"},()=>F),y===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(r,c){return c===null?null:M("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let p=!1;return Re(()=>{p=!0}),qe(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&le(()=>{d.focus()}),ne(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:B}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...c},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},h()),D.value===!0?q():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ke=Object.keys(te);ke.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Xe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ke.join("")+"])|(.)","g"),he=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),Je={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ge(e,t,u,i){let f,d,v,x,E,R;const C=T(null),b=T($());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,j),P(()=>e.mask,a=>{if(a!==void 0)O(b.value,!0);else{const n=w(b.value);j(),e.modelValue!==n&&t("update:modelValue",n)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&O(b.value,!0)}),P(()=>e.unmaskedValue,()=>{C.value===!0&&O(b.value)});function $(){if(j(),C.value===!0){const a=z(w(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function D(a){if(a<f.length)return f.slice(-a);let n="",s=f;const o=s.indexOf(_);if(o!==-1){for(let h=a-s.length;h>0;h--)n+=_;s=s.slice(0,o)+n+s.slice(o)}return s}function j(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&U(),C.value===!1){x=void 0,f="",d="";return}const a=me[e.mask]===void 0?e.mask:me[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(he,"\\$&"),o=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",p="";a.replace(Xe,(F,l,V,Z,L)=>{if(Z!==void 0){const I=te[Z];g.push(I),p=I.negate,q===!0&&(h.push("(?:"+p+"+)?("+I.pattern+"+)?(?:"+p+"+)?("+I.pattern+"+)?"),q=!1),h.push("(?:"+p+"+)?("+I.pattern+")?")}else if(V!==void 0)m="\\"+(V==="\\"?"":V),g.push(V),o.push("([^"+m+"]+)?"+m+"?");else{const I=l!==void 0?l:L;m=I==="\\"?"\\\\\\\\":I.replace(he,"\\\\$&"),g.push(I),o.push("([^"+m+"]+)?"+m+"?")}});const r=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,y=h.map((F,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):l===c?new RegExp("^"+F+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));v=g,x=F=>{const l=r.exec(e.reverseFillMask===!0?F:F.slice(0,g.length+1));l!==null&&(F=l.slice(1).join(""));const V=[],Z=y.length;for(let L=0,I=F;L<Z;L++){const Y=y[L].exec(I);if(Y===null)break;I=I.slice(Y.shift().length),V.push(...Y)}return V.length!==0?V.join(""):F},f=g.map(F=>typeof F=="string"?F:_).join(""),d=f.split(_).join(n)}function O(a,n,s){const o=i.value,h=o.selectionEnd,g=o.value.length-h,q=w(a);n===!0&&j();const m=z(q),p=e.fillMask!==!1?B(m):m,r=b.value!==p;o.value!==p&&(o.value=p),r===!0&&(b.value=p),document.activeElement===o&&Q(()=>{if(p===d){const y=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=o.selectionEnd;let F=h-1;for(let l=E;l<=F&&l<y;l++)f[l]!==_&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const y=e.reverseFillMask===!0?h===0?p.length>m.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(m.length,g)+1))+1:h;o.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(r===!0){const y=Math.max(0,p.length-(p===d?0:Math.min(m.length,g+1)));y===1&&h===1?o.setSelectionRange(y,y,"forward"):A.rightReverse(o,y)}else{const y=p.length-g;o.setSelectionRange(y,y,"backward")}else if(r===!0){const y=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);A.right(o,y)}else{const y=h-1;A.right(o,y)}});const c=e.unmaskedValue===!0?w(p):p;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&u(c,!0)}function N(a,n,s){const o=z(w(a.value));n=Math.max(0,f.indexOf(_),Math.min(o.length,n)),E=n,a.setSelectionRange(n,s,"forward")}const A={left(a,n){const s=f.slice(n-1).indexOf(_)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===_){n=o,s===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==_)return A.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const s=a.value.length;let o=Math.min(s,n+1);for(;o<=s;o++)if(f[o]===_){n=o;break}else f[o-1]===_&&(n=o);if(o>s&&f[n-1]!==void 0&&f[n-1]!==_)return A.left(a,s);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const s=D(a.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(s[o-1]===_){n=o;break}else if(s[o]===_&&(n=o,o===0))break;if(o<0&&s[n]!==void 0&&s[n]!==_)return A.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const s=a.value.length,o=D(s),h=o.slice(0,n+1).indexOf(_)===-1;let g=Math.min(s,n+1);for(;g<=s;g++)if(o[g-1]===_){n=g,n>0&&h===!0&&n--;break}if(g>s&&o[n-1]!==void 0&&o[n-1]!==_)return A.leftReverse(a,s);a.setSelectionRange(n,n,"forward")}};function H(a){t("click",a),R=void 0}function K(a){if(t("keydown",a),Ve(a)===!0||a.altKey===!0)return;const n=i.value,s=n.selectionStart,o=n.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=n.selectionDirection==="forward"?s:o);const h=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(n,R===s?o:s),a.shiftKey){const g=n.selectionStart;n.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(n,s),n.setSelectionRange(n.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(n,o),n.setSelectionRange(s,n.selectionEnd,"forward"))}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const n=v;let s=0,o="";for(let h=0;h<n.length;h++){const g=a[s],q=n[h];if(typeof q=="string")o+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))o+=q.transform!==void 0?q.transform(g):g,s++;else return o}return o}function S(a){const n=v,s=f.indexOf(_);let o=a.length-1,h="";for(let g=n.length-1;g>=0&&o!==-1;g--){const q=n[g];let m=a[o];if(typeof q=="string")h=q+h,m===q&&o--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,o--,m=a[o];while(s===g&&m!==void 0&&q.regex.test(m));else return h}return h}function w(a){return typeof a!="string"||x===void 0?typeof a=="number"?x(""+a):a:x(a)}function B(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:K,onMaskedClick:H}}function et(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const tt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,lt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,nt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,at=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ae.is.firefox===!0?at.test(u.data)===!1:tt.test(u.data)===!0||lt.test(u.data)===!0||nt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var dt=_e({name:"QInput",inheritAttrs:!1,props:{...He,...Je,...Te,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Qe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:f}=i,d={};let v=NaN,x,E,R=null,C;const b=T(null),U=Oe(e),{innerValue:$,hasMask:D,moveCursorForPaste:j,updateMaskValue:O,onMaskedKeydown:N,onMaskedClick:A}=Ge(e,t,m,b),H=et(e,!0),K=k(()=>ue($.value)),z=ot(g),S=Ye({changeEvent:!0}),w=k(()=>e.type==="textarea"||e.autogrow===!0),B=k(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),a=k(()=>{const l={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:r,onBlur:c,onFocus:ie};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=z,D.value===!0&&(l.onKeydown=N,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=q),l}),n=k(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});P(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),P(()=>e.modelValue,l=>{if(D.value===!0){if(E===!0&&(E=!1,String(l)===v))return;O(l)}else $.value!==l&&($.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Q(p)}),P(()=>e.autogrow,l=>{l===!0?Q(p):b.value!==null&&u.rows>0&&(b.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&Q(p)});function s(){pe(()=>{const l=document.activeElement;b.value!==null&&b.value!==l&&(l===null||l.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function h(l){if(D.value===!0&&e.reverseFillMask!==!0){const V=l.target;j(V,V.selectionStart,V.selectionEnd)}t("paste",l)}function g(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const V=l.target.value;if(l.target.qComposing===!0){d.value=V;return}if(D.value===!0)O(V,!1,l.inputType);else if(m(V),B.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:L}=l.target;Z!==void 0&&L!==void 0&&Q(()=>{l.target===document.activeElement&&V.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,L)})}e.autogrow===!0&&p()}function q(l){t("animationend",l),p()}function m(l,V){C=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,V===!0&&(E=!0),t("update:modelValue",l),Q(()=>{v===l&&(v=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(C,e.debounce)):C()}function p(){requestAnimationFrame(()=>{const l=b.value;if(l!==null){const V=l.parentNode.style,{scrollTop:Z}=l,{overflowY:L,maxHeight:I}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=L!==void 0&&L!=="scroll";Y===!0&&(l.style.overflowY="hidden"),V.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt(I,10)<l.scrollHeight?"auto":"hidden"),V.marginBottom="",l.scrollTop=Z}})}function r(l){z(l),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),t("change",l.target.value)}function c(l){l!==void 0&&ie(l),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),x=!1,E=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}ne(()=>{c()}),le(()=>{e.autogrow===!0&&p()}),Object.assign(S,{innerValue:$,fieldClass:k(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:K,floatingLabel:k(()=>K.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||ue(e.displayValue)),getControl:()=>M(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:y()}:H.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},y()),M("span",e.shadowText)])});const F=We(S);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>b.value}),be(i,"nativeEl",()=>b.value),F}});export{dt as Q};
