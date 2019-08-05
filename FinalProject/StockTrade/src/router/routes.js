import Home from "../components/Home.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import PortfolioStock from "../components/portfolio/Stock.vue";
import Stock from "../components/stock/Stock.vue";
import Stocks from "../components/stock/Stocks.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio},
  { path: "/stocks", component: Stocks }
];
