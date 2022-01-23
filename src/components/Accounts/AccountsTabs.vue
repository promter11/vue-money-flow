<template>
  <a-tabs :animated="true" :active-key="tab" @change="changeTab">
    <a-tab-pane key="accounts" tab="Счета">
      <accounts-list
        btn-text="Добавить счёт"
        :items="items.accounts"
        :currencies="currencies"
        @handle-dialog="handleDialog"
      />
    </a-tab-pane>
    <a-tab-pane key="savings" tab="Сбережения">
      <accounts-list
        btn-text="Добавить сбережение"
        :items="items.savings"
        :currencies="currencies"
        @handle-dialog="handleDialog"
      />
    </a-tab-pane>
    <a-tab-pane key="debts" tab="Долги">
      <accounts-list
        btn-text="Добавить долг"
        :items="items.debts"
        :currencies="currencies"
        @handle-dialog="handleDialog"
      />
    </a-tab-pane>
    <a-tab-pane key="finances" tab="Финансы">
      <accounts-table :items="items.finances" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";
import { useRoute } from "vue-router";

import AccountsList from "@/components/Accounts/AccountsList.vue";
import AccountsTable from "@/components/Accounts/AccountsTable.vue";
import { Account, Dialog, IAccountData, ICurrency } from "@/interfaces";

@Options({
  components: {
    AccountsList,
    AccountsTable,
  },
  created() {
    this.changeTab(this.tab);
  },
  name: "AccountsTabs",
})
export default class AccountsTabs extends Vue {
  @Emit()
  private handleDialog(dialogs: Partial<Record<Dialog, boolean>>) {
    return dialogs;
  }

  @Prop({ required: true }) items!: IAccountData;
  @Prop({ required: true }) currencies!: ICurrency[];

  tab = useRoute().query.type || "accounts";

  private async changeTab(tab: Account) {
    this.tab = tab;
    await this.$router.replace({ query: { type: tab } });
  }
}
</script>
