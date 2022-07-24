<template>
  <a-modal
    title="Новый счёт"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="handleOk"
    @cancel="handleDialogs({ upsert: false }, initialAccount)"
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
          <a-button @click="handleDialogs({ icon: true }, account)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="Тип" :rules="[{ required: true }]">
        <a-select
          v-model:value="account.type"
          :options="accountTypes"
          @focus.once="fetchAccountTypes"
        ></a-select>
      </a-form-item>
      <a-form-item label="Валюта" :rules="[{ required: true }]">
        <a-select
          v-model:value="account.balance.currency"
          :options="currencies"
          @focus.once="fetchCurrencies"
        ></a-select>
      </a-form-item>
      <a-form-item label="Баланс" :rules="[{ required: true }]">
        <a-input-number v-model:value="account.balance.value" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { AccountDialog, IAccount, IAccountType, ICurrency } from "@/interfaces";

@Options({
  name: "AccountDialogUpsert",
})
export default class AccountDialogUpsert extends Vue {
  @Emit()
  private handleDialogs(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Emit()
  private upsertAccount() {
    return;
  }

  @Emit()
  private fetchCurrencies() {
    return;
  }

  @Emit()
  private fetchAccountTypes() {
    return;
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;
  @Prop({ required: true }) currencies!: ICurrency[];
  @Prop({ required: true }) accountTypes!: IAccountType[];
  @Prop({ required: true }) initialAccount!: IAccount;

  validations = {
    required: "${label} является обязательным полем!",
  };

  private handleOk() {
    this.upsertAccount();
    this.handleDialogs({ upsert: false }, this.initialAccount);
  }
}
</script>
