<template>
  <section class="products-container">
    <div class="products-container__header">
      <navigation-list :navList="$store.state.textStore.productsNavigation" />
      <div class="products-container__button-group">
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayGrid" />
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayHorizont" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import NavigationList from '@/components/UI/NavigationList.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'products-container',
  components: {
    NavigationList,
    BaseButton,
  },
  data() {
    return {
      dataProductDisplayHorizont: {
        id: 'product-display-horizont',
        img: 'gorizont-link-icon.svg',
        text: '',
        callback: () => {},
      },
      dataProductDisplayGrid: {
        id: 'product-display-grid',
        img: 'grid-list-icon.svg',
        text: '',
        callback: () => {},
      },
    };
  },
  computed: {
    ...mapGetters({
      getProductsData: 'productsStore/getProductsData',
      getSideBarList: 'productsStore/getSideBarList',
    }),
  },
  mounted() {
    // Получение данных из getters и вывод в консоль
    console.log('Products Data:', this.getProductsData);
    console.log('Sidebar List:', this.getSideBarList);
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  column-gap: 10px;
  row-gap: 20px;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__button-group {
    width: max-content;
    height: max-content;
    display: flex;
    gap: 5px;
  }
}
</style>
