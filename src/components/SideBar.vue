<template>
  <aside class="sidebar">
    <div class="sidebar__content-wrapper">
      <div class="sidebar__category-container">
        <p class="sidebar__title">Категории</p>
        <dropdown-list v-for="categoryElement in getSideBarList" :key="categoryElement.category" :sideBarList="categoryElement" />
      </div>
      <div class="sidebar__price-container">
        <p class="sidebar__title">Цена</p>
        <price-slider class="sidebar__slider" :initialPriceRange="priceRange" :initialMaxPrice="maxPrice" @updatePriceRange="updatePriceRange" />
      </div>
      <div class="sidebar__button-group">
        <base-button class="sidebar__button" :buttonData="applySidebar" @click="displayMatchingProducts()" />
        <base-button class="sidebar__button" :buttonData="resetSidebar" @click="clearSidebar()" />
      </div>
    </div>
    <div class="sidebar__banner">
      <banner-sale :dataBanner="bannerSaleSidebar" />
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import DropdownList from '@/components/UI/DropdownList.vue';
import PriceSlider from '@/components/UI/PriceSlider.vue';
import BannerSale from '@/components/UI/BannerSale.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'side-bar',
  components: {
    DropdownList,
    PriceSlider,
    BannerSale,
    BaseButton,
  },
  data() {
    return {
      applySidebar: {
        id: 'apply-sidebar',
        img: '',
        text: 'Применить',
      },
      resetSidebar: {
        id: 'reset-sidebar',
        img: '',
        text: 'Сброс',
      },
    };
  },

  computed: {
    ...mapGetters({
      getCurrentCategoryName: 'productsStore/getCurrentCategoryName',
      getCurrentSubcategoryName: 'productsStore/getCurrentSubcategoryName',
      getProductsData: 'productsStore/getProductsData',
      getCurrentProductsList: 'productsStore/getCurrentProductsList',
      getSideBarList: 'productsStore/getSideBarList',
      priceRange: 'productsStore/getPriceRange',
      maxPrice: 'productsStore/getMaxPrice',
      bannerSaleSidebar: 'dataStore/bannerSaleSidebar',
    }),
  },
  methods: {
    ...mapActions({
      changeCurrentCategoryName: 'productsStore/changeCurrentCategoryName',
      changeCurrentSubcategoryName: 'productsStore/changeCurrentSubcategoryName',
      updatePriceRangeAction: 'productsStore/updatePriceRange',
      setCurrentProductsList: 'productsStore/setCurrentProductsList',
      setSortedProductsList: 'productsStore/setSortedProductsList',
      filterProducts: 'productsStore/filterProducts',
    }),

    updatePriceRange(newPriceRange) {
      console.log(newPriceRange);
      this.updatePriceRangeAction(newPriceRange);
    },

    displayMatchingProducts() {
      const filteredProducts = this.getProductsData.filter((product) => {
        const matchesPrice = product.price >= this.priceRange[0] && product.price <= this.priceRange[1];
        const matchesCategory = this.getCurrentCategoryName === 'Все товары' || product.category.ru === this.getCurrentCategoryName;
        const matchesSubcategory = !this.getCurrentSubcategoryName || product.subCategory.ru === this.getCurrentSubcategoryName;

        return matchesPrice && matchesCategory && matchesSubcategory;
      });

      //this.setCurrentProductsList(filteredProducts);
      this.setSortedProductsList(filteredProducts);
      this.filterProducts('exclusiveProducts');
    },

    clearSidebar() {
      this.changeCurrentCategoryName('Все товары');
      this.changeCurrentSubcategoryName('');
      this.updatePriceRangeAction([0, this.maxPrice]);
    },
  },
  created() {
    this.changeCurrentCategoryName('Все товары');
    this.changeCurrentSubcategoryName('');
  },
};
</script>

<style lang="scss">
.sidebar {
  max-width: var(--max-width-sidebar);
  min-width: 250px;
  width: 25vw;
  min-height: 50vh;
  height: max-content;
  background-color: var(--eighth-color);

  &__content-wrapper {
    padding: 10px 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__category-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__price-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    cursor: default;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-second);
    line-height: 89%;
    color: var(--font-third-color);
  }

  &__slider {
    margin-left: 10px;
  }

  &__button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #apply-sidebar,
  #reset-sidebar {
    padding: 7px 7%;
    border-radius: 6px;
    background-color: var(--fifth-color);
    color: var(--first-color);
  }
  #reset-sidebar {
    background-color: var(--second-color);
  }

  &__banner {
    width: 100%;
    max-width: 310px;
    height: max-content;
    margin-top: 40px;
  }
}
</style>
