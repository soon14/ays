(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd09eecc"],{"121a":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return l}));var n=a("b775");function s(){return Object(n["a"])({url:"/tools/CarTools/CarBrand",method:"get"})}function i(){return Object(n["a"])({url:"/tools/CarTools/getBrand",method:"get"})}function r(t){return Object(n["a"])({url:"/tools/CarTools/getSeries",method:"get",params:{brand_id:t}})}function l(t){return Object(n["a"])({url:"/tools/CarTools/getModel",method:"get",params:{series_id:t}})}},"362f":function(t,e,a){"use strict";var n=a("b58d"),s=a.n(n);s.a},"7f78":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"app-container pageclass"},[a("div",{staticClass:"filter-container dn"},[a("el-form",{attrs:{inline:!0,model:t.listQuery}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"车主:"}},[a("el-input",{attrs:{size:"mini"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter()}},model:{value:t.listQuery.user,callback:function(e){t.$set(t.listQuery,"user",e)},expression:"listQuery.user"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"质保码:"}},[a("el-input",{attrs:{size:"mini"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter()}},model:{value:t.listQuery.guarantee_code,callback:function(e){t.$set(t.listQuery,"guarantee_code",e)},expression:"listQuery.guarantee_code"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"电话:"}},[a("el-input",{attrs:{size:"mini"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter()}},model:{value:t.listQuery.tel,callback:function(e){t.$set(t.listQuery,"tel",e)},expression:"listQuery.tel"}})],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px","text-align":"right","margin-right":"45px"}},[a("el-col",{attrs:{xs:24,sm:24,lg:24}},[a("el-tooltip",{attrs:{content:"搜索",placement:"top"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleFilter()}}},[t._v("搜索")])],1),t._v(" "),a("el-tooltip",{attrs:{content:"导出",placement:"top"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDownload()}}},[t._v("下载")])],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"new-table"},t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"table_list"},[a("div",{staticClass:"list_name"},[a("div",{staticClass:"name_title"},[a("span",[t._v("产品：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.product_title))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("车型：")]),t._v(" "),a("span",{staticClass:"title_span span_overflow"},[e.model?a("span",[t._v("\n                                 "+t._s(e.model.carseries.series_name)+"\n                                    "+t._s(e.model.model_name)+"\n\n                                    ")]):t._e()])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("车牌：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.provincial)+t._s(e.plate_numer))])])]),t._v(" "),a("div",{staticClass:"list_name"},[a("div",{staticClass:"name_title"},[a("span",[t._v("车主姓名：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.user))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("车主电话：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.user_phone))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("车主地区：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.user_address))])])]),t._v(" "),a("div",{staticClass:"list_name"},[a("div",{staticClass:"name_title"},[a("span",[t._v("安装门店：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.shop_user))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("门店电话：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.shop_phone))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("门店地区：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.shop_address))])])]),t._v(" "),a("div",{staticClass:"list_name"},[a("div",{staticClass:"name_title"},[a("span",[t._v("有  效  期：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.codeday)+"天")])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("购买日期：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(t._f("parseTime")(e.buytime)))])]),t._v(" "),a("div",{staticClass:"name_title"},[a("span",[t._v("质  保  码：")]),t._v(" "),a("span",{staticClass:"title_span"},[t._v(t._s(e.code))])])]),t._v(" "),a("div",{staticClass:"list_button"},[a("el-button",{attrs:{type:"warning",plain:"",size:"mini"},on:{click:function(a){return t.handleDelete(n,e.id)}}},[t._v("删除")])],1)])})),0)]),t._v(" "),a("div",{staticClass:"pageclass"},[a("div",{staticClass:"pagination-container page"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.psize,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},s=[],i=(a("ac6a"),a("7f7f"),a("121a")),r=a("c591"),l=a("b775");function o(t){return Object(l["a"])({url:"/admin/usercard/GetDataByList",method:"post",data:t})}function c(t){return Object(l["a"])({url:"/admin/usercard/GetDeleteById",method:"get",params:{id:t}})}function u(t){return Object(l["a"])({url:"/admin/usercard/GetDownload",method:"get",params:t})}a("f8b7");var d=a("ed08"),p={name:"guaranteecard",data:function(){return{props:{lazy:!0,lazyLoad:function(t,e){var a=t.level;if(0===a&&Object(i["b"])().then((function(t){for(var a=t.data,n=[],s=0;s<a.length;s++)n.push({label:a[s].name,value:a[s].brandid});e(n)})),1===a&&Object(i["d"])(t.data.value).then((function(t){for(var a=t.data,n=[],s=0;s<a.length;s++)n.push({label:a[s].factory_name+" "+a[s].series_name,value:a[s].series_id});e(n)})),2===a&&Object(i["c"])(t.data.value).then((function(t){for(var n=t.data,s=[],i=0;i<n.length;i++)s.push({label:n[i].label,value:n[i].value,leaf:a>=2});e(s)})),3===a){var n=[];e(n)}}},total:1,list:[],listQuery:{page:1,limit:10,car_name:"",product:"",guarantee_code:"",startTime:"",tel:"",car_model:"",cityCode:""},cityoptions:[]}},created:function(){var t=this;Object(r["a"])().then((function(e){t.cityoptions=e.data})),this.fetchList()},methods:{handleDelete:function(t,e){var a=this,n=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.$set(n.list[t],"delete",!0),c(e).then((function(e){1===e.status?(n.list.splice(t,1),n.total=n.total-1,n.$notify.success(e.msg)):n.$notify.error(e.msg),n.$set(n.list[t],"delete",!1)})).catch((function(e){n.$set(n.list[t],"delete",!1)}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},fetchList:function(){var t=this;o(this.listQuery).then((function(e){console.log(e),t.list=e.data.data,t.total=e.data.total}))},elCascaderOnlick:function(){var t=this;setTimeout((function(){document.querySelectorAll(".el-cascader-node__label").forEach((function(e){e.onclick=function(){this.previousElementSibling.click(),t.$refs.elcascader.dropDownVisible=!1}})),document.querySelectorAll(".el-cascader-panel .el-radio").forEach((function(e){e.onclick=function(){t.$refs.elcascader.dropDownVisible=!1}}))}),100)},handleSizeChange:function(t){this.listQuery.psize=t,this.fetchList()},handleCurrentChange:function(t){this.listQuery.page=t,this.fetchList()},handleDownload:function(){var t=this;this.listLoading=!0,u(this.listQuery).then((function(e){Promise.all([a.e("chunk-6e83591c"),a.e("chunk-5164a781"),a.e("chunk-5bdd67a2"),a.e("chunk-54b312fe")]).then(a.bind(null,"4bf8d")).then((function(a){console.log(a);var n=e.data.tHeader,s=e.data.filterVal,i=t.formatJson(e.data.data,s),r=new Date;r.setTime(r.getTime());var l=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate();a.export_json_to_excel({header:n,data:i,filename:"质保卡-"+l}),t.listLoading=!1,t.$message.success("下载成功")}))}))},formatJson:function(t,e){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(d["i"])(t[e]):t[e]}))}))},elCascaderCar:function(){var t=this;setTimeout((function(){document.querySelectorAll(".el-cascader-node__label").forEach((function(e){e.onclick=function(){this.previousElementSibling.click(),t.$refs.car.dropDownVisible=!1}})),document.querySelectorAll(".el-cascader-panel .el-radio").forEach((function(e){e.onclick=function(){t.$refs.car.dropDownVisible=!1}}))}),100)},handleFilter:function(){this.listQuery.page=1,this.fetchList()}}},_=p,f=(a("362f"),a("2877")),m=Object(f["a"])(_,n,s,!1,null,"651419ab",null);e["default"]=m.exports},b58d:function(t,e,a){},c591:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("b775");function s(){return Object(n["a"])({url:"/tools/CityTools/Cityadminlist",method:"post"})}},f8b7:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"g",(function(){return r})),a.d(e,"i",(function(){return l})),a.d(e,"h",(function(){return o})),a.d(e,"j",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"m",(function(){return d})),a.d(e,"e",(function(){return p})),a.d(e,"d",(function(){return _})),a.d(e,"c",(function(){return f}));var n=a("b775");function s(t){return Object(n["a"])({url:"/admin/Order/GetDataByList",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/admin/Order/GetIdByOrderLog",method:"get",params:{id:t}})}function r(t){return Object(n["a"])({url:"/admin/Order/PostDataByAdd",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/admin/Order/PostNoteByAdd",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/admin/Order/PostDataBySale",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/admin/Order/PostReturnedByAdd",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/admin/Order/GetTypeBySale",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/admin/Order/GetIdByDelete",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/admin/Order/GetQueryBydownload",method:"get",params:t})}function _(t){return Object(n["a"])({url:"/admin/Payorder/GetIdByinstdetails",method:"get",params:{order_id:t}})}function f(t){return Object(n["a"])({url:"/admin/Payorder/GetIdByinstOrderLog",method:"get",params:{order_id:t}})}}}]);