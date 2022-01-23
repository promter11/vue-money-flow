<template>
  <a-modal
    title="Новая категория"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="
      handleDialog(
        { upsert: false },
        {
          balance: null,
          id: null,
          name: null,
          type: null,
        }
      )
    "
    @cancel="
      handleDialog(
        { upsert: false },
        {
          balance: null,
          id: null,
          name: null,
          type: null,
        }
      )
    "
  >
    <a-form
      name="upsert-form"
      :model="category"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :validate-messages="validations"
    >
      <a-form-item label="Название" :rules="[{ required: true }]">
        <a-input v-model:value="category.name" />
      </a-form-item>
      <a-form-item label="Баланс" :rules="[{ required: true }]">
        <a-input-number v-model:value="category.balance" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, ICategory, Nullable } from "@/interfaces";

@Options({
  name: "UpsertCategory",
})
export default class UpsertCategory extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    category: Nullable<ICategory>
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;

  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
