<template>
  <section>
    <div v-if="item.startTime" class="form-group">
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

    <div v-if="relativeDate && item.startTime" class="form-group">
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
            v-model="item.startTime"
            :minute-interval="10"
            :max-date="item.endTime"
            auto-close
            no-header
            format="YYYY-MM-DD HH:mm:ss"
            color="#727cf5"
            enable-button-validate
          />
        </div>
        <div class="col-md-6">
          <label>End Date</label>
          <vue-ctk-date-time-picker
            v-model="item.endTime"
            :minute-interval="10"
            :min-date="item.startTime"
            auto-close
            no-header
            format="YYYY-MM-DD HH:mm:ss"
            color="#727cf5"
            enable-button-validate
          />
        </div>
      </div>
    </div>

    <div v-if="item.startYear" class="row">
      <div class="col-md-3">
        <div class="form-group">
          <label>Start Date</label>
          <select v-model="item.startYear" class="form-control">
            <option v-for="y in yearRange" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>End Date</label>
          <select v-model="item.endYear" class="form-control">
            <option v-for="y in yearRange" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>
      </div>
    </div>

    <duallist-box
      v-if="item.callTypes"
      class="mb-2"
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
      v-if="item.queues"
      class="mb-2"
      :base-list="
        optionsQueues.hasFilter.length
          ? optionsQueues.hasFilter
          : optionsQueues.baseList
      "
      :selected-list="item.queues"
      :title="optionsQueues.title"
      @updateSelected="item.queues = $event"
      @updateBase="optionsQueues.baseList = $event"
    />

    <duallist-box
      v-if="item.agents"
      class="mb-2"
      :is-agent="true"
      :base-list="
        optionsAgents.hasFilter.length
          ? optionsAgents.hasFilter
          : optionsAgents.baseList
      "
      :selected-list="item.agents"
      :title="optionsAgents.title"
      @updateSelected="item.agents = $event"
      @updateBase="optionsAgents.baseList = $event"
    />

    <duallist-box
      v-if="item.teams"
      class="mb-2"
      :base-list="
        optionsTeams.hasFilter.length
          ? optionsTeams.hasFilter
          : optionsTeams.baseList
      "
      :selected-list="item.teams"
      :title="optionsTeams.title"
      @updateSelected="item.teams = $event"
      @updateBase="optionsTeams.baseList = $event"
    />

    <div v-if="isVisibleItem.counter" class="form-group">
      <label>Counter</label>
      <input v-model="item.counter" type="text" class="form-control w-50" />
    </div>

    <div v-if="isSearchable" class="row modal-footer">
      <button class="btn btn-primary" @click="search">Search</button>
    </div>
    <div v-if="showFooter" class="row flex">
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

    isVisibleItem: {
      required: false,
      default: () => ({}),
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
      required: false,
      default: null,
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
    ...mapState('shared', ['callTypes', 'skills', 'teams', 'queues', 'agents']),

    yearRange() {
      const subtractYear = this.$moment().subtract(5, 'years')
      const range = this.$moment.range(subtractYear, new Date())

      const years = Array.from(range.by('year'))

      return years.map(m => m.format('YYYY'))
    },

    optionsAgents() {
      return {
        hasFilter: this.agents.filter(
          item => !this.item.agents.some(j => j.id === item.id)
        ),
        baseList: this.agents,
        selectedList: [],
        title: 'Agents'
      }
    },

    optionsCallTypes() {
      return {
        hasFilter: this.callTypes.filter(
          item => !this.item.callTypes.some(j => j.id === item.id)
        ),
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
    optionsQueues() {
      return {
        hasFilter: this.queues.filter(
          item => !this.item.queues.some(j => j.id === item.id)
        ),
        baseList: this.queues,
        selectedList: [],
        title: 'Precision Queue'
      }
    },

    optionsTeams() {
      return {
        hasFilter: this.teams.filter(
          item => !this.item.teams.some(j => j.id === item.id)
        ),
        baseList: this.teams,
        selectedList: [],
        title: 'Teams'
      }
    }
  },

  watch: {
    item: function() {
      if (this.item.queues) {
        this.getShared({
          endpoint: 'shared/queues',
          key: 'queues'
        })
      }

      if (this.item.teams) {
        this.getShared({
          endpoint: 'shared/teams',
          key: 'teams'
        })
      }
    }
  },

  beforeMount() {
    this.selectedDate = this.dateRanges[0]

    if (this.item.agents) {
      this.getShared({
        endpoint: 'shared/agents',
        key: 'agents'
      })
    }

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

    if (this.item.skills) {
      this.getShared({
        endpoint: 'shared/skills',
        key: 'skills'
      })
    }

    if (this.item.teams) {
      this.getShared({
        endpoint: 'shared/teams',
        key: 'teams'
      })
    }
  },

  created() {
    if (this.item.queues) {
      this.getShared({
        endpoint: 'shared/queues',
        key: 'queues'
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
