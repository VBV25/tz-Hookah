<template>
  <social-header />
  <!--<header-block />-->
  <!--<div></div>-->
  <!--<footer-block />-->
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import SocialHeader from '@/components/SocialHeader.vue';

export default {
  name: 'home-page',
  components: {
    HeaderBlock,
    FooterBlock,
    SocialHeader,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
