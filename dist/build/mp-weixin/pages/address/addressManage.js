(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"56d7":function(t,e,a){"use strict";a.r(e);var i=a("924d"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"924d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("a34a")),n=a("802d"),r=a("2b74");function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,a,i,n,r,s){try{var u=t[r](s),d=u.value}catch(c){return void a(c)}u.done?e(d):Promise.resolve(d).then(i,n)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(i,n){var r=t.apply(e,a);function s(t){u(r,i,n,s,d,"next",t)}function d(t){u(r,i,n,s,d,"throw",t)}s(void 0)}))}}var c={data:function(){return{addressData:{realname:"",mobile:"",address_details:"",address_name:"请选择地址",address:"",is_default:!1,province_id:"",city_id:"",area_id:""},multiArray:[[],[],[]],multiIndex:[0,0,0]}},onLoad:function(t){this.initData(t)},methods:{initData:function(){var e=d(i.default.mark((function e(a){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="新增收货地址","edit"!==a.type){e.next=5;break}return n="编辑收货地址",e.next=5,this.getAddressDetail(a.id);case 5:return this.manageType=a.type,t.setNavigationBarTitle({title:n}),e.next=9,this.getProvinceList();case 9:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}(),getAddressDetail:function(){var t=d(i.default.mark((function t(e){var a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(n.addressDetail),{id:e}).then(function(){var t=d(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.addressData=e.data;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getProvinceList:function(){var t=d(i.default.mark((function t(){var e,a,n,s,u,c,l,o,h,f=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=0,a=0,n=0,s=null,u=null,c=null,l=null,o=null,h=null,t.next=11,this.$get("".concat(r.provinceList)).then(function(){var t=d(i.default.mark((function t(m){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return f.multiArray[0]=m.data,f.addressData.province_id?m.data.forEach((function(t,a){parseInt(t.id,10)==parseInt(f.addressData.province_id,10)&&(e=a,s=t.id,l=t.title)})):(s=f.multiArray[0][0].id,l=f.multiArray[0][0].title),t.next=4,f.$get("".concat(r.provinceList),{pid:s}).then(function(){var t=d(i.default.mark((function t(d){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return f.multiArray[1]=d.data,f.addressData.city_id?d.data.forEach((function(t,e){parseInt(t.id,10)==parseInt(f.addressData.city_id,10)&&(a=e,u=t.id,o=t.title)})):(u=f.multiArray[1][0].id,o=f.multiArray[1][0].title),t.next=4,f.$get("".concat(r.provinceList),{pid:u}).then((function(t){f.multiArray[2]=t.data,f.addressData.area_id?t.data.forEach((function(t,e){parseInt(t.id,10)==parseInt(f.addressData.area_id,10)&&(n=e,c=t.id,h=t.title)})):(c=f.multiArray[2][0].id,h=f.multiArray[2][0].title),f.multiIndex=[e,a,n],f.addressData.province_id=s,f.addressData.city_id=u,f.addressData.area_id=c,f.addressData.address_name="".concat(l,", ").concat(o,", ").concat(h)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),bindMultiPickerColumnChange:function(){var t=d(i.default.mark((function t(e){var a,n,s,u,c,l,o,h,f,m=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.multiIndex[e.detail.column]=e.detail.value,a=0,n=0,s=0,u=null,c=null,l=null,o=null,h=null,f=null,t.t0=e.detail.column,t.next=0===t.t0?13:1===t.t0?22:2===t.t0?39:60;break;case 13:t.t1=this.multiIndex[0],t.next=t.t1===this.multiIndex[0]?16:21;break;case 16:return u=this.multiArray[0][e.detail.value].id,o=this.multiArray[0][e.detail.value].title,t.next=20,this.$get("".concat(r.provinceList),{pid:this.multiArray[0][e.detail.value].id}).then(function(){var t=d(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return m.multiArray[1]=n.data,c=m.multiArray[1][0].id,h=m.multiArray[1][0].title,a=e.detail.value,m.multiIndex=[a,0,0],t.next=7,m.$get("".concat(r.provinceList),{pid:m.multiArray[1][e.detail.column].id}).then((function(t){m.multiArray[2]=t.data,l=m.multiArray[2][0].id,f=m.multiArray[2][0].title})).catch((function(t){console.log(t)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 20:return t.abrupt("break",21);case 21:return t.abrupt("break",60);case 22:t.t2=this.multiIndex[0],t.next=t.t2===this.multiIndex[0]?25:38;break;case 25:t.t3=this.multiIndex[1],t.next=t.t3===this.multiIndex[1]?28:37;break;case 28:return u=this.multiArray[0][this.multiIndex[0]].id,o=this.multiArray[0][this.multiIndex[0]].title,c=this.multiArray[1][e.detail.value].id,h=this.multiArray[1][e.detail.value].title,n=e.detail.value,this.multiIndex=[this.multiIndex[0],n,0],t.next=36,this.$get("".concat(r.provinceList),{pid:this.multiArray[1][e.detail.value].id}).then((function(t){m.multiArray[2]=t.data})).catch((function(t){console.log(t)}));case 36:return t.abrupt("break",37);case 37:return t.abrupt("break",38);case 38:return t.abrupt("break",60);case 39:t.t4=this.multiIndex[0],t.next=t.t4===this.multiIndex[0]?42:59;break;case 42:t.t5=this.multiIndex[1],t.next=t.t5===this.multiIndex[1]?45:58;break;case 45:t.t6=this.multiIndex[2],t.next=t.t6===this.multiIndex[2]?48:57;break;case 48:return u=this.multiArray[0][this.multiIndex[0]].id,o=this.multiArray[0][this.multiIndex[0]].title,c=this.multiArray[1][this.multiIndex[1]].id,h=this.multiArray[1][this.multiIndex[1]].title,l=this.multiArray[2][e.detail.value].id,f=this.multiArray[2][e.detail.value].title,s=e.detail.value,this.multiIndex=[this.multiIndex[0],this.multiIndex[1],s],t.abrupt("break",57);case 57:return t.abrupt("break",58);case 58:return t.abrupt("break",59);case 59:return t.abrupt("break",60);case 60:this.addressData.address_name="".concat(o,", ").concat(h,", ").concat(f),this.addressData.province_id=u,this.addressData.city_id=c,this.addressData.area_id=l,this.$forceUpdate();case 65:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleRealNameChange:function(t){this.addressData.realname=t.detail.value},bindAddressDetailsChange:function(t){this.addressData.address_details=t.detail.value},handleMobileChange:function(t){this.addressData.mobile=t.detail.value},switchChange:function(t){this.addressData.is_default=t.detail.value},chooseLocation:function(){var e=this;t.chooseLocation({success:function(t){e.addressData.addressName=t.name,e.addressData.address=t.name}})},confirm:function(){var t=this.addressData;t.realname?/(^1[3|4|5|7|8][0-9]{9}$)/.test(t.mobile)?"edit"===this.manageType?this.handleAddressUpdate(t):this.handleAddressCreate(t):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")},handleAddressUpdate:function(){var e=d(i.default.mark((function e(a){var r=this;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$put("".concat(n.addressUpdate,"?id=").concat(a.id),{realname:a.realname,mobile:a.mobile,address_details:a.address_details,is_default:a.is_default?1:0,province_id:a.province_id,city_id:a.city_id,area_id:a.area_id}).then((function(e){r.$api.msg("恭喜您, 收货地址修改成功！"),t.navigateBack()})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}(),handleAddressCreate:function(){var e=d(i.default.mark((function e(a){var r=this;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("".concat(n.addressCreate),{realname:a.realname,mobile:a.mobile,address_details:a.address_details,is_default:a.is_default?1:0,province_id:a.province_id,city_id:a.city_id,area_id:a.area_id}).then((function(e){r.$api.msg("恭喜您, 收货地址修改成功！"),t.navigateBack()})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()}};e.default=c}).call(this,a("543d")["default"])},"94bb":function(t,e,a){},c317:function(t,e,a){"use strict";a.r(e);var i=a("d4f5"),n=a("56d7");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e607");var s=a("2877"),u=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},d4f5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}))},e607:function(t,e,a){"use strict";var i=a("94bb"),n=a.n(i);n.a},f054:function(t,e,a){"use strict";(function(t){a("6cdc"),a("921b");i(a("66fd"));var e=i(a("c317"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["f054","common/runtime","common/vendor"]]]);