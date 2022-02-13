<template>
  <a-row class="h-full text-center" align="middle" justify="center">
    <a-col flex="auto">
      <a-typography-title style="font-size: 120px; margin-bottom: 0">
        404
      </a-typography-title>
      <a-typography-paragraph>Страница не найдена</a-typography-paragraph>
      <a-button type="primary" @click="$router.replace('/')">
        На главную
      </a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "PageNotFound",
})
export default class PageNotFound extends Vue {}
</script>
