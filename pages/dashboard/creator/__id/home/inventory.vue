<template>
 <inventory-page />
</template>

<script>
"use strict";
import inventoryPage from "../../../../../components/InventoryPage.vue";

export default {
  name: "inventory",
  layout: 'dashboard',
  components: {
    inventoryPage
  },
}
</script>

<style>
@media screen and (max-width: 600px) {
}
.v-small-dialog__actions {
  direction: ltr;
  text-align: left !important;
  padding: 8px 16px !important;
}
.v-small-dialog__content {
  padding: 16px 16px 0 16px !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 4px 12px;
  min-width: 20px !important;
  margin-right: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #262626 !important;
}
</style>