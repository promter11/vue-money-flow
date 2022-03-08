import "ant-design-vue/dist/antd.css";
import "@/styles/main.scss";

import {
  BankOutlined,
  BarChartOutlined,
  BookOutlined,
  CreditCardOutlined,
  DatabaseOutlined,
  DeleteOutlined,
  DollarOutlined,
  DownOutlined,
  EditOutlined,
  EuroOutlined,
  FolderOpenOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  LogoutOutlined,
  MoreOutlined,
  PercentageOutlined,
  PieChartOutlined,
  PlusOutlined,
  PoundOutlined,
  ProfileOutlined,
  SettingOutlined,
  StockOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons-vue";
import Antd from "ant-design-vue";
import { createApp } from "vue";

import App from "@/App.vue";
import constants from "@/plugins/constants";
import router from "@/router";
import store from "@/store";

createApp(App)
  .component("bank-outlined", BankOutlined)
  .component("bar-chart-outlined", BarChartOutlined)
  .component("book-outlined", BookOutlined)
  .component("credit-card-outlined", CreditCardOutlined)
  .component("database-outlined", DatabaseOutlined)
  .component("delete-outlined", DeleteOutlined)
  .component("dollar-outlined", DollarOutlined)
  .component("down-outlined", DownOutlined)
  .component("edit-outlined", EditOutlined)
  .component("euro-outlined", EuroOutlined)
  .component("folder-open-outlined", FolderOpenOutlined)
  .component("gift-outlined", GiftOutlined)
  .component("global-outlined", GlobalOutlined)
  .component("gold-outlined", GoldOutlined)
  .component("logout-outlined", LogoutOutlined)
  .component("more-outlined", MoreOutlined)
  .component("percentage-outlined", PercentageOutlined)
  .component("pie-chart-outlined", PieChartOutlined)
  .component("plus-outlined", PlusOutlined)
  .component("pound-outlined", PoundOutlined)
  .component("profile-outlined", ProfileOutlined)
  .component("setting-outlined", SettingOutlined)
  .component("stock-outlined", StockOutlined)
  .component("user-outlined", UserOutlined)
  .component("wallet-outlined", WalletOutlined)
  .use(constants)
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
