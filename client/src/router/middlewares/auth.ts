import { NavigationGuardNext } from "vue-router";
import { Store } from "vuex";

import { RootState } from "@/interfaces";
import { FETCH_USER } from "@/store/types/actions";

const authMiddleware = async ({
  store,
  next,
}: {
  next: NavigationGuardNext;
  store: Store<RootState>;
}): Promise<void> => {
  if (!store.getters.isAuth) {
    return next({ name: "Login" });
  }

  await store.dispatch(FETCH_USER);

  return next();
};

export default authMiddleware;
