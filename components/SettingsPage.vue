
<template>
  <v-container pa-0 style="max-width: 935px">
    <Header
      :admin="true"
      title="تنظیمات"
      :showCart="false"
    />
    <v-row no-gutters class="pa-0 mt-14" align="center">
      <v-list width="100%">
        <v-list-item
          v-for="tile in tiles"
          :key="tile.routeName"
          @click="dialog = false"
          :to="{
            name: tile.routeName , params: { _id: $route.params._id }}"
        >
          <v-list-item-avatar class="ma-0">
            <v-icon color="#262626" class="ml-2">{{ tile.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import Header from './Header.vue'
export default {
  name: 'SettingsPage',
  components: {
    Header,
  },
  props: [],

  data() {
    return {
      dialog: false,
      tiles: [
        {
          title: 'اطلاعات حساب کاربری',
          icon: 'mdi-account-outline',
          routeName: 'dashboard-creator-_id-settings-profile',
        },
        {
          title: 'اطلاعات ارسال',
          icon: 'mdi-truck-fast-outline',
          routeName: 'dashboard-creator-_id-settings-shipping',
        },
        ]
    }
  },
  computed: {},
  created() {},
  methods: {},
}
</script>

<style>
@media screen and (max-width: 734px) {
}
@media screen and (min-width: 735px) {
}
</style>
