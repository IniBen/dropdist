(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{521:function(t,e){},932:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{uname:"",uemail:"",pword:""}},pouch:{todos:{}},methods:{swalz:function(){Swal.fire({position:"top",text:"Registration successful",width:300,color:"#ff7235",background:"#ffe6cc",showConfirmButton:!1,timer:1500})},generateString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",o=e.length,i=0;i<t;i++)n+=e.charAt(Math.floor(Math.random()*o));return"DRPDVZ"+n},register:function(){if(""==this.uname||""==this.uemail||""==this.pword)Swal.fire("Please fill up your details above before clicking Register");else{var t=n(520).default,e=this.generateString();localStorage.setItem("ownerId",JSON.stringify(e)),new t("dropdevz").put({_id:e,title:"users",username:this.uname,email:this.uemail,password:this.pword,hasregistered:!1}).then((function(t){window.location.href="/login",console.log(t)})).catch((function(t){console.log(t)}))}}}},r=o,l=n(40),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("body",{staticClass:"biolife-body"},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("nav",{staticClass:"biolife-nav"},[e("ul",[e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"permal-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"page-contain login-page"},[e("div",{staticClass:"main-content",attrs:{id:"main-content"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[e("div",{staticClass:"signin-container"},[e("form",{attrs:{action:"#",name:"frm-login",method:"post",onsubmit:"event.preventDefault();"}},[e("p",{staticClass:"form-row"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],staticClass:"txt-input",attrs:{type:"text",id:"fid-name",name:"name"},domProps:{value:t.uname},on:{input:function(e){e.target.composing||(t.uname=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uemail,expression:"uemail"}],staticClass:"txt-input",attrs:{type:"email",id:"fid-name",name:"email"},domProps:{value:t.uemail},on:{input:function(e){e.target.composing||(t.uemail=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pword,expression:"pword"}],staticClass:"txt-input",attrs:{type:"password",id:"fid-pass",name:"password"},domProps:{value:t.pword},on:{input:function(e){e.target.composing||(t.pword=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"form-row wrap-btn"},[e("button",{staticClass:"btn btn-submit btn-bold",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.register()}}},[t._v("\n                      sign up\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},[e("div",{staticClass:"register-in-container"},[e("div",{staticClass:"intro"},[e("h4",{staticClass:"box-title"},[t._v("New Customer?")]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v("\n                    Create an account with us and you’ll be able to:\n                  ")]),t._v(" "),t._m(5),t._v(" "),e("NuxtLink",{staticClass:"btn btn-bold",attrs:{to:"/login"}},[t._v("Sign Up")])],1)])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"hero-section hero-background"},[t("h1",{staticClass:"page-title"},[this._v("User Registration")])])},function(){var t=this._self._c;return t("li",{staticClass:"nav-item"},[t("span",{staticClass:"current-page"},[this._v("Authentication")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-name"}},[t._v("Username:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-name"}},[t._v("Email Address:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"fid-pass"}},[t._v("Password:"),e("span",{staticClass:"requite"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"lis"},[e("li",[t._v("Check out faster")]),t._v(" "),e("li",[t._v("Save multiple shipping anddesses")]),t._v(" "),e("li",[t._v("Access your order history")]),t._v(" "),e("li",[t._v("Track new orders")]),t._v(" "),e("li",[t._v("Save items to your Wishlist")])])}],!1,null,null,null);e.default=component.exports}}]);