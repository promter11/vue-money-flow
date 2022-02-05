import { Module } from "vuex";

import { RootState } from "@/interfaces";
import { ApplicationState } from "@/interfaces/store";
import { actions } from "@/store/modules/application/actions";
import { getters } from "@/store/modules/application/getters";
import { mutations } from "@/store/modules/application/mutations";
import { state } from "@/store/modules/application/state";

export const application: Module<ApplicationState, RootState> = {
  actions,
  getters,
  mutations,
  namespaced: false,
  state,
};
