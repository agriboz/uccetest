<template>
  <section class="p-3 bg-light d-flex justify-content-between">
    <div class="input-group w-25">
      <input
        v-model="filterName"
        type="text"
        class="form-control"
        placeholder="Save Search Criteria"
      />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="save">
          Save
        </button>
      </div>
    </div>
    <b-dropdown text="My Saved Searches" variant="primary">
      <b-dropdown-item
        v-for="f in filters"
        :key="f.id"
        @click="selectFilter(f)"
        >{{ f.filterName }} <span @click="openModal = !openModal; filterID = f.id"> &times; <span> </b-dropdown-item
      >
    </b-dropdown>
    <b-modal title="Delete Filter" @ok="removeFilter">
      <p>
        Are you sure want to delete selected filter?
      </p>
  </b-modal>
  </section>
  
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    filterID: null,
    openModal: false,
    filters: [],
    filterName: null
  }),
  computed: {
    data() {
      return {
        filterName: this.filterName,
        filter: this.item
      }
    }
  },

  async beforeMount() {
    await this.getFilters()
  },

  methods: {
    selectFilter(f) {
      console.log(f.filter)
      this.$emit('updateFilter', f.filter)
    },

    async removeFilter() {
      try {
        await this.$axios.delete(`save-filter/${this.filterID}`)
        await this.getFilters()
      } catch (error) {
        console.log(error)
      }
    },

    async getFilters() {
      try {
        const { data } = await this.$axios.get('save-filter')
        this.filters = await data
      } catch (error) {
        console.log(error)
      }
    },

    async save() {
      const { data } = await this.$axios.post(`save-filter`, this.data)
      data
        ? (this.$toast.success('Saved: Search Criteria'),
          await this.getFilters())
        : null
    }
  }
}
</script>
