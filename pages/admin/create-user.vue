<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Admin" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create User</h5>
            <div class="form-group w-25">
              <label>Username</label>
              <input v-model="item.username" type="text" class="form-control" />
            </div>
            <div class="form-group w-25">
              <label>First Name</label>
              <input
                v-model="item.firstname"
                type="text"
                class="form-control"
              />
            </div>
            <div class="form-group w-25">
              <label>Last Name</label>
              <input v-model="item.lastname" type="text" class="form-control" />
            </div>
            <button class="btn btn-primary" @click="saveUser">
              Create User
            </button>
            <div class="mt-4">
              <b-table
                show-empty
                striped
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
                <template slot="actions" slot-scope="row">
                  <button class="btn btn-danger" @click="deleteUser(row.item)">
                    Delete
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
  middleware: 'admin',
  data: () => ({
    item: {
      username: null
    },
    data: [],
    fields: [
      { key: 'username', label: 'User Name', sortable: true },
      { key: 'firstname', label: 'First Name', sortable: true },
      { key: 'lastname', label: 'Last Name', sortable: true },
      { key: 'actions', label: 'Actions' }
    ],
    currentPage: 1,
    perPage: 5,
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc'
  }),

  beforeMount() {
    this.getUsers()
  },

  methods: {
    async saveUser() {
      try {
        const { data } = await this.$axios.post('whitelistuser', this.item)
        this.data = [...this.data, data]
      } catch (error) {
        return console.error(error)
      }
    },

    async deleteUser({ id }) {
      const { data } = await this.$axios.delete(`whitelistuser/${id}`)
      this.data = this.data.filter(item => item.id !== data.id)
    },

    async getUsers() {
      const { data } = await this.$axios.get('whitelistuser')
      this.data = await data
    }
  }
}
</script>
