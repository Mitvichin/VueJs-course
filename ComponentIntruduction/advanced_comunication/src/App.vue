<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12"></div>
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <hr />
      <keep-alive>
      <component :is="selectedComponent"></component>
      </keep-alive>
      <!-- <app-quote>
        <h1 slot="title">A Quote</h1>
        <p slot="quote">A wonderful quote!</p>
      </app-quote>-->
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data: function() {
    return {
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
h1 {
  color: red;
}
</style>
