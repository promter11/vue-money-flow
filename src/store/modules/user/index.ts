import { Module } from "vuex";

import { RootState, UserState } from "@/interfaces";
import { actions } from "@/store/modules/user/actions";
import { getters } from "@/store/modules/user/getters";
import { mutations } from "@/store/modules/user/mutations";
import { state } from "@/store/modules/user/state";

export const user: Module<UserState, RootState> = {
  actions,
  getters,
  mutations,
  namespaced: false,
  state,
};
