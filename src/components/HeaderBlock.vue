<template>
  <!--<header class="header" @mouseleave="closeSubmenu">
    <router-link to="/" class="header__title">Название компании</router-link>
    <nav class="header__navigation">
      <ul class="header__navigation-ul">
        <router-link
          v-for="item in filteredMenuData(0)"
          :key="item.id"
          class="header__link"
          :id="item.id"
          @mouseenter="openSubmenu(item)"
          :to="'/' + item.url"
        >
          {{ item.name }}
        </router-link>
      </ul>
    </nav>
    <button class="header__button" type="button">Вход</button>

    <div class="header__navigation-popup">
      <ul class="header__navigation-ul">
        <router-link
          v-for="item in submenuData"
          :key="item.id"
          class="header__link"
          :id="item.id"
          @mouseenter="openSubmenu(item)"
          :to="'/' + item.url"
        >
          {{ item.name }}
        </router-link>
      </ul>
    </div>
  </header>-->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'header-block',
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
//.header {
//  position: relative;
//  width: 100%;
//  height: max-content;
//  padding: 15px 5px;

//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//  background-color: var(--third-color);

//  &__title {
//    width: 150px;

//    text-align: center;
//    font-size: var(--font-size-first);
//    font-weight: 800;
//    line-height: 105%;
//    color: var(--font-first-color);
//  }

//  &__navigation {
//    width: max-content;
//    height: max-content;
//  }

//  &__navigation-ul {
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    gap: 20px;
//  }

//  &__link {
//    font-size: var(--font-size-h3);
//    font-weight: 400;
//    line-height: 100%;
//    color: var(--font-first-color);
//  }

//  &__button {
//    width: 100px;
//    height: 30px;

//    display: flex;
//    justify-content: center;
//    align-items: center;
//    background-color: var(--fourth-color);
//    border: 2px solid var(--first-color);

//    font-size: var(--font-size-second);
//    font-weight: 400;
//    line-height: 100%;
//    color: var(--font-first-color);
//  }

//  &__navigation-popup {
//    position: absolute;
//    left: 0px;
//    bottom: 0px;
//    width: 100%;
//    height: 50px;
//    margin-bottom: -50px;
//    padding: 15px 5px;

//    display: flex;
//    align-items: center;
//    justify-content: center;
//    gap: 20px;

//    background-color: var(--third-color);
//    border: 2px solid red;
//  }
//}
</style>
