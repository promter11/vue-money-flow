import { AuthState } from "@/interfaces";
import UserModel from "@/store/models/user";

export const state: AuthState = {
  isAuth: false,
  user: UserModel,
};
