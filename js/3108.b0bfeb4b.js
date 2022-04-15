(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[3108],{50571:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return w}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("heightResize",{attrs:{reduce:52,ignore:""},on:{resize:e.resize}},[o("Tabs",{model:{value:e.current.operation,callback:function(t){e.$set(e.current,"operation",t)},expression:"current.operation"}},[o("TabPane",{attrs:{label:e.$t("base64_encode"),name:"encode"}},[o("div",{staticStyle:{position:"relative"}},[o("input-block",{staticStyle:{"margin-bottom":"10px"}},[o("autoHeightTextarea",{attrs:{height:e.height1,placeholder:e.$t("base64_input")},model:{value:e.current.encode.input,callback:function(t){e.$set(e.current.encode,"input",t)},expression:"current.encode.input"}}),o("template",{slot:"extra"},[o("updateFile",{on:{success:e.handleUpload}})],1)],2),e.isEncodeUploadFile?o("disableMask",{on:{close:function(t){e.encodeUploadFile={}}}},[e._v(" "+e._s(this.encodeUploadFile.file.name)+" ")]):e._e()],1),o("input-block",[o("autoHeightTextarea",{attrs:{height:e.height2,value:e.encodeOutput,placeholder:e.$t("base64_output")}}),o("template",{slot:"extra"},[o("Checkbox",{model:{value:e.current.encode.is_url_safe,callback:function(t){e.$set(e.current.encode,"is_url_safe",t)},expression:"current.encode.is_url_safe"}},[e._v(e._s(e.$t("base64_url_safe")))])],1)],2)],1),o("TabPane",{attrs:{label:e.$t("base64_decode"),name:"decode"}},[o("input-block",{staticStyle:{"margin-bottom":"10px"}},[o("autoHeightTextarea",{attrs:{height:e.height1,placeholder:e.$t("base64_input")},model:{value:e.current.decode.input,callback:function(t){e.$set(e.current.decode,"input",t)},expression:"current.decode.input"}})],1),o("input-block",{attrs:{bottom:"5px",right:"20px"}},[o("autoHeightTextarea",{class:e.isDecodeShowBinaryData?"tool-monospace-font-family":"",attrs:{height:e.height2,value:e.decodeError?e.decodeError:e.decodeOutput,placeholder:e.$t("base64_output")}}),o("template",{slot:"extra"},[e.isExportFile?o("Button",{attrs:{shape:"circle",icon:"md-download"},on:{click:e.exportFile}}):e._e(),e.isDecodeIncludeBinaryData?o("Button",{staticStyle:{"margin-left":"10px"},attrs:{shape:"circle",icon:"md-settings"},on:{click:function(t){e.decodeSetting=!0}}}):e._e()],1)],2)],1)],1),o("Modal",{attrs:{title:e.$t("base64_setting"),"footer-hide":"",width:"500",draggable:"",mask:!1},model:{value:e.decodeSetting,callback:function(t){e.decodeSetting=t},expression:"decodeSetting"}},[o("Form",{attrs:{"label-width":120}},[o("FormItem",{attrs:{label:e.$t("base64_hex_dump_show_mode")}},[o("RadioGroup",{model:{value:e.current.decode.show_mode,callback:function(t){e.$set(e.current.decode,"show_mode",t)},expression:"current.decode.show_mode"}},[o("Radio",{attrs:{label:"hex"}},[e._v(e._s(e.$t("base64_hex_dump_show_mode_hex")))]),o("Radio",{attrs:{label:"text"}},[e._v(e._s(e.$t("base64_hex_dump_show_mode_text")))])],1)],1),e.isHexShowMode?[o("Divider",{attrs:{plain:""}},[e._v(e._s(e.$t("base64_hex_dump_setting")))]),o("FormItem",{attrs:{label:e.$t("base64_hex_dump_format")}},[o("RadioGroup",{model:{value:e.current.decode.hex_dump_option.format,callback:function(t){e.$set(e.current.decode.hex_dump_option,"format",t)},expression:"current.decode.hex_dump_option.format"}},[o("Radio",{attrs:{label:"twos"}},[e._v(e._s(e.$t("base64_hex_dump_format_twos")))]),o("Radio",{attrs:{label:"fours"}},[e._v(e._s(e.$t("base64_hex_dump_format_fours")))]),o("Radio",{attrs:{label:"eights"}},[e._v(e._s(e.$t("base64_hex_dump_format_eights")))]),o("Radio",{attrs:{label:"sixteens"}},[e._v(e._s(e.$t("base64_hex_dump_format_sixteens")))]),o("Radio",{attrs:{label:"none"}},[e._v(e._s(e.$t("base64_hex_dump_format_none")))])],1)],1),o("FormItem",{attrs:{label:e.$t("base64_hex_dump_caps")}},[o("RadioGroup",{model:{value:e.current.decode.hex_dump_option.caps,callback:function(t){e.$set(e.current.decode.hex_dump_option,"caps",t)},expression:"current.decode.hex_dump_option.caps"}},[o("Radio",{attrs:{label:"lower"}},[e._v(e._s(e.$t("base64_hex_dump_caps_lower")))]),o("Radio",{attrs:{label:"upper"}},[e._v(e._s(e.$t("base64_hex_dump_caps_upper")))])],1)],1),o("FormItem",{attrs:{label:e.$t("base64_hex_dump_width")}},[o("InputNumber",{attrs:{min:1},model:{value:e.current.decode.hex_dump_option.width,callback:function(t){e.$set(e.current.decode.hex_dump_option,"width",t)},expression:"current.decode.hex_dump_option.width"}})],1)]:e._e()],2)],1)],1)},n=[],i=o(16198),r=(o(35666),o(73210),o(74916),o(23123),o(26699),o(32023),o(41539),o(39714),o(4723),o(78783),o(33948),o(60285),o(41637),o(92222),o(52300)),s=o(39141),c=o(80983),d=o(626),l=o(30381),u=o.n(l),p=o(63486),h=o(22052),f=o(2398),_=o(54950),m=o(23085)["Buffer"],x={components:{updateFile:_.Z,heightResize:p.Z,disableMask:h.Z,autoHeightTextarea:f.Z},created:function(){this.$initToolData()},computed:{isEncodeUploadFile:function(){return"file"in this.encodeUploadFile},encodeOutput:function(){if(this.isEncodeUploadFile)return this.encodeUploadFile.base64;var e=this.current.encode.input.trim();return e?this.encode(e,{is_url_safe:this.current.encode.is_url_safe}):""},decodeOutput:function(){try{var e=this.decodeBase64Data;return e?this.isDecodeShowBinaryData?this.decodeBinaryData(m.from(e.buffer),this.current.decode.hex_dump_option):(new TextDecoder).decode(e):""}catch(t){return this.$t("base64_error",[t.message()])}},decodeBase64Data:function(){var e=this.current.decode.input.trim();return this.decode(this.isDecodeFile?e.split(",")[1]:e)},isDecodeFile:function(){var e=this.current.decode.input.trim();return 0===e.indexOf("data:")&&e.indexOf(",")>4},isDecodeShowBinaryData:function(){return this.isDecodeIncludeBinaryData&&this.isHexShowMode},isDecodeIncludeBinaryData:function(){return this.decodeBase64Data&&this.decodeBase64Data.includes(0)},isExportFile:function(){return this.isDecodeIncludeBinaryData||this.isDecodeFile},isHexShowMode:function(){return"hex"===this.current.decode.show_mode}},watch:{current:{handler:function(e){"encode"===e.operation&&!e.encode.input||"decode"===e.operation&&!e.decode.input||this.$saveToolData(e)},deep:!0}},methods:{handleUpload:function(e){var t=this;this.current.operation="encode";var o=new FileReader;o.readAsDataURL(e),o.onloadend=function(){t.encodeUploadFile={file:e,base64:o.result}}},encode:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.is_url_safe,a=void 0!==o&&o;return r.DS.encode(e,a)},decode:function(e){try{if(this.decodeError="",!e)return!1;if(!r.DS.isValid(e))throw"input error";return r.DS.toUint8Array(e)}catch(t){return this.decodeError=this.$t("base64_error",[t.toString()]).toString(),!1}},decodeBinaryData:function(e,t){return(0,s.hexy)(e,t)},exportFile:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var o,a,n,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isExportFile){t.next=2;break}return t.abrupt("return");case 2:if(o="",a="",!e.isDecodeFile){t.next=10;break}n=e.current.decode.input.trim().split(","),o=n[0].match(/:(.*?);/)[1],a=c.extension(o)?".".concat(c.extension(o)):"",t.next=14;break;case 10:return t.next=12,(0,d.fromBuffer)(e.decodeBase64Data);case 12:i=t.sent,i&&(o=i.mime,a=i.ext?".".concat(i.ext):"");case 14:r=window.URL.createObjectURL(new Blob([e.decodeBase64Data],{type:o})),s=document.createElement("a"),s.download="ctool-base64-decode-".concat(u()().unix()).concat(a),s.href=r,s.click(),s.remove(),window.URL.revokeObjectURL(r);case 21:case"end":return t.stop()}}),t)})))()},resize:function(e){this.height1=Math.min(160,Math.ceil(e/2)),this.height2=e-this.height1-10}},data:function(){return{current:{encode:{input:"",is_url_safe:!1},decode:{input:"",show_mode:"hex",hex_dump_option:{format:"twos",caps:"lower",width:16}},operation:"encode"},decodeSetting:!1,decodeError:"",encodeUploadFile:{},height1:100,height2:100}}},b=x,g=o(1001),v=(0,g.Z)(b,a,n,!1,null,null,null),w=v.exports},2398:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Input",{staticClass:"auto-height-textarea",style:e.style,attrs:{type:"textarea",placeholder:e.placeholder},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})},n=[],i=(o(9653),o(92222),o(69600),o(96486)),r=o.n(i),s={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var e=[];return this.height&&e.push("height:".concat(this.height).concat(r().isNumber(this.height)?"px":"")),e.join(";")}},watch:{textarea:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){e!==this.textarea&&(this.textarea=e)}},created:function(){this.textarea=this.value}},c=s,d=o(1001),l=(0,d.Z)(c,a,n,!1,null,null,null),u=l.exports},22052:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tool-disable-mask"},[o("div",[o("div",{staticStyle:{"line-height":"24px","word-break":"break-all","background-color":"#fff",padding:"5px 10px",margin:"0 10px"}},[e._t("default")],2),e.disableClose?e._e():o("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[o("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"md-close-circle",size:"30",color:"#FFF"},on:{click:e.close}})],1)])])},n=[],i={props:{disableClose:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")}}},r=i,s=o(1001),c=(0,s.Z)(r,a,n,!1,null,"57e112c2",null),d=c.exports},63486:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{style:"height:"+e.height},[e._t("default")],2)},n=[],i=o(62032),r=(o(9653),o(92222),o(57327),o(41539),o(26699),o(32023),o(34809));function s(e){var t=document.querySelector(e);if(null===t)return 0;var o=window.getComputedStyle(t),a=parseFloat(o["marginTop"])+parseFloat(o["marginBottom"]);return Math.ceil(t.offsetHeight+a)}var c={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var e,t=this,o=window.innerHeight,a=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],n=a.filter((function(e){return!t.remove.includes(e)})).concat(this.append),r=(0,i.Z)(n);try{for(r.s();!(e=r.n()).done;){var c=e.value;o-=s(c)}}catch(d){r.e(d)}finally{r.f()}this.reduce>0&&(o-=this.reduce),o>100&&(o-=5),this.ignore||(this.height=o+"px"),this.$emit("resize",o)}},destroyed:function(){window.removeEventListener(r.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(r.KU,this.reportWindowSize),this.resize()}},d=c,l=o(1001),u=(0,l.Z)(d,a,n,!1,null,null,null),p=u.exports},54950:function(e,t,o){"use strict";o.d(t,{Z:function(){return _}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Upload",{staticStyle:{display:"inline-block"},attrs:{action:"#","before-upload":e.handleUpload,format:e.format,showUploadList:!1}},[o("Button",{attrs:{shape:"circle",icon:"md-cloud-upload"}}),e.disablePaste?e._e():["file"===e.type?o("pasteClipboardFlie",{on:{"on-paste-file":e.handleUpload}}):e._e(),"image"===e.type?o("pasteClipboardFlie",{on:{"on-paste-image":e.handleUpload}}):e._e()]],2)},n=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"inline"}},[e._t("default")],2)},r=[],s={name:"pasteClipboardFlie",methods:{reader:function(e){if("clipboardData"in e){var t=e.clipboardData&&e.clipboardData.items,o=e.clipboardData.types||[];if(t&&t.length)for(var a=0;a<t.length;a++)if("Files"===o[a])return this.$emit("on-paste-file",t[a].getAsFile()),void(-1!==t[a].type.indexOf("image")&&this.$emit("on-paste-image",t[a].getAsFile()))}}},destroyed:function(){window.removeEventListener("paste",this.reader)},mounted:function(){window.addEventListener("paste",this.reader)}},c=s,d=o(1001),l=(0,d.Z)(c,i,r,!1,null,null,null),u=l.exports,p={components:{pasteClipboardFlie:u},props:{disablePaste:{type:Boolean,default:!1},type:{type:String,default:"file"}},computed:{format:function(){return"image"===this.type?["jpg","jpeg","png"]:[]}},methods:{handleUpload:function(e){this.$emit("success",e)}}},h=p,f=(0,d.Z)(h,a,n,!1,null,null,null),_=f.exports},52361:function(){},94616:function(){}}]);