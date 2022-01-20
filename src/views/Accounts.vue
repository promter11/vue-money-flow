<template>
  <upsert-account
    :types="types"
    :dialog="dialogs.upsert"
    :currencies="currencies"
    @handle-dialog="handleDialog"
  />
  <remove-account :dialog="dialogs.remove" @handle-dialog="handleDialog" />
  <accounts-tabs
    :items="items"
    :currencies="currencies"
    @handle-dialog="handleDialog"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import AccountsTabs from "@/components/Accounts/AccountsTabs.vue";
import RemoveAccount from "@/components/Accounts/Dialogs/Remove.vue";
import UpsertAccount from "@/components/Accounts/Dialogs/Upsert.vue";
import {
  AccountDialog,
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
    this.currencies = await AccountsService.getCurrencies();
  },
})
export default class Accounts extends Vue {
  items: IAccountData = {
    accounts: [],
    debts: [],
    finances: {
      data: [],
      total: {
        assets: 0,
        liability: 0,
      },
    },
    savings: [],
  };
  types: IAccountType[] = [];
  dialogs: Record<AccountDialog, boolean> = {
    remove: false,
    upsert: false,
  };
  currencies: ICurrency[] = [];

  private handleDialog(dialogs: Partial<Record<AccountDialog, boolean>>) {
    this.dialogs = { ...this.dialogs, ...dialogs };
  }
}
</script>
