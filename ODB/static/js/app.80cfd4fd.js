(function(e){function o(o){for(var r,n,i=o[0],l=o[1],c=o[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(o);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,o=0;o<a.length;o++){for(var t=a[o],r=!0,i=1;i<t.length;i++){var l=t[i];0!==s[l]&&(r=!1)}r&&(a.splice(o--,1),e=n(n.s=t[0]))}return e}var r={},s={app:0},a=[];function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var c=0;c<i.length;c++)o(i[c]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var r=t("85ec"),s=t.n(r);s.a},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("a593"),s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",["loginPage"==e.location?t("div",{staticClass:"textCenter",attrs:{id:"app"}},[t("div",{staticClass:"pageCenter"},[t("h1",{staticClass:"textCenter textHL"},[e._v("CargoManager")]),e._v(" 账户 "),t("b-input",{model:{value:e.username,callback:function(o){e.username=o},expression:"username"}}),e._v(" 密码 "),t("b-input",{attrs:{type:"password"},model:{value:e.password,callback:function(o){e.password=o},expression:"password"}}),t("b-button",{attrs:{variant:"success"},on:{click:e.login}},[e._v("login")])],1)]):"workBench"==e.location?t("div",{attrs:{id:"app"}},[t("WorkBench",{attrs:{username:e.username,makeToast:e.makeToast,role:e.role}})],1):e._e()])},a=[],n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("h4",{staticClass:"textCenter"},[e._v("你好，"+e._s(e.username)+"！ "),t("b-badge",{attrs:{size:"sm",variant:"success"},on:{click:e.logout}},[e._v("登出")])],1),t("br"),"store"!=e.role?t("b-card",[e._v(" 规格选择: "),t("div",[t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"重量"}},[t("b-form-radio-group",{attrs:{options:e.mass,plain:"",name:"plain-inline1"},model:{value:e.selectedmass,callback:function(o){e.selectedmass=o},expression:"selectedmass"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"大小"}},[t("b-form-radio-group",{attrs:{options:e.size,plain:"",name:"plain-inline2"},model:{value:e.selectedsize,callback:function(o){e.selectedsize=o},expression:"selectedsize"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"包装"}},[t("b-form-radio-group",{attrs:{options:e.packaging,plain:"",name:"plain-inline3"},model:{value:e.selectedpackaging,callback:function(o){e.selectedpackaging=o},expression:"selectedpackaging"}})],1)],1)],1)],1),e._v(" 收件信息（收件人，电话，地址）： "),t("b-input",{model:{value:e.orderInfo,callback:function(o){e.orderInfo=o},expression:"orderInfo"}}),t("b-badge",{attrs:{variant:"primary "},on:{click:e.addOrder}},[e._v("提交订单")])],1):e._e(),t("br"),t("b-table",{attrs:{fields:e.fields,striped:"",hover:"",items:e.orders},scopedSlots:e._u([{key:"cell(edit)",fn:function(o){return[t("b-badge",{attrs:{size:"sm",variant:"primary "},on:{click:function(t){return e.rowEdit(o)}}},[e._v(" "+e._s(o.detailsShowing?"取消":"修改")+" ")])]}},{key:"row-details",fn:function(o){return[t("b-card",[e._v(" 规格选择: "),t("div",[t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"重量"}},[t("b-form-radio-group",{attrs:{options:e.mass,plain:"",name:"plain-inline1",disabled:"store"==e.role},model:{value:e.selectedmass,callback:function(o){e.selectedmass=o},expression:"selectedmass"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"大小"}},[t("b-form-radio-group",{attrs:{options:e.size,plain:"",name:"plain-inline2",disabled:"store"==e.role},model:{value:e.selectedsize,callback:function(o){e.selectedsize=o},expression:"selectedsize"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"包装"}},[t("b-form-radio-group",{attrs:{options:e.packaging,plain:"",name:"plain-inline3",disabled:"store"==e.role},model:{value:e.selectedpackaging,callback:function(o){e.selectedpackaging=o},expression:"selectedpackaging"}})],1)],1)],1)],1),e._v(" 收件信息： "),t("b-input",{attrs:{disabled:"store"==e.role},model:{value:e.orderInfo,callback:function(o){e.orderInfo=o},expression:"orderInfo"}}),e._v(" 快递单号： "),t("b-input",{attrs:{disabled:"saler"==e.role},model:{value:e.nowexpnum,callback:function(o){e.nowexpnum=o},expression:"nowexpnum"}}),t("b-badge",{attrs:{size:"sm"},on:{click:function(t){return e.updateOrder(o.item.id)}}},[e._v("保存")])],1)]}},{key:"cell(info)",fn:function(o){return[t("p",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:o.item.info,expression:"row.item.info",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}]},[e._v(" "+e._s(o.item.info)+" ")])]}},{key:"cell(expnum)",fn:function(o){return[""!=o.item.expnum?t("p",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:o.item.expnum,expression:"row.item.expnum",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}]},[e._v(" "+e._s(o.item.expnum)+" ")]):t("b-badge",{attrs:{variant:"danger"}},[e._v(" 等待发货 ")])]}}])})],1)},i=[],l=(t("4160"),t("ac1f"),t("1276"),t("159b"),{name:"WorkBench",props:["username","makeToast","role"],created:function(){var e=this;this.getOrders(),console.log(this.username),setInterval((function(){e.getOrders()}),12e4)},methods:{makeProduct:function(){this.product=this.selectedsize+"-"+this.selectedmass+"-"+this.selectedpackaging},rowEdit:function(e){if(!e.detailsShowing){var o=e.item,t=o.product.split("-");this.selectedsize=t[0],this.selectedmass=t[1],this.selectedpackaging=t[2],this.orderInfo=o.info,this.nowexpnum=o.expnum,console.log(this.selectedsize),console.log(this.selectedmass),console.log(this.selectedpackaging),console.log(this.orderInfo),console.log(this.nowexpnum)}e.toggleDetails()},onCopy:function(){this.makeToast("Success!","复制成功！","success")},onError:function(){this.makeToast("Error!","复制失败！请手动复制！","danger")},logout:function(){this.$cookies.remove("userStatus"),location.reload()},getOrders:function(){var e=this;this.axios.post("/api/",JSON.stringify({reason:"getOrders",username:this.username})).then((function(o){var t=o.data;console.log(t),t.suc?(e.orders=t.orders,e.orders=[],t.orders.forEach((function(o){var t=new Date(1e3*o.addtime);o.addtime=t.getMonth()+"/"+t.getDay()+"/"+t.getHours(),e.orders.push(o)}))):e.makeToast("Error!","订单载入出错！！！！","danger")}))},addOrder:function(){var e=this;this.makeProduct(),this.axios.post("/api/",JSON.stringify({reason:"addOrder",saler:this.username,info:this.orderInfo,product:this.product})).then((function(o){var t=o.data;console.log(t),t.suc?(e.makeToast("Success!","添加成功！","success"),e.getOrders()):e.makeToast("Error!","订单添加出错！！！！\n"+t.reason,"danger")}))},updateOrder:function(e){var o=this;this.makeProduct();var t={reason:"updateOrder",orderId:e,expnum:this.nowexpnum,product:this.product,info:this.orderInfo};this.axios.post("/api/",JSON.stringify(t)).then((function(e){var t=e.data;console.log(t),t.suc?(o.makeToast("Success!","保存成功！","success"),o.getOrders()):o.makeToast("Error!","保存出错！！！\n"+t.reason,"danger")}))}},data:function(){return{mass:[{text:"5斤",value:"5斤"},{text:"10斤",value:"10斤"}],packaging:[{text:"非礼盒",value:"非礼盒"},{text:"礼盒",value:"礼盒"}],size:[{text:"大",value:"大"},{text:"中",value:"中"},{text:"小",value:"小"}],selectedmass:"",selectedsize:"",selectedpackaging:"",orderInfo:"",product:"",nowexpnum:"",noworderid:"",fields:[{key:"addtime",sortable:!0},{key:"saler",sortable:!0},{key:"info",sortable:!0},{key:"product",sortable:!0},{key:"expnum",sortable:!0},{key:"edit"}],orders:[]}}}),c=l,u=t("2877"),d=Object(u["a"])(c,n,i,!1,null,"903e82fe",null),p=d.exports,f={name:"App",components:{WorkBench:p},created:function(){if(document.querySelector("body").setAttribute("class","bg textColor"),console.log(this.location),console.log(this.$cookies.isKey("userStatus")),console.log(this.$cookies.get("userStatus")),this.$cookies.isKey("userStatus")){var e=this.$cookies.get("userStatus");e.username&&(this.logined=e.logined,this.username=e.username,this.password=e.password,this.role=e.role,this.location=e.location,this.makeToast("Success!","自动登陆成功！","success"))}},methods:{login:function(){var e=this;this.axios.post("/api/",JSON.stringify({reason:"login",username:this.username,password:this.password})).then((function(o){var t=o.data;console.log(t),t.suc?(e.logined=!0,e.location="workBench",e.$cookies.set("userStatus",{logined:e.logined,username:e.username,password:e.password,role:e.role,location:e.location}),e.makeToast("Notice!","登陆成功！")):e.makeToast("Notice!","登陆出错！！！！")}))},makeToast:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(o,{title:e,variant:t,solid:!0})}},data:function(){return{logined:!1,username:"",password:"",role:"",location:"loginPage"}}},m=f,g=(t("034f"),Object(u["a"])(m,s,a,!1,null,null,null)),b=g.exports,v=t("bc3a"),h=t.n(v),k=t("a7fe"),x=t.n(k),w=t("3aae"),y=t.n(w),_=t("05b9"),O=(t("f4cd"),t("fa68"),t("9306")),S=t.n(O);r["default"].use(S.a),r["default"].use(y.a),r["default"].use(x.a,h.a),r["default"].use(_["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,o,t){}});
//# sourceMappingURL=app.80cfd4fd.js.map