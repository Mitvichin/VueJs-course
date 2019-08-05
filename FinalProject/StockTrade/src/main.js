import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router/routes.js";
import store from "./store/store.js";
import VueResouce from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResouce);
Vue.http.options.root = "https://stocktrader-vuejs-1d238.firebaseio.com/";

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
