<template>
  <account-dialog-icon
    :dialog="dialogs.icon"
    :account="account"
    @handle-dialogs="({ dialogs, account }) => handleDialogs(dialogs, account)"
  />
  <account-dialog-upsert
    :dialog="dialogs.upsert"
    :account="account"
    :currencies="currencies"
    :account-types="accountTypes"
    :initial-account="initialAccount"
    @handle-dialogs="({ dialogs, account }) => handleDialogs(dialogs, account)"
    @upsert-account="
      account._id
        ? updateAccount(account._id, omit(account, ['_id']))
        : createAccount(omit(account, ['_id']))
    "
  />
  <account-dialog-delete
    :dialog="dialogs.delete"
    :account="account"
    :initial-account="initialAccount"
    @handle-dialogs="({ dialogs, account }) => handleDialogs(dialogs, account)"
    @delete-account="deleteAccount(account._id)"
  />
  <h2>Счета</h2>
  <a-skeleton active :loading="isLoadingAccounts" :paragraph="{ rows: 4 }">
    <account-tabs
      :accounts="accounts"
      :initial-account="initialAccount"
      @handle-dialogs="
        ({ dialogs, account }) => handleDialogs(dialogs, account)
      "
    />
  </a-skeleton>
</template>

<script lang="ts">
import cloneDeep from "lodash/cloneDeep";
import omit from "lodash/omit";
import { Options, Vue } from "vue-property-decorator";

import AccountDialogDelete from "@/components/Account/Dialogs/Delete.vue";
import AccountDialogIcon from "@/components/Account/Dialogs/Icon.vue";
import AccountDialogUpsert from "@/components/Account/Dialogs/Upsert.vue";
import AccountTabs from "@/components/Account/Tabs.vue";
import { AccountDialog, IAccount, IAccountType, ICurrency } from "@/interfaces";
import AccountService from "@/services/AccountService";
import ApplicationService from "@/services/ApplicationService";

@Options({
  components: {
    AccountDialogDelete,
    AccountDialogIcon,
    AccountDialogUpsert,
    AccountTabs,
  },
  async created() {
    await this.fetchAccounts();
  },
  methods: { omit },
  name: "Accounts",
})
export default class Accounts extends Vue {
  dialogs: Record<AccountDialog, boolean> = {
    delete: false,
    icon: false,
    upsert: false,
  };
  account: IAccount = cloneDeep(this.initialAccount);
  accounts: IAccount[] = [];
  currencies: ICurrency[] = [];
  accountTypes: IAccountType[] = [];
  isLoadingAccounts = true;

  get initialAccount(): IAccount {
    return {
      _id: "",
      balance: {
        currency: "RUB",
        value: 0,
      },
      description: "",
      icon: {
        color: "#000000",
        component: "credit-card-outlined",
      },
      name: "",
      type: 1,
    };
  }

  private async fetchAccountTypes() {
    const { data } = await ApplicationService.fetchAccountTypes();
    this.accountTypes = data;
  }

  private async fetchCurrencies() {
    const { data } = await ApplicationService.fetchCurrencies();
    this.currencies = data;
  }

  private async fetchAccounts() {
    const { data } = await AccountService.fetchAccounts();
    this.accounts = data;
    this.isLoadingAccounts = false;
  }

  private async createAccount(params: Omit<IAccount, "_id">) {
    const { data } = await AccountService.createAccount(params);
    this.accounts = [...this.accounts, data];
  }

  private async updateAccount(
    id: IAccount["_id"],
    params: Omit<IAccount, "_id">
  ) {
    const { data } = await AccountService.updateAccount(id, params);
    const index = this.accounts.findIndex(({ _id }) => _id === id);
    this.accounts = [
      ...this.accounts.slice(0, index),
      data,
      ...this.accounts.slice(index + 1),
    ];
  }

  private async deleteAccount(id: IAccount["_id"]) {
    await AccountService.deleteAccount(id);
    const index = this.accounts.findIndex(({ _id }) => _id === id);
    this.accounts = [
      ...this.accounts.slice(0, index),
      ...this.accounts.slice(index + 1),
    ];
  }

  private handleDialogs(
    dialogs: Partial<Record<AccountDialog, boolean>>,
    account: IAccount
  ) {
    this.dialogs = { ...this.dialogs, ...dialogs };
    this.account = cloneDeep(account);
  }
}
</script>
