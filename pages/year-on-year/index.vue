<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Year On Year" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div v-if="!hasResponse" class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Year On Year List</label>
                  <select v-model="selectedYoy" class="form-control">
                    <option v-for="y in yoyList" :key="y.id" :value="y">
                      {{ y.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  v-for="f in filterTypes"
                  :key="f.id"
                  class="custom-control custom-radio"
                >
                  <input
                    :id="f.id"
                    v-model="pickedFilterType"
                    :value="f.id"
                    type="radio"
                    :name="f.id"
                    class="custom-control-input"
                    @change="setFilterType(f.id)"
                  />
                  <label class="custom-control-label" :for="f.id">{{
                    f.name
                  }}</label>
                </div>
              </div>
            </div>

            <report-filter
              v-if="!hasResponse"
              :show-footer="false"
              :is-searchable="false"
              :item.sync="item"
            />

            <save-filter
              v-if="!hasResponse"
              class="mb-2"
              :item="{ callTypes: item.callTypes, queues: item.queues }"
              @updateFilter="
                item.callTypes = $event.callTypes
                item.queues = $event.queues
              "
            />

            <div class="form-group">
              <button
                v-if="!hasResponse"
                class="btn btn-primary mr-1"
                @click="search"
              >
                Search
              </button>
              <button
                v-if="hasResponse"
                class="btn btn-warning"
                @click="hasResponse = !hasResponse"
              >
                Filter
              </button>
              <button
                v-if="hasResponse"
                class="btn btn-primary ml-1"
                @click="downloadAsPng"
              >
                Download as PNG
              </button>
            </div>
            <component
              :is="yoyComponent"
              v-if="hasResponse"
              ref="chartRef"
              :data="yoyCharts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ReportFilter from '@/components/StockReportFilter'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
import SaveFilter from '@/components/SaveFilter'

export default {
  layout: 'authenticated',
  components: {
    ReportFilter,
    PageTitle,
    ChartJsPluginDataLabels,
    SaveFilter
  },
  data: () => ({
    gradient: null,
    pickedFilterType: 1,
    item: {
      callTypes: []
    },
    filterTypes: [
      {
        id: 1,
        name: 'Call Types',
        key: 'callTypes'
      },
      {
        id: 2,
        name: 'Precision Queue',
        key: 'queues'
      }
    ],
    hasResponse: false,
    yoyDetail: null,
    yoyCharts: null,
    selectedYoy: null,
    yoyComponent: null,
    yoyList: [
      {
        id: 1,
        name: 'Calls Received',
        componentName: 'CallsReceived',
        key: 'calls-received'
      },
      {
        id: 2,
        name: 'Calls Answered',
        componentName: 'CallAbandonRate',
        key: 'calls-answered'
      },
      {
        id: 3,
        name: 'Calls Abandoned',
        componentName: 'CallsAbandoned',
        key: 'calls-abandoned'
      },
      {
        id: 4,
        name: 'Average Handle Time',
        componentName: 'AverageHandleTime',
        key: 'average-handled-time'
      },
      {
        id: 5,
        name: 'Max Wait Time',
        componentName: 'MaxWaitTime',
        key: 'max-wait-time'
      },
      {
        id: 6,
        name: 'Service Level',
        componentName: 'SlaAnswerPercentage',
        key: 'sla-answer-percentage'
      },
      {
        id: 7,
        name: 'Answer Rate',
        componentName: 'CallsAnswerRate',
        key: 'calls-answer-rate'
      },
      {
        id: 8,
        name: 'Abandon Rate',
        componentName: 'CallsAbandonRate',
        key: 'calls-abandon-rate'
      },
      {
        id: 9,
        name: 'Percent Distribution Calls Received',
        componentName: 'PercentDistributionCallsReceived',
        key: 'percent-distribution-calls-received'
      },
      {
        id: 10,
        name: 'Percent Distribution AHT',
        componentName: 'PercentDistributionAht',
        key: 'percent-distribution-aht'
      },
      {
        id: 11,
        name: 'Average Speed Of Answer',
        componentName: 'AverageSpeedOfAnswer',
        key: 'average-speed-answered'
      }
    ],
    title: 'Comstice Quartz - Year On Year'
  }),

  head() {
    return {
      title: this.title
    }
  },

  computed: {
    yearRange() {
      const subtractYear = this.$moment().subtract(5, 'years')
      const range = this.$moment.range(subtractYear, new Date())

      const years = Array.from(range.by('year'))

      return years.map(m => m.format('YYYY'))
    }
  },

  beforeMount() {
    this.selectedYoy = this.yoyList[0]
    this.item.startYear = this.yearRange[this.yearRange.length - 2]
    this.item.endYear = this.yearRange[this.yearRange.length - 1]
  },

  methods: {
    async setFilterType(id) {
      console.log(id)
      if (id === 1) {
        delete this.item.queues
        this.item = await { ...this.item, ...{ callTypes: [] } }
      }
      if (id === 2) {
        delete this.item.callTypes
        this.item = await { ...this.item, ...{ queues: [] } }
      }
      console.log(this.item)
    },
    downloadAsPng() {
      const base641 = this.$refs.chartRef.$refs.yoyChart.$refs.canvas.toDataURL(
        'image/png'
      )
      let link = document.createElement('a')
      link.download = 'image'
      link.href = base641
      link.click()

      const base642 = this.$refs.chartRef.$refs.yoyChartChange.$refs.canvas.toDataURL(
        'image/png'
      )
      let link1 = document.createElement('a')
      link1.download = 'image'
      link1.href = base642
      link1.click()
    },

    getYoYList(payload) {
      const { type, team } = payload
      console.log(payload)
      let labels = [
        { name: 'January', id: 1 },
        { name: 'February', id: 2 },
        { name: 'March', id: 3 },
        { name: 'April', id: 4 },
        { name: 'May', id: 5 },
        { name: 'June', id: 6 },
        { name: 'July', id: 7 },
        { name: 'August', id: 8 },
        { name: 'September', id: 9 },
        { name: 'October', id: 10 },
        { name: 'November', id: 11 },
        { name: 'December', id: 12 }
      ]
      let charts = {
        yoyChart: {
          data: {
            datasets: [],
            labels: labels.map(label => label.name)
          },

          options: {
            title: {
              display: true,
              text: this.selectedYoy.name
            },
            maintainAspectRatio: false,
            plugins: {
              datalabels: {
                anchor: 'end',
                align: 'end',
                display: function(context) {
                  return context.dataset.data[context.dataIndex] >= 1
                },
                font: {
                  weight: 'bold'
                }
              }
            },
            elements: {
              line: {
                fill: false
              }
            },
            scales: {
              yAxes: [
                {
                  id: 'csqval-y-axis',
                  type: 'linear'
                },
                {
                  id: 'csqchange-y-axis',
                  position: 'right',
                  type: 'linear',
                  display: false
                }
              ]
            }
          }
        },
        yoyChangeChart: {
          data: {
            datasets: [],
            labels: labels.map(label => label.name)
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              datalabels: {
                /* color: function(context) {
                  return context.active
                    ? 'white'
                    : context.dataset.backgroundColor
                }, */
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
      this.yoyDetail.years.forEach(year => {
        let months = year.data.reduce((map, obj) => {
          console.log(months)
          // eslint-disable-next-line
          if (team) {
            if (obj.csq === team) map[obj.month] = parseInt(obj[type]) || null
          } else {
            if (!map[obj.month]) map[obj.month] = 0
            map[obj.month] += parseInt(obj[type]) || null
          }
          return map
        }, {})
        charts.yoyChart.data.datasets.push({
          label: year.year,
          data: labels.map(label => months[label.id]),
          yAxisID: 'csqval-y-axis'
        })
      })
      let datasets = []
      let averageData = []
      let changeData = []
      let colors = ['#fd7e14', '#0acf97', '#ffbc00', '#fa5c7c']
      charts.yoyChart.data.datasets.forEach(set => {
        let setColor = colors.shift()
        set.backgroundColor = setColor
        set.borderColor = setColor
        for (let i in set.data) {
          datasets[i] = datasets[i] || []
          datasets[i].push(set.data[i])
        }
      })

      for (let i in datasets) {
        let set = datasets[i]
        let avg = Math.ceil(set.reduce((pre, next) => pre + next) / set.length)
        averageData.push(avg)
        let thisYear = set[set.length - 1]
        let lastYear = set[set.length - 2]
        let diff = Math.ceil(((thisYear - lastYear) / lastYear) * 100)
        console.log(diff)
        let setDiffToZero = diff === -100 ? 0 : diff
        changeData.push(setDiffToZero)
      }
      charts.yoyChart.data.datasets.push({
        datalabels: {
          display: false
        },
        label: 'Average Handle Time',
        data: averageData,
        type: 'line',
        fill: 0,
        lineTension: 0,
        backgroundColor: '#f00000',
        borderColor: '#f00000'
      })
      charts.yoyChangeChart.data.datasets.push({
        label: 'Change Percentage',
        data: changeData,
        datalabels: {
          anchor: 'center',
          align: 'center'
        },
        type: 'bar',
        backgroundColor: '#727cf5',
        borderColor: '#727cf5'
      })
      /* charts.yoyChangeChart.options.scales.yAxes[0].ticks.max =
        Math.max[changeData]

      charts.yoyChangeChart.options.scales.yAxes[0].ticks.min =
        Math.min[changeData] */

      return charts
    },

    async search() {
      this.hasResponse = await false
      const payload = {
        url: this.selectedYoy.key,
        data: this.item
      }
      const { data } = await this.$axios.post(
        `/yearly-reports/${payload.url}`,
        payload.data
      )
      this.hasResponse = await true
      this.yoyDetail = await data

      this.yoyCharts = await this.getYoYList({ type: this.selectedYoy.key })

      this.yoyComponent = async () => await import(`@/components/YearOnYear`)
    }
  }
}
</script>
