import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import { Store } from "vuex";

import { RootState } from "@/interfaces";
import { authMiddleware } from "@/router/middlewares";
import store from "@/store";
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
        meta: {
          middlewares: [authMiddleware],
        },
        name: "Accounts",
        path: "/accounts",
      },
      {
        component: Categories,
        meta: {
          middlewares: [authMiddleware],
        },
        name: "Categories",
        path: "/categories",
      },
      {
        component: Operations,
        meta: {
          middlewares: [authMiddleware],
        },
        name: "Operations",
        path: "/operations",
      },
      {
        component: Review,
        meta: {
          middlewares: [authMiddleware],
        },
        name: "Review",
        path: "/review",
      },
      {
        component: Settings,
        meta: {
          middlewares: [authMiddleware],
        },
        name: "Settings",
        path: "/settings",
      },
    ],
    component: Dashboard,
    name: "Dashboard",
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
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middlewares) {
    return next();
  }

  for (const middleware of (
    to.meta as {
      middlewares: (({
        from,
        next,
        to,
        store,
      }: {
        from: RouteLocationNormalized;
        next: NavigationGuardNext;
        store: Store<RootState>;
        to: RouteLocationNormalized;
      }) => void)[];
    }
  ).middlewares) {
    middleware({ from, next, store, to });
  }
});

export default router;
