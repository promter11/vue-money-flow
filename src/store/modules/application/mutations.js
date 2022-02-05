import StorageService from "@/services/StorageService";
import { TOGGLE_THEME } from "@/store/types/mutations";
export const mutations = {
    [TOGGLE_THEME](state) {
        StorageService.toggleTheme();
        state.theme = StorageService.getTheme();
    },
};
//# sourceMappingURL=mutations.js.map