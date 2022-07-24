import { Currency } from "@/interfaces";
import {
  ACCOUNT_COMMON,
  ACCOUNT_DEBT,
  ACCOUNT_SAVING,
} from "@/utils/constants";

export type Account =
  | typeof ACCOUNT_COMMON
  | typeof ACCOUNT_DEBT
  | typeof ACCOUNT_SAVING;

export type AccountDialog = "icon" | "upsert" | "delete";

export interface IAccount {
  _id: string;
  balance: {
    currency: Currency;
    value: number;
  };
  description: string;
  icon: {
    color: string;
    component: string;
  };
  name: string;
  type: Account;
}

export interface IAccountTotal {
  assets: number;
  currency: Currency;
  key: string;
  liabilities: number;
}
