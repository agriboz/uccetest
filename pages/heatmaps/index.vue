<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Heatmaps" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div v-if="!hasResponse" class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Heatmap List</label>
                  <select v-model="selectedHeatmap" class="form-control">
                    <option v-for="h in heatmapList" :key="h.id" :value="h">{{
                      h.name
                    }}</option>
                  </select>
                </div>
              </div>
            </div>
            <report-filter
              v-if="!hasResponse"
              :show-footer="false"
              :is-searchable="false"
              :url="'/teamnotreadypercentage'"
              :item="item"
            />
            <save-filter
              v-if="!hasResponse"
              class="mt-2 mb-2"
              :item="{ callTypes: item.callTypes }"
              @updateFilter="item.callTypes = $event.callTypes"
            />
            <!--  <div v-if="!hasResponse" class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label>Shift Start Time</label>
                  <select v-model="item.shift.start" class="form-control">
                    <option v-for="s in range(23, true)" :key="s" :value="s">
                      {{ s }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label>Shift End Time</label>
                  <select v-model="item.shift.end" class="form-control">
                    <option v-for="s in range(23, true)" :key="s" :value="s">
                      {{ s }}
                    </option>
                  </select>
                </div>
              </div>
            </div>-->
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
                class="btn btn-info ml-1"
                @click="openThresholdModal = true"
              >
                Change Threshold
              </button>
              <button
                v-if="hasResponse"
                class="btn btn-primary ml-1"
                @click="downloadAsPng"
              >
                Download as PNG
              </button>
              <button
                v-if="hasResponse"
                class="btn btn-primary ml-1"
                @click="ignoreWeekends('saturday')"
              >
                {{
                  !ignoreDays[0].ignored ? 'Show Saturday' : 'Ignore Saturday'
                }}
              </button>
              <button
                v-if="hasResponse"
                class="btn btn-primary ml-1"
                @click="ignoreWeekends('sunday')"
              >
                {{ !ignoreDays[1].ignored ? 'Show Sunday' : 'Ignore Sunday' }}
              </button>
            </div>
            <component
              :is="heatmapComponent"
              :threshold="threshold"
              :data="heatmapDetail"
              :has-response="hasResponse"
              :selected-heatmap="selectedHeatmap"
              :ignore-days="ignoreDays"
            />
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="openThresholdModal" title="Change Threshold">
      <section>
        <div v-if="heatmapDetail" class="col-md-12">
          <div class="form-group">
            <label>Threshold 1: (Red)</label>
            <input
              v-model="threshold.threshold1"
              type="text"
              class="form-control"
              placeholder="Please write the threshold value"
            />
          </div>
          <div class="form-group">
            <label>Threshold 2: (Orange)</label>
            <input
              v-model="threshold.threshold2"
              type="text"
              class="form-control"
              placeholder="Please write the threshold value"
            />
          </div>
        </div>
      </section>
    </b-modal>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ReportFilter from '@/components/StockReportFilter'
import SaveFilter from '@/components/SaveFilter'

import html2canvas from 'html2canvas'
import dateRanges from '@/utils/dateRanges'

export default {
  layout: 'authenticated',
  components: {
    ReportFilter,
    PageTitle,
    SaveFilter
  },
  data: () => ({
    hasResponse: false,
    heatmapDetail: null,
    item: {
      callTypes: [],
      startTime: dateRanges(1, true, false),
      endTime: dateRanges(1, false, true),
      shift: {
        start: 0,
        end: 24
      }
    },
    threshold: {
      threshold1: null,
      threshold2: null
    },
    openThresholdModal: false,
    ignoreDays: [
      {
        ignored: false,
        day: 'Saturday'
      },
      {
        ignored: false,
        day: 'Sunday'
      }
    ],
    selectedHeatmap: null,
    heatmapComponent: null,
    heatmapList: [
      {
        id: 1,
        name: 'Call Answer Rate',
        componentName: 'CallAnswerRate',
        key: 'call_answer_rate'
      },
      {
        id: 2,
        name: 'Call Abandon Rate',
        componentName: 'CallAbandonRate',
        key: 'calls_abandoned_rate'
      },

      {
        id: 4,
        name: 'Average Handle Time',
        componentName: 'AverageHandleTime',
        key: 'avg_handle_time_weighted_average'
      },
      {
        id: 5,
        name: 'Service Level',
        componentName: 'ServiceLevel',
        key: 'service_level_rate'
      },
      {
        id: 6,
        name: 'Calls Presented',
        componentName: 'CallsPresented',
        key: 'calls_presented'
      },
      {
        id: 7,
        name: 'Calls Handled',
        componentName: 'CallsHandled',
        key: 'calls_handled'
      },
      {
        id: 8,
        name: 'Calls Abandoned',
        componentName: 'CallsAbandoned',
        key: 'calls_abandoned'
      }
    ],
    title: 'Comstice Quartz - Heatmaps'
  }),

  head() {
    return {
      title: this.title
    }
  },

  beforeMount() {
    this.selectedHeatmap = this.heatmapList[0]
  },

  methods: {
    ignoreWeekends(selectedDay) {
      if (selectedDay === 'saturday') {
        this.ignoreDays[0].ignored
          ? (this.ignoreDays[0].day = 'Saturday')
          : (this.ignoreDays[0].day = '')
        this.ignoreDays[0].ignored
          ? (this.ignoreDays[0].ignored = false)
          : (this.ignoreDays[0].ignored = true)
      }
      if (selectedDay === 'sunday') {
        this.ignoreDays[1].ignored
          ? (this.ignoreDays[1].day = 'Sunday')
          : (this.ignoreDays[1].day = '')
        this.ignoreDays[1].ignored
          ? (this.ignoreDays[1].ignored = false)
          : (this.ignoreDays[1].ignored = true)
      }
    },

    range(num, beginAtZero) {
      const count = Array.from(
        { length: beginAtZero ? num + 1 : num },
        (v, k) => {
          return beginAtZero
            ? k < 10
              ? '0' + (k + ':00')
              : '' + (k + ':00')
            : k + 1
        }
      )
      return count
    },

    downloadAsPng() {
      const node = document.getElementsByClassName('heatmap-wrapper')[0]
      html2canvas(node).then(canvas => {
        var link = document.createElement('a')
        document.body.appendChild(link)
        link.download = 'image.png'
        link.href = canvas.toDataURL('image/png')
        link.target = '_blank'
        link.click()
      })
    },

    async search() {
      this.heatmapComponent = await null
      this.hasResponse = await false
      const payload = {
        url: this.selectedHeatmap.name.replace(/ /gi, '-').toLowerCase(),
        data: this.item
      }
      const { data } = await this.$axios.post(
        `/heat-map/${payload.url}`,
        payload.data
      )
      this.hasResponse = await true
      this.heatmapDetail = await data

      if (
        // should refactor them codes. it is written in bad conditions!
        this.selectedHeatmap.componentName === 'CallAnswerRate' ||
        this.selectedHeatmap.componentName === 'ServiceLevel'
      ) {
        this.threshold.threshold1 = this.heatmapDetail.legend.orange
        this.threshold.threshold2 = this.heatmapDetail.legend.red
      } else if (this.selectedHeatmap.componentName === 'CallAbandonRate') {
        this.threshold.threshold1 = this.heatmapDetail.legend.red
        this.threshold.threshold2 = this.heatmapDetail.legend.orange
      } else if (this.selectedHeatmap.componentName === 'AverageWaitTime') {
        this.threshold.threshold1 = this.$moment
          .duration(this.heatmapDetail.legend.red, 'seconds')
          .format('mm:ss', { trim: false })
        this.threshold.threshold2 = this.$moment
          .duration(this.heatmapDetail.legend.orange, 'seconds')
          .format('mm:ss', { trim: false })
      } else if (
        this.selectedHeatmap.componentName === 'CallsPresented' ||
        this.selectedHeatmap.componentName === 'CallsAbandoned' ||
        this.selectedHeatmap.componentName === 'CallsHandled'
      ) {
        this.threshold.threshold1 = 0
        this.threshold.threshold2 = 0
      } else {
        this.threshold.threshold1 = this.$moment
          .duration(this.heatmapDetail.legend.red, 'seconds')
          .format('mm:ss', { trim: false })
        this.threshold.threshold2 = this.$moment
          .duration(this.heatmapDetail.legend.orange, 'seconds')
          .format('mm:ss', { trim: false })
      }

      this.heatmapComponent = async () => await import(`@/components/Heatmaps`)
    }
  }
}
</script>
