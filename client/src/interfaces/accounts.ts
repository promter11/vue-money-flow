export type Account = "accounts" | "savings" | "debts" | "finances";

export type AccountDialog = "icon" | "upsert" | "remove";

export interface IAccount {
  _id: string;
  balance: number;
  currency: number;
  description: string;
  icon: {
    color: string;
    component: string;
  };
  name: string;
  type: number;
}

export interface IAccountTotal {
  assets: number;
  currency: number;
  key: string;
  liabilities: number;
}

export interface IAccountData {
  accounts: IAccount[];
  finances: IAccountTotal[];
}
