import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    component: () => import("../layout/index.vue"),
    redirect: "/home/test",
    // redirect: "/supremeGPT/chat",
    children: [
      {
        path: "test",
        name: "test",
        component: () => import("../views/test/index.vue")
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});
export default router;
