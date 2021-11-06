
<template>
  <v-container pa-0 style="max-width: 935px" >
    <v-bottom-navigation v-model="value" grow height="64px" style="position:fixed; bottom:0; z-index:10;">
      <v-btn value="orders"  :to="{ name: 'dashboard-creator-_id-home-orders', params: {_id: $route.params._id}}">
        <span class="text-caption">سفارشات</span>
        <v-badge
          top
          overlap
          left
          :content="2"
          :value="true"
        >
          <v-icon size="32">mdi-shopping-outline </v-icon>
        </v-badge>
      </v-btn>
      <v-btn value="shop-window" :to="{ name: 'dashboard-creator-_id-home-shopWindow', params: {_id: $route.params._id}}">
        <span class="text-caption">ویترین</span>

        <v-icon size="32">mdi-storefront-outline</v-icon>
      </v-btn>
      <v-btn value="inventory"  :to="{ name: 'dashboard-creator-_id-home-inventory', params: {_id: $route.params._id}}">
        <span class="text-caption">موجودی</span>

        <v-icon size="32">mdi-clipboard-edit-outline</v-icon>
      </v-btn>
      <v-btn value="settings"  :to="{ name: 'dashboard-creator-_id-home-settings', params: {_id: $route.params._id}}">
        <span class="text-caption">تنظیمات</span>

        <v-icon size="32">mdi-cog-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
'use strict'
// import axios from 'axios'
import Header from './Header.vue'
export default {
  name: 'BottomNav',
  components: {
    Header,
  },
  props: [],
  data() {
    return {
      value: 'shop-window',
    }
  },

  created() {},
  methods: {},
}
</script>

<style>
.v-bottom-navigation {
  padding: 0 !important;
  border-top: 1px solid #dbdbdb !important;
}
</style>
