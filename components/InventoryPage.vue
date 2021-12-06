<template>
  <v-container pa-0 style="max-width: 935px">
    <Header :admin="true" title="موجودی محصول" :showCart="false" />
    <v-row no-gutters class="pa-0 mt-14 mb-16 mx-3" justify="center">
      <v-col cols="12" class="pa-0">
        <v-data-table
          fixed-header
          :mobile-breakpoint="0"
          :headers="headers"
          :items="products"
          :search="search"
          hide-default-footer
          class="elevation-0 px-0"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              dense
              color="black"
              background-color="#fafafa"
              flat
              clearable
              hide-details
              placeholder="جستجو در بین محصولات ..."
              solo
              style="max-width: 100%; font-size: 13px"
              class="my-2"
              ><template #prepend-inner>
                <v-fade-transition leave-absolute>
                  <img src="../static/search.svg" class="ml-2" />
                </v-fade-transition> </template
            ></v-text-field>
          </template>
          <template v-slot:[`item.picture`]="{ item }">
            <v-img :src="item.picture" aspect-ratio="1" width="100%"
          /></template>
          <template v-slot:[`item.name`]="{ item }">
            <p
              class="ma-0 pa-0 d-inline-block text-truncate"
              style="max-width: 72px"
            >
              {{ item.name }}
            </p></template
          >
          <template v-slot:[`item.stock`]="props">
            <v-edit-dialog
              :return-value.sync="props.item.stock"
              large
              save-text="ذخیره"
              cancel-text="لغو"
              persistent
              @cancel="cancel"
              @save="save"
            >
              <div>{{ props.item.stock }}</div>
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.stock"
                  outlined
                  dense
                  hide-details
                  single-line
                  @focus="$event.target.select()"
                  autofocus
                  color="#707070"
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:[`item.price`]="props">
            <v-edit-dialog
              :return-value.sync="props.item.price"
              large
              save-text="ذخیره"
              cancel-text="لغو"
              persistent
              @cancel="cancel"
              @save="priceEditSave"
            >
              <div>{{ props.item.price }}</div>
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.price"
                  outlined
                  dense
                  hide-details
                  single-line
                  @focus="$event.target.select()"
                  autofocus
                  color="#707070"
                ></v-text-field>
              </template>
            </v-edit-dialog> </template></v-data-table
      ></v-col>
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor" text top>
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" icon @click="snack = false"
            ><v-icon :color="snackColor"> mdi-close </v-icon></v-btn
          >
        </template>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import axios from 'axios'
import Header from './Header.vue'
export default {
  name: 'InventoryPage',
  components: {
    Header,
  },
  props: [],

  data() {
    return {
      search: '',
      scrollOptions: {
        duration: 500,
        offset: 50,
        easing: 'easeInQuad',
      },
      snack: false,
      snackColor: '',
      snackText: '',
      headers: [
        {
          text: 'تصویر',
          align: 'start',
          sortable: false,
          value: 'picture',
        },
        { text: 'نام محصول', value: 'name' },
        { text: 'موجودی', value: 'stock' },
        { text: 'قیمت (تومان)', value: 'price' },
      ],
      product: {},
      products: [],
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'رومیزی',
      //     stock: 6,
      //     price: 240000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'بند کفش',
      //     stock: 10,
      //     price: 3000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'روسری',
      //     stock: 0,
      //     price: 85000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'کفش',
      //     stock: 10,
      //     price: 450000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'شلوار',
      //     stock: 5,
      //     price: 189000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'مانتو فلان',
      //     stock: 42,
      //     price: 250000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'روسری توسری، توسری روسری',
      //     stock: 6,
      //     price: 36000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'محصول شماره 3',
      //     stock: 7,
      //     price: 24500,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'محصول شماره 4',
      //     stock: 8,
      //     price: 70000,
      //   },
      //   {
      //     picture: 'https://picsum.photos/100',
      //     name: 'محصول شماره 5',
      //     stock: 11,
      //     price: 92000,
      //   },
      // ],
    }
  },
  computed: {},
  async fetch() {
    // await axios({
    //   url:
    //     'http://localhost:8080/posts/?' + '_creator=' + this.$route.params._id,
    //   method: 'GET',
    // }).then((response) => {
      // console.log(response)
      this.godarData =this.$store.state.products
      for (let i = 0; i < this.godarData.length; i) {
        this.product.picture = this.godarData[i].contents[0].url
        this.product.name = this.godarData[i].product_name
        this.product.stock = this.godarData[i].numbersAvailable
        this.product.price = this.godarData[i].product_price
        this.products.push(this.product)
      }
    // })
  },
  methods: {
    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'موجودی محصول به‌روز رسانی شد'
    },
    priceEditSave() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'قیمت محصول به‌روز رسانی شد'
    },
    cancel() {},
  },
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
}
@media screen and (min-width: 600px) {
}
.v-application .primary--text {
  color: #505050 !important;
}
.v-text-field input {
  padding: 0;
}
.v-image {
  width: 48px !important;
  margin: 4px 0;
  border-radius: 4px;
}
</style>
