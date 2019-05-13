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
                    >
                      {{ m.name }}
                    </option>
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
                      formatted="YYYY-MM"
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
                      formatted="YYYY-MM"
                      color="#727cf5"
                      enable-button-validate
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <duallist-box
                  v-if="item.callTypes"
                  class="mb-2"
                  :base-list="optionsCallTypes.baseList"
                  :selected-list="item.callTypes"
                  :title="optionsCallTypes.title"
                  @updateSelected="item.callTypes = $event"
                  @updateBase="optionsCallTypes.baseList = $event"
                />
              </div>
            </div>

            <div v-if="!hasResponse" class="form-group">
              <button class="btn btn-primary" @click="search">
                Search
              </button>
            </div>

            <component
              :is="monthlyDashboardComponent"
              v-if="hasResponse"
              :selected-monthly-dashboard="selectedMonthlyDashboard"
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

export default {
  layout: 'authenticated',
  components: {
    ReportFilter,
    PageTitle,
    DuallistBox
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
        componentName: 'callAnswerRate',
        key: 'calls_answered_rate'
      },
      {
        id: 2,
        name: 'Call Abandon Rate',
        componentName: 'CallAbandonRate',
        key: 'calls_abandoned_rate'
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
        id: 5,
        name: 'Avg Wait Time',
        componentName: 'AvgWaitTime',
        key: 'service_level_rate'
      },
      {
        id: 6,
        name: 'Avg Handle Time',
        componentName: 'AvgHandleTime',
        key: 'aht'
      },
      {
        id: 7,
        name: 'Agent Occupancy',
        componentName: 'AgentOccupancy',
        key: 'agent_occupancy_rate'
      },
      {
        id: 8,
        name: 'Agent Efficiency',
        componentName: 'AgentEfficiency',
        key: 'agent_efficiency_rate'
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
      }
    ],
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

    async search() {
      this.monthlyDashboardComponent = await null
      this.hasResponse = await false

      this.monthlyDashboardComponent = async () =>
        await import(`@/components/MonthlyDashboard`)
      this.hasResponse = await true
    }
  }
}
</script>
