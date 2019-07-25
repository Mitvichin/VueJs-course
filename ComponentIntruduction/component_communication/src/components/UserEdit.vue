<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <button @click="changeAge()">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  methods: {
    changeAge: function() {
      //this.$emit("ageChanged", 30);
      eventBus.$emit('ageChanged',30);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
