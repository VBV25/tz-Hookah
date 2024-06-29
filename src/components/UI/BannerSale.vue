<template>
  <div class="banner-sale">
    <img class="banner-sale__img-decoration" :src="getImageUrl(dataBanner.imgDecoration)" alt="декорация баннера" />
    <p class="banner-sale__title">{{ dataBanner.title }}</p>
    <p class="banner-sale__description">{{ dataBanner.description }}</p>
    <img class="banner-sale__img-product" :src="getImageUrl(dataBanner.imgProduct)" alt="Товар" />
    <p class="banner-sale__percent">{{ dataBanner.percent }}</p>
    <p class="banner-sale__slogan">{{ dataBanner.slogan }}</p>
  </div>
  <!--<a class="social-button" :id="dataBanner.id" :href="dataBanner.link">
    <img class="social-button__img" :src="getImageUrl(dataBanner.img)" :alt="dataBanner.name" />
  </a>-->
</template>

<script>
export default {
  name: 'banner-sale',
  props: {
    dataBanner: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/img/banner-sale/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-sale {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 55px 20px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background-color: var(--second-color);

  &__img-decoration {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0px;
    left: 0px;
  }

  &__title {
    font-family: var(--font-family);
    font-weight: 900;
    font-size: 50px;
    line-height: 100%;
    text-transform: uppercase;
    color: var(--fourth-color);
  }

  &__description {
    width: 85%;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: var(--first-color);
  }

  &__img-product {
    width: 100%;
    height: auto;
  }

  &__percent {
    font-family: var(--font-family);
    font-weight: 900;
    font-size: 50px;
    line-height: 100%;
    text-transform: uppercase;
    color: var(--first-color);
  }
  &__slogan {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    text-align: center;
    color: var(--fifth-color);
  }
}
</style>
