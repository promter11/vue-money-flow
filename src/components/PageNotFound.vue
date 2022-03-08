<template>
  <a-row class="h-full text-center" align="middle" justify="center">
    <a-col flex="auto">
      <a-result title="404" status="404" sub-title="Страница не найдена">
        <template #extra>
          <a-button type="primary" @click="$router.replace(`/`)">
            На главную
          </a-button>
        </template>
      </a-result>
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
