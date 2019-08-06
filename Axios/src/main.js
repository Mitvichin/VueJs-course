import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://vuejs-axios-test-5d2ed.firebaseio.com/";
axios.defaults.headers.common["Authorization"] = "fasafas";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqId = axios.interceptors.request.use(config => {
  console.log("Request", config);
  return config;
});

const resId = axios.interceptors.response.use(res => {
  console.log("Response", res);
  return res;
});

axios.interceptors.request.eject(reqId);
axios.interceptors.response.eject(resId);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
