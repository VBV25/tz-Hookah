<template>
  <li class="dropdown-list">
    <div
      class="dropdown-list__category-wrapper"
      :class="{ 'dropdown-list__category-wrapper_active': getCurrentCategoryName === sideBarList.category }"
      :data-category="sideBarList.category"
      @click="toggleSubcategory(sideBarList.category)"
    >
      <div v-if="sideBarList.subCategories.length > 0" class="dropdown-list__category-img">
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
      <p class="dropdown-list__category-text">{{ sideBarList.category }}</p>
      <div class="dropdown-list__category-number">
        (<span>{{ sideBarList.totalProducts }}</span
        >)
      </div>
    </div>
    <div v-if="sideBarList.subCategories" class="dropdown-list__subcategory" :class="{ 'dropdown-list__subcategory_active': isActive }">
      <li
        v-for="subcategory in sideBarList.subCategories"
        :key="subcategory.name"
        class="dropdown-list__subcategory-wrapper"
        :class="{ 'dropdown-list__subcategory-wrapper_active': getCurrentSubcategoryName === subcategory.name }"
        @click="toggleSubcategoryProducts($event, subcategory.name)"
        :data-subcategory="subcategory.name"
        :data-category="sideBarList.category"
      >
        <p class="dropdown-list__category-text">{{ subcategory.name }}</p>
        <div class="dropdown-list__category-number">
          (<span>{{ subcategory.count }}</span
          >)
        </div>
      </li>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'dropdown-list',
  props: {
    sideBarList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapGetters({
      getCurrentCategoryName: 'productsStore/getCurrentCategoryName',
      getCurrentSubcategoryName: 'productsStore/getCurrentSubcategoryName',
    }),
  },
  methods: {
    ...mapActions({
      changeCurrentCategoryName: 'productsStore/changeCurrentCategoryName',
      changeCurrentSubcategoryName: 'productsStore/changeCurrentSubcategoryName',
    }),

    toggleSubcategory(sideBarCategory) {
      this.changeCurrentCategoryName(sideBarCategory);
      this.changeCurrentSubcategoryName('');
      this.isActive = !this.isActive;
    },

    toggleSubcategoryProducts(event, subcategory) {
      event.stopPropagation();
      const clickedElement = event.currentTarget;
      this.changeCurrentSubcategoryName(subcategory);
      this.changeCurrentCategoryName(clickedElement.dataset.category);
    },
  },
  created() {
    this.changeCurrentCategoryName('Все товары');
    this.changeCurrentSubcategoryName('');
  },
};
</script>

<style lang="scss" scoped>
.dropdown-list {
  display: flex;
  flex-direction: column;

  &__category-wrapper,
  &__subcategory-wrapper {
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

    &:hover .dropdown-list__category-img svg path {
      stroke: var(--fifth-color);
    }

    &_active {
      color: var(--fifth-color);
      & .dropdown-list__category-img svg path {
        stroke: var(--fifth-color);
      }
    }
  }

  &__category-img {
    position: absolute;
    width: 14px;
    height: 14px;
    left: 0px;
  }

  &__subcategory {
    opacity: 0;
    visibility: hidden;
    height: 0px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    transition: all 0.4s linear;

    &_active {
      opacity: 1;
      visibility: visible;
      height: max-content;
      overflow: unset;
    }
  }

  &__subcategory-wrapper {
    width: 85%;
    padding: 5px 0px;
  }
}
</style>
