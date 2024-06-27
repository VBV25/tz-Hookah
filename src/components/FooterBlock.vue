<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: 'footer-block',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 50px;
  padding: 0px var(--side-margins-base);

  background-color: grey;
}
</style>
