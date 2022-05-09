<template>
  <a-modal
    title="Удалить счёт"
    ok-text="Удалить"
    cancel-text="Отмена"
    :visible="dialog"
    :ok-button-props="{ danger: true }"
    @ok="handleOk"
    @cancel="handleDialog({ delete: false }, initialAccount)"
  >
    <a-typography-paragraph>
      Вы действительно хотите удалить счёт
      <a-typography-text strong>{{ account.name }}</a-typography-text>
      <a-typography-text>?</a-typography-text>
    </a-typography-paragraph>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { AccountDialog, IAccount } from "@/interfaces";

@Options({
  name: "AccountDialogDelete",
})
export default class AccountDialogDelete extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Emit()
  private deleteAccount() {
    return;
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;
  @Prop({ required: true }) initialAccount!: IAccount;

  private handleOk() {
    this.deleteAccount();
    this.handleDialog({ delete: false }, this.initialAccount);
  }
}
</script>
