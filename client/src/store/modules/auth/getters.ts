import { GetterTree } from "vuex";

import { AuthState, RootState } from "@/interfaces";
import StorageService from "@/services/StorageService";

export const getters: GetterTree<AuthState, RootState> = {
  isAuth() {
    return StorageService.getToken();
  },

  user(state) {
    return state.user;
  },
};
