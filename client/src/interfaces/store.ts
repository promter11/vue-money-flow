import { IUser } from "@/interfaces";

export interface RootState {}

export interface AuthState {
  isAuth: boolean;
  user: IUser;
}
