<template>
  <section class="social-header">
    <div class="social-header__container">
      <p class="social-header__city" @click="handleCityClick()">{{ getCurrentCity ? getCurrentCity : 'Москва' }}
      </p>
      <div class="social-header__button-group">
        <social-button v-for="buttonData in socialButtonsData" :key="buttonData.id" :data="buttonData" />
      </div>
      <city-clarification />
      <list-cities />
    </div>
    <div class="social-header__select-city-bg" :class="{ 'social-header__select-city-bg_visible': getStartSelectCity === true }"></div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import CityClarification from '@/components/CityClarification.vue';
import ListCities from '@/components/ListCities.vue';
import SocialButton from '@/components/UI/SocialButton.vue';

export default {
  name: 'social-header',
  components: {
    SocialButton, CityClarification, ListCities
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      socialButtonsData: 'dataStore/socialButtonsData',
      getCurrentCity: 'dataStore/getCurrentCity',
       getStartSelectCity: 'dataStore/getStartSelectCity'
    }),
  },
  methods: {
    ...mapActions({
      changeStartSelectCity: 'dataStore/changeStartSelectCity'
    }),
    handleCityClick() {
      this.changeStartSelectCity(true)
      document.body.classList.add('body-scroll-lock')
    }
  },
};
</script>

<style lang="scss" scoped>
.social-header {
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  padding: 10px var(--side-margins-base);
  background-color: var(--third-color);

  &__container {    
    z-index: 30;
    position: relative;
    width: 100%;
    max-width: var(--max-width-block-global);
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

  &__select-city-bg {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 0px;
    display: none;
    background-color: rgba(0, 0, 0, 0.522);

    &_visible{
      display: block;
    }
  }
}
</style>
