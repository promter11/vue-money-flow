export type Category = "income" | "costs";

export interface ICategory {
  balance: number;
  id: number;
  name: string;
  type: Category;
}
