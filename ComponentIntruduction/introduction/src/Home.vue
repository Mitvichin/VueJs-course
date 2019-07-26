<template>
  <div>
    <app-server-status v-for="n in 5" :key="n"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>

