<template>
  <account-dialog-icon
    :dialog="dialogs.icon"
    :account="account"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
  />
  <account-dialog-upsert
    :dialog="dialogs.upsert"
    :account="account"
    :currencies="currencies"
    :initial-account="initialAccount"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
    @upsert-account="account._id ? updateAccount() : createAccount()"
  />
  <account-dialog-delete
    :dialog="dialogs.delete"
    :account="account"
    :initial-account="initialAccount"
    @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
    @delete-account="deleteAccount"
  />
  <h2>Счета</h2>
  <a-skeleton active :loading="isLoadingAccounts" :paragraph="{ rows: 4 }">
    <account-tabs
      :accounts="accounts"
      :currencies="currencies"
      :initial-account="initialAccount"
      @handle-dialog="({ dialogs, account }) => handleDialog(dialogs, account)"
    />
  </a-skeleton>
</template>

<script lang="ts">
import cloneDeep from "lodash.clonedeep";
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import AccountDialogDelete from "@/components/Account/Dialogs/Delete.vue";
import AccountDialogIcon from "@/components/Account/Dialogs/Icon.vue";
import AccountDialogUpsert from "@/components/Account/Dialogs/Upsert.vue";
import AccountTabs from "@/components/Account/Tabs.vue";
import { AccountDialog, IAccount, ICurrency } from "@/interfaces";
import AccountService from "@/services/AccountService";

@Options({
  components: {
    AccountDialogDelete,
    AccountDialogIcon,
    AccountDialogUpsert,
    AccountTabs,
  },
  async created() {
    await this.getAccounts();
  },
  name: "Accounts",
})
export default class Accounts extends Vue {
  @Getter currencies!: ICurrency[];

  dialogs: Record<AccountDialog, boolean> = {
    delete: false,
    icon: false,
    upsert: false,
  };
  account: IAccount = cloneDeep(this.initialAccount);
  accounts: IAccount[] = [];
  isLoadingAccounts = true;

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

  private async getAccounts() {
    const { data } = await AccountService.getAccounts();
    this.accounts = data;
    this.isLoadingAccounts = false;
  }

  private async createAccount() {
    const { _id, ...params } = this.account;
    const { data } = await AccountService.createAccount(params);
    this.accounts = [...this.accounts, data];
  }

  private async updateAccount() {
    const { _id, ...params } = this.account;
    const { data } = await AccountService.updateAccount(_id, params);
    const index = this.accounts.findIndex(({ _id }) => _id === data._id);
    this.accounts = [
      ...this.accounts.slice(0, index),
      data,
      ...this.accounts.slice(index + 1),
    ];
  }

  private async deleteAccount() {
    await AccountService.deleteAccount(this.account._id);
    const index = this.accounts.findIndex(
      ({ _id }) => _id === this.account._id
    );
    this.accounts = [
      ...this.accounts.slice(0, index),
      ...this.accounts.slice(index + 1),
    ];
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
