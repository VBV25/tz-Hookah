<template>
  <nav class="navigation-list">
    <li
      class="navigation-list__link"
      v-for="element in navList"
      :key="element.id"
      @click="changeRoute(element)"
      :id="element.id"
      :class="{ 'navigation-list__link_active': element.id === currentMenuElement.header || element.id === currentMenuElement.products}"
    >      {{ element.name }}
    </li>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'navigation-list',
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      currentMenuElement: 'dataStore/currentMenuElement',
    }),
  },

  methods: {
    ...mapActions({
      changeCurrentMenuElement: 'dataStore/changeCurrentMenuElement',
    }),

    changeRoute(element) {      
      if (element.routerLink) {
        this.$router.push(`${element.routerLink}`);
        this.changeCurrentMenuElement({key: 'header', value: element.id});
      }
      if(!element.routerLink){
        this.changeCurrentMenuElement({key: 'products', value: element.id});
      }
    },
  },
  mounted() {
    if (this.$route.name.toLowerCase()) {
      this.changeCurrentMenuElement({key: 'header', value: this.$route.name.toLowerCase()});
    }
  },

  // beforeRouteUpdate
  beforeRouteLeave(to, from, next) {
    console.log('eeeeeeeeeee');
    
    this.changeCurrentMenuElement({key: 'products', value: 'exclusive-products'});
    next();
  }
};
</script>

<style lang="scss" scoped>
.navigation-list {
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    cursor: pointer;
    padding: 30px 0px;
    opacity: 0.5;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-navigation);
    line-height: 116%;
    color: var(--sixth-color);

    &_active {
      opacity: 1;
      border-bottom: 3px solid var(--fifth-color);
    }
  }
}
</style>
