<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | toLowercase}}</p>
        <hr />
        <button @click="fruits.push('berries')">Add</button>
        <input type="text" v-model="filterValue" />
        <ul>
          <li v-for="(fruit,i) in filteredFruits" :key="i">{{fruit}}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { FruitMixin } from './FruitMixin';

export default {
  data() {
    return {
      text: "Some test !",
    
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins:[FruitMixin]
};
</script>

<style>
</style>
