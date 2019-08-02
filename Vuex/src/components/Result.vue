<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>{{ counterClicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      counterClicks: types.CLICK_COUNTER
    })
  }
};
</script>