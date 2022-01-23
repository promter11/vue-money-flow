<template>
  <a-modal
    title="Новый счёт"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="handleDialog({ upsert: false })"
    @cancel="handleDialog({ upsert: false })"
  >
    <a-form
      name="upsert-form"
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
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, IAccountType, ICurrency } from "@/interfaces";

@Options({
  name: "UpsertAccount",
})
export default class UpsertAccount extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<Dialog, boolean>>) {
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
