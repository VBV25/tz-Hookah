const dataModule = {
  namespaced: true,
  state: {
    currentMenuElement: {
      header: 'home',
      products: 'exclusive-products'
    },
    socialButtonsData: [
      {
        id: 'vk-social-btn',
        name: 'Вконтакте',
        link: '#',
        img: 'vk.svg',
      },
      {
        id: 'yt-social-btn',
        name: 'YouTube',
        link: '#',
        img: 'youtube.svg',
      },
      {
        id: 'tg-social-btn',
        name: 'Телеграм',
        link: '#',
        img: 'telegram.svg',
      },
    ],
    sliderContent: [
      { id: 'slide-1', title: 'Smoking shop', subtitle: 'Интернет-магазин кальянов и аксессуаров', description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!', imgContent: 'product1.png', buttonContent: 'Начать покупки', router: '', backgroundColor: '#fafafa' },
      { id: 'slide-2', title: 'Smoking shop', subtitle: 'Интернет-магазин кальянов и аксессуаров', description: 'Smoking shop', imgContent: 'product1.png', buttonContent: 'Смотреть', router: '', backgroundColor: 'gray' },
      { id: 'slide-3', title: 'slide-3', subtitle: 'Интернет-магазин кальянов и аксессуаров', description: 'slide-3', imgContent: 'product1.png', buttonContent: 'Подробнее', router: '', backgroundColor: 'yellow' },
    ],

    bannerSaleSidebar: {
      id: 'banner-sidebar',
      title: 'SALE',
      description: 'Скидки на все табаки до конца мая',
      percent: '-15%',
      imgProduct: 'sale-produkt.png',
      imgDecoration: 'baner-patterns.svg',
      slogan: '“ВСЕ ЛЕТИМ НА ШАШЛЫНДОС”'
    }
  },

  getters: {
    socialButtonsData: (state) => state.socialButtonsData,
    sliderContent: (state) => state.sliderContent,
    currentMenuElement: (state) => state.currentMenuElement,
    bannerSaleSidebar: (state) => state.bannerSaleSidebar,
  },

  mutations: {
    mutationCurrentMenuElement(state, payload) {
      const { key, value } = payload;
      state.currentMenuElement[key] = value;
    }
  },

  actions: {
    changeCurrentMenuElement({ commit }, data) {
      commit('mutationCurrentMenuElement', data);
    },
  },
};

export default dataModule;
