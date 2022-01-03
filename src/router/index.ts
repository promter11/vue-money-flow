import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import PageNotFound from "@/components/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/accounts",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
