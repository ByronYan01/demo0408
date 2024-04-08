import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "chat-all"
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});
export default router;
