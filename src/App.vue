<template>
  <a-layout class="h-screen">
    <the-sidebar />
    <a-layout>
      <the-header />
      <a-layout-content class="m-4 p-4 white">
        <router-view />
      </a-layout-content>
      <the-footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";

@Options({
  components: {
    TheFooter,
    TheHeader,
    TheSidebar,
  },
})
export default class App extends Vue {}
</script>
