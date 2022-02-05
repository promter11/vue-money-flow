import Vuex, { StoreOptions } from "vuex";

import { RootState } from "@/interfaces";
import { application } from "@/store/modules/application";

const store: StoreOptions<RootState> = {
  modules: {
    application,
  },
};

export default new Vuex.Store<RootState>(store);
