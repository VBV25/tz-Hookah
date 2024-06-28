<template>
  <div class="slide" :style="'background-color:' + slideData.backgroundColor">
    <div class="slide__text-content">
      <p class="slide__text-subtitle">{{ slideData.subtitle }}</p>
      <h1 class="slide__text-title">{{ slideData.title }}</h1>
      <p class="slide__text-description">{{ slideData.description }}</p>
      <button class="slide__button">{{ slideData.buttonContent }}</button>
    </div>
    <div class="slide__product-img-wrapper">
      <img class="slide__product-img" :src="getImageUrlSlider(slideData.imgContent)" alt="продукт" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide-card',
  props: {
    slideData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    getImageUrlSlider(imageName) {
      return require(`@/assets/img/slider/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  box-sizing: border-box;
  width: var(--slider-width);
  height: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  user-select: none;
  overflow: hidden;

  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;

    background-position: left;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url('@/assets/img/slider/green-patterns.svg');
    transform: scale(-1, -1);
  }

  &__text-content {
    width: 53%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__text-title {
    width: 70%;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: var(--font-size-h1);
    line-height: 100%;
    text-transform: uppercase;
    color: var(--font-third-color);
  }

  &__text-subtitle {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-text);
    line-height: 171%;
    text-transform: uppercase;
    color: var(--font-third-color);
  }

  &__text-description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-text);
    line-height: 131%;
    color: var(--font-fourth-color);
  }
  &__button {
    min-width: 188px;
    min-height: 37px;
    width: max-content;
    height: max-content;
    margin-top: 30px;
    padding: 9px 26px;
    border-radius: 6px;
    background-color: var(--fifth-color);

    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-button);
    line-height: 116%;
    color: var(--font-first-color);
  }

  &__product-img-wrapper {
    pointer-events: none;
    z-index: 5;
    position: absolute;
    width: 42%;
    height: 100%;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  &__product-img {
    width: 100%;
    height: auto;
    margin-bottom: -60px;
    margin-right: -10px;
    transform: scale(1.3);
  }
}
</style>
