<template>
  <section class="social-header">
    <div class="social-header__container">
      <p class="social-header__city">ГОРОД</p>
      <div class="social-header__button-group">
        <social-button v-for="buttonData in socialButtonsData" :key="buttonData.id" :data="buttonData" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import SocialButton from '@/components/UI/SocialButton.vue';

export default {
  name: 'social-header',
  components: {
    SocialButton,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      socialButtonsData: 'dataStore/socialButtonsData',
    }),
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.social-header {
  width: 100%;
  height: max-content;
  padding: 10px var(--side-margins-base);
  background-color: var(--third-color);

  &__container {
    width: 100%;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__city {
    cursor: pointer;
    font-weight: 300;
    color: var(--font-first-color);
    font-family: var(--first-fonts);
    font-size: var(--font-size-city);
  }

  &__button-group {
    width: max-content;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
