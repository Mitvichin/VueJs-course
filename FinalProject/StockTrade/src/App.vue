<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("stocks/initStocks");
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .25s ease;
}
.fade-leave-active {
  transition: opacity .25s ease;
  opacity: 0;
}
</style>
