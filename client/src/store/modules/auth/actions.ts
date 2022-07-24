import { ActionTree } from "vuex";

import { AuthState, RootState } from "@/interfaces";
import AuthService from "@/services/AuthService";
import StorageService from "@/services/StorageService";
import { FETCH_USER, LOGIN, LOGOUT, REFRESH } from "@/store/types/actions";
import { SET_USER } from "@/store/types/mutations";

export const actions: ActionTree<AuthState, RootState> = {
  async [FETCH_USER]({ commit }) {
    const { data } = await AuthService.me();
    commit(SET_USER, data);
  },
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
