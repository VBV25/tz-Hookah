<template>
  <header class="header">
    <div class="header__logo"></div>
    <navigation-list :navList="$store.state.textStore.headerNavigation" />
    <div class="header__button-group">
      <base-button />
      <base-button />
      <base-button />
    </div>
  </header>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NavigationList from '@/components/UI/NavigationList.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'header-block',
  components: {
    NavigationList, BaseButton
  },
  data() {
    return {
      //submenuData: '',
    };
  },

  computed: {
    ...mapGetters({
      //getMenuData: 'menuStore/menuData',
    }),
  },

  methods: {
    ...mapActions({
      //loadingMenuData: 'menuStore/getMenuData',
    }),
    //filteredMenuData(numberLevel) {
    //  if (this.getMenuData) {
    //    return this.getMenuData.filter((item) => item.nestingLevel === numberLevel);
    //  }
    //},

    openSubmenu(item) {
      //const currentCategory = item.category;
      //const numberLevelSearch = item.nestingLevel + 1;
      //const subMenu = this.getMenuData.filter((subItem) => {
      //  return subItem.nestingLevel === numberLevelSearch && subItem.category === currentCategory;
      //});
      //this.submenuData = subMenu;
      //console.log(subMenu);
      //if (item.submenu) this.submenuData = item;
      //this.getMenuData.find(submenu => )
    },
    closeSubmenu() {
      //this.submenuData = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: max-content;
  padding: 0px var(--side-margins-base);

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--fifth-color)
}
</style>
