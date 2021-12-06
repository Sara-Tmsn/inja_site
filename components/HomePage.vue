
<template>
  <v-container pa-0 style="max-width: 935px">
    <Header
      :admin="admin"
      :title="admin ? title : full_name"
      :showCart="showCart"
    />
    <!-- <Header
      :admin="admin"
      :title="admin ? title : full_name"
      @edit-vendor="handleEditVendor"
      :showCart="showCart"
    /> -->

    <v-row align="center" no-gutters justify="center">
      <v-col cols="12" class="mt-14">
        <div v-if="admin">
          <v-img v-if="url" :src="url" aspect-ratio="2" width="100%"></v-img>
<!--          <v-card v-else flat style="border: dashed 2px #0095f6" class="mx-4 mt-4 mb-2">-->
            <v-file-input
              v-model="banner"
              solo
              outlined
              justify="center"
              class="px-4 text-body-2 font-weight-medium"
              accept="image/png, image/jpeg, image/bmp"
              prepend-inner-icon="mdi-plus-circle-outline"
              prepend-icon=""
              :style="url ? 'margin-top: 0; border-style: 0 none' : 'margin-top: 8px; border-style: dashed 2px #0095f6'"
              placeholder="برای فروشگاه خود بنر انتخاب کنید"
              flat
              dense
              hide-details
              :hide-input="url.length != 0"
              @change="Preview_image"
            ></v-file-input>
