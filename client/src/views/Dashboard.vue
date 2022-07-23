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
import { Options, Vue } from "vue-property-decorator";

import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";

@Options({
  components: {
    TheFooter,
    TheHeader,
    TheSidebar,
  },
  name: "Dashboard",
})
export default class Dashboard extends Vue {
  collapsed = false;

  private toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
</script>
