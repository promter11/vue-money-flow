<template>
  <upsert-category
    :types="types"
    :dialog="dialogs.upsert"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <remove-category
    :dialog="dialogs.remove"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <h2 class="mb-0">Категории</h2>
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
import { Dialog, ICategory, ICategoryType, Nullable } from "@/interfaces";
import CategoryService from "@/services/CategoryService";

@Options({
  components: { CategoryList, CategoryTabs, RemoveCategory, UpsertCategory },
  async created() {
    this.types = await CategoryService.getCategoryTypes();
    this.categories = await CategoryService.getCategories();
  },
  name: "Categories",
})
export default class Categories extends Vue {
  types: ICategoryType[] = [];
  dialogs: Record<Dialog, boolean> = {
    remove: false,
    upsert: false,
  };
  category: Nullable<ICategory> = {
    balance: null,
    id: null,
    name: null,
    type: 1,
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
