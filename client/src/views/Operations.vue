<template>
  <h2>Операции</h2>
  <a-collapse>
    <a-collapse-panel
      v-for="operation in operations"
      :key="operation._id"
      :header="
        new Intl.DateTimeFormat('ru-RU', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(operation.date)
      "
    >
      <a-table
        bordered
        :columns="columns"
        :pagination="false"
        :data-source="operation.items"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'balance'">
            <a-typography-text
              :type="
                record.type === $const('CATEGORY_INCOME') ? `success` : `danger`
              "
            >
              <span>
                {{ record.type === $const("CATEGORY_INCOME") ? "+" : "-" }}
              </span>
              <span>{{ formatNumber(record.balance) }}</span>
            </a-typography-text>
          </template>
        </template>
      </a-table>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

import { IOperation } from "@/interfaces";
import OperationsService from "@/services/OperationsService";
import { formatNumber } from "@/utils/format";

@Options({
  async created() {
    await this.fetchOperations();
  },
  methods: { formatNumber },
  name: "Operations",
})
export default class Operations extends Vue {
  columns = [
    {
      dataIndex: "category",
      title: "Категория",
    },
    {
      dataIndex: "balance",
      title: "Баланс",
    },
  ];
  operations: IOperation[] = [];

  private async fetchOperations() {
    const { data } = await OperationsService.fetchOperations();
    this.operations = data;
  }
}
</script>
