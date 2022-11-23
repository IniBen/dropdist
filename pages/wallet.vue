<template>
  <div>
    <body class="biolife-body">
      <div class="hero-section hero-background">
        <h1 class="page-title">Wallet</h1>
      </div>

      <!--Navigation section-->
      <div class="container">
        <nav class="biolife-nav">
          <ul>
            <li class="nav-item">
              <NuxtLink to="/" class="permal-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <span class="current-page">Wallet</span>
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
                <div>
                  <h1 placeholder="XRP Balance">
                    {{ XrplBal }}xrp<button
                      style="border: none; background-color: #f8f8f8"
                      @click.prevent="getBalance()"
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-refresh-cw"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path
                          d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                        ></path>
                      </svg>
                    </button>
                  </h1>
                </div>
                <div class="signin-container">
                  <form action="#" name="frm-login">
                    <p class="form-row">
                      <label for="fid-name">Standby Account:</label>
                      <input
                        type="text"
                        id="fid-name"
                        name="standbyaccount"
                        value=""
                        class="txt-input"
                        v-model="walletadd"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass">Private Key:</label>
                      <input
                        type="text"
                        id="fid-pass"
                        name="privateKey"
                        value=""
                        class="txt-input"
                        v-model="PrivKey"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass">Public Key:</label>
                      <input
                        type="text"
                        id="fid-pass"
                        name="publicKey"
                        value=""
                        class="txt-input"
                        v-model="pubKey"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass">Seed:</label>
                      <input
                        type="text"
                        id="fid-pass"
                        name="seed"
                        value=""
                        class="txt-input"
                        v-model="wallSeed"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass">Wallet Address:</label>
                      <input
                        type="text"
                        id="fid-pass"
                        name="walletaddress"
                        value=""
                        class="txt-input"
                        v-model="walletadd"
                        readonly
                      />
                    </p>
                  </form>
                  <li class="nav-item">
                    <span class="current-page"><b>SEND XRP</b></span>
                  </li>
                  <form>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Amount:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-pass"
                        name="amount"
                        value=""
                        class="txt-input"
                        v-model="Amount"
                      />
                    </p>
                    <p class="form-row">
                      <label for="fid-pass"
                        >Destination:<span class="requite">*</span></label
                      >
                      <input
                        type="text"
                        id="fid-pass"
                        name="destination"
                        value=""
                        class="txt-input"
                        v-model="Destination"
                      />
                    </p>
                    <p class="form-row wrap-btn">
                      <button class="btn btn-submit btn-bold" type="submit" v-on:click.prevent="sendXRP()">
                        <div
                      v-show="loading"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                    >
                      <span class="sr-only">Loading....</span>
                    </div>
                        Send Xrp
                      </button>
                    </p>
                  </form>
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
export default {
  data() {
    return {
      walletadd: "",
      wallSeed: "",
      pubKey: "",
      PrivKey: "",
      XrplBal: "",
      Amount: "",
      Destination: "",
      loading: false,
    };
  },
    methods: {
    swalz() {
      swal.fire({
        position: "top",
        text: "Xrp sent to " + this.Destination,
        width: 300,

        // padding: "3em",
        color: "#ff7235",
        background: "#ffe6cc",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    getdata() {
      this.loading = true;
      this.getAcct();
      this.loading = false;
    },
    async getBalance() {
      const xrpl = require("xrpl");
      const client = new xrpl.Client(
        "wss://xls20-sandbox.rippletest.net:51233"
      );

      // let faucetHost = null;
      let faucetHost = "faucet-nft.ripple.com";

      await client.connect();

      // -----------------------------------Create and fund a test account wallet
      // const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet;

      // -----------------------------------Get the current balance.
      const my_balance = await client.getXrpBalance(this.walletadd);

      this.XrplBal = my_balance;

      client.disconnect();
    },

    getAcct() {
      const own = JSON.parse(localStorage.getItem("ownerId"));
      const PouchDB = require("pouchdb").default;
      var dropdevz = new PouchDB("dropdevz");
      dropdevz.get(own)
        .then( (doc) => {
          this.walletadd = doc.wallet_address;
          this.wallSeed = doc.Wallet_Seed;
          this.PrivKey = doc.wallet_Priv_Key;
          this.pubKey = doc.wallet_Priv_Key;
        }).then(function (){
          
        })
      },
      

    async sendXRP() {
      this.loading = true;
      const xrpl = require("xrpl");
      const client = new xrpl.Client(
        "wss://xls20-sandbox.rippletest.net:51233"
      );

      await client.connect();

      const standby_wallet = xrpl.Wallet.fromSeed(this.wallSeed);

      const sendAmount = this.Amount;

      // ------------------------------------------------------- Prepare transaction
      // Note that the destination is hard coded.
      const prepared = await client.autofill({
        TransactionType: "Payment",
        Account: standby_wallet.address,
        Amount: xrpl.xrpToDrops(sendAmount),
        Destination: this.Destination,
      });

      // ------------------------------------------------ Sign prepared instructions
      const signed = standby_wallet.sign(prepared);
      // -------------------------------------------------------- Submit signed blob
      const tx = await client.submitAndWait(signed.tx_blob);

      this.walletadd = await client.getXrpBalance(standby_wallet.address);
      // document.getElementById("operationalBalanceField").value =
      //   await client.getXrpBalance(operational_wallet.address);
      client.disconnect();
      this.loading = false;
      this.swalz();
    },
  },
  mounted() {
    this.getAcct();
    this.getBalance();
  },
};
</script>

<style></style>
