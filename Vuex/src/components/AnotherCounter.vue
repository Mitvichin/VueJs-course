<template>
  <div>
    <button class="btn btn-primary" @click="incrementAsync({by: 100, duration: 1500})">Increment</button>
    <button class="btn btn-primary" @click="decrementAsync({by: 50, duration: 2500})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types";
export default {
  methods: {
    ...mapActions({
      incrementAsync: types.COUNTER_INCREMENT_ASYNC,
      decrementAsync: types.COUNTER_DECREMENT_ASYNC
    })
  }
};
</script>