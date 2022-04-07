<template>
  <upsert-account
    :types="accountTypes"
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
  <icon-account
    :dialog="dialogs.icon"
    :account="account"
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
import cloneDeep from "lodash.clonedeep";
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import AccountsTabs from "@/components/Accounts/AccountsTabs.vue";
import IconAccount from "@/components/Accounts/Dialogs/Icon.vue";
import RemoveAccount from "@/components/Accounts/Dialogs/Remove.vue";
import UpsertAccount from "@/components/Accounts/Dialogs/Upsert.vue";
import {
  AccountDialog,
  IAccount,
  IAccountData,
  IAccountType,
  ICurrency,
} from "@/interfaces";
import AccountsService from "@/services/AccountsService";

@Options({
  components: {
    AccountsTabs,
    IconAccount,
    RemoveAccount,
    UpsertAccount,
  },
  async created() {
    this.items = await AccountsService.getAccountsData();
  },
  name: "Accounts",
})
export default class Accounts extends Vue {
  @Getter accountTypes!: IAccountType[];
  @Getter currencies!: ICurrency[];

  items: IAccountData = {
    accounts: [],
    finances: [],
  };
  dialogs: Record<AccountDialog, boolean> = {
    icon: false,
    remove: false,
    upsert: false,
  };
  account: IAccount = cloneDeep(this.initialAccount);

  get initialAccount(): IAccount {
    return {
      _id: "",
      balance: 0,
      currency: 4,
      description: "",
      icon: {
        color: "#000000",
        component: "credit-card-outlined",
      },
      name: "",
      type: 1,
    };
  }

  private handleDialog(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.account = cloneDeep(account);
  }
}
</script>
