<template>
  <a-modal
    title="Новый счёт"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="handleOk"
    @cancel="handleDialog({ upsert: false }, initialAccount)"
  >
    <a-form
      name="upsert-form"
      :model="account"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :validate-messages="validations"
    >
      <a-form-item label="Название" :rules="[{ required: true }]">
        <a-input v-model:value="account.name" />
      </a-form-item>
      <a-form-item label="Описание">
        <a-textarea v-model:value="account.description" />
      </a-form-item>
      <a-form-item label="Иконка">
        <a-space>
          <a-avatar :style="{ backgroundColor: account.icon.color }">
            <template #icon>
              <component :is="account.icon.component" />
            </template>
          </a-avatar>
          <a-button @click="handleDialog({ icon: true }, account)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="Тип" :rules="[{ required: true }]">
        <a-select
          v-model:value="account.type"
          :options="accountTypes"
        ></a-select>
      </a-form-item>
      <a-form-item label="Валюта" :rules="[{ required: true }]">
        <a-select
          v-model:value="account.currency"
          :options="currencies"
        ></a-select>
      </a-form-item>
      <a-form-item label="Баланс" :rules="[{ required: true }]">
        <a-input-number v-model:value="account.balance" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { AccountDialog, IAccount, IAccountType, ICurrency } from "@/interfaces";

@Options({
  name: "AccountDialogUpsert",
})
export default class AccountDialogUpsert extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Emit()
  private upsertAccount() {
    return;
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;
  @Prop({ required: true }) currencies!: ICurrency[];
  @Prop({ required: true }) initialAccount!: IAccount;

  @Getter accountTypes!: IAccountType[];

  validations = {
    required: "${label} является обязательным полем!",
  };

  private handleOk() {
    this.upsertAccount();
    this.handleDialog({ upsert: false }, this.initialAccount);
  }
}
</script>
