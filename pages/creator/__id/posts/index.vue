<template>
  <v-container style="max-width: 935px">
    <Header
      :backButton="true"
      :admin="false"
      :title="full_name"
      :showCart="true"
    />
    <v-row align="center" class="my-11">
      <v-col
        cols="12"
        class="pa-0 ma-0"
        v-for="(post, index) in godarData"
        :key="'post' + index"
      >
        <product-card :admin="false" :post="post" :id="'id' + post._id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import ProductCard from '../../../../components/ProductCard.vue'
import Header from '../../../../components/Header.vue'
import axios from 'axios'

export default {
  name: 'Posts',
  components: {
    ProductCard,
    Header,
  },
  data: function () {
    return {
      username: null,
      full_name: null,
      godarData: null,
      creatorData: null,
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: 'easeInQuad',
      },
      editingVendor: false,
      scrolltimer: null,
    }
  },
  async fetch() {
    // await axios({
    //   url: "http://localhost:8080/posts/?" +
    //   "_creator=" + this.$route.params._id,
    //   method: "GET",
    // }).then((response) => {
    //   this.godarData = response.data;
    // });
    this.godarData = this.$store.state.products
    // console.log('fetch @ CreatorPosts')
    this.creatorData = this.$store.state.creators[0]
    this.full_name = this.creatorData.full_name
    this.userName = this.creatorData.username
    // await axios({
    //   url: "http://localhost:8080/creators/?" +
    //   "_id=" + this.$route.params._id,
    //   method: "GET",
    // }).then((response) => {
    //   this.creatorData = response.data;
    //   this.full_name = this.creatorData.full_name;
    //   this.userName = this.creatorData.username;
    //   // this.$vuetify.goTo(this.$route.hash, this.scrollOptions);
    // });
  },
  mounted() {
    this.scrolltimer = setTimeout(() => {
      this.$vuetify.goTo(this.$route.hash, this.scrollOptions)
    }, 100)
  },
  unmounted() {
    clearTimeout(this.scrolltimer)
  },
  watch: {},
  // updated() {

  // },
  computed: {},
  methods: {
    handleEditVendor(e) {
      this.editingVendor = e
    },
  },
}
</script>

<style scoped></style>
