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
        img: 'YouTube.svg',
      },
      {
        id: 'tg-social-btn',
        name: 'Телеграм',
        link: '#',
        img: 'tg.svg',
      },
    ],
  },

  getters: {
    socialButtonsData: (state) => state.socialButtonsData,
  },

  mutations: {
    //changeMenuData(state, newMenuData) {
    //  state.menuData = newMenuData;
    //},
  },

  actions: {
    //changeErrorTextMenu({ commit }, errorTextMenu) {
    //  commit('changeErrorTextMenu', errorTextMenu);
    //},
  },
};

export default dataModule;
