import { Currency } from "@/interfaces";
import { CATEGORY_COSTS, CATEGORY_INCOME } from "@/utils/constants";

export type Category = typeof CATEGORY_INCOME | typeof CATEGORY_COSTS;

export type CategoryDialog = "color" | "icon" | "upsert" | "delete";

export interface ICategory {
  _id: string;
  balance: {
    currency: Currency;
    value: number;
  };
  color: string;
  icon: string;
  name: string;
  type: Category;
}
