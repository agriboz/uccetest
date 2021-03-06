<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Monthly Dashboard" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div v-if="!hasResponse" class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Monthly Dashboard</label>
                  <select
                    v-model="selectedMonthlyDashboard"
                    class="form-control"
                  >
                    <option
                      v-for="m in monthlyDashboardList"
                      :key="m.id"
                      :value="m"
                      >{{ m.name }}</option
                    >
                  </select>
                </div>
              </div>
            </div>

            <div v-if="!hasResponse" class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6">
                    <label>Start Date</label>
                    <vue-ctk-date-time-picker
                      v-model="item.startTime"
                      only-date
                      no-button-now
                      no-header
                      auto-close
                      label="Select Date"
                      formatted="YYYY-MM-DD"
                      color="#727cf5"
                      enable-button-validate
                    />
                  </div>
                  <div class="col-md-6">
                    <label>End Date</label>
                    <vue-ctk-date-time-picker
                      v-model="item.endTime"
                      only-date
                      no-button-now
                      no-header
                      auto-close
                      label="Select Date"
                      formatted="YYYY-MM-DD"
                      color="#727cf5"
                      enable-button-validate
                    />
                  </div>
                </div>
              </div>
            </div>

            <duallist-box
              v-if="item.callTypes && !hasResponse"
              class="mt-2"
              :base-list="
                optionsCallTypes.hasFilter.length
                  ? optionsCallTypes.hasFilter
                  : optionsCallTypes.baseList
              "
              :selected-list="item.callTypes"
              :title="optionsCallTypes.title"
              @updateSelected="item.callTypes = $event"
              @updateBase="optionsCallTypes.baseList = $event"
            />

            <save-filter
              v-if="!hasResponse"
              class="mt-2 mb-2"
              :item="{ callTypes: item.callTypes }"
              @updateFilter="item.callTypes = $event.callTypes"
            />

            <div v-if="!hasResponse" class="form-group">
              <button class="btn btn-primary" @click="search">Search</button>
            </div>

            <component
              :is="monthlyDashboardComponent"
              v-if="hasResponse"
              :selected-monthly-dashboard="selectedMonthlyDashboard"
              :threshold="threshold"
              :item="{ hasResponse, payload: item }"
              @filter="hasResponse = $event"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

import PageTitle from '@/components/PageTitle'
import ReportFilter from '@/components/StockReportFilter'
import DuallistBox from '@/components/DuallistBox'
import SaveFilter from '@/components/SaveFilter'

