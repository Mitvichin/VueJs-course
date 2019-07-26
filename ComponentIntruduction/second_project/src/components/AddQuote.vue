<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label>Add quote!</label>
        <textarea name="quote" id="txtArea" rows="3" v-model="quote" class="form-control"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 text-center">
        <button class="btn btn-success" @click.prevent="addQuote()">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      if (this.quote == "") {
        alert("Cannot create empty quote!");
      } else {
        this.$emit("quoteAdded", this.quote);
        this.quote = "";
      }
    }
  }
};
</script>
<style>
.btn{
   margin:10px;
}
</style>


