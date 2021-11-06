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
        <p class="text-h6 font-weight-bold pa-0 mt-2">
          {{ step &lt;= 1 ? 'خوش آمدید!' : 'ثبت فروشگاه جدید'}}
        </p>
        <v-window v-model="step" style="width: 100%">
          <v-row class="text-bold py-0" no-gutters></v-row>
          <v-window-item :value="0">
            <v-card-text class="pa-0">
              <span class="black--text text--darken-1">
                <p class="font-weight-medium pa-0 mt-2">
                  شماره موبایل
                </p>
                <p style="color: #707070" class="caption mb-4">
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
                style="max-width: 100%; margin-bottom: 16px; font-size: 14px"
                label="09123456789"
                placeholder="09123456789"
              ></v-text-field>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="1">
            <v-card-text class="pa-0">
              <span class="black--text text--darken-1">
                <p class="font-weight-medium pa-0 mt-2">
                  کد تایید
                </p>
                <p style="color: #707070" class="text-caption mb-4">
                  کد تایید برای شماره
                  <span style="color: #505050" class="text-subtitle-2"
                    >09123456789</span
                  >
                  ارسال گردید.
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
                style="max-width: 100%; margin-bottom: 16px; font-size: 14px"
              >
              </v-text-field>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="2">
            <v-card-text class="pa-0">
              <span class="black--text text--darken-1">
                <p class="font-weight-medium pa-0 mt-2">
                  نام فروشگاه
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
                style="max-width: 100%; margin-bottom: 20px; font-size: 14px"
                label="فروشگاه اینجا"
              ></v-text-field>
            </v-card-text>
            <v-card-text class="pa-0">
              <v-row no-gutters class="mb-4">
                <p class="font-weight-medium pa-0 mt-2" style="color: #262626">
                  آی‌دی یکتای اینستاگرام فروشگاه
                </p>
                <p style="color: #707070" class="text-caption ma-0">
                  کد تایید آی‌دی به دایرکت شما ارسال خواهد شد.
                </p>
                <v-dialog v-model="dialog" max-width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="color: #0095f6"
                      text
                      small
                      >چرا لازم است؟</v-btn
                    > </template
                  ><v-card>
                    <v-toolbar
                      flat
                      dense
                      class="ma-0 pa-0"
                      style="border-bottom: none"
                    >
                      <v-row no-gutters justify="end">
                        <v-btn icon @click="dialog = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn></v-row
                      ></v-toolbar
                    >
                    <v-card-text>
                      <p
                        class="text-justify text-subtitle-2 ma-0"
                        style="color: #262626"
                      >
                        آی‌دی اینستاگرام برای بارگذاری محتویات فروشگاه آنلاین
                        شما از اینستاگرام و همچنین تایید هویت شما لازم است.
                      </p></v-card-text
                    ></v-card
                  ></v-dialog
                >
              </v-row>
              <v-text-field
                v-model="instaId"
                dense
                solo
                outlined
                flat
                hide-details
                background-color="#fafafa"
                color="#262626"
                style="max-width: 100%; margin-bottom: 16px; font-size: 14px"
                label="inja.site"
              >
              </v-text-field>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="3">
            <v-card-text class="pa-0">
              <v-row no-gutters class="mb-4">
                <p class="font-weight-medium pa-0 mt-2" style="color: #262626">
                  کد تایید آی‌دی اینستاگرام
                </p>
                <p style="color: #707070" class="text-caption ma-0">
                  کد تایید به آی‌دی
                  <span style="color: #505050" class="text-subtitle-2"
                    >inja.site</span
                  >
                  ارسال گردید.
                </p>
              </v-row>
              <v-text-field
                v-model="instaId"
                dense
                solo
                outlined
                flat
                hide-details
                background-color="#fafafa"
                color="#262626"
                style="max-width: 100%; margin-bottom: 16px; font-size: 14px"
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
            ><p class="text-body-2 mb-0">حساب کاربری دارید؟</p>
            <v-btn
              text
              color="#0095F6"
              @click="
                $router.push({
                  name: 'dashboard-creator-_id-login',
                  params: { _id: $route.params._id },
                })
              "
              >ورود</v-btn
            >
          </v-row></v-col
        >
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
export default {
  name: 'SignUp',
  layout: 'signuplayout',
  components: {},
  data() {
    return {
      step: 0,
      buttonText: [
        'ارسال کد',
        'تایید شماره موبایل',
        'ارسال کد',
        'تایید آی‌دی اینستاگرام',
      ],
      smsCode: '',
      instaId: '',
      dialog: false,
    }
  },
  computed: {},

  methods: {
    onButtonClick() {
      if (this.step <= 2) {
        this.step = this.step + 1
      } else if (this.step === 3) {
        this.$router.push({
          name: "dashboard-creator-_id-home-shopWindow",
          params: { _id: this.$route.params._id },
        })
      }
    },
  },
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #dbdbdb;
}
.v-application .text-subtitle-2 {
  line-height: 1.5rem;
}
.v-toolbar__content {
  border-bottom-color: #fff !important;
}
.v-sheet.v-card {
  border-radius: 20px;
}
</style>
