<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "App",
})
export default class App extends Vue {}
</script>
