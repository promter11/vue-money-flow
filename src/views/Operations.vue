<template>
  <h2 class="mb-4">Операции</h2>
  <a-collapse>
    <a-collapse-panel
      v-for="(operation, index) in operations"
      :key="index"
      :header="
        new Date(operation.date).toLocaleDateString('ru-RU', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
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
                record.type === $const('CATEGORY_INCOME') ? 'success' : 'danger'
              "
            >
              <span>
                {{ record.type === $const("CATEGORY_INCOME") ? "+" : "-" }}
              </span>
              <span>{{ record.balance }}</span>
              <span class="pl-1">
                {{
                  (
                    currencies.find(
                      ({ value }) => value === record.currency_id
                    ) ?? {}
                  ).sign
                }}
              </span>
            </a-typography-text>
          </template>
        </template>
      </a-table>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import { ICurrency, IOperation } from "@/interfaces";
import OperationsService from "@/services/OperationsService";

@Options({
  async created() {
    this.operations = await OperationsService.getOperations();
  },
  name: "Operations",
})
export default class Operations extends Vue {
  @Getter currencies!: ICurrency[];

  columns = [
    {
      dataIndex: "category_name",
      title: "Категория",
    },
    {
      dataIndex: "balance",
      title: "Баланс",
    },
  ];
  operations: IOperation[] = [];
}
</script>
