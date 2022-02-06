<template>
  <a-layout-header class="pl-4 pr-4 white">
    <a-row type="flex">
      <a-col flex="auto"></a-col>
      <a-col flex="0 1 auto">
        <a-space size="middle">
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
          <a-tooltip>
            <template #title>Пользователь</template>
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
                    <span class="ml-4">Настройки</span>
                  </a-menu-item>
                  <a-menu-item>
                    <logout-outlined />
                    <span class="ml-4">Выход</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-tooltip>
        </a-space>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
import {
  GlobalOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { Options, Vue } from "vue-property-decorator";

@Options({
  components: {
    GlobalOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
  },
  name: "TheHeader",
})
export default class TheHeader extends Vue {}
</script>
