import { ActionTree } from "vuex";

import { RootState, UserState } from "@/interfaces";
import UserService from "@/services/UserService";
import { FETCH_USER } from "@/store/types/actions";
import { SET_USER } from "@/store/types/mutations";

export const actions: ActionTree<UserState, RootState> = {
  async [FETCH_USER]({ commit }) {
    const user = await UserService.getUser();
    commit(SET_USER, user);
  },
};
