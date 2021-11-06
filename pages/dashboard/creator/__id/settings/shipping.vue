<template>
  <v-container style="max-width: 935px" pa-0>
    <Header
      :admin="true"
      title="اطلاعات ارسال"
      :showCart="false"
      :backButton="true"
      :addButton="true"
    />
    <v-row no-gutters class="mt-14">
      <v-col cols="12">
        <v-list
          v-for="type in $store.state.types"
          :key="type.title"
          class="pa-0"
        >
          <v-list-item @click="dialog = true" class="pl-2 py-2">
            <v-col cols="11" class="pa-0">
              <v-row no-gutters align="center">
                <v-col cols="7" class="pa-0">
                  <!--<span-->
                  <!--style="color: #262626; font-weight: 400"-->
                  <!-- >ویرایش نحوه ارسال</span>-->
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
                        type.price === 0
                          ? 'رایگان'
                          : type.price.toLocaleString()
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
                  :style="
                    type.description ? 'margin-top: 0' : 'margin-top: 30px'
                  "
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
            </v-col></v-list-item
          >
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            content-class="login-dialog"
          >
            <v-card class="ma-0" tile height="inherit">
              <v-col cols="12" class="pr-4" style="padding-left: 10px">
                <v-row no-gutters align="center">
                  <v-col cols="8">
                    <p class="text-body-2 pa-0 ma-0">
                      ویرایش نحوه ارسال
                    </p></v-col
                  >
                  <v-spacer></v-spacer>
                  <v-col cols="auto">
                    <v-btn icon @click="dialog = false">
                      <v-icon color="#262626"> mdi-close </v-icon>
                    </v-btn></v-col
                  >
                </v-row></v-col
              >
              <v-divider></v-divider>
              <v-col cols="12" class="pa-0 mt-6 px-4">
                <v-text-field
                  v-model="type.title"
                  dense
                  outlined
                  flat
                  hide-details
                  background-color="#fff"
                  color="#262626"
                  style="max-width: 100%; font-size: 14px; margin-bottom: 24px"
                  label="نوع ارسال"
                ></v-text-field>
                <v-text-field
                  v-model="type.price"
                  dense
                  outlined
                  flat
                  hide-details
                  background-color="#fff"
                  color="#262626"
                  style="max-width: 100%; font-size: 14px; margin-bottom: 24px"
                  label="هزینه ارسال"
                >
                  <template #append
                    ><span class="text-caption">تومان</span></template
                  >
                </v-text-field>
                <v-textarea
                  v-model="type.description"
                  dense
                  outlined
                  hide-details
                  no-resize
                  rows="3"
                  row-height="28"
                  background-color="#fff"
                  color="#262626"
                  style="max-width: 100%; font-size: 14px; margin-bottom: 24px"
                  label="توضیحات"
                ></v-textarea>
                <v-row no-gutters class="pb-4"
                  ><v-col cols="8" class="pa-0"
                    ><p style="font-size: 14px" class="ma-0">
                      نمایش در فرآیند تسویه مشتری
                    </p></v-col
                  ><v-spacer></v-spacer
                  ><v-col cols="auto" justify="start" class="pa-0"
                    ><v-switch
                      color="#0095F6"
                      inset
                      class="ma-0 pt-0 ml-n2"
                      hide-details
                    ></v-switch></v-col
                ></v-row>
              </v-col>
              <v-divider></v-divider>
              <v-card-actions class="py-4">
                <button
                  :disabled="!valid"
                  v-ripple
                  class="white--text font-weight-medium"
                  style="
                    background-color: #0095f6;
                    max-width: 100%;
                    min-width: 100%;
                    font-size: 12px;
                    border-radius: 4px;
                    padding: 6px;
                  "
                >
                  ذخیره
                </button></v-card-actions
              >
            </v-card>
          </v-dialog>
          <v-divider class="mx-4" style="color: #dbdbdb"></v-divider>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
'use strict'

export default {
  name: 'Shipping',
  layout: 'account',
  components: {},
  data() {
    return {
      dialog: false,
      panels: [],
    }
  },
  computed: {},

  methods: {},
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
