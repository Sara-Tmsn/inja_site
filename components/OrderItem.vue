<template>
  <div class="mb-4">
    <v-row no-gutters justify="space-between" align="center">
      <v-col cols="2" class="pa-0 pl-4">
        <v-img
          src="https://picsum.photos/100"
          aspect-ratio="1"
          width="100%"
        ></v-img>
      </v-col>
      <v-col cols="7" class="pa-0">
        <v-row no-gutters>
          <p class="text-body-2 ma-0 py-1">اسم محصول</p>
        </v-row>
        <v-row no-gutters>
          <p class="text-body-1 font-weight-bold ma-0 py-1">
            120,000<span class="text-caption pr-1">تومان</span>
          </p>
        </v-row>
      </v-col>
      <v-col cols="3" class="pa-0"
        ><v-row no-gutters align="center"
          ><p class="text-body-1 font-weight-bold ma-0 pl-2">1</p>
          <span class="text-body-2 ma-0">عدد</span></v-row
        ></v-col
      >
    </v-row>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'OrderItem',
  props: ['index'],
  data() {
    return {}
  },
  methods: {
    remove(index) {
      this.$store.commit('removeProduct', index)
    },
  },
}
</script>

