(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"0144":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"address-section"},[i("v-uni-view",{staticClass:"order-content"},[i("i",{staticClass:"iconfont iconshouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(e.orderDetail.receiver_name))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(e.orderDetail.receiver_mobile))])],1),i("v-uni-text",{staticClass:"address"},[e._v(e._s(e.orderDetail.receiver_region_name)+" "+e._s(e.orderDetail.receiver_address))])],1)],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvVHce/1/deXzuJHSdOM+fhpKMllI2SkTZpV6ULYrCHQGwrf41p/LENVk3QTipSWujKoyot1aQN0FYQQxtsMCS2SVuqsfFYHxBKYQNGV9ouZdA8nDipH4mT+HFf+51rO0pN0japrw9HreLe3Pqc3/me3+f3uFdIvfVuDIAPix1C9oceicFRVQWlvRWCkL1omqb1Of9z9rXZY65rhcO6x5ove19oWkX/RAaSMLOEkg+2Zt0wEcvoWOZzYZnXeWEbzmP7XPs11//LnOiDEY9DkGRwGw5a59QUTM2As+1qiD5v0TUvvC9Bc52KpmDSnju4ic7+CIinNVQoElYtcUM8jx2L1bzwPn14DOrHZ0hzEdxOPJtW16FH45CvuBzyZU22aH7Od9LnU/E0xpMqJG6iZ309qeqYNoA1gTJ4ZdF2zY2pJNSTfYCmkb85+GnO1hIbh+DzQVndaiHYTs3ZGJpifE/DyVnzi+X7pWqen8/i+8kPYUSjEORPCd9XtUKs9Fi+KMxjVzE0n9ZNnIgkYXwK+B5LafC4JKyudcMxD2+LqblGfNcY30VxJsfhcOCJ7xr02ATkluXE96DtmrPvPxFLIUH7zY3vOc0Z39O0oGtqy1DlFIuu+Zx8P/Ffa8/hEBey4rh0uuPWS6S6CRUhyGjG0hcfOWex+c9zXSsE5HmFzseP3H294Sl847VBRGJJQHTwy9wJNKAE7otLfXi2K3hRgeB81+bar8IDEPvFMxi6cxebnMx2cjrnDmiIwUAGDTvugX9de9E1L7R9NK1jc+8gnj8dy2rOKY/JRhgV8Cr405ea0HEBOxajeaHtySPvYvD2bUgdP0lmuzkl7oLl6Wn0wX/Dd1D/xG5bNc/f+7NjY9jyzghlM5QxS/ySOGt+Wlt3WwDXBz22a86gHrqjG7Hnekhz5uciN9NVDEBxXYng87vgEoqveZ7y+XsPE99vOTyAs1SkU+bOT3NKIJHUsIb4/rsL8L0YmrMRffQ3GNn8c6L7BOnu4pW10/xR4nsK9T+5FzWda2fXcEXTfLbtYUrc7joSwguno9kilZfsLNmgtaBcxv7rmudN2i9Fc8YRlsvkr6aOvoeBHxDf//MBzVfGke9p8vVhVN2wAQ1P7rFdczYeO34Wm4+Gsr4mcqzWMqQ5IX5rex3W1pUXX/PCRlwkjpEtDyLy9B8sPxcgLWzFpy7rWlTH3eq66AbUj0fh7lyJhn27oFzVck41mTdgdnU5+3fzbczsqqVwQ14aSuCrhwZoo3UEqCLW6biZJZZZom0e0UhlSiY3rvBjd0cdfLJjTrsXYvN8e5TvPEZ2PYbw9l9CrKqAWFNB+2+W/oiTc2l9BFefC/WPdqPyuxts1/zMlIrbqVB7OZSgaSWrC2eUWHUGcLa2MVrLyho3ftvVhNYq1ye6J8XUnI3JFw8idNdOaB+GIS+vsZhf6gMvsP1OJKGFx1H9o1sQeOSBXOcfc9pQDM3Z2PGvEeykxJ0l7AGaTyux4YKVLpOvs0BO/v0UQf17LdUzwdcskuaFHRo1NIrQxq1I9ByEc2kj+ZwDZsk1z/H9I+L7us+j4fHdUFa2FF3zQtv3DyTwrTcGoVFxXOeWKZEoPeNm+E66b7zSj71r6+ERHXN21C5V85nPmo7I3scRvncfxOoyiP7y0vNdyMZ17X9xmGR+43MPwvvtm23XnPH9h68P4u8U2yuJ7wonvmu0pigValf73XhmfRCt1S5bNbd6QK/0ov+2bhjDE8T3aj58p5hujCehjsZQs+lWLNl5N0RvuS2a5z/T8cLOd8K4/72wxdaAXHq+syGT7sOM7xLxvaOe+F5lu+bqYBjDd25H4s+vQ26ugSBL1lsEC+m4C8fQvMhXZXTa/CR8N96MekrapWCdvc1t+rvn32PY3juYrc7cEjjonFuMYQm97QsBPLSq1v7pKJAPbbwHZ3ueoqCyhJIJStqto8/BdMTh8q1A8PcPo+xrXbbP97ehSXydFWpjU0CZzO8xInM+CqSdTV688OVmBBT7O6DRh/dhYOt20nqSdK+f1RIqdRMqRXgrR90Dm+Dfsdn2+QYpeH7/8CBe+mAsq7nIsevKEjivgv1dQdzYUGH7dMlXe3FmwxZMTRyFgiZkW48mF0/XMYWqm75JfH8IUmPA1tlUMnHv+8T3N3J8d3Hkey6I3re6Djvaam1v/urhswjdsQ2jf/kVJRI1xHdPrh1lltzTWUxXai5H07N74P7KettnPDQyjWtf/ohglyJfl7jz/drP+vDrzgYsLZdtP2PRnz6B/u4t9I+U9cYCH81hddoFuBG4bxNq7v9xSfh+G/H9wKkIwF5JkR38fF3VLb73dDXhpsYS8P0Vxve7MZ14E04EkX2SumDj40Lkjz2LS9x1nZVqcK1rh1L/GaiZDB1GYwGPRi9+sA4r63odGEjAoKTZS0mTwUtoS2sTPioc1jd64KJqNZXRP9EtLFrLT5KQOd6H1JtvQ/SUQ1CUC1Z/tjp5MgXn51bAfc1VpAUVb6pqi+bsqRlrOB0ITSI0kUa1IvF7JcribPbxZnt9BYIeBZm0ap1BO2yHLMOIxjH111chmDocXg9XzZFR4fD74e5cA9GtQEulbLGbfaNMvv4+BfG3hiet9wxlUeDGdDPn68uqXVgVKKezbiBN/HHYoTnrqlORkDx0BHr/ABzVVbknbZysZ3wnRVyda6HU1UIjvpt28p2C+T+GEtYeeEh3jqcdKjl2BcWY65q9UAQb+c6+k3iePnaS+P5Pq8spOJ38fJ09RVI1OFuWo6xtJXSD+J6xh++OHN8PEt8HxtNY4pbAczC+m2Rnh8V3J9Q0Fa4LeG97YQdehj4aoSL9NZiZNMTKStp6g5/x5NsW37vWQaS1WXzPHvjihzYS/lgshbeJ75WySHm7wNXXk8SbK/xutOX4ntHtYRxE0eJn6uARaGf6ie++7GPNxVkf/78AAwCn1+RYqusbZQAAAABJRU5ErkJggg=="}})],1),i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-text",{staticClass:"name"},[e._v("商品列表")]),i("v-uni-text",{staticClass:"name red"},[e._v(e._s(e._f("orderStatusFilter")(e.orderDetail.order_status)))])],1),e._l(e.orderDetail.product,(function(t,a){return i("v-uni-view",{key:a,staticClass:"g-item",on:{click:function(i){i=e.$handleEvent(i),e.navTo("/pages/product/product?id="+t.product_id)}}},[i("rf-image",{attrs:{src:t.product_picture}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp in2line"},[e._v(e._s(t.product_name))]),i("v-uni-text",{staticClass:"spec"},[e._v(e._s(t.sku_name||"基础款"))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price-wrapper"},[i("v-uni-text",{staticClass:"price"},[e._v("￥ "+e._s(t.price))]),i("v-uni-text",{staticClass:"number"},[e._v("* "+e._s(t.num))])],1),"1"==t.shipping_status?i("v-uni-text",{staticClass:"status",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.navTo("/pages/order/shipping?id="+t.order_id)}}},[e._v("查看物流")]):e._e(),i("v-uni-text",{staticClass:"status"},[e._v(e._s(e._f("filterProductStatus")(t)))])],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e.orderDetail.coupon&&e.orderDetail.coupon.title||"未使用优惠券"))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("寄")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("配送方式")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e._f("filterShippingType")(e.orderDetail.shipping_type)))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.orderDetail.company_name,expression:"orderDetail.company_name"}],staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("司")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("快递公司")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e.orderDetail.company_name))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),"积分兑换"!=e.orderDetail.payment_explain?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[e._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("积分抵扣")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[e._v("已用"+e._s(e.orderDetail.point||0)+"积分抵用"+e._s(e.orderDetail.point_money||0)+"元")])],1):i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[e._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("积分下单")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[e._v("消耗了"+e._s(e.orderDetail.point||0)+"积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("￥"+e._s(e.orderDetail.product_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("-￥ "+e._s(e.orderDetail.coupon_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("运费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[e._v("￥ "+e._s(e.orderDetail.shipping_money))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.orderDetail.invoice,expression:"orderDetail.invoice"}],staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("开具发票")]),i("v-uni-text",{staticClass:"cell-tip red in1line"},[i("v-uni-text",[e._v(e._s("电子发票 -"+(1===parseInt(e.orderDetail.invoice&&e.orderDetail.invoice.type,10)?"公司":"个人")+"-"+(e.orderDetail.invoice&&e.orderDetail.invoice.title)+" [ "+(e.orderDetail.invoice&&e.orderDetail.invoice.content)+" ]"))])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("发票税费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[e._v("￥ "+e._s(e.orderDetail.tax_money))])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("赠送积分")]),i("v-uni-text",{staticClass:"cell-tip"},[i("v-uni-text",[e._v(e._s(e.orderDetail.give_point)+" 积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("实付金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("￥ "+e._s(e.orderDetail.pay_money))])],1)],1),i("v-uni-view",{staticClass:"uni-timeline",staticStyle:{padding:"30upx 40upx","background-color":"#fff"}},e._l(e.orderTimeLine,(function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-timeline-item",class:{"uni-timeline-first-item":0===a,"uni-timeline-last-item":a===e.orderTimeLine.length-1}},[i("v-uni-view",{staticClass:"uni-timeline-item-divider"}),i("v-uni-view",{staticClass:"uni-timeline-item-content"},[i("v-uni-view",[e._v(e._s(t.value))]),i("v-uni-view",{staticClass:"datetime"},[e._v(e._s(e._f("time")(t.time)))])],1)],1)})),1)],1)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},1772:function(e,t,i){var a=i("9d63");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0022fbcb",a,!0,{sourceMap:!1,shadowMode:!1})},"467e":function(e,t,i){"use strict";i.r(t);var a=i("0144"),n=i("ced0");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("5e53");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"79527b1c",null);t["default"]=s.exports},"5e53":function(e,t,i){"use strict";var a=i("1772"),n=i.n(a);n.a},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadBase64Image=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var a=i("3e3e"),n="/tiny-shop/v1/member/member/index";t.memberInfo=n;var o="/tiny-shop/v1/member/member/update";t.memberUpdate=o;var r="/tiny-shop/v1/member/address/index";t.addressList=r;var s="/tiny-shop/v1/member/address/default";t.addressDefault=s;var l="/tiny-shop/v1/member/address/view";t.addressDetail=l;var c="/tiny-shop/v1/member/address/create";t.addressCreate=c;var d="/tiny-shop/v1/member/address/update";t.addressUpdate=d;var v="/tiny-shop/v1/member/address/delete";t.addressDelete=v;var u="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=u;var b="/tiny-shop/v1/member/coupon/index";t.myCouponList=b;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var f="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=f;var m="/tiny-shop/v1/member/coupon/clear";t.couponClear=m;var y="/tiny-shop/v1/member/order/index";t.orderList=y;var h="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=h;var g="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=g;var x="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=x;var w="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=w;var k="/tiny-shop/v1/member/order/view";t.orderDetail=k;var D="/tiny-shop/v1/member/order/delete";t.orderDelete=D;var C="/tiny-shop/v1/member/footprint/index";t.footPrintList=C;var _="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=_;var j="/tiny-shop/v1/member/collect/index";t.collectList=j;var z="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=z;var R="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=R;var O="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=O;var A="/tiny-shop/v1/member/invoice/index";t.invoiceList=A;var P="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=P;var Y="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=Y;var L="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=L;var Z="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=Z;var G="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=G;var I="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=I;var S="/tiny-shop/v1/member/opinion/index";t.opinionList=S;var M="/tiny-shop/v1/member/opinion/create";t.opinionCreate=M;var E="/tiny-shop/v1/member/opinion/view";t.opinionDetail=E;var U="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=U;var T="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=T;var N="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=N;var H="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=H;var F="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=F;var V="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=V;var J="".concat(a.baseUrl,"/tiny-shop/v1/common/file/images");t.uploadImage=J;var W="".concat(a.baseUrl,"/tiny-shop/v1/common/file/base64");t.uploadBase64Image=W},"9d63":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'uni-page-body[data-v-79527b1c]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-79527b1c]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .no-default-address[data-v-79527b1c]{color:#333;font-size:%?32?%}.address-section .iconshouhuodizhi[data-v-79527b1c]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-79527b1c]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-79527b1c]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .iconyou[data-v-79527b1c]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-79527b1c]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-79527b1c]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .g-header .red[data-v-79527b1c]{color:#fa436a}.goods-section .logo[data-v-79527b1c]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-79527b1c]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-79527b1c]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?220?%;height:%?170?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-79527b1c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?16?%;overflow:hidden}.goods-section .g-item .title[data-v-79527b1c]{font-size:%?28?%;color:#303133;line-height:%?40?%}.goods-section .g-item .spec[data-v-79527b1c]{font-size:%?22?%;color:#909399}.goods-section .g-item .price-box[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#303133}.goods-section .g-item .price-box .price-wrapper[data-v-79527b1c]{width:50%}.goods-section .g-item .price-box .price-wrapper .price[data-v-79527b1c]{margin-bottom:%?4?%}.goods-section .g-item .price-box .price-wrapper .number[data-v-79527b1c]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .price-box .status[data-v-79527b1c]{font-size:%?24?%;color:#4399fc}.goods-section .g-item .step-box[data-v-79527b1c]{position:relative}.yt-list[data-v-79527b1c]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-79527b1c]{background:#fafafa}.yt-list-cell.b-b[data-v-79527b1c]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-79527b1c]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-79527b1c]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-79527b1c]{background:#3ab54a}.yt-list-cell .cell-more[data-v-79527b1c]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-79527b1c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-79527b1c]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-79527b1c]{color:#909399}.yt-list-cell .cell-tip.active[data-v-79527b1c]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-79527b1c]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-79527b1c]{max-width:%?90?%}.yt-list-cell .desc[data-v-79527b1c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.pay-list[data-v-79527b1c]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-79527b1c]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-79527b1c]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-79527b1c]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-79527b1c]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-79527b1c]{padding-left:%?30?%}.footer .price-tip[data-v-79527b1c]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-79527b1c]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}.mask[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-79527b1c]{width:100%;max-height:70vh;min-height:16vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask .mask-content .no-coupon[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:16vh}.mask.none[data-v-79527b1c]{display:none}.mask.show[data-v-79527b1c]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-79527b1c]{-webkit-transform:translateY(0);transform:translateY(0)}.coupon-item[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-79527b1c]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-79527b1c]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-79527b1c]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-79527b1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-79527b1c]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-79527b1c]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-79527b1c]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-79527b1c]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-79527b1c]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-79527b1c]{background:#f8f8f8}',""]),e.exports=t},c46d:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("ac6a"),i("456d"),i("96cf");var n=a(i("3b8d")),o=a(i("bd86")),r=a(i("d138")),s=a(i("13f1")),l=a(i("b19a")),c=a(i("8f09")),d=i("802d");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){(0,o.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={components:{mpvuePicker:s.default,rfImage:l.default,empty:r.default},data:function(){return{orderDetail:{}}},computed:{orderTimeLine:function(){var e=[];return 0!=this.orderDetail.created_at&&e.push({time:this.orderDetail.created_at,value:"订单创建"}),this.orderDetail.close_time<((new Date).getTime()/1e3&&0!=this.orderDetail.pay_time)&&e.push({time:this.orderDetail.close_time,value:"未付款订单关闭时间"}),0!=this.orderDetail.pay_time&&e.push({time:this.orderDetail.pay_time,value:"订单支付"}),0!=this.orderDetail.shipping_time&&e.push({time:this.orderDetail.shipping_time,value:"买家要求发货"}),0!=this.orderDetail.consign_time&&e.push({time:this.orderDetail.consign_time,value:"卖家发货"}),0!=this.orderDetail.sign_time&&e.push({time:this.orderDetail.sign_time,value:"买家确认收货"}),0!=this.orderDetail.finish_time&&e.push({time:this.orderDetail.finish_time,value:"订单完成"}),e}},filters:(0,o.default)({time:function(e){return 0==e?"暂未操作":(0,c.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,i=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return i.forEach((function(i){i.key==e&&(t=i.value)})),t},filterProductStatus:function(e){var t=null;if(0!==parseInt(e.refund_status,10)){var i=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];i.forEach((function(i){i.key==e.refund_status&&(t=i.value)}))}else if(4===parseInt(e.order_status,10)){var a=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];a.forEach((function(i){i.key==e.is_evaluate&&(t=i.value)}))}else{var n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];n.forEach((function(i){i.key==e.order_status&&(t=i.value)}))}return t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},"filterShippingType",(function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]})),onLoad:function(e){this.initData(e)},methods:{navTo:function(e){uni.navigateTo({url:e})},getOrderFreightFee:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={},this.cartIds?(t.type="cart",t.data=this.cartIds):(t.data=this.product,t.type="buy_now"),t.address_id=this.addressData.id,t.company_id=this.currentCompany.value,e.next=6,this.$get("".concat(orderFreightFee),u({},t)).then((function(e){i.shippingMoney=e.data.shipping_money})).catch((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initData:function(e){this.getOrderDetail(e.id)},getOrderDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get("".concat(d.orderDetail),{id:t}).then((function(e){i.orderDetail=e.data})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=b},ced0:function(e,t,i){"use strict";i.r(t);var a=i("c46d"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a}}]);