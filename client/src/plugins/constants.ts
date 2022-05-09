import { App } from "vue";

import * as constants from "@/utils/constants";

export default {
  install: (app: App): void => {
    app.config.globalProperties.$const = (key: keyof typeof constants) => {
      return constants[key];
    };
  },
};
