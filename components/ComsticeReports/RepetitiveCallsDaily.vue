<template>
  <section>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <report-filter
              :show-footer="false"
              :is-searchable="false"
              :is-visible-item="isVisibleItem"
              :item="item"
            />

            <div class="form-group">
              <button class="btn btn-primary" @click="search">Search</button>
            </div>
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
    fields: [
      { key: 'date', label: 'Date', sortable: true },
      { key: 'count', label: 'Count', sortable: true }
    ],
    currentPage: 1,
    perPage: 5,
    pageOptions: [5, 10, 15],
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc',
    filter: null,
    reportData: [],
    /* reportData: [
      {
        count: '76742',
        date: '2019-04-17'
      },
      {
        count: '48896',
        date: '2019-04-15'
      },
      {
        count: '41496',
        date: '2019-04-16'
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
      const { data } = await this.$axios.post(`repeatcalls/bydate`, this.item)
      this.reportData = await data
    }
  }
}
</script>
