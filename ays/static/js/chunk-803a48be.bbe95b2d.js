(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-803a48be","chunk-aa6e00aa","chunk-4e8d2b62"],{1361:function(e,t,i){"use strict";var a=i("b5d7"),s=i.n(a);s.a},"1bbd":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container dn"},[i("el-form",{attrs:{inline:!0,model:e.listQuery}},[i("el-row",[i("el-col",{attrs:{span:4}},[i("el-form-item",{attrs:{label:"推广单号:"}},[i("el-input",{attrs:{size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter()}},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:4}},[i("el-form-item",{attrs:{label:"安装单号:"}},[i("el-input",{attrs:{size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter()}},model:{value:e.listQuery.contact,callback:function(t){e.$set(e.listQuery,"contact",t)},expression:"listQuery.contact"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"日期:"}},[i("el-date-picker",{staticStyle:{width:"250px"},attrs:{size:"mini",type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00"]},model:{value:e.listQuery.startTime,callback:function(t){e.$set(e.listQuery,"startTime",t)},expression:"listQuery.startTime"}})],1)],1)],1)],1)],1),e._v(" "),i("el-row",{staticStyle:{"margin-bottom":"10px","text-align":"right","margin-right":"45px"}},[i("el-col",{attrs:{xs:24,sm:24,lg:24}},[i("el-tooltip",{attrs:{content:"搜索",placement:"top"}},[e.rolesbtn("o-96-1")?i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleFilter()}}},[e._v("搜索\n                    ")]):e._e()],1)],1)],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"new-table"},[i("div",{staticClass:"tab"},[i("div",{staticClass:"list-item",class:1===e.listQuery.status?"selected":"",staticStyle:{width:"15%"},on:{click:function(t){return e.handleStatusChange(1)}}},[i("span",[e._v("审核通过")]),e._v(" "),i("span",{staticClass:"price"},[e._v(e._s(e.countdata[1]["total"]))])]),e._v(" "),i("div",{staticClass:"list-item",class:2===e.listQuery.status?"selected":"",staticStyle:{width:"15%"},on:{click:function(t){return e.handleStatusChange(2)}}},[i("span",[e._v("待审核")]),e._v(" "),i("span",{staticClass:"price"},[e._v(e._s(e.countdata[2]["total"]))])]),e._v(" "),i("div",{staticClass:"list-item",class:"all"===e.listQuery.status?"selected":"",on:{click:function(t){return e.handleStatusChange("all")}}},[i("span",[e._v("全部")]),e._v(" "),i("span",{staticClass:"price"},[e._v(e._s(e.countdata[1]["total"]+e.countdata[2]["total"]))])])]),e._v(" "),e._l(e.list,(function(t,a){return e.total>0?i("div",{staticClass:"table"},[i("div",{staticClass:"table-title"},[i("div",{staticClass:"list-item che"}),e._v(" "),i("div",{staticClass:"list-item"},[i("span",[e._v("推广单号:")]),e._v(" "),i("span",[e._v(e._s(t.id))])]),e._v(" "),i("div",{staticClass:"list-item"},[i("span",[e._v("安装单号:")]),e._v(" "),i("span",[e._v(e._s(t.order_id))])]),e._v(" "),i("div",{staticClass:"list-item"},[i("span",[e._v("上传日期:")]),e._v(" "),i("span",[e._v(e._s(t.create_time))])]),e._v(" "),i("div",{staticClass:"list-item"},[i("span",[e._v("推广类型:")]),e._v(" "),i("span",[e._v(e._s(t.type))])])]),e._v(" "),i("div",{staticClass:"table-content"},[i("div",{staticClass:"table-filed"},["图文"==t.type?i("el-image",{staticStyle:{width:"10rem",height:"5rem"},attrs:{src:t.imagetext.assembly}}):e._e(),e._v(" "),"视频"==t.type?i("video",{staticStyle:{width:"10rem",height:"5rem"},attrs:{src:t.video[0].url}}):e._e()],1),e._v(" "),i("div",{staticClass:"table-filed jp"},[i("div",{staticClass:"filed-span"},[i("span",[e._v("购买产品")]),e._v(" "),i("div",[i("div",{staticClass:"field"},[e._v(e._s(t.order.product_titile))])])]),e._v(" "),i("div",{staticClass:"filed-span"},[i("span",[e._v("状态")]),e._v(" "),i("div",[e._v("\n                                :\n                                "),i("div",{staticClass:"field"},[e._v(e._s(t.status))])])])]),e._v(" "),i("div",{staticClass:"table-filed jp"},[i("div",{staticClass:"filed-span"},[i("span",[e._v("车型")]),e._v(" "),i("div",[e._v(":\n                                "),i("div",{staticClass:"field"},[e._v(e._s(t.order.model_title))])])]),e._v(" "),i("div",{staticClass:"filed-span"},[i("span",[e._v("处理人")]),e._v(" "),i("div",{staticClass:"kc"},[e._v(":\n                                "),t.admin?i("div",{staticClass:"field"},[e._v(e._s(t.admin.realName))]):i("span",[e._v("未处理")])])])]),e._v(" "),i("div",{staticClass:"table-filed jp"},[i("div",{staticClass:"filed-span"},[i("span",[e._v("安装门店")]),e._v(" "),i("div",[e._v(":\n                                "),t.order?i("div",{staticClass:"field"},[e._v(e._s(t.order.shop.shopname))]):e._e()])])]),e._v(" "),i("div",{staticClass:"table-filed jl",staticStyle:{"justify-content":"center"}},[i("div",{staticClass:"filed-price"},["审核"===t.status?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleRelease(t)}}},[e._v("发布")]):e._e(),e._v(" "),"通过"===t.status?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleUpdate(t)}}},[e._v("查看")]):e._e()],1)])])]):e._e()})),e._v(" "),e.total<1?i("div",{staticClass:"no-data"},[e._v("当前暂无数据")]):e._e()],2),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.psize,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("mar-form",{ref:"marform",on:{handleUpdate:function(t){return e.handleFilter()}}}),e._v(" "),i("ting-from",{ref:"tingfrom",on:{handleUpdate:function(t){return e.handleFilter()}}})],1)},s=[],l=(i("28a5"),i("db72")),n=i("b7be"),r=i("6724"),o=i("393f"),d=i("9b1c"),c=i("ed08"),u=i("2f62"),m=(i("ef6c"),{name:"Roles",directives:{waves:r["a"]},components:{MarForm:o["default"],tingFrom:d["default"]},filters:{statusFilter:function(e){var t={0:"禁用",1:"正常"};return t[e]}},data:function(){return{isIndeterminate:!0,checkedCities:[],checkAll:!1,dialogAudit:!1,loading:!0,sumorder:0,reTitle:"",infodialogVisible:!1,reOption:[],is_disabled:!1,shopQuery:{cityCode:void 0,shopname:void 0,tel:void 0},postFrom:{},permissions:[],RedialogVisible:!1,ReturndialogVisible:!1,ReturnData:{type:1,price:void 0,courier:void 0,courier_order_no:void 0,name:void 0},innerVisible:!1,dialogVisible:!1,checked:!0,tableKey:0,list:null,total:0,selectedRows:null,listLoading:!0,showSearch:!1,options:[],shop:[],listQuery:{page:1,limit:10,status:"all",title:"",sstatus:"all"},allsum:0,countdata:[{total:1,status:1},{total:1,status:1},{total:1,status:1}],buttonDisabled:!0,deleting:!1,pickerOptions:c["j"],currentIndex:-1,regionHiera:[],Stitle:"",checklist:[]}},computed:Object(l["a"])({},Object(u["b"])(["userinfo","brand","group"])),watch:{},created:function(){this.permissions=this.group.btn.split(","),this.fetchList()},methods:{handleRelease:function(e){this.$refs.tingfrom.handleEdit(e)},handleDownload:function(){var e=this;Object(n["GetQueryBydownload"])(this.listQuery).then((function(t){Promise.all([i.e("chunk-5164a781"),i.e("chunk-5bdd67a2"),i.e("chunk-58293907")]).then(i.bind(null,"4bf8d")).then((function(i){console.log(i);var a=["安装单号","订单状态","购买平台","购买单号","购买账号","购买产品","订单金额","联系人","联系电话","省","市","区","详细地址","车牌号","车型","备注","提交时间","门店类别","门店状态","有无宝典","门店名称","门店地址","门店电话","安装费用","主业务员","次业务员","客服","客服备注","派单时间","业务确认时间","门店确认时间","安装完成时间","结算时间","结算方式","是否驳回","驳回原因","回访","售后"],s=["id","status","lazada_title","buy_order_no","buy_account","product_titile","no_price","contact","tel","city_province","city_city","city_carea","city_desc","number_plate","model_title","desc","create_time","shop_type","shop_status","is_book","shop_name","shop_city","shop_tel","ins_cost","sales_name","insales_name","pre_name","service_desc","send_time","business_time","stores_time","install_time","settlement_time","settlement_type","is_rejected","rejected_txt","return","after_sales"],l=e.formatJson(t.data.data,s),n=new Date;n.setTime(n.getTime());var r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();i.export_json_to_excel({header:a,data:l,filename:r}),e.downloadLoading=!1}))}))},formatJson:function(e,t){return e.map((function(e){return t.map((function(t){return"timestamp"===t?parseTime(e[t]):e[t]}))}))},rolesbtn:function(e){var t=this.permissions.indexOf(e);return t>-1},handeldownload:function(){this.$message("暂无导出")},handelInfo:function(e){this.postFrom=e,e.city_code.constructor===String&&(this.postFrom.city_code=this.postFrom.city_code.split(",")),e.car_model.constructor===String&&(this.postFrom.car_model=this.postFrom.car_model.split(",")),e.lazada_list.constructor===String&&(this.postFrom.lazada_list=this.postFrom.lazada_list.split(","));var t=this.postFrom.lazada_list;this.postFrom.lazada_list=[];for(var i=0;i<t.length;i++)this.postFrom.lazada_list.push(parseInt(t[i]));this.infodialogVisible=!this.infodialogVisible},fetchList:function(){var e=this;this.listLoading=!0,Object(n["a"])(this.listQuery).then((function(t){e.list=t.data.data,e.total=t.data.total;for(var i=t.data.coudata,a=[],s=0,l=0;l<13;l++)a.push({total:0,status:l});console.log(i);for(var n=0;n<i.length;n++)s+=i[n].total,a[i[n].status].total=i[n].total,9===i[n].status&&(0===a[0].total?a[0].total=i[n].total:a[0].total=a[0].total+i[n].total);e.listLoading=!e.listLoading,e.allsum=s,console.log(a),e.countdata=a,e.listLoading=!e.listLoading,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.fetchList()},handleSizeChange:function(e){this.listQuery.psize=e,this.fetchList()},handleStatusChange:function(e){this.listQuery.page=1,this.listQuery.status=e,this.fetchList()},handleCurrentChange:function(e){this.listQuery.page=e,this.fetchList()},handleUpdate:function(e){this.$refs.marform.handleView(e)},handleDelete:function(e,t){var i=this,a=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$set(a.list[e],"delete",!0),Object(n["del"])(t).then((function(t){1===t.status?(a.list.splice(e,1),a.total=a.total-1,a.$notify.success(t.msg),i.fetchList()):a.$notify.error(t.msg),a.$set(a.list[e],"delete",!1)})).catch((function(t){a.$set(a.list[e],"delete",!1)}))})).catch((function(){i.$message({type:"info",message:"已取消删除"})}))}}}),f=m,p=(i("9bc6"),i("2877")),h=Object(p["a"])(f,a,s,!1,null,"45c39832",null);t["default"]=h.exports},"393f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mb"},[i("el-dialog",{attrs:{title:"推广营销详情",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"推广素材",name:"payinstall"}},[e._l(e.formdata.video,(function(t,a){return"视频"===e.formdata.type?i("div",{key:a,staticClass:"video"},[i("video",{staticStyle:{width:"200px",height:"100px"},attrs:{src:t.url,controls:"controls"}})]):e._e()})),e._v(" "),e._l(e.formdata.imagetext,(function(t,a){return"图文"==e.formdata.type?i("div",{key:a,staticClass:"video"},[i("el-image",{staticStyle:{width:"10rem",height:"5rem"},attrs:{src:t}})],1):e._e()}))],2),e._v(" "),i("el-tab-pane",{attrs:{label:"日志",name:"paylog"}},e._l(e.formdata.marketinglog,(function(t,a){return i("el-timeline-item",{key:a,attrs:{color:"#1d9ffc",timestamp:t.title}},[e._v("\n                      "+e._s(t.create_time)+"\n                  ")])})),1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.downloadZip}},[e._v("下载\n                  ")]),e._v(" "),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},s=[],l=(i("5df3"),i("2d63")),n=(i("ac6a"),i("b7be")),r=i("7c39"),o=i.n(r),d=i("21a6"),c=i.n(d),u={name:"form",data:function(){return{is_video_status:void 0,activeName:"payinstall",dialogVisible:!1,formdata:{}}},methods:{handleView:function(e){console.log(e),this.dialogVisible=!0,this.formdata=e},downloadZip:function(){var e=this;console.log(this.datafrom);var t=this.formdata.video,i=this.formdata.imagetext,a=[],s=this.formdata.type;if("视频"===s){if(0===t.length)return void this.$message.error("无数据下载");t.forEach((function(e){a.push({fileUrl:e.url,renameFileName:e.order_id+".mp4"})})),this.filesToRar(a,"案例打包")}if("图文"===s){a=[{fileUrl:i.passing_light_qt,renameFileName:"近光墙图.jpg"},{fileUrl:i.front,renameFileName:"车辆正面.jpg"},{fileUrl:i.distance_light_qt,renameFileName:"远光近墙图.jpg"},{fileUrl:i.product,renameFileName:"产品配置图.jpg"},{fileUrl:i.other_one,renameFileName:"其他1.jpg"},{fileUrl:i.assembly,renameFileName:"总成.jpg"},{fileUrl:i.vehiclebreaking,renameFileName:"拆车后.jpg"},{fileUrl:i.coating,renameFileName:"总成覆膜图.jpg"},{fileUrl:i.open_assembly,renameFileName:"开总成图.jpg"},{fileUrl:i.gelresin,renameFileName:"清胶图.jpg"},{fileUrl:i.lens,renameFileName:"透镜安装.jpg"},{fileUrl:i.situdimming,renameFileName:"原位调光图.jpg"},{fileUrl:i.inject_glue,renameFileName:"注胶过程图.jpg"},{fileUrl:i.truck_loading,renameFileName:"装车图.jpg"},{fileUrl:i.other_tow,renameFileName:"其他2.jpg"},{fileUrl:i.rear_passing_light_qt,renameFileName:"安装后近光墙.jpg"},{fileUrl:i.rear_front,renameFileName:"正面.jpg"},{fileUrl:i.rear_distance_light_qt,renameFileName:"远光后.jpg"},{fileUrl:i.rear_light_feature,renameFileName:"车灯特写.jpg"},{fileUrl:i.rear_passing_light_way,renameFileName:"近光照路.jpg"},{fileUrl:i.rear_distance_light_way,renameFileName:"远光照路.jpg"},{fileUrl:i.other_tow_three,renameFileName:"其他三.jpg"}],this.filesToRar(a,"案例打包"+new Date);var l={id:this.datafrom.id,filed:"status",status:1,title:"下载图文案例"};Object(n["f"])(l).then((function(t){if(console.log(t),2e4===t.code){for(var i=0;i<e.video.length;i++)window.location.href=e.video[i].url;e.dialogVisible=!1,e.open2()}else e.open4()}))}},filesToRar:function(e,t){var i=this,a=new o.a,s={},n=[];i.title="正在加载压缩文件";var r,d=Object(l["a"])(e);try{var u=function(){var e=r.value,t=i.getImgArrayBuffer(e.fileUrl).then((function(t){a.file(e.renameFileName,t,{binary:!0}),s[e.renameFileName]=t}));n.push(t)};for(d.s();!(r=d.n()).done;)u()}catch(m){d.e(m)}finally{d.f()}Promise.all(n).then((function(){a.generateAsync({type:"blob"}).then((function(e){i.title="正在压缩",c.a.saveAs(e,t),i.title="压缩完成"}))})).catch((function(e){i.$message.error("文件压缩失败")}))},getImgArrayBuffer:function(e){return new Promise((function(t,i){var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="blob",a.onload=function(){200==this.status?t(this.response):i(this.status)},a.send()}))},handleClose:function(){this.dialogVisible=!1},handleClick:function(e,t){var i=this;"paylog"===e.paneName&&(this.loglist=[]),"instalog"===e.paneName&&(this.loglist=[],GetIdByinstaOrderLog(this.OrderInfo.order_id).then((function(e){i.loglist=e.data}))),"return"===e.paneName&&this.getsale(),console.log("售后服务"),"sales"===e.paneName&&this.getsale()},headDownload:function(){for(var e=this,t=(this.formdata.order_id,[]),i=this.formdata.video.length,a=0,s=0;s<this.formdata.video.length;s++)!0===this.formdata.video[s].status?(a++,t.push(this.formdata.video[s].id)):console.log("还没选择");var l={ids:[],id:""};l.ids=t.join(","),l.id=this.formdata.order_id,i===a?Object(n["PostDataByUpdate"])(l).then((function(t){if(console.log(t),2e4===t.code){for(var i=0;i<e.formdata.video.length;i++)window.location.href=e.formdata.video[i].url;e.dialogVisible=!1,e.$message({message:"恭喜你，已开始下载！",type:"success"})}else e.$message.error("下载视频，请重新下载。")})):this.$message.error("请选择下载的视频。")}}},m=u,f=(i("1361"),i("2877")),p=Object(f["a"])(m,a,s,!1,null,"1c3b83ca",null);t["default"]=p.exports},4:function(e,t){},"4acb":function(e,t,i){},5:function(e,t){},6724:function(e,t,i){"use strict";i("8d41");var a="@@wavesContext";function s(e,t){function i(i){var a=Object.assign({},t.value),s=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=s.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var n=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(n.width,n.height)+"px",l.appendChild(r)),s.type){case"center":r.style.top=n.height/2-r.offsetHeight/2+"px",r.style.left=n.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(i.pageY-n.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(i.pageX-n.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=s.color,r.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=i:e[a]={removeHandle:i},i}var l={bind:function(e,t){e.addEventListener("click",s(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",s(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},n=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(n)),l.install=n;t["a"]=l},"733c":function(e,t,i){},"7c1f":function(e,t,i){"use strict";var a=i("733c"),s=i.n(a);s.a},"8d41":function(e,t,i){},"9b1c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"25%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-dialog",{attrs:{width:"30%",title:"补充内容",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[i("el-form",{attrs:{model:e.postdata}},[i("el-form-item",{attrs:{label:"标题"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.postdata.title,callback:function(t){e.$set(e.postdata,"title",t)},expression:"postdata.title"}})],1),e._v(" "),"图文"===e.datafrom.type?i("el-form-item",{attrs:{label:"链接地址"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.postdata.link_url,callback:function(t){e.$set(e.postdata,"link_url",t)},expression:"postdata.link_url"}})],1):e._e(),e._v(" "),i("el-row",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.downloadZip}},[e._v("下载\n                    ")]),e._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(t){e.innerVisible=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),e._l(e.video,(function(t,a){return"视频"==e.datafrom.type?i("div",{key:a,staticClass:"video"},[i("video",{staticStyle:{width:"200px",height:"100px"},attrs:{src:t.url,controls:"controls"}})]):e._e()})),e._v(" "),e._l(e.datafrom.imagetext,(function(t,a){return"图文"==e.datafrom.type?i("div",{key:a,staticClass:"video"},[i("el-image",{attrs:{src:t}})],1):e._e()})),e._v(" "),i("div",{staticClass:"vi-bootm"},[i("el-row",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.ToheadDownload}},[e._v("下载\n                ")]),e._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:e.handleClose}},[e._v("取消")])],1)],1)],2)],1)},s=[],l=(i("5df3"),i("2d63")),n=(i("ac6a"),i("b7be")),r=(i("ed08"),i("7c39")),o=i.n(r),d=i("21a6"),c=i.n(d),u={name:"instal",data:function(){return{innerVisible:!1,postdata:{},listQuery:{order_id:null,page:1,limit:10,startTime:void 0,sstatus:"all"},total:0,total1:0,total2:0,total3:0,listLoading:!0,tableData:[],dialogVisible:!1,video:[],title:"",is_video_status:void 0,order_id:void 0,datafrom:{}}},filters:{StrText:function(e){return 1===e?"已处理":"待处理"}},created:function(){},methods:{handleClose:function(){this.dialogVisible=!1},handleEdit:function(e){this.title=e.order_id+"-推广详情"+e.type+"-处理",this.dialogVisible=!0,this.video=e.video,this.datafrom=e,this.is_video_status=e.is_video_status,this.order_id=e.id},open:function(){this.$message({message:"请先选中视频！",type:"warning"})},open2:function(){this.$message({message:"恭喜你，已开始下载！",type:"success"})},open4:function(){this.$message.error("下载视频，请重新下载。")},ToheadDownload:function(){this.innerVisible=!0},downloadZip:function(){var e=this,t=this.datafrom.video,i=this.datafrom.imagetext,a=[],s=this.datafrom.type,l=0;if("视频"===s){if(void 0===this.postdata.title||""===this.postdata.title)return void this.$message.error("标题不能为空");if(0===t.length)return void this.$message.error("无数据下载");t.forEach((function(e){l++;var t=Date.parse(new Date);a.push({fileUrl:e.url,renameFileName:e.order_id+t+l+".mp4"})})),this.filesToRar(a,"案例打包");var r={id:this.datafrom.id,filed:"status",status:1,title:"下载视频案例",totitle:this.postdata.title};Object(n["f"])(r).then((function(t){2e4===t.code?(e.dialogVisible=!1,e.innerVisible=!1,e.$emit("handleUpdate"),e.open2()):e.open4()}))}if("图文"===s){if(void 0===this.postdata.title||""===this.postdata.title)return void this.$message.error("标题不能为空");if(void 0===this.postdata.link_url||""===this.postdata.link_url)return void this.$message.error("链接不能为空");a=[{fileUrl:i.passing_light_qt,renameFileName:"近光墙图.jpg"},{fileUrl:i.front,renameFileName:"车辆正面.jpg"},{fileUrl:i.distance_light_qt,renameFileName:"远光近墙图.jpg"},{fileUrl:i.product,renameFileName:"产品配置图.jpg"},{fileUrl:i.other_one,renameFileName:"其他1.jpg"},{fileUrl:i.assembly,renameFileName:"总成.jpg"},{fileUrl:i.vehiclebreaking,renameFileName:"拆车后.jpg"},{fileUrl:i.coating,renameFileName:"总成覆膜图.jpg"},{fileUrl:i.open_assembly,renameFileName:"开总成图.jpg"},{fileUrl:i.gelresin,renameFileName:"清胶图.jpg"},{fileUrl:i.lens,renameFileName:"透镜安装.jpg"},{fileUrl:i.situdimming,renameFileName:"原位调光图.jpg"},{fileUrl:i.inject_glue,renameFileName:"注胶过程图.jpg"},{fileUrl:i.truck_loading,renameFileName:"装车图.jpg"},{fileUrl:i.other_tow,renameFileName:"其他2.jpg"},{fileUrl:i.rear_passing_light_qt,renameFileName:"安装后近光墙.jpg"},{fileUrl:i.rear_front,renameFileName:"正面.jpg"},{fileUrl:i.rear_distance_light_qt,renameFileName:"远光后.jpg"},{fileUrl:i.rear_light_feature,renameFileName:"车灯特写.jpg"},{fileUrl:i.rear_passing_light_way,renameFileName:"近光照路.jpg"},{fileUrl:i.rear_distance_light_way,renameFileName:"远光照路.jpg"},{fileUrl:i.other_tow_three,renameFileName:"其他三.jpg"}];var o=Date.parse(new Date);this.filesToRar(a,"案例打包"+o);var d={id:this.datafrom.id,filed:"status",status:1,title:"下载图文案例",totitle:this.postdata.title,link_url:this.postdata.link_url};Object(n["f"])(d).then((function(t){2e4===t.code?(e.dialogVisible=!1,e.innerVisible=!1,e.$emit("handleUpdate"),e.open2()):e.open4()}))}},filesToRar:function(e,t){var i=this,a=new o.a,s={},n=[];i.title="正在加载压缩文件";var r,d=Object(l["a"])(e);try{var u=function(){var e=r.value,t=i.getImgArrayBuffer(e.fileUrl).then((function(t){a.file(e.renameFileName,t,{binary:!0}),s[e.renameFileName]=t}));n.push(t)};for(d.s();!(r=d.n()).done;)u()}catch(m){d.e(m)}finally{d.f()}Promise.all(n).then((function(){a.generateAsync({type:"blob"}).then((function(e){i.title="正在压缩",c.a.saveAs(e,t),i.title="压缩完成"}))})).catch((function(e){i.$message.error("文件压缩失败")}))},getImgArrayBuffer:function(e){return new Promise((function(t,i){var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="blob",a.onload=function(){200==this.status?t(this.response):i(this.status)},a.send()}))}}},m=u,f=(i("7c1f"),i("2877")),p=Object(f["a"])(m,a,s,!1,null,"12bd3207",null);t["default"]=p.exports},"9bc6":function(e,t,i){"use strict";var a=i("4acb"),s=i.n(a);s.a},b5d7:function(e,t,i){},b7be:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"f",(function(){return l})),i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return r}));var a=i("b775");function s(e){return Object(a["a"])({url:"/admin/Marketing/GetDataByList",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/admin/Marketing/PostStatusByData",method:"post",params:e})}function n(e){return Object(a["a"])({url:"/admin/Shopdemand/GetDataByShopDemanList",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/admin/Shopdemand/PostDataByUpdate",method:"get",params:{id:e}})}}}]);