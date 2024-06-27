<template>
  <header class="header-wrapper">
    <social-header />
    <header-block />
  </header>
  <main class="main">
    <slider-block />
  </main>
  <footer-block />
</template>

<script>
import SocialHeader from '@/components/SocialHeader.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import SliderBlock from '@/components/SliderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'home-page',
  components: {
    SocialHeader,
    HeaderBlock,
    SliderBlock,
    FooterBlock,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: max-content;
}
.main {
  padding: 10px var(--side-margins-base);
  display: flex;
  justify-content: center;
}
</style>
