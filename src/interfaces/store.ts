import { ICurrency, IUser } from "@/interfaces";

export interface RootState {}

export interface ApplicationState {
  currencies: ICurrency[];
}

export interface UserState {
  user: IUser;
}
