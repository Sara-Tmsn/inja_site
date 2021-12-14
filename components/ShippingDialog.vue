<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    content-class="login-dialog"
  >
    <v-card class="ma-0" tile height="inherit">
      <v-col cols="12" class="pr-4" style="padding-left: 10px">
        <v-row no-gutters align="center">
          <v-col cols="8">
            <p class="text-body-2 pa-0 ma-0">ویرایش نحوه ارسال</p></v-col
          >
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn icon @click="$store.commit('toggleShippingDialog')">
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
          <template #append><span class="text-caption">تومان</span></template>
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
</template>
<script>
'use strict'
export default {
  name: 'ShippingDialog',
  props: ['type'],
  components: {},
  data() {
    return {
    }
  },

  mounted() {},
   computed: {
    dialog () { return this.$store.state.shippingDialog }
  },

  methods: {
  },
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
