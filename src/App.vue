<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content 1fr max-content;
}
</style>
