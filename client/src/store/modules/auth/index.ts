import { Module } from "vuex";

import { AuthState, RootState } from "@/interfaces";
import { actions } from "@/store/modules/auth/actions";
import { getters } from "@/store/modules/auth/getters";
import { mutations } from "@/store/modules/auth/mutations";
import { state } from "@/store/modules/auth/state";

export const auth: Module<AuthState, RootState> = {
  actions,
  getters,
  mutations,
  namespaced: false,
  state,
};
