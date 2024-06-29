<template>
  <section class="products-container">
    <div class="products-container__header">
      <navigation-list :navList="$store.state.textStore.productsNavigation" />
      <div class="products-container__button-group">
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayGrid" />
        <base-button class="products-container__button-product-display" :buttonData="dataProductDisplayHorizont" />
      </div>
    </div>
    <div class="products-container__wrapper">
      <product-card v-for="product in paginatedProducts" :key="product.id" :product="product" />
    </div>
    <div class="products-container__pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
        class="products-container__pagination-button"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

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
      currentPage: 1,
      itemsPerPage: 9,
    };
  },
  computed: {
    ...mapGetters({
      getProductsData: 'productsStore/getCurrentProductsList',
    }),
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.getProductsData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.getProductsData.length / this.itemsPerPage);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    // Получение данных из getters и вывод в консоль
    console.log('Products Data:', this.getProductsData);
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

  &__wrapper {
    width: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: repeat(3, max-content);
    row-gap: 20px;
  }

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
    width: 35px;
    height: 35px;
    padding: 5px 10px;
    margin: 0 10px;
    border-radius: 4px;
    border: 2px solid var(--ninth-color);

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 89%;
    color: var(--font-third-color);

    &.active {
      border-color: var(--eighth-color);
      background-color: var(--fifth-color);
      color: var(--font-first-color);
    }
  }
}
</style>
