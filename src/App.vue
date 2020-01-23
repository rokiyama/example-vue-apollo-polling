<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="r in routes" :key="r.path" :to="r.path">{{
        r.name
      }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  margin: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bolder;
}
</style>
