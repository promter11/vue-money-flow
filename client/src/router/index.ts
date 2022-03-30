import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Accounts from "@/views/Accounts.vue";
import Categories from "@/views/Categories.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Operations from "@/views/Operations.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Review from "@/views/Review.vue";
import Settings from "@/views/Settings.vue";
import Signup from "@/views/Signup.vue";

const routes: RouteRecordRaw[] = [
  {
    children: [
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
        component: Review,
        name: "Review",
        path: "/review",
      },
      {
        component: Settings,
        name: "Settings",
        path: "/settings",
      },
    ],
    component: Dashboard,
    path: "",
    redirect: "/accounts",
  },
  {
    component: Login,
    name: "Login",
    path: "/login",
  },
  {
    component: Signup,
    name: "Signup",
    path: "/signup",
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
