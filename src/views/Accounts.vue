<template>
  <upsert-account
    :types="types"
    :dialog="dialogs.upsert"
    :account="account"
    :currencies="currencies"
    :initial-account="initialAccount"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
  />
  <remove-account
    :dialog="dialogs.remove"
    :account="account"
    :initial-account="initialAccount"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
  />
  <h2 class="mb-0">Счета</h2>
  <accounts-tabs
    :items="items"
    :currencies="currencies"
    :initial-account="initialAccount"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
  />
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import AccountsTabs from "@/components/Accounts/AccountsTabs.vue";
import RemoveAccount from "@/components/Accounts/Dialogs/Remove.vue";
import UpsertAccount from "@/components/Accounts/Dialogs/Upsert.vue";
import {
  Dialog,
  IAccount,
  IAccountData,
  IAccountType,
  ICurrency,
} from "@/interfaces";
import AccountsService from "@/services/AccountsService";

@Options({
  components: {
    AccountsTabs,
    RemoveAccount,
    UpsertAccount,
  },
  async created() {
    this.types = await AccountsService.getAccountTypes();
    this.items = await AccountsService.getAccountsData();
  },
  name: "Accounts",
})
export default class Accounts extends Vue {
  @Getter currencies!: ICurrency[];

  items: IAccountData = {
    accounts: [],
    finances: [],
  };
  types: IAccountType[] = [];
  dialogs: Record<Dialog, boolean> = {
    remove: false,
    upsert: false,
  };
  account: IAccount = { ...this.initialAccount };

  get initialAccount(): IAccount {
    return {
      balance: 0,
      currency_id: 4,
      description: null,
      title: "",
      type: 1,
    };
  }

  private handleDialog(
    dialogs: Partial<Record<Dialog, boolean>>,
    account: IAccount
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.account = { ...account };
  }
}
</script>
