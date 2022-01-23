<template>
  <a-table
    bordered
    :columns="columns"
    :pagination="false"
    :data-source="items.data"
  >
    <template #summary>
      <a-table-summary-row>
        <a-table-summary-cell>
          <a-typography-text strong>Итого</a-typography-text>
        </a-table-summary-cell>
        <a-table-summary-cell>
          <a-typography-text type="success">
            {{ items.total.assets }}
          </a-typography-text>
        </a-table-summary-cell>
        <a-table-summary-cell>
          <a-typography-text type="danger">
            {{ items.total.liability }}
          </a-typography-text>
        </a-table-summary-cell>
      </a-table-summary-row>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

import { IAccountData } from "@/interfaces";

@Options({
  name: "AccountsTable",
})
export default class AccountsTable extends Vue {
  @Prop({ required: true }) items!: IAccountData["finances"];

  columns = [
    {
      dataIndex: "currency_name",
      title: "Валюта",
    },
    {
      dataIndex: "assets",
      title: "Активы",
    },
    {
      dataIndex: "liability",
      title: "Пассивы",
    },
  ];
}
</script>
