<template>
  <div>
    <p>{{ hello }}</p>
    <p>
      name:
      <input type="text" v-model="name" />
    </p>
    <p>
      pollInterval:
      <input type="number" v-model="pollInterval" />
    </p>
    <p>
      apollo の pollInterval option に function を指定。
    </p>
    <p>
      polling は行われるが、 variables 変更時にクエリが連続実行されてしまう。
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
