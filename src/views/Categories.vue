<template>
  <upsert-category
    :types="types"
    :dialog="dialogs.upsert"
    :category="category"
    :initial-category="initialCategory"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <remove-category
    :dialog="dialogs.remove"
    :category="category"
    :initial-category="initialCategory"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <a-space align="start" class="relative w-full">
    <h2 class="mb-0">Категории</h2>
    <a-statistic
      class="absolute right-0"
      title="Итоговый баланс"
      :value="`${
        (currencies.find(({ value }) => value === user.currency_id) ?? {}).sign
      }
    ${formatNumber(user.balance)}`"
    />
  </a-space>
  <category-tabs
    :categories="categories"
    :initial-category="initialCategory"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import CategoryList from "@/components/Categories/CategoryList.vue";
import CategoryTabs from "@/components/Categories/CategoryTabs.vue";
import RemoveCategory from "@/components/Categories/Dialogs/Remove.vue";
import UpsertCategory from "@/components/Categories/Dialogs/Upsert.vue";
import {
  Dialog,
  ICategory,
  ICategoryType,
  ICurrency,
  IUser,
} from "@/interfaces";
import CategoryService from "@/services/CategoryService";
import { formatNumber } from "@/utils/format";

@Options({
  components: { CategoryList, CategoryTabs, RemoveCategory, UpsertCategory },
  async created() {
    this.types = await CategoryService.getCategoryTypes();
    this.categories = await CategoryService.getCategories();
  },
  methods: { formatNumber },
  name: "Categories",
})
export default class Categories extends Vue {
  @Getter user!: IUser;
  @Getter currencies!: ICurrency[];

  types: ICategoryType[] = [];
  dialogs: Record<Dialog, boolean> = {
    remove: false,
    upsert: false,
  };
  category: ICategory = this.initialCategory;
  categories: ICategory[] = [];

  get initialCategory(): ICategory {
    return {
      balance: 0,
      id: -1,
      name: "",
      type: 1,
    };
  }

  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    category: ICategory
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.category = { ...category };
  }
}
</script>
