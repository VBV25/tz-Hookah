<template>
  <div class="blog-card">
    <div class="blog-card__img-wrapper">
      <img class="blog-card__img" :src="require(`@/assets/img/blog-card/${dataCardBlog.img}`)" alt="Блог">
    </div>
    <div class="blog-card__content">
      <p class="blog-card__data">{{ dataCardBlog.date }}</p>
      <p class="blog-card__title">{{ dataCardBlog.title }}</p>
      <div class="blog-card__description">{{ dataCardBlog.description }}</div>
      <base-button class="blog-card__button" :buttonData="dataCardBlog.buttonContent" />
    </div>

  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'blog-card',
  components: { BaseButton },
  props: {
    dataCardBlog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.blog-card {
  width: 268px;

  display: flex;
  flex-direction: column;
  flex: 0 0 268px;

  &__img-wrapper {
    width: 100%;
    height: 195px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__content {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1;
    gap: 15px;
    background-color: var(--eighth-color);
  }

  &__data {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-text);
    line-height: 171%;
    color: var(--fifth-color);
  }

  &__title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-second);
    line-height: 103%;
    color: var(--font-third-color);
  }

  &__description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-text);
    line-height: 171%;
    color: var(--font-fourth-color);
  }

  &__button {
    font-weight: 700;
    color: var(--font-third-color);

    img {
      order: 2;
      width: 14px;
      height: 14px;

      path{
        fill: black !important;
      }
    }

    p {
      order: 1;
    }
  }

}
</style>
