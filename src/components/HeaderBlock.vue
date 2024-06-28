<template>
  <section class="header">
    <div class="header__logo-wrapper">
      <img class="header__logo" src="@/assets/img/header/logo.png" alt="Логотип компании" />
    </div>
    <navigation-list :navList="$store.state.textStore.headerNavigation" />
    <div class="header__button-group">
      <base-button class="header__icon-button" :buttonData="dataSearchButton" />
      <base-button class="header__icon-button" :buttonData="dataCartButton" />
      <base-button class="header__icon-button" :buttonData="dataEntryButton" />
    </div>
  </section>
</template>

<script>
import NavigationList from '@/components/UI/NavigationList.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'header-block',
  components: {
    NavigationList,
    BaseButton,
  },
  data() {
    return {
      dataSearchButton: {
        id: 'search-button',
        img: 'search.svg',
        text: '',
        callback: () => {
          console.log('search');
        },
      },
      dataCartButton: {
        id: 'cart-button',
        img: 'cart.svg',
        text: '',
        auxiliaryBlock: 'counter',
        auxiliaryBlockData: 0,
        callback: () => {
          console.log('cart');
        },
      },
      dataEntryButton: {
        id: 'entry-button',
        img: 'Logout.svg',
        text: 'Вход',
        callback: () => {
          console.log('entry');
        },
      },
    };
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  height: max-content;
  padding: 0px var(--side-margins-base) !important;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    left: var(--side-margins-base);
    bottom: 0px;
    width: calc(100vw - var(--side-margins-base) * 2);
    height: 1px;
    opacity: 0.8;
    background-color: var(--fifth-color);
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
    gap: 15px;
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
}

.header #entry-button {
  width: 100px;
  height: 35px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 6px;
  background-color: var(--fifth-color);

  .button__img {
    width: 20px;
    height: auto;
  }

  .button__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-button);
    line-height: 100%;
    color: var(--font-first-color);
  }
}

.header .button__counter {
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
  line-height: 100%;
  color: var(--font-first-color);
}
</style>
