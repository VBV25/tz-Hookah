const textModule = {
    namespaced: true,
    state: {
        headerNavigation: [
            { name: 'Главная', routerLink: '/', id: 'home-page', categoryNavigation: 'router' },
            { name: 'Каталог', routerLink: '/catalog', id: 'catalog', categoryNavigation: 'router' },
            { name: 'Блог', routerLink: '/blog', id: 'blog', categoryNavigation: 'router' },
            { name: 'О нас', routerLink: '/information', id: 'information-company', categoryNavigation: 'router' }
        ],
        productsNavigation: [
            { name: 'Наши товары', id: 'exclusiveProducts', categoryNavigation: 'products' },
            { name: 'Все товары', id: 'all-products', categoryNavigation: 'products' },
            { name: 'Новинки', id: 'newProduct', categoryNavigation: 'products' },
            { name: 'Скидки', id: 'sale', categoryNavigation: 'products' }
        ],
        blogBlock: { title: 'Наш блог', subtitle: 'Мы являемся интернет-магазином кальянов, предлагающим широкий ассортимент современных и по доступной цене кальянов и их комплектующих.' }
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