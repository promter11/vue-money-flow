import { App } from "vue";

const constants = {
  ACCOUNT_COMMON: 1,
  ACCOUNT_DEBT: 2,
  ACCOUNT_SAVING: 3,
  CATEGORY_COSTS: 2,
  CATEGORY_INCOME: 1,
};

export default {
  install: (app: App): void => {
    app.config.globalProperties.$const = (key: keyof typeof constants) => {
      return constants[key];
    };
  },
};
