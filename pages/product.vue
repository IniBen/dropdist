<template>
  <div>
    <!--Hero Section-->
    <div class="hero-section hero-background">
      <h1 class="page-title">Organic Fruits</h1>
    </div>

    <!--Navigation section-->
    <div class="container">
      <nav class="biolife-nav">
        <ul>
          <li class="nav-item">
            <NuxtLink to="/" class="permal-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="permal-link">Natural Organic</NuxtLink>
          </li>
          <li class="nav-item">
            <span class="current-page">Fresh Fruit</span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-contain category-page no-sidebar">
      <div class="container">
        <div class="row">
          <!-- Main content -->
          <div
            id="main-content"
            class="main-content col-lg-12 col-md-12 col-sm-12 col-xs-12"
          >
            <div class="block-item recently-products-cat md-margin-bottom-39">
              <!-- <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile" data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":0,"slidesToShow":5, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":30}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":10}}]}' >
                             <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-08.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-11.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-17.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-15.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-09.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-02.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-07.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-03.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="product-item">
                                <div class="contain-product layout-02">
                                    <div class="product-thumb">
                                        <NuxtLink to="#" class="link-to-product">
                                            <img src="~/assets/images/products/p-21.jpg" alt="dd" width="270" height="270" class="product-thumnail">
                                        </NuxtLink>
                                    </div>
                                    <div class="info">
                                        <b class="categories">Fresh Fruit</b>
                                        <h4 class="product-title"><NuxtLink to="#" class="pr-name">National Fresh Fruit</NuxtLink></h4>
                                        <div class="price">
                                            <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                            <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul> -->
            </div>

            <div class="product-category grid-style">
              <div id="top-functions-area" class="top-functions-area">
                <div class="flt-item to-left group-on-mobile">
                  <span class="flt-title">Refine</span>
                  <NuxtLink to="#" class="icon-for-mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                  </NuxtLink>
                  <div class="wrap-selectors">
                    <form action="#" name="frm-refine" method="get">
                      <span class="title-for-mobile">Refine Products By</span>
                      <div data-title="Price:" class="selector-item">
                        <select name="price" class="selector">
                          <option value="all">Price</option>
                          <option value="class-1st">Less than 5$</option>
                          <option value="class-2nd">$5-10$</option>
                          <option value="class-3rd">$10-20$</option>
                          <option value="class-4th">$20-45$</option>
                          <option value="class-5th">$45-100$</option>
                          <option value="class-6th">$100-150$</option>
                          <option value="class-7th">More than 150$</option>
                        </select>
                      </div>
                      <div data-title="Brand:" class="selector-item">
                        <select name="brad" class="selector">
                          <option value="all">Top brands</option>
                          <option value="br2">Brand first</option>
                          <option value="br3">Brand second</option>
                          <option value="br4">Brand third</option>
                          <option value="br5">Brand fourth</option>
                          <option value="br6">Brand fiveth</option>
                        </select>
                      </div>
                      <div data-title="Avalability:" class="selector-item">
                        <select name="ability" class="selector">
                          <option value="all">Availability</option>
                          <option value="vl2">Availability 1</option>
                          <option value="vl3">Availability 2</option>
                          <option value="vl4">Availability 3</option>
                          <option value="vl5">Availability 4</option>
                          <option value="vl6">Availability 5</option>
                        </select>
                      </div>
                      <p class="btn-for-mobile">
                        <button type="submit" class="btn-submit">Go</button>
                      </p>
                    </form>
                  </div>
                </div>
                <div class="flt-item to-right">
                  <span class="flt-title">Sort</span>
                  <div class="wrap-selectors">
                    <div class="selector-item orderby-selector">
                      <select
                        name="orderby"
                        class="orderby"
                        aria-label="Shop order"
                      >
                        <option value="menu_order" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">popularity</option>
                        <option value="rating">average rating</option>
                        <option value="date">newness</option>
                        <option value="price">price: low to high</option>
                        <option value="price-desc">price: high to low</option>
                      </select>
                    </div>
                    <div class="selector-item viewmode-selector">
                      <NuxtLink
                        to="category-grid-left-sidebar.html"
                        class="viewmode grid-mode active"
                        ><i class="biolife-icon icon-grid"></i
                      ></NuxtLink>
                      <NuxtLink
                        to="category-list-left-sidebar.html"
                        class="viewmode detail-mode"
                        ><i class="biolife-icon icon-list"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <ul class="products-list">
                  <template v-for="product in products">
                    <v-col :key="product.id">
                      <commerce-item :key="product.id" :product="product" />
                    </v-col>
                  </template>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-13.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-21.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-14.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-16.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-17.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-18.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-10.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-09.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-10.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-17.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-14.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-13.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-21.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-14.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-16.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-17.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-18.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <NuxtLink
                          to="{
                            name: 'pageproductdetails-detailid',
                            params: { id: index.objectid },
                          }"
                          class="link-to-product"
                        >
                          <img
                            src="~/assets/images/products/p-10.jpg"
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
                              ><span class="currencySymbol">£</span>85.00</span
                            ></ins
                          >
                          <del
                            ><span class="price-amount"
                              ><span class="currencySymbol">£</span>95.00</span
                            ></del
                          >
                        </div>
                        <div class="shipping-info">
                          <p class="shipping-day">3-Day Shipping</p>
                          <p class="for-today">Pree Pickup Today</p>
                        </div>
                        <div class="slide-down-box">
                          <p class="message">
                            All products are carefully selected to ensure food
                            safety.
                          </p>
                          <div class="buttons">
                            <NuxtLink to="#" class="btn wishlist-btn"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                            ></NuxtLink>
                            <NuxtLink to="#" class="btn add-to-cart-btn"
                              ><i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i
                              >add to cart</NuxtLink
                            >
                            <NuxtLink to="#" class="btn compare-btn"
                              ><i class="fa fa-random" aria-hidden="true"></i
                            ></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="biolife-panigations-block">
                <ul class="panigation-contain">
                  <li><span class="current-page">1</span></li>
                  <li><a to="#" class="link-page">2</a></li>
                  <li><a to="#" class="link-page">3</a></li>
                  <li><span class="sep">....</span></li>
                  <li><a to="#" class="link-page">20</a></li>
                  <li>
                    <a to="#" class="link-page next"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CommerceItem from "~/components/CommerceItem";
