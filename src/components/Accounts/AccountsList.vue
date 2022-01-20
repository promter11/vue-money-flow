<template>
  <a-button type="primary" class="mb-4" @click="handleDialog({ upsert: true })">
    <template #icon>
      <plus-outlined />
    </template>
    <span>{{ btnText }}</span>
  </a-button>
  <a-list item-layout="horizontal" :data-source="items">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a-tooltip>
            <template #title>Изменить</template>
            <a-button shape="circle" @click="handleDialog({ upsert: true })">
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
              @click="handleDialog({ remove: true })"
            >
              <template #icon>
                <delete-outlined />
              </template>
            </a-button>
          </a-tooltip>
        </template>
        <a-list-item-meta
          :description="`${
            (currencies.find(({ value }) => value === item.currency_id) ?? {})
              .sign
          } ${item.balance}`"
        >
          <template #title>{{ item.title }}</template>
          <template #avatar>
            <a-avatar src="https://picsum.photos/40" alt="Account" />
          </template>
        </a-list-item-meta>
        <span class="pl-15">{{ item.description }}</span>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AccountDialog, IAccount, ICurrency } from "@/interfaces";

@Options({
  components: { DeleteOutlined, EditOutlined, PlusOutlined },
})
export default class AccountList extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<AccountDialog, boolean>>) {
    return dialogs;
  }

  @Prop({ required: true }) items!: IAccount[];
  @Prop({ required: true }) btnText!: string;
  @Prop({ required: true }) currencies!: ICurrency[];
}
</script>
