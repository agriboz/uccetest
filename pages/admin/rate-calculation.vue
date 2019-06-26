<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Admin" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Rate Calculations</h5>
            <div class="mt-4">
              <b-table
                show-empty
                hover
                stacked="md"
                :items="data"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
              >
                <template slot="formulas" slot-scope="row">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Key</th>
                        <th>Formula</th>
                      </tr>
                    </thead>
                    <tbody v-for="(r, i) in row.item.formulas" :key="i">
                      <tr>
                        <td>{{ r.key }}</td>
                        <td>{{ r.formula }}</td>
                      </tr>
                    </tbody>
                  </table>
                </template>
                <template slot="isSelected" slot-scope="row">
                  {{ row.item.isSelected ? 'Yes' : 'No' }}
                </template>
                <template slot="actions" slot-scope="row">
                  <button
                    class="btn btn-primary"
                    @click="updateRateOption(row.item)"
                  >
                    Select
                  </button>
                </template>
              </b-table>
              <b-row v-if="data.length">
                <b-col md="12">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="data.length"
                    :per-page="perPage"
                    align="end"
                  ></b-pagination>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  layout: 'authenticated',
  components: {
    PageTitle
  },
  data: () => ({
    item: {
      username: null
    },
    data: [],
    fields: [
      { key: 'name', label: 'Name', sortable: true },
      { key: 'formulas', label: 'Formulas', sortable: true },
      { key: 'isSelected', label: 'Selected', sortable: true },
      { key: 'actions', label: 'Actions' }
    ],
    currentPage: 1,
    perPage: 5,
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc'
  }),

  beforeMount() {
    this.getRateOptions()
  },

  methods: {
    async updateRateOption({ id }) {
      await this.$axios.put(`rate-option/${id}`, {
        isSelected: true
      })
      await this.getRateOptions()
      // this.data = this.data.map(item => (item.id === data.id ? data : item))
    },

    async getRateOptions() {
      const { data } = await this.$axios.get('rate-option')
      this.data = await data
    }
  }
}
</script>
