<template>
  <section class="p-3 bg-light d-flex justify-content-between">
    {{ item }}
    <div class="input-group">
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
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
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
  methods: {
    async save() {
      const { data } = await this.$axios.post(`save-filter`, this.data)
      data ? this.$toast.success('Saved: Search Criteria') : null
    }
  }
}
</script>
