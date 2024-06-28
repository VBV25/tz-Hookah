<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      loadProductsData: 'productsStore/loadProductsData',
    }),
  },
  created() {
    this.loadProductsData();
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  height: max-content;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content 1fr max-content;
}
</style>
