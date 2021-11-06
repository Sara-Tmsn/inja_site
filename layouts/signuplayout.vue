<template>
  <div id="app">
    <v-app>
      <v-main>
          <v-container pa-12>
            <router-view />
          </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'signuplayout',

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
.v-text-field input v-label{
    font-size: 1em;
  }
  .v-label {
    font-size: 1em !important;
  }
</style>