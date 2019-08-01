<template>
  <div>
    <input type="text" v-model="filterValue" />
    <ul>
      <li v-for="(fruit,i) in filteredFruits" :key="i">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { FruitMixin} from './FruitMixin';

export default {
mixins:[FruitMixin]
};
</script>

<style>
</style>
