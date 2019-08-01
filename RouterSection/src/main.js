import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import { routes } from "./routes";
import VueRouter from "vue-router";

Vue.use(Router);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    
    if (to.hash) {
      return { selector: to.hash };
    }
  }
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
