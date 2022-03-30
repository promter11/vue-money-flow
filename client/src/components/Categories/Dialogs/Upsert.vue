<template>
  <a-modal
    title="Новая категория"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="handleDialog({ upsert: false }, initialCategory)"
    @cancel="handleDialog({ upsert: false }, initialCategory)"
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
      <a-form-item label="Тип" :rules="[{ required: true }]">
        <a-select v-model:value="category.type" :options="types" />
      </a-form-item>
      <a-form-item label="Баланс" :rules="[{ required: true }]">
        <a-input-number v-model:value="category.balance" />
      </a-form-item>
      <a-form-item label="Иконка">
        <a-space>
          <a-avatar :style="{ backgroundColor: `black` }">
            <template #icon>
              <component :is="category.icon" />
            </template>
          </a-avatar>
          <a-button @click="handleDialog({ icon: true }, category)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="Цвет">
        <a-space>
          <a-avatar :style="{ backgroundColor: category.color }"></a-avatar>
          <a-button @click="handleDialog({ color: true }, category)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory, ICategoryType } from "@/interfaces";

@Options({
  name: "UpsertCategory",
})
export default class UpsertCategory extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) types!: ICategoryType[];
  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;
  @Prop({ required: true }) initialCategory!: ICategory;

  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
