<template>
  <a-button
    type="primary"
    class="mb-4"
    @click="
      handleDialog(
        { upsert: true },
        {
          balance: 0,
          currency_id: 4,
          description: null,
          title: null,
          type: 1,
        }
      )
    "
  >
    <template #icon>
      <plus-outlined />
    </template>
    <span>Добавить счёт</span>
  </a-button>
  <a-list item-layout="horizontal" :data-source="items">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a-tooltip>
            <template #title>Действия</template>
            <a-dropdown :trigger="['click']">
              <more-outlined class="text-base" />
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="handleDialog({ upsert: true }, item)">
                    <edit-outlined />
                    <span class="ml-4">Изменить</span>
                  </a-menu-item>
                  <a-menu-item @click="handleDialog({ remove: true }, item)">
                    <delete-outlined />
                    <span class="ml-4">Удалить</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-tooltip>
        </template>
        <a-list-item-meta class="align-center" :description="item.description">
          <template #title>{{ item.title }}</template>
          <template #avatar>
            <a-avatar alt="Account" src="https://picsum.photos/40" />
          </template>
        </a-list-item-meta>
        <strong class="pl-15">
          {{
            (currencies.find(({ value }) => value === item.currency_id) ?? {})
              .sign
          }}
          {{
            item.balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })
          }}
        </strong>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { Dialog, IAccount, ICurrency, Nullable } from "@/interfaces";

@Options({
  components: { DeleteOutlined, EditOutlined, MoreOutlined, PlusOutlined },
  name: "AccountsList",
})
export default class AccountsList extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    account: Nullable<IAccount>
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) items!: IAccount[];
  @Prop({ required: true }) currencies!: ICurrency[];
}
</script>
