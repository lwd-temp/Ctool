import{L as S,K as $,ae as k}from"./tool-be31916e.js";var D={exports:{}};(function(c,d){(function(p,u){c.exports=u()})($,function(){var p="minute",u=/[+-]\d\d(?::?\d\d)?/g,y=/([+-]|\d\d)/g;return function(b,C,s){var i=C.prototype;s.utc=function(a){var e={date:a,utc:!0,args:arguments};return new C(e)},i.utc=function(a){var e=s(this.toDate(),{locale:this.$L,utc:!0});return a?e.add(this.utcOffset(),p):e},i.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var E=i.parse;i.parse=function(a){a.utc&&(this.$u=!0),this.$utils().u(a.$offset)||(this.$offset=a.$offset),E.call(this,a)};var g=i.init;i.init=function(){if(this.$u){var a=this.$d;this.$y=a.getUTCFullYear(),this.$M=a.getUTCMonth(),this.$D=a.getUTCDate(),this.$W=a.getUTCDay(),this.$H=a.getUTCHours(),this.$m=a.getUTCMinutes(),this.$s=a.getUTCSeconds(),this.$ms=a.getUTCMilliseconds()}else g.call(this)};var P=i.utcOffset;i.utcOffset=function(a,e){var _=this.$utils().u;if(_(a))return this.$u?0:_(this.$offset)?P.call(this):this.$offset;if(typeof a=="string"&&(a=function(z){z===void 0&&(z="");var l=z.match(u);if(!l)return null;var o=(""+l[0]).match(y)||["-",0,0],f=o[0],A=60*+o[1]+ +o[2];return A===0?0:f==="+"?A:-A}(a),a===null))return this;var m=Math.abs(a)<=16?60*a:a,h=this;if(e)return h.$offset=m,h.$u=a===0,h;if(a!==0){var N=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(h=this.local().add(m+N,p)).$offset=m,h.$x.$localOffset=N}else h=this.utc();return h};var n=i.format;i.format=function(a){var e=a||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return n.call(this,e)},i.valueOf=function(){var a=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*a},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var t=i.toDate;i.toDate=function(a){return a==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():t.call(this)};var r=i.diff;i.diff=function(a,e,_){if(a&&this.$u===a.$u)return r.call(this,a,e,_);var m=this.local(),h=s(a).local();return r.call(m,h,e,_)}}})})(D);var B=D.exports;const I=S(B);var T={exports:{}};(function(c,d){(function(p,u){c.exports=u()})($,function(){var p={year:0,month:1,day:2,hour:3,minute:4,second:5},u={};return function(y,b,C){var s,i=function(n,t,r){r===void 0&&(r={});var a=new Date(n),e=function(_,m){m===void 0&&(m={});var h=m.timeZoneName||"short",N=_+"|"+h,z=u[N];return z||(z=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:_,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:h}),u[N]=z),z}(t,r);return e.formatToParts(a)},E=function(n,t){for(var r=i(n,t),a=[],e=0;e<r.length;e+=1){var _=r[e],m=_.type,h=_.value,N=p[m];N>=0&&(a[N]=parseInt(h,10))}var z=a[3],l=z===24?0:z,o=a[0]+"-"+a[1]+"-"+a[2]+" "+l+":"+a[4]+":"+a[5]+":000",f=+n;return(C.utc(o).valueOf()-(f-=f%1e3))/6e4},g=b.prototype;g.tz=function(n,t){n===void 0&&(n=s);var r=this.utcOffset(),a=this.toDate(),e=a.toLocaleString("en-US",{timeZone:n}),_=Math.round((a-new Date(e))/1e3/60),m=C(e).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-_,!0);if(t){var h=m.utcOffset();m=m.add(r-h,"minute")}return m.$x.$timezone=n,m},g.offsetName=function(n){var t=this.$x.$timezone||C.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:n}).find(function(a){return a.type.toLowerCase()==="timezonename"});return r&&r.value};var P=g.startOf;g.startOf=function(n,t){if(!this.$x||!this.$x.$timezone)return P.call(this,n,t);var r=C(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return P.call(r,n,t).tz(this.$x.$timezone,!0)},C.tz=function(n,t,r){var a=r&&t,e=r||t||s,_=E(+C(),e);if(typeof n!="string")return C(n).tz(e);var m=function(l,o,f){var A=l-60*o*1e3,v=E(A,f);if(o===v)return[A,o];var M=E(A-=60*(v-o)*1e3,f);return v===M?[A,v]:[l-60*Math.min(v,M)*1e3,Math.max(v,M)]}(C.utc(n,a).valueOf(),_,e),h=m[0],N=m[1],z=C(h).utcOffset(N);return z.$x.$timezone=e,z},C.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},C.tz.setDefault=function(n){s=n}}})})(T);var O=T.exports;const x=S(O);k.extend(I);k.extend(x);const L=[{name:"Africa/Abidjan",zh_CN:"阿比让"},{name:"Africa/Accra",zh_CN:"阿克拉"},{name:"Africa/Addis_Ababa",zh_CN:"亚的斯亚贝巴"},{name:"Africa/Algiers",zh_CN:"阿尔及尔"},{name:"Africa/Asmera",zh_CN:"阿斯马拉"},{name:"Africa/Bamako",zh_CN:"巴马科"},{name:"Africa/Bangui",zh_CN:"班吉"},{name:"Africa/Banjul",zh_CN:"班珠尔"},{name:"Africa/Bissau",zh_CN:"比绍"},{name:"Africa/Blantyre",zh_CN:"布兰太尔"},{name:"Africa/Brazzaville",zh_CN:"布拉柴维尔"},{name:"Africa/Bujumbura",zh_CN:"布琼布拉"},{name:"Africa/Cairo",zh_CN:"开罗"},{name:"Africa/Casablanca",zh_CN:"卡萨布兰卡"},{name:"Africa/Ceuta",zh_CN:"休达"},{name:"Africa/Conakry",zh_CN:"科纳克里"},{name:"Africa/Dakar",zh_CN:"达喀尔"},{name:"Africa/Dar_es_Salaam",zh_CN:"达累斯萨拉姆"},{name:"Africa/Djibouti",zh_CN:"吉布提"},{name:"Africa/Douala",zh_CN:"杜阿拉"},{name:"Africa/El_Aaiun",zh_CN:"阿尤恩"},{name:"Africa/Freetown",zh_CN:"弗里敦"},{name:"Africa/Gaborone",zh_CN:"哈博罗内"},{name:"Africa/Harare",zh_CN:"哈拉雷"},{name:"Africa/Johannesburg",zh_CN:"约翰内斯堡"},{name:"Africa/Juba",zh_CN:"朱巴"},{name:"Africa/Kampala",zh_CN:"坎帕拉"},{name:"Africa/Khartoum",zh_CN:"喀土穆"},{name:"Africa/Kigali",zh_CN:"基加利"},{name:"Africa/Kinshasa",zh_CN:"金沙萨"},{name:"Africa/Lagos",zh_CN:"拉各斯"},{name:"Africa/Libreville",zh_CN:"利伯维尔"},{name:"Africa/Lome",zh_CN:"洛美"},{name:"Africa/Luanda",zh_CN:"罗安达"},{name:"Africa/Lubumbashi",zh_CN:"卢本巴希"},{name:"Africa/Lusaka",zh_CN:"卢萨卡"},{name:"Africa/Malabo",zh_CN:"马拉博"},{name:"Africa/Maputo",zh_CN:"马普托"},{name:"Africa/Maseru",zh_CN:"马塞卢"},{name:"Africa/Mbabane",zh_CN:"姆巴巴纳"},{name:"Africa/Mogadishu",zh_CN:"摩加迪沙"},{name:"Africa/Monrovia",zh_CN:"蒙罗维亚"},{name:"Africa/Nairobi",zh_CN:"内罗毕"},{name:"Africa/Ndjamena",zh_CN:"恩贾梅纳"},{name:"Africa/Niamey",zh_CN:"尼亚美"},{name:"Africa/Nouakchott",zh_CN:"努瓦克肖特"},{name:"Africa/Ouagadougou",zh_CN:"瓦加杜古"},{name:"Africa/Porto-Novo",zh_CN:"波多诺伏"},{name:"Africa/Sao_Tome",zh_CN:"圣多美"},{name:"Africa/Tripoli",zh_CN:"的黎波里"},{name:"Africa/Tunis",zh_CN:"突尼斯"},{name:"Africa/Windhoek",zh_CN:"温得和克"},{name:"America/Adak",zh_CN:"埃达克"},{name:"America/Anchorage",zh_CN:"安克雷奇"},{name:"America/Anguilla",zh_CN:"安圭拉"},{name:"America/Antigua",zh_CN:"安提瓜"},{name:"America/Araguaina",zh_CN:"阿拉瓜伊纳"},{name:"America/Argentina/La_Rioja",zh_CN:"拉里奥哈"},{name:"America/Argentina/Rio_Gallegos",zh_CN:"里奥加耶戈斯"},{name:"America/Argentina/Salta",zh_CN:"萨尔塔"},{name:"America/Argentina/San_Juan",zh_CN:"圣胡安"},{name:"America/Argentina/San_Luis",zh_CN:"圣路易斯"},{name:"America/Argentina/Tucuman",zh_CN:"图库曼"},{name:"America/Argentina/Ushuaia",zh_CN:"乌斯怀亚"},{name:"America/Aruba",zh_CN:"阿鲁巴"},{name:"America/Asuncion",zh_CN:"亚松森"},{name:"America/Bahia",zh_CN:"巴伊亚"},{name:"America/Bahia_Banderas",zh_CN:"巴伊亚班德拉斯"},{name:"America/Barbados",zh_CN:"巴巴多斯"},{name:"America/Belem",zh_CN:"贝伦"},{name:"America/Belize",zh_CN:"伯利兹"},{name:"America/Blanc-Sablon",zh_CN:"布兰克萨布隆"},{name:"America/Boa_Vista",zh_CN:"博阿维斯塔"},{name:"America/Bogota",zh_CN:"波哥大"},{name:"America/Boise",zh_CN:"博伊西"},{name:"America/Buenos_Aires",zh_CN:"布宜诺斯艾利斯"},{name:"America/Cambridge_Bay",zh_CN:"剑桥湾"},{name:"America/Campo_Grande",zh_CN:"大坎普"},{name:"America/Cancun",zh_CN:"坎昆"},{name:"America/Caracas",zh_CN:"加拉加斯"},{name:"America/Catamarca",zh_CN:"卡塔马卡"},{name:"America/Cayenne",zh_CN:"卡宴"},{name:"America/Cayman",zh_CN:"开曼"},{name:"America/Chicago",zh_CN:"芝加哥"},{name:"America/Chihuahua",zh_CN:"奇瓦瓦"},{name:"America/Coral_Harbour",zh_CN:"阿蒂科肯"},{name:"America/Cordoba",zh_CN:"科尔多瓦"},{name:"America/Costa_Rica",zh_CN:"哥斯达黎加"},{name:"America/Creston",zh_CN:"克雷斯顿"},{name:"America/Cuiaba",zh_CN:"库亚巴"},{name:"America/Curacao",zh_CN:"库拉索"},{name:"America/Danmarkshavn",zh_CN:"丹马沙文"},{name:"America/Dawson",zh_CN:"道森"},{name:"America/Dawson_Creek",zh_CN:"道森克里克"},{name:"America/Denver",zh_CN:"丹佛"},{name:"America/Detroit",zh_CN:"底特律"},{name:"America/Dominica",zh_CN:"多米尼加"},{name:"America/Edmonton",zh_CN:"埃德蒙顿"},{name:"America/Eirunepe",zh_CN:"依伦尼贝"},{name:"America/El_Salvador",zh_CN:"萨尔瓦多"},{name:"America/Fort_Nelson",zh_CN:"纳尔逊堡"},{name:"America/Fortaleza",zh_CN:"福塔雷萨"},{name:"America/Glace_Bay",zh_CN:"格莱斯贝"},{name:"America/Godthab",zh_CN:"努克"},{name:"America/Goose_Bay",zh_CN:"古斯湾"},{name:"America/Grand_Turk",zh_CN:"大特克"},{name:"America/Grenada",zh_CN:"格林纳达"},{name:"America/Guadeloupe",zh_CN:"瓜德罗普"},{name:"America/Guatemala",zh_CN:"危地马拉"},{name:"America/Guayaquil",zh_CN:"瓜亚基尔"},{name:"America/Guyana",zh_CN:"圭亚那"},{name:"America/Halifax",zh_CN:"哈利法克斯"},{name:"America/Havana",zh_CN:"哈瓦那"},{name:"America/Hermosillo",zh_CN:"埃莫西约"},{name:"America/Indiana/Knox",zh_CN:"印第安纳州诺克斯"},{name:"America/Indiana/Marengo",zh_CN:"印第安纳州马伦戈"},{name:"America/Indiana/Petersburg",zh_CN:"印第安纳州彼得斯堡"},{name:"America/Indiana/Tell_City",zh_CN:"印第安纳州特尔城"},{name:"America/Indiana/Vevay",zh_CN:"印第安纳州维维市"},{name:"America/Indiana/Vincennes",zh_CN:"印第安纳州温森斯"},{name:"America/Indiana/Winamac",zh_CN:"印第安纳州威纳马克"},{name:"America/Indianapolis",zh_CN:"印第安纳波利斯"},{name:"America/Inuvik",zh_CN:"伊努维克"},{name:"America/Iqaluit",zh_CN:"伊魁特"},{name:"America/Jamaica",zh_CN:"牙买加"},{name:"America/Jujuy",zh_CN:"胡胡伊"},{name:"America/Juneau",zh_CN:"朱诺"},{name:"America/Kentucky/Monticello",zh_CN:"肯塔基州蒙蒂塞洛"},{name:"America/Kralendijk",zh_CN:"克拉伦代克"},{name:"America/La_Paz",zh_CN:"拉巴斯"},{name:"America/Lima",zh_CN:"利马"},{name:"America/Los_Angeles",zh_CN:"洛杉矶"},{name:"America/Louisville",zh_CN:"路易斯维尔"},{name:"America/Lower_Princes",zh_CN:"下太子区"},{name:"America/Maceio",zh_CN:"马塞约"},{name:"America/Managua",zh_CN:"马那瓜"},{name:"America/Manaus",zh_CN:"马瑙斯"},{name:"America/Marigot",zh_CN:"马里戈特"},{name:"America/Martinique",zh_CN:"马提尼克"},{name:"America/Matamoros",zh_CN:"马塔莫罗斯"},{name:"America/Mazatlan",zh_CN:"马萨特兰"},{name:"America/Mendoza",zh_CN:"门多萨"},{name:"America/Menominee",zh_CN:"梅诺米尼"},{name:"America/Merida",zh_CN:"梅里达"},{name:"America/Metlakatla",zh_CN:"梅特拉卡特拉"},{name:"America/Mexico_City",zh_CN:"墨西哥城"},{name:"America/Miquelon",zh_CN:"密克隆"},{name:"America/Moncton",zh_CN:"蒙克顿"},{name:"America/Monterrey",zh_CN:"蒙特雷"},{name:"America/Montevideo",zh_CN:"蒙得维的亚"},{name:"America/Montserrat",zh_CN:"蒙特塞拉特"},{name:"America/Nassau",zh_CN:"拿骚"},{name:"America/New_York",zh_CN:"纽约"},{name:"America/Nipigon",zh_CN:"尼皮贡"},{name:"America/Nome",zh_CN:"诺姆"},{name:"America/Noronha",zh_CN:"洛罗尼亚"},{name:"America/North_Dakota/Beulah",zh_CN:"北达科他州比尤拉"},{name:"America/North_Dakota/Center",zh_CN:"北达科他州申特"},{name:"America/North_Dakota/New_Salem",zh_CN:"北达科他州新塞勒姆"},{name:"America/Ojinaga",zh_CN:"奥希纳加"},{name:"America/Panama",zh_CN:"巴拿马"},{name:"America/Pangnirtung",zh_CN:"旁涅唐"},{name:"America/Paramaribo",zh_CN:"帕拉马里博"},{name:"America/Phoenix",zh_CN:"凤凰城"},{name:"America/Port-au-Prince",zh_CN:"太子港"},{name:"America/Port_of_Spain",zh_CN:"西班牙港"},{name:"America/Porto_Velho",zh_CN:"波多韦柳"},{name:"America/Puerto_Rico",zh_CN:"波多黎各"},{name:"America/Punta_Arenas",zh_CN:"蓬塔阿雷纳斯"},{name:"America/Rainy_River",zh_CN:"雷尼河"},{name:"America/Rankin_Inlet",zh_CN:"兰今湾"},{name:"America/Recife",zh_CN:"累西腓"},{name:"America/Regina",zh_CN:"里贾纳"},{name:"America/Resolute",zh_CN:"雷索卢特"},{name:"America/Rio_Branco",zh_CN:"里奥布郎库"},{name:"America/Santa_Isabel",zh_CN:"圣伊萨贝尔"},{name:"America/Santarem",zh_CN:"圣塔伦"},{name:"America/Santiago",zh_CN:"圣地亚哥"},{name:"America/Santo_Domingo",zh_CN:"圣多明各"},{name:"America/Sao_Paulo",zh_CN:"圣保罗"},{name:"America/Scoresbysund",zh_CN:"斯科列斯比桑德"},{name:"America/Sitka",zh_CN:"锡特卡"},{name:"America/St_Barthelemy",zh_CN:"圣巴泰勒米岛"},{name:"America/St_Johns",zh_CN:"圣约翰斯"},{name:"America/St_Kitts",zh_CN:"圣基茨"},{name:"America/St_Lucia",zh_CN:"圣卢西亚"},{name:"America/St_Thomas",zh_CN:"圣托马斯"},{name:"America/St_Vincent",zh_CN:"圣文森特"},{name:"America/Swift_Current",zh_CN:"斯威夫特卡伦特"},{name:"America/Tegucigalpa",zh_CN:"特古西加尔巴"},{name:"America/Thule",zh_CN:"图勒"},{name:"America/Thunder_Bay",zh_CN:"桑德贝"},{name:"America/Tijuana",zh_CN:"蒂华纳"},{name:"America/Toronto",zh_CN:"多伦多"},{name:"America/Tortola",zh_CN:"托尔托拉"},{name:"America/Vancouver",zh_CN:"温哥华"},{name:"America/Whitehorse",zh_CN:"怀特霍斯"},{name:"America/Winnipeg",zh_CN:"温尼伯"},{name:"America/Yakutat",zh_CN:"亚库塔特"},{name:"America/Yellowknife",zh_CN:"耶洛奈夫"},{name:"Antarctica/Casey",zh_CN:"卡塞"},{name:"Antarctica/Davis",zh_CN:"戴维斯"},{name:"Antarctica/DumontDUrville",zh_CN:"迪蒙迪尔维尔"},{name:"Antarctica/Macquarie",zh_CN:"麦格理"},{name:"Antarctica/Mawson",zh_CN:"莫森"},{name:"Antarctica/McMurdo",zh_CN:"麦克默多"},{name:"Antarctica/Palmer",zh_CN:"帕默尔"},{name:"Antarctica/Rothera",zh_CN:"罗瑟拉"},{name:"Antarctica/Syowa",zh_CN:"昭和"},{name:"Antarctica/Troll",zh_CN:"特罗尔"},{name:"Antarctica/Vostok",zh_CN:"沃斯托克"},{name:"Arctic/Longyearbyen",zh_CN:"朗伊尔城"},{name:"Asia/Aden",zh_CN:"亚丁"},{name:"Asia/Almaty",zh_CN:"阿拉木图"},{name:"Asia/Amman",zh_CN:"安曼"},{name:"Asia/Anadyr",zh_CN:"阿纳德尔"},{name:"Asia/Aqtau",zh_CN:"阿克套"},{name:"Asia/Aqtobe",zh_CN:"阿克托别"},{name:"Asia/Ashgabat",zh_CN:"阿什哈巴德"},{name:"Asia/Atyrau",zh_CN:"阿特劳"},{name:"Asia/Baghdad",zh_CN:"巴格达"},{name:"Asia/Bahrain",zh_CN:"巴林"},{name:"Asia/Baku",zh_CN:"巴库"},{name:"Asia/Bangkok",zh_CN:"曼谷"},{name:"Asia/Barnaul",zh_CN:"巴尔瑙尔"},{name:"Asia/Beirut",zh_CN:"贝鲁特"},{name:"Asia/Bishkek",zh_CN:"比什凯克"},{name:"Asia/Brunei",zh_CN:"文莱"},{name:"Asia/Calcutta",zh_CN:"加尔各答"},{name:"Asia/Chita",zh_CN:"赤塔"},{name:"Asia/Choibalsan",zh_CN:"乔巴山"},{name:"Asia/Colombo",zh_CN:"科伦坡"},{name:"Asia/Damascus",zh_CN:"大马士革"},{name:"Asia/Dhaka",zh_CN:"达卡"},{name:"Asia/Dili",zh_CN:"帝力"},{name:"Asia/Dubai",zh_CN:"迪拜"},{name:"Asia/Dushanbe",zh_CN:"杜尚别"},{name:"Asia/Famagusta",zh_CN:"法马古斯塔"},{name:"Asia/Gaza",zh_CN:"加沙"},{name:"Asia/Hebron",zh_CN:"希伯伦"},{name:"Asia/Hong_Kong",zh_CN:"香港"},{name:"Asia/Hovd",zh_CN:"科布多"},{name:"Asia/Irkutsk",zh_CN:"伊尔库茨克"},{name:"Asia/Jakarta",zh_CN:"雅加达"},{name:"Asia/Jayapura",zh_CN:"查亚普拉"},{name:"Asia/Jerusalem",zh_CN:"耶路撒冷"},{name:"Asia/Kabul",zh_CN:"喀布尔"},{name:"Asia/Kamchatka",zh_CN:"堪察加"},{name:"Asia/Karachi",zh_CN:"卡拉奇"},{name:"Asia/Katmandu",zh_CN:"加德满都"},{name:"Asia/Khandyga",zh_CN:"汉德加"},{name:"Asia/Krasnoyarsk",zh_CN:"克拉斯诺亚尔斯克"},{name:"Asia/Kuala_Lumpur",zh_CN:"吉隆坡"},{name:"Asia/Kuching",zh_CN:"古晋"},{name:"Asia/Kuwait",zh_CN:"科威特"},{name:"Asia/Macau",zh_CN:"澳门"},{name:"Asia/Magadan",zh_CN:"马加丹"},{name:"Asia/Makassar",zh_CN:"望加锡"},{name:"Asia/Manila",zh_CN:"马尼拉"},{name:"Asia/Muscat",zh_CN:"马斯喀特"},{name:"Asia/Nicosia",zh_CN:"尼科西亚"},{name:"Asia/Novokuznetsk",zh_CN:"新库兹涅茨克"},{name:"Asia/Novosibirsk",zh_CN:"诺沃西比尔斯克"},{name:"Asia/Omsk",zh_CN:"鄂木斯克"},{name:"Asia/Oral",zh_CN:"乌拉尔"},{name:"Asia/Phnom_Penh",zh_CN:"金边"},{name:"Asia/Pontianak",zh_CN:"坤甸"},{name:"Asia/Pyongyang",zh_CN:"平壤"},{name:"Asia/Qatar",zh_CN:"卡塔尔"},{name:"Asia/Qyzylorda",zh_CN:"克孜洛尔达"},{name:"Asia/Rangoon",zh_CN:"仰光"},{name:"Asia/Riyadh",zh_CN:"利雅得"},{name:"Asia/Saigon",zh_CN:"胡志明市"},{name:"Asia/Sakhalin",zh_CN:"萨哈林"},{name:"Asia/Samarkand",zh_CN:"撒马尔罕"},{name:"Asia/Seoul",zh_CN:"首尔"},{name:"Asia/Shanghai",zh_CN:"上海"},{name:"Asia/Singapore",zh_CN:"新加坡"},{name:"Asia/Srednekolymsk",zh_CN:"中科雷姆斯克"},{name:"Asia/Taipei",zh_CN:"台北"},{name:"Asia/Tashkent",zh_CN:"塔什干"},{name:"Asia/Tbilisi",zh_CN:"第比利斯"},{name:"Asia/Tehran",zh_CN:"德黑兰"},{name:"Asia/Thimphu",zh_CN:"廷布"},{name:"Asia/Tokyo",zh_CN:"东京"},{name:"Asia/Tomsk",zh_CN:"托木斯克"},{name:"Asia/Ulaanbaatar",zh_CN:"乌兰巴托"},{name:"Asia/Urumqi",zh_CN:"乌鲁木齐"},{name:"Asia/Ust-Nera",zh_CN:"乌斯内拉"},{name:"Asia/Vientiane",zh_CN:"万象"},{name:"Asia/Vladivostok",zh_CN:"符拉迪沃斯托克"},{name:"Asia/Yakutsk",zh_CN:"雅库茨克"},{name:"Asia/Yekaterinburg",zh_CN:"叶卡捷琳堡"},{name:"Asia/Yerevan",zh_CN:"埃里温"},{name:"Atlantic/Azores",zh_CN:"亚速尔群岛"},{name:"Atlantic/Bermuda",zh_CN:"百慕大"},{name:"Atlantic/Canary",zh_CN:"加那利"},{name:"Atlantic/Cape_Verde",zh_CN:"佛得角"},{name:"Atlantic/Faeroe",zh_CN:"法罗"},{name:"Atlantic/Madeira",zh_CN:"马德拉"},{name:"Atlantic/Reykjavik",zh_CN:"雷克雅未克"},{name:"Atlantic/South_Georgia",zh_CN:"南乔治亚"},{name:"Atlantic/St_Helena",zh_CN:"圣赫勒拿"},{name:"Atlantic/Stanley",zh_CN:"斯坦利"},{name:"Australia/Adelaide",zh_CN:"阿德莱德"},{name:"Australia/Brisbane",zh_CN:"布里斯班"},{name:"Australia/Broken_Hill",zh_CN:"布罗肯希尔"},{name:"Australia/Currie",zh_CN:"库利"},{name:"Australia/Darwin",zh_CN:"达尔文"},{name:"Australia/Eucla",zh_CN:"尤克拉"},{name:"Australia/Hobart",zh_CN:"霍巴特"},{name:"Australia/Lindeman",zh_CN:"林德曼"},{name:"Australia/Lord_Howe",zh_CN:"豪勋爵"},{name:"Australia/Melbourne",zh_CN:"墨尔本"},{name:"Australia/Perth",zh_CN:"珀斯"},{name:"Australia/Sydney",zh_CN:"悉尼"},{name:"Etc/UTC",zh_CN:"协调世界时UTC"},{name:"Europe/Amsterdam",zh_CN:"阿姆斯特丹"},{name:"Europe/Andorra",zh_CN:"安道尔"},{name:"Europe/Astrakhan",zh_CN:"阿斯特拉罕"},{name:"Europe/Athens",zh_CN:"雅典"},{name:"Europe/Belgrade",zh_CN:"贝尔格莱德"},{name:"Europe/Berlin",zh_CN:"柏林"},{name:"Europe/Bratislava",zh_CN:"布拉迪斯拉发"},{name:"Europe/Brussels",zh_CN:"布鲁塞尔"},{name:"Europe/Bucharest",zh_CN:"布加勒斯特"},{name:"Europe/Budapest",zh_CN:"布达佩斯"},{name:"Europe/Busingen",zh_CN:"布辛根"},{name:"Europe/Chisinau",zh_CN:"基希讷乌"},{name:"Europe/Copenhagen",zh_CN:"哥本哈根"},{name:"Europe/Dublin",zh_CN:"都柏林"},{name:"Europe/Gibraltar",zh_CN:"直布罗陀"},{name:"Europe/Guernsey",zh_CN:"根西岛"},{name:"Europe/Helsinki",zh_CN:"赫尔辛基"},{name:"Europe/Isle_of_Man",zh_CN:"曼岛"},{name:"Europe/Istanbul",zh_CN:"伊斯坦布尔"},{name:"Europe/Jersey",zh_CN:"泽西岛"},{name:"Europe/Kaliningrad",zh_CN:"加里宁格勒"},{name:"Europe/Kiev",zh_CN:"基辅"},{name:"Europe/Kirov",zh_CN:"基洛夫"},{name:"Europe/Lisbon",zh_CN:"里斯本"},{name:"Europe/Ljubljana",zh_CN:"卢布尔雅那"},{name:"Europe/London",zh_CN:"伦敦"},{name:"Europe/Luxembourg",zh_CN:"卢森堡"},{name:"Europe/Madrid",zh_CN:"马德里"},{name:"Europe/Malta",zh_CN:"马耳他"},{name:"Europe/Mariehamn",zh_CN:"玛丽港"},{name:"Europe/Minsk",zh_CN:"明斯克"},{name:"Europe/Monaco",zh_CN:"摩纳哥"},{name:"Europe/Moscow",zh_CN:"莫斯科"},{name:"Europe/Oslo",zh_CN:"奥斯陆"},{name:"Europe/Paris",zh_CN:"巴黎"},{name:"Europe/Podgorica",zh_CN:"波德戈里察"},{name:"Europe/Prague",zh_CN:"布拉格"},{name:"Europe/Riga",zh_CN:"里加"},{name:"Europe/Rome",zh_CN:"罗马"},{name:"Europe/Samara",zh_CN:"萨马拉"},{name:"Europe/San_Marino",zh_CN:"圣马力诺"},{name:"Europe/Sarajevo",zh_CN:"萨拉热窝"},{name:"Europe/Saratov",zh_CN:"萨拉托夫"},{name:"Europe/Simferopol",zh_CN:"辛菲罗波尔"},{name:"Europe/Skopje",zh_CN:"斯科普里"},{name:"Europe/Sofia",zh_CN:"索非亚"},{name:"Europe/Stockholm",zh_CN:"斯德哥尔摩"},{name:"Europe/Tallinn",zh_CN:"塔林"},{name:"Europe/Tirane",zh_CN:"地拉那"},{name:"Europe/Ulyanovsk",zh_CN:"乌里扬诺夫斯克"},{name:"Europe/Uzhgorod",zh_CN:"乌日哥罗德"},{name:"Europe/Vaduz",zh_CN:"瓦杜兹"},{name:"Europe/Vatican",zh_CN:"梵蒂冈"},{name:"Europe/Vienna",zh_CN:"维也纳"},{name:"Europe/Vilnius",zh_CN:"维尔纽斯"},{name:"Europe/Volgograd",zh_CN:"伏尔加格勒"},{name:"Europe/Warsaw",zh_CN:"华沙"},{name:"Europe/Zagreb",zh_CN:"萨格勒布"},{name:"Europe/Zaporozhye",zh_CN:"扎波罗热"},{name:"Europe/Zurich",zh_CN:"苏黎世"},{name:"Indian/Antananarivo",zh_CN:"安塔那那利佛"},{name:"Indian/Chagos",zh_CN:"查戈斯"},{name:"Indian/Christmas",zh_CN:"圣诞岛"},{name:"Indian/Cocos",zh_CN:"可可斯"},{name:"Indian/Comoro",zh_CN:"科摩罗"},{name:"Indian/Kerguelen",zh_CN:"凯尔盖朗"},{name:"Indian/Mahe",zh_CN:"马埃岛"},{name:"Indian/Maldives",zh_CN:"马尔代夫"},{name:"Indian/Mauritius",zh_CN:"毛里求斯"},{name:"Indian/Mayotte",zh_CN:"马约特"},{name:"Indian/Reunion",zh_CN:"留尼汪"},{name:"Pacific/Apia",zh_CN:"阿皮亚"},{name:"Pacific/Auckland",zh_CN:"奥克兰"},{name:"Pacific/Bougainville",zh_CN:"布干维尔"},{name:"Pacific/Chatham",zh_CN:"查塔姆"},{name:"Pacific/Easter",zh_CN:"复活节岛"},{name:"Pacific/Efate",zh_CN:"埃法特"},{name:"Pacific/Enderbury",zh_CN:"恩德伯里"},{name:"Pacific/Fakaofo",zh_CN:"法考福"},{name:"Pacific/Fiji",zh_CN:"斐济"},{name:"Pacific/Funafuti",zh_CN:"富纳富提"},{name:"Pacific/Galapagos",zh_CN:"加拉帕戈斯"},{name:"Pacific/Gambier",zh_CN:"甘比尔"},{name:"Pacific/Guadalcanal",zh_CN:"瓜达尔卡纳尔"},{name:"Pacific/Guam",zh_CN:"关岛"},{name:"Pacific/Honolulu",zh_CN:"檀香山"},{name:"Pacific/Johnston",zh_CN:"约翰斯顿"},{name:"Pacific/Kiritimati",zh_CN:"基里地马地岛"},{name:"Pacific/Kosrae",zh_CN:"库赛埃"},{name:"Pacific/Kwajalein",zh_CN:"夸贾林"},{name:"Pacific/Majuro",zh_CN:"马朱罗"},{name:"Pacific/Marquesas",zh_CN:"马克萨斯"},{name:"Pacific/Midway",zh_CN:"中途岛"},{name:"Pacific/Nauru",zh_CN:"瑙鲁"},{name:"Pacific/Niue",zh_CN:"纽埃"},{name:"Pacific/Norfolk",zh_CN:"诺福克"},{name:"Pacific/Noumea",zh_CN:"努美阿"},{name:"Pacific/Pago_Pago",zh_CN:"帕果帕果"},{name:"Pacific/Palau",zh_CN:"帕劳"},{name:"Pacific/Pitcairn",zh_CN:"皮特凯恩"},{name:"Pacific/Ponape",zh_CN:"波纳佩岛"},{name:"Pacific/Port_Moresby",zh_CN:"莫尔兹比港"},{name:"Pacific/Rarotonga",zh_CN:"拉罗汤加"},{name:"Pacific/Saipan",zh_CN:"塞班"},{name:"Pacific/Tahiti",zh_CN:"塔希提"},{name:"Pacific/Tarawa",zh_CN:"塔拉瓦"},{name:"Pacific/Tongatapu",zh_CN:"东加塔布"},{name:"Pacific/Truk",zh_CN:"特鲁克群岛"},{name:"Pacific/Wake",zh_CN:"威克"},{name:"Pacific/Wallis",zh_CN:"瓦利斯"}],K=k(),H=L.map(c=>{const d=$t("main_locale")==="zh_CN"?`${c.name} - ${c.zh_CN}`:c.name;return{label:`UTC${K.tz(c.name).format("Z")} ${d}`,value:c.name}}).sort((c,d)=>c.label<d.label?-1:c.label>d.label?1:0);export{H as a,x as t,I as u};