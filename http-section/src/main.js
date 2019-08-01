import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-project-b4665.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  //if (request.method == "POST") request.method = "PUT";

  next();
});

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
