import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routers: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   redirect: "home"
  // },
  {
    path: "/home",
    component: () => import("../layout/index.vue"),
    // redirect: "/home/test",
    children: [
      {
        path: "test",
        name: "test",
        component: () => import("../views/test/index.vue")
      },
      {
        path: "wordPreview",
        name: "wordPreview",
        component: () => import("../views/word/previewDemo.vue")
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});
export default router;
