<template>
  <upsert-category
    :dialog="dialogs.upsert"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <remove-category
    :dialog="dialogs.remove"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <category-tabs
    :categories="categories"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

import CategoryList from "@/components/Categories/CategoryList.vue";
import CategoryTabs from "@/components/Categories/CategoryTabs.vue";
import RemoveCategory from "@/components/Categories/Dialogs/Remove.vue";
import UpsertCategory from "@/components/Categories/Dialogs/Upsert.vue";
import { Dialog, ICategory, Nullable } from "@/interfaces";
import CategoryService from "@/services/CategoryService";

@Options({
  components: { CategoryList, CategoryTabs, RemoveCategory, UpsertCategory },
  async created() {
    this.categories = await CategoryService.getCategories();
  },
  name: "Categories",
})
export default class Categories extends Vue {
  dialogs: Record<Dialog, boolean> = {
    remove: false,
    upsert: false,
  };
  category: Nullable<ICategory> = {
    balance: null,
    id: null,
    name: null,
    type: null,
  };
  categories: ICategory[] = [];

  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    category: Nullable<ICategory>
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.category = category;
  }
}
</script>

<style lang="scss">
.space-container .ant-space-item {
  flex-shrink: 0;
}
</style>
