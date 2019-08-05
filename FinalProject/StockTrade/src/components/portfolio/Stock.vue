<template>
  <div class="col-sm6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price | currency}} | Quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-info"
            @click="sell()"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({ sellStock: "portfolio/sellStock" }),
    sell() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      if (this.quantity > this.stock.quantity) {
        alert("You can't sell more than you own!");
      } else {
        this.sellStock(order);
      }
      this.quantity = 0;
    }
  }
};
</script>
