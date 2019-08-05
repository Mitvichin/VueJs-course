const state = {
  balance: 10000,
  stocks: []
};

const getters = {
  balance: state => {
    return state.balance;
  },
  stocks: (state, getters, rootState, rootGetters) => {
    return state.stocks.map(stock => {
      const record = rootGetters["stocks/stocks"].find(
        element => (element.id = stock.id)
      );
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  }
};

const mutations = {
  BUY_STOCK(state, { id, quantity, price }) {
    const record = state.stocks.find(stock => stock.id == id);

    if (record) {
      console.log(typeof record.quantity);
      console.log(typeof quantity);
      record.quantity = Number.parseInt(record.quantity) + Number.parseInt(quantity);
      console.log(record.quantity);
    } else {
      state.stocks.push({ id, quantity });
    }

    state.balance -= quantity * price;
  },
  SELL_STOCK(state, { id, quantity, price }) {
    const record = state.stocks.find(stock => stock.id == id);

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);

      state.balance += quantity * price;
    }
  },
  SET_STOCKS(state, payload) {
    state.stocks = payload;
  },
  SET_BALANCE(state, payload) {
    state.balance = payload;
  }
};

const actions = {
  sellStock: ({ commit }, payload) => {
    commit("SELL_STOCK", payload);
  },
  setStocks: ({ commit }, payload) => {
    commit("SET_STOCKS", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
