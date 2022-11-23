const webpack = require("webpack");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dropdevz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:"https://fonts.googleapis.com/css?family=Ubuntu&amp;display=swap", rel:"stylesheet", type: 'text/css'},
      {href:"https://fonts.googleapis.com/css?family=Playfair+Display:400i,700i", rel:"stylesheet", type: 'text/css'},
      {href:"https://fonts.googleapis.com/css?family=Poppins:600&amp;display=swap", rel:"stylesheet", type: 'text/css'},
      {href:"https://fonts.googleapis.com/css?family=Cairo:400,600,700&amp;display=swap", rel:"stylesheet", type: 'text/css'},
      { rel: 'icon', type: 'image/x-icon', href: '~/static/icon.png', sizes:"128x128" }
    ],
    script: [
      // {src:'/js/jquery-3.4.1.min.js',  type: 'text/javascript', body: true, defer: true }, 
      // {src:'/js/bootstrap.min.js', type: 'text/javascript', body: true, defer: true},    
      // {src:'/js/jquery.countdown.min.js',  type: 'text/javascript', body: true, defer: true},     
      // {src:'/js/jquery.nice-select.min.js', type: 'text/javascript', body: true, defer: true},     
      // {src:'/js/jquery.nicescroll.min.js', type: 'text/javascript', body: true, defer: true},      
      // {src:'/js/slick.min.js', type: 'text/javascript', body: true, defer: true},      
      // {src:'/js/biolife.framework.js', type: 'text/javascript', body: true, defer: true}, 
      // {src:'/js/functions.js', type: 'text/javascript', body: true, defer: true},
      {src:'/js/localdb.min.js', type: 'text/javascript', body: true, defer: true},
      {src:'/landing/js/functions.js', type: 'text/javascript', body: true, defer: true},    
      {src:'/landing/js/jquery-2.1.4.min.js', type: 'text/javascript', body: true, defer: true},    
      {src:'/landing/js/wow.min.js', type: 'text/javascript', body: true, defer: true},    
      {src:'/landing/js/owl.carousel.js', type: 'text/javascript', body: true, defer: true},
      // {src:'/dashboard/app.min.js', type: 'text/javascript', body: true, defer: true},
      // {src:'/dashboard/summernote-bs4.js', type: 'text/javascript', body: true, defer: true},
      // {src:'/dashboard/scripts.js', type: 'text/javascript', body: true, defer: true},
      // {src:'/dashboard/custom.js', type: 'text/javascript', body: true, defer: true},


    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src:"~/assets/css/bootstrap.min.css"},
    {src:"~/assets/landing/css/bootstrap.min.css"},
    {src:"~/assets/css/animate.min.css"},
    {src:"~/assets/css/nice-select.css"},      
    {src:"~/assets/css/slick.min.css"},
    {src:"~/assets/css/bootstrap.min.css"},      
    {src:"~/assets/css/style.css"},
    {src:"~/assets/landing/css/bootstrap.min.css"},      
    {src:"~/assets/css/main-color01.css"},
    {src:"~/assets/css/font-awesome.min.css"},
    {src:"~/node_modules/bootstrap/dist/css/bootstrap.css"},
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~plugins/bootstrap.js',
    '~/plugins/commerce.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // ['@nuxtclub/feathericons'],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      fileName: 'newdevz.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
  },

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
},
}
