
<template>
  <v-container style="max-width: 935px" pa-0>
    <Header
      :admin="true"
      title="مدیریت پست‌ها"
      :showCart="false"
      :backButton="true"
    />
    <v-row
      no-gutters
      class="pa-0 mt-16 mb-4 mx-1"
      justify="center"
      align="center"
      active-class="background-color: #0095f6"
    >
      <v-col cols="12">
        <v-row
          no-gutters
          v-if="selectedPictures.length > 0"
          justify="space-between"
          align="center"
          style="height: 48px"
        >
          <v-col cols="3" style="width: 100%">
            <v-row no-gutters justify="start">
              <v-btn @click="selectAllPictures" height="48" text
                ><v-icon :color="selectAll ? '#0095f6' : '#262626'">{{
                  selectOption
                }}</v-icon>
                <p class="ma-0 text-subtitle-2 pr-1">
                  {{ selectedPictures.length }} پست
                </p></v-btn
              ></v-row
            >
          </v-col>
          <v-col cols="6"
            ><v-row no-gutters justify="center"
              ><v-btn
                color="#0095F6"
                class="btn white--text px-3"
                elevation="0"
                @click="onUseInShopButtonClick"
                >استفاده در فروشگاه</v-btn
              ></v-row
            ></v-col
          >
          <v-col cols="3"
            ><v-row no-gutters justify="end"
              ><v-btn @click="selectedPictures = []" icon height="48" width="48"
                ><v-icon color="#262626">mdi-close</v-icon></v-btn
              ></v-row
            ></v-col
          >
        </v-row>
        <v-row
          no-gutters
          v-if="selectedPicturesToUnselect.length > 0"
          justify="space-between"
          align="center"
          style="height: 48px"
        >
          <v-col cols="3" style="width: 100%">
            <v-row no-gutters justify="start">
              <v-btn @click="selectAllPicturesToUnuse" height="48" text
                ><v-icon :color="selectAllToUnuse ? '#0095f6' : '#262626'">{{
                SelectToUnuseOption
                }}</v-icon>
                <p class="ma-0 text-subtitle-2 pr-1">
                  {{ selectedPicturesToUnselect.length }} پست
                </p></v-btn
              ></v-row
            >
          </v-col>
          <v-col cols="6"
            ><v-row no-gutters justify="center"
              ><v-btn
                color="#0095F6"
                class="btn white--text px-3"
                elevation="0"
                @click="onDeleteFromShopButtonClick()"
                >حذف از فروشگاه</v-btn
              ></v-row
            ></v-col
          >
          <v-col cols="3"
            ><v-row no-gutters justify="end"
              ><v-btn @click="selectedPicturesToUnselect = []" icon height="48" width="48"
                ><v-icon color="#262626">mdi-close</v-icon></v-btn
              ></v-row
            ></v-col
          >
        </v-row>
        <v-row v-if="selectedPictures.length === 0 && selectedPicturesToUnselect.length === 0" no-gutters justify="center">
          <v-btn-toggle rounded v-model="tab" mandatory
            ><v-btn
              style="
                font-size: 12px;
                font-weight: 500;
                padding: 4px 10px;
                background-color: white;
                color: #262626 !important;
              "
              >همه‌ی پست‌ها</v-btn
            ><v-btn
              style="
                font-size: 12px;
                font-weight: 500;
                padding: 4px 10px;
                background-color: white;
                color: #262626 !important;
              "
              >استفاده شده‌ها</v-btn
            ><v-btn
              style="
                font-size: 0.75rem;
                font-weight: 500;
                padding: 4px 10px;
                background-color: white;
                color: #262626 !important;
              "
              >استفاده نشده‌ها</v-btn
            ></v-btn-toggle
          ></v-row
        ></v-col
      >
    </v-row>
    <!-- <v-row no-gutters class="mx-4 mb-4 mt-6"
      ><v-col cols="12"
        ><v-btn
          class="py-1 px-2 font-weight-medium"
          style="color: #0095f6; font-size: 0.75rem"
          outlined
          ><v-icon class="pl-1">mdi-plus</v-icon>ایجاد محصول جدید</v-btn
        ></v-col
      ></v-row
    > -->
    <v-row no-gutters class="rows-left-margin">
      <v-tabs-items v-model="tab" style="width: 100%">
        <v-tab-item>
          <v-item-group multiple v-model="selectedPictures">
            <v-row no-gutters>
              <!-- <v-col cols="4" style="align-self: center" class="image-padding"
              ><v-card
                flat
                @click="addNewProductModal = true"
                class="pa-4"
                rippled
              >
                <v-col class="pa-0 pb-2"><v-row no-gutters justify="center">
                  <p style="color: #0095f6" class="text-subtitle-2 my-0">
                    محصول جدید
                  </p></v-row></v-col
                ><v-col class="pa-0"><v-row no-gutters justify="center">
                  <v-icon color="#0095F6">mdi-plus</v-icon></v-row></v-col
                ></v-card
              >
            </v-col> -->
              <v-col
                v-for="(post, index) in godarData"
                :key="'post' + index"
                cols="4"
                class="image-padding"
              >
                <v-item v-slot="{ active, toggle }" :value="post">
                  <v-card tile rippled flat @click="toggle">
                    <v-icon
                      v-if="post.contents.length > 1"
                      size="20"
                      color="white"
                      style="
                        position: absolute;
                        z-index: 1;
                        right: 8px;
                        top: 8px;
                        text-shadow: 0px 0px 1px #505050;
                      "
                      >mdi-checkbox-multiple-blank</v-icon
                    >
                    <v-btn
                      icon
                      style="
                        position: absolute;
                        z-index: 1;
                        left: 0px;
                        top: 0px;
                      "
                    >
                      <v-icon
                        size="20"
                        dark
                        color="white"
                        style="text-shadow: 0px 0px 1px #505050"
                        >{{
                          selectAll || active
                            ? 'mdi-checkbox-marked-circle'
                            : 'mdi-checkbox-blank-circle-outline'
                        }}</v-icon
                      ></v-btn
                    >
                    <v-img
                      :src="post.contents[0].url"
                      aspect-ratio="1"
                      width="100%"
                    ></v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-tab-item>
        <v-tab-item>
          <div v-if="$store.state.shopWindow.length === 0" class="mx-4">هنوز پستی برای نمایش در فروشگاه انتخاب نکردهاید.</div>
          <v-item-group v-else multiple v-model="selectedPicturesToUnselect">
            <v-row no-gutters>
              <v-col
                v-for="(item, index) in $store.state.shopWindow"
                :key="'product' + index"
                cols="4"
                class="image-padding"
              >
                <v-item v-slot="{ active, toggle }" :value="item">
                  <v-card tile rippled flat @click="toggle">
                    <v-icon
                      v-if="item.product.contents.length > 1"
                      size="20"
                      color="white"
                      style="
                        position: absolute;
                        z-index: 1;
                        right: 8px;
                        top: 8px;
                        text-shadow: 0px 0px 1px #505050;
                      "
                      >mdi-checkbox-multiple-blank</v-icon
                    >
                    <v-btn
                      icon
                      style="
                        position: absolute;
                        z-index: 1;
                        left: 0px;
                        top: 0px;
                      "
                    >
                      <v-icon
                        size="20"
                        dark
                        color="white"
                        style="text-shadow: 0px 0px 1px #505050"
                        >{{
                          selectAll || active
                            ? 'mdi-checkbox-marked-circle'
                            : 'mdi-checkbox-blank-circle-outline'
                        }}</v-icon
                      ></v-btn
                    >
                    <v-img
                      :src="item.product.contents[0].url"
                      aspect-ratio="1"
                      width="100%"
                    ></v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-tab-item>
        <v-tab-item>
          <v-item-group multiple v-model="selectedPictures">
            <v-row no-gutters>
              <v-col
                v-for="(post, index) in godarData"
                :key="'post' + index"
                cols="4"
                class="image-padding"
              >
                <v-item v-slot="{ active, toggle }" :value="post">
                  <v-card tile rippled flat @click="toggle">
                    <v-icon
                      v-if="post.contents.length > 1"
                      size="20"
                      color="white"
                      style="
                        position: absolute;
                        z-index: 1;
                        right: 8px;
                        top: 8px;
                        text-shadow: 0px 0px 1px #505050;
                      "
                      >mdi-checkbox-multiple-blank</v-icon
                    >
                    <v-btn
                      icon
                      style="
                        position: absolute;
                        z-index: 1;
                        left: 0px;
                        top: 0px;
                      "
                    >
                      <v-icon
                        size="20"
                        dark
                        color="white"
                        style="text-shadow: 0px 0px 1px #505050"
                        >{{
                          selectAll || active
                            ? 'mdi-checkbox-marked-circle'
                            : 'mdi-checkbox-blank-circle-outline'
                        }}</v-icon
                      ></v-btn
                    >
                    <v-img
                      :src="post.contents[0].url"
                      aspect-ratio="1"
                      width="100%"
                    ></v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import Header from '../../../../../components/Header.vue'
