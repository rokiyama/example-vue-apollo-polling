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
      <input type="number" v-model="pollIntervalInput" />
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
        query hello($name: String) {
          hello(name: $name)
        }
      `,
      variables() {
        return {
          name: this.name
        };
      },
      result(res) {
        if (this.pollInterval > 0) {
          this.$apollo.queries.hello.startPolling(this.pollInterval);
        } else {
          this.$apollo.queries.hello.stopPolling();
        }
      }
    }
  },
  data() {
    return {
      name: "Takashi",
      pollInterval: 0
    };
  },
  computed: {
    pollIntervalInput: {
      get() {
        return this.pollInterval;
      },
      set(newValue) {
        if (newValue > 0) {
          this.$apollo.queries.hello.startPolling(newValue);
        }
        this.pollInterval = newValue;
      }
    }
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
