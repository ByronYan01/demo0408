import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/child",
    name: "child",
    component: async () => await import("../views/child/index.vue")
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});
export default router;
