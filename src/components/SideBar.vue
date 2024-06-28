<template>
  <aside class="sidebar">
    <div class="sidebar__content-wrapper">
      <p class="sidebar__title">Категории</p>
      <li v-for="elementList in getSideBarList" :key="elementList.category" class="sidebar__category">
        <div v-if="elementList.subCategories.length > 0" class="sidebar__category-img">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.6666 5.66699L7.99992 10.3337L3.33325 5.66699"
              stroke="#231F20"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!--<img class="sidebar__category-img" src="@/assets/img/sidebar/arrow-down.svg" alt="стрелка вниз" />-->
        <p class="sidebar__category-text">{{ elementList.category }}</p>
        <div class="sidebar__category-number">
          (<span>{{ elementList.totalProducts }}</span
          >)
        </div>
      </li>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'side-bar',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getProductsData: 'productsStore/getProductsData',
      getSideBarList: 'productsStore/getSideBarList',
    }),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 270px;
  min-width: 200px;
  width: 25vw;
  min-height: 50vh;
  padding: 10px 20px;
  background-color: var(--eighth-color);

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__title {
    cursor: default;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-second);
    line-height: 89%;
    color: var(--font-third-color);
  }

  &__category {
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 5px 0px 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-navigation);
    line-height: 100%;
    color: var(--sixth-color);

    &:hover {
      color: var(--fifth-color);
    }

    &:hover &-img svg path {
      stroke: var(--fifth-color);
    }
  }

  &__category-img {
    position: absolute;
    width: 14px;
    height: 14px;
    left: 0px;
  }
}
</style>
