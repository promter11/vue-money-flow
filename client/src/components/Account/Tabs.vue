<template>
  <a-tabs :animated="true" :active-key="tab" @change="changeTab">
    <a-tab-pane key="account" tab="Обычный">
      <accounts-list
        :accounts="getAccountsByType($const('ACCOUNT_COMMON'))"
        :initial-account="initialAccount"
        @handle-dialogs="
          ({ dialogs, account }) => handleDialogs(dialogs, account)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="debt" tab="Долговой">
      <accounts-list
        :accounts="getAccountsByType($const('ACCOUNT_DEBT'))"
        :initial-account="initialAccount"
        @handle-dialogs="
          ({ dialogs, account }) => handleDialogs(dialogs, account)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="saving" tab="Накопительный">
      <accounts-list
        :accounts="getAccountsByType($const('ACCOUNT_SAVING'))"
        :initial-account="initialAccount"
        @handle-dialogs="
          ({ dialogs, account }) => handleDialogs(dialogs, account)
        "
      />
    </a-tab-pane>
    <a-tab-pane key="total" tab="Финансы">
      <accounts-table :accounts="accounts" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { Emit, Options, Prop, Vue } from "vue-property-decorator";
import { useRoute } from "vue-router";

import AccountsList from "@/components/Account/List.vue";
import AccountsTable from "@/components/Account/Table.vue";
import { AccountDialog, IAccount } from "@/interfaces";

@Options({
  components: {
    AccountsList,
    AccountsTable,
  },
  created() {
    this.changeTab(this.tab);
  },
  name: "AccountTabs",
})
export default class AccountTabs extends Vue {
  @Emit()
  private handleDialogs(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    return { account, dialogs };
  }

  @Prop({ required: true }) accounts!: IAccount[];
  @Prop({ required: true }) initialAccount!: IAccount;

  tab = useRoute().query.type || "accounts";

  private changeTab(tab: "account" | "saving" | "debt" | "total") {
    this.tab = tab;
    this.$router.replace({ query: { type: tab } });
  }

  private getAccountsByType(type: IAccount["type"]) {
    return this.accounts.filter((account) => account.type === type);
  }
}
</script>
