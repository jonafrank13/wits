import{Q as c}from"./QBtn.a347b9c8.js";import{Q as m}from"./QPage.48785fbd.js";import{_ as d,r as s,G as o,H as l,I as h,L as n,$ as p,a0 as i,K as y,a1 as g,a2 as x}from"./index.9d9df68a.js";import"./QSpinner.209dac0a.js";import"./render.7c7394e0.js";const v={class:"text-h4 text-bold text-center q-mb-sm"},_=["innerHTML"],f={class:"flex column"},B=Object.assign({name:"KnowPage"},{__name:"KnowPage",setup(q){const r=d(),e=s(0),t=s([{question:"Where are you learning from?",options:["Singapore","Malaysia","China","India","Japan","Thailand"]},{question:"You are a",options:["Student","Parent","Adult","Others"]},{question:"What level are you currently studying at",options:["Primary School","Secondary School","Junior College","Millenia Instituition","Polytechnic","University","Others"]},{question:"What year are you in ?",options:["Junior College 1","Junior College 2","Others"]},{question:"What subjects do you face difficulties in?",options:["Science","Math","Humanities","English","Mother tongue","Others"]}]),u=()=>{e.value<t.value.length-1?e.value++:r.push({name:"Landing"})};return(b,k)=>(o(),l(m,{class:"flex justify-between column"},{default:h(()=>[n("div",null,[n("h4",v,p(e.value>0?"Getting to know you":t.value[e.value].question),1),e.value>0?(o(),i("p",{key:0,class:"text-center q-mx-sm text-bold text-grey-8",innerHTML:t.value[e.value].question},null,8,_)):y("",!0),n("div",f,[(o(!0),i(x,null,g(t.value[e.value].options,a=>(o(),l(c,{key:a,unelevated:"",rounded:"","no-caps":"",color:"grey",label:a,class:"q-my-sm q-mx-xl q-pa-md text-black text-bold text-h6",onClick:u},null,8,["label"]))),128))])])]),_:1}))}});export{B as default};