import { MutationTree } from "vuex";

import { AuthState, IUser } from "@/interfaces";
import { SET_USER } from "@/store/types/mutations";

export const mutations: MutationTree<AuthState> = {
  [SET_USER](state, user: IUser) {
    state.user = user;
  },
};
