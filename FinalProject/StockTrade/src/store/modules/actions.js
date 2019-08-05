import Vue from "vue";

const actions = {
  loadData: async ({ commit }) => {
    const data = await (await Vue.http.get("data.json")).json();
    if (data) {
      const stocks = data.stocks;
      const balance = data.balance;
      const portfolio = data.portfolio;

      commit("stocks/SET_STOCKS", stocks ? stocks : [], {root:true});
      commit("portfolio/SET_STOCKS", portfolio ? portfolio : [],{root:true});
      commit("portfolio/SET_BALANCE", balance,{root:true});
    }
  }
};

export default {
  actions
}