
<template>
  <home-page :admin="true" :card-config="{link: 'dashboard'}" :showCart="false" title="ویترین"/>
</template>

<script>
"use strict";
import HomePage from "../../../../../components/HomePage.vue";
export default {
  name: "ShopWindow",
  layout: 'dashboard',
  components: {
    HomePage,
  },
}
</script>

<style scoped>
</style>
