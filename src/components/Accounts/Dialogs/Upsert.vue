<template>
  <a-modal
    title="Новый счёт"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="
      handleDialog(
        { upsert: false },
        {
          balance: 0,
          currency_id: 4,
          description: null,
          title: null,
          type: 1,
        }
      )
    "
    @cancel="
      handleDialog(
        { upsert: false },
        {
          balance: 0,
          currency_id: 4,
          description: null,
          title: null,
          type: 1,
        }
      )
    "
  >
    <a-form
      name="upsert-form"
      :model="account"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :validate-messages="validations"
    >
      <a-form-item label="Название" :rules="[{ required: true }]">
        <a-input v-model:value="account.title" />
      </a-form-item>
      <a-form-item label="Описание">
        <a-textarea v-model:value="account.description" />
      </a-form-item>
      <a-form-item label="Тип" :rules="[{ required: true }]">
        <a-select v-model:value="account.type" :options="types"></a-select>
      </a-form-item>
      <a-form-item label="Валюта" :rules="[{ required: true }]">
        <a-select
          v-model:value="account.currency_id"
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
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import {
  Dialog,
  IAccount,
  IAccountType,
  ICurrency,
  Nullable,
} from "@/interfaces";

@Options({
  name: "UpsertAccount",
})
export default class UpsertAccount extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    account: Nullable<IAccount>
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) types!: IAccountType[];
  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;
  @Prop({ required: true }) currencies!: ICurrency[];

  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
