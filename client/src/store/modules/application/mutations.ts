import { MutationTree } from "vuex";

import { ApplicationState, ICommon } from "@/interfaces";
import { SET_COMMON_INFO } from "@/store/types/mutations";

export const mutations: MutationTree<ApplicationState> = {
  async [SET_COMMON_INFO](state, payload: ICommon) {
    state.common = payload;
  },
};
