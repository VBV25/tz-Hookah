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
      return require(`@/assets/img/social/white/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.social-button {
  width: 19px;
  height: max-content;
  display: flex;

  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
