<template>
  <v-card flat outlined class="mx-4 my-2">
    <v-col cols="12" :class="!accepted && !sent ? 'pa-4' : 'px-4 pb-4 pt-0'">
      <v-expansion-panels v-if="accepted || sent" accordion flat multiple>
        <v-expansion-panel>
          <v-expansion-panel-header class="pa-0">
            <v-row no-gutters align="center">
              <v-col cols="12" class="pa-0">
                <v-row no-gutters align="center" justify="space-between">
                  <v-col cols="5">
                    <v-row no-gutters align="center">
                      <p class="font-weight-bold ma-0 py-1">سفارش شماره</p>
                      <span class="text-body-2 font-weight-bold pr-1"
                        >1</span
                      ></v-row
                    ></v-col
                  >
                  <v-col cols="3"
                    ><v-row justify="center"
                      ><p class="text-body-2 font-weight-medium ma-0 py-1">
                        00/06/09
                      </p></v-row
                    ></v-col
                  ></v-row
                >
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-col
              cols="12"
              class="pa-0"
              v-for="(item, index) in 3"
              :key="index"
            >
              <order-item :index="index" />
            </v-col>
            <v-row no-gutters align="center" class="mb-2">
              <p class="text-body-2 mb-0 ml-2" style="color: #707070">
                نحوه ارسال
              </p>
              <span>پست</span></v-row
            >
            <v-row no-gutters align="center" class="mb-4">
              <p class="text-body-2 mb-0 ml-2" style="color: #707070">
                هزینه ارسال
              </p>
              <span>12,000</span
              ><span class="text-caption pr-1">تومان</span></v-row
            >
            <v-divider class="mb-4"></v-divider>
            <p class="font-weight-bold">مشخصات گیرنده</p>
            <p class="text-body-2" style="color: #707070">شماره تماس</p>
            <p class="text-body-2">09351142844</p>
            <p class="text-body-2" style="color: #707070">ارسال به</p>
            <p class="text-body-2">
              تهرانسر، شهرک دریا، بلوار یاس، خیابان صدف، کوچه پنجم، پلاک 11،
              واحد 4
            </p>
            <p class="text-body-2" style="color: #707070">توضیحات</p>
            <p class="text-body-2">
              خیلی گرون فروشید ولی سگ خور دیگه... مجبورم...
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-row v-if="!accepted && !sent" no-gutters align="center">
        <v-col cols="12" class="pa-0">
          <v-row no-gutters align="center" justify="space-between">
            <v-col cols="6">
              <v-row no-gutters align="center">
                <v-badge left inline dot :value="!confirmOrder">
                  <p class="font-weight-bold ma-0 py-1">سفارش شماره</p>
                  <span class="text-body-2 font-weight-bold pr-1"
                    >1</span
                  ></v-badge
                ></v-row
              ></v-col
            >
            <v-col cols="3"
              ><v-row justify="end" no-gutters
                ><p class="text-body-2 font-weight-medium ma-0">
                  00/06/09
                </p></v-row
              ></v-col
            ></v-row
          >
        </v-col>
      </v-row>
      <v-col class="pa-0 mb-4" cols="12">
        <v-row no-gutters align="center" class="py-1">
          <p
            class="text-body-2 font-weight-medium ma-0 ml-3"
            style="color: #707070"
          >
            مجموع سفارش
          </p>
          <p class="text-body-1 font-weight-bold ma-0 py-1">
            5,888,000<span class="text-caption pr-1">تومان</span>
          </p>
        </v-row>
        <v-row align="center" no-gutters>
          <p class="text-body-1 font-weight-bold ma-0">3</p>
          <span class="text-body-2 my-0 mr-2 ml-3" style="color: #707070"
            >محصول</span
          >
          <p class="text-body-2 ma-0">اسم محصول شماره1، اسم محصول +1</p>
        </v-row>
      </v-col>
      <v-col cols="12" class="pa-0">
        <!-- ready to send -->
        <v-row v-if="accepted && !sent" align="center" justify="end" no-gutters>
          <button
            v-ripple
            class="btn font-weight-medium py-1"
            style="background-color: #0095f6; color: #fff !important; min-width: 100%"
          >
            ارسال شد
          </button>
        </v-row>
        <!-- new orders -->
        <v-row v-else-if="!accepted && !sent" align="center" no-gutters>
          <v-col cols="12" class="pa-0">
            <v-card-actions class="pa-0">
              <button
                v-ripple
                class="btn font-weight-medium"
                style="
                  min-width: 100%;
                "
                outlined
                @click="show = !show"
              >
                جزئیات سفارش<v-icon>{{
                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </button>
            </v-card-actions>
          </v-col>
        </v-row>
        <!-- sent orders -->
        <v-row v-else align="center" justify="end" no-gutters>
          <button
            v-ripple
            class="btn font-weight-medium py-1"
            style="min-width: 100%"
          >
            دریافت توسط مشتری
          </button>
        </v-row>
      </v-col>
    </v-col>
    <v-expand-transition>
      <div v-show="show" class="px-4 pb-4">
        <v-col cols="12" class="pa-0" v-for="(item, index) in 3" :key="index">
          <order-item :index="index" />
        </v-col>
        <v-row no-gutters align="center" class="mb-2">
          <p class="text-body-2 mb-0 ml-2" style="color: #707070">نحوه ارسال</p>
          <span>پست</span></v-row
        >
        <v-row no-gutters align="center" class="mb-4">
          <p class="text-body-2 mb-0 ml-2" style="color: #707070">
            هزینه ارسال
          </p>
          <span>12,000</span><span class="text-caption pr-1">تومان</span></v-row
        >
        <v-divider class="mb-4"></v-divider>
        <p class="font-weight-bold">مشخصات گیرنده</p>
        <p class="text-body-2 mb-3" style="color: #707070">
          شماره تماس</p>
        <p class="text-body-2 mb-5">09351142844</p>
        <p class="text-body-2 mb-3" style="color: #707070">ارسال به</p>
        <p class="text-body-2 mb-5">
          تهرانسر، شهرک دریا، بلوار یاس، خیابان صدف، کوچه پنجم، پلاک 11، واحد 4
        </p>
        <p class="text-body-2 mb-3" style="color: #707070">توضیحات</p>
        <p class="text-body-2">خیلی گرون فروشید ولی سگ خور دیگه... مجبورم...</p>
        <v-row align="center" no-gutters>
          <v-col :cols="confirmOrder ? 12 : 6" class="pa-0 pl-1">
            <button
              v-ripple
              class="btn font-weight-medium py-1"
              style="
                color: rgb(62, 159, 30) !important;
                border: 1px solid rgb(62, 159, 30) !important;
                max-width: 100%;
                min-width: 100%;
              "
              @click="confirmOrder = !confirmOrder"
            >
              {{ confirmOrder ? 'منتظر بسته‌بندی' : 'تایید سفارش' }}
            </button>
          </v-col>
          <v-col cols="6" class="pa-0 pr-1" v-if="!confirmOrder">
            <button
              v-ripple
              class="btn font-weight-medium py-1"
              style="
                color: #707070 !important;
                border: 1px solid #707070 !important;
                max-width: 100%;
                min-width: 100%;
              "
            >
              لغو
            </button></v-col
          ></v-row
        >
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
'use strict'
import OrderItem from './OrderItem.vue'
export default {
  name: 'OrderCard',
  components: {
    OrderItem,
  },
  props: ['accepted', 'sent'],
  data() {
    return {
      show: false,
      confirmOrder: false,
    }
  },
  methods: {
  },
}
</script>
<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}

</style>
