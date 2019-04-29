<template>
  <section>
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
            v-model="item.startDate"
            :minute-interval="10"
            :max-date="item.endDate"
            auto-close
            no-header
            dark
            format="YYYY-MM-DD HH:mm:ss"
            color="#727cf5"
            enable-button-validate
          />
        </div>
        <div class="col-md-6">
          <label>End Date</label>
          <vue-ctk-date-time-picker
            v-model="item.endDate"
            :minute-interval="10"
            :min-date="item.startDate"
            auto-close
            no-header
            dark
            format="YYYY-MM-DD HH:mm:ss"
            color="#727cf5"
            enable-button-validate
          />
        </div>
      </div>
    </div>
    <duallist-box
      v-if="item.callTypes"
      class="mb-2"
      :base-list="optionsCallTypes.baseList"
      :selected-list="item.callTypes"
      :title="optionsCallTypes.title"
      @updateSelected="item.callTypes = $event"
      @updateBase="optionsCallTypes.baseList = $event"
    />

    <duallist-box
      v-if="item.skills"
      class="mb-2"
      :base-list="optionsSkills.baseList"
      :selected-list="item.skills"
      :title="optionsSkills.title"
      @updateSelected="item.skills = $event"
      @updateBase="optionsSkills.baseList = $event"
    />

    <duallist-box
      v-if="item.csqs"
      class="mb-2"
      :base-list="optionsCsqList.baseList"
      :selected-list="item.csqs"
      :title="optionsCsqList.title"
      @updateSelected="item.csqs = $event"
      @updateBase="optionsCsqList.baseList = $event"
    />

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
import { mapActions, mapState } from 'vuex'
import DuallistBox from '@/components/DuallistBox'
import dateRanges from '@/utils/dateRanges'

export default {
  components: {
    DuallistBox
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    showFooter: {
      required: true,
      type: Boolean
    },
    isSearchable: {
      required: true,
      type: Boolean
    },
    url: {
      required: true,
      type: String
    }
  },
  data: () => ({
    dateRanges: [
      {
        id: 1,
        name: 'Today'
      },
      {
        id: 2,
        name: 'Yesterday'
      },
      {
        id: 3,
        name: 'This Week'
      },
      {
        id: 4,
        name: 'Last Week'
      },
      {
        id: 5,
        name: 'This Month'
      },
      {
        id: 6,
        name: 'Last Month'
      },
      {
        id: 7,
        name: 'Year To Date'
      },
      {
        id: 8,
        name: 'Last Year'
      }
    ],
    relativeDate: true,
    selectedDate: null
  }),
  computed: {
    ...mapState('shared', ['callTypes', 'skills', 'csqs', 'queues']),

    optionsCallTypes() {
      return {
        baseList: this.callTypes,
        selectedList: [],
        title: 'Call Types'
      }
    },
    optionsSkills() {
      return {
        baseList: this.skills,
        selectedList: [],
        title: 'Skills'
      }
    },
    optionsCsqList() {
      return {
        baseList: this.csqs,
        selectedList: [],
        title: 'CSQ List'
      }
    }
  },

  beforeMount() {
    if (this.item.callTypes) {
      this.getShared({
        endpoint: 'shared/calltypes',
        key: 'callTypes'
      })
    }

    if (this.item.queues) {
      this.getShared({
        endpoint: 'shared/queues',
        key: 'queues'
      })
    }

    if (this.item.csqs) {
      this.getShared({
        endpoint: 'csqs',
        key: 'csqList'
      })
    }

    if (this.item.skills) {
      this.getShared({
        endpoint: 'shared/skills',
        key: 'skills'
      })
    }
  },

  methods: {
    changeRelative(toggle) {
      this.relativeDate = toggle
    },
    changeDates() {
      const dateFormat = 'YYYY-MM-DD HH:mm:ss'

      this.item.startTime = this.relativeDate
        ? dateRanges(this.selectedDate.id, true, false)
        : this.$moment(this.selectedStockReport.startTime).format(dateFormat) ||
          ''

      this.item.endTime = this.relativeDate
        ? dateRanges(this.selectedDate.id, false, true)
        : this.$moment(this.selectedStockReport.endTime).format(dateFormat)
    },

    limitText(count) {
      return count > 1
        ? `and ${count} other options.`
        : `and ${count} other option.`
    },

    ...mapActions({
      getShared: 'shared/getShared'
    }),

    search() {
      const data = {
        url: this.url,
        key: this.reportName,
        payload: this.item
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
