import {
  ACCOUNT_COMMON,
  ACCOUNT_DEBT,
  ACCOUNT_SAVING,
  CURRENCY_EUR,
  CURRENCY_GBP,
  CURRENCY_RUB,
  CURRENCY_USD,
  CURRENCY_YEN,
} from "@/utils/constants";

export type Account = "account" | "saving" | "debt" | "total";

export type AccountDialog = "icon" | "upsert" | "delete";

export interface IAccount {
  _id: string;
  balance: number;
  currency:
    | typeof CURRENCY_GBP
    | typeof CURRENCY_USD
    | typeof CURRENCY_EUR
    | typeof CURRENCY_RUB
    | typeof CURRENCY_YEN;
  description: string;
  icon: {
    color: string;
    component: string;
  };
  name: string;
  type: typeof ACCOUNT_COMMON | typeof ACCOUNT_DEBT | typeof ACCOUNT_SAVING;
}

export interface IAccountTotal {
  assets: number;
  currency: number;
  key: string;
  liabilities: number;
}
