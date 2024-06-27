const dataModule = {
  namespaced: true,
  state: {
    currentHeaderMenuElement: 'home',
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
  },

  getters: {
    socialButtonsData: (state) => state.socialButtonsData,
    sliderContent: (state) => state.sliderContent,
    currentHeaderMenuElement: (state) => state.currentHeaderMenuElement,
  },

  mutations: {
    mutationCurrentHeaderMenuElement(state, newCurrentHeaderMenuElement) {
      state.currentHeaderMenuElement = newCurrentHeaderMenuElement;
    },
  },

  actions: {
    changeCurrentHeaderMenuElement({ commit }, currentHeaderMenuElement) {
      commit('mutationCurrentHeaderMenuElement', currentHeaderMenuElement);
    },
  },
};

export default dataModule;
