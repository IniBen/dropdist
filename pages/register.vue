<template>
  <div>
    <body class="biolife-body">
      <div class="hero-section hero-background">
        <h1 class="page-title">User Registration</h1>
      </div>

      <!--Navigation section-->
      <div class="container">
        <nav class="biolife-nav">
          <ul>
            <li class="nav-item">
              <NuxtLink to="/" class="permal-link">Home</NuxtLink>
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
                        >Username:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-name"
                        name="name"
                        v-model="uname"
                        class="txt-input"
                        
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-name"
                        >Email Address:<span class="requite">*</span></label
                      >
                      <input
                        type="email"
                        id="fid-name"
                        name="email"
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
                        name="password"
                        v-model="pword"
                        class="txt-input"
                      />
                    </p>
                    <p class="form-row wrap-btn">
                      <button
                        class="btn btn-submit btn-bold"
                        type="submit"
                        @click.prevent="register()"
                      >
                        sign up
                      </button>
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
                    <NuxtLink to="/login" class="btn btn-bold"
                      >Sign Up</NuxtLink
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
// import {localdb} from './static/js/localdb.min.js'
// import * as pouchdb from 'pouchdb'
export default {
    data() {
    return {
      uname: "",
      uemail: "",
      pword: "",
    };
  },
      pouch: {
      // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
      todos: {/*empty selector*/}
      },
  methods: {
    swalz() {
      Swal.fire({
        position: "top",
        text: "Registration successful",
        width: 300,
        // padding: "3em",
        color: "#ff7235",
        background: "#ffe6cc",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    generateString(length = 10) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
      }
      return "DRPDVZ" + result;
        },
    register() {
      
      if (this.uname == "" || this.uemail == "" || this.pword == "") {
        Swal.fire("Please fill up your details above before clicking Register");
      } else {
        const PouchDB = require('pouchdb').default;
        var userId = this.generateString();
        localStorage.setItem('ownerId', JSON.stringify(userId));
        var dropdevz = new PouchDB('dropdevz')
          dropdevz.put({
            _id : userId,
            title: "users",
            username: this.uname,
            email: this.uemail,
            password: this.pword,
            hasregistered: false
          }).then(function(result){
            // Swal.fire("Registration Successful")
            window.location.href="/login"
            console.log(result)
          }).catch(function(err){
            console.log(err);
          });
          // console.log("New record added to the table");
          // this.$router.push("/login");

          // dropdevz.createTable("users");
          // dropdevz.insert("users", {
          //   username: this.uname,
          //   email: this.uemail,
          //   password: this.pword,
          //   userId: userId,
          //   registered: false,
          // });
          // console.log("New table created and populated");
          // this.$router.push("/login");
          // Swal.fire("Registration Successful")
          // window.location.href="/login"
        }
    },
      
    }
};
</script>

<style></style>
