import axios from "axios";

import router from "@/router";
import StorageService from "@/services/StorageService";
import store from "@/store";
import UserModel from "@/store/models/user";
import { REFRESH } from "@/store/types/actions";
import { SET_USER } from "@/store/types/mutations";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = StorageService.getToken();

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (error.response.status === 401 && !config._isRetry) {
      config._isRetry = true;

      try {
        await store.dispatch(REFRESH);
      } catch (e) {
        await store.commit(SET_USER, UserModel);
        await router.push({ name: "Login" });
      }

      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;
