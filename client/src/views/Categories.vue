<template>
  <upsert-category
    :types="categoryTypes"
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
  <color-category
    :dialog="dialogs.color"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <icon-category
    :dialog="dialogs.icon"
    :category="category"
    @handle-dialog="({ dialogs, category }) => handleDialog(dialogs, category)"
  />
  <a-space align="start" class="relative w-full">
    <h2 class="mb-0">Категории</h2>
    <a-statistic
      class="absolute right-0"
      title="Итоговый баланс"
      :value="`${
        (currencies.find(({ value }) => value === user.currency) ?? {}).sign
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
import cloneDeep from "lodash.clonedeep";
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import CategoryList from "@/components/Categories/CategoryList.vue";
import CategoryTabs from "@/components/Categories/CategoryTabs.vue";
import ColorCategory from "@/components/Categories/Dialogs/Color.vue";
import IconCategory from "@/components/Categories/Dialogs/Icon.vue";
import RemoveCategory from "@/components/Categories/Dialogs/Remove.vue";
import UpsertCategory from "@/components/Categories/Dialogs/Upsert.vue";
import {
  CategoryDialog,
  ICategory,
  ICategoryType,
  ICurrency,
  IUser,
} from "@/interfaces";
import CategoryService from "@/services/CategoryService";
import { formatNumber } from "@/utils/format";

@Options({
  components: {
    CategoryList,
    CategoryTabs,
    ColorCategory,
    IconCategory,
    RemoveCategory,
    UpsertCategory,
  },
  async created() {
    this.categories = await CategoryService.getCategories();
  },
  methods: { formatNumber },
  name: "Categories",
})
export default class Categories extends Vue {
  @Getter user!: IUser;
  @Getter categoryTypes!: ICategoryType[];
  @Getter currencies!: ICurrency[];

  dialogs: Record<CategoryDialog, boolean> = {
    color: false,
    icon: false,
    remove: false,
    upsert: false,
  };
  category: ICategory = cloneDeep(this.initialCategory);
  categories: ICategory[] = [];

  get initialCategory(): ICategory {
    return {
      _id: "",
      balance: 0,
      color: "#000000",
      icon: "credit-card-outlined",
      name: "",
      type: 1,
    };
  }

  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.category = cloneDeep(category);
  }
}
</script>
