<template>
  <a-layout class="min-h-screen">
    <the-sidebar :collapsed="collapsed" @toggle-sidebar="toggleSidebar" />
    <a-layout>
      <the-header @toggle-sidebar="toggleSidebar" />
      <a-layout-content class="m-4 p-4 border-lg white">
        <router-view />
      </a-layout-content>
      <the-footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Action } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import { ICurrency, IUser } from "@/interfaces";
import { FETCH_CURRENCIES, FETCH_USER } from "@/store/types/actions";

@Options({
  components: {
    TheFooter,
    TheHeader,
    TheSidebar,
  },
  created() {
    this.fetchCurrencies();
    this.fetchUser();
  },
})
export default class App extends Vue {
  @Action(FETCH_CURRENCIES) fetchCurrencies!: () => Promise<ICurrency[]>;
  @Action(FETCH_USER) fetchUser!: () => Promise<IUser>;

  collapsed = false;

  private toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
</script>
