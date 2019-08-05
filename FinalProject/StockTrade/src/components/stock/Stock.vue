<template>
  <div class="col-sm6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price | currency}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buy()"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters({
      balance: "portfolio/balance"
    })
  },
  methods: {
    ...mapActions({ buyStock: "stocks/buyStock" }),
    buy() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: +this.quantity
      };
      
      const orderCost = order.price * order.quantity;

      if (orderCost > this.balance) {
        alert("You don't have enough money to make this purchase!");
      } else {
        this.buyStock(order);
        console.log(this.$store.state);
      }

      this.quantity = 0;
    }
  }
};
</script>

