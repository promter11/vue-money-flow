<template>
  <a-layout-sider collapsed-width="0" :collapsed="collapsed">
    <h3 class="p-4 text-ellipsis white--text">Money Flow</h3>
    <a-menu v-model:selected-keys="selected" theme="dark">
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
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({
  components: { CreditCardOutlined, PieChartOutlined, ProfileOutlined },
  name: "TheSidebar",
})
export default class TheSidebar extends Vue {
  @Prop({ required: true }) collapsed!: boolean;

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
