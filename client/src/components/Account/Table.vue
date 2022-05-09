<template>
  <a-table bordered :columns="columns" :pagination="false" :data-source="total">
    <template #summary>
      <a-table-summary-row>
        <a-table-summary-cell>
          <a-typography-text strong>Итого</a-typography-text>
        </a-table-summary-cell>
        <a-table-summary-cell>
          <a-typography-text type="success">
            {{ getAmount("assets") }}
          </a-typography-text>
        </a-table-summary-cell>
        <a-table-summary-cell>
          <a-typography-text type="danger">
            {{ getAmount("liabilities") }}
          </a-typography-text>
        </a-table-summary-cell>
      </a-table-summary-row>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

import { IAccount, IAccountTotal, ICurrency } from "@/interfaces";

@Options({
  name: "AccountTable",
})
export default class AccountTable extends Vue {
  @Prop({ required: true }) accounts!: IAccount[];
  @Prop({ required: true }) currencies!: ICurrency[];

  columns = [
    {
      dataIndex: "currency",
      title: "Валюта",
    },
    {
      dataIndex: "assets",
      title: "Активы",
    },
    {
      dataIndex: "liabilities",
      title: "Пассивы",
    },
  ];

  private get total(): IAccountTotal[] {
    return (
      Object.entries(
        this.accounts.reduce(
          (acc, account) => ({
            ...acc,
            [account.currency]:
              account.currency in acc
                ? [...acc[account.currency], account]
                : [account],
          }),
          {} as any
        )
      ) as any
    ).reduce(
      (acc: any, [currency, items]: any) => [
        ...acc,
        {
          assets: items.reduce(
            (acc: any, item: any) =>
              item.balance > 0 ? acc + item.balance : acc,
            0
          ),
          currency: this.currencies.find(({ value }) => currency == value)
            ?.label,
          liabilities: -items.reduce(
            (acc: any, item: any) =>
              item.balance < 0 ? acc + item.balance : acc,
            0
          ),
        },
      ],
      []
    ) as any;
  }

  private getAmount(key: "assets" | "liabilities") {
    return this.total.reduce((acc, item) => acc + item[key], 0);
  }
}
</script>
