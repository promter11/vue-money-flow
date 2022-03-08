<template>
  <a-space size="middle" class="w-full" direction="vertical">
    <a-row>
      <a-col :span="24">
        <h2 class="mb-0">Обзор</h2>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-radio-group v-model:value="radio">
          <a-radio-button value="costs">Расходы</a-radio-button>
          <a-radio-button value="income">Доходы</a-radio-button>
        </a-radio-group>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-statistic
          title="Баланс"
          :value="`${
            (currencies.find(({ value }) => value === user.currency_id) ?? {})
              .sign
          } ${formatNumber(user.balance)}`"
        />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <review-chart />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        <a-card size="small" title="День (сред.)">
          <a-typography-text>$ 167,02</a-typography-text>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card size="small" title="Неделя (сред.)">
          <a-typography-text>$ 1 169,14</a-typography-text>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card size="small" title="Месяц (сред.)">
          <a-typography-text>$ 4 927,09</a-typography-text>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts">
import { Getter } from "s-vuex-class";
import { Options, Vue } from "vue-property-decorator";

import ReviewChart from "@/components/ReviewChart.vue";
import { ICurrency, IUser } from "@/interfaces";
import { formatNumber } from "@/utils/format";

@Options({
  components: { ReviewChart },
  methods: { formatNumber },
  name: "Review",
})
export default class Review extends Vue {
  @Getter user!: IUser;
  @Getter currencies!: ICurrency[];

  radio = "costs";
}
</script>
