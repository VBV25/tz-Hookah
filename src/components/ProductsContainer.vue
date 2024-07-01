<template>
  <section class="products-container">
    <div class="products-container__header">
      <navigation-list :navList="$store.state.textStore.productsNavigation" />
      <div class="products-container__button-group">
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayGrid" />
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayHorizont" />
      </div>
    </div>
    <div v-if="paginatedProducts.length > 0" class="products-container__wrapper">
      <product-card v-for="product in paginatedProducts" :key="product.id" :product="product" />
    </div>
    <div v-else class="products-container__error-text">В данной категории нет товаров. Выберете вкладку - "Все товары".</div>
    <div class="products-container__pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: getCurrentPage === page }"
        class="products-container__pagination-button"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NavigationList from '@/components/UI/NavigationList.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'products-container',
  components: {
    NavigationList,
    BaseButton,
    ProductCard,
  },
  data() {
    return {
      dataProductDisplayHorizont: {
        id: 'product-display-horizont',
        img: 'gorizont-link-icon.svg',
        text: '',
      },
      dataProductDisplayGrid: {
        id: 'product-display-grid',
        img: 'grid-list-icon.svg',
        text: '',
      },
      // currentPage: this.getCurrentPage,
      itemsPerPage: 9,
    };
  },
  computed: {
    ...mapGetters({
      getProductsData: 'productsStore/getCurrentProductsList',
      getCurrentPage: 'productsStore/getCurrentPage',
    }),
    paginatedProducts() {
      const start = (this.getCurrentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.getProductsData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.getProductsData.length / this.itemsPerPage);
    },
  },
  methods: {
    ...mapActions({
      setCurrentPage: 'productsStore/setCurrentPage',
    }),
    changePage(page) {
      this.setCurrentPage(page);
    },
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
  gap: 15px;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__button-group {
    width: max-content;
    height: max-content;
    display: flex;
    gap: 10px;
  }

  &__wrapper {
    width: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: repeat(3, max-content);
    row-gap: 20px;
    column-gap: 10px;
  }

  &__error-text {
    width: 100%;
    padding: 50px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: var(--font-size-h2);
    line-height: 100%;
    color: var(--font-third-color);
  }

  // @media screen and (max-width: 970px) {
  //   &__wrapper{
  //     grid-template-columns: repeat(2, max-content);
  //     grid-template-rows: unset;
  //   }
  // }

  &__pagination {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
  }

  &__pagination-button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 2px solid var(--ninth-color);

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 89%;
    color: var(--font-third-color);

    &.active {
      border-color: var(--fifth-color);
      background-color: var(--fifth-color);
      color: var(--font-first-color);
    }
  }
}
</style>
