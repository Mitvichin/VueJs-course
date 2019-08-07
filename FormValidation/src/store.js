import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.localId;

      globalAxios.defaults.params = {
        auth: state.idToken
      };
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;

      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("expDate");
    }
  },
  actions: {
    setLogout({ commit }, payload) {
      setTimeout(() => {
        console.log("timer!!");
        commit("clearAuthData");
      }, payload);
    },
    logout({ commit }) {
      commit("clearAuthData");
      router.replace("/signin");
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(
          "accounts:signUp?key=AIzaSyBiA3ZqVoy1Q6Kn-o04KyN60B7Hb6ayc0o",
          authData
        )
        .then(res => {
          commit("authUser", {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
          });
          const expDate = new Date(
            new Date().getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expDate", expDate);
          dispatch("saveUser", formData);
        })
        .catch(error => console.log(error));
    },
    signin({ commit, dispatch }, authData) {
      axios
        .post(
          "accounts:signInWithPassword?key=AIzaSyBiA3ZqVoy1Q6Kn-o04KyN60B7Hb6ayc0o",
          authData
        )
        .then(res => {
          commit("authUser", res.data);
          const expDate = new Date(
            new Date().getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expDate", expDate);
          dispatch("setLogout", res.data.expiresIn * 1000);
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({ commit, dispatch }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const expDate = new Date(localStorage.getItem("expDate"));
      if (new Date() >= expDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", { idToken: token, userId });
      dispatch("setLogout", expDate.getTime());
    },
    saveUser({ commit }, payload) {
      globalAxios
        .post("users.json", payload)
        .then(res => console.log("Save user", res));
    },
    fetchUser({ commit }) {
      globalAxios
        .get("users.json")
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          const user = users[0];
          commit("storeUser", user);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return !!state.idToken;
    }
  }
});
