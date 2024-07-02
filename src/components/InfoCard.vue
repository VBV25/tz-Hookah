<template>
  <div class="info-card" :id="dataInfoCard.id">
    <img class="info-card__img" :src="getImageUrlInfoCard(dataInfoCard.imgContent)" alt="Изображение" />
    <div class="info-card__content">
      <h2 class="info-card__title">{{ dataInfoCard.title }}</h2>
      <p class="info-card__description">{{ dataInfoCard.description }}</p>
      <base-button class="info-card__button" :buttonData="dataInfoCard.buttonContent" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'info-card',
  props: {
    dataInfoCard: {
      type: Object,
      required: true,
    },
  },
  components: { BaseButton },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      //infoCardContent: 'dataStore/infoCardContent',
    }),
  },

  methods: {
    ...mapActions({
      //changeCurrentMenuElement: 'dataStore/changeCurrentMenuElement',
      //filterProducts: 'productsStore/filterProducts',
      //setCurrentPage:'productsStore/setCurrentPage'
    }),
    getImageUrlInfoCard(imageName) {
      return require(`@/assets/img/info-product/${imageName}`);
    },
  },
};
</script>

<style lang="scss">
.info-card {
  position: relative;
  width: 48%;
  height: 200px;
  padding: 30px 20px !important;
  background-color: var(--eighth-color);

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
  }

  &__img {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: auto;
    height: 320px;
  }

  &__title {
    width: 40%;
    height: 60px;
    text-align: right;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 89%;
    color: var(--font-third-color);
  }

  &__description {
    width: 50%;
    text-align: right;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: var(--font-fourth-color);
  }

  &__button {
    width: 153px;
    height: 37px;
    padding: 9px 27px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: var(--fifth-color) !important;
    color: var(--first-color);

    img {
      order: 2;
      width: 14px;
      height: 14px;
    }

    p {
      order: 1;
    }
  }
}
</style>
