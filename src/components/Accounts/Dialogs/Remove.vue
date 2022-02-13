<template>
  <a-modal
    title="Удалить счёт"
    ok-text="Удалить"
    cancel-text="Отмена"
    :visible="dialog"
    :ok-button-props="{ danger: true }"
    @ok="handleDialog({ remove: false }, initialAccount)"
    @cancel="handleDialog({ remove: false }, initialAccount)"
  >
    <a-typography-paragraph>
      Вы действительно хотите удалить счёт
      <a-typography-text strong>{{ account.title }}</a-typography-text>
      <a-typography-text>?</a-typography-text>
    </a-typography-paragraph>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, IAccount } from "@/interfaces";

@Options({
  name: "RemoveAccount",
})
export default class RemoveAccount extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;
  @Prop({ required: true }) initialAccount!: IAccount;
}
</script>
