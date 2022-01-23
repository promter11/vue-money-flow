<template>
  <a-layout-footer class="white text-center">
    © Copyright 2022 Money Flow. Все права защищены.
  </a-layout-footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "TheFooter",
})
export default class TheFooter extends Vue {}
</script>
