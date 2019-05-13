<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Comstice Reports" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <component :is="component" />
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
    component: null
  }),

  mounted() {
    const name = this.convertToCamelCase(this.$route.params.name)
    this.component = () => import(`@/components/ComsticeReports/${name}`)
  },

  methods: {
    convertToCamelCase(value) {
      value = value.replace(/[()[\]{}=?!.:,\-+\\"#~/]/g, ' ')
      var returnValue = ''
      var makeNextUppercase = true
      value = value.toLowerCase()
      for (var i = 0; value.length > i; i++) {
        var c = value.charAt(i)

        if (c.match(/^\s+$/g) || c.match(/[()[\]{}\\/]/g)) {
          makeNextUppercase = true
        } else if (makeNextUppercase) {
          c = c.toUpperCase()
          makeNextUppercase = false
        }
        returnValue += c
      }
      return returnValue.replace(/\s+/g, '')
    }
  }
}
</script>
