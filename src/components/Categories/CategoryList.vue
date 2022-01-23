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
          type: null,
        }
      )
    "
  >
    <template #icon>
      <plus-outlined />
    </template>
    <span>Добавить категорию</span>
  </a-button>
  <a-space class="space-container mb-2">
    <a-card v-for="category in categories" :key="category.id">
      <template #actions>
        <a-tooltip>
          <template #title>Изменить</template>
          <a-button
            shape="circle"
            @click="handleDialog({ upsert: true }, category)"
          >
            <template #icon>
              <edit-outlined />
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip>
          <template #title>Удалить</template>
          <a-button
            danger
            shape="circle"
            @click="handleDialog({ remove: true }, category)"
          >
            <template #icon>
              <delete-outlined />
            </template>
          </a-button>
        </a-tooltip>
      </template>
      <a-card-meta
        :title="category.name"
        :description="`$ ${category.balance.toLocaleString()}`"
      >
        <template #avatar>
          <a-avatar src="https://picsum.photos/40" alt="Category" />
        </template>
      </a-card-meta>
    </a-card>
  </a-space>
</template>

<script lang="ts">
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, ICategory, Nullable } from "@/interfaces";

@Options({
  components: { DeleteOutlined, EditOutlined, PlusOutlined },
  name: "CategoryList",
})
export default class CategoryList extends Vue {
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
