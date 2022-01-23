<template>
  <a-layout-header class="pl-4 pr-4 white">
    <a-row type="flex">
      <a-col flex="auto">
        <a-button @click="toggleSidebar">
          <template #icon>
            <menu-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col flex="0 1 auto">
        <a-space size="middle">
          <a-tooltip>
            <template #title>Тема</template>
            <a-dropdown :trigger="['click']">
              <a-button shape="circle">
                <template #icon>
                  <bg-colors-outlined />
                </template>
              </a-button>
            </a-dropdown>
          </a-tooltip>
          <a-tooltip>
            <template #title>Язык</template>
            <a-dropdown :trigger="['click']">
              <a-button shape="circle">
                <template #icon>
                  <global-outlined />
                </template>
              </a-button>
              <template #overlay>
                <a-menu>
                  <a-menu-item>Русский</a-menu-item>
                  <a-menu-item>English</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-tooltip>
          <a-dropdown :trigger="['click']">
            <a-button shape="circle">
              <template #icon>
                <user-outlined />
              </template>
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <setting-outlined />
                  <span>Настройки</span>
                </a-menu-item>
                <a-menu-item>
                  <logout-outlined />
                  <span>Выход</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-space>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
import {
  BgColorsOutlined,
  GlobalOutlined,
  LogoutOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { Emit, Options, Vue } from "vue-property-decorator";

@Options({
  components: {
    BgColorsOutlined,
    GlobalOutlined,
    LogoutOutlined,
    MenuOutlined,
    SettingOutlined,
    UserOutlined,
  },
  name: "TheHeader",
})
export default class TheHeader extends Vue {
  @Emit()
  private toggleSidebar() {
    return true;
  }
}
</script>
