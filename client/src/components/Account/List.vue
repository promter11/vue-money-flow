<template>
  <a-button
    type="primary"
    class="mb-4"
    @click="handleDialogs({ upsert: true }, initialAccount)"
  >
    <template #icon>
      <plus-outlined />
    </template>
    <span>Добавить счёт</span>
  </a-button>
  <a-list item-layout="horizontal" :data-source="accounts">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a-tooltip>
            <template #title>Действия</template>
            <a-dropdown :trigger="[`click`]">
              <more-outlined class="text-base" />
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="handleDialogs({ upsert: true }, item)">
                    <edit-outlined />
                    <span class="ml-4">Изменить</span>
                  </a-menu-item>
                  <a-menu-item @click="handleDialogs({ delete: true }, item)">
                    <delete-outlined />
                    <span class="ml-4">Удалить</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-tooltip>
        </template>
        <a-list-item-meta class="align-center" :description="item.description">
          <template #title>{{ item.name }}</template>
          <template #avatar>
            <a-avatar :style="{ backgroundColor: item.icon.color }">
              <template #icon>
                <component :is="item.icon.component" />
              </template>
            </a-avatar>
          </template>
        </a-list-item-meta>
        <strong class="pl-15">{{ formatNumber(item.balance) }}</strong>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { AccountDialog, IAccount } from "@/interfaces";
import { formatNumber } from "@/utils/format";

@Options({
  methods: { formatNumber },
  name: "AccountList",
})
export default class AccountList extends Vue {
  @Emit()
  private handleDialogs(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) accounts!: IAccount[];
  @Prop({ required: true }) initialAccount!: IAccount;
}
</script>
