import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routers: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   redirect: "/main"
  // },
  {
    path: "/child",
    name: "child",
    component: async () => await import("../views/child/index.vue")
  },
  {
    path: "/childWord",
    name: "childWord",
    component: async () => await import("../views/childWord/index.vue")
  },
  {
    path: "/other",
    name: "other",
    component: async () => await import("../views/other/index.vue")
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});
export default router;
