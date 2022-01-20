<template>
  <a-layout-sider collapsible>
    <h3 class="p-4 text-ellipsis white--text">Money Flow</h3>
    <a-menu v-model:selectedKeys="selected" mode="inline" theme="dark">
      <a-menu-item v-for="{ id, to, text, icon } in menu" :key="id">
        <router-link :to="to">
          <component :is="icon" />
          <span>{{ text }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  CreditCardOutlined,
  PieChartOutlined,
  ProfileOutlined,
} from "@ant-design/icons-vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { CreditCardOutlined, PieChartOutlined, ProfileOutlined },
})
export default class TheSidebar extends Vue {
  menu = [
    {
      icon: CreditCardOutlined,
      id: "accounts",
      text: "Счета",
      to: "/accounts",
    },
    {
      icon: PieChartOutlined,
      id: "categories",
      text: "Категории",
      to: "/categories",
    },
    {
      icon: ProfileOutlined,
      id: "operations",
      text: "Операции",
      to: "/operations",
    },
  ];
  selected = ["accounts"];
}
</script>
