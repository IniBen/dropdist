(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{517:function(t,e){},625:function(t,e){},626:function(t,e){},635:function(t,e){},636:function(t,e){},647:function(t,e){},651:function(t,e){},654:function(t,e){},672:function(t,e){},674:function(t,e){},677:function(t,e){},678:function(t,e){},685:function(t,e){},691:function(t,e){},694:function(t,e){},703:function(t,e){},960:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(61),n(617)),o=n.n(l),c={data:function(){return{fname:"",lname:"",uname:"",walletadd:"",wallSeed:"",pubKey:"",PrivKey:"",XrplBal:"",loading:!1,uemail:""}},methods:{swalz:function(){o.a.fire({position:"top",text:"Accounts Generated",width:300,color:"#ff7235",background:"#ffe6cc",showConfirmButton:!1,timer:2e3})},postdata:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.getAccount();case 3:t.save(),t.loading=!1,t.swalz();case 6:case"end":return e.stop()}}),e)})))()},save:function(){var t=JSON.parse(localStorage.getItem("ownerId")),e=new(0,n(516).default)("dropdevz"),r=this.fname,l=this.lname,o=this.uname,c=this.uemail,d=this.walletadd,v=this.wallSeed,m=this.PrivKey,f=this.pubKey;e.get(t).then((function(n){return e.put({_id:t,_rev:n._rev,firstname:r,lastname:l,username:o,email:c,wallet_address:d,Wallet_Seed:v,wallet_Priv_Key:m,wallet_Pub_Key:f,hasregistered:!0})})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},getAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,l,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(552),l=new r.Client("wss://xls20-sandbox.rippletest.net:51233"),o=null,e.next=5,l.connect();case 5:return e.next=7,l.fundWallet(null,{faucetHost:o});case 7:return c=e.sent.wallet,e.next=10,l.getXrpBalance(c.address);case 10:e.sent,t.walletadd=c.address,t.pubKey=c.publicKey,t.PrivKey=c.privateKey,t.wallSeed=c.seed,window.location.href="/",l.disconnect();case 17:case"end":return e.stop()}}),e)})))()},getAccountsFromSeeds:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,l,o,c,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(552),l=new r.Client("wss://xls20-sandbox.rippletest.net:51233"),o=seeds.value.split("\n"),c=r.Wallet.fromSeed(o[0]),e.next=6,l.fundWallet(null,{faucetHost:faucetHost});case 6:return d=e.sent.wallet,e.next=9,l.getXrpBalance(c.address);case 9:v=e.sent,t.walletadd=d.address,t.pubKey=d.publicKey,t.PrivKey=d.privateKey,t.XrplBal=v,t.wallSeed=d.seed,l.disconnect();case 16:case"end":return e.stop()}}),e)})))()}}},d=n(40),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("body",{staticClass:"biolife-body"},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("nav",{staticClass:"biolife-nav"},[e("ul",[e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"permal-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"page-contain login-page"},[e("div",{staticClass:"main-content",attrs:{id:"main-content"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[e("div",{staticClass:"signin-container"},[e("form",{attrs:{action:"#",name:"frm-login",method:"post"}},[e("p",{staticClass:"form-row"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"txt-input",attrs:{type:"text",id:"fid-name",name:"firstname",value:""},domProps:{value:t.fname},on:{input:function(e){e.target.composing||(t.fname=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lname,expression:"lname"}],staticClass:"txt-input",attrs:{type:"text",id:"fid-pass",name:"lastname",value:""},domProps:{value:t.lname},on:{input:function(e){e.target.composing||(t.lname=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],staticClass:"txt-input",attrs:{type:"text",id:"fid-pass",name:"username",value:""},domProps:{value:t.uname},on:{input:function(e){e.target.composing||(t.uname=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(5),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uemail,expression:"uemail"}],staticClass:"txt-input",attrs:{type:"email",id:"fid-pass",name:"email",value:""},domProps:{value:t.uemail},on:{input:function(e){e.target.composing||(t.uemail=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.walletadd,expression:"walletadd"}],staticClass:"txt-input",staticStyle:{"background-color":"#f8f8f8"},attrs:{type:"text",id:"fid-pass",name:"walletAddress",value:"",readonly:""},domProps:{value:t.walletadd},on:{input:function(e){e.target.composing||(t.walletadd=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row wrap-btn"},[e("button",{staticClass:"btn btn-submit btn-bold",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.postdata()}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading....")])]),t._v("\n                      Save\n                    ")]),t._v(" "),e("NuxtLink",{staticClass:"link-to-help",attrs:{to:"/#"}},[t._v("Forgot your password")])],1)])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[e("div",{staticClass:"register-in-container"},[e("div",{staticClass:"intro"},[e("h4",{staticClass:"box-title"},[t._v("New Customer?")]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v("\n                    Create an account with us and you’ll be able to:\n                  ")]),t._v(" "),t._m(7),t._v(" "),e("NuxtLink",{staticClass:"btn btn-bold",attrs:{to:"/register"}},[t._v("Create an account")])],1)])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"hero-section hero-background"},[t("h1",{staticClass:"page-title"},[this._v("Profile Edit")])])},function(){var t=this._self._c;return t("li",{staticClass:"nav-item"},[t("span",{staticClass:"current-page"},[this._v("Edit profile")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-name"}},[t._v("Frist Name:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-pass"}},[t._v("Last Name:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-pass"}},[t._v("Username:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-pass"}},[t._v("Email:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-pass"}},[t._v("Account:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"lis"},[e("li",[t._v("Check out faster")]),t._v(" "),e("li",[t._v("Save multiple shipping anddesses")]),t._v(" "),e("li",[t._v("Access your order history")]),t._v(" "),e("li",[t._v("Track new orders")]),t._v(" "),e("li",[t._v("Save items to your Wishlist")])])}],!1,null,null,null);e.default=component.exports}}]);