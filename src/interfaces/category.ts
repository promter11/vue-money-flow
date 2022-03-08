export type Category = "income" | "costs";

export type CategoryDialog = "color" | "icon" | "upsert" | "remove";

export interface ICategory {
  balance: number;
  color: string;
  icon: string;
  id: number;
  name: string;
  type: number;
}

export interface ICategoryType {
  label: string;
  value: number;
}
