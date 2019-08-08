<template>
  <v-container>
    <v-layout text-center wrap>
    
      <h1>{{url}}</h1>
  


        </v-layout>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    };
  }
};
</script>
