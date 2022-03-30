<template>
  <h2 class="mb-4">Настройки</h2>
  <a-row>
    <a-col :span="24">
      <a-space size="middle">
        <a-avatar :size="64">
          <template #icon>
            <user-outlined />
          </template>
        </a-avatar>
        <a-button type="primary">Обновить фото</a-button>
        <a-button>Удалить</a-button>
      </a-space>
    </a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="24">
      <a-form
        name="settings-form"
        :model="settings"
        :validate-messages="validations"
      >
        <a-row :gutter="[24]">
          <a-col :xs="24" :sm="12">
            <a-form-item :rules="[{ required: true }]">
              <a-space class="w-full" direction="vertical">
                <a-typography-text strong>Имя</a-typography-text>
                <a-input v-model:value="settings.first_name" />
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item :rules="[{ required: true }]">
              <a-space class="w-full" direction="vertical">
                <a-typography-text strong>Фамилия</a-typography-text>
                <a-input v-model:value="settings.last_name" />
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item :rules="[{ required: true }]">
              <a-space class="w-full" direction="vertical">
                <a-typography-text strong>
                  Адрес электронной почты
                </a-typography-text>
                <a-input v-model:value="settings.email" disabled />
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
        <a-divider class="mt-0" />
        <a-row :gutter="[24]">
          <a-col :xs="24" :sm="12">
            <a-form-item :rules="[{ required: true }]">
              <a-space class="w-full" direction="vertical">
                <a-typography-text strong>Основная валюта</a-typography-text>
                <a-select
                  v-model:value="settings.currency_id"
                  :options="currencies"
                />
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item :rules="[{ required: true }]">
              <a-space class="w-full" direction="vertical">
                <a-typography-text strong>Язык</a-typography-text>
                <a-select
                  v-model:value="settings.language"
                  :options="languages"
                />
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
  <a-divider class="mt-0" />
  <a-row>
    <a-col>
      <a-button
        type="primary"
        :disabled="
          Object.entries(user).toString() ===
          Object.entries(settings).toString()
        "
      >
        Сохранить изменения
      </a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import { ICurrency, IUser } from "@/interfaces";

@Options({
  created() {
    this.settings = { ...this.user };
  },
  name: "Settings",
})
export default class Settings extends Vue {
  @Getter user!: IUser;
  @Getter currencies!: ICurrency[];

  languages = [
    { label: "Русский", value: "ru" },
    { label: "English", value: "en" },
  ];
  settings: IUser = {
    balance: 0,
    currency_id: 2,
    email: "",
    first_name: "",
    language: "ru",
    last_name: "",
  };
  validations = {
    required: "${label} является обязательным полем!",
  };
}
</script>
