import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/form"
  },
  {
    path: "/form",
    name: "form",
    keepAlive: true,
    component: () => import("@/views/form.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/table.vue"),
  },
  {
    path: "/playground",
    name: "playground",
    component: () => import("@/views/playground.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
