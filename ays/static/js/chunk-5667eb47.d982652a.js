(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5667eb47"],{"041e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[n("el-table-column",{attrs:{prop:"order_id",label:"订单号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"车主",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link-type"},[t._v(t._s(e.row.contact)+" "+t._s(e.row.tel))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link-type"},[t._v(t._s(t._f("parseTime")(e.row.create_time)))])]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)},a=[],i=n("3191"),o=(n("ed08"),{name:"index",data:function(){return{dialogVisible:!1,list:[],title:""}},methods:{handleClose:function(){this.dialogVisible=!1},handleView:function(t,e,n){var r=this;this.dialogVisible=!0,"shop"===e&&(this.title="查看"+t.shopname),"order"===e&&(this.title="查看"+t.userName),"product"===e&&(this.title="查看"+t.product_title),console.log(t);var a={id:t.id,type:e,star:n};Object(i["m"])(a).then((function(t){r.list=t.data}))}}}),u=o,l=n("2877"),c=Object(l["a"])(u,r,a,!1,null,"f028cb66",null);e["default"]=c.exports},3191:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"j",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return d})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return h}));var r=n("b775");function a(t){return Object(r["a"])({url:"/admin/Home/GetHomeByData",method:"get",params:{day:t}})}function i(t){return Object(r["a"])({url:"/admin/Salesman/GetOrderSortByData",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/admin/Product/GetOrderSortByData",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/admin/city/GetOrderSortByData",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/admin/city/GetOrderprovincesByData",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/admin/Home/GetTop",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/admin/Home/getEnvByList",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/admin/Home/GetOrderByservice",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/admin/Home/GetOrderByShop",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/admin/Home/GetOrderByServer",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/admin/Home/GetShopByList",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/admin/Home/GetDataByTopShop",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/admin/Home/GetDatabyDownload",method:"get",params:t})}}}]);