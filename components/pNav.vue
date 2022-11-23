<template>
  <div>
    <header id="header" class="header-area style-01 layout-01">
      <div class="header-top hidden-xs hidden-sm">
        <div class="container">
          <div class="top-bar left">
            <ul class="horizontal-menu">
              <li>
                <NuxtLink to="#"
                  ><i class="fa fa-envelope" aria-hidden="true"></i
                  >Organic@company.com</NuxtLink
                >
              </li>
            </ul>
            <ul class="social-list circle-layout">
              <li>
                <NuxtLink to="#"
                  ><i class="fa fa-twitter" aria-hidden="true"></i
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink to="#"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink to="#"
                  ><i class="fa fa-pinterest" aria-hidden="true"></i
                ></NuxtLink>
              </li>
            </ul>
          </div>
          <div class="top-bar right">
            <ul class="horizontal-menu">
              <li class="horz-menu-item currency">
                <select name="currency">
                  <option value="eur">€ EUR (Euro)</option>
                  <option value="usd" selected>$ USD (Dollar)</option>
                  <option value="usd">£ GBP (Pound)</option>
                  <option value="usd">¥ JPY (Yen)</option>
                </select>
              </li>
              <li>
                <NuxtLink to="/login" class="login-link"
                  ><i class="biolife-icon icon-login"></i>My Account</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-middle hidden-sm hidden-xs">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2 col-md-6 col-xs-6">
              <NuxtLink to="/" class="biolife-logo"
                ><img
                  src="~/assets/images/newz.svg"
                  alt="biolife logo"
                  width="135"
                  height="36"
              /></NuxtLink>
            </div>
            <div class="col-lg-9 col-md-10 padding-top-2px">
              <div class="header-search-bar layout-01 no-product-cat">
                <form
                  action="#"
                  class="form-search"
                  name="desktop-seacrh"
                  method="get"
                >
                  <input
                    type="text"
                    name="s"
                    class="input-text"
                    value=""
                    placeholder="Search here..."
                  />
                  <button type="submit" class="btn-submit">
                    <i class="biolife-icon icon-search"></i>
                  </button>
                </form>
              </div>
              <div class="live-info">
                <p class="telephone">
                  <i class="fa fa-phone" aria-hidden="true"></i
                  ><b class="phone-number">(+900) 123 456 7891</b>
                </p>
                <p class="working-time">
                  Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom biolife-sticky-object">
        <div class="container md-possition-relative">
          <div class="row">
            <div class="col-lg-3 col-md-4 hidden-sm hidden-xs">
              <div class="vertical-menu vertical-category-block">
                <div class="block-title">
                  <span class="menu-icon">
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                  </span>
                  <span class="menu-title">All departments</span>
                  <span class="angle" data-tgleclass="fa fa-caret-down"
                    ><i class="fa fa-caret-up" aria-hidden="true"></i
                  ></span>
                </div>
                <div class="wrap-menu">
                  <ul class="menu clone-main-menu">
                    <li class="menu-item menu-item-has-children has-megamenu">
                      <NuxtLink
                        to="#"
                        class="menu-name"
                        data-title="Fruit & Nut Gifts"
                        ><i class="biolife-icon icon-fruits"></i>Fruit & Nut
                        Gifts</NuxtLink
                      >
                      <div class="wrap-megamenu lg-width-900 md-width-640">
                        <div class="mega-content">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Fresh Fuits</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Fruit & Nut Gifts</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mixed Fruits</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Oranges</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Bananas & Plantains</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Fresh Gala Apples</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Berries</NuxtLink></li>
                                  <li><NuxtLink to="#">Pears</NuxtLink></li>
                                  <li><NuxtLink to="#">Produce</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Snack Foods</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Nut Gifts</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Non-Dairy Coffee Creamers</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Coffee Creamers</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mayonnaise</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Almond Milk</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Ghee</NuxtLink></li>
                                  <li><NuxtLink to="#">Beverages</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Ranch Salad Dressings</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Hemp Milk</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Nuts & Seeds</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-6 col-md-4 col-sm-12 lg-padding-left-50 xs-margin-bottom-25 md-margin-bottom-0"
                            >
                              <div class="biolife-products-block max-width-270">
                                <h4 class="menu-title">Bestseller Products</h4>
                                <ul
                                  class="products-list default-product-style biolife-carousel nav-none-after-1k2 nav-center"
                                  data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":1, "responsive":[{"breakpoint":767, "settings":{ "arrows": false}}]}'
                                >
                                  <li class="product-item">
                                    <div class="contain-product none-overlay">
                                      <div class="product-thumb">
                                        <NuxtLink
                                          to="#"
                                          class="link-to-product"
                                        >
                                          <img
                                            src="~/assets/images/products/p-08.jpg"
                                            alt="dd"
                                            width="270"
                                            height="270"
                                            class="product-thumnail"
                                          />
                                        </NuxtLink>
                                      </div>
                                      <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title">
                                          <NuxtLink to="#" class="pr-name"
                                            >National Fresh Fruit</NuxtLink
                                          >
                                        </h4>
                                        <div class="price">
                                          <ins
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >85.00</span
                                            ></ins
                                          >
                                          <del
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >95.00</span
                                            ></del
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="product-item">
                                    <div class="contain-product none-overlay">
                                      <div class="product-thumb">
                                        <NuxtLink
                                          to="#"
                                          class="link-to-product"
                                        >
                                          <img
                                            src="~/assets/images/products/p-11.jpg"
                                            alt="dd"
                                            width="270"
                                            height="270"
                                            class="product-thumnail"
                                          />
                                        </NuxtLink>
                                      </div>
                                      <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title">
                                          <NuxtLink to="#" class="pr-name"
                                            >National Fresh Fruit</NuxtLink
                                          >
                                        </h4>
                                        <div class="price">
                                          <ins
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >85.00</span
                                            ></ins
                                          >
                                          <del
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >95.00</span
                                            ></del
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="product-item">
                                    <div class="contain-product none-overlay">
                                      <div class="product-thumb">
                                        <NuxtLink
                                          to="#"
                                          class="link-to-product"
                                        >
                                          <img
                                            src="~/assets/images/products/p-15.jpg"
                                            alt="dd"
                                            width="270"
                                            height="270"
                                            class="product-thumnail"
                                          />
                                        </NuxtLink>
                                      </div>
                                      <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title">
                                          <NuxtLink to="#" class="pr-name"
                                            >National Fresh Fruit</NuxtLink
                                          >
                                        </h4>
                                        <div class="price">
                                          <ins
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >85.00</span
                                            ></ins
                                          >
                                          <del
                                            ><span class="price-amount"
                                              ><span class="currencySymbol"
                                                >£</span
                                              >95.00</span
                                            ></del
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 md-margin-top-9"
                            >
                              <div class="biolife-brand">
                                <ul class="brands">
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/brand-organic.png"
                                        width="161"
                                        height="136"
                                        alt="organic"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/brand-explore.png"
                                        width="160"
                                        height="136"
                                        alt="explore"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/brand-organic-2.png"
                                        width="99"
                                        height="136"
                                        alt="organic 2"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/brand-eco-teas.png"
                                        width="164"
                                        height="136"
                                        alt="eco teas"
                                    /></NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu-item menu-item-has-children has-megamenu">
                      <NuxtLink to="#" class="menu-name" data-title="Vegetables"
                        ><i class="biolife-icon icon-broccoli-1"></i
                        >Vegetables</NuxtLink
                      >
                      <div
                        class="wrap-megamenu lg-width-900 md-width-640 background-mega-01"
                      >
                        <div class="mega-content">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Vegetables</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Fruit & Nut Gifts</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mixed Fruits</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Oranges</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Bananas & Plantains</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Fresh Gala Apples</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Berries</NuxtLink></li>
                                  <li><NuxtLink to="#">Pears</NuxtLink></li>
                                  <li><NuxtLink to="#">Produce</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Snack Foods</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-4 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Gifts</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Non-Dairy Coffee Creamers</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Coffee Creamers</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mayonnaise</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Almond Milk</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Ghee</NuxtLink></li>
                                  <li><NuxtLink to="#">Beverages</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Ranch Salad Dressings</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Hemp Milk</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Nuts & Seeds</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-5 col-md-4 col-sm-12 lg-padding-left-57 md-margin-bottom-30"
                            >
                              <div
                                class="biolife-brand vertical md-boder-left-30"
                              >
                                <h4 class="menu-title">Hot Brand</h4>
                                <ul class="brands">
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/v-brand-organic.png"
                                        width="167"
                                        height="74"
                                        alt="organic"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/v-brand-explore.png"
                                        width="167"
                                        height="72"
                                        alt="explore"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/v-brand-organic-2.png"
                                        width="167"
                                        height="99"
                                        alt="organic 2"
                                    /></NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/v-brand-eco-teas.png"
                                        width="167"
                                        height="67"
                                        alt="eco teas"
                                    /></NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu-item menu-item-has-children has-megamenu">
                      <NuxtLink
                        to="#"
                        class="menu-name"
                        data-title="Fresh Berries"
                        ><i class="biolife-icon icon-grape"></i>Fresh
                        Berries</NuxtLink
                      >
                      <div
                        class="wrap-megamenu lg-width-900 md-width-640 background-mega-02"
                      >
                        <div class="mega-content">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Fresh Berries</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Fruit & Nut Gifts</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mixed Fruits</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Oranges</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Bananas & Plantains</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Fresh Gala Apples</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Berries</NuxtLink></li>
                                  <li><NuxtLink to="#">Pears</NuxtLink></li>
                                  <li><NuxtLink to="#">Produce</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Snack Foods</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-4 sm-col-12 lg-padding-left-23 xs-margin-bottom-36px md-margin-bottom-0"
                            >
                              <div class="wrap-custom-menu vertical-menu">
                                <h4 class="menu-title">Gifts</h4>
                                <ul class="menu">
                                  <li>
                                    <NuxtLink to="#"
                                      >Non-Dairy Coffee Creamers</NuxtLink
                                    >
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Coffee Creamers</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Mayonnaise</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="#">Almond Milk</NuxtLink>
                                  </li>
                                  <li><NuxtLink to="#">Ghee</NuxtLink></li>
                                  <li><NuxtLink to="#">Beverages</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#"
                                      >Ranch Salad Dressings</NuxtLink
                                    >
                                  </li>
                                  <li><NuxtLink to="#">Hemp Milk</NuxtLink></li>
                                  <li>
                                    <NuxtLink to="#">Nuts & Seeds</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="col-lg-6 col-md-4 sm-col-12 lg-padding-left-25 md-padding-top-55"
                            >
                              <div class="biolife-banner layout-01">
                                <h3 class="top-title">Farm Fresh</h3>
                                <p class="content">
                                  All the Lorem Ipsum generators on the Internet
                                  tend.
                                </p>
                                <b class="bottomm-title">Berries Series</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu-item">
                      <NuxtLink
                        to="/checkout"
                        class="menu-name"
                        data-title="Ocean Foods"
                        ><i class="biolife-icon icon-fish"></i
                        >Checkout</NuxtLink
                      >
                    </li>
                    <li class="menu-item menu-item-has-children has-child">
                      <NuxtLink
                        to="/profile"
                        class="menu-name"
                        data-title="Butter & Eggs"
                        ><i class="biolife-icon icon-honey"></i
                        >Profile</NuxtLink
                      >
                      <ul class="sub-menu">
                        <li class="menu-item">
                          <NuxtLink to="/shoppingCart">shopping cart</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="#">Breakfast Scrambles</NuxtLink>
                        </li>
                        <li class="menu-item menu-item-has-children has-child">
                          <NuxtLink
                            to="/login"
                            class="menu-name"
                            data-title="Eggs & other considerations"
                            >Login</NuxtLink
                          >
                          <!-- <ul class="sub-menu">
                            <li class="menu-item">
                              <NuxtLink to="#">Classic Breakfast</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Huevos Rancheros</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Everything Egg Sandwich</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Egg Sandwich</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Vegan Burrito</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Biscuits and Gravy</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Bacon Avo Egg Sandwich</NuxtLink>
                            </li>
                          </ul> -->
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/register">Register</NuxtLink>
                        </li>
                        <li class="menu-item menu-item-has-children has-child">
                          <NuxtLink
                            to="/Dashboard"
                            class="menu-name"
                            data-title="Sides & Extras"
                            >Dashboard</NuxtLink
                          >
                          <!-- <ul class="sub-menu">
                            <li class="menu-item">
                              <NuxtLink to="#">Breakfast Burrito</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Crab Cake Benedict</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Corned Beef Hash</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="#">Steak & Eggs</NuxtLink>
                            </li>
                            <li class="menu-item"><NuxtLink to="#">Oatmeal</NuxtLink></li>
                            <li class="menu-item">
                              <NuxtLink to="#">Fruit & Yogurt Parfait</NuxtLink>
                            </li>
                          </ul> -->
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/products">products</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/wallet">wallet</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-fast-food"></i
                        >Fastfood</NuxtLink
                      >
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-beef"></i>Fresh
                        Meat</NuxtLink
                      >
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-onions"></i>Fresh
                        Onion</NuxtLink
                      >
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-avocado"></i>Papaya &
                        Crisps</NuxtLink
                      >
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-contain"></i
                        >Oatmeal</NuxtLink
                      >
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="#" class="menu-title"
                        ><i class="biolife-icon icon-fresh-juice"></i>Fresh
                        Bananas & Plantains</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-6 hidden-sm hidden-xs md-possition-initial"
            >
              <div class="primary-menu">
                <ul
                  class="menu biolife-menu clone-main-menu clone-primary-menu"
                  id="primary-menu"
                  data-menuname="main menu"
                >
                  <li class="menu-item"><NuxtLink to="/">Home</NuxtLink></li>
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <NuxtLink to="#" class="menu-name" data-title="Shop"
                      >Shop <span class="angle fa fa-caret-down"></span
                    ></NuxtLink>
                    <div class="wrap-megamenu lg-width-900 md-full-width">
                      <div class="mega-content">
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Fresh Berries</h4>
                            <ul class="menu">
                              <li>
                                <NuxtLink to="#">Fruit & Nut Gifts</NuxtLink>
                              </li>
                              <li><NuxtLink to="#">Mixed Fruits</NuxtLink></li>
                              <li><NuxtLink to="#">Oranges</NuxtLink></li>
                              <li>
                                <NuxtLink to="#">Bananas & Plantains</NuxtLink>
                              </li>
                              <li>
                                <NuxtLink to="#">Fresh Gala Apples</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Vegetables</h4>
                            <ul class="menu">
                              <li><NuxtLink to="#">Berries</NuxtLink></li>
                              <li><NuxtLink to="#">Pears</NuxtLink></li>
                              <li><NuxtLink to="#">Chili Peppers</NuxtLink></li>
                              <li><NuxtLink to="#">Fresh Avocado</NuxtLink></li>
                              <li><NuxtLink to="#">Grapes</NuxtLink></li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Fresh Fruits</h4>
                            <ul class="menu">
                              <li>
                                <NuxtLink to="#">Basket of apples</NuxtLink>
                              </li>
                              <li><NuxtLink to="#">Strawberry</NuxtLink></li>
                              <li><NuxtLink to="#">Blueberry</NuxtLink></li>
                              <li><NuxtLink to="#">Orange</NuxtLink></li>
                              <li><NuxtLink to="#">Pineapple</NuxtLink></li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Featured Products</h4>
                            <ul class="menu">
                              <li>
                                <NuxtLink to="#">Coffee Creamers</NuxtLink>
                              </li>
                              <li><NuxtLink to="#">Mayonnaise</NuxtLink></li>
                              <li><NuxtLink to="#">Almond Milk</NuxtLink></li>
                              <li><NuxtLink to="#">Fruit Jam</NuxtLink></li>
                              <li><NuxtLink to="#">Beverages</NuxtLink></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item menu-item-has-children has-child">
                    <NuxtLink to="#" class="menu-name" data-title="Product"
                      >Product <span class="angle fa fa-caret-down"></span
                    ></NuxtLink>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <NuxtLink to="/Register">Register</NuxtLink>
                      </li>
                      <li class="menu-item">
                        <NuxtLink to="/login">Login</NuxtLink>
                      </li>
                      <li class="menu-item menu-item-has-children has-child">
                        <NuxtLink
                          to="#"
                          class="menu-name"
                          data-title="Eggs & other considerations"
                          >Dashboard</NuxtLink
                        >
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <NuxtLink to="/profile">Profile</NuxtLink>
                          </li>
                          <li class="menu-item">
                            <NuxtLink to="/profileedit">Profile Edit</NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <NuxtLink to="/product">Product List</NuxtLink>
                      </li>
                      <li class="menu-item menu-item-has-children has-child">
                        <NuxtLink
                          to="/products"
                          class="menu-name"
                          data-title="Sides & Extras"
                          >Products</NuxtLink
                        >
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <NuxtLink to="/productdetail"
                              >Product Details</NuxtLink
                            >
                          </li>
                          <li class="menu-item">
                            <NuxtLink to="/shoppingCart"
                              >Shopping Cart</NuxtLink
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <NuxtLink to="/contact">Contact</NuxtLink>
                      </li>
                      <li class="menu-item">
                        <NuxtLink to="/about">About</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <NuxtLink to="#" class="menu-name" data-title="Pages"
                      >Demo <span class="angle fa fa-caret-down"></span
                    ></NuxtLink>
                    <div class="wrap-megamenu lg-width-800 md-full-width">
                      <div class="mega-content">
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Home Page</h4>
                            <ul class="menu">
                              <li class="menu-item">
                                <NuxtLink to="home-01">Home 01</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="home-02">Home 02</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="index-2">Home 03</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="home-03-green"
                                  >Home 03 Green</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="home-04">Home 04</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="home-04-light"
                                  >Home 04 Light</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="home-05">Home 05</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Inner Pages</h4>
                            <ul class="menu">
                              <li class="menu-item">
                                <NuxtLink to="blog-post"
                                  >Blog Single</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="blog-v01"
                                  >Blog Style 01</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="blog-v02"
                                  >Blog Style 02</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="blog-v03"
                                  >Blog Style 03</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="contact"
                                  >Contact Us</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="about-us">About Us</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="checkout">Checkout</NuxtLink>
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="shopping-cart"
                                  >Shopping Cart</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="/login"
                                  >Login/Register</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="404">404</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Category Pages</h4>
                            <ul class="menu">
                              <li class="menu-item">
                                <NuxtLink to="category-grid-3-cols"
                                  >Grid 3 Cols</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-grid"
                                  >Grid 4 Cols</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-grid-6-cols"
                                  >Grid 6 Cols</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-grid-left-sidebar"
                                  >Grid Left Sidebar</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-grid-right-sidebar"
                                  >Grid Right Sidebar</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-list"
                                  >List Full</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-list-left-sidebar"
                                  >List Left Sidebar</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="category-list-right-sidebar"
                                  >List Right Sidebar</NuxtLink
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25"
                        >
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Product Types</h4>
                            <ul class="menu">
                              <li class="menu-item">
                                <NuxtLink to="single-product-simple"
                                  >Simple</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="single-product-grouped"
                                  >Grouped</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="single-product"
                                  >Variable</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="single-product-external"
                                  >External/Affiliate</NuxtLink
                                >
                              </li>
                              <li class="menu-item">
                                <NuxtLink to="single-product-onsale"
                                  >Countdown</NuxtLink
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <NuxtLink to="#" class="menu-name" data-title="Blog"
                      >Blog <span class="angle fa fa-caret-down"></span
                    ></NuxtLink>
                    <div class="wrap-megamenu lg-width-800 md-full-width">
                      <div class="mega-content">
                        <div class="col-lg-3 col-md-3 col-xs-6">
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Blog Categories</h4>
                            <ul class="menu">
                              <li><NuxtLink to="#">Beauty (30)</NuxtLink></li>
                              <li><NuxtLink to="#">Fashion (50)</NuxtLink></li>
                              <li><NuxtLink to="#">Food (10)</NuxtLink></li>
                              <li>
                                <NuxtLink to="#">Life Style (60)</NuxtLink>
                              </li>
                              <li><NuxtLink to="#">Travel (10)</NuxtLink></li>
                              <li>
                                <NuxtLink to="#">Nutrition (35)</NuxtLink>
                              </li>
                              <li>
                                <NuxtLink to="#">Food Decoration (45)</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-6">
                          <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Featured Posts</h4>
                            <ul class="menu">
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#1</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#2</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#3</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#4</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#5</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#6</sup></NuxtLink
                                >
                              </li>
                              <li>
                                <NuxtLink to="#"
                                  >Post example<sup>#7</sup></NuxtLink
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px"
                        >
                          <div class="block-posts">
                            <h4 class="menu-title">Recent Posts</h4>
                            <ul class="posts">
                              <li>
                                <div class="block-post-item">
                                  <div class="thumb">
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/thumb-05.jpg"
                                        width="100"
                                        height="73"
                                        alt=""
                                    /></NuxtLink>
                                  </div>
                                  <div class="left-info">
                                    <h4 class="post-name">
                                      <NuxtLink to="#"
                                        >Ashwagandha: The #1 Herb in the World
                                        for Anxiety?</NuxtLink
                                      >
                                    </h4>
                                    <span class="p-date">Jan 05, 2019</span>
                                    <span class="p-comment">2 Comments</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="block-post-item">
                                  <div class="thumb">
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/thumb-06.jpg"
                                        width="100"
                                        height="73"
                                        alt=""
                                    /></NuxtLink>
                                  </div>
                                  <div class="left-info">
                                    <h4 class="post-name">
                                      <NuxtLink to="#"
                                        >Ashwagandha: The #1 Herb in the World
                                        for Anxiety?</NuxtLink
                                      >
                                    </h4>
                                    <span class="p-date">May 15, 2019</span>
                                    <span class="p-comment">8 Comments</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="block-post-item">
                                  <div class="thumb">
                                    <NuxtLink to="#"
                                      ><img
                                        src="~/assets/images/megamenu/thumb-07.jpg"
                                        width="100"
                                        height="73"
                                        alt=""
                                    /></NuxtLink>
                                  </div>
                                  <div class="left-info">
                                    <h4 class="post-name">
                                      <NuxtLink to="#"
                                        >Ashwagandha: The #1 Herb in the World
                                        for Anxiety?</NuxtLink
                                      >
                                    </h4>
                                    <span class="p-date">Apr 26, 2019</span>
                                    <span class="p-comment">10 Comments</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div class="logo-for-mobile hidden-lg hidden-md">
                <NuxtLink to="/" class="biolife-logo"
                  ><img
                    src="~/assets/landing/images/newz.svg"
                    alt="biolife logo"
                    width="135"
                    height="36"
                /></NuxtLink>
              </div>
              <div class="biolife-cart-info center-align-mobile">
                <div class="mobile-search">
                  <NuxtLink to="#" class="open-searchbox"
                    ><i class="biolife-icon icon-search"></i
                  ></NuxtLink>
                  <div class="mobile-search-content">
                    <form
                      action="#"
                      class="form-search"
                      name="mobile-seacrh"
                      method="get"
                    >
                      <NuxtLink to="#" class="btn-close"
                        ><span class="biolife-icon icon-close-menu"></span
                      ></NuxtLink>
                      <input
                        type="text"
                        name="s"
                        class="input-text"
                        value=""
                        placeholder="Search here..."
                      />
                      <select name="category">
                        <option value="-1" selected>All Categories</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fresh_berries">Fresh Berries</option>
                        <option value="ocean_foods">Ocean Foods</option>
                        <option value="butter_eggs">Butter & Eggs</option>
                        <option value="fastfood">Fastfood</option>
                        <option value="fresh_meat">Fresh Meat</option>
                        <option value="fresh_onion">Fresh Onion</option>
                        <option value="papaya_crisps">Papaya & Crisps</option>
                        <option value="oatmeal">Oatmeal</option>
                      </select>
                      <button type="submit" class="btn-submit">go</button>
                    </form>
                  </div>
                </div>
                <div class="minicart-block layout-02">
                  <div class="minicart-contain">
                    <div class="icon-contain">
                      <div class="span-index">
                        <i class="icon-cart-mini biolife-icon"></i>
                        <span class="qty">8</span>
                        <span class="sub-total">0 items - $0.00</span>
                      </div>
                      <NuxtLink to="#" class="btn-to-cart">Go</NuxtLink>
                    </div>
                    <div class="cart-content">
                      <div class="cart-inner">
                        <ul class="products">
                          <li>
                            <div class="minicart-item">
                              <div class="thumb">
                                <NuxtLink to="#"
                                  ><img
                                    src="~/assets/images/minicart/pr-01.jpg"
                                    width="90"
                                    height="90"
                                    alt="National Fresh"
                                /></NuxtLink>
                              </div>
                              <div class="left-info">
                                <div class="product-title">
                                  <NuxtLink to="#" class="product-name"
                                    >National Fresh Fruit</NuxtLink
                                  >
                                </div>
                                <div class="price">
                                  <ins
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >85.00</span
                                    ></ins
                                  >
                                  <del
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >95.00</span
                                    ></del
                                  >
                                </div>
                                <div class="qty">
                                  <label for="cart[id123][qty]">Qty:</label>
                                  <input
                                    type="number"
                                    class="input-qty"
                                    name="cart[id123][qty]"
                                    id="cart[id123][qty]"
                                    value="1"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="action">
                                <NuxtLink to="#" class="edit"
                                  ><i
                                    class="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                                <NuxtLink to="#" class="remove"
                                  ><i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="minicart-item">
                              <div class="thumb">
                                <NuxtLink to="#"
                                  ><img
                                    src="~/assets/images/minicart/pr-02.jpg"
                                    width="90"
                                    height="90"
                                    alt="National Fresh"
                                /></NuxtLink>
                              </div>
                              <div class="left-info">
                                <div class="product-title">
                                  <NuxtLink to="#" class="product-name"
                                    >National Fresh Fruit</NuxtLink
                                  >
                                </div>
                                <div class="price">
                                  <ins
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >85.00</span
                                    ></ins
                                  >
                                  <del
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >95.00</span
                                    ></del
                                  >
                                </div>
                                <div class="qty">
                                  <label for="cart[id124][qty]">Qty:</label>
                                  <input
                                    type="number"
                                    class="input-qty"
                                    name="cart[id124][qty]"
                                    id="cart[id124][qty]"
                                    value="1"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="action">
                                <NuxtLink to="#" class="edit"
                                  ><i
                                    class="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                                <NuxtLink to="#" class="remove"
                                  ><i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="minicart-item">
                              <div class="thumb">
                                <NuxtLink to="#"
                                  ><img
                                    src="~/assets/images/minicart/pr-03.jpg"
                                    width="90"
                                    height="90"
                                    alt="National Fresh"
                                /></NuxtLink>
                              </div>
                              <div class="left-info">
                                <div class="product-title">
                                  <NuxtLink to="#" class="product-name"
                                    >National Fresh Fruit</NuxtLink
                                  >
                                </div>
                                <div class="price">
                                  <ins
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >85.00</span
                                    ></ins
                                  >
                                  <del
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >95.00</span
                                    ></del
                                  >
                                </div>
                                <div class="qty">
                                  <label for="cart[id125][qty]">Qty:</label>
                                  <input
                                    type="number"
                                    class="input-qty"
                                    name="cart[id125][qty]"
                                    id="cart[id125][qty]"
                                    value="1"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="action">
                                <NuxtLink to="#" class="edit"
                                  ><i
                                    class="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                                <NuxtLink to="#" class="remove"
                                  ><i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="minicart-item">
                              <div class="thumb">
                                <NuxtLink to="#"
                                  ><img
                                    src="~/assets/images/minicart/pr-04.jpg"
                                    width="90"
                                    height="90"
                                    alt="National Fresh"
                                /></NuxtLink>
                              </div>
                              <div class="left-info">
                                <div class="product-title">
                                  <NuxtLink to="#" class="product-name"
                                    >National Fresh Fruit</NuxtLink
                                  >
                                </div>
                                <div class="price">
                                  <ins
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >85.00</span
                                    ></ins
                                  >
                                  <del
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >95.00</span
                                    ></del
                                  >
                                </div>
                                <div class="qty">
                                  <label for="cart[id126][qty]">Qty:</label>
                                  <input
                                    type="number"
                                    class="input-qty"
                                    name="cart[id126][qty]"
                                    id="cart[id126][qty]"
                                    value="1"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="action">
                                <NuxtLink to="#" class="edit"
                                  ><i
                                    class="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                                <NuxtLink to="#" class="remove"
                                  ><i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="minicart-item">
                              <div class="thumb">
                                <NuxtLink to="#"
                                  ><img
                                    src="~/assets/images/minicart/pr-05.jpg"
                                    width="90"
                                    height="90"
                                    alt="National Fresh"
                                /></NuxtLink>
                              </div>
                              <div class="left-info">
                                <div class="product-title">
                                  <NuxtLink to="#" class="product-name"
                                    >National Fresh Fruit</NuxtLink
                                  >
                                </div>
                                <div class="price">
                                  <ins
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >85.00</span
                                    ></ins
                                  >
                                  <del
                                    ><span class="price-amount"
                                      ><span class="currencySymbol">£</span
                                      >95.00</span
                                    ></del
                                  >
                                </div>
                                <div class="qty">
                                  <label for="cart[id127][qty]">Qty:</label>
                                  <input
                                    type="number"
                                    class="input-qty"
                                    name="cart[id127][qty]"
                                    id="cart[id127][qty]"
                                    value="1"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="action">
                                <NuxtLink to="#" class="edit"
                                  ><i
                                    class="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                                <NuxtLink to="#" class="remove"
                                  ><i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i
                                ></NuxtLink>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <p class="btn-control">
                          <NuxtLink to="#" class="btn view-cart"
                            >view cart</NuxtLink
                          >
                          <NuxtLink to="#" class="btn">checkout</NuxtLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mobile-menu-toggle">
                  <NuxtLink
                    class="btn-toggle"
                    data-object="open-mobile-menu"
                    to="#"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    $.fn.biolife_vertical_menu = function () {
      $(this).each(function () {
        let this_menu = $(this);
        this_menu.on("click", ".block-title", function (e) {
          e.preventDefault();
          this_menu.toggleClass("open-menu");
        });
        $document.on("reset-vertical-menu", function (e) {
          e.preventDefault();
          this_menu.removeClass("open-menu");
        });
      });
    };

    let jque = document.createElement("script");
    jque.setAttribute("src", "/js/jquery-3.4.1.min.js");
    jque.setAttribute("defer", "true");
    document.body.appendChild(jque);

    let boots = document.createElement("script");
    boots.setAttribute("src", "/js/bootstrap.min.js");
    boots.setAttribute("defer", "true");
    document.body.appendChild(boots);

    let countDown = document.createElement("script");
    countDown.setAttribute("src", "/js/jquery.countdown.min.js");
    countDown.setAttribute("defer", "true");
    document.body.appendChild(countDown);

    let nicescroll = document.createElement("script");
    nicescroll.setAttribute("src", "/js/jquery.nicescroll.min.js");
    nicescroll.setAttribute("defer", "true");
    document.body.appendChild(nicescroll);

    let niceselect = document.createElement("script");
    niceselect.setAttribute("src", "/js/jquery.nice-select.min.js");
    niceselect.setAttribute("defer", "true");
    document.body.appendChild(niceselect);

    let slick = document.createElement("script");
    slick.setAttribute("src", "/js/slick.min.js");
    slick.setAttribute("defer", "true");
    document.body.appendChild(slick);

    let bio = document.createElement("script");
    bio.setAttribute("src", "/js/biolife.framework.js");
    bio.setAttribute("defer", "true");
    document.body.appendChild(bio);

    let func = document.createElement("script");
    func.setAttribute("src", "/js/functions.js");
    func.setAttribute("defer", "true");
    document.body.appendChild(func);
  },
};
</script>

<style scoped lang="css">
@import "~/assets/css/bootstrap.min.css";
@import "~/assets/css/animate.min.css";
@import "~/assets/css/font-awesome.min.css";
@import "~/assets/css/nice-select.css";
@import "~/assets/css/slick.min.css";
@import "~/assets/css/style.css";
@import "~/assets/css/main-color01.css";
</style>
