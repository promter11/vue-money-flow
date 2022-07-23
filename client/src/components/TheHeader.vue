<template>
  <a-layout-header class="pl-4 pr-4 white">
    <a-row>
      <a-col flex="auto"></a-col>
      <a-col flex="0 1 auto">
        <a-dropdown :trigger="[`click`]">
          <a-typography-link @click.prevent>
            <a-space>
              <a-avatar class="block">
                <template #icon>
                  <user-outlined />
                </template>
              </a-avatar>
              <span>{{ user.firstName }} {{ user.lastName }}</span>
              <down-outlined class="text-xs" />
            </a-space>
          </a-typography-link>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="logout">
                <logout-outlined />
                <span class="ml-4">Выход</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import { IUser } from "@/interfaces";
import store from "@/store";
import { LOGOUT } from "@/store/types/actions";

@Options({
  name: "TheHeader",
})
export default class TheHeader extends Vue {
  @Getter user!: IUser;

  private async logout() {
    await store.dispatch(LOGOUT);
    await this.$router.push({ name: "Login" });
  }
}
</script>
