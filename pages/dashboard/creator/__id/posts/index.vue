
<template>
  <v-container style="max-width: 935px">
    <Header
      :admin="true"
      :backButton="true"
      title="ویترین"
      @edit-vendor="handleEditVendor"
      :showCart="false"
    />
    <v-row align="center" class="my-11">
        <v-col
          cols="12"
          class="pa-0 ma-0"
          v-for="(post, index) in godarData"
          :key="'post' + index"
        >
            <product-card :admin="true" :editing="editingVendor" :post="post" :id="'id'+ post._id"/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
"use strict";
// import data from "../../public/data.js";
import ProductCard from "../../../../../components/ProductCard.vue";
import axios from "axios";
import Header from '../../../../../components/Header.vue';


export default {
  name: "PostsDashboard",
  layout: 'dashboard',
  components: {
    ProductCard, Header
  },
  data: function () {
    return {
      godarData: null,
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInQuad",
      },
      editingVendor: false
    };
  },
  async fetch() {
    await axios({
      url: "http://localhost:8080/posts?" +
      "_creator=" + this.$route.params._id,
      method: "GET",
    }).then((response) => {
      this.godarData = response.data;
      // console.log(this.scrollOptions);
      // this.$vuetify.goTo(this.$route.hash, this.scrollOptions);
    });
  },
   mounted() {
    this.scrolltimer = setTimeout(() => {this.$vuetify.goTo(this.$route.hash, this.scrollOptions);}, 200)
  },
  unmounted () {
    clearTimeout(this.scrolltimer)
  },
  watch: {
  },
  computed: {
  },
  methods: {
    handleEditVendor (e) {
      this.editingVendor = e
    }
  }
};
</script>

<style scoped>
</style>
