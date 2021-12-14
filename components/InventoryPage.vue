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
            <v-img :src="item.contents[0].url" aspect-ratio="1" width="100%"
          /></template>
          <template v-slot:[`item.name`]="{ item }">
            <p
              class="ma-0 pa-0 d-inline-block text-truncate"
              style="max-width: 72px"
            >
              {{ item.product_name }}
            </p></template
          >
          <template v-slot:[`item.stock`]="props">
            <v-edit-dialog
              :return-value.sync="props.item.numbersAvailable"
              large
              save-text="ذخیره"
              cancel-text="لغو"
              persistent
              @cancel="cancel"
              @save="save"
            >
              <div>{{ props.item.numbersAvailable }}</div>
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.numbersAvailable"
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
              :return-value.sync="props.item.product_price"
              large
              save-text="ذخیره"
              cancel-text="لغو"
              persistent
              @cancel="cancel"
              @save="priceEditSave"
            >
              <div>{{ props.item.product_price }}</div>
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.product_price"
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
// import axios from 'axios'
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
      // product: {},
      godarData: [],
      products: [],
    }
  },
  fetch() {
      this.godarData =this.$store.state.products
      this.products = [...this.godarData]
      // for (let i = 0; i < this.godarData.length; i) {
      //   this.product.picture = this.godarData[i].contents[0].url
      //   this.product.name = this.godarData[i].product_name
      //   this.product.stock = this.godarData[i].numbersAvailable
      //   this.product.price = this.godarData[i].product_price
      //   this.products.push(this.product)
      // }
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
