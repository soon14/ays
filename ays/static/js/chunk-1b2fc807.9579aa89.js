(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2fc807","chunk-5667eb47","chunk-7bf81718","chunk-01461a80","chunk-2d0cf898"],{"041e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[n("el-table-column",{attrs:{prop:"order_id",label:"订单号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"车主",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link-type"},[t._v(t._s(e.row.contact)+" "+t._s(e.row.tel))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link-type"},[t._v(t._s(t._f("parseTime")(e.row.create_time)))])]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)},a=[],o=n("3191"),r=(n("ed08"),{name:"index",data:function(){return{dialogVisible:!1,list:[],title:""}},methods:{handleClose:function(){this.dialogVisible=!1},handleView:function(t,e,n){var i=this;this.dialogVisible=!0,"shop"===e&&(this.title="查看"+t.shopname),"order"===e&&(this.title="查看"+t.userName),"product"===e&&(this.title="查看"+t.product_title),console.log(t);var a={id:t.id,type:e,star:n};Object(o["i"])(a).then((function(t){i.list=t.data}))}}}),l=r,s=n("2877"),c=Object(s["a"])(l,i,a,!1,null,"f028cb66",null);e["default"]=c.exports},1352:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:t.list,stripe:""}},[n("el-table-column",{attrs:{type:"index",label:"排名",width:"180"}}),t._v(" "),"TOP城市"===t.title?n("el-table-column",{attrs:{prop:"title",label:"城市",width:"180"}}):t._e(),t._v(" "),"TOP产品"===t.title?n("el-table-column",{attrs:{prop:"title",label:"产品",width:"180"}}):t._e(),t._v(" "),"TOP业务员"===t.title?n("el-table-column",{attrs:{prop:"title",label:"业务员",width:"180"}}):t._e(),t._v(" "),"TOP省份"===t.title?n("el-table-column",{attrs:{prop:"title",label:"省份",width:"180"}}):t._e(),t._v(" "),n("el-table-column",{attrs:{prop:"count",label:"数量",width:"180"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)],1)},a=[],o=(n("3191"),n("ed08"),{name:"index",data:function(){return{dialogVisible:!1,list:[],title:""}},methods:{handleClose:function(){this.dialogVisible=!1},handleView:function(t,e){this.dialogVisible=!0,this.title=e,console.log(t),this.list=t.data}}}),r=o,l=n("2877"),s=Object(l["a"])(r,i,a,!1,null,"48dc3401",null);e["default"]=s.exports},"1a0f":function(t,e,n){"use strict";var i=n("74aa"),a=n.n(i);a.a},3191:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return h}));var i=n("b775");function a(t){return Object(i["a"])({url:"/admin/Home/GetHomeByData",method:"get",params:{day:t}})}function o(t){return Object(i["a"])({url:"/admin/Home/GetTop",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/admin/Home/getEnvByList",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/admin/Home/GetOrderByservice",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/admin/Home/GetOrderByShop",method:"get",params:t})}function c(t){return Object(i["a"])({url:"/admin/Home/GetOrderByServer",method:"get",params:t})}function d(t){return Object(i["a"])({url:"/admin/Home/GetShopByList",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/admin/Home/GetDataByTopShop",method:"get",params:t})}function h(t){return Object(i["a"])({url:"/admin/Home/GetDatabyDownload",method:"get",params:t})}},"63af":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bar_dv",style:{width:"10provinces0%",height:"400px"}},[t._t("default")],2)},a=[],o=n("313e"),r=n.n(o),l={name:"NodeIndexDialog",props:{title:String,provinces:{type:Object,default:function(){return{title:[],count:[]}}},isShowDialog:{type:Boolean,default:!1}},mounted:function(){var t=this;console.log("mounted()"),setTimeout((function(){t.drawLine()}),1e3)},created:function(){},methods:{drawLine:function(){var t=this,e=this.$refs.bar_dv,n=r.a.init(e);n.setOption({title:{text:this.title},tooltip:{},xAxis:{axisLabel:{interval:1},data:t.provinces.title},barWidth:20,color:["#009CFF"],yAxis:{},series:[{name:"订单量",type:"bar",data:t.provinces.count}]})}}},s=l,c=n("2877"),d=Object(c["a"])(s,i,a,!1,null,"176f3658",null);e["default"]=d.exports},"74aa":function(t,e,n){},a4ca:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:"导出内容",visible:t.dialogVisible,width:"60%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[n("el-checkbox",{attrs:{label:"门店"}}),t._v(" "),n("el-checkbox",{attrs:{label:"城市"}}),t._v(" "),n("el-checkbox",{attrs:{label:"省份"}}),t._v(" "),n("el-checkbox",{attrs:{label:"产品"}}),t._v(" "),n("el-checkbox",{attrs:{label:"平台"}}),t._v(" "),n("el-checkbox",{attrs:{label:"业务员"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleDerive}},[t._v("导出")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.handleClose}},[t._v("取 消")])],1)],1)],1)},a=[],o=(n("ac6a"),n("3191")),r=(n("f8b7"),{name:"show",data:function(){return{checkList:[],dialogVisible:!1}},methods:{handleDerive:function(){var t=this;this.checkList.forEach((function(e){console.log(e);var i={type:e};Object(o["a"])(i).then((function(i){Promise.all([n.e("chunk-6e83591c"),n.e("chunk-5164a781"),n.e("chunk-5bdd67a2"),n.e("chunk-54b312fe")]).then(n.bind(null,"4bf8d")).then((function(n){console.log(n);var a=i.data.tHeader,o=i.data.filterVal,r=t.formatJson(i.data.data,o),l=new Date;l.setTime(l.getTime());var s=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate();n.export_json_to_excel({header:a,data:r,filename:"Top"+e+s}),t.listLoading=!1,t.$message.success("下载成功")}))}))}))},formatJson:function(t,e){return t.map((function(t){return e.map((function(e){return"timestamp"===e?parseTime(t[e]):t[e]}))}))},handleShow:function(){this.dialogVisible=!0},handleClose:function(){this.checkList=[],this.dialogVisible=!1}}}),l=r,s=n("2877"),c=Object(s["a"])(l,i,a,!1,null,"5166fe60",null);e["default"]=c.exports},e692:function(t,e,n){"use strict";n.d(e,"C",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"o",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"t",(function(){return c})),n.d(e,"l",(function(){return d})),n.d(e,"d",(function(){return u})),n.d(e,"s",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return m})),n.d(e,"i",(function(){return f})),n.d(e,"n",(function(){return b})),n.d(e,"j",(function(){return v})),n.d(e,"h",(function(){return _})),n.d(e,"m",(function(){return k})),n.d(e,"v",(function(){return y})),n.d(e,"r",(function(){return g})),n.d(e,"q",(function(){return w})),n.d(e,"p",(function(){return O})),n.d(e,"w",(function(){return j})),n.d(e,"x",(function(){return B})),n.d(e,"c",(function(){return T})),n.d(e,"f",(function(){return S})),n.d(e,"u",(function(){return x}));var i=n("b775");function a(t){return Object(i["a"])({url:"/admin/shop/GetAuditShopByList",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/admin/shop/GetInstallByList",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/admin/shop/GetDataByList",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/admin/shop/PostDataByAudit",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/admin/shop/GetDataByAll",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/admin/shop/PostDataByUpdate",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/admin/shop/GetShopByRunning",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/admin/shop/GetEnvByList",method:"get",params:t})}function h(t){return Object(i["a"])({url:"/admin/shop/PostDataByUpBind",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/admin/shop/GetIDByDetails",method:"get",params:{id:t}})}function m(t){return Object(i["a"])({url:"/admin/shop/GetProjectByList",method:"get",params:{id:t}})}function f(t){return Object(i["a"])({url:"/admin/shop/GetProjectByAdd",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/admin/shop/PostBussByUpdate",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/admin/shop/GetProjectByDel",method:"get",params:{id:t}})}function _(t){return Object(i["a"])({url:"/admin/shop/GetProjectBy",method:"get",params:{id:t}})}function k(t){return Object(i["a"])({url:"/admin/shop/PostBlackByUpdate",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/admin/shop/PostWhiteByUpdate",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/admin/shop/PostDataByRecommended",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/admin/shop/PostDataByCityAll",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/admin/shop/PostDataByBuildAll",method:"post",data:t})}function j(t){return Object(i["a"])({url:"/admin/shop/PostbalanceByUpdate",method:"post",data:t})}function B(t){return Object(i["a"])({url:"/admin/shop/PostensureByUpdate",method:"post",data:t})}function T(t){return Object(i["a"])({url:"/admin/shop/GetDataBydownload",method:"post",data:t})}function S(t){return Object(i["a"])({url:"/admin/shop/delete",method:"get",params:{id:t}})}function x(t){return Object(i["a"])({url:"/admin/shop/PostRecomBySet",method:"post",data:t})}},f890:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container top"},[n("div",{staticClass:"filter-container "},[n("el-form",{attrs:{inline:!0,model:t.listQuery}},[n("el-date-picker",{attrs:{size:"mini",type:"datetimerange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.listQuery.time,callback:function(e){t.$set(t.listQuery,"time",e)},expression:"listQuery.time"}}),t._v(" "),n("el-tooltip",{attrs:{content:"搜索",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleFilter()}}},[t._v("搜索\n                  ")])],1),t._v(" "),n("el-tooltip",{attrs:{content:"导出",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDerive()}}},[t._v("导出\n                  ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"statistical bc"},[n("div",{staticClass:"item-st"},[n("div",{staticClass:"title"},[t._v("总订单")]),t._v(" "),n("div",{staticClass:"sj"},[t._v(t._s(t.ordersum))])]),t._v(" "),n("div",{staticClass:"item-st",staticStyle:{background:"#8cc8ff"}},[n("div",{staticClass:"title"},[t._v("时间段内")]),t._v(" "),n("div",{staticClass:"sj"},[t._v(t._s(t.timesum))])])]),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"30px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("TOP门店")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handelShow}},[t._v("更多")])],1),t._v(" "),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shop,stripe:"",size:"mini"}},[n("el-table-column",{attrs:{prop:"sort",label:"排名",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"shopname",label:"门店",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"类别"},scopedSlots:t._u([{key:"default",fn:function(e){return["普通"==e.row.shop_type?n("span",[t._v("普通")]):n("span",{staticClass:"link-type"},[t._v(t._s(e.row.shop_type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===e.row.blacklist?n("div",{staticClass:"color: red",staticStyle:{color:"red"}},[t._v("\n                              市场拉黑("+t._s(e.row.blackday<356?e.row.blackday+"天后到期":"永久")+")\n                          ")]):t._e(),t._v(" "),3==e.row.ecblacklist?n("div",{staticStyle:{color:"red"}},[t._v("\n                              电商拉黑\n                              ("+t._s(e.row.ecblackday<356?e.row.ecblackday+"天后到期":"永久")+")\n                          ")]):t._e(),t._v(" "),1==e.row.ec_rec||1==e.row.mk_rec?n("div",{staticClass:"link-type"},[t._v("\n                              推荐\n                          ")]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"宝典"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link-type"},[t._v(t._s(t._f("book")(e.row.book)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"count",label:"单量"}}),t._v(" "),n("el-table-column",{attrs:{prop:"stock",label:"进货量"}}),t._v(" "),n("el-table-column",{attrs:{label:"管理",fixed:"right",align:"center","min-width":"300px","class-name":"small-padding"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"right",width:"100",trigger:"click"}},[n("div",[n("div",[n("el-link",{attrs:{type:1===e.row.ec_rec?"primary":""}},[t._v("电商推荐")]),t._v(" "),n("el-link",{attrs:{type:"warning"},on:{click:function(n){return t.handelSet(e.row,"ec_rec")}}},[t._v("\n                                          "+t._s(1===e.row.ec_rec?"取消推荐":"推荐")+"\n                                      ")])],1),t._v(" "),n("div",[n("el-link",{attrs:{type:1===e.row.mk_rec?"primary":""}},[t._v("市场推荐")]),t._v(" "),n("el-link",{attrs:{type:"warning"},on:{click:function(n){return t.handelSet(e.row,"mk_rec")}}},[t._v("\n                                          "+t._s(1===e.row.mk_rec?"取消推荐":"推荐")+"\n                                      ")])],1)]),t._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[t._v("推荐")])],1),t._v(" "),n("el-tooltip",{attrs:{content:"拉黑",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.toShop(e.row)}}},[t._v("拉黑\n                              ")])],1),t._v(" "),n("el-tooltip",{attrs:{content:"编辑",placement:"top"}},[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.clickToWhite(e.row)}}},[t._v("拉白\n                              ")])],1)]}}])})],1)],1),t._v(" "),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.topshow,expression:"topshow"}],attrs:{"current-page":t.listQ.page,"page-sizes":[10,20,30,50],"page-size":t.listQ.psize,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),t.city.title.length>0?n("div",{staticClass:"echarts"},[n("div",{staticStyle:{width:"45%"}},[n("div",[t._v("TOP城市排行\n                  "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleTop(t.city,"TOP城市")}}},[t._v("更多\n                  ")])],1),t._v(" "),t.city.title.length>0?n("Test",{attrs:{provinces:t.city,title:""}}):t._e()],1),t._v(" "),t.provinces.title.length>0?n("div",{staticStyle:{width:"45%"}},[n("div",[t._v("TOP省份订单数\n                  "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleTop(t.provinces,"TOP省份")}}},[t._v("更多\n                  ")])],1),t._v(" "),t.provinces.title.length>0?n("Test",{attrs:{provinces:t.provinces,title:""}}):t._e()],1):t._e(),t._v(" "),t.salesman.title.length>0?n("div",{staticStyle:{width:"45%"}},[n("div",[t._v("TOP业务员订单数\n                  "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleTop(t.salesman,"TOP业务员")}}},[t._v("更多\n                  ")])],1),t._v(" "),t.salesman.title.length>0?n("Test",{attrs:{provinces:t.salesman,title:""}}):t._e()],1):t._e(),t._v(" "),t.product.title.length>0?n("div",{staticStyle:{width:"45%"}},[n("div",[t._v("TOP产品订单数\n                  "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleTop(t.product,"TOP产品")}}},[t._v("更多\n                  ")])],1),t._v(" "),t.product.title.length>0?n("Test",{attrs:{provinces:t.product,title:""}}):t._e()],1):t._e()]):t._e(),t._v(" "),n("el-dialog",{attrs:{title:"拉黑门店",visible:t.BlockVisible,width:"30%","before-close":t.clickToBlock},on:{"update:visible":function(e){t.BlockVisible=e}}},[n("el-cascader",{attrs:{options:t.options,props:{expandTrigger:"hover"}},on:{change:t.handleChange},model:{value:t.backvalue,callback:function(e){t.backvalue=e},expression:"backvalue"}}),t._v(" "),2===t.shop.blacklist?n("div",{staticStyle:{"text-align":"center",width:"100%","margin-top":"30px"}},[t._v("\n              市场拉黑("+t._s(t.shop.marketday<356?t.shop.marketday+"天后到期":"永久")+")\n\n          ")]):t._e(),t._v(" "),3==t.shop.ecblacklist?n("div",{staticStyle:{"text-align":"center",width:"100%","margin-top":"30px"}},[t._v("\n              电商拉黑\n              "),t._v("\n              ("+t._s(t.shop.ecmarketday<356?t.shop.ecmarketday+"天后到期":"永久")+")\n          ")]):t._e(),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){t.BlockVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleBack}},[t._v("确 定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"门店拉白",visible:t.whiteVisible,width:"30%","before-close":t.clickToWhite},on:{"update:visible":function(e){t.whiteVisible=e}}},[2===t.shop.blacklist?n("div",{staticStyle:{"text-align":"center",width:"100%","margin-top":"30px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handelWhite("ma")}}},[t._v("\n                  市场拉白("+t._s(t.shop.marketday<356?t.shop.marketday+"天后到期":"永久")+")\n              ")])],1):t._e(),t._v(" "),3===t.shop.ecblacklist?n("div",{staticStyle:{"text-align":"center",width:"100%","margin-top":"30px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handelWhite("ec")}}},[t._v("\n                  电商拉白\n                  ("+t._s(t.shop.ecmarketday<356?t.shop.ecmarketday+"天后到期":"永久")+")\n              ")])],1):t._e(),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){t.whiteVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),n("TableTopView",{ref:"tableTopview"}),t._v(" "),n("Show",{ref:"ShowAdmin"})],1)},a=[],o=n("3191"),r=n("63af"),l=n("e692"),s=n("041e"),c=n("1352"),d=n("a4ca"),u={name:"Index",data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},topshow:!1,listQuery:{time:[]},total:0,listQ:{time:[],page:1,limit:10},ordersum:0,timesum:0,provinces:{},product:{},salesman:{},activeName:"-1",shop:[],statistical:{order:0,Demand:0},city:{},order:[],backvalue:void 0,whiteVisible:!1,BlockVisible:!1,backtemp:{},options:[{value:2,label:"市场",children:[{value:1e5,label:"永久"},{value:7,label:"七天"},{value:30,label:"一个月"},{value:90,label:"三个月"},{value:365,label:"1年"}]},{value:3,label:"电商",children:[{value:1e5,label:"永久"},{value:7,label:"七天"},{value:30,label:"一个月"},{value:90,label:"三个月"},{value:365,label:"1年"}]}]}},components:{Test:r["default"],TableView:s["default"],TableTopView:c["default"],Show:d["default"]},provinces:[],filters:{book:function(t){return 1===t?"宝典":""}},created:function(){this.getdata(),this.handelShop()},methods:{handleDerive:function(){this.$refs.ShowAdmin.handleShow()},handelShow:function(){this.$router.push("/situation/evenshop")},handelShop:function(){var t=this;this.listQ.time=this.listQuery.time,Object(o["g"])(this.listQ).then((function(e){t.total=e.data.total,t.shop=e.data.shop}))},handleTop:function(t,e){this.$refs.tableTopview.handleView(t,e)},handleSizeChange:function(t){this.listQ.limit=t,this.handelShop()},handleCurrentChange:function(t){this.listQ.page=t,this.handelShop()},handelSet:function(t,e){var n=this;console.log(t);var i={id:t.id,val:0};"mk_rec"===e&&(i.field="mk_rec",console.log(t.mk_rec,3),2===t.mk_rec?i.val=1:i.val=2),"ec_rec"===e&&(i.field="ec_rec",console.log(t.mk_rec,2),2===t.ec_rec?i.val=1:i.val=2),Object(l["u"])(i).then((function(t){n.getdata()}))},handleChange:function(t){this.day=t[1],console.log(t[0]),2===t[0]&&(this.backtemp.blacklist=t[0],this.backtemp.blackday=t[1],this.backtemp.id=this.shop.id,this.backtemp.ecblacklist=void 0,this.backtemp.ecblackday=void 0),3===t[0]&&(this.backtemp.ecblacklist=t[0],this.backtemp.ecblackday=t[1],this.backtemp.blacklist=void 0,this.backtemp.blackday=void 0,this.backtemp.id=this.shop.id)},toShop:function(t){this.BlockVisible=!0,this.shop=t},handelWhite:function(t){var e=this;if("ma"===t)var n={id:this.shop.id,blacklist:1,blackday:0,blackend:0};if("ec"===t)n={id:this.shop.id,ecblacklist:1,ecblackday:0,ecblackend:0};Object(l["v"])(n).then((function(t){e.$message.success("拉白成功"),e.getdata(),e.whiteVisible=!1}))},handleBack:function(){var t=this,e=this,n=this.day;1e5===n?n="永久":n+="天",this.$confirm("此操作将该门店 "+n+" 拉黑, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["m"])(t.backtemp).then((function(n){console.log(n),e.BlockVisible=!t.BlockVisible,t.$message.success("拉黑成功"),t.getdata()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},clickToWhite:function(t){this.shop=t,this.whiteVisible=!this.whiteVisible},clickToBlock:function(){this.BlockVisible=!1},handleFilter:function(){this.getdata(),this.handelShop()},handleDownload:function(){},handleClick:function(t){this.getdata()},getdata:function(){var t=this;Object(o["h"])(this.listQuery).then((function(e){t.provinces=e.data.provinces,t.salesman=e.data.salesman,t.product=e.data.product,t.city=e.data.city,t.ordersum=e.data.ordersum,t.timesum=e.data.timesum}))}}},h=u,p=(n("1a0f"),n("2877")),m=Object(p["a"])(h,i,a,!1,null,"4854ab08",null);e["default"]=m.exports},f8b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"i",(function(){return l})),n.d(e,"h",(function(){return s})),n.d(e,"j",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"m",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return m}));var i=n("b775");function a(t){return Object(i["a"])({url:"/admin/Order/GetDataByList",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/admin/Order/GetIdByOrderLog",method:"get",params:{id:t}})}function r(t){return Object(i["a"])({url:"/admin/Order/PostDataByAdd",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/admin/Order/PostNoteByAdd",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/admin/Order/PostDataBySale",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/admin/Order/PostReturnedByAdd",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/admin/Order/GetTypeBySale",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/admin/Order/GetIdByDelete",method:"get",params:t})}function h(t){return Object(i["a"])({url:"/admin/Order/GetQueryBydownload",method:"get",params:t})}function p(t){return Object(i["a"])({url:"/admin/Payorder/GetIdByinstdetails",method:"get",params:{order_id:t}})}function m(t){return Object(i["a"])({url:"/admin/Payorder/GetIdByinstOrderLog",method:"get",params:{order_id:t}})}}}]);