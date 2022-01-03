import "ant-design-vue/dist/antd.css";
import "@/styles/main.scss";

import Antd from "ant-design-vue";
import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

createApp(App).use(store).use(router).use(Antd).mount("#app");
