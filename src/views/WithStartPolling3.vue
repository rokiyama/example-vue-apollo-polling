<template>
  <div>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="name" />
    </p>
    <p>
      pollInterval:
      <input type="text" v-model="pollIntervalInput" />
    </p>
    <p>
      result function 内で、 pollInterval > 0 の場合は startPolling を、
      そうでない場合は stopPolling を呼ぶ。
    </p>
    <p>
      pollInterval が変更された際、変更前の pollInterval が 0 だった場合は
      startPolling を呼ぶ。
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
        if (this.pollInterval === 0 && newValue > 0) {
          this.$apollo.queries.hello.startPolling(newValue);
        }
        this.pollInterval = newValue;
      }
    }
  }
};
</script>
