<template>
  <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getProductsData: 'productsStore/getProductsData',
    }),
  },
  methods: {
    ...mapActions({
      setCurrentProductsList: 'productsStore/setCurrentProductsList',
      setSortedProductsList: 'productsStore/setSortedProductsList',
      loadProductsData: 'productsStore/loadProductsData',
      filterProducts: 'productsStore/filterProducts',
    }),
  },
  async created() {
    await this.loadProductsData();
    await this.setSortedProductsList(this.getProductsData);
    await this.filterProducts('exclusiveProducts');
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  height: max-content;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 100%;
  grid-template-rows: max-content 1fr max-content;
}
</style>
