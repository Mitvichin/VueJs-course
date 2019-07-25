<template>
  <div>
    Server status is {{status}}!
    <hr />
    <button @click="changeStatus()">Change status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

