<template>
  <div class="container">
    <app-header :maxQuotes="maxQuotes" :quotesCount="quotes.length"></app-header>
    <app-add-quote @quoteAdded="addQuote($event)"></app-add-quote>
    <app-qutes-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-qutes-grid>
    <div class="row">
      <div class="col-sm-12">
        <div class="alert alert-info text-center">Click quote to delete it !</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesGrid from "./components/QuotesGrid.vue";
import AddQuote from "./components/AddQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ["Some quote to see!"],
      maxQuotes: 10
    };
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length == this.maxQuotes) {
        alert(
          "Cannot create more quotes! If you want to add more please delete some by clicking on them!"
        );
      } else {
        this.quotes.push(quote);
        this.quote = "";
      }
    },
    deleteQuote(index) {
      this.quotes = this.quotes.splice(index,1);
     
    }
  },
  components: {
    appQutesGrid: QuotesGrid,
    appAddQuote: AddQuote,
    appHeader: Header
  }
};
</script>

<style>
.container{
    padding:50px;
}
</style>
