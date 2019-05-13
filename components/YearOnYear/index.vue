<template>
  <section>
    <bar-chart
      v-if="data.yoyChart"
      ref="yoyChart"
      :chart-data="data.yoyChart.data"
      :options="data.yoyChart.options"
    />

    <bar-chart
      v-if="data.yoyChangeChart"
      ref="yoyChartChange"
      :chart-data="data.yoyChangeChart.data"
      :options="data.yoyChangeChart.options"
    />
  </section>
</template>
<script>
import BarChart from '@/components/Charts/barChart'
export default {
  components: {
    BarChart
  },
  props: {
    data: {
      type: Object,
      default: null,
      requured: true
    }
  }
}
</script>
