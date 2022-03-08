<template>
  <a-modal
    centered
    title="Иконка категории"
    :width="320"
    :footer="null"
    :visible="dialog"
    @cancel="handleDialog({ icon: false }, category)"
  >
    <a-space class="mb-4">
      <a-avatar :style="{ backgroundColor: `black` }">
        <template #icon>
          <component :is="category.icon" />
        </template>
      </a-avatar>
      <span>Предпросмотр</span>
    </a-space>
    <a-radio-group v-model:value="category.icon">
      <a-space class="flex-wrap">
        <a-radio v-for="icon in icons" :key="icon" :value="icon">
          <component :is="icon" />
        </a-radio>
      </a-space>
    </a-radio-group>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory } from "@/interfaces";

@Options({
  name: "IconCategory",
})
export default class IconCategory extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;

  icons = [
    "credit-card-outlined",
    "wallet-outlined",
    "folder-open-outlined",
    "book-outlined",
    "bank-outlined",
    "database-outlined",
    "gold-outlined",
    "gift-outlined",
    "dollar-outlined",
    "euro-outlined",
    "pound-outlined",
    "stock-outlined",
    "percentage-outlined",
  ];
}
</script>
