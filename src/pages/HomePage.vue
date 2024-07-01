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
    <section class="product-information">
      <info-card v-for="infoCard in getInfoCardContent" :key="infoCard.id" :dataInfoCard="infoCard" />
    </section>
    <section class="blog"></section>
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
import InfoCard from '@/components/UI/InfoCard.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'home-page',
  components: {
    SocialHeader,
    HeaderBlock,
    SliderBlock,
    ProductsContainer,
    SideBar,
    InfoCard,
    FooterBlock,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentMenuElement: 'dataStore/currentMenuElement',
      getInfoCardContent: 'dataStore/getInfoCardContent',
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
  max-width: var(--max-width-block-global);
  height: max-content;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.content-product {
  width: var(--slider-width);
  max-width: var(--max-width-block-global);
  height: max-content;

  display: flex;
  flex-wrap: nowrap;
  gap: 4%;
}

.product-information {
  width: var(--slider-width);
  max-width: var(--max-width-block-global);
  height: max-content;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
}
</style>
