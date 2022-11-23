<template>
  <div class="row">
    <ui class="products-list">
      <li class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div class="contain-product layout-default">
          <div class="product-thumb">
            <NuxtLink
              :to="{
                name: 'pageproductdetails-detailid',
                params: { id: index.objectid },
              }"
              class="link-to-product"
            >
              <v-img
                :src="product.media.source"
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
              <NuxtLink to="#" class="pr-name">{{ product.name }}</NuxtLink>
            </h4>
            <div class="price">
              <ins
                ><span class="price-amount"
                  ><span class="currencySymbol">£</span>${{
                    product.price.formatted
                  }}</span
                ></ins
              >
              <del
                ><span class="price-amount"
                  ><span class="currencySymbol">£</span>${{
                    product.price.formatted
                  }}</span
                ></del
              >
            </div>
            <div class="shipping-info">
              <p class="shipping-day">3-Day Shipping</p>
              <p class="for-today">Pree Pickup Today</p>
            </div>
            <div class="slide-down-box">
              <p class="message">
                All products are carefully selected to ensure food safety.
              </p>
              <div class="buttons">
                <NuxtLink to="#" class="btn wishlist-btn"
                  ><i class="fa fa-heart" aria-hidden="true"></i
                ></NuxtLink>
                <NuxtLink to="#" class="btn add-to-cart-btn"
                  ><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add
                  to cart</NuxtLink
                >
                <NuxtLink to="#" class="btn compare-btn"
                  ><i class="fa fa-random" aria-hidden="true"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ui>
  </div>
</template>

<script>
export default {
  name: "CommerceItem",
  props: {
    product: {
      type: Object,
      default: () => ({
        id: "",
        media: null,
        name: "",
        price: "",
      }),
    },
  },
};
</script>

<style></style>
