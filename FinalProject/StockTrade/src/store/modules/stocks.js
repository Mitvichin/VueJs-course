import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, payload) {
    state.stocks = payload;
    
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  buyStock: ({ commit }, order) => {
    commit("portfolio/BUY_STOCK", order, { root: true });
  },
  rndStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
