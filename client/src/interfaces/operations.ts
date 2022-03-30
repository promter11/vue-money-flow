export interface IOperation {
  date: DateTimeString;
  items: {
    balance: number;
    category_name: string;
    currency_id: number;
    type: number;
  }[];
}
