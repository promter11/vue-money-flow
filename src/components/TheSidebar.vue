<template>
  <a-layout-sider collapsible>
    <h3 class="p-4 text-ellipsis white--text">Money Flow</h3>
    <a-menu mode="inline" theme="dark">
      <a-menu-item v-for="{ to, text, icon } in menu" :key="text">
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
    { to: "/accounts", text: "Счета", icon: CreditCardOutlined },
    { to: "/categories", text: "Категории", icon: PieChartOutlined },
    { to: "/operations", text: "Операции", icon: ProfileOutlined },
  ];
}
</script>
