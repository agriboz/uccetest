<template>
  <section>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <report-filter
              v-show="!reportData.length"
              :show-footer="false"
              :is-searchable="false"
              :is-visible-item="isVisibleItem"
              :item="item"
            />

            <div v-if="!reportData.length" class="form-group">
              <button class="btn btn-primary" @click="search">Search</button>
            </div>

            <button
              v-if="reportData.length"
              class="btn btn-warning"
              @click="reportData = []"
            >
              Back to Filter
            </button>

            <export-excel
              v-if="reportData.length"
              class="btn btn-primary"
              type="csv"
              :fields="jsonFields"
              :data="reportData"
              style="cursor: pointer"
            >
              <i
                v-b-tooltip.hover
                title="Download Excel"
                class="icon-excel d-flex"
              ></i>
            </export-excel>

            <b-row v-if="reportData.length">
              <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
                  <b-input-group>
                    <b-form-input
                      v-model="filter"
                      placeholder="Type to Search"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>

              <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
                  <b-input-group>
                    <b-form-select v-model="sortBy" :options="sortOptions">
                      <option slot="first" :value="null">-- none --</option>
                    </b-form-select>
                    <b-form-select
                      slot="append"
                      v-model="sortDesc"
                      :disabled="!sortBy"
                    >
                      <option :value="false">Asc</option>
                      <option :value="true">Desc</option>
                    </b-form-select>
                  </b-input-group>
                </b-form-group>
              </b-col>

              <b-col md="6" class="my-1">
                <b-form-group
                  label-cols-sm="3"
                  label="Sort direction"
                  class="mb-0"
                >
                  <b-form-select v-model="sortDirection">
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                    <option value="last">Last</option>
                  </b-form-select>
                </b-form-group>
              </b-col>

              <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
                  <b-form-select
                    v-model="perPage"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-table
              v-if="reportData.length"
              show-empty
              striped
              hover
              stacked="md"
              :items="reportData"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              @filtered="onFiltered"
            />
            <b-row v-if="reportData.length">
              <b-col md="12">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="end"
                ></b-pagination>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReportFilter from '@/components/StockReportFilter'

import dateRanges from '@/utils/dateRanges'

export default {
  components: {
    ReportFilter
  },

  data: () => ({
    jsonFields: {
      Date: 'date',
      Count: 'count',
      ANI: 'ani'
    },
    fields: [
      { key: 'date', label: 'Date', sortable: true },
      { key: 'count', label: 'Count', sortable: true },
      { key: 'ani', label: 'ANI', sortable: true }
    ],
    currentPage: 1,
    perPage: 5,
    // pageOptions: [5, 10, 15, 20],
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc',
    filter: null,
    reportData: [],
    /* reportData: [
      {
        count: '6',
        date: '2019-04-16',
        ani: '4002204'
      },
      {
        count: '18',
        date: '2019-04-16',
        ani: '4356740057'
      },
      {
        count: '21',
        date: '2019-04-16',
        ani: '3043481084'
      },
      {
        count: '6',
        date: '2019-04-15',
        ani: '6094702637'
      },
      {
        count: '6',
        date: '2019-04-16',
        ani: '6185313086'
      },
      {
        count: '11',
        date: '2019-04-15',
        ani: '2017686111'
      },
      {
        count: '5',
        date: '2019-04-16',
        ani: '6198524100'
      },
      {
        count: '8',
        date: '2019-04-15',
        ani: '3044257660'
      },
      {
        count: '6',
        date: '2019-04-16',
        ani: '4002204'
      },
      {
        count: '18',
        date: '2019-04-16',
        ani: '4356740057'
      },
      {
        count: '21',
        date: '2019-04-16',
        ani: '3043481084'
      },
      {
        count: '6',
        date: '2019-04-15',
        ani: '6094702637'
      },
      {
        count: '6',
        date: '2019-04-16',
        ani: '6185313086'
      },
      {
        count: '11',
        date: '2019-04-15',
        ani: '2017686111'
      },
      {
        count: '5',
        date: '2019-04-16',
        ani: '6198524100'
      },
      {
        count: '8',
        date: '2019-04-15',
        ani: '3044257660'
      },
      {
        count: '6',
        date: '2019-04-16',
        ani: '9165684255'
      },
      {
        count: '5',
        date: '2019-04-15',
        ani: '3143132166'
      },
      {
        count: '5',
        date: '2019-04-17',
        ani: '6609094714'
      },
      {
        count: '40',
        date: '2019-04-17',
        ani: '3035152301'
      },
      {
        count: '5',
        date: '2019-04-16',
        ani: '3176951512'
      },
      {
        count: '5',
        date: '2019-04-16',
        ani: '8566276553'
      },
      {
        count: '5',
        date: '2019-04-16',
        ani: '3143935199'
      },
      {
        count: '5',
        date: '2019-04-15',
        ani: '6784621414'
      },
      {
        count: '7',
        date: '2019-04-17',
        ani: '8882829459'
      },
      {
        count: '4',
        date: '2019-04-15',
        ani: '8125956466'
      },
      {
        count: '5',
        date: '2019-04-15',
        ani: '8017094303'
      },
      {
        count: '4',
        date: '2019-04-16',
        ani: '3129122301'
      }
    ], */
    isVisibleItem: {
      counter: true
    },
    item: {
      counter: '3',
      startTime: dateRanges(1, true, false),
      endTime: dateRanges(1, false, true)
    }
  }),

  computed: {
    totalRows() {
      return this.reportData.length
    },

    pageOptions() {
      return [
        {
          text: '5',
          value: 5
        },
        {
          text: '10',
          value: 10
        },
        {
          text: '15',
          value: 15
        },
        {
          text: '20',
          value: 20
        },
        {
          text: 'All',
          value: this.reportData.length
        }
      ]
    },

    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },

  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },

    async search() {
      const { data } = await this.$axios.post(
        `repeatcallsani/bydate`,
        this.item
      )
      this.reportData = await data
    }
  }
}
</script>
