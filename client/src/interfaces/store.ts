import { ICommon, IUser } from "@/interfaces";

export interface RootState {}

export interface ApplicationState {
  common: ICommon;
}

export interface UserState {
  user: IUser;
}

export interface AuthState {
  isAuth: boolean;
}
