<template>
  <v-container style="max-width: 935px" pa-0>
    <Header
      :admin="true"
      title="اطلاعات ارسال"
      :showCart="false"
      :backButton="true"
      :addButton="true"
    />
    <shipping-type-row />
  </v-container>
</template>

<script>
'use strict'
import ShippingTypeRow from '../../../../../components/ShippingTypeRow.vue'

export default {
  name: 'Shipping',
  layout: 'account',
  components: {
    ShippingTypeRow
  },
  data() {
    return {}
  },
  computed: {},

  methods: {},
}
</script>


