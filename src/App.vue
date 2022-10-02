<template>
  <v-app
    ><v-main><v-alert
  border="left"
  color="red darken-4"
  dense
  type="success"
>Hello</v-alert><v-btn
  color="red lighten-2"
  elevation="2"
  outlined
  plain
>Click me</v-btn><MainCard /></v-main
  ></v-app>

  <!-----<ProjectsCard/>--->
</template>

<script>
import MainCard from "./components/MainCard.vue";
import Vue from "vue";
// import ProjectsCard from './components/ProjectsCard.vue'

export default Vue.extend({
  name: "App",
  components: {
    MainCard
    // ProjectsCard,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #316cd4;
}
</style>
