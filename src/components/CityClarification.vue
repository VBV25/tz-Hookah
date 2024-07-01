<template>
  <div class="city-clarification" :class="{ 'city-clarification_visible': getCurrentCity === null && getStartSelectCity === false }">
    <p class="city-clarification__text">
      Ваш город <span class="city-clarification__city">{{ city }}</span> верно?
    </p>
    <div class="city-clarification__button-group">
      <base-button class="city-clarification__button" :buttonData="yesButton" @click="saveCurrentCity()" />
      <base-button class="city-clarification__button" :buttonData="noButton" @click="selectCity()" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'city-clarification',
  components: { BaseButton },
  data() {
    return {
      city: 'Москва',
      yesButton: {
        id: 'yes-city-button',
        img: '',
        text: 'Да',
      },
      noButton: {
        id: 'no-city-button',
        img: '',
        text: 'Нет',
      },
    };
  },
  computed: {
    ...mapGetters({
      getCurrentCity: 'dataStore/getCurrentCity',
      getStartSelectCity: 'dataStore/getStartSelectCity',
    }),
  },
  methods: {
    ...mapActions({
      setCurrentCity: 'dataStore/setCurrentCity',
      changeStartSelectCity: 'dataStore/changeStartSelectCity',
    }),
    saveCurrentCity() {
      this.setCurrentCity(this.city);
    },
    selectCity() {
      this.changeStartSelectCity(true);
      document.body.classList.add('body-scroll-lock');
    },
  },
};
</script>

<style lang="scss" scoped>
.city-clarification {
  z-index: 100;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 249px;
  height: 106px;
  padding: 15px 25px;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 6px;
  background-color: var(--fifth-color);

  &_visible {
    display: flex;
  }

  &__text {
    width: 100%;
    text-align: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-third);
    line-height: 116%;
    color: var(--font-first-color);
  }

  &__city {
    cursor: pointer;
    text-decoration: underline;
  }

  &__button-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    width: 85px;
    height: 33px;
    padding: 7px 26px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: var(--third-color);
    color: var(--font-first-color);
  }

  #no-city-button {
    background-color: var(--fifth-color);
  }
}
</style>
