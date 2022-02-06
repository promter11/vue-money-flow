<template>
  <a-button
    type="primary"
    class="block mb-4"
    @click="
      handleDialog(
        { upsert: true },
        {
          balance: null,
          id: null,
          name: null,
          type: 1,
        }
      )
    "
  >
    <template #icon>
      <plus-outlined />
    </template>
    <span>Добавить категорию</span>
  </a-button>
  <a-space size="middle" class="w-full pl-px overflow-x-auto">
    <a-card v-for="category in categories" :key="category.id" class="mb-4">
      <a-row type="flex">
        <a-col class="mr-8">
          <a-card-meta
            class="flex align-center"
            :title="`${
              (currencies.find(({ value }) => value === user.currency_id) ?? {})
                .sign
            } ${category.balance.toLocaleString('en-US', {
              minimumFractionDigits: 2,
            })}`"
            :description="category.name"
          >
            <template #avatar>
              <a-avatar
                src="https://picsum.photos/45"
                alt="Category"
                :size="45"
              />
            </template>
          </a-card-meta>
        </a-col>
        <a-col class="absolute top-4 right-4">
          <a-tooltip>
            <template #title>Действия</template>
            <a-dropdown :trigger="['click']">
              <more-outlined class="text-base grey--text" />
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    @click="handleDialog({ upsert: true }, category)"
                  >
                    <edit-outlined />
                    <span class="ml-4">Изменить</span>
                  </a-menu-item>
                  <a-menu-item
                    @click="handleDialog({ remove: true }, category)"
                  >
                    <delete-outlined />
                    <span class="ml-4">Удалить</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-tooltip>
        </a-col>
      </a-row>
    </a-card>
  </a-space>
</template>

<script lang="ts">
import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Getter } from "s-vuex-class";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, ICategory, ICurrency, IUser, Nullable } from "@/interfaces";

@Options({
  components: { DeleteOutlined, EditOutlined, MoreOutlined, PlusOutlined },
  name: "CategoryList",
})
export default class CategoryList extends Vue {
  @Getter user!: IUser;
  @Getter currencies!: ICurrency[];

  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    category: Nullable<ICategory>
  ) {
    return { category, dialogs };
  }

  @Prop({ required: true }) categories!: ICategory[];
}
</script>
