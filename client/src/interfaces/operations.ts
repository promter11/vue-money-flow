export interface IOperation {
  _id: string;
  date: DateTimeString;
  items: {
    balance: number;
    category: number;
    currency: number;
    type: number;
  }[];
}
