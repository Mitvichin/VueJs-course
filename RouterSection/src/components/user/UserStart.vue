<template>
  <div>
    <p>Please select a User</p>
    <hr />
    <ul cl2ass="list-group">
      <router-link class="list-group-item" style="cursor: pointer" to="/user/1" tag="li">User 1</router-link>
      <router-link class="list-group-item" style="cursor: pointer" to="/user/2" tag="li">User 2</router-link>
      <router-link class="list-group-item" style="cursor: pointer" to="/user/3" tag="li">User 3</router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
