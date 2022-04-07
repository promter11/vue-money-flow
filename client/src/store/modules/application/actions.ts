import { ActionTree } from "vuex";

import { ApplicationState, RootState } from "@/interfaces";
import ApplicationService from "@/services/ApplicationService";
import { FETCH_COMMON_INFO } from "@/store/types/actions";
import { SET_COMMON_INFO } from "@/store/types/mutations";

export const actions: ActionTree<ApplicationState, RootState> = {
  async [FETCH_COMMON_INFO]({ commit }) {
    const { data } = await ApplicationService.getCommonInfo();
    commit(SET_COMMON_INFO, data);
  },
};
