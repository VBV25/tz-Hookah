const dataModule = {
  namespaced: true,
  state: {
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
    currentHeaderMenuElement: 'home'
  },

  getters: {
    socialButtonsData: (state) => state.socialButtonsData,
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
