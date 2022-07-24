import { Category, Currency } from "@/interfaces";

export interface IOperation {
  _id: string;
  date: Date;
  items: {
    balance: {
      currency: Currency;
      value: number;
    };
    category: Category;
  }[];
}
