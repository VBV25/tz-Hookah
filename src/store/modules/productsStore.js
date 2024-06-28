import products from '../../data/productsData.json';

const productsModule = {
  namespaced: true,
  state: {
    productsData: [],
    sideBarList: [],
    maxPrice: 0,
    minPrice: 0,

    errorText: '',
  },

  getters: {
    getProductsData: state => state.productsData,
    getSideBarList: state => state.sideBarList,
    getMaxPrice: state => state.maxPrice,
    getMinPrice: state => state.minPrice,
    getErrorText: state => state.errorText,
  },

  mutations: {
    setProductsData(state, products) {
      state.productsData = products;
    },
    setSideBarList(state, sideBarList) {
      state.sideBarList = sideBarList;
    },
    setMaxPrice(state, maxPrice) {
      state.maxPrice = maxPrice;
    },
    setMinPrice(state, minPrice) {
      state.minPrice = minPrice;
    },
    changeErrorText(state, newErrorText) {
      state.errorText = newErrorText;
    },
  },

  actions: {
    loadProductsData({ commit }) {
      commit('setProductsData', products);
      if (products && products.length > 0) {
        const sideBar = [];
        let maxPrice = products[0].price;
        let minPrice = products[0].price;

        products.forEach(product => {
          const category = product.category.ru;
          const subCategory = product.subCategory ? product.subCategory.ru : null;

          let categoryIndex = sideBar.findIndex(item => item.category === category);

          if (product.price > maxPrice) {
            maxPrice = product.price;
          }
          if (product.price < minPrice) {
            minPrice = product.price;
          }

          if (categoryIndex === -1) {
            sideBar.push({
              category,
              totalProducts: 0,
              subCategories: [],
            });
            categoryIndex = sideBar.length - 1;
          }
          sideBar[categoryIndex].totalProducts++;

          if (subCategory) {
            let subCategoryIndex = sideBar[categoryIndex].subCategories.findIndex(item => item.name === subCategory);
            if (subCategoryIndex === -1) {
              sideBar[categoryIndex].subCategories.push({
                name: subCategory,
                count: 0,
              });
              subCategoryIndex = sideBar[categoryIndex].subCategories.length - 1;
            }
            sideBar[categoryIndex].subCategories[subCategoryIndex].count++;
          }
        });

        sideBar.forEach(category => {
          category.subCategories.sort((a, b) => a.name.localeCompare(b.name));
        });
        sideBar.sort((a, b) => a.category.localeCompare(b.category));

        commit('setSideBarList', sideBar);
        commit('setMaxPrice', maxPrice);
        commit('setMinPrice', minPrice);
      } else {
        commit('changeErrorText', 'Список товаров отсутствует!');
      }
    },
  },
};


export default productsModule;
