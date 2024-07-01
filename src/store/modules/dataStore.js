const dataModule = {
  namespaced: true,
  state: {
    currentCity: null,
    startSelectCity: false,
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
    },
    cityList: ['Москва', 'Киров', 'Пермь', 'Казань', 'Сыктывкар', 'Нижний', 'Новгород', 'Кострома', 'Москва', 'Киров', 'Пермь', 'Казань', 'Сыктывкар', 'Нижний', 'Новгород', 'Кострома', 'Москва', 'Киров', 'Пермь', 'Казань', 'Сыктывкар', 'Нижний', 'Новгород', 'Кострома'],
    infoCardContent: [
      {
        id: 'info-merch',
        title: 'Наш мерч',
        description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
        imgContent: 'girl.png',
        router: '',
        buttonContent: {
          id: 'transition-merch',
          img: 'arrow-right.svg',
          text: 'Перейти',
        },
      },
      {
        id: 'info-hookah',
        title: 'Кальянные смеси &Кальяны',
        description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
        imgContent: 'hookah.png',
        router: '',
        buttonContent: {
          id: 'transition-hookah',
          img: 'arrow-right.svg',
          text: 'Перейти',
        },
      },
    ]
  },

  getters: {
    getInfoCardContent: (state) => state.infoCardContent,
    getCityList: (state) => state.cityList,
    getStartSelectCity: (state) => state.startSelectCity,
    getCurrentCity: (state) => state.currentCity,
    socialButtonsData: (state) => state.socialButtonsData,
    sliderContent: (state) => state.sliderContent,
    currentMenuElement: (state) => state.currentMenuElement,
    bannerSaleSidebar: (state) => state.bannerSaleSidebar,
  },

  mutations: {
    setCurrentCity(state, currentCity) {
      state.currentCity = currentCity;
    },
    mutationStartSelectCity(state, start) {
      state.startSelectCity = start;
    },
    mutationCurrentMenuElement(state, payload) {
      const { key, value } = payload;
      state.currentMenuElement[key] = value;
    }
  },

  actions: {
    changeCurrentMenuElement({ commit }, data) {
      commit('mutationCurrentMenuElement', data);
    },
    changeStartSelectCity({ commit }, data) {
      commit('mutationStartSelectCity', data);
    },
    setCurrentCity({ commit }, city) {
      commit('setCurrentCity', city);
    },
  },
};

export default dataModule;
