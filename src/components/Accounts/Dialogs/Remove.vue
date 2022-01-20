<template>
  <a-modal
    title="Удалить счёт"
    okText="Удалить"
    cancelText="Отмена"
    :visible="dialog"
    :okButtonProps="{ danger: true }"
    @ok="handleDialog({ remove: false })"
    @cancel="handleDialog({ remove: false })"
  >
    <a-typography-text>
      Вы действительно хотите удалить выбранный счёт?
    </a-typography-text>
  </a-modal>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AccountDialog } from "@/interfaces";

@Options({})
export default class RemoveAccount extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<AccountDialog, boolean>>) {
    return dialogs;
  }

  @Prop({ required: true }) dialog!: boolean;
}
</script>
