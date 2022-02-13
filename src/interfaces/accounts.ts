export type Account = "accounts" | "savings" | "debts" | "finances";

export interface IAccount {
  balance: number;
  currency_id: number;
  description: string | null;
  title: string;
  type: number;
}

export interface IAccountType {
  label: string;
  value: number;
}

export interface IAccountTotal {
  assets: number;
  currency_name: string;
  key: string;
  liabilities: number;
}

export interface IAccountData {
  accounts: IAccount[];
  finances: IAccountTotal[];
}
