<template>
  <header class="header-wrapper">
    <social-header />
    <header-block />
  </header>
  <main class="main">
    <slider-block />
    <section class="content-product">
      <side-bar />
      <products-container />
    </section>
  </main>
  <footer-block />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import SocialHeader from '@/components/SocialHeader.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import SliderBlock from '@/components/SliderBlock.vue';
import SideBar from '@/components/SideBar.vue';
import ProductsContainer from '@/components/ProductsContainer.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'home-page',
  components: {
    SocialHeader,
    HeaderBlock,
    SliderBlock,
    ProductsContainer,
    SideBar,
    FooterBlock,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentMenuElement: 'dataStore/currentMenuElement',
    }),
  },
  methods: {
    ...mapActions({
      changeCurrentMenuElement: 'dataStore/changeCurrentMenuElement',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: max-content;
}

.main {
  width: 100%;
  height: max-content;
  padding: 10px var(--side-margins-base);
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
}

.content-product {
  width: 100%;
  height: 50vh;

  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: max-content 1fr;
  column-gap: 40px;
}
</style>
