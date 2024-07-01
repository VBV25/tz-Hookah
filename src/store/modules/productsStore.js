import products from '../../data/productsData.json';

const productsModule = {
  namespaced: true,
  state: {
    productsData: [],
    sortedProductsList: [],
    currentProductsList: [],
    sideBarList: [],
    maxPrice: 30000,
    minPrice: 0,
    priceRange: [0, 15000],
    currentCategoryName: '',
    currentSubcategoryName: '',
    currentPage: 1,

    errorText: '',
  },

  getters: {
    getProductsData: (state) => state.productsData,
    getCurrentProductsList: state => state.currentProductsList,
    getSortedProductsList: state => state.sortedProductsList,
    getSideBarList: (state) => state.sideBarList,
    getMaxPrice: (state) => state.maxPrice,
    getMinPrice: (state) => state.minPrice,
    getPriceRange: (state) => state.priceRange,
    getCurrentCategoryName: (state) => state.currentCategoryName,
    getCurrentSubcategoryName: (state) => state.currentSubcategoryName,
    getCurrentPage: (state) => state.currentPage,
    getErrorText: (state) => state.errorText,
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
    setPriceRange(state, priceRange) {
      state.priceRange = priceRange;
    },
    setCurrentCategoryName(state, currentCategoryName) {
      state.currentCategoryName = currentCategoryName;
    },
    setCurrentSubcategoryName(state, currentSubcategoryName) {
      state.currentSubcategoryName = currentSubcategoryName;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    changeErrorText(state, newErrorText) {
      state.errorText = newErrorText;
    },
    SET_CURRENT_PRODUCTS_LIST(state, products) {
      state.currentProductsList = products;
    },
    SET_SORTED_PRODUCTS_LIST(state, products) {
      state.sortedProductsList = products;
    },
  },

  actions: {
    loadProductsData({ commit, state }) {
      commit('setProductsData', products);
      if (products && products.length > 0) {
        let sideBar = [
          {
            category: 'Все товары',
            totalProducts: 0,
            subCategories: [],
          },
        ];
        let maxPrice = products[0].price;
        let minPrice = products[0].price;

        products.forEach((product) => {
          const category = product.category.ru;
          const subCategory = product.subCategory ? product.subCategory.ru : null;

          let categoryIndex = sideBar.findIndex((item) => item.category === category);

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
          sideBar[0].totalProducts++;
          sideBar[categoryIndex].totalProducts++;

          if (subCategory) {
            let subCategoryIndex = sideBar[categoryIndex].subCategories.findIndex((item) => item.name === subCategory);
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

        sideBar.forEach((category) => {
          category.subCategories.sort((a, b) => a.name.localeCompare(b.name));
        });
        sideBar.sort((a, b) => {
          if (a.category === 'Все товары') return -1;
          if (b.category === 'Все товары') return 1;
          return a.category.localeCompare(b.category);
        });

        commit('setSideBarList', sideBar);
        commit('setMaxPrice', maxPrice + 5000);
        commit('setMinPrice', minPrice);
      } else {
        commit('changeErrorText', 'Список товаров отсутствует!');
      }
    },

    filterProducts({ commit, state }, dataSearch) {
      let filteredProducts = [];
      if (dataSearch === 'all-products') {
        filteredProducts = state.sortedProductsList;
      }
      if (dataSearch !== 'all-products') {
        filteredProducts = state.sortedProductsList.filter(product => {
          if (product[dataSearch] && product[dataSearch] !== false) {
            return product
          }
        });
      }
      commit('SET_CURRENT_PRODUCTS_LIST', filteredProducts);
    },

    changeCurrentCategoryName({ commit }, newCategory) {
      commit('setCurrentCategoryName', newCategory);
    },
    changeCurrentSubcategoryName({ commit }, newSubcategory) {
      commit('setCurrentSubcategoryName', newSubcategory);
    },
    updatePriceRange({ commit }, priceRange) {
      commit('setPriceRange', priceRange);
    },
    setCurrentProductsList({ commit }, products) {
      commit('SET_CURRENT_PRODUCTS_LIST', products);
    },
    setCurrentPage({ commit }, page) {
      commit('setCurrentPage', page);
    },
    setSortedProductsList({ commit }, products) {
      commit('SET_SORTED_PRODUCTS_LIST', products);
    },
  },
};

export default productsModule;
