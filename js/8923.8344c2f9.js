"use strict";(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[8923],{16763:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heightResize",{attrs:{append:[".page-option-block"]}},[n("code-editor",{ref:"editor",attrs:{showLineWrappingSet:"no",language:this.current.lang},model:{value:t.current.content,callback:function(e){t.$set(t.current,"content",e)},expression:"current.content"}})],1),n("option-block",{staticClass:"page-option-block"},[n("FormItem",[n("ButtonGroup",t._l(t.buttonLang,(function(e){return n("Button",{key:e,attrs:{type:t.current.lang!==e?"primary":"warning"},on:{click:function(n){return t.handle(e)}}},[t._v(t._s(e)+" ")])})),1)],1),n("FormItem",[n("Select",{attrs:{placeholder:t.$t("code_more")},on:{"on-change":function(e){t.handle(e)}}},t._l(t.lang,(function(e){return n("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),n("FormItem",[n("Select",{attrs:{placeholder:t.$t("code_indent")},model:{value:t.current.tab,callback:function(e){t.$set(t.current,"tab",e)},expression:"current.tab"}},[n("Option",{attrs:{value:2}},[t._v(t._s(t.$t("code_indent_width",[2])))]),n("Option",{attrs:{value:4}},[t._v(t._s(t.$t("code_indent_width",[4])))]),n("Option",{attrs:{value:6}},[t._v(t._s(t.$t("code_indent_width",[6])))]),n("Option",{attrs:{value:8}},[t._v(t._s(t.$t("code_indent_width",[8])))])],1)],1),n("FormItem",[n("Checkbox",{model:{value:t.current.isCompress,callback:function(e){t.$set(t.current,"isCompress",e)},expression:"current.isCompress"}},[t._v(t._s(t.$t("code_compress")))])],1)],1)],1)},s=[],o=(n(47042),n(26699),n(32023),n(41539),n(39714),n(96486)),c=n.n(o),a=n(83090),i=n(63486),l=n(25108),u={components:{codeEditor:a.Z,heightResize:i.Z},computed:{buttonLang:function(){var t=c().slice(this.lang,0,7);return this.current.lang&&!t.includes(this.current.lang)&&t.push(this.current.lang),t}},watch:{"current.isCompress":function(){this.current.lang&&this.handle(this.current.lang)}},created:function(){this.$initToolData("content")},methods:{handle:function(t){if(this.current.content)try{if(this.current.lang=t,this.current.isCompress)this.$refs.editor.compress(t);else{var e={tab:this.current.tab};this.$refs.editor.format(t,e)}return this.$saveToolData(this.current),this.$Message.success(this.$t("code_complete").toString())}catch(n){return l.log(n),this.$Modal.error({title:this.$t("code_error_prompt").toString(),content:"".concat(n.message)})}},isCompressChange:function(t){this.current.lang&&(l.log(t),this.handle(this.current.lang))}},data:function(){return{current:{content:"",isCompress:!1,lang:"",tab:4},lang:["html","js","css","xml","json","sql","yaml","php","ts","java","scss","less","graphql","markdown","vue","angular"]}}},h=u,d=n(1001),p=(0,d.Z)(h,r,s,!1,null,null,null),g=p.exports}}]);