export default {
  components: {
    CommerceItem,
  },
  computed: {
    ...mapGetters({ products: "products" }),
  },
  mounted() {
    let j = document.createElement("script");
    j.setAttribute("src", "/js/jquery-3.4.1.min.js");
    j.setAttribute("defer", "true");
    document.body.appendChild(j);

    let js = document.createElement("script");
    js.setAttribute("src", "/js/bootstrap.min.js");
    js.setAttribute("defer", "true");
    document.body.appendChild(js);

    let jsS = document.createElement("script");
    jsS.setAttribute("src", "/js/jquery.countdown.min.js");
    jsS.setAttribute("defer", "true");
    document.body.appendChild(jsS);

    let jsSc = document.createElement("script");
    jsSc.setAttribute("src", "/js/jquery.nicescroll.min.js");
    jsSc.setAttribute("defer", "true");
    document.body.appendChild(jsSc);

    let jsScr = document.createElement("script");
    jsScr.setAttribute("src", "/js/jquery.nice-select.min.js");
    jsScr.setAttribute("defer", "true");
    document.body.appendChild(jsScr);

    let jsScri = document.createElement("script");
    jsScri.setAttribute("src", "/js/slick.min.js");
    jsScri.setAttribute("defer", "true");
    document.body.appendChild(jsScri);

    let jsScrip = document.createElement("script");
    jsScrip.setAttribute("src", "/js/biolife.framework.js");
    jsScrip.setAttribute("defer", "true");
    document.body.appendChild(jsScrip);

    let jsScript = document.createElement("script");
    jsScript.setAttribute("src", "/js/functions.js");
    jsScript.setAttribute("defer", "true");
    document.body.appendChild(jsScript);
  },
};
</script>

<style scoped></style>
