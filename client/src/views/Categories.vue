<template>
  <category-dialog-upsert
    :dialog="dialogs.upsert"
    :category="category"
    :initial-category="initialCategory"
    @handle-dialogs="
      ({ dialogs, category }) => handleDialogs(dialogs, category)
    "
  />
  <category-dialog-delete
    :dialog="dialogs.delete"
    :category="category"
    :initial-category="initialCategory"
    @handle-dialogs="
      ({ dialogs, category }) => handleDialogs(dialogs, category)
    "
  />
  <category-dialog-color
    :dialog="dialogs.color"
    :category="category"
    @handle-dialogs="
      ({ dialogs, category }) => handleDialogs(dialogs, category)
    "
  />
  <category-dialog-icon
    :dialog="dialogs.icon"
    :category="category"
    @handle-dialogs="
      ({ dialogs, category }) => handleDialogs(dialogs, category)
    "
  />
  <a-space align="start" class="relative w-full">
    <h2 class="mb-0">Категории</h2>
    <a-statistic
      class="absolute right-0"
      title="Итоговый баланс"
      :value="formatNumber(user.balance)"
    />
  </a-space>
  <category-tabs
    :categories="categories"
    :initial-category="initialCategory"
    @handle-dialogs="
      ({ dialogs, category }) => handleDialogs(dialogs, category)
    "
  />
</template>

<script lang="ts">
import cloneDeep from "lodash/cloneDeep";
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import CategoryList from "@/components/Categories/CategoryList.vue";
import CategoryTabs from "@/components/Categories/CategoryTabs.vue";
import CategoryDialogColor from "@/components/Categories/Dialogs/Color.vue";
import CategoryDialogDelete from "@/components/Categories/Dialogs/Delete.vue";
import CategoryDialogIcon from "@/components/Categories/Dialogs/Icon.vue";
import CategoryDialogUpsert from "@/components/Categories/Dialogs/Upsert.vue";
import { CategoryDialog, ICategory, IUser } from "@/interfaces";
import CategoryService from "@/services/CategoryService";
import { formatNumber } from "@/utils/format";

@Options({
  components: {
    CategoryDialogColor,
    CategoryDialogDelete,
    CategoryDialogIcon,
    CategoryDialogUpsert,
    CategoryList,
    CategoryTabs,
  },
  async created() {
    await this.fetchCategories();
  },
  methods: { formatNumber },
  name: "Categories",
})
export default class Categories extends Vue {
  @Getter user!: IUser;

  dialogs: Record<CategoryDialog, boolean> = {
    color: false,
    delete: false,
    icon: false,
    upsert: false,
  };
  category: ICategory = cloneDeep(this.initialCategory);
  categories: ICategory[] = [];

  get initialCategory(): ICategory {
    return {
      _id: "",
      balance: {
        currency: "RUB",
        value: 0,
      },
      color: "#000000",
      icon: "credit-card-outlined",
      name: "",
      type: 1,
    };
  }

  private async fetchCategories() {
    const { data } = await CategoryService.fetchCategories();
    this.categories = data;
  }

  private async createCategory(params: Omit<ICategory, "_id">) {
    const { data } = await CategoryService.createCategory(params);
    this.categories = [...this.categories, data];
  }

  private async updateCategory(
    id: ICategory["_id"],
    params: Omit<ICategory, "_id">
  ) {
    const { data } = await CategoryService.updateCategory(id, params);
    const index = this.categories.findIndex(({ _id }) => _id === id);
    this.categories = [
      ...this.categories.slice(0, index),
      data,
      ...this.categories.slice(index + 1),
    ];
  }

  private async deleteCategory(id: ICategory["_id"]) {
    await CategoryService.deleteCategory(id);
    const index = this.categories.findIndex(({ _id }) => _id === id);
    this.categories = [
      ...this.categories.slice(0, index),
      ...this.categories.slice(index + 1),
    ];
  }

  private handleDialogs(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.category = cloneDeep(category);
  }
}
</script>
