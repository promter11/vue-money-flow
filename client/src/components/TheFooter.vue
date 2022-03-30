<template>
  <a-layout-footer class="white text-center">
    <a-typography-text>
      © Copyright 2022 Money Flow. Все права защищены.
    </a-typography-text>
  </a-layout-footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "TheFooter",
})
export default class TheFooter extends Vue {}
</script>
