(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ff546f","chunk-5667eb47"],{"01ef7":function(t,e,a){"use strict";var n=a("1da8"),i=a.n(n);i.a},"041e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[a("el-table-column",{attrs:{prop:"order_id",label:"订单号",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"车主",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.contact)+" "+t._s(e.row.tel))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(t._f("parseTime")(e.row.create_time)))])]}}])})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)},i=[],r=a("3191"),l=(a("ed08"),{name:"index",data:function(){return{dialogVisible:!1,list:[],title:""}},methods:{handleClose:function(){this.dialogVisible=!1},handleView:function(t,e,a){var n=this;this.dialogVisible=!0,"shop"===e&&(this.title="查看"+t.shopname),"order"===e&&(this.title="查看"+t.userName),"product"===e&&(this.title="查看"+t.product_title),console.log(t);var i={id:t.id,type:e,star:a};Object(r["m"])(i).then((function(t){n.list=t.data}))}}}),o=l,s=a("2877"),c=Object(s["a"])(o,n,i,!1,null,"f028cb66",null);e["default"]=c.exports},"1da8":function(t,e,a){},3191:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"j",(function(){return r})),a.d(e,"i",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"h",(function(){return s})),a.d(e,"l",(function(){return c})),a.d(e,"m",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"f",(function(){return f})),a.d(e,"e",(function(){return m})),a.d(e,"k",(function(){return p})),a.d(e,"c",(function(){return b})),a.d(e,"b",(function(){return v}));var n=a("b775");function i(t){return Object(n["a"])({url:"/admin/Home/GetHomeByData",method:"get",params:{day:t}})}function r(t){return Object(n["a"])({url:"/admin/Salesman/GetOrderSortByData",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/admin/Product/GetOrderSortByData",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/admin/city/GetOrderSortByData",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/admin/city/GetOrderprovincesByData",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/admin/Home/GetTop",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/admin/Home/getEnvByList",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/admin/Home/GetOrderByservice",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/admin/Home/GetOrderByShop",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/admin/Home/GetOrderByServer",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/admin/Home/GetShopByList",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/admin/Home/GetDataByTopShop",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/admin/Home/GetDatabyDownload",method:"get",params:t})}},"62a02":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container top"},[a("div",{staticClass:"statistical"},[a("div",{staticClass:"item-st"},[a("div",{staticClass:"title"},[t._v("待处理安装单")]),t._v(" "),a("div",{staticClass:"sj"},[t._v(t._s(t.statistical.order))])]),t._v(" "),a("div",{staticClass:"item-st",staticStyle:{background:"#8cc8ff"}},[a("div",{staticClass:"title"},[t._v("待处理门店需求")]),t._v(" "),a("div",{staticClass:"sj"},[t._v(t._s(t.statistical.Demand))])])]),t._v(" "),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"昨天",name:"-1"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"近一周",name:"-7"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"近一个月",name:"-30"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"近三个月",name:"-90"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"近一年",name:"-360"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.order,stripe:""}},[a("el-table-column",{attrs:{prop:"userName",label:"客服",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"total",label:"整体评分",width:"180"}}),t._v(" "),a("el-table-column",{staticClass:"link-type",attrs:{prop:"two",label:"2星"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticClass:"link-type",on:{click:function(a){return t.handleView(e.row,2)}}},[t._v(t._s(e.row.two))])]}}])}),t._v(" "),a("el-table-column",{staticClass:"link-type",attrs:{prop:"three",label:"3星"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticClass:"link-type",on:{click:function(a){return t.handleView(e.row,3)}}},[t._v(t._s(e.row.three))])]}}])}),t._v(" "),a("el-table-column",{staticClass:"link-type",attrs:{prop:"four",label:"4星"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticClass:"link-type",on:{click:function(a){return t.handleView(e.row,4)}}},[t._v(t._s(e.row.four))])]}}])}),t._v(" "),a("el-table-column",{staticClass:"link-type",attrs:{prop:"five",label:"5星"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticClass:"link-type",on:{click:function(a){return t.handleView(e.row,5)}}},[t._v(t._s(e.row.five))])]}}])})],1),t._v(" "),a("table-view",{ref:"tableview"})],1)},i=[],r=a("3191"),l=a("041e"),o={name:"Index",data:function(){return{activeName:"-30",statistical:{order:0,Demand:0},order:[]}},components:{TableView:l["default"]},created:function(){this.getdata()},methods:{handleClick:function(t){this.getdata()},handleView:function(t,e){this.$refs.tableview.handleView(t,"order",e)},getdata:function(){var t=this;Object(r["d"])(this.activeName).then((function(e){t.statistical=e.data.statistical,t.order=e.data.order}))}}},s=o,c=(a("01ef7"),a("2877")),u=Object(c["a"])(s,n,i,!1,null,"66a8b1d6",null);e["default"]=u.exports}}]);