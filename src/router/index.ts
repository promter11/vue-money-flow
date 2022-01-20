import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import PageNotFound from "@/components/PageNotFound.vue";
import Accounts from "@/views/Accounts.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/accounts",
  },
  {
    component: Accounts,
    name: "Accounts",
    path: "/accounts",
  },
  {
    component: PageNotFound,
    name: "Not Found",
    path: "/:pathMatch(.*)*",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
