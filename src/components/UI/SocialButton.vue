<template>
  <a class="social-button" :id="data.id" :href="data.link">
    <img class="social-button__img" :src="getImageUrl(data.img)" :alt="data.name" />
  </a>
</template>

<script>
export default {
  name: 'social-button',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/img/social/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.social-button {
  width: 25px;
  height: 25px;

  display: flex;
  //align-items: center;
  //justify-content: center;

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
