<template>
  <section>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <fieldset class="radio">
            <label class="mr-1">
              <input
                type="radio"
                :checked="relativeDate === true"
                name="date"
                @input="changeRelative(true)"
              />
              Relative Date Range
            </label>
            <label>
              <input
                type="radio"
                :checked="relativeDate === false"
                name="date"
                @input="changeRelative(false)"
              />
              Absolute Date Range
            </label>
          </fieldset>
        </div>

        <div v-if="relativeDate" class="form-group">
          <select
            v-model="selectedDate"
            class="form-control col-xl-6 col-lg-3 col-md-6"
            @change="changeDates"
          >
            <option v-for="d in dateRanges" :key="d.id" :value="d">
              {{ d.name }}
            </option>
          </select>
        </div>
        <div v-if="!relativeDate" class="form-group">
          <div class="row">
            <div class="col-md-6">
              <label>Start Date</label>
              <vue-ctk-date-time-picker
                v-model="item.searchProps.startDate"
                :minute-interval="10"
                :max-date="item.searchProps.endDate"
                auto-close
                format="YYYY-MM-DD HH:mm:ss"
                color="#727cf5"
                enable-button-validate
              />
            </div>
            <div class="col-md-6">
              <label>End Date</label>
              <vue-ctk-date-time-picker
                v-model="item.searchProps.endDate"
                :minute-interval="10"
                :min-date="item.searchProps.startDate"
                auto-close
                format="YYYY-MM-DD HH:mm:ss"
                color="#727cf5"
                enable-button-validate
              />
            </div>
          </div>
        </div>
        <div v-if="item.searchProps.agentList" class="col-md-12 mb-2">
          <duallist-box
            :base-list="optionsAgents.baseList"
            :selected-list="item.searchProps.agentList"
            :title="optionsAgents.title"
            @updateSelected="item.searchProps.agentList = $event"
            @updateBase="optionsAgents.baseList = $event"
          />
        </div>
      </div>
    </div>
    <div v-if="isSearchable" class="row modal-footer">
      <button class="btn btn-primary" @click="search">Search</button>
    </div>
    <div v-if="showFooter" class="row modal-footer">
      <button
        class="btn btn-light"
        @click="$store.commit('shared/setReportFilterModal', false)"
      >
        Cancel
      </button>
      <button
        class="btn btn-primary"
        @click="$store.commit('shared/setReportFilterModal', false)"
      >
        OK
      </button>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DuallistBox from '@/components/DuallistBox'
import dateRanges from '@/utils/dateRanges'

export default {
  components: {
    DuallistBox
  },
  props: [
    'item',
    'showFooter',
    'isSearchable',
    'url',
    'isExpress',
    'reportName',
    'isISODate',
    'isLive'
  ],
  data: () => ({
    relativeDate: true,
    selectedDate: null
  }),
  computed: {
    optionsAgents() {
      return {
        baseList: this.agents,
        selectedList: [],
        title: 'Agents'
      }
    },

    ...mapState({
      dateRanges: state => state.reports.dateRanges
    })
  },

  beforeMount() {},

  methods: {
    changeRelative(toggle) {
      this.relativeDate = toggle
    },
    changeDates() {
      const dateFormat = 'YYYY-MM-DD HH:mm:ss'

      this.item.searchProps.startTime = this.relativeDate
        ? dateRanges(this.selectedDate.id, true, false)
        : this.$moment(this.selectedStockReport.startTime).format(dateFormat) ||
          ''

      this.item.searchProps.endTime = this.relativeDate
        ? dateRanges(this.selectedDate.id, false, true)
        : this.$moment(this.selectedStockReport.endTime).format(dateFormat)
    },

    limitText(count) {
      return count > 1
        ? `and ${count} other options.`
        : `and ${count} other option.`
    },

    ...mapActions({}),

    search() {
      const data = {
        url: this.url,
        key: this.reportName,
        payload: this.item.searchProps
      }

      this.reportSearch(data)
    }
  }
}
</script>

<style scoped>
.modal-footer {
  align-items: flex-end;
}
</style>
