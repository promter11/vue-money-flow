import { GetterTree } from "vuex";

import { ApplicationState, RootState } from "@/interfaces";

export const getters: GetterTree<ApplicationState, RootState> = {
  currencies(state) {
    return state.currencies;
  },
};
