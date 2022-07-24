<template>
  <a-modal
    title="Новая категория"
    ok-text="Добавить"
    cancel-text="Отмена"
    :visible="dialog"
    @ok="handleDialogs({ upsert: false }, initialCategory)"
    @cancel="handleDialogs({ upsert: false }, initialCategory)"
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
          <a-button @click="handleDialogs({ icon: true }, category)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="Цвет">
        <a-space>
          <a-avatar :style="{ backgroundColor: category.color }"></a-avatar>
          <a-button @click="handleDialogs({ color: true }, category)">
            Изменить
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory } from "@/interfaces";

@Options({
  name: "CategoryDialogUpsert",
})
export default class CategoryDialogUpsert extends Vue {
  @Emit()
  private handleDialogs(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;
  @Prop({ required: true }) initialCategory!: ICategory;

  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
