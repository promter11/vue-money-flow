export type AccountDialog = "upsert" | "remove";

export interface IAccount {
  balance: number;
  currency_id: number;
  description: string | null;
  title: string;
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

export interface ICurrency {
  label: string;
  sign: string;
  value: number;
}
