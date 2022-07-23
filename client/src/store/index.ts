import Vuex, { StoreOptions } from "vuex";

import { RootState } from "@/interfaces";
import { application, auth, user } from "@/store/modules";

const store: StoreOptions<RootState> = {
  modules: {
    application,
    auth,
    user,
  },
};

export default new Vuex.Store<RootState>(store);
