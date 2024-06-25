import axios from 'axios';

const menuModule = {
  namespaced: true,
  state: {
    menuData: '',

    errorTextMenu: '',
    messageTextMenu: '',
  },

  getters: {
    menuData: (state) => state.menuData,

    errorTextMenu: (state) => state.errorTextMenu,
    messageTextMenu: (state) => state.messageTextMenu,
  },

  mutations: {
    changeMenuData(state, newMenuData) {
      state.menuData = newMenuData;
    },

    changeErrorTextMenu(state, newErrorTextMenu) {
      state.errorTextMenu = newErrorTextMenu;
    },
    changeMessageTextMenu(state, newMessageTextMenu) {
      state.messageTextMenu = newMessageTextMenu;
    },
  },

  actions: {
    changeErrorTextMenu({ commit }, errorTextMenu) {
      commit('changeErrorTextMenu', errorTextMenu);
    },
    changeMessageTextMenu({ commit }, messageTextMenu) {
      commit('changeMessageTextMenu', messageTextMenu);
    },

    //----------AXIOS--------------------
    async getMenuData({ commit }) {
      await axios
        .get('/api/menu')
        .then((response) => {
          commit('changeMenuData', response.data);
        })
        .catch((error) => {
          const errorTextMenu = error;
          commit('changeErrorTextMenu', errorTextMenu);
        });
    },
  },
};

export default menuModule;
