import{cd as C,ce as A,A as O,bi as S,k as c,al as j,be as g,m as f,bj as p,aF as i,as as _,x as u,a$ as a}from"./history-8a975ce8.js";import{u as k,i as q}from"./action-1f2b0e0a.js";import{b as B,S as N}from"./index-9dc12da9.js";import"./shim-03580cdb.js";import"./_commonjsHelpers-87174ba5.js";import"./index-25d7a505.js";import"./callBound-7203e6b7.js";import"./empty-9f795c74.js";import"./index-395898e3.js";function E(s){if(!C(s))throw TypeError("Invalid UUID");var t,l=new Uint8Array(16);return l[0]=(t=parseInt(s.slice(0,8),16))>>>24,l[1]=t>>>16&255,l[2]=t>>>8&255,l[3]=t&255,l[4]=(t=parseInt(s.slice(9,13),16))>>>8,l[5]=t&255,l[6]=(t=parseInt(s.slice(14,18),16))>>>8,l[7]=t&255,l[8]=(t=parseInt(s.slice(19,23),16))>>>8,l[9]=t&255,l[10]=(t=parseInt(s.slice(24,36),16))/1099511627776&255,l[11]=t/4294967296&255,l[12]=t>>>24&255,l[13]=t>>>16&255,l[14]=t>>>8&255,l[15]=t&255,l}const H=E,L=A,Q=O({__name:"Uuid",async setup(s){let t,l;const e=k(([t,l]=S(()=>q({amount:10,delimiter:",\\n",serialize:!1,hyphens:!0,is_add_quote:!1,isUpper:!1,uint8_array:!1,serialize_config:B("json"),result:[]})),t=await t,l(),t)),b=()=>{let r=[];for(let n=0,m=e.current.amount;n<m;n++)r.push(L());e.current.result=r},V=c(()=>e.current.result.length<1?"":e.current.result.map(r=>(e.current.uint8_array&&(r="["+H(r).toString()+"]"),e.current.hyphens||(r=r.replace(/-/g,"")),r=e.current.isUpper?r.toUpperCase():r.toLowerCase(),!e.current.serialize&&e.current.is_add_quote&&(r=`"${r}"`),r))),y=c(()=>N.formObject(e.current.serialize&&e.current.result.length>0?{lists:V.value}:{})),h=c(()=>V.value.join(e.current.delimiter.replace(/\\n/g,`
`)));return j(()=>{e.current.result.length<1&&b()}),g(()=>e.current.amount,()=>{b()}),g(()=>e.current,r=>{r.result.length<1||e.save()},{deep:!0,immediate:!0}),(r,n)=>{const m=i("Editor"),U=i("SerializeOutput"),v=i("HeightResize"),x=i("InputNumber"),d=i("Bool"),$=i("Input"),z=i("Align"),I=i("Card");return _(),f(z,{direction:"vertical"},{default:p(()=>[u(v,{reduce:5,append:[".ctool-page-option"]},{default:p(({height:o})=>[a(e).current.serialize?(_(),f(U,{key:1,modelValue:a(e).current.serialize_config,"onUpdate:modelValue":n[0]||(n[0]=w=>a(e).current.serialize_config=w),allow:["json","xml","yaml","toml","properties","php_array"],height:o,content:y.value},null,8,["modelValue","height","content"])):(_(),f(m,{key:0,disableLineNumbers:"","model-value":h.value,height:`${o}px`,placeholder:r.$t("main_ui_output")},null,8,["model-value","height","placeholder"]))]),_:1},8,["append"]),u(I,{class:"ctool-page-option"},{default:p(()=>[u(z,{horizontal:"center"},{default:p(()=>[u(x,{modelValue:a(e).current.amount,"onUpdate:modelValue":n[1]||(n[1]=o=>a(e).current.amount=o),label:r.$t("uuid_amount"),width:110},null,8,["modelValue","label"]),u(d,{border:"",label:r.$t("uuid_serialize"),modelValue:a(e).current.serialize,"onUpdate:modelValue":n[2]||(n[2]=o=>a(e).current.serialize=o)},null,8,["label","modelValue"]),u($,{modelValue:a(e).current.delimiter,"onUpdate:modelValue":n[3]||(n[3]=o=>a(e).current.delimiter=o),label:r.$t("uuid_delimiter"),width:150,disabled:a(e).current.serialize},null,8,["modelValue","label","disabled"]),u(d,{border:"",label:r.$t("uuid_is_add_quote"),modelValue:a(e).current.is_add_quote,"onUpdate:modelValue":n[4]||(n[4]=o=>a(e).current.is_add_quote=o),disabled:a(e).current.serialize},null,8,["label","modelValue","disabled"]),u(d,{border:"",label:r.$t("uuid_hyphens"),modelValue:a(e).current.hyphens,"onUpdate:modelValue":n[5]||(n[5]=o=>a(e).current.hyphens=o)},null,8,["label","modelValue"]),u(d,{border:"",label:r.$t("uuid_is_upper"),modelValue:a(e).current.isUpper,"onUpdate:modelValue":n[6]||(n[6]=o=>a(e).current.isUpper=o)},null,8,["label","modelValue"]),u(d,{border:"",label:r.$t("uuid_uint8_array"),modelValue:a(e).current.uint8_array,"onUpdate:modelValue":n[7]||(n[7]=o=>a(e).current.uint8_array=o)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})}}});export{Q as default};