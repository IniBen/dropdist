<template>
  <div>
    <body class="biolife-body">
      <div class="hero-section hero-background">
        <h1 class="page-title">Organic Fruits</h1>
      </div>

      <!--Navigation section-->
      <div class="container">
        <nav class="biolife-nav">
          <ul>
            <li class="nav-item">
              <NuxtLink to="//" class="permal-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <span class="current-page">Authentication</span>
            </li>
          </ul>
        </nav>
      </div>

      <div class="page-contain login-page">
        <!-- Main content -->
        <div id="main-content" class="main-content">
          <div class="container">
            <div class="row">
              <!--Form Sign In-->
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="signin-container">
                  <form
                    action="#"
                    name="frm-login"
                    method="post"
                    onsubmit="event.preventDefault();"
                  >
                    <p class="form-row">
                      <label for="fid-name"
                        >Email Address:<span class="requite">*</span></label
                      >
                      <input
                        type="email"
                        id="fid-name"
                        name="email"
                        value=""
                        v-model="uemail"
                        class="txt-input"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Password:<span class="requite">*</span></label
                      >
                      <input
                        type="password"
                        id="fid-pass"
                        v-model="pword"
                        name="password"
                        value=""
                        class="txt-input"
                      />
                    </p>
                    <p class="form-row wrap-btn">
                      <button
                        class="btn btn-submit btn-bold"
                        type="submit"
                        @click.prevent="login()"
                      >
                        sign in
                      </button>
                      <NuxtLink to="/#" class="link-to-help"
                        >Forgot your password</NuxtLink
                      >
                    </p>
                  </form>
                </div>
              </div>

              <!--Go to Register form-->
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="register-in-container">
                  <div class="intro">
                    <h4 class="box-title">New Customer?</h4>
                    <p class="sub-title">
                      Create an account with us and you’ll be able to:
                    </p>
                    <ul class="lis">
                      <li>Check out faster</li>
                      <li>Save multiple shipping anddesses</li>
                      <li>Access your order history</li>
                      <li>Track new orders</li>
                      <li>Save items to your Wishlist</li>
                    </ul>
                    <NuxtLink to="/#" class="btn btn-bold"
                      >Create an account</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import swal from "sweetalert2";
export default {
  data() {
    return {
      uemail: "",
      pword: "",
    };
  },
  methods: {
    swalz() {
      swal.fire({
        position: "top",
        text: "Login Successful",
        width: 300,

        // padding: "3em",
        color: "#ff7235",
        background: "#ffe6cc",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    login() {
      if (this.uemail == "" || this.pword == "") {
        swal.fire("Please fill up your details above before clicking Register");
      } else {
      }
      const PouchDB = require("pouchdb").default;
      // var user = JSON.parse(localStorage.getItem("ownerId"));
      const ids = [];
      var dropdevz = new PouchDB("dropdevz");
      var hemail = this.uemail;
      var hpword = this.pword;
      dropdevz
        .allDocs()
        .then(function (doc) {
          for (let i = 0; i < doc.rows.length; i++) {
            ids[i] = doc.rows[i].id;
          }
          for (let j = 0; j < ids.length; j++) {
            dropdevz.get(ids[j]).then(function (doc) {
              if (doc.email == hemail && doc.password == hpword) {
                if (doc.hasregistered == true) {
                  swal.fire("Login Successful");
                  window.location.href = "/dashboard";
                } else if (doc.hasregistered == false) {
                  window.location.href = "/profileedit";
                }
              } else (swal.fire("no data found"));
            });
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
