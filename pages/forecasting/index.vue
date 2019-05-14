<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Forecasting" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <b-tabs class="nav-variant">
          <b-tab class="p-3" title="Import Csv">
            <button class="btn btn-primary" @click="$refs.file.click()">
              <i class="mdi mdi-import"></i>
              Import CSV
            </button>
            <a
              class="btn btn-primary"
              target="_blank"
              href="amwater-example.csv"
            >
              Download CSV Example
            </a>
            {{ file && file.evt }}
            <input ref="file" class="d-none" type="file" @input="importCSV" />
            <div v-if="chartData" class="form-inline mt-3">
              <div class="form-group mr-3">
                <span class="font-weight-bold mx-sm-3"
                  >{{ file && file.name }}
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Forecast Title"
                />
              </div>
              <button class="btn btn-success">
                <i class="mdi mdi-content-save"></i> Save Forecast
              </button>
              <button class="btn btn-primary ml-1" @click="downloadAsPng">
                <i class="mdi mdi-file-pdf"></i> Export PNG
              </button>
            </div>

            <div v-if="chartData" class="form-group mt-3">
              <label>Chart Types</label>
              <select
                v-model="selectedChartType"
                class="form-control"
                @change="changeChartOptions"
              >
                <option v-for="c in chartTypes" :key="c.id" :value="c.id">{{
                  c.name
                }}</option>
              </select>
            </div>
            <bar-chart
              v-if="chartData"
              ref="chart"
              :chart-data="chartData"
              :options="chartOptions"
            />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'

import BarChart from '@/components/Charts/barChart'
import Papa from 'papaparse'
import _ from 'lodash'

export default {
  layout: 'authenticated',
  components: {
    PageTitle,
    BarChart
  },
  data: () => ({
    file: null,
    selectedChartType: 1,
    chartOptions: {
      responsive: true,
      fill: false,
      maintainAspectRatio: false,
      tooltips: {
        position: 'nearest'
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true
            }
          }
        ],
        yAxes: [
          {
            position: 'bottom',
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    },
    chartTypes: [
      {
        id: 1,
        name: 'Bar',
        componentName: 'barChart'
      },
      {
        id: 2,
        name: 'Stacked Bar Chart',
        componentName: 'stackedBar'
      }
    ],
    chartData: null
  }),

  methods: {
    changeChartOptions() {
      if (this.selectedChartType === 1) {
        this.chartOptions.scales = {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true
              }
            }
          ],
          yAxes: [
            {
              position: 'bottom',
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
      if (this.selectedChartType === 2) {
        this.chartOptions.scales = {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    },
    downloadAsPng() {
      const base641 = this.$refs.chart.$refs.canvas.toDataURL('image/png')
      let link = document.createElement('a')
      link.download = 'image'
      link.href = base641
      link.click()
    },

    getRandomColor() {
      var letters = '0123456789ABCDEF'.split('')
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },

    importCSV(evt) {
      console.log(evt)
      this.file = null
      this.file = evt.target.files[0]
      console.log(this.file)
      Papa.parse(this.file, {
        header: true,
        skipEmptyLines: true,
        complete: results => {
          var first_item = _.get(results.data, '[0]', {})

          var column_labels = _.map(
            _.omit(
              first_item,
              Object.keys(first_item)[Object.keys(first_item).length - 1]
            ),
            function(val, key) {
              if (key != 'OS') return key
            }
          )

          var datasets = _.map(results.data, item => {
            // use the 'os' column as our label
            var item_label = _.get(
              item,
              Object.keys(first_item)[Object.keys(first_item).length - 1],
              'Not Found'
            )

            // create an array of number values from each item's JSON object
            var item_values = _.map(
              _.omit(
                item,
                Object.keys(first_item)[Object.keys(first_item).length - 1]
              ),
              function(val) {
                return parseFloat(val)
              }
            )

            return {
              label: item_label,
              data: item_values,
              backgroundColor: this.getRandomColor()
            }
          })

          this.chartData = {
            labels: column_labels,
            datasets: datasets
          }
        }
      })
    }
  }
}
</script>
