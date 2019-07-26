<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName()">Change name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="name" :callback="logger" :age="age" @nameReseted="nameReseted($event)" ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit @ageChanged="changeAge($event)"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Iliq",
      age: 27
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    nameReseted(event) {
      this.name = event;
    },
    changeAge(event) {
      this.age = event;
    },
    logger() {
      console.log("ko stana e we manqk!");
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
