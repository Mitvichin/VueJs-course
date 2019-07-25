import Vue from "vue";
import App from "./App.vue";
import Servers from './components/server/Servers.vue'
import Server from "./components/server/Server.vue";
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

Vue.component("app-header", Header);
Vue.component("app-dashboard", Servers);
Vue.component("app-footer", Footer);
Vue.component("app-server", Server);

new Vue({
  el: "#app",
  render: h => h(App)
});
