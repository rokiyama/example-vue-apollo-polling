<template>
  <div>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="nameInput" />
    </p>
    <p>
      pollInterval:
      <input type="text" v-model="pollIntervalInput" />
    </p>
    <p>
      pollInterval の変更時、 0 以上の場合は startPolling を、そうでない場合は
      stopPolling を呼ぶ。
    </p>
    <p>
      variables の変更時も同様の呼び出しを行う。
    </p>
    <p>
      variables が変更された際に polling が停止してしまう。
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
    nameInput: {
      get() {
        return this.name;
      },
      set(newValue) {
        this.name = newValue;
        if (this.pollInterval > 0) {
          this.$apollo.queries.hello.startPolling(this.pollInterval);
        } else {
          this.$apollo.queries.hello.stopPolling();
        }
      }
    },
    pollIntervalInput: {
      get() {
        return this.pollInterval;
      },
      set(newValue) {
        if (newValue > 0) {
          this.$apollo.queries.hello.startPolling(newValue);
        } else {
          this.$apollo.queries.hello.stopPolling();
        }
        this.pollInterval = newValue;
      }
    }
  }
};
</script>
