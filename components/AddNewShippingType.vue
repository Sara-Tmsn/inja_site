<template>
  <v-btn icon
         style="background-color: #0095f6;
                    height: 32px;
                    width: 32px;
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    z-index: 1"
         @click="addNewShippingType">
    <v-icon color="white">mdi-plus</v-icon>
  </v-btn>
</template>

<script>
  'use strict'
  export default {
    name: 'AddNewShippingType',
    components: {},
    data() {
      return {
        panels: [0]
      }
    },
    mounted() {},
    computed: {},
    methods: {
      addNewShippingType() {
        this.$store.commit('addShippingType')
        this.$emit('add-new-shipping-type', this.panels)
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 400px) {}
  @media screen and (min-width: 401px) {}
</style>
