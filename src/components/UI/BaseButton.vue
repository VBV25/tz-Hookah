<template>
  <button type="button" class="button" :id="buttonData.id">
    <img v-if="buttonData.img" class="button__img" :src="getImageUrlSlider(buttonData.img)" alt="icon" />
    <p v-if="buttonData.text" class="button__text">{{ buttonData.text }}</p>
    <div v-if="buttonData?.auxiliaryBlock" :class="'button__' + buttonData.auxiliaryBlock">{{ buttonData.auxiliaryBlockData }}</div>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    buttonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    getImageUrlSlider(imageName) {
      return require(`@/assets/img/buttons/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: unset;

  font-size: var(--font-size-button);
  font-family: var(--font-family);
  font-weight: 400;
  line-height: 100%;
}
</style>
