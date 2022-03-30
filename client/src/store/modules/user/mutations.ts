import { MutationTree } from "vuex";

import { IUser, UserState } from "@/interfaces";
import { SET_USER } from "@/store/types/mutations";

export const mutations: MutationTree<UserState> = {
  async [SET_USER](state, payload: IUser) {
    state.user = payload;
  },
};