export default {
  layout: 'authenticated',
  components: {
    ReportFilter,
    PageTitle,
    DuallistBox,
    SaveFilter
  },
  data: () => ({
    item: {
      callTypes: []
    },
    hasResponse: false,
    monthlyDashboardDetail: null,
    selectedMonthlyDashboard: null,
    monthlyDashboardComponent: null,
    monthlyDashboardList: [
      {
        id: 1,
        name: 'Call Answer Rate',
        componentName: 'CallAnswerRate',
        key: 'calls_answered_rate'
      },
      {
        id: 2,
        name: 'Call Abandon Rate',
        componentName: 'CallAbandonRate',
        key: 'calls_abandoned_rate'
      },
      {
        id: 12,
        name: 'Call Received',
        componentName: 'CallReceived',
        key: 'calls_presented'
      },
      {
        id: 13,
        name: 'Call Answered',
        componentName: 'CallAnswered',
        key: 'calls_answered'
      },
      {
        id: 14,
        name: 'Call Abandoned',
        componentName: 'CallAbandoned',
        key: 'calls_abandoned'
      },
      {
        id: 3,
        name: 'Service Level',
        componentName: 'ServiceLevelRate',
        key: 'service_level_rate'
      },
      {
        id: 4,
        name: 'FTE Count',
        componentName: 'FTECount',
        key: 'service_level_rate'
      },
      {
        id: 6,
        name: 'Avg Handle Time',
        componentName: 'AvgHandleTime',
        key: 'aht'
      },
      {
        id: 9,
        name: 'Max Wait Time',
        componentName: 'MaxWaitTime',
        key: 'maxwaittime'
      },
      {
        id: 10,
        name: 'Max Handle Time',
        componentName: 'MaxHandleTime',
        key: 'maxhandletime'
      },
      {
        id: 11,
        name: 'Average Speed Of Answer',
        componentName: 'AverageSpeedOfAnswer',
        key: 'asa'
      }
    ],
    threshold: {
      threshold1: null,
      threshold2: null,
      order: null
    },
    title: 'Comstice Quartz - Monthly Dashboard'
  }),

  head() {
    return {
      title: this.title
    }
  },

  computed: {
    ...mapState('shared', ['callTypes']),

    optionsCallTypes() {
      return {
        hasFilter: this.callTypes.filter(
          item => !this.item.callTypes.some(j => j.id === item.id)
        ),
        baseList: this.callTypes,
        selectedList: [],
        title: 'Call Types'
      }
    }
  },

  beforeMount() {
    this.selectedMonthlyDashboard = this.monthlyDashboardList[0]

    this.item.startTime = this.$moment().subtract(1, 'year')
    this.item.endTime = this.$moment()

    this.getShared({
      endpoint: 'shared/calltypes',
      key: 'callTypes'
    })
  },

  beforeDestroy() {
    this.setShared({
      data: [],
      key: 'callTypes'
    })
  },

  methods: {
    ...mapActions({
      getShared: 'shared/getShared'
    }),

    ...mapMutations({
      setShared: 'shared/setShared'
    }),

    addThreshold(componentName) {
      const maker = componentName =>
        ({
          CallAbandoned: {
            threshold1: 5000,
            threshold2: 1000,
            order: 0 //descending
          },
          CallAnswered: {
            threshold1: 5000,
            threshold2: 1000,
            order: 0 //descending
          },
          CallReceived: {
            threshold1: 5000,
            threshold2: 1000,
            order: 0 //descending
          },
          CallAnswerRate: {
            threshold1: 90,
            threshold2: 70,
            order: 1 //descending
          },
          CallAbandonRate: {
            threshold1: 20,
            threshold2: 10,
            order: 0 //ascending
          },
          ServiceLevelRate: {
            threshold1: 90,
            threshold2: 70,
            order: 1
          },
          FTECount: {
            threshold1: 150,
            threshold2: 100,
            order: 0
          },
          AvgHandleTime: {
            threshold1: this.$moment
              .duration(420, 'seconds')
              .format('mm:ss', { trim: false }),
            threshold2: this.$moment
              .duration(300, 'seconds')
              .format('mm:ss', { trim: false }),
            order: 0
          },
          MaxWaitTime: {
            threshold1: this.$moment
              .duration(900, 'seconds')
              .format('mm:ss', { trim: false }),
            threshold2: this.$moment
              .duration(600, 'seconds')
              .format('mm:ss', { trim: false }),
            order: 0
          },
          CallsPresented: {
            threshold1: 2000,
            threshold2: 1000,
            order: 0
          },
          CallsHandled: {
            threshold1: 2000,
            threshold2: 1000,
            order: 0
          },
          CallsAbandoned: {
            threshold1: 200,
            threshold2: 100,
            order: 0
          },
          AverageSpeedOfAnswer: {
            threshold1: 10,
            threshold2: 5,
            order: 0
          }
        }[componentName])

      this.threshold = maker(componentName)
    },

    async search() {
      this.monthlyDashboardComponent = await null
      this.hasResponse = await false
      console.log(this.selectedMonthlyDashboard)
      this.addThreshold(this.selectedMonthlyDashboard.componentName)
      console.log(this.threshold)
      this.monthlyDashboardComponent = async () =>
        await import(`@/components/MonthlyDashboard`)
      this.hasResponse = await true
    }
  }
}
</script>
