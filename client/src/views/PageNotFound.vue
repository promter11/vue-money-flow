<template>
  <a-layout>
    <a-layout-content>
      <a-row align="middle" class="min-h-screen p-4">
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
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "PageNotFound",
})
export default class PageNotFound extends Vue {}
</script>
