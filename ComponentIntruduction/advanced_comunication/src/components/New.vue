<template>
  <div>
    <button @click="++counter">Increment</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  deactivated(){
      console.log("Deactivated!");
  },
  activated(){
      console.log("Activated!")
  }
};
</script>

<style scoped>
</style>