import { ActionTree } from "vuex";

import { AuthState, RootState } from "@/interfaces";
import AuthService from "@/services/AuthService";
import StorageService from "@/services/StorageService";
import { LOGIN, LOGOUT, REFRESH } from "@/store/types/actions";

export const actions: ActionTree<AuthState, RootState> = {
  async [LOGIN](context, payload: { email: string; password: string }) {
    const { data } = await AuthService.login(payload);
    StorageService.setToken(data.accessToken);
  },
  async [LOGOUT]() {
    await AuthService.logout();
    StorageService.removeToken();
  },
  async [REFRESH]() {
    const { data } = await AuthService.refresh();
    StorageService.setToken(data.accessToken);
  },
};
