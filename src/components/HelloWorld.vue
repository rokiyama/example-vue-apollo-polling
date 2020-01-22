<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="name" />
    </p>
    <p>
      pollInterval:
      <input type="number" v-model="pollInterval" />
    </p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  apollo: {
    hello: {
      query: gql`
        query($name: String) {
          hello(name: $name)
        }
      `,
      variables() {
        return {
          name: this.name
        };
      },
      pollInterval() {
        return this.pollInterval > 0 ? this.pollInterval : null;
      }
    }
  },
  data() {
    return {
      name: "Takashi",
      pollInterval: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
