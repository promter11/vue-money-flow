import { Currency } from "@/interfaces";

export interface IUser {
  balance: {
    currency: Currency;
    value: number;
  };
  email: string;
  firstName: string;
  lastName: string;
}
