<template>
  <div id="app">
    <v-app>
      <v-main>
          <v-container pa-0>
        <router-view />
          </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'account',

  components: {
  },

  data: () => ({
    //
  }),
  mounted () {
  }
}
</script>
<style>
@font-face {
  font-family: "IRANSans";
  src: local("IRANSans"), url("../static/fonts/IRANSans-Medium.ttf") format("truetype");
}
.v-text-field input {
    font-size: 1em;
  }
  .v-label {
    font-size: 1em !important;
  }
</style>
