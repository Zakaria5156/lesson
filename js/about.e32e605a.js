(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"13d5":function(e,t,c){"use strict";var o=c("23e7"),n=c("d58f").left,a=c("a640"),s=c("ae40"),l=c("2d00"),r=c("605d"),i=a("reduce"),b=s("reduce",{1:0}),u=!r&&l>79&&l<83;o({target:"Array",proto:!0,forced:!i||!b||u},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},b0c0:function(e,t,c){var o=c("83ab"),n=c("9bf2").f,a=Function.prototype,s=a.toString,l=/^\s*function ([^ (]*)/,r="name";o&&!(r in a)&&n(a,r,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},b789:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),n=Object(o["F"])("data-v-792bf886");Object(o["t"])("data-v-792bf886");var a={class:"about"},s={class:"site-main woocommerce single single-product page-wrapper"},l={class:"space-3"},r={class:"container"},i=Object(o["h"])("i",{class:"fa fa-home "},null,-1),b=Object(o["g"])(" Home "),u={class:"row"},h={id:"primary",class:"content-area col-lg-12"},d={id:"main",class:"site-main",role:"main"},m={id:"post-8",class:"post-8 page type-page status-publish hentry"},j={class:"entry-content"},O={class:"woocommerce"},p={name:"checkout",class:"checkout woocommerce-checkout row"},f={class:"col-md-7"},v={class:"col2-set",id:"customer_details"},w={class:"col-12"},y={class:"woocommerce-billing-fields"},g=Object(o["h"])("h3",null,"Billing details",-1),k={class:"form-group"},_=Object(o["h"])("label",{for:""},"Name",-1),P={class:"form-group"},q=Object(o["h"])("label",{for:""},"Phone",-1),E={class:"form-group"},x=Object(o["h"])("label",{for:""},"Email",-1),B={class:"col-md-5"},z={id:"order_review",class:"woocommerce-checkout-review-order"},C=Object(o["h"])("h3",{id:"order_review_heading"},"Your order",-1),S={class:"shop_table woocommerce-checkout-review-order-table"},U=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{class:"product-name"},"Lessons"),Object(o["h"])("th",{class:"product-total"},"Price")])],-1),V={class:"product-name"},F={class:"product-total"},H={class:"woocommerce-Price-amount amount"},J=Object(o["h"])("span",{class:"woocommerce-Price-currencySymbol"},"€",-1),L={class:"order-total"},T=Object(o["h"])("th",null,"Total",-1),Y={class:"woocommerce-Price-amount amount"},$=Object(o["h"])("span",{class:"woocommerce-Price-currencySymbol"},"€",-1),A={key:0,id:"payment",class:"woocommerce-checkout-payment"};Object(o["r"])();var I=n((function(e,t,c,I,N,R){var D=Object(o["x"])("router-link"),G=Object(o["x"])("lesson");return Object(o["q"])(),Object(o["d"])("div",a,[Object(o["h"])("main",s,[Object(o["h"])("section",l,[Object(o["h"])("div",r,[Object(o["h"])(D,{to:"/",class:"btn btn-main"},{default:n((function(){return[i,b]})),_:1}),Object(o["h"])("div",u,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(N.lessons,(function(e){return Object(o["q"])(),Object(o["d"])(G,{key:e.id,lesson:e},null,8,["lesson"])})),128)),Object(o["h"])("section",h,[Object(o["h"])("main",d,[Object(o["h"])("article",m,[Object(o["h"])("div",j,[Object(o["h"])("div",O,[Object(o["h"])("form",p,[Object(o["h"])("div",f,[Object(o["h"])("div",v,[Object(o["h"])("div",w,[Object(o["h"])("div",y,[g,Object(o["h"])("div",k,[_,Object(o["E"])(Object(o["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return N.name=e}),class:"form-control"},null,512),[[o["B"],N.name]])]),Object(o["h"])("div",P,[q,Object(o["E"])(Object(o["h"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return N.phone=e}),class:"form-control"},null,512),[[o["B"],N.phone]])]),Object(o["h"])("div",E,[x,Object(o["E"])(Object(o["h"])("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return N.email=e}),class:"form-control"},null,512),[[o["B"],N.email]])])])])])]),Object(o["h"])("div",B,[Object(o["h"])("div",z,[C,Object(o["h"])("table",S,[U,Object(o["h"])("tbody",null,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(N.lessons,(function(e){return Object(o["q"])(),Object(o["d"])("tr",{class:"cart_item",key:e.id},[Object(o["h"])("td",V,Object(o["z"])(e.subject),1),Object(o["h"])("td",F,[Object(o["h"])("span",H,[J,Object(o["g"])(Object(o["z"])(e.price),1)])])])})),128))]),Object(o["h"])("tfoot",null,[Object(o["h"])("tr",L,[T,Object(o["h"])("td",null,[Object(o["h"])("strong",null,[Object(o["h"])("span",Y,[$,Object(o["g"])(Object(o["z"])(N.total),1)])])])])])]),R.filled()?(Object(o["q"])(),Object(o["d"])("div",A,[Object(o["h"])("button",{onClick:t[4]||(t[4]=function(){return R.checkout&&R.checkout.apply(R,arguments)}),type:"button",class:"button alt btn-block mt-3",id:"place_order",value:"Place order","data-value":"Place order"},"Checkout")])):Object(o["e"])("",!0)])])])])])])])])])])])])])})),N=(c("13d5"),c("e3da")),R={name:"Home",data:function(){return{lessons:this.$store.state.cart,total:0,name:"",email:"",phone:""}},mounted:function(){this.total=this.lessons.reduce((function(e,t){return e+t.price}),0),console.log(this.filled())},methods:{filled:function(){return""!=this.name&&""!=this.email&&""!=this.phone&&0!=this.lessons.length},checkout:function(){alert("Your order has been submitted successfully"),this.$store.commit("emptyCart"),this.lessons=[],this.total=0,this.name="",this.email="",this.phone=""}},components:{Lesson:N["a"]}};R.render=I,R.__scopeId="data-v-792bf886";t["default"]=R},d58f:function(e,t,c){var o=c("1c0b"),n=c("7b0b"),a=c("44ad"),s=c("50c4"),l=function(e){return function(t,c,l,r){o(c);var i=n(t),b=a(i),u=s(i.length),h=e?u-1:0,d=e?-1:1;if(l<2)while(1){if(h in b){r=b[h],h+=d;break}if(h+=d,e?h<0:u<=h)throw TypeError("Reduce of empty array with no initial value")}for(;e?h>=0:u>h;h+=d)h in b&&(r=c(r,b[h],h,i));return r}};e.exports={left:l(!1),right:l(!0)}}}]);
//# sourceMappingURL=about.e32e605a.js.map