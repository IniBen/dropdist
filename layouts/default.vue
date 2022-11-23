<template>
  <div>
    <gen-nav/>
    <Nuxt/>
    <p-footer/>
  </div>
</template>

<script>
import GenNav from '../components/genNav.vue'
import PFooter from '../components/pFooter.vue'
export default {
  components: { PFooter, GenNav },

}
</script>

<style>

</style>