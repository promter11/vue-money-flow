<template>
  <a-modal
    title="Удалить категорию"
    ok-text="Удалить"
    cancel-text="Отмена"
    :visible="dialog"
    :ok-button-props="{ danger: true }"
    @ok="handleDialog({ remove: false }, initialCategory)"
    @cancel="handleDialog({ remove: false }, initialCategory)"
  >
    <a-typography-paragraph>
      Вы действительно хотите удалить категорию
      <a-typography-text strong>{{ category.name }}</a-typography-text>
      <a-typography-text>?</a-typography-text>
    </a-typography-paragraph>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory } from "@/interfaces";

@Options({
  name: "RemoveCategory",
})
export default class RemoveCategory extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) category!: ICategory;
  @Prop({ required: true }) initialCategory!: ICategory;
}
</script>
