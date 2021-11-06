<template>
  <v-container style="max-width: 935px" pa-6>
    <Header
      :admin="true"
      title="اطلاعات حساب کاربری"
      :showCart="false"
      :backButton="true"
    />
    <v-form ref="form" v-model="valid" class="mt-14">
      <v-col cols="12" class="pa-0">
        <p class="text-body-2 font-weight-bold pa-0 mb-2">
          آی‌دی اینستاگرام
        </p></v-col
      >
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="instaId"
          :rules="[rules.required]"
          dense
          solo
          outlined
          flat
          hide-details="auto"
          background-color="#fff"
          color="#262626"
          style="max-width: 100%; margin-bottom: 12px; font-size: 14px"
          label="inja.site"
          required
        >
        </v-text-field
      ></v-col>
      <v-col cols="12" class="pa-0">
        <p style="color: #707070" class="text-caption mb-3">
          آی‌دی یکتای اینستاگرام فروشگاه آنلاین خود را وارد کنید.
        </p>
        <p style="color: #707070" class="text-caption mb-3">
          آی‌دی اینستاگرام برای بارگذاری محتویات فروشگاه آنلاین شما از
          اینستاگرام و همچنین تایید هویت شما لازم است.
        </p>
        <v-row no-gutters class="pa-0" align="center" justify="start">
          <button
            v-ripple
            class="mb-8 white--text font-weight-medium"
            style="
              background-color: #0095f6;
              max-width: 100%;
              font-size: 12px;
              border-radius: 4px;
              padding: 6px 12px;
            "
            @click="$router.push({ name: 'Checkout', params: { cart } })"
          >
            تایید آی‌دی اینستاگرام
          </button>
        </v-row>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-body-2 font-weight-bold pa-0 mb-2">نام فروشگاه</p></v-col
      >
      <v-col cols="12" class="pa-0">
        <v-text-field
          dense
          solo
          outlined
          flat
          hide-details="auto"
          background-color="#fff"
          color="#262626"
          style="max-width: 100%; margin-bottom: 12px; font-size: 14px"
          label="فروشگاه اینجا"
        >
        </v-text-field
      ></v-col>
      <v-col cols="12" class="pa-0">
        <p style="color: #707070" class="text-caption mb-3">
          نام فروشگاه در سربرگ فروشگاه شما نمایش داده می‌شود.
        </p>
        <p style="color: #707070" class="text-caption mb-8">
          این نام به صورت پیش‌فرض، نام (name) حساب اینستاگرام شما در صورت وجود
          خواهد بود.
        </p>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-body-2 font-weight-bold pa-0 mb-2">
          شماره تماس فروشگاه
        </p></v-col
      >
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="phoneNumber"
          :rules="[rules.required]"
          dense
          solo
          outlined
          flat
          hide-details="auto"
          background-color="#fff"
          color="#262626"
          style="max-width: 100%; margin-bottom: 12px; font-size: 14px"
          label="09123456789"
          required
        >
        </v-text-field
      ></v-col>
      <v-col cols="12" class="pa-0">
        <p style="color: #707070" class="text-caption mb-3">
          شماره تماس برای دسترسی راحت‌تر به شما، در دسترس مشتری قرار خواهد گرفت.
        </p>
        <p style="color: #707070" class="text-caption mb-3">
          این شماره باید با شماره‌ای که با آن فروشگاه را ثبت کرده‌اید برابر
          باشد، در صورت تغییر باید مجدد آن را تایید کنید.
        </p>
        <v-row no-gutters class="pa-0" align="center" justify="start">
          <button
            v-ripple
            class="mb-8 white--text font-weight-medium"
            style="
              background-color: #0095f6;
              max-width: 100%;
              font-size: 12px;
              border-radius: 4px;
              padding: 6px 12px;
            "
            @click="$router.push({ name: 'its dialog' })"
          >
            تغییر شماره تماس
          </button>
        </v-row>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-body-2 font-weight-bold pa-0 mb-2">
          آدرس فروشگاه
        </p></v-col
      >
      <v-col cols="12" class="pa-0">
        <v-textarea
          v-model="address"
          :rules="[rules.required]"
          solo
          outlined
          flat
          background-color="#fff"
          hide-details="auto"
          color="#262626"
          class="pa-0"
          style="max-width: 100%; margin-bottom: 12px; font-size: 14px"
          label="تهران، خیابان انقلاب اسلامی، ..."
          required
        >
        </v-textarea
      ></v-col>
      <v-col cols="12" class="pa-0">
        <p style="color: #707070" class="text-caption mb-8">
          آدرس فروشگاه برای دسترسی راحت‌تر و جلب اعتماد، در دسترس مشتری قرار
          خواهد گرفت.
        </p>
      </v-col>
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
        @click="validate"
      >
        ثبت‌نام
      </button>
    </v-form>
  </v-container>
</template>

<script>
'use strict'

export default {
  name: 'Profile',
  layout: 'account',
  components: {},
  data() {
    return {
      phoneNumber: '09123456789',
      address: '',
      instaId: '',
      valid: true,
      rules: {
        required: (v) => !!v || 'نمی‌تواند خالی باشد.',
      },
    }
  },
  computed: {},

  methods: {
     validate () {
        this.$refs.form.validate()
      },
  },
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #dbdbdb;
}
</style>
