<template>
  <a-modal
    title="Новый счёт"
    okText="Добавить"
    cancelText="Отмена"
    :visible="dialog"
    @ok="handleDialog({ upsert: false })"
    @cancel="handleDialog({ upsert: false })"
  >
    <a-form
      name="create-form"
      :model="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :validate-messages="validations"
    >
      <a-form-item label="Название" :rules="[{ required: true }]">
        <a-input v-model:value="form.title" />
      </a-form-item>
      <a-form-item label="Описание">
        <a-textarea v-model:value="form.description" />
      </a-form-item>
      <a-form-item label="Тип" :rules="[{ required: true }]">
        <a-select v-model:value="form.type" :options="types"></a-select>
      </a-form-item>
      <a-form-item label="Валюта" :rules="[{ required: true }]">
        <a-select
          v-model:value="form.currency"
          :options="currencies"
        ></a-select>
      </a-form-item>
      <a-form-item label="Баланс" :rules="[{ required: true }]">
        <a-input-number v-model:value="form.balance" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AccountDialog, IAccountType, ICurrency } from "@/interfaces";

@Options({})
export default class UpsertAccount extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<AccountDialog, boolean>>) {
    return dialogs;
  }

  @Prop({ required: true }) types!: IAccountType[];
  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) currencies!: ICurrency[];

  form = {
    balance: 0,
    currency: 4,
    description: null,
    title: null,
    type: 1,
  };
  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
