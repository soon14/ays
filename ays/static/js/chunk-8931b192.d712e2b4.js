(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8931b192"],{"3f22":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("el-dialog",{staticClass:"w-dia",attrs:{title:t.Stitle,visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(s){t.dialogVisible=s}}},[e("div",{staticClass:"n-post bc"},[e("el-dialog",{staticClass:"n-post",attrs:{width:"60%",title:"安装门店选择",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(s){t.innerVisible=s}}},[e("el-form",{staticClass:"form-container",attrs:{model:t.shopQuery,"label-width":"50px"}},[e("el-row",{staticClass:"nc"},[e("el-col",{attrs:{span:5}},[e("el-form-item",{staticClass:"postInfo-container-item",attrs:{size:"mini",label:"地址:"}},[e("el-cascader",{ref:"elcascader",attrs:{size:"mini",clearable:"",options:t.cityoptions,"change-on-select":""},on:{"visible-change":t.elCascaderOnlick,"expand-change":t.elCascaderOnlick},model:{value:t.shopQuery.cityCode,callback:function(s){t.$set(t.shopQuery,"cityCode",s)},expression:"shopQuery.cityCode"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-form-item",{staticClass:"postInfo-container-item",attrs:{size:"mini",label:"门店:"}},[e("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.shopList()}},model:{value:t.shopQuery.shopname,callback:function(s){t.$set(t.shopQuery,"shopname",s)},expression:"shopQuery.shopname"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-form-item",{staticClass:"postInfo-container-item",attrs:{size:"mini",label:"店主:"}},[e("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.shopQuery.shopkeeper,callback:function(s){t.$set(t.shopQuery,"shopkeeper",s)},expression:"shopQuery.shopkeeper"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-form-item",{staticClass:"postInfo-container-item",attrs:{size:"mini",label:"电话:"}},[e("el-input",{attrs:{size:"mini ",placeholder:"请输入内容"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.shopList()}},model:{value:t.shopQuery.tel,callback:function(s){t.$set(t.shopQuery,"tel",s)},expression:"shopQuery.tel"}})],1)],1),t._v(" "),e("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:2}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.shopList}},[t._v("搜索\n                            ")])],1)],1),t._v(" "),e("div",{staticStyle:{height:"450px","overflow-y":"scroll",padding:"10px"}},[e("ShList",{attrs:{list:t.shoplist,is_order:"是"},on:{handelToshop:t.handelToshop}})],1),t._v(" "),e("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"0px"}},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.shoptotal>0,expression:"shoptotal > 0"}],attrs:{"current-page":t.shopQuery.page,"page-sizes":[10,20,30,50],"page-size":t.shopQuery.limit,total:t.shoptotal,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1),t._v(" "),e("el-form",{ref:"postFrom",attrs:{model:t.postFrom,rules:t.rules,"label-width":"150px",size:"small"}},[e("div",{staticClass:"dia-content"},[e("div",{staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v("车主信息")]),t._v(" "),e("div",{staticClass:"c-content"},[e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("客户OpenID")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"openid"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.openid,callback:function(s){t.$set(t.postFrom,"openid",s)},expression:"postFrom.openid"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("购买账号")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"buy_account"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.buy_account,callback:function(s){t.$set(t.postFrom,"buy_account",s)},expression:"postFrom.buy_account"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("购买平台")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"lazada_list"}},[e("el-cascader",{attrs:{size:"mini",options:t.lazada,filterable:"",clearable:"",disabled:t.is_disabled},model:{value:t.postFrom.lazada_list,callback:function(s){t.$set(t.postFrom,"lazada_list",s)},expression:"postFrom.lazada_list"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("购买产品")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"buy_product_id"}},[e("el-cascader",{attrs:{size:"mini",options:t.productTree,filterable:"",clearable:"",disabled:t.is_disabled},model:{value:t.postFrom.buy_product_id,callback:function(s){t.$set(t.postFrom,"buy_product_id",s)},expression:"postFrom.buy_product_id"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("订单金额")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"no_price"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.no_price,callback:function(s){t.$set(t.postFrom,"no_price",s)},expression:"postFrom.no_price"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("联系人")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"contact"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.contact,callback:function(s){t.$set(t.postFrom,"contact",s)},expression:"postFrom.contact"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("联系电话")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"tel"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.tel,callback:function(s){t.$set(t.postFrom,"tel",s)},expression:"postFrom.tel"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("地址")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"city_code"}},[e("el-cascader",{staticStyle:{width:"100%"},attrs:{size:"mini",disabled:t.is_disabled,options:t.cityoptions},model:{value:t.postFrom.city_code,callback:function(s){t.$set(t.postFrom,"city_code",s)},expression:"postFrom.city_code"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("详细地址")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"city_desc"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.city_desc,callback:function(s){t.$set(t.postFrom,"city_desc",s)},expression:"postFrom.city_desc"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("车牌号")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"number_plate"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.number_plate,callback:function(s){t.$set(t.postFrom,"number_plate",s)},expression:"postFrom.number_plate"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("车型")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"car_model"}},[e("el-cascader",{attrs:{size:"mini",props:t.props,filterable:"",clearable:"",disabled:t.is_disabled},on:{change:t.handleModel},model:{value:t.postFrom.car_model,callback:function(s){t.$set(t.postFrom,"car_model",s)},expression:"postFrom.car_model"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("备注")]),t._v(" "),e("div",{staticClass:"c-input"},["修改"===t.postFrom.status?e("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.postFrom.desc,callback:function(s){t.$set(t.postFrom,"desc",s)},expression:"postFrom.desc"}}):e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.desc,callback:function(s){t.$set(t.postFrom,"desc",s)},expression:"postFrom.desc"}})],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("提交时间")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.create_time,callback:function(s){t.$set(t.postFrom,"create_time",s)},expression:"postFrom.create_time"}})],1)])])]),t._v(" "),e("div",{staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v("派单信息")]),t._v(" "),e("div",{staticClass:"c-content"},[e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("购买单号")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"buy_order_no"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.buy_order_no,callback:function(s){t.$set(t.postFrom,"buy_order_no",s)},expression:"postFrom.buy_order_no"}})],1)],1)]),t._v(" "),null===t.postFrom.shop_id&&1===t.postFrom.is_rejected?e("div",{staticClass:"ct-item nc"},[e("span",{staticClass:"label"},[t._v("旧门店")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"shop_id"}},[e("el-select",{attrs:{size:"mini",disabled:"",filterable:"",placeholder:"请选择"},on:{focus:t.handelInn},model:{value:t.postFrom.last_shop,callback:function(s){t.$set(t.postFrom,"last_shop",s)},expression:"postFrom.last_shop"}})],1)],1)]):t._e(),t._v(" "),t.innerVisible?t._e():e("div",{staticClass:"ct-item nc"},[e("span",{staticClass:"label"},[t._v("门店名称")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"shop_id"}},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},on:{focus:t.handelInn},model:{value:t.postFrom.shop_id,callback:function(s){t.$set(t.postFrom,"shop_id",s)},expression:"postFrom.shop_id"}},t._l(t.shop,(function(t){return e("el-option",{attrs:{label:t.shopname,value:t.id}})})),1)],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("门店地址")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"shop_location"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.shop_location,callback:function(s){t.$set(t.postFrom,"shop_location",s)},expression:"postFrom.shop_location"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("门店电话")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"shop_tel"}},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.shop_tel,callback:function(s){t.$set(t.postFrom,"shop_tel",s)},expression:"postFrom.shop_tel"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("结算方式")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",clearable:"",disabled:"",filterable:"",placeholder:"请选择"},model:{value:t.postFrom.to_hang,callback:function(s){t.$set(t.postFrom,"to_hang",s)},expression:"postFrom.to_hang"}},t._l(t.hang,(function(t){return e("el-option",{attrs:{label:t.lable,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("建档名")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.buildarc,callback:function(s){t.$set(t.postFrom,"buildarc",s)},expression:"postFrom.buildarc"}})],1)],1)]),t._v(" "),null!==t.postFrom.salesman_id||1!==t.postFrom.is_rejected||t.postFrom.is_sale?t._e():e("div",{staticClass:"ct-item nc"},[e("span",{staticClass:"label"},[t._v("旧业务员")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"shop_id"}},[e("el-select",{attrs:{size:"mini",disabled:"",filterable:"",placeholder:"请选择"},model:{value:t.postFrom.last_salesman,callback:function(s){t.$set(t.postFrom,"last_salesman",s)},expression:"postFrom.last_salesman"}})],1)],1)]),t._v(" "),t.postFrom.is_sale?t._e():e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("主业务员")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",clearable:"",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.salesman_id,callback:function(s){t.$set(t.postFrom,"salesman_id",s)},expression:"postFrom.salesman_id"}},t._l(t.salesman,(function(s){return e("el-option",{attrs:{label:s.realName,value:s.id,disabled:t.postFrom.in_salesman_id===s.id}})})),1)],1)]),t._v(" "),t.postFrom.is_sale?t._e():e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("次业务员")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",clearable:"",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.in_salesman_id,callback:function(s){t.$set(t.postFrom,"in_salesman_id",s)},expression:"postFrom.in_salesman_id"}},t._l(t.salesman,(function(s){return e("el-option",{attrs:{label:s.realName,value:s.id,disabled:t.postFrom.salesman_id===s.id}})})),1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("安装费用")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-form-item",{attrs:{prop:"ins_cost"}},[e("el-input",{attrs:{disabled:t.is_disabled,size:"mini",placeholder:"请输入内容"},model:{value:t.postFrom.ins_cost,callback:function(s){t.$set(t.postFrom,"ins_cost",s)},expression:"postFrom.ins_cost"}})],1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("客服")]),t._v(" "),e("div",{staticClass:"c-input"},[e("div",{staticClass:"c-input"},["修改"===t.postFrom.status?e("el-select",{attrs:{size:"mini",clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.postFrom.pre_sales,callback:function(s){t.$set(t.postFrom,"pre_sales",s)},expression:"postFrom.pre_sales"}},t._l(t.adminll,(function(t){return e("el-option",{attrs:{label:t.realName,value:t.id}})})),1):e("el-select",{attrs:{size:"mini",clearable:"",filterable:"",disabled:"",placeholder:"请选择"},model:{value:t.postFrom.pre_sales,callback:function(s){t.$set(t.postFrom,"pre_sales",s)},expression:"postFrom.pre_sales"}},t._l(t.adminll,(function(t){return e("el-option",{attrs:{label:t.realName,value:t.id}})})),1)],1)])]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("客服备注")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.service_desc,callback:function(s){t.$set(t.postFrom,"service_desc",s)},expression:"postFrom.service_desc"}})],1)]),t._v(" "),"待处理"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("派单时间")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",value:t._f("parseTime")(t.postFrom.send_time,"{y}-{m}-{d} {h}:{i}:{s}"),placeholder:"请输入内容"}})],1)]):t._e(),t._v(" "),"已安装"===t.postFrom.status||"待安装"===t.postFrom.status||"已结算"===t.postFrom.status||"待结算"===t.postFrom.status||"财审1"===t.postFrom.status||"财审2"===t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("核销码")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.verification_code,callback:function(s){t.$set(t.postFrom,"verification_code",s)},expression:"postFrom.verification_code"}})],1)]):t._e()])]),t._v(" "),e("div",{staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v("配件信息")]),t._v(" "),e("div",{staticClass:"c-content"},[e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("支架")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.holder,callback:function(s){t.$set(t.postFrom,"holder",s)},expression:"postFrom.holder"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("易改件")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.ygj,callback:function(s){t.$set(t.postFrom,"ygj",s)},expression:"postFrom.ygj"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("装饰罩")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.decorate,callback:function(s){t.$set(t.postFrom,"decorate",s)},expression:"postFrom.decorate"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)]):t._e(),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("解码")]),t._v(" "),e("div",{staticClass:"d_code"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.is_code,callback:function(s){t.$set(t.postFrom,"is_code",s)},expression:"postFrom.is_code"}},t._l(t.holder,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1),t._v(" "),"无"!==t.postFrom.is_code?e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.code,callback:function(s){t.$set(t.postFrom,"code",s)},expression:"postFrom.code"}}):t._e()],1)]):t._e(),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("近光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.low_beam,callback:function(s){t.$set(t.postFrom,"low_beam",s)},expression:"postFrom.low_beam"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("远光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.in_the,callback:function(s){t.$set(t.postFrom,"in_the",s)},expression:"postFrom.in_the"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)])])]),t._v(" "),"待安装"===t.postFrom.status?e("div",{staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"c-content"},[e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("装饰罩")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.decorate,callback:function(s){t.$set(t.postFrom,"decorate",s)},expression:"postFrom.decorate"}},t._l(t.ygj,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("解码")]),t._v(" "),e("div",{staticClass:"d_code"},[e("el-select",{attrs:{size:"mini",disabled:t.is_disabled,filterable:"",placeholder:"请选择"},model:{value:t.postFrom.is_code,callback:function(s){t.$set(t.postFrom,"is_code",s)},expression:"postFrom.is_code"}},t._l(t.holder,(function(t){return e("el-option",{attrs:{label:t.label,value:t.value}})})),1),t._v(" "),"无"!==t.postFrom.is_code?e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.code,callback:function(s){t.$set(t.postFrom,"code",s)},expression:"postFrom.code"}}):t._e()],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("近光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.low_beam_text,callback:function(s){t.$set(t.postFrom,"low_beam_text",s)},expression:"postFrom.low_beam_text"}})],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("远光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:t.is_disabled,placeholder:"请输入内容"},model:{value:t.postFrom.in_the_text,callback:function(s){t.$set(t.postFrom,"in_the_text",s)},expression:"postFrom.in_the_text"}})],1)])])]):t._e(),t._v(" "),"重新派单"===t.postFrom.status||"待处理"===t.postFrom.status||"待确认(业务)"===t.postFrom.status||" 待确认(门店)"===t.postFrom.status||"待确认(门店)"===t.postFrom.status||" 待安装"===t.postFrom.status||1===t.postFrom.status||2===t.postFrom.status||3===t.postFrom.status||4===t.postFrom.status||5===t.postFrom.status?e("div",{staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v("配货方案")]),t._v(" "),e("div",{staticClass:"c-content"},[e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("支架")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.holder_text,callback:function(s){t.$set(t.postFrom,"holder_text",s)},expression:"postFrom.holder_text"}})],1)]),t._v(" "),e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("易改件")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.ygj_text,callback:function(s){t.$set(t.postFrom,"ygj_text",s)},expression:"postFrom.ygj_text"}})],1)]),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("装饰罩")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.decorate_text,callback:function(s){t.$set(t.postFrom,"decorate_text",s)},expression:"postFrom.decorate_text"}})],1)]):t._e(),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("解码")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.code_text,callback:function(s){t.$set(t.postFrom,"code_text",s)},expression:"postFrom.code_text"}})],1)]):t._e(),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("近光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.low_beam_text,callback:function(s){t.$set(t.postFrom,"low_beam_text",s)},expression:"postFrom.low_beam_text"}})],1)]):t._e(),t._v(" "),"待安装"!==t.postFrom.status?e("div",{staticClass:"ct-item"},[e("span",{staticClass:"label"},[t._v("远光转接线")]),t._v(" "),e("div",{staticClass:"c-input"},[e("el-input",{attrs:{size:"mini",disabled:"",placeholder:"请输入内容"},model:{value:t.postFrom.in_the_text,callback:function(s){t.$set(t.postFrom,"in_the_text",s)},expression:"postFrom.in_the_text"}})],1)]):t._e()])]):t._e(),t._v(" "),"已安装"===t.postFrom.status||"财审1"===t.postFrom.status||"财审2"===t.postFrom.status||"待结算"===t.postFrom.status?e("div",{directives:[{name:"else",rawName:"v-else"}],staticClass:"c-data"},[e("div",{staticClass:"c-title"},[t._v("安装凭证")]),t._v(" "),t.postFrom.credentials?e("div",{staticClass:"c-content"},[e("img",{staticClass:"credentials-img",attrs:{src:t.postFrom.credentials},on:{click:function(s){return t.handleImg(t.postFrom.credentials)}}})]):e("div",{staticStyle:{width:"120px",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center",height:"80px",border:"1px solid #9999","border-radius":"5px"}},[t._v("\n                        暂无\n                    ")])]):t._e()])]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["新增"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("确认添加")]):t._e(),t._v(" "),"修改"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("修改")]):t._e(),t._v(" "),"待处理"===t.postFrom.status||"重新派单"===t.postFrom.status?[e("el-checkbox",{on:{change:t.handelSale},model:{value:t.postFrom.is_sale,callback:function(s){t.$set(t.postFrom,"is_sale",s)},expression:"postFrom.is_sale"}},[t._v("跳过业务员")]),t._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("派单")])]:t._e(),t._v(" "),"待确认(业务)"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("同意派单")]):t._e(),t._v(" "),"待确认(门店)"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("接单")]):t._e(),t._v(" "),"待安装"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("完成安装")]):t._e(),t._v(" "),"已安装"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("确认安装")]):t._e(),t._v(" "),"财审1"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("审核通过")]):t._e(),t._v(" "),"财审2"===t.postFrom.status?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateRow}},[t._v("审核通过")]):t._e(),t._v(" "),"待结算"===t.postFrom.status&&t.postFrom.to_hang===parseInt(0)?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){return t.updateRow(1)}}},[t._v("加余额")]):t._e(),t._v(" "),"待结算"===t.postFrom.status&&t.postFrom.to_hang===parseInt(1)?e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){return t.updateRow(2)}}},[t._v("挂帐")]):t._e(),t._v(" "),e("el-button",{attrs:{size:"mini"},on:{click:t.handleClose}},[t._v("取 消")])],2)],1)],1)},i=[],o=(e("ac6a"),e("db72")),l=(e("7f7f"),e("121a")),r=e("17d0"),n=e("50fc"),c=e("3ef6"),d=(e("ef6c"),e("2f62")),p=e("e692"),m=e("c591"),u=e("f8b7"),_=e("31cf"),v=e("ed08"),b=e("c4c8"),h=e("97cb"),F=e("ae8a"),f={logcontent:"",openid:"oQJN40ldFZYLvqoIZm3NGwFu8oKA",lazada_id:"",lazada_list:"",lazada_index:"",buy_order_no:"12123",buy_account:"199",buy_product_id:"",no_price:"199",contact:"梁泽祥",tel:"18677947067",city_code:void 0,city_desc:"",number_plate:"A871237",car_model:void 0,car_index:"",car_model_id:""},C={name:"sendOrder",data:function(){return{hang:[{lable:"加余额",value:0},{lable:"挂帐",value:1}],props:{lazy:!0,lazyLoad:function(t,s){var e=t.level;if(console.log(e,t),0===e&&Object(l["b"])().then((function(t){for(var e=t.data,a=[],i=0;i<e.length;i++)a.push({label:e[i].name,value:e[i].brandid});s(a)})),1===e&&Object(l["d"])(t.data.value).then((function(t){for(var e=t.data,a=[],i=0;i<e.length;i++)a.push({label:e[i].factory_name+" "+e[i].series_name,value:e[i].series_id});s(a)})),2===e&&Object(l["c"])(t.data.value).then((function(t){for(var a=t.data,i=[],o=0;o<a.length;o++)i.push({label:a[o].label,value:a[o].value,leaf:e>=2});s(i)})),3===e){var a=[];s(a)}}},adminll:[],shopname:"",shopQuery:{cityCode:void 0,shopname:void 0,page:1,limit:10,tel:void 0},innerVisible:!1,checked:!0,tableKey:0,CarModellist:[],lazada:[],salesman:[],holder:[{label:"无",value:"无"},{label:"解码器",value:"解码器"},{label:"解码线组",value:"解码线组"},{label:"宝典到店",value:"宝典到店"}],ygj:[{label:"无",value:"无"},{label:"随货发",value:"随货发"},{label:"供应商代发",value:"供应商代发"},{label:"支架",value:"支架"}],device:[],carl:[],list:null,total:null,cityoptions:[],selectedRows:null,listLoading:!0,showSearch:!1,options:[],shop:[],shoplist:[],shoptotal:0,listQuery:{page:1,limit:10,status:"-1",title:""},buttonDisabled:!0,deleting:!1,pickerOptions:v["j"],currentIndex:-1,productTree:[],regionHiera:[],rules:{openid:[{required:!0,trigger:"blur"}],buy_account:[{required:!0,trigger:"blur"}],lazada_list:[{required:!0,trigger:"blur"}],buy_product_id:[{required:!0,trigger:"blur"}],no_price:[{required:!0,trigger:"blur"}],contact:[{required:!0,trigger:"blur"}],tel:[{required:!0,trigger:"blur"}],city_code:[{required:!0,trigger:"blur"}],city_desc:[{required:!0,trigger:"blur"}],number_plate:[{required:!0,trigger:"blur"}],car_model:[{required:!0,trigger:"blur"}],buy_order_no:[{required:!0,trigger:"blur"}],shop_id:[{required:!0,trigger:"blur"}],shop_tel:[{required:!0,trigger:"blur"}],ins_cost:[{required:!0,trigger:"blur"}]}}},computed:Object(o["a"])({},Object(d["b"])(["userinfo","brand"])),components:{ShList:c["a"]},props:{postFrom:{type:Object,default:function(){return Object.assign({},f)}},Stitle:{type:String,default:""},is_disabled:{type:Boolean,default:!1},dialogVisible:{type:Boolean,default:!1}},created:function(){var t=this;Object(n["a"])().then((function(s){t.adminll=s.data})),Object(m["a"])().then((function(s){t.cityoptions=s.data})),this.shopList(),Object(b["f"])().then((function(s){t.productTree=s.data})),Object(_["c"])().then((function(s){t.lazada=s.data})),Object(r["a"])().then((function(s){t.salesman=s.data}));for(var s=this.postFrom.city_code,e=0;e<s.length;e++)s[e]=parseInt(s[e]);if(this.postFrom.city_code=s,"待处理"===this.postFrom.status&&(this.postFrom.pre_sales=this.userinfo.id),void 0!==this.postFrom.car_model){var a=this.postFrom.car_model,i=a[a.length-1];void 0!==i&&Object(F["a"])(i).then((function(s){t.postFrom.holder_text=s.data.holder,t.postFrom.ygj_text=s.data.ygj,t.postFrom.code_text=s.data.is_code,t.postFrom.decorate_text=s.data.decorate_text,t.postFrom.in_the_text=s.data.in_the,t.postFrom.low_beam_text=s.data.low_beam}))}console.log(this.postFrom.car_model)},methods:{handleImg:function(t){Object(h["a"])(t,"图片预览","500","400")},elCascaderOnlick:function(){var t=this;setTimeout((function(){document.querySelectorAll(".el-cascader-node__label").forEach((function(s){s.onclick=function(){this.previousElementSibling.click(),t.$refs.elcascader.dropDownVisible=!1}})),document.querySelectorAll(".el-cascader-panel .el-radio").forEach((function(s){s.onclick=function(){t.$refs.elcascader.dropDownVisible=!1}}))}),100)},handelSale:function(t){t&&(this.postFrom.salesman_id=void 0)},handleSizeChange:function(t){this.shopQuery.limit=t,this.shopList()},handleStatusChange:function(t){this.shopQuery.page=1,this.shopList()},handleCurrentChange:function(t){this.shopQuery.page=t,this.shopList()},handleModel:function(t){var s=this,e=t[t.length-1];void 0!==e?Object(F["b"])(e).then((function(t){s.postFrom.holder_text=t.data[0].holder,s.postFrom.ygj_text=t.data[0].ygj,s.postFrom.code_text=t.data[0].is_code,s.postFrom.decorate_text=t.data[0].decorate_text,s.postFrom.in_the_text=t.data[0].in_the,s.postFrom.low_beam_text=t.data[0].low_beam})):this.list=[]},shopList:function(){var t=this;Object(p["a"])(this.shopQuery).then((function(s){t.shoplist=s.data.data,t.shoptotal=s.data.total}))},handelToshop:function(t){var s=this;this.postFrom.shop_id=parseInt(t.id);var e={shop_id:t.id};Object(p["b"])(e).then((function(t){s.shop=t.data})),this.postFrom.shop_location=t.cityName+" "+t.location,this.postFrom.shop_tel=t.tel,this.postFrom.buildarc=t.buildarc,this.postFrom.to_hang=t.to_hang,this.innerVisible=!this.innerVisible},handelInn:function(){this.shop=[],this.innerVisible=!this.innerVisible,this.shopQuery.cityCode=this.postFrom.city_code},handleClose:function(){this.$emit("handleClose")},updateRow:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs["postFrom"].validate((function(s){if(console.log(s),!s)return t.$message.error("请检查必填项"),!0}));var e=this.postFrom;return 0===this.postFrom.car_model.length?(this.$message.error("车型未选"),!0):0===this.postFrom.city_code.length?(this.$message.error("地址未选"),!0):0===this.postFrom.lazada_list.length?(this.$message.error("平台未选"),!0):0===this.postFrom.buy_product_id.length||0===this.postFrom.buy_product_id.length?(this.$message.error("产品未选"),!0):this.postFrom.is_sale||0!==this.postFrom.salesman_id&&0!==this.postFrom.salesman_id.length?(this.postFrom.brand_id=this.postFrom.car_model[0],this.postFrom.series_id=this.postFrom.car_model[1],this.postFrom.model_id=this.postFrom.car_model[2],this.postFrom.suit_id=this.postFrom.buy_product_id[0],this.postFrom.product_id=this.postFrom.buy_product_id[1],this.postFrom.city_code=this.postFrom.city_code.join(","),this.postFrom.car_model=this.postFrom.car_model.join(","),this.postFrom.lazada_list=this.postFrom.lazada_list.join(","),this.postFrom.buy_product_id=this.postFrom.buy_product_id.join(","),"待处理"===this.postFrom.status&&(this.postFrom.status=1,this.postFrom.pre_sales=this.userinfo.id,this.postFrom.logcontent="待确认(业务员) "+this.userinfo.realName+"派单 , 已通知"),"重新派单"===this.postFrom.status&&(this.postFrom.status=1,this.postFrom.logcontent="待确认(业务员) "+this.userinfo.realName+"派单,  已通知"),"待确认(业务)"===this.postFrom.status&&(this.postFrom.status=2,this.postFrom.logcontent="待确认(门店) "+this.userinfo.realName+"同意派单,"),"待确认(门店)"===this.postFrom.status&&(this.postFrom.status=3,this.postFrom.logcontent="待安装 "+this.userinfo.realName+"接单,"),"待安装"===this.postFrom.status&&(this.postFrom.status=4,this.postFrom.logcontent="已安装 "+this.userinfo.realName+"安装完成,"),"已安装"===this.postFrom.status&&(this.postFrom.status=5,this.postFrom.after_sale=this.userinfo.id,this.postFrom.logcontent="财审1 "+this.userinfo.realName+"确认安装,"),"财审1"===this.postFrom.status&&(this.postFrom.status=6,this.postFrom.logcontent="财审2 "+this.userinfo.realName+"审核通过,"),"财审2"===this.postFrom.status&&(this.postFrom.status=7,this.postFrom.logcontent="待结算 "+this.userinfo.realName+"结算通过,"),"待结算"===this.postFrom.status&&(this.postFrom.status=8,this.postFrom.is_pay=s,1===s&&(this.postFrom.logcontent="已结算 "+this.userinfo.realName+"加余额,"),2===s&&(this.postFrom.logcontent="已结算 "+this.userinfo.realName+"抵欠款,")),"修改"===this.postFrom.status&&(this.postFrom.is_di=1,this.postFrom.logcontent=this.userinfo.realName+"进行了订单修改,"),this.postFrom.is_sale&&1===this.postFrom.status&&(this.postFrom.status=2,this.postFrom.logcontent="待确认(门店) "+this.userinfo.realName+"同意派单,"),void Object(u["g"])(this.postFrom).then((function(s){t.$emit("handleClose"),t.postFrom=Object.assign({},f),t.postFrom=e,t.$message.success("操作完成")}))):(this.$message.error("请先选择业务员"),!0)}},mounted:function(){var t=this;1===this.postFrom.is_sale?this.postFrom.is_sale=!0:this.postFrom.is_sale=!1;var s={shop_id:this.postFrom.shop_id};Object(p["b"])(s).then((function(s){t.shop=s.data}))}},y=C,g=(e("6ae8"),e("2877")),x=Object(g["a"])(y,a,i,!1,null,"0cb62953",null);s["default"]=x.exports},"50fc":function(t,s,e){"use strict";e.d(s,"f",(function(){return i})),e.d(s,"g",(function(){return o})),e.d(s,"h",(function(){return l})),e.d(s,"i",(function(){return r})),e.d(s,"d",(function(){return n})),e.d(s,"b",(function(){return c})),e.d(s,"e",(function(){return d})),e.d(s,"c",(function(){return p})),e.d(s,"a",(function(){return m}));var a=e("b775");function i(t){return Object(a["a"])({url:"/admin/admin/index",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/admin/admin/getinfo",method:"get",params:{id:t}})}function l(t){return Object(a["a"])({url:"/admin/admin/modify",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/admin/admin/save",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/admin/admin/del",method:"get",params:{id:t}})}function c(t,s,e){var i={val:t,field:s,value:e};return Object(a["a"])({url:"/admin/admin/change",method:"post",data:i})}function d(t){return Object(a["a"])({url:"/admin/admin/delall",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/admin/admin/changeall",method:"post",data:t})}function m(){return Object(a["a"])({url:"/admin/admin/adminall",method:"get"})}},5420:function(t,s,e){},"6ae8":function(t,s,e){"use strict";var a=e("5420"),i=e.n(a);i.a},ae8a:function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return o})),e.d(s,"d",(function(){return l})),e.d(s,"a",(function(){return r}));var a=e("b775");function i(t){return Object(a["a"])({url:"/admin/CarLamp/GetModelIdByInfo",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/admin/CarLamp/PostDataBySave",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/admin/CarLamp/importCarLamp",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/admin/CarLamp/GetCarlampInfo",method:"get",params:{model_id:t}})}},c4c8:function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"g",(function(){return o})),e.d(s,"h",(function(){return l})),e.d(s,"c",(function(){return r})),e.d(s,"d",(function(){return n})),e.d(s,"a",(function(){return c})),e.d(s,"k",(function(){return d})),e.d(s,"j",(function(){return p})),e.d(s,"i",(function(){return m})),e.d(s,"e",(function(){return u})),e.d(s,"f",(function(){return _}));var a=e("b775");function i(t){return Object(a["a"])({url:"/admin/ProductClass/GetDataByList",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/admin/ProductClass/PostDataByAdd",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/admin/ProductClass/PostDataByUpSort",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/admin/ProductClass/GetIdByDelete",method:"post",data:t})}function n(t){var s={id:t};return Object(a["a"])({url:"/admin/Product/GetInfoById/GetInfoById",method:"post",data:s})}function c(t){return Object(a["a"])({url:"/admin/ProductClass/GetDataByAll",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/admin/Product/GetDataByList",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/admin/Product/GetIdByDelete",method:"post",data:{id:t}})}function m(t){return Object(a["a"])({url:"/admin/Product/PostDataByAdd",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/admin/Product/GetDataByAll",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/admin/Product/GetProductByTree",method:"post",data:t})}}}]);