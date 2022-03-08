<template>
  <bar-chart :chartData="chartData" />
</template>

<script lang="ts">
import { Chart, registerables } from "chart.js";
import { BarChart } from "vue-chart-3";
import { Options, Vue } from "vue-property-decorator";

Chart.register(...registerables);

@Options({
  components: { BarChart },
  name: "ReviewChart",
})
export default class ReviewChart extends Vue {
  chartData = {
    datasets: [
      {
        backgroundColor: "pink",
        data: [200, 30, 0],
        label: "Транспорт",
        stack: "0",
      },
      {
        backgroundColor: "purple",
        data: [10, 0, 0],
        label: "Досуг",
        stack: "0",
      },
      {
        backgroundColor: "indigo",
        data: [0, 0, 100],
        label: "Недвижимость",
        stack: "0",
      },
    ],
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  };
}
</script>
