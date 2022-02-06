import { ActionTree } from "vuex";

import { ApplicationState, RootState } from "@/interfaces";
import ApplicationService from "@/services/ApplicationService";
import { FETCH_CURRENCIES } from "@/store/types/actions";
import { SET_CURRENCIES } from "@/store/types/mutations";

export const actions: ActionTree<ApplicationState, RootState> = {
  async [FETCH_CURRENCIES]({ commit }) {
    const currencies = await ApplicationService.getCurrencies();
    commit(SET_CURRENCIES, currencies);
  },
};
