<template>
  <a-layout>
    <a-layout-content>
      <a-row align="middle" class="min-h-screen p-4" justify="center">
        <a-col :xs="24" :sm="16" :lg="12" :xl="8" :xxl="6" :xxxl="4">
          <a-space size="middle" class="w-full" direction="vertical">
            <a-card class="border-lg" :bordered="false">
              <a-typography-title :level="2">Авторизация</a-typography-title>
              <a-form
                name="login-form"
                class="mt-6"
                autocomplete="off"
                :model="form"
                @submit="submit"
              >
                <a-form-item>
                  <a-input v-model:value="form.email" placeholder="E-mail">
                    <template #prefix>
                      <user-outlined class="mr-2 opacity-25" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input-password
                    v-model:value="form.password"
                    placeholder="Пароль"
                  >
                    <template #prefix>
                      <lock-outlined class="mr-2 opacity-25" />
                    </template>
                  </a-input-password>
                </a-form-item>
                <a-form-item class="mb-0">
                  <a-button
                    type="primary"
                    html-type="submit"
                    :disabled="!form.email || !form.password"
                  >
                    Войти
                  </a-button>
                </a-form-item>
              </a-form>
            </a-card>
            <a-typography-paragraph class="text-center">
              <a-typography-text type="secondary">
                Нет учетной записи?
              </a-typography-text>
              <a-typography-text strong>
                <router-link to="/signup">Создать</router-link>
              </a-typography-text>
            </a-typography-paragraph>
          </a-space>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

import store from "@/store";
import { FETCH_USER, LOGIN } from "@/store/types/actions";

@Options({
  name: "Login",
})
export default class Login extends Vue {
  form = {
    email: "qwerty@onlinesup.com",
    password: "qwerty",
  };

  private async submit() {
    await store.dispatch(LOGIN, this.form);
    await store.dispatch(FETCH_USER);
    await this.$router.push({ name: "Dashboard" });
  }
}
</script>
