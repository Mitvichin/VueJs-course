<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name is {{ switchName() }}</p>
    <p>User age is {{ myAge }}</p>
    <button @click="resetName(); callback()">Reset name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data: function() {
    return {
      myAge: Number
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    age: Number,
    callback: Function
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.$emit("nameReseted", "ilia");
    }
  },
  created() {
    this.myAge = this.age;
    eventBus.$on("ageChanged", event => {
      this.myAge = event;
      console.log("from event bus" + event + " " + this.myAge);
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
