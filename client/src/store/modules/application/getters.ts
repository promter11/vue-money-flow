import { GetterTree } from "vuex";

import { ApplicationState, RootState } from "@/interfaces";

export const getters: GetterTree<ApplicationState, RootState> = {
  accountTypes(state) {
    return state.common.accountTypes;
  },

  categoryTypes(state) {
    return state.common.categoryTypes;
  },

  currencies(state) {
    return state.common.currencies;
  },
};
