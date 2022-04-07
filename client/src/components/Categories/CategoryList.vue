<template>
  <a-button
    type="primary"
    class="block mb-4"
    @click="handleDialog({ upsert: true }, initialCategory)"
  >
    <template #icon>
      <plus-outlined />
    </template>
    <span>Добавить категорию</span>
  </a-button>
  <a-row :gutter="[16, 16]">
    <a-col
      v-for="category in categories"
      :key="category._id"
      :xs="24"
      :sm="12"
      :lg="8"
      :xl="6"
    >
      <a-space
        size="middle"
        class="w-full p-4 border-lg"
        direction="vertical"
        :style="{ backgroundColor: category.color }"
      >
        <a-row class="align-center">
          <a-col flex="1 0 auto">
            <a-typography-text strong class="text-base white--text">
              {{ category.name }}
            </a-typography-text>
          </a-col>
          <a-col>
            <a-avatar class="transparent">
              <template #icon>
                <component :is="category.icon" />
              </template>
            </a-avatar>
          </a-col>
        </a-row>
        <a-row class="justify-center">
          <a-col>
            <a-typography-text
              strong
              class="mr-1 text-2xl opacity-50 white--text"
            >
              {{
                (currencies.find(({ value }) => value === user.currency) ?? {})
                  .sign
              }}
            </a-typography-text>
            <a-typography-text strong class="text-2xl white--text">
              {{ formatNumber(category.balance) }}
            </a-typography-text>
          </a-col>
        </a-row>
        <a-row class="justify-center">
          <a-col>
            <a-space size="middle">
              <a-button
                ghost
                class="style-btn"
                @click="handleDialog({ upsert: true }, category)"
              >
                Изменить
              </a-button>
              <a-button
                ghost
                class="style-btn"
                @click="handleDialog({ remove: true }, category)"
              >
                Удалить
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-space>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { CategoryDialog, ICategory, ICurrency, IUser } from "@/interfaces";
import { formatNumber } from "@/utils/format";

@Options({
  methods: { formatNumber },
  name: "CategoryList",
})
export default class CategoryList extends Vue {
  @Getter user!: IUser;
  @Getter currencies!: ICurrency[];

  @Emit()
  private handleDialog(
    dialogs: Partial<Record<CategoryDialog, boolean>>,
    category: ICategory
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) categories!: ICategory[];
  @Prop({ required: true }) initialCategory!: ICategory;
}
</script>

<style scoped lang="scss">
.style-btn {
  &:hover,
  &:focus {
    border-color: $white-color;
    background-color: $white-color !important;
    color: $black-color;
  }
}
</style>