import axios from 'axios'

export default {
  name: 'HomeDashboard',
  layout: 'dashboard',
  components: {
    Header,
  },
  data: function () {
    return {
      godarData: null,
      selectedPictures: [],
      selectedPicturesToUnselect: [],
      active: false,
      tab: null,
      addNewProductModal: false,
      items: [
        { title: 'همه‌ی پست‌ها' },
        { title: 'استفاده شده‌ها' },
        { title: 'استفاده نشده‌ها' },
      ],
    }
  },
  computed: {
    selectAll() {
      return this.selectedPictures.length === this.godarData.length
    },
    selectSome() {
      return this.selectedPictures.length > 0 && !this.selectAll
    },
    selectOption() {
      if (this.selectAll) return 'mdi-checkbox-multiple-marked-outline'
      if (this.selectSome) return 'mdi-checkbox-multiple-blank-outline'
      return 'mdi-checkbox-multiple-blank-outline'
    },
    selectAllToUnuse() {
      return this.selectedPicturesToUnselect.length === this.$store.state.shopWindow.length
    },
    selectSomeToUnuse() {
      return this.selectedPicturesToUnselect.length > 0 && !this.selectAllToUnuse
    },
    SelectToUnuseOption() {
      if (this.selectAllToUnuse) return 'mdi-checkbox-multiple-marked-outline'
      if (this.selectSomeToUnuse) return 'mdi-checkbox-multiple-blank-outline'
      return 'mdi-checkbox-multiple-blank-outline'
    }
  },
  async fetch() {
    await axios({
      url:
        'http://localhost:8080/posts/?' + '_creator=' + this.$route.params._id,
      method: 'GET',
    }).then((response) => {
      this.godarData = response.data
    })
  },
  mounted() {

  },
  methods: {
    selectAllPictures() {
      if (this.selectAll) {
        this.selectedPictures = []
      } else {
        this.selectedPictures = this.godarData.slice()
      }
    },
    selectAllPicturesToUnuse() {
      if (this.selectAllToUnuse) {
        this.selectedPicturesToUnselect = []
      } else {
        this.selectedPicturesToUnselect = this.$store.state.shopWindow.slice()
      }
    },
    onUseInShopButtonClick() {
      //  console.log(this.selectedPictures);
      this.$store.commit('addToShopWindow', this.selectedPictures)
      // console.log(this.$store.state.shopWindow);
    },
    onDeleteFromShopButtonClick() {
      this.$store.commit("removeProducts", this.selectedPicturesToUnselect);
    }
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
