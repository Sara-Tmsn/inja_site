<template>
  <div id="app">
    <v-app>
      <v-main>
        <Login />
        <!-- <ShoppingCart /> -->
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
'use strict'
import Login from '../components/Login.vue'
// import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  name: 'App',

  components: {
    Login,
    // ShoppingCart,
  },

  data: () => ({
    //
  }),
  mounted() {
    let cart = localStorage.getItem('cart')
    // console.log(JSON.parse(cart))
    this.$store.dispatch('updateCartFromLocalStorage', JSON.parse(cart))
  },
}
</script>

<style>
@font-face {
  font-family: 'IRANSans';
  src: local('IRANSans'),
    url('../static/fonts/IRANSans-Medium.ttf') format('truetype');
}
.v-text-field input {
  font-size: 1em;
}
.v-label {
  font-size: 1em !important;
}
.btn {
  border: 1px solid #dbdbdb !important;
  color: #262626 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  border-radius: 4px !important;
  padding: 4px 6px !important;
}
</style>
