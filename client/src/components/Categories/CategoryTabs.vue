<template>
  <a-tabs :animated="true" :active-key="tab" @change="changeTab">
    <a-tab-pane key="income" tab="Доходы">
      <category-list
        :categories="getCategoryByType($const('CATEGORY_INCOME'))"
        :initial-category="initialCategory"
        @handle-dialogs="
          ({ dialogs, category }) => handleDialogs(dialogs, category)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="costs" tab="Расходы">
      <category-list
        :categories="getCategoryByType($const('CATEGORY_COSTS'))"
        :initial-category="initialCategory"
        @handle-dialogs="
          ({ dialogs, category }) => handleDialogs(dialogs, category)
        "
      />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";
import { useRoute } from "vue-router";

import CategoryList from "@/components/Categories/CategoryList.vue";
import { CategoryDialog, ICategory } from "@/interfaces";

@Options({
  components: { CategoryList },
  created() {
    this.changeTab(this.tab);
  },
  name: "CategoryTabs",
})
export default class CategoryTabs extends Vue {
  @Emit()
  private handleDialogs(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) categories!: ICategory[];
  @Prop({ required: true }) initialCategory!: ICategory;

  tab = useRoute().query.type || "income";

  private async changeTab(tab: "income" | "costs") {
    this.tab = tab;
    await this.$router.replace({ query: { type: tab } });
  }

  private getCategoryByType(type: ICategory["type"]) {
    return this.categories.filter((category) => category.type === type);
  }
}
</script>
