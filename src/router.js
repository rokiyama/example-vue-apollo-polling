import Vue from "vue";
import VueRouter from "vue-router";

import WithPollInterval from "@/views/WithPollInterval.vue";
import WithStartPolling00 from "@/views/WithStartPolling00.vue";
import WithStartPolling01 from "@/views/WithStartPolling01.vue";
import WithStartPolling1 from "@/views/WithStartPolling1.vue";
import WithStartPolling2 from "@/views/WithStartPolling2.vue";
import WithStartPolling3 from "@/views/WithStartPolling3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "with-poll-interval",
    component: WithPollInterval
  },
  {
    path: "/with-start-polling00",
    name: "with-start-polling00",
    component: WithStartPolling00
  },
  {
    path: "/with-start-polling01",
    name: "with-start-polling01",
    component: WithStartPolling01
  },
  {
    path: "/with-start-polling1",
    name: "with-start-polling1",
    component: WithStartPolling1
  },
  {
    path: "/with-start-polling2",
    name: "with-start-polling2",
    component: WithStartPolling2
  },
  {
    path: "/with-start-polling3",
    name: "with-start-polling3",
    component: WithStartPolling3
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
