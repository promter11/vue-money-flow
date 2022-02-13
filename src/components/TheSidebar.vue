<template>
  <a-layout-sider
    width="250"
    breakpoint="md"
    collapsed-width="0"
    :collapsed="collapsed"
    :zero-width-trigger-style="{
      top: '20px',
      right: '-35px',
      width: 'auto',
      height: 'auto',
      fontSize: '20px',
      lineHeight: 1,
      background: 'transparent',
      color: '#000000',
    }"
    @collapse="toggleSidebar"
  >
    <p
      class="mb-0 p-4 font-family--philosopher text-lg text-uppercase text-ellipsis tracking-wide white--text"
    >
      Money flow
    </p>
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
  SettingOutlined,
} from "@ant-design/icons-vue";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

@Options({
  components: {
    CreditCardOutlined,
    PieChartOutlined,
    ProfileOutlined,
    SettingOutlined,
  },
  name: "TheSidebar",
})
export default class TheSidebar extends Vue {
  @Emit()
  private toggleSidebar() {
    return;
  }

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
    {
      icon: SettingOutlined,
      id: "settings",
      text: "Настройки",
      to: "/settings",
    },
  ];
  // useRoute doesn't work correctly
  selected = [window.location.pathname.slice(1) || "accounts"];
}
</script>
