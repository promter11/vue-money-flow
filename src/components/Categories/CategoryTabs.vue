<template>
  <a-tabs :animated="true" :active-key="tab" @change="changeTab">
    <a-tab-pane key="income" tab="Доходы" class="overflow-x-auto">
      <category-list
        :categories="categories.filter(({ type }) => type === 'income')"
        @handle-dialog="
          ({ dialogs, category }) => handleDialog(dialogs, category)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="costs" tab="Расходы" class="overflow-x-auto">
      <category-list
        :categories="categories.filter(({ type }) => type === 'costs')"
        @handle-dialog="
          ({ dialogs, category }) => handleDialog(dialogs, category)
        "
      />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";
import { useRoute } from "vue-router";

import CategoryList from "@/components/Categories/CategoryList.vue";
import { Category, Dialog, ICategory, Nullable } from "@/interfaces";

@Options({
  components: { CategoryList, PlusOutlined },
  created() {
    this.changeTab(this.tab);
  },
  name: "CategoryTabs",
})
export default class CategoryTabs extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    category: Nullable<ICategory>
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) categories!: ICategory[];

  tab = useRoute().query.type || "income";

  private async changeTab(tab: Category) {
    this.tab = tab;
    await this.$router.replace({ query: { type: tab } });
  }
}
</script>
