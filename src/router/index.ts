import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import PageNotFound from "@/components/PageNotFound.vue";
import Accounts from "@/views/Accounts.vue";
import Categories from "@/views/Categories.vue";
import Operations from "@/views/Operations.vue";
import Settings from "@/views/Settings.vue";

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
    component: Categories,
    name: "Categories",
    path: "/categories",
  },
  {
    component: Operations,
    name: "Operations",
    path: "/operations",
  },
  {
    component: Settings,
    name: "Settings",
    path: "/settings",
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
