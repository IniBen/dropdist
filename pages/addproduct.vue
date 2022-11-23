<template>
  <div>
    <!-- <body>
      <pre id="display"></pre>
      <input type="file" id="inputFile" />

      <div id="img_meta_data">Please upload a File</div>
    </body> -->
    <body class="biolife-body">
      <!--Hero Section-->
      <div class="hero-section hero-background">
        <h1 class="page-title">Contact</h1>
      </div>

      <!--Navigation section-->
      <div class="container">
        <nav class="biolife-nav nav-86px">
          <ul>
            <li class="nav-item">
              <NuxtLink to="/index-2.html" class="permal-link">Home</NuxtLink>
            </li>
            <li class="nav-item"><span class="current-page">Contact</span></li>
          </ul>
        </nav>
      </div>

      <div class="page-contain contact-us">
        <!-- Main content -->
        <div id="main-content" class="main-content">
          <div class="container">
            <div class="row">
              <!--Contact info-->
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="contact-form-container sm-margin-top-112px">
                  <form action="#" name="frm-contact">
                    <label for="fid-name"
                      >Product Name:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="text"
                        name="productname"
                        value=""
                        placeholder=""
                        class="txt-input"
                      />
                    </p>
                    <label for="fid-name"
                      >Brand:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="text"
                        name="Brand"
                        value=""
                        placeholder=""
                        class="txt-input"
                      />
                    </p>
                    <label for="fid-name"
                      >Quantity:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="text"
                        name="quantity"
                        value=""
                        placeholder=""
                        class="txt-input"
                      />
                    </p>
                    <label for="fid-name"
                      >Product description:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <textarea
                        name="description"
                        id="mes-1"
                        cols="30"
                        rows="9"
                        placeholder=""
                      ></textarea>
                    </p>
                    <p class="form-row">
                      <button @click.prevent="addproduct()" class="btn btn-submit" type="submit">
                        send message
                      </button>
                    </p>
                  </form>
                </div>
              </div>

              <!--Contact form-->
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="contact-form-container sm-margin-top-112px">
                  <form action="#" name="frm-contact">
                    <label for="fid-name"
                      >Product category:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="text"
                        name="Product Category"
                        value=""
                        placeholder=""
                        class="txt-input"
                      />
                    </p>
                    <label for="fid-name"
                      >Price:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="text"
                        name="price"
                        value=""
                        placeholder=""
                        class="txt-input"
                      />
                    </p>
                    <label for="fid-name"
                      >Product image:<span class="requite">*</span></label
                    >
                    <p class="form-row">
                      <input
                        type="file"
                        name="product image"
                        value=""
                        placeholder=""
                        accept="image/png, image/jpg, image/jpeg"
                        class="txt-input"
                        @change="selectFile"
                      />
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
      pname: "",
      pbrand: "",
      pquantity: "",
      pdesc: "",
      pcat: "",
      pprice: "",
      pimage:[0],
    };
  },
  methods: {
    async selectFile(e) {
      this.pimage = e.target.files[0];

      if (this.pimage) return;
    },
    addproduct(){  
      const PouchDB = require("pouchdb").default;
      var dropdevz = new PouchDB("dropdevz");
   
        dropdevz.put({
            _id: 'image',
            _attachments: {
                "file": {
                    type: this.pimage.type,
                    data: this.pimage
                }
            },
            productName : this.pname,
            productbrand : this.pbrand,
            productQuantity : this.pquantity,
            productDescription : this.pdesc,
            productCaegory : this.pcat,
            productPrice: this.pprice,
            productImage: this.pimage
        }).then(()=>{
            return dropdevz.getAttachment('image', 'file');
        }).then((blob)=> {
            var url = URL.createObjectURL(blob);
            var img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);

            var fileSize = JSON.stringify(Math.floor(blob.size/1024));
            var contentType = JSON.stringify(blob.type);

            imageMetaData.innerText = 'Filesize:' + fileSize + 'KB, Content-Type: ' + contentType;
            windows.location.href="/product"
        }).catch(function (err){
            console.log(err);
        });
    },
  },
};
</script>

<style></style>
