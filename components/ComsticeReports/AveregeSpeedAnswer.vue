<template>
  <section>
    <h4 class="header-title mt-0 mb-3">{{ title }}</h4>
    <report-filter
      v-if="!hasResponse"
      :show-footer="false"
      :is-searchable="false"
      :url="'/teamnotreadypercentage'"
      :item="item"
    />
    <buble-chart :chart-data="chartData" :options="chartOptions" />
  </section>
</template>

<script>
import BubleChart from '@/components/Charts/BubleChart'
import ReportFilter from '@/components/StockReportFilter'

import dateRanges from '@/utils/dateRanges'

export default {
  components: {
    ReportFilter,
    BubleChart
  },

  data: () => ({
    hasResponse: false,
    item: {
      callTypes: [],
      startTime: dateRanges(1, true, false),
      endTime: dateRanges(1, false, true)
    },
    chartData: null
  }),

  computed: {
    title() {
      const route = this.$route.params.name
      const title = route.replace(/-/g, ' ')
      return title
    },

    chartOptions() {
      return {
        responsive: true,
        fill: false,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Average Speed Answer'
        },
        tooltips: {
          mode: 'point'
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Seconds'
              }
            }
          ],
          xAxes: [
            {
              type: 'time',
              /* ticks: {
                maxRotation: 90,
                minRotation: 80
              }, */
              time: {
                parser: 'HH:mm',
                tooltipFormat: 'HH:mm',
                // unit: 'hour',
                // stepSize: 60,
                displayFormats: {
                  hour: 'HH:mm'
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Time Interval'
              }
            }
          ]
        }
      }
    }
  },

  mounted() {
    this.chartData = {
      datasets: [
        {
          label: 'Queue 1',
          backgroundColor: 'rgba(114,124,245,.2)',
          borderColor: 'rgba(114,124,245,1)',
          data: [
            {
              x: new Date(2012, 1, 1, 12, 0),
              y: 150,
              r: 20
            },
            {
              x: new Date(2012, 1, 1, 13, 0),
              y: 110,
              r: 30
            },
            {
              x: new Date(2012, 1, 1, 14, 0),
              y: 83,
              r: 14
            }
          ]
        },
        {
          label: 'Queue 2',
          backgroundColor: 'rgba(10,207,151,.2)',
          borderColor: 'rgba(10,207,151,1)',
          data: [
            {
              x: new Date(2012, 1, 1, 12, 0),
              y: 68,
              r: 100
            },
            {
              x: new Date(2012, 1, 1, 13, 0),
              y: 8,
              r: 10
            },
            {
              x: new Date(2012, 1, 1, 14, 0),
              y: 83,
              r: 14
            }
          ]
        },
        {
          label: 'Queue 3',
          backgroundColor: 'rgba(255,188,0,.2)',
          borderColor: 'rgba(255,188,0,1)',
          data: [
            {
              x: new Date(2012, 1, 1, 12, 0),
              y: 28,
              r: 10
            },
            {
              x: new Date(2012, 1, 1, 13, 0),
              y: 83,
              r: 14
            },
            {
              x: new Date(2012, 1, 1, 14, 0),
              y: 83,
              r: 14
            }
          ]
        } /*,
        {
          label: 'Queue 3',
          backgroundColor: 'rgba(255,188,0,.2)',
          borderColor: 'rgba(255,188,0,1)',
          data: [
            {
              x: 20,
              y: 203,
              r: 20
            }
          ]
        },
        {
          label: 'Queue 4',
          backgroundColor: 'rgba(250,92,124,.2)',
          borderColor: 'rgba(250,92,124,1)',
          data: [
            {
              x: 20,
              y: 203,
              r: 20
            }
          ]
        } */
      ]
    }
  }
}
</script>
