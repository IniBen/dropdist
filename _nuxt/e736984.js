(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{455:function(t,e,o){t.exports=o.p+"img/1.671d429.png"},512:function(t,e,o){t.exports=o.p+"img/newz1.d3ba232.svg"},883:function(t,e,o){"use strict";o.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-control custom-checkbox d-inline-block mt-2 pt-1"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1"}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("Remember Me")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign-info"},[e("span",{staticClass:"dark-color d-inline-block line-height-2"},[t._v("Don't have an account?\n                  "),e("a",{attrs:{href:"/pageSignup"}},[t._v("Sign up")])]),t._v(" "),e("ul",{staticClass:"iq-social-media"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ri-facebook-box-line"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ri-twitter-line"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ri-instagram-line"})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-6 text-center"},[e("div",{staticClass:"sign-in-detail text-white"},[e("a",{staticClass:"sign-in-logo mb-5",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:o(512),alt:"logo"}})]),t._v(" "),e("div",{staticClass:"owl-carousel",attrs:{"data-autoplay":"true","data-loop":"true","data-nav":"false","data-dots":"true","data-items":"1","data-items-laptop":"1","data-items-tab":"1","data-items-mobile":"1","data-items-mobile-sm":"1","data-margin":"0"}},[e("div",{staticClass:"item"},[e("img",{staticClass:"img-fluid mb-4",attrs:{src:o(455),alt:"logo"}}),t._v(" "),e("h4",{staticClass:"mb-1 text-white"},[t._v("Manage your orders")]),t._v(" "),e("p",[t._v("\n                  It is a long established fact that a reader will be\n                  distracted by the readable content.\n                ")])]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"img-fluid mb-4",attrs:{src:o(455),alt:"logo"}}),t._v(" "),e("h4",{staticClass:"mb-1 text-white"},[t._v("Manage your orders")]),t._v(" "),e("p",[t._v("\n                  It is a long established fact that a reader will be\n                  distracted by the readable content.\n                ")])]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"img-fluid mb-4",attrs:{src:o(455),alt:"logo"}}),t._v(" "),e("h4",{staticClass:"mb-1 text-white"},[t._v("Manage your orders")]),t._v(" "),e("p",[t._v("\n                  It is a long established fact that a reader will be\n                  distracted by the readable content.\n                ")])])])])])}],n={layout:"noLayout",data:function(){return{uemail:"",pword:""}},methods:{login:function(){o(54)({method:"post",url:"https://vastcollar.backendless.app/api/users/login",headers:{"Content-Type":"application/json"},data:JSON.stringify({login:this.uemail,password:this.pword})}).then((function(t){localStorage.setItem("ownerId",JSON.stringify(t.data.ownerId)),200===t.status&&(!1===t.data.hasregistered?window.location.href="userProfileEdit":!0===t.data.hasregistered?window.location.href="pagedashboard":window.location.href="pageLogin")})).catch((function(t){console.log(t)}))}}},r=o(33),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"sign-in-page"},[e("div",{staticClass:"container bg-white mt-5 p-0"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-sm-6 align-self-center"},[e("div",{staticClass:"sign-in-from"},[e("h1",{staticClass:"mb-0"},[t._v("Sign in")]),t._v(" "),e("p",[t._v("\n              Enter your email address and password to access admin panel.\n            ")]),t._v(" "),e("form",{staticClass:"mt-4",attrs:{onsubmit:"event.preventDefault();"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uemail,expression:"uemail"}],staticClass:"form-control mb-0",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.uemail},on:{input:function(e){e.target.composing||(t.uemail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),t._v(" "),e("a",{staticClass:"float-right",attrs:{href:"#"}},[t._v("Forgot password?")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pword,expression:"pword"}],staticClass:"form-control mb-0",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.pword},on:{input:function(e){e.target.composing||(t.pword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"d-inline-block w-100"},[t._m(0),t._v(" "),e("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login()}}},[t._v("\n                  Sign in\n                ")])]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)])])])])}),l,!1,null,null,null);e.default=component.exports}}]);