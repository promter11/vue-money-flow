import { GetterTree } from "vuex";

import { RootState, UserState } from "@/interfaces";

export const getters: GetterTree<UserState, RootState> = {
  user(state) {
    return state.user;
  },
};
