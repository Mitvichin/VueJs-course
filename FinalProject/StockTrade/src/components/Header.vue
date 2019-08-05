<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/portfolio" activeClass="active">
              <a>
                Portfolio
                <span class="sr-only">(current)</span>
              </a>
            </router-link>
            <router-link tag="li" to="/stocks" activeClass="active">
              <a>Stocks</a>
            </router-link>
          </ul>
          <strong class="navbar-text navbar-right">Balance: {{balance | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li @click="endDay()" style="cursor:pointer">
              <a>End Day</a>
            </li>
            <li
              class="dropdown"
              :class="{'open' : isDropdownOpened}"
              @click="isDropdownOpened = !isDropdownOpened"
            >
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Save & Load
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li @click="saveData()" style="cursor:pointer">
                  <a>Save Data</a>
                </li>
                <li style="cursor:pointer" @click="loadData()">
                  <a>Load Data</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpened: false
    };
  },
  computed: {
    ...mapGetters("portfolio", { balance: "balance", portfolio: "stocks" }),
    ...mapGetters("stocks", { stocks: "stocks" })
  },
  methods: {
    ...mapActions({
      rndStocks: "stocks/rndStocks"
    }),
    ...mapActions("myActions", {
      fetchData: "loadData"
    }),
    endDay() {
      this.rndStocks();
    },
    saveData() {
      const data = {
        balance: this.balance,
        portfolio: this.portfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

