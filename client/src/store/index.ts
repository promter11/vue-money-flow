import { Store, StoreOptions } from "vuex";

import { RootState } from "@/interfaces";
import { auth } from "@/store/modules";

const store: StoreOptions<RootState> = {
  modules: {
    auth,
  },
};

export default new Store<RootState>(store);
