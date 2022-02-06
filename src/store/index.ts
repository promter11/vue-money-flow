import Vuex, { StoreOptions } from "vuex";

import { RootState } from "@/interfaces";
import { application } from "@/store/modules/application";
import { user } from "@/store/modules/user";

const store: StoreOptions<RootState> = {
  modules: {
    application,
    user,
  },
};

export default new Vuex.Store<RootState>(store);
