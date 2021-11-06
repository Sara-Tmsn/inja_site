<template>
  <v-container style="max-width: 935px" pa-0>
    <v-row justify="center" class="ma-0" no-gutters>
      <v-btn
        :style="
          step === 0
            ? 'display:none'
            : 'display: ; position: absolute; width: 48px; height: 48px; top: 4px; right: 4px'
        "
        icon
        @click="step--"
      >
        <v-icon color="#262626"> mdi-arrow-right </v-icon>
      </v-btn>
      <v-row align="center" class="pb-4 ma-0" no-gutters>
        <p class="text-h6 font-weight-bold pa-0 mt-2">ورود به حساب کاربری</p>
        <v-window v-model="step" style="width: 100%">
          <v-row class="text-bold py-0" no-gutters></v-row>
          <v-window-item :value="0">
            <v-card-text class="pa-0">
              <span class="black--text text--darken-1">
                <p class="font-weight-medium pa-0 mt-2">
                  شماره موبایل خود را وارد کنید
                </p>
                <p style="color: #707070" class="caption mb-6">
                  کد تأیید به این شماره پیامک خواهد شد.
                </p>
              </span>
              <v-text-field
                dense
                solo
                outlined
                flat
                hide-details
                background-color="#fafafa"
                color="#262626"
                style="max-width: 100%; margin-bottom: 16px"
                label="09123456789"
                placeholder="09123456789"
              ></v-text-field>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="1">
            <v-card-text class="pa-0">
              <span class="black--text text--darken-1">
                <p class="font-weight-medium pa-0 mt-2">
                  کد تایید را وارد کنید
                </p>
                <p style="color: #707070" class="text-caption mb-6">
                  کد تایید برای شماره  <span style="color: #505050" class="text-subtitle-2">09123456789</span> ارسال گردید
                </p>
              </span>
              <v-text-field
                v-model="smsCode"
                dense
                solo
                outlined
                flat
                hide-details
                background-color="#fafafa"
                color="#262626"
                style="max-width: 100%; margin-bottom: 16px"
              >
              </v-text-field>
            </v-card-text>
          </v-window-item>
        </v-window>
        <v-col cols="12" class="mb-4">
          <v-row no-gutters align="center" justify="center">
            <v-btn
              block
              color="#0095F6"
              elevation="0"
              class="btn white--text"
              @click="onButtonClick"
            >
              {{ buttonText[step] }}
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="step === 0">
          <v-row no-gutters justify="start" align="center"
            ><p class="text-body-2 mb-0">حساب کاربری ندارید؟</p>
            <v-btn text color="#0095F6" @click="$router.push({ name: 'dashboard-creator-_id-signup', params: { _id: $route.params._id } })">ثبت‌نام</v-btn>
          </v-row></v-col
        >
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
export default {
  name: 'Login',
  layout: 'signuplayout',
  components: {},
  data() {
    return {
      step: 0,
      buttonText: ['دریافت کد', 'تایید'],
      smsCode: '',
    }
  },
  computed: {},

  methods: {
    onButtonClick() {
      if (this.step === 0) {
        this.step = this.step + 1
      } else if (this.step === 1) {
      this.$router.push({
        name: "dashboard-creator-_id-home-shopWindow",
        params: { _id: this.$route.params._id }
      });
      }
    },
  },
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #dbdbdb;
}
</style>
