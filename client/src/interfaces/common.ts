import { Category } from "@/interfaces";
import { CURRENCIES } from "@/utils/constants";

export type Currency = keyof typeof CURRENCIES;

export interface IAccountType {
  _id: string;
  label: string;
  value: Account;
}

export interface ICategoryType {
  _id: string;
  label: string;
  value: Category;
}

export interface ICurrency {
  _id: string;
  label: string;
  sign: string;
  value: Currency;
}
