<template>
  <a-modal
    title="Удалить счёт"
    ok-text="Удалить"
    cancel-text="Отмена"
    :visible="dialog"
    :ok-button-props="{ danger: true }"
    @ok="handleDialog({ remove: false })"
    @cancel="handleDialog({ remove: false })"
  >
    <a-typography-paragraph>
      Вы действительно хотите удалить счёт
      <a-typography-text strong>Название</a-typography-text>
      <a-typography-text>?</a-typography-text>
    </a-typography-paragraph>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog } from "@/interfaces";

@Options({
  name: "RemoveAccount",
})
export default class RemoveAccount extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<Dialog, boolean>>) {
    return dialogs;
  }

  @Prop({ required: true }) dialog!: boolean;
}
</script>
