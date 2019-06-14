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
      :options="changeChartOptions"
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
  },
  computed: {
    changeChartOptions() {
      return {
        maintainAspectRatio: false,

        plugins: {
          datalabels: {
            color: function(context) {
              return context.active ? 'white' : context.dataset.backgroundColor
            },
            anchor: 'center',
            align: 'center',
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                min: -100,
                max: 100,
                stepSize: 10
              }
            }
          ]
        }
      }
    }
  }
}
</script>
