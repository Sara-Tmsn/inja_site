<template>
  <v-app-bar fixed flat color="white" short>
    <v-container
      pa-0
      style="max-width: 935px; position: relative; height: 56px; display: flex"
    >
      <!--      <menu-dialog v-if="admin"/>-->
      <add-new-shipping-type v-if="addButton" />
      <shopping-cart v-if="showCart" />
      <v-row
        no-gutters
        style="position: absolute; width: 56px; height: 56px; top: 0; right: 0"
        justify="center"
        align="center"
      >
        <v-btn v-if="backButton" icon @click="$router.go(-1)">
          <v-icon color="#262626"> mdi-arrow-right </v-icon>
        </v-btn>
        <img v-else src="../static/here.png" alt="inja" height="32px" />
      </v-row>
      <v-row align="center" class="ma-0">
        <v-col cols="12" class="pa-0">
          <div
            class="font-weight-bold text-body-1 my-0"
            :style="
              admin
                ? 'text-align: start; margin-right: 56px'
                : 'text-align: center'
            "
          >
            {{ title }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
'use strict'
import ShoppingCart from '../components/ShoppingCart.vue'
// import MenuDialog from './MenuDialog.vue';
import AddNewShippingType from '~/components/AddNewShippingType'

export default {
  name: 'Header',
  components: {
    AddNewShippingType,
    ShoppingCart,
    // MenuDialog,
  },
  props: ['backButton', 'title', 'showCart', 'admin', 'addButton'],
  data() {
    return {
      editState: false,
    }
  },
  methods: {
    // onEditVendor() {
    //   if (this.admin) {
    //     this.editState = !this.editState;
    //     this.$emit("edit-vendor", this.editState);
    //   }
    // },
    // saveChanges() {
    //   if (this.admin) {
    //     this.editState = !this.editState;
    //     this.$emit("edit-vendor", this.editState);
    //   }
    // },
  },
}
</script>
<style>
.v-toolbar__content {
  padding: 0 !important;
  border-bottom: 1px solid #dbdbdb !important;
}
</style>
