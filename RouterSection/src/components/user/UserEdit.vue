<template>
  <div>
    <h3>Edit the User</h3>
    <p>{{$route.query.locale}}</p>
    <p>{{$route.query.q}}</p>
    <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm</button>
    <div style="height:700px"></div>
    <div id="data">Some extra Data</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>
