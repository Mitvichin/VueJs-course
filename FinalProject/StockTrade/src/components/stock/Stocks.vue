<template>
  <div>
    <p>Stocks</p>
    <app-stock v-for="(stock,i) in stocks" :key="i" :stock="stock"></app-stock>
  </div>
</template>
<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stocks/stocks"
    })
  }
};
</script>