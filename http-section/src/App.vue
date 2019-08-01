<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for>Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" v-model="node" class="form-control" />
        <button class="btn btn-primary" @click="fetch">Fetch</button>
        <ul class="list-group">
          <br />
          <li class="list-group-item" v-for="(user,i) in users" :key="i">{{ user.username }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      // this.$http.post("data.json", this.user).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
      //this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    async fetch() {
      //   let data = await (await this.$http.get("data.json")).json();

      //   const resArray = [];
      //   for (let key in data) {
      //     resArray.push(data[key]);
      //   }

      //   this.users = resArray;
      // }

      this.resource.getData({ node: this.node }).then(async data => {
        data = await data.json();
        const resArray = [];
        for (let key in data) {
          resArray.push(data[key]);
        }

        this.users = resArray;
      });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>

