<template>
  <section>
    <div class="form-group">
      <button class="btn btn-warning" @click="filter">
        Filter
      </button>
      <button
        v-if="item.hasResponse"
        class="btn btn-primary"
        @click="downloadAsPng"
      >
        Download as PNG
      </button>
      <button
        v-if="chartData"
        class="btn btn-info"
        @click="openThresholdModal = !openThresholdModal"
      >
        Change Threshold
      </button>
      <button
        v-if="isChartClicked === 1"
        class="btn btn-info"
        @click="
          search(
            { url: 'monthlydashboard', payload: item.payload },
            'month',
            selectedMonthlyDashboard.key
          ),
            (isChartClicked = 0)
        "
      >
        Back to Monthly
      </button>
      <button
        v-if="isChartClicked === 2"
        class="btn btn-warning"
        @click="
          search(
            {
              url: 'monthlydashboard/week',
              payload: { ...item.payload, month }
            },
            'week',
            selectedMonthlyDashboard.key
          ),
            (isChartClicked = 1)
        "
      >
        Back to Weekly
      </button>
    </div>
    <b-form-group>
      <b-form-radio-group
        v-model="selectedOption"
        buttons
        button-variant="outline-primary"
        size="md"
        :options="checkOptions"
      />
    </b-form-group>

    <bar-chart
      ref="monthlyChart"
      :chart-data="chartData"
      :options="chartOptions"
    />

    <b-modal v-model="openThresholdModal" title="Change Threshold">
      <div class="col-md-12">
        <div class="form-group">
          <label>Threshold 1: (Orange)</label>
          <input
            v-model="threshold.threshold1"
            type="text"
            class="form-control"
            placeholder="Please enter threshold"
            @change="forceRerender"
          />
        </div>
        <div class="form-group">
          <label>Threshold 2: (Red)</label>
          <input
            v-model="threshold.threshold2"
            type="text"
            class="form-control"
            placeholder="Please enter threshold"
            @change="forceRerender"
          />
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import BarChart from '@/components/Charts/barChart'

export default {
  components: { BarChart },
  props: {
    item: {
      required: true,
      type: Object,
      default: null
    },

    selectedMonthlyDashboard: {
      required: true,
      type: Object,
      default: null
    }
  },

  data: () => ({
    data: null,
    openThresholdModal: false,
    threshold: {
      threshold1: 85,
      threshold2: 65
    },
    chartData: null,
    isChartClicked: 0,
    selectedOption: 'week',
    month: null,
    week: null,
    clickedLabel: null,
    checkOptions: [
      {
        text: 'Week Level Drilldown',
        value: 'week'
      },
      {
        text: 'Day Level Drilldown',
        value: 'day'
      }
    ]
  }),

  computed: {
    chartTitle() {
      const { name } = this.selectedMonthlyDashboard
      return `Monthly Dashboard - ${name} - Time Interval: ${this.$moment(
        this.item.payload.startTime
      ).format('YYYY-MM-DD')} - ${this.$moment(
        this.item.payload.endTime
      ).format('YYYY-MM-DD')}`
    },

    bgColor() {
      const { key } = this.selectedMonthlyDashboard
      return this.data.map(item =>
        item[key] >= this.threshold.threshold1
          ? '#29af39'
          : item[key] >= this.threshold.threshold2
          ? '#ff7e30'
          : '#fa4a4a'
      )
    },

    chartOptions() {
      return {
        responsive: true,
        fill: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        onClick: this.onClick,
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
        },
        title: {
          display: true,
          text: this.chartTitle
        }
      }
    }
  },

  async beforeMount() {
    const format = {
      start: 'YYYY-MM-DD 00:00:00',
      end: 'YYYY-MM-DD 23:59:59'
    }

    this.item.payload.startTime = this.$moment(
      this.item.payload.startTime
    ).format(format.start)

    this.item.payload.endTime = this.$moment(this.item.payload.endTime).format(
      format.end
    )

    await this.search(
      { url: 'monthlydashboard', payload: this.item.payload },
      'month',
      this.selectedMonthlyDashboard.key
    )
  },

  methods: {
    filter() {
      this.$emit('filter', false)
    },

    forceRerender() {
      this.reRenderBetterWay += 1
      this.chartData.datasets[0].backgroundColor = this.bgColor
    },

    downloadAsPng() {
      const base641 = this.$refs.monthlyChart.$refs.canvas.toDataURL(
        'image/png'
      )
      let link = document.createElement('a')
      link.download = 'image'
      link.href = base641
      link.click()
    },
    onClick(point, event) {
      this.clickedLabel = event[0]._model.label

      this.isChartClicked += 1

      if (this.isChartClicked === 1 && this.selectedOption === 'week') {
        this.month = this.clickedLabel
        this.search(
          {
            url: 'monthlydashboard/week',
            payload: { ...this.item.payload, month: this.clickedLabel }
          },
          'week',
          this.selectedMonthlyDashboard.key
        )
      }

      if (this.isChartClicked === 1 && this.selectedOption === 'day') {
        this.month = this.clickedLabel
        this.search(
          {
            url: 'monthlydashboard/monthly-day',
            payload: { ...this.item.payload, month: this.clickedLabel }
          },
          'day',
          this.selectedMonthlyDashboard.key
        )
      }

      if (this.isChartClicked === 2 && this.selectedOption === 'week') {
        this.week = this.clickedLabel
        this.search(
          {
            url: 'monthlydashboard/day',
            payload: {
              ...this.item.payload,
              week: this.clickedLabel,
              month: this.month
            }
          },
          'day',
          this.selectedMonthlyDashboard.key
        )
      }
    },
    async search(item, label, dataField) {
      const { data } = await this.$axios.post(item.url, item.payload)
      this.data = await data
      const backgroundColor = await this.data.map(item =>
        item[dataField] >= 85
          ? '#fa4a4a'
          : item[dataField] >= 65
          ? '#ff7e30'
          : '#29af39'
      )

      this.chartData = await {
        labels: this.data.map(item => item[label]),
        datasets: [
          {
            backgroundColor,
            data: this.data.map(item => item[dataField])
          }
        ]
      }
    }
  }
}
</script>
