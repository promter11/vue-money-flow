export type Category = "income" | "costs";

export type CategoryDialog = "color" | "icon" | "upsert" | "remove";

export interface ICategory {
  _id: string;
  balance: number;
  color: string;
  icon: string;
  name: string;
  type: number;
}
