(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c0afe56"],{"1d2e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zichan-container"},[s("div",{staticClass:"income-search"},[s("div",{staticClass:"search-item"},[s("div",{staticClass:"label"},[t._v("状态：")]),t._v(" "),s("div",{staticClass:"value"},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusop,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),s("div",{staticClass:"search-item"},[s("div",{staticClass:"search-btn",on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),s("div",{staticClass:"search-btn",on:{click:t.clickToNewTicket}},[t._v("新建")])])]),t._v(" "),s("div",{staticClass:"income-form"},[s("div",{staticClass:"ticket-wrap"},t._l(t.ticketList,(function(e,i){return s("div",{key:i,staticClass:"ticket-item"},[s("div",{staticClass:"ticket-icon"},[s("i",{staticClass:"el-icon-zoom-out",on:{click:function(s){return t.clickTicket(e)}}}),t._v(" "),s("i",{staticClass:"el-icon-delete",on:{click:function(s){return t.clickDelete(e)}}})]),t._v(" "),s("div",{staticClass:"ticket-owner"},[t._v(t._s(e.owner))]),t._v(" "),1===e.status?s("div",{staticClass:"ticket-img"},[s("img",{attrs:{src:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_%E5%8F%91%E9%80%81%E4%B8%AD%402x.png",alt:""}})]):t._e(),t._v(" "),2===e.status?s("div",{staticClass:"ticket-img"},[s("img",{attrs:{src:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_%E5%B7%B2%E8%BF%87%E6%9C%9F%402x.png",alt:""}})]):t._e(),t._v(" "),3===e.status?s("div",{staticClass:"ticket-img"},[s("img",{attrs:{src:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_%E5%B7%B2%E5%88%A0%E9%99%A4%402x.png",alt:""}})]):t._e(),t._v(" "),4===e.status?s("div",{staticClass:"ticket-img"},[s("img",{attrs:{src:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_%E5%B7%B2%E5%A4%B1%E6%95%88%402x.png",alt:""}})]):t._e(),t._v(" "),s("div",{staticClass:"ticket-top"},[s("div",{staticClass:"ticket-num"},[t._v("\n            ¥\n            "),s("span",[t._v(t._s(e.price))])]),t._v(" "),s("div",{staticClass:"ticket-addition"},[s("span",[t._v(t._s(e.title))])])]),t._v(" "),s("div",{staticClass:"ticket-center"},[s("div",{staticClass:"ticket-comment",attrs:{v:""}},[t._v("说明："+t._s(e.desc))])]),t._v(" "),s("div",{staticClass:"ticket-bottom"},[s("div",{staticClass:"ticket-expir"},[t._v("有效期"+t._s(t._f("parseTime")(e.start_time,"{y}-{m}-{d}"))+"-"+t._s(t._f("parseTime")(e.end_time,"{y}-{m}-{d}")))])])])})),0)]),t._v(" "),t.showTicket?s("div",{staticClass:"mask"},[s("div",{staticClass:"mask-box"},[s("div",{staticClass:"mask-title"},[s("span",[t._v("优惠券详情")]),t._v(" "),s("span",{on:{click:t.clickTicket}},[s("i",{staticClass:"el-icon-close"})])]),t._v(" "),s("div",{staticClass:"mask-content"},[s("div",{staticClass:"mask-detail"},[s("div",{staticClass:"detail-text"},[t._v("金额")]),t._v(" "),s("div",{staticClass:"detail-value"},[t._v(t._s(t.curTicket.price))])]),t._v(" "),s("div",{staticClass:"mask-detail"},[s("div",{staticClass:"detail-text"},[t._v("使用条件")]),t._v(" "),s("div",{staticClass:"detail-value"},[t._v(t._s(t.curTicket.title))])]),t._v(" "),s("div",{staticClass:"mask-detail"},[s("div",{staticClass:"detail-text"},[t._v("状态")]),t._v(" "),1===t.curTicket.status?s("div",{staticClass:"detail-value"},[t._v("待使用")]):t._e(),t._v(" "),2===t.curTicket.status?s("div",{staticClass:"detail-value"},[t._v("已使用")]):t._e(),t._v(" "),3===t.curTicket.status?s("div",{staticClass:"detail-value"},[t._v("已过期")]):t._e()]),t._v(" "),s("div",{staticClass:"mask-detail"},[s("div",{staticClass:"detail-text"},[t._v("有效期")]),t._v(" "),s("div",{staticClass:"detail-value"},[t._v(t._s(t._f("parseTime")(t.curTicket.start_time,"{y}-{m}-{d}"))+"-"+t._s(t._f("parseTime")(t.curTicket.end_time,"{y}-{m}-{d}")))])]),t._v(" "),s("div",{staticClass:"mask-detail special"},[s("div",{staticClass:"detail-text"},[t._v("使用说明")]),t._v(" "),s("div",{staticClass:"detail-value"},[t._v(t._s(t.curTicket.desc))])])]),t._v(" "),s("div",{staticClass:"mask-btns"},[s("div",{staticClass:"cancel",on:{click:t.clickTicket}},[t._v("关闭")])])])]):t._e(),t._v(" "),t.showCoupon?s("div",{staticClass:"show-discount"},[s("div",{staticClass:"discount-warp"},[s("div",{staticClass:"close-icon",on:{click:t.headColse}},[s("i",{staticClass:"el-icon-close"})]),t._v(" "),s("div",{staticClass:"title"},[t._v("新建优惠券")]),t._v(" "),s("div",{staticClass:"money"},[t._m(0),t._v(" "),s("el-input",{staticClass:"input-money",attrs:{placeholder:"请输入使用条件"},model:{value:t.postFrom.title,callback:function(e){t.$set(t.postFrom,"title",e)},expression:"postFrom.title"}})],1),t._v(" "),s("div",{staticClass:"money"},[t._m(1),t._v(" "),s("el-input",{staticClass:"input-money",attrs:{placeholder:"请输入金额"},model:{value:t.postFrom.price,callback:function(e){t.$set(t.postFrom,"price",e)},expression:"postFrom.price"}})],1),t._v(" "),s("div",{staticClass:"money"},[t._m(2),t._v(" "),s("div",{staticClass:"condition"},[s("el-date-picker",{staticClass:"data-picker",attrs:{size:"mini",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.postFrom.period_time,callback:function(e){t.$set(t.postFrom,"period_time",e)},expression:"postFrom.period_time"}})],1)]),t._v(" "),s("div",{staticClass:"money"},[t._m(3),t._v(" "),s("div",{staticClass:"textarea"},[s("el-select",{attrs:{size:"mini",multiple:"",placeholder:"请选择"},model:{value:t.postFrom.group,callback:function(e){t.$set(t.postFrom,"group",e)},expression:"postFrom.group"}},t._l(t.group,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),t._v(" "),s("div",{staticClass:"money",staticStyle:{"align-items":"normal"}},[t._m(4),t._v(" "),s("div",{staticClass:"textarea"},[s("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:t.postFrom.desc,callback:function(e){t.$set(t.postFrom,"desc",e)},expression:"postFrom.desc"}})],1)]),t._v(" "),s("div",{staticClass:"new_botton"},[s("el-row",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.headNewconfirm}},[t._v("确定新建")]),t._v(" "),s("el-button",{attrs:{size:"mini"},on:{click:t.headNewcancel}},[t._v("取消")])],1)],1)])]):t._e(),t._v(" "),s("div",{staticClass:"pageclass"},[s("div",{staticClass:"pagination-container page"},[s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.psize,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money-name"},[s("span",{staticClass:"name-span"},[t._v("使用条件")]),t._v(" "),s("span",[t._v("：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money-name"},[s("span",{staticClass:"name-span"},[t._v("金额")]),t._v(" "),s("span",[t._v("：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money-name"},[s("span",{staticClass:"name-span"},[t._v("有效期")]),t._v(" "),s("span",[t._v("：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money-name"},[s("span",{staticClass:"name-span"},[t._v("发送对象")]),t._v(" "),s("span",[t._v("：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money-name"},[s("span",{staticClass:"name-span"},[t._v("使用说明")]),t._v(" "),s("span",[t._v("：")])])}],n=s("db72"),c=s("1ed9"),o=s("1df7"),l=(s("ed08"),s("2f62")),r={name:"ZiChan",data:function(){return{postFrom:{},group:[],date:"",date2:"",sortOpt:"",statusOpt:"",expirOpt:"",curTicket:"",showTicket:!1,showCoupon:!1,navbar:["无金额限制","最低消费"],navindex:0,periodlist:["固定日期","领取生效，有效天数"],periodid:0,statusop:[{value:1,label:"发送中"},{value:3,label:"已删除"},{value:2,label:"已过期"}],sort:[{value:"通用券",label:"通用券"},{value:"阿帕通用",label:"阿帕通用"},{value:"非阿帕通用",label:"非阿帕通用"}],options:[{value:"已过期",label:"已过期"},{value:"发送中",label:"发送中"},{value:"已删除",label:"已删除"}],expirTime:[{value:0,label:"全部"},{value:7,label:"7天内"},{value:30,label:"30天内"}],ticketList:[{id:1,sub_money:"200",condition:"2599",owner:"阿帕专享",comment:[{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"},{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"}],start_time:"2019.11.1 00:00",end_time:"2019.11.1 23:59",status:1},{id:2,sub_money:"200",condition:"2599",owner:"非阿帕专享",comment:[{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"}],start_time:"2019.11.1 00:00",end_time:"2019.11.1 23:59",status:2},{id:3,sub_money:"200",condition:"2599",owner:"通用券",comment:[{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"},{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"}],start_time:"2019.11.1 00:00",end_time:"2019.11.1 23:59",status:3},{id:4,sub_money:"200",condition:"2599",owner:"通用券",comment:[{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"},{text:"此优惠券不与其他优惠券同时使用 此优惠券不与其他优惠券同时使用"}],start_time:"2019.11.1 00:00",end_time:"2019.11.1 23:59",status:3}],currentPage:1,showTime:!1,total:1,money:"",radio:"全部",impose:"",value1:"",month:"",textarea:"",loading:!1,listQuery:{page:1,limit:10,status:void 0,title:"",sstatus:"all"}}},computed:Object(n["a"])({},Object(l["b"])(["userinfo","brand","group"])),created:function(){var t=this,e={};Object(c["a"])(e).then((function(e){t.group=e.data})),this.getlist()},methods:{clickDelete:function(t){var e=this;this.$confirm("此操作将永久删除该优惠卷, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var s=e.ticketList.indexOf(t);Object(o["a"])(t.id).then((function(t){e.ticketList[s].status=3,e.$message.success("删除成功")}))})).catch((function(){}))},getlist:function(){var t=this;this.loading=!0,Object(o["c"])(this.listQuery).then((function(e){t.ticketList=e.data.data,t.total=e.data.total,t.loading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getlist()},handleSizeChange:function(t){this.listQuery.limit=t,this.getlist()},handleCurrentChange:function(t){this.listQuery.page=t,this.getlist()},clickToSearch:function(){var t={sort:this.sortOpt,status:this.statusOpt,expir:this.expirOpt};console.log(t)},clickTicket:function(t){t&&(this.curTicket=t),this.showTicket=!this.showTicket},clickToPickTime:function(){this.showTime=!this.showTime},clickToNewTicket:function(){this.headColse()},clickToRec:function(){console.log(2)},clickToDelTicket:function(){console.log(3)},clickToDelRec:function(){console.log(4)},cilckNav:function(t){this.navindex=t},cilckPeriodid:function(t){this.periodid=t},headColse:function(){this.showCoupon=!this.showCoupon},headNewconfirm:function(){var t=this;this.postFrom.sender_id=this.userinfo.id,Object(o["d"])(this.postFrom).then((function(e){console.log(e),t.postFrom={},t.$message.success("新建完成"),t.getlist()})),this.headColse()},headNewcancel:function(){this.headColse()}}},u=r,d=(s("a376"),s("2877")),v=Object(d["a"])(u,i,a,!1,null,"6bfeecd9",null);e["default"]=v.exports},"1df7":function(t,e,s){"use strict";s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return c})),s.d(e,"b",(function(){return o}));var i=s("b775");function a(t){return Object(i["a"])({url:"/admin/Platformcoupon/GetDataByList",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/admin/Platformcoupon/PostDataByAdd",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/admin/Platformcoupon/GetIdByDelete",method:"get",params:{id:t}})}function o(t){return Object(i["a"])({url:"/admin/Platformcoupon/GetSenlogByList",method:"get",params:t})}},"1ed9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"f",(function(){return n})),s.d(e,"g",(function(){return c})),s.d(e,"e",(function(){return o})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return u}));var i=s("b775");function a(t){return Object(i["a"])({url:"/admin/ShopGroup/GetDataByList",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/admin/ShopGroup/PostDataByAdd",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/admin/ShopGroup/PostDataByAddShop",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/admin/ShopGroup/GetShopByVal",method:"get",params:{val:t}})}function l(t){return Object(i["a"])({url:"/admin/ShopGroup/GetDataShopByList",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/admin/ShopGroup/GetGroupByList",method:"get",params:{val:t}})}function u(t){return Object(i["a"])({url:"/admin/ShopGroup/GetIdByDelete",method:"post",data:t})}},4969:function(t,e,s){},a376:function(t,e,s){"use strict";var i=s("4969"),a=s.n(i);a.a}}]);