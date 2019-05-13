<template>
  <section>
    <h4 class="header-title mt-0 mb-3">{{ title }}</h4>
    <div class="form-group">
      <div class="row">
        <div class="col-md-6">
          <label>Select Date</label>
          <vue-ctk-date-time-picker
            v-model="item.startTime"
            :minute-interval="10"
            label="Select Date"
            auto-close
            no-header
            only-date
            formatted="YYYY-MM-DD"
            format="YYYY-MM-DD"
            color="#727cf5"
            enable-button-validate
          />
        </div>
        <div v-show="false" class="col-md-6">
          <label>End Date</label>
          <vue-ctk-date-time-picker
            v-model="item.endTime"
            :minute-interval="10"
            :min-date="item.startTime"
            auto-close
            no-header
            only-date
            formatted="YYYY-MM-DD"
            format="YYYY-MM-DD"
            color="#727cf5"
            enable-button-validate
          />
        </div>
      </div>
      <button class="btn btn-primary mt-2" @click="search">Search</button>
      <button
        class="btn btn-primary mt-2"
        @click="exportTableToExcel('amwater')('table')"
      >
        Export to Excel
      </button>
    </div>
    <table id="table" class="table table-bordered  text-center table-sm">
      <colgroup>
        <col style="width: 130px" />
        <col style="width: 122px" />
        <col style="width: 253px" />
        <col style="width: 131px" />
        <col style="width: 152px" />
        <col style="width: 146px" />
        <col style="width: 109px" />
        <col style="width: 119px" />
        <col style="width: 138px" />
      </colgroup>
      <tr>
        <th colspan="2">Volume to Queue</th>
        <th colspan="2">Oldest Call</th>
        <th>ASA</th>
        <th colspan="4">AHT</th>
      </tr>
      <tr>
        <td colspan="2">1094</td>
        <td class="font-weight-bold" colspan="2" rowspan="3">03:15</td>
        <td class="font-weight-bold" rowspan="4">05</td>
        <td class="font-weight-bold" colspan="4" rowspan="4">7:15</td>
      </tr>
      <tr>
        <td>Forecasted</td>
        <td>12301</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td class="font-weight-bold">PA Emergency</td>
        <td>15:30 Interval</td>
      </tr>
      <tr>
        <td colspan="9"></td>
      </tr>
      <tr class="font-weight-bold">
        <td colspan="2">IVR Performance</td>
        <td colspan="4">Staffing</td>
        <td colspan="3">Break Down of Call Type</td>
      </tr>
      <tr>
        <td>Volume In</td>
        <td>19666</td>
        <td></td>
        <td class="font-weight-bold">Forecasted</td>
        <td class="font-weight-bold">Actual</td>
        <td class="font-weight-bold">Shrinkage</td>
        <td class="text-uppercase">Billing</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Contained</td>
        <td>9115</td>
        <td>AW FTE</td>
        <td>1</td>
        <td>82</td>
        <td rowspan="2">42,66%</td>
        <td class="text-uppercase">Emergency</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Containment Rate</td>
        <td>50,545</td>
        <td>Agency Hours</td>
        <td>2</td>
        <td>234</td>
        <td class="text-uppercase">Make Payment</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Outflow to Queue</td>
        <td>10,633</td>
        <td>Agency FTE</td>
        <td>3</td>
        <td>2334</td>
        <td rowspan="2">18,12%</td>
        <td class="text-uppercase">Other</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Agency Hours</td>
        <td>4</td>
        <td>24</td>
        <td class="text-uppercase">Service</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="9">hi</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data: () => ({
    hasResponse: false,
    item: {}
  }),

  computed: {
    title() {
      const route = this.$route.params.name
      const title = route.replace(/-/g, ' ')
      return title
    }
  },

  methods: {
    exportTableToExcel() {
      var uri = 'data:application/vnd.ms-excel;base64,',
        template =
          '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
        base64 = function(s) {
          return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function(s, c) {
          return s.replace(/{(\w+)}/g, function(m, p) {
            return c[p]
          })
        }
      return (table, name) => {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        var link = document.createElement('a')
        link.download = `AMWater-${this.item.startTime}`
        link.href = uri + base64(format(template, ctx))
        link.click()
        // window.location.href = uri + base64(format(template, ctx))
      }
    },
    async search() {
      this.item.endTime = await this.item.startTime
      // await this.$axios.post('cscdailydigest/daily', this.item)
      await this.$axios.post('callshistorical/daily', {
        callTypes: [],
        ...this.item
      })
      // await this.$axios.post('cscdailyivrdigest/daily', this.item)
      // await this.$axios.post('cscdailydigest/daily', this.item)
    }
  }
}
</script>
