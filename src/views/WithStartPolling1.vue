<template>
  <div>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="name" />
    </p>
    <p>
      pollInterval:
      {{ pollInterval }}
    </p>
    <p>
      result function 内で startPolling を呼ぶ。 pollInterval は固定。
    </p>
    <p>
      想定通り動作する。
    </p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
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
      result(res) {
        this.$apollo.queries.hello.startPolling(this.pollInterval);
      }
    }
  },
  data() {
    return {
      name: "Takashi"
    };
  },
  computed: {
    pollInterval() {
      return 1000;
    }
  }
};
</script>
