const textModule = {
    namespaced: true,
    state: {
        cityList: ['Москва', 'Киров', 'Пермь', 'Казань', 'Сыктывкар', 'Нижний', 'Новгород', 'Кострома'],
        headerNavigation: [
            { name: 'Главная', routerLink: '/',id:'home-page' },
            { name: 'Каталог', routerLink: '/catalog',id:'catalog' },
            { name: 'Блог', routerLink: '/blog',id:'blog' },
            { name: 'О нас', routerLink: '/information',id:'information-company' }
        ]
    },

    getters: {
        //   socialButtonsData: (state) => state.socialButtonsData,
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

export default textModule;