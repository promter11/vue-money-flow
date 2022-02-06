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
  liability: number;
}

export interface IAccountData {
  accounts: IAccount[];
  debts: IAccount[];
  finances: {
    data: IAccountTotal[];
    total: {
      assets: number;
      liability: number;
    };
  };
  savings: IAccount[];
}
