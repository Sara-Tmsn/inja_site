<template>
  <v-row no-gutters class="mt-14">
    <v-col cols="12">
      <v-list v-for="(type, index)  in $store.state.types" :key="index" class="pa-0">
        <v-list-item @click="onRowClick" class="pl-2 py-2">
          <v-col cols="11" class="pa-0">
            <v-row no-gutters align="center">
              <v-col cols="7" class="pa-0">
                <span
                  style="color: #262626; font-weight: 400; font-size: 14px"
                  >{{ type.title }}</span
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4" class="text--secondary pa-0 pl-1">
                <v-row no-gutters justify="end">
                  <span
                    :style="
                      type.price === 0 ? 'font-size: 14px' : 'font-size: 16px'
                    "
                    style="color: #262626; font-weight: 400"
                    >{{
                      type.price === 0 ? 'رایگان' : type.price.toLocaleString()
                    }}
                    <span class="text-caption">{{
                      type.price === 0 ? '' : 'تومان'
                    }}</span>
                  </span>
                </v-row>
              </v-col>
              <v-col
                cols="11"
                class="pa-0"
                :style="type.description ? 'margin-top: 0' : 'margin-top: 30px'"
              >
                <span style="color: #707070; font-size: 13px">
                  {{ type.description }}
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1" class="pa-0">
            <v-row no-gutters justify="end">
              <v-icon>mdi-chevron-left</v-icon>
            </v-row>
          </v-col>
        </v-list-item>
        <v-divider class="mx-4" style="color: #dbdbdb"></v-divider>
        <shipping-dialog :type="type"/>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
import ShippingDialog from './ShippingDialog.vue'
'use strict'
export default {
  components: { ShippingDialog },
  name: 'ShippingTypeRow',
  data() {
    return {}
  },
  methods: {
    onRowClick() {
      this.$store.commit('toggleShippingDialog')
    },
  }
}
</script>
<style scoped>
@media screen and (max-width: 660px) {
  .login-dialog {
    height: 100% !important;
    width: 100% !important;
    max-height: 100% !important;
    margin: 0 !important;
    border-radius: 0px !important;
  }
}

@media screen and (min-width: 660px) {
  .login-dialog {
    width: 400px !important;
    border-radius: 20px !important;
  }
}
.v-text-field--outlined >>> fieldset {
  border-color: #dbdbdb;
}
</style>
