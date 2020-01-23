<template>
  <div>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="name" />
    </p>
    <p>
      pollInterval:
      <input type="text" v-model="pollInterval" />
    </p>
    <p>
      result function 内で startPolling を呼ぶ。
    </p>
    <p>
      pollInterval の初期値が 0 以上の値の場合、想定通り動作する。
    </p>
    <p>
      pollInterval の初期値が 0 の場合、 polling が開始されない。
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
        if (this.pollInterval > 0) {
          this.$apollo.queries.hello.startPolling(this.pollInterval);
        }
      }
    }
  },
  data() {
    return {
      name: "Takashi",
      pollInterval: 1000
    };
  }
};
</script>
