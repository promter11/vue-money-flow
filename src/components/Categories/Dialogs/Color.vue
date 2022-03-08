<template>
  <a-modal
    centered
    title="Цвет категории"
    :width="320"
    :footer="null"
    :visible="dialog"
    @cancel="handleDialog({ color: false }, category)"
  >
    <a-space class="mb-4">
      <a-avatar :style="{ backgroundColor: category.color }"></a-avatar>
      <span>Предпросмотр</span>
    </a-space>
    <a-radio-group v-model:value="category.color">
      <a-space class="flex-wrap">
        <a-radio v-for="color in colors" :key="color" :value="color">
          <a-badge :color="color" />
        </a-radio>
      </a-space>
    </a-radio-group>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory } from "@/interfaces";

@Options({
  name: "ColorCategory",
})
export default class ColorCategory extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;

  colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B",
    "#9E9E9E",
    "#000000",
  ];
}
</script>
