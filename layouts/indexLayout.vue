<template>
  <div>
    <p-nav/>
    <Nuxt/>
    <p-footer/>
  </div>
</template>

<script>
import PFooter from '../components/pFooter.vue'
import pNav from '../components/pNav.vue'
export default {
  components: { pNav, PFooter },

}
</script>

<style>

</style>