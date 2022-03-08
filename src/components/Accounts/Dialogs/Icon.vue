<template>
  <a-modal
    centered
    title="Иконка счёта"
    :width="320"
    :footer="null"
    :visible="dialog"
    @cancel="handleDialog({ icon: false }, account)"
  >
    <a-space>
      <a-avatar :style="{ backgroundColor: account.icon.color }">
        <template #icon>
          <component :is="account.icon.component" />
        </template>
      </a-avatar>
      <span>Предпросмотр</span>
    </a-space>
    <a-tabs v-model:active-key="tab" :animated="true">
      <a-tab-pane key="icon" tab="Иконка">
        <a-radio-group v-model:value="account.icon.component">
          <a-space class="flex-wrap">
            <a-radio v-for="icon in icons" :key="icon" :value="icon">
              <component :is="icon" />
            </a-radio>
          </a-space>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="color" tab="Цвет">
        <a-radio-group v-model:value="account.icon.color">
          <a-space class="flex-wrap">
            <a-radio v-for="color in colors" :key="color" :value="color">
              <a-badge :color="color" />
            </a-radio>
          </a-space>
        </a-radio-group>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";

import { AccountDialog, IAccount } from "@/interfaces";

@Options({
  name: "IconAccount",
})
export default class IconAccount extends Vue {
  @Emit()
  private handleDialog(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) dialog!: boolean;
  @Prop({ required: true }) account!: IAccount;

  tab = "icon";
  icons = [
    "credit-card-outlined",
    "wallet-outlined",
    "folder-open-outlined",
    "book-outlined",
    "bank-outlined",
    "database-outlined",
    "gold-outlined",
    "gift-outlined",
    "dollar-outlined",
    "euro-outlined",
    "pound-outlined",
    "stock-outlined",
    "percentage-outlined",
  ];
  colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B",
    "#9E9E9E",
    "#000000",
  ];
}
</script>
