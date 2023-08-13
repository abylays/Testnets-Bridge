import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Origin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/bridge-back",
    name: "Destination",

    component: () => import("../views/Destination.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

export default router;
