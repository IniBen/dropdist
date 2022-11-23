<template>
  <div>
    <body class="biolife-body">
      <div class="hero-section hero-background">
        <h1 class="page-title">Profile Edit</h1>
      </div>

      <!--Navigation section-->
      <div class="container">
        <nav class="biolife-nav">
          <ul>
            <li class="nav-item">
              <NuxtLink to="/" class="permal-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <span class="current-page">Edit profile</span>
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
                  <form action="#" name="frm-login" method="post">
                    <p class="form-row">
                      <label for="fid-name"
                        >Frist Name:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-name"
                        name="firstname"
                        value=""
                        class="txt-input"
                        v-model="fname"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Last Name:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-pass"
                        name="lastname"
                        value=""
                        class="txt-input"
                        v-model="lname"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Username:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-pass"
                        name="username"
                        value=""
                        class="txt-input"
                        v-model="uname"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Email:<span class="requite">*</span></label
                      >
                      <input
                        type="email"
                        id="fid-pass"
                        name="email"
                        value=""
                        class="txt-input"
                        v-model="uemail"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Account:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-pass"
                        name="walletAddress"
                        value=""
                        class="txt-input"
                        v-model="walletadd"
                        readonly
                        style="background-color: #f8f8f8"
                      />
                    </p>
                    <p class="form-row wrap-btn">
                      <button
                        class="btn btn-submit btn-bold"
                        type="submit"
                        @click.prevent="postdata()"
                      >
                        <div
                          v-show="loading"
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                        >
                          <span class="sr-only">Loading....</span>
                        </div>
                        Save
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
                    <NuxtLink to="/register" class="btn btn-bold"
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
      fname: "",
      lname: "",
      uname: "",
      walletadd: "",
      wallSeed: "",
      pubKey: "",
      PrivKey: "",
      XrplBal: "",
      loading: false,
      uemail: "",
    };
  },
  methods: {
    swalz() {
      swal.fire({
        position: "top",
        text: "Accounts Generated",
        width: 300,
        // padding: "3em",
        color: "#ff7235",
        background: "#ffe6cc",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    async postdata() {
      this.loading = true;
      await this.getAccount();
      this.save();
      this.loading = false;
      this.swalz();
    },
    save() {
      const own = JSON.parse(localStorage.getItem("ownerId"));
      const PouchDB = require("pouchdb").default;
      var dropdevz = new PouchDB("dropdevz");
      var  tfname= this.fname;
      var  tlname= this.lname;
      var  tuname= this.uname;
      var  temail= this.uemail;
      var  twallet_address= this.walletadd;
      var  tWallet_Seed= this.wallSeed;
      var  twallet_Priv_Key= this.PrivKey;
      var  twallet_Pub_Key= this.pubKey;
      dropdevz.get(own)
        .then(function (doc) {
          return dropdevz.put({
            _id: own,
            _rev: doc._rev,
            firstname: tfname,
            lastname: tlname,
            username: tuname,
            email: temail,
            wallet_address: twallet_address,
            Wallet_Seed: tWallet_Seed,
            wallet_Priv_Key: twallet_Priv_Key,
            wallet_Pub_Key: twallet_Pub_Key,
            hasregistered: true
          });
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    async getAccount() {
      const xrpl = require("xrpl");
      const client = new xrpl.Client(
        "wss://xls20-sandbox.rippletest.net:51233"
      );

      let faucetHost = null;

      await client.connect();

      // -----------------------------------Create and fund a test account wallet
      const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet;

      // -----------------------------------Get the current balance.
      const my_balance = await client.getXrpBalance(my_wallet.address);

      this.walletadd = my_wallet.address;
      this.pubKey = my_wallet.publicKey;
      this.PrivKey = my_wallet.privateKey;
      this.wallSeed = my_wallet.seed;

      window.location.href = "/";

      client.disconnect();
    },

    async getAccountsFromSeeds() {
      const xrpl = require("xrpl");
      const client = new xrpl.Client(
        "wss://xls20-sandbox.rippletest.net:51233"
      );

      // -----------------------------------Find the test account wallets
      var lines = seeds.value.split("\n");
      const standby_wallet = xrpl.Wallet.fromSeed(lines[0]);

      const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet;

      // -----------------------------------Get the current balance.
      const standby_balance = await client.getXrpBalance(
        standby_wallet.address
      );

      this.walletadd = my_wallet.address;
      this.pubKey = my_wallet.publicKey;
      this.PrivKey = my_wallet.privateKey;
      this.XrplBal = standby_balance;
      this.wallSeed = my_wallet.seed;
      client.disconnect();
    },
  },
};
</script>

<style></style>
