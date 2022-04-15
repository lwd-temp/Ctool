(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[7840],{2398:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},r=[],s=(n(9653),n(92222),n(69600),n(96486)),i=n.n(s),a={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(i().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=a,l=n(1001),u=(0,l.Z)(c,o,r,!1,null,null,null),h=u.exports},63486:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"height:"+t.height},[t._t("default")],2)},r=[],s=n(62032),i=(n(9653),n(92222),n(57327),n(41539),n(26699),n(32023),n(34809));function a(t){var e=document.querySelector(t);if(null===e)return 0;var n=window.getComputedStyle(e),o=parseFloat(n["marginTop"])+parseFloat(n["marginBottom"]);return Math.ceil(e.offsetHeight+o)}var c={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,n=window.innerHeight,o=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],r=o.filter((function(t){return!e.remove.includes(t)})).concat(this.append),i=(0,s.Z)(r);try{for(i.s();!(t=i.n()).done;){var c=t.value;n-=a(c)}}catch(l){i.e(l)}finally{i.f()}this.reduce>0&&(n-=this.reduce),n>100&&(n-=5),this.ignore||(this.height=n+"px"),this.$emit("resize",n)}},destroyed:function(){window.removeEventListener(i.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(i.KU,this.reportWindowSize),this.resize()}},l=c,u=n(1001),h=(0,u.Z)(l,o,r,!1,null,null,null),p=h.exports},97840:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Input",{staticClass:"page-option-block",staticStyle:{"margin-bottom":"10px"},model:{value:t.current.url,callback:function(e){t.$set(t.current,"url",e)},expression:"current.url"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("Badge",{staticStyle:{"margin-left":"10px"},attrs:{status:t.status?"success":"error"}})],1),t.status?n("Button",{attrs:{slot:"append"},on:{click:function(e){return t.handle()}},slot:"append"},[t._v(t._s(t.$t("websocket_close")))]):n("Button",{attrs:{slot:"append"},on:{click:function(e){return t.handle()}},slot:"append"},[t._v(t._s(t.$t("websocket_connect")))])],1),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"10"}},[n("input-block",{attrs:{top:"7px",right:"7px"}},[n("heightResize",{attrs:{append:[".page-option-block"]}},[n("autoHeightTextarea",{attrs:{placeholder:t.$t("websocket_send_content")},model:{value:t.sendContent,callback:function(e){t.sendContent=e},expression:"sendContent"}})],1),n("template",{slot:"extra"},[n("Button",{attrs:{disabled:!t.status,type:"primary",size:"small"},on:{click:t.send}},[t._v(t._s(t.$t("websocket_send"))+" ")])],1)],2)],1),n("Col",{attrs:{span:"14"}},[n("input-block",{attrs:{top:"7px",right:"7px",text:t.$t("websocket_send")},on:{"on-default-right-bottom-click":t.send}},[n("heightResize",{attrs:{append:[".page-option-block"]},on:{resize:t.logHeightSet}},[n("Card",[n("div",{staticClass:"lists-block",style:"height: "+t.logHeight+"px;overflow: hidden;overflow-y:auto;",attrs:{id:"log"}},[0===t.lists.length?n("div",{staticStyle:{"font-size":"14px",color:"#999999"}},[t._v(" "+t._s(t.$t("websocket_log_content"))+" ")]):t._l(t.lists,(function(e,o){return n("div",{key:o,staticClass:"item-wrap"},["send"===e.type?n("div",{staticClass:"item",staticStyle:{color:"green"}},[t._v(" "+t._s(t.$t("websocket_you"))+" "+t._s(e.time)+" ")]):"accept"===e.type?n("div",{staticClass:"item",staticStyle:{color:"blue"}},[t._v(" "+t._s(t.$t("websocket_server"))+" "+t._s(e.time)+" ")]):n("div",{staticClass:"item"},[t._v(" "+t._s(e.time)+" ")]),n("div",{staticClass:"item"},[n("Icon",{attrs:{type:"md-copy"},on:{click:function(n){return t.$copy(e.content)}}}),n("pre",{staticClass:"item-content"},[t._v(t._s(e.content))])],1)])}))],2)])],1),n("template",{slot:"extra"},[n("Button",{staticStyle:{"margin-right":"5px"},attrs:{size:"small",type:"primary"},on:{click:function(e){return t.copyAll()}}},[t._v(" "+t._s(t.$t("websocket_copy"))+" ")]),n("Button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.clear()}}},[t._v(t._s(t.$t("websocket_clear")))])],1)],2)],1)],1)],1)},r=[],s=(n(73210),n(41539),n(39714),n(38862),n(21703),n(30381)),i=n.n(s),a=n(63486),c=n(2398),l={components:{heightResize:a.Z,autoHeightTextarea:c.Z},created:function(){this.$initToolData()},methods:{handle:function(){return this.status?this.close():this.connect()},connect:function(){var t=this;if(this.current.url.trim()){this.$saveToolData(this.current),this.log(this.$t("websocket_connect_start",[this.current.url]).toString());var e=new WebSocket(this.current.url);e.onopen=function(e){t.onOpen(e)},e.onclose=function(e){t.onClose(e)},e.onmessage=function(e){t.onMessage(e)},e.onerror=function(e){t.onError(e)},this.ws=e}},close:function(){this.log(this.$t("websocket_close_start",[this.current.url]).toString()),this.ws.close()},clear:function(){this.lists=[]},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";this.lists.push({content:t,type:e,time:i()().format("YYYY-MM-DD HH:mm:ss")}),this.$nextTick((function(){var t=document.getElementById("log");t.scrollTop=t.scrollHeight}))},copyAll:function(){this.$copy(JSON.stringify(this.lists))},send:function(){try{if(!this.status)throw new Error(this.$t("websocket_error_connect").toString());if(!this.sendContent)throw new Error(this.$t("websocket_error_content").toString());this.ws.send(this.sendContent),this.log(this.sendContent,"send")}catch(t){this.log(this.$t("websocket_error",[t.message]).toString())}},onOpen:function(){this.status=!0,this.log(this.$t("websocket_connect_ok").toString())},onClose:function(){this.status=!1,this.log(this.$t("websocket_close_ok").toString())},onMessage:function(t){this.log(t.data,"accept")},onError:function(t){this.log(this.$t("websocket_error",[t.data()]).toString())},logHeightSet:function(t){this.logHeight=Math.max(t-34,100)}},data:function(){return{current:{url:"wss://echo.websocket.events"},status:!1,wx:null,sendContent:"",lists:[],logHeight:100}}},u=l,h=n(1001),p=(0,h.Z)(u,o,r,!1,null,"253e23a0",null),f=p.exports},50863:function(t,e,n){var o=n(1702);t.exports=o(1..valueOf)},92222:function(t,e,n){"use strict";var o=n(82109),r=n(17854),s=n(47293),i=n(43157),a=n(70111),c=n(47908),l=n(26244),u=n(86135),h=n(65417),p=n(81194),f=n(5112),d=n(7392),g=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",_=r.TypeError,y=d>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=p("concat"),w=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)},k=!y||!b;o({target:"Array",proto:!0,forced:k},{concat:function(t){var e,n,o,r,s,i=c(this),a=h(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?i:arguments[e],w(s)){if(r=l(s),p+r>m)throw _(v);for(n=0;n<r;n++,p++)n in s&&u(a,p,s[n])}else{if(p>=m)throw _(v);u(a,p++,s)}return a.length=p,a}})},9653:function(t,e,n){"use strict";var o=n(19781),r=n(17854),s=n(1702),i=n(54705),a=n(31320),c=n(92597),l=n(79587),u=n(47976),h=n(52190),p=n(57593),f=n(47293),d=n(8006).f,g=n(31236).f,m=n(3070).f,v=n(50863),_=n(53111).trim,y="Number",b=r[y],w=b.prototype,k=r.TypeError,x=s("".slice),S=s("".charCodeAt),$=function(t){var e=p(t,"number");return"bigint"==typeof e?e:C(e)},C=function(t){var e,n,o,r,s,i,a,c,l=p(t,"number");if(h(l))throw k("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=_(l),e=S(l,0),43===e||45===e){if(n=S(l,2),88===n||120===n)return NaN}else if(48===e){switch(S(l,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+l}for(s=x(l,2),i=s.length,a=0;a<i;a++)if(c=S(s,a),c<48||c>r)return NaN;return parseInt(s,o)}return+l};if(i(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,N=function(t){var e=arguments.length<1?0:b($(t)),n=this;return u(w,n)&&f((function(){v(n)}))?l(Object(e),n,N):e},I=o?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;I.length>z;z++)c(b,E=I[z])&&!c(N,E)&&m(N,E,g(b,E));N.prototype=w,w.constructor=N,a(r,y,N)}}}]);