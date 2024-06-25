import { createStore } from 'vuex'

import productsStore from "@/store/modules/productsStore.js";
import textStore from "@/store/modules/textStore.js";
import dataStore from "@/store/modules/dataStore.js";

const store = createStore({
  modules: {
    productsStore, textStore, dataStore
  },
});

export default store;
