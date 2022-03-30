import { MutationTree } from "vuex";

import { ApplicationState, ICurrency } from "@/interfaces";
import { SET_CURRENCIES } from "@/store/types/mutations";

export const mutations: MutationTree<ApplicationState> = {
  async [SET_CURRENCIES](state, payload: ICurrency[]) {
    state.currencies = payload;
  },
};
