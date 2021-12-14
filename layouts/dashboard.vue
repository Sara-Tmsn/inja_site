<template>
  <div id="app">
    <v-app>
      <v-main>
         <BottomNav />
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
'use strict'
import BottomNav from '../components/BottomNav.vue'

export default {
  name: 'dashboard',

  components: {
    BottomNav,
  },

  data: () => ({
    //
  }),
  mounted () {
     let shopWindow = localStorage.getItem('shopWindow');
    //  this.$store.dispatch('updateShopWindowsFromLocalStorage', JSON.parse(shopWindow))
  }
}
</script>
<style>
@font-face {
  font-family: "IRANSans";
  src: local("IRANSans"), url("../static/fonts/IRANSans-Medium.ttf") format("truetype");
}
.dark-disabled-text .v-text-field__slot * {
  color: #262626 !important;
}
.v-text-field input {
    font-size: 1em;
  }
  .v-label {
    font-size: 1em !important;
  }
  .v-application--is-rtl .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
     font-size: 11px !important;
   }
   .v-application--is-rtl .v-data-table > .v-data-table__wrapper > table > thead > tr > th:first-child {
     padding: 0 0 0 12px !important;
   }
   .v-application--is-rtl .v-data-table > .v-data-table__wrapper > table > thead > tr > th:nth-child(4) {
     padding: 0 12px 0 0 !important;
   }
   .v-application--is-rtl .v-data-table > .v-data-table__wrapper > table > tbody > tr > td:first-child {
     padding: 0 0 0 12px !important;
   }
   .v-application--is-rtl .v-data-table > .v-data-table__wrapper > table > tbody > tr > td:nth-child(4) {
     padding: 0 12px 0 0 !important;
   }
</style>