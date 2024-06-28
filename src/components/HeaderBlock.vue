<template>
  <section class="header">
    <div class="header__logo-wrapper">
      <img class="header__logo" src="@/assets/img/header/logo.png" alt="Логотип компании" />
    </div>
    <navigation-list :navList="$store.state.textStore.headerNavigation" />
    <div class="header__button-group">
      <button type="button" class="header__icon-button" id="search-button"></button>
      <button type="button" class="header__icon-button" id="cart-button">
        <div class="header__icon-button-current">0</div>
      </button>
      <button type="button" class="header__entry-button" id="entry-button">
        <img class="header__entry-button-img" src="@/assets/img/header/Logout.svg" alt="вход" />
        <p class="header__entry-button-text">Вход</p>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NavigationList from '@/components/UI/NavigationList.vue';

export default {
  name: 'header-block',
  components: {
    NavigationList,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      //getMenuData: 'menuStore/menuData',
    }),
  },

  methods: {
    ...mapActions({
      //loadingMenuData: 'menuStore/getMenuData',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: max-content;
  padding: 0px var(--side-margins-base);

  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid var(--fifth-color);

  &::before{
    content: '';
    position: absolute;
    left: var(--side-margins-base);
    bottom: 0px;
    width: calc(100vw - var(--side-margins-base)*2);
    height: 1px;
    opacity: 0.8;
    background-color:var(--fifth-color) ;
  }

  &__logo-wrapper {
    $widthLogo: 134px;
    width: $widthLogo;
    height: calc($widthLogo/3.4118);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    width: 100%;
    height: 100%;
  }

  &__button-group {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__icon-button {
    $sizeIconButton: 24px;

    position: relative;
    width: $sizeIconButton;
    height: calc($sizeIconButton + 4px);
    background-color: unset;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  #search-button {
    background-image: url('@/assets/img/header/search.svg');
  }
  #cart-button {
    background-image: url('@/assets/img/header/cart.svg');
  }
  &__icon-button-current {
    position: absolute;
    right: -7px;
    top: 0px;
    width: 16px;
    height: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 2px solid var(--first-color);
    background-color: var(--fifth-color);

    font-family: var(--third-family);
    font-weight: 500;
    font-size: 8px;
    color: var(--font-first-color);
  }

  &__entry-button {
    width: 100px;
    height: 35px;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 6px;
    background-color: var(--fifth-color);
  }
  &__entry-button-img {
    width: 20px;
    height: auto;
  }
  &__entry-button-text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-button);
    line-height: 116%;
    color: var(--font-first-color);
  }
}
</style>
