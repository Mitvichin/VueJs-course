import Vue from "vue";
import Vuex from "vuex";
import stocks from "./modules/stocks.js";
import portfolio from "./modules/portfolio.js";
import sharedActions from "./modules/actions.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks: {
      namespaced: true,
      ...stocks
    },
    portfolio: {
      namespaced: true,
      ...portfolio
    },
    myActions: {
      namespaced: true,
      ...sharedActions
    }
  }
});
