<template>
  <a-tabs :animated="true" :active-key="tab" @change="changeTab">
    <a-tab-pane key="accounts" tab="Обычный">
      <accounts-list
        :items="
          items.accounts.filter(({ type }) => type === $const(`ACCOUNT_COMMON`))
        "
        :currencies="currencies"
        :initial-account="initialAccount"
        @handle-dialog="
          ({ dialogs, account }) => handleDialog(dialogs, account)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="debts" tab="Долговой">
      <accounts-list
        :items="
          items.accounts.filter(({ type }) => type === $const(`ACCOUNT_DEBT`))
        "
        :currencies="currencies"
        :initial-account="initialAccount"
        @handle-dialog="
          ({ dialogs, account }) => handleDialog(dialogs, account)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="savings" tab="Накопительный">
      <accounts-list
        :items="
          items.accounts.filter(({ type }) => type === $const(`ACCOUNT_SAVING`))
        "
        :currencies="currencies"
        :initial-account="initialAccount"
        @handle-dialog="
          ({ dialogs, account }) => handleDialog(dialogs, account)
        "
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
import {
  Account,
  AccountDialog,
  IAccount,
  IAccountData,
  ICurrency,
} from "@/interfaces";

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
  private handleDialog(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) items!: IAccountData;
  @Prop({ required: true }) currencies!: ICurrency[];
  @Prop({ required: true }) initialAccount!: IAccount;

  tab = useRoute().query.type || "accounts";

  private async changeTab(tab: Account) {
    this.tab = tab;
    await this.$router.replace({ query: { type: tab } });
  }
}
</script>