<!--          </v-card>-->
          <!-- <v-file-input
            v-model="banner"
            :disabled="!editingVendor"
            solo
            justify="center"
            class="px-4 text-body-2 font-weight-medium"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-image-outline"
            placeholder="برای فروشگاه خود بنر انتخاب کنید"
            flat
            dense
            hide-details
            :hide-input="url"
            @change="Preview_image"
          ></v-file-input> -->
        </div>
        <v-img v-else src="/godar.jpg" aspect-ratio="2" width="100%" />
      </v-col>
      <v-col cols="12" class="py-2 px-4 ma-0">
        <v-textarea
          v-if="admin"
          outlined
          placeholder="درباره شما..."
          class="ma-0 pa-0 text-body-2 font-weight-medium dark-disabled-text"
          color="#707070"
          counter="150"
          rows="1"
          hide-details
          flat
          auto-grow
        ></v-textarea>
        <!-- <v-textarea
          v-if="admin"
          :disabled="!admin"
          :outlined="admin"
          :solo="!admin"
          placeholder="درباره شما..."
          class="ma-0 pa-0 text-body-2 font-weight-medium dark-disabled-text"
          color="#707070"
          counter="150"
          rows="1"
          hide-details
          flat
          auto-grow
        ></v-textarea> -->
        <p v-else class="ma-2 text-body-1 font-weight-medium" color="#707070">
          {{ creatorData.biography }}
        </p>
      </v-col>
      <v-row id="buttons" align="center" no-gutters class="mx-4 mt-4">
        <!-- <v-col cols="4">
          <button v-ripple class="btn font-weight-medium" style="max-width: 100%; min-width:100%">مشاهده وبسایت</button>
        </v-col> -->
        <v-col cols="6" class="pl-1">
          <button
            v-ripple
            class="btn font-weight-medium"
            style="max-width: 100%; min-width: 100%"
          >
            تماس
          </button>
        </v-col>
        <v-col cols="6" class="pr-1">
          <button
            v-ripple
            class="btn font-weight-medium"
            style="max-width: 100%; min-width: 100%"
          >
            آدرس
          </button>
        </v-col>
      </v-row>
      <v-col cols="12" class="pt-4 px-4">
        <v-text-field
          id="search"
          dense
          color="black"
          background-color="#fafafa"
          flat
          clearable
          hide-details
          placeholder="جستجو در این فروشگاه ..."
          solo
          style="max-width: 100%; font-size: 13px"
          @click="$vuetify.goTo('#search', scrollOptions)"
        >
          <template #prepend-inner>
            <v-fade-transition leave-absolute>
              <img src="../static/search.svg" class="ml-2" />
            </v-fade-transition>
          </template>
        </v-text-field>
      </v-col>
      <v-row
        no-gutters
        class="pa-0 mt-4"
        align="center"
        style="position: relative"
      >
        <v-sheet class="ma-0 pa-0" max-width="100vw">
          <div v-if="admin">
            <v-btn
              style="
                position: absolute;
                width: 48px;
                height: 48px;
                top: 0;
                left: 4px;
              "
              :to="{ name: 'dashboard-creator-_id-home-media', params: {_id: $route.params._id}}"
              icon
              ><v-icon style="color: #262626">mdi-tune</v-icon></v-btn
            >
          </div>
          <v-tabs
            v-model="tab"
            right
            grow
            color="#262626"
            slider-size="1"
          >
            <v-tab v-for="(item, index) in tags" :key="index"
              >{{ item.title }}
            </v-tab>
          </v-tabs>
        </v-sheet>
        <hr
          style="
            height: 1px;
            border-width: 0;
            width: 100%;
            background-color: #dbdbdb;
            margin-bottom: 2px;
          "
        />
        <!-- <v-divider></v-divider> -->
      </v-row>
    </v-row>
    <v-row no-gutters class="rows-left-margin">
      <v-tabs-items v-model="tab" style="width: 100%">
        <v-tab-item v-if="admin">
          <v-row no-gutters>
            <v-col
              v-for="(post, index) in godarData"
              :key="'post' + index"
              cols="4"
              class="image-padding"
            >
              <post-card
                :post="post"
                :config="cardConfig"
              />
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row no-gutters>
            <v-col
              v-for="(post, index) in godarData"
              :key="'post' + index"
              cols="4"
              class="image-padding"
            >
              <post-card :post="post" :config="cardConfig" />
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row no-gutters>
            <v-col
              v-for="(post, index) in godarData"
              :key="'post' + index"
              cols="4"
              class="image-padding"
            >
              <post-card :post="post" :config="cardConfig" />
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row no-gutters>
            <v-col
              v-for="(post, index) in godarData"
              :key="'post' + index"
              cols="4"
              class="image-padding"
            >
              <post-card :post="post" :config="cardConfig" />
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import axios from 'axios'
import PostCard from './PostCard.vue'
import Header from './Header.vue'
export default {
  name: 'HomePage',
  components: {
    PostCard,
    Header,
  },
  props: ['admin', 'cardConfig', 'showCart', 'title'],
  data() {
    return {
      userName: '',
      full_name: '',
      url: '',
      error: false,
      tab: null,
      tags: [
        { title: 'همه', icon: 'mdi-grid' },
        { title: 'موجود', icon: 'mdi-bell-check-outline' },
        { title: 'حراج', icon: 'mdi-percent-outline' },
      ],
      // items: [{ title: 'پست‌ها', icon: 'mdi-apps-outline' }],
      godarData: null,
      creatorData: {},
      scrollOptions: {
        duration: 500,
        offset: 50,
        easing: 'easeInQuad',
      },
      // editingVendor: false,
      banner: [],
    }
  },
  computed: {
    selections() {
      const selections = []
      for (const selection of this.items) {
        selections.push(selection)
      }
      return selections
    },
  },
  async fetch() {
  //  await  axios({
  //     url:
  //       'http://localhost:8080/posts/?' + '_creator=' + this.$route.params._id,
  //     method: 'GET',
  //   }).then((response) => {
  //     console.log(response.data)
  //     this.godarData = response.data
  //   })
  this.godarData = this.$store.state.products
   await axios({
      url: 'http://localhost:8080/creators/?' + '_id=' + this.$route.params._id,
      method: 'GET',
    }).then((response) => {
      // console.log(response.data)
      this.creatorData = response.data[0]
      this.full_name = this.creatorData.full_name
      this.userName = this.creatorData.username
    })
  },
  methods: {
    onBasketButtonClick() {
      this.$store.commit('toggleBasketDialog')
    },
    // handleEditVendor(e) {
    //   this.editingVendor = e
    // },
    Preview_image() {
      if (!this.banner) return
      this.url = URL.createObjectURL(this.banner)
      // console.log(this.url);
    },
    remove(selection) {
      this.items.splice(this.items.indexOf(selection), 1)
      this.items = [...this.items]
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 734px) {
  .image-padding {
    padding: 0 0 2px 2px !important;
  }
  .rows-left-margin {
    margin: 0 0 0 -2px !important;
  }
}
@media screen and (min-width: 735px) {
  .image-padding {
    padding: 0 0 28px 28px !important;
  }
  .rows-left-margin {
    margin: 0 0 0 -28px !important;
  }
}
</style>
