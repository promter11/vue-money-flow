import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "@/components/PageNotFound.vue";
import Accounts from "@/views/Accounts.vue";
import Categories from "@/views/Categories.vue";
const routes = [
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
//# sourceMappingURL=index.js.map