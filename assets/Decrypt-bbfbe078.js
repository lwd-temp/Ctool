import{u as h,i as k}from"./action-1f2b0e0a.js";import{c as b,a as v,T as i}from"./index-e08c1316.js";import{r as w}from"./cryptoJS-bdf22502.js";import{A,bi as I,k as B,m as C,bj as a,aF as r,as as H,x as p,a$ as o}from"./history-8a975ce8.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";import"./index-755e52f7.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./string_decoder-6c0aff0b.js";import"./callBound-7203e6b7.js";import"./index-bb2a4312.js";const J=A({__name:"Decrypt",async setup(z){let u,s;const l={key:""},t=h(([u,s]=I(()=>k({input:b("base64"),option:l,output:v("text")})),u=await u,s(),u)),m=B(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return i.empty();try{return t.current.input.text.isError()?t.current.input.text:i.fromBase64(w.decrypt(t.current.input.text.toBase64(),t.current.option))}catch(c){return i.fromError($error(c))}});return(c,e)=>{const d=r("TextInput"),x=r("HelpTip"),_=r("Input"),f=r("TextOutput"),g=r("Align"),y=r("HeightResize");return H(),C(y,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:T,large:V})=>[p(g,{direction:"vertical"},{default:a(()=>[p(d,{modelValue:o(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=n=>o(t).current.input=n),allow:["base64","hex"],height:T},null,8,["modelValue","height"]),p(_,{class:"ctool-page-option",modelValue:o(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=n=>o(t).current.option.key=n),label:"key"},{suffix:a(()=>[p(x,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),p(f,{modelValue:o(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=n=>o(t).current.output=n),allow:["text"],content:m.value,height:V,onSuccess:e[3]||(e[3]=n=>o(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{J as default};