
<template>
  <home-page :admin="false" :card-config="{link: ''}" :showCart="true"/>
</template>

<script>
"use strict";
import HomePage from "../../../components/HomePage.vue";
export default {
  name: "Home",
  components: {
    HomePage,
  },
}
</script>

<style scoped>
</style>
