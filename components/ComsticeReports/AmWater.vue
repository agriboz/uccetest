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
        <td colspan="2">{{ testItem.cscdailyivrdigest.overflowout }}</td>
        <td class="font-weight-bold align-middle h1" colspan="2" rowspan="3">
          {{
            $moment
              .duration(testItem.callshistorical.maxwaittime, 'second')
              .format('mm:ss', {
                trim: false
              })
          }}
        </td>
        <td class="font-weight-bold align-middle h1" rowspan="4">
          {{
            $moment
              .duration(testItem.callshistorical.asa, 'second')
              .format('mm:ss', {
                trim: false
              })
          }}
        </td>
        <td class="font-weight-bold align-middle h1" colspan="4" rowspan="4">
          {{
            $moment
              .duration(testItem.callshistorical.aht, 'second')
              .format('mm:ss', {
                trim: false
              })
          }}
        </td>
      </tr>
      <tr>
        <td>Forecasted</td>
        <td>
          <input
            v-model="testItem.forecasted"
            type="text"
            class="form-control"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2" rowspan="2"></td>
      </tr>
      <tr>
        <td class="font-weight-bold">PA Emergency</td>
        <td>15:30 Interval</td>
      </tr>
      <tr>
        <td colspan="9"></td>
      </tr>
      <tr class="font-weight-bold">
        <td colspan="2">IVR Performance</td>
        <td colspan="4">Staffing</td>
        <td colspan="3">Breakdown of Call Type</td>
      </tr>
      <tr>
        <td>Volume In</td>
        <td>{{ testItem.cscdailyivrdigest.offered }}</td>
        <td></td>
        <td class="font-weight-bold">Forecasted</td>
        <td class="font-weight-bold">Actual</td>
        <td class="font-weight-bold">Shrinkage</td>
        <td class="text-uppercase">Billing</td>
        <td>
          {{
            testItem.cscdailydigest.filter(
              item => item.identifier === 'BILLING_PQ'
            )[0].offered
          }}
        </td>
        <td>%{{ breakdownPercentage('BILLING_PQ') }}</td>
      </tr>
      <tr>
        <td>Contained</td>
        <td>{{ testItem.cscdailyivrdigest.contained }}</td>
        <td>AW FTE</td>
        <td>
          <input
            v-model="testItem.staffing.forecasted.awfte"
            type="text"
            class="form-control"
          />
        </td>
        <td>{{ testItem.staffing.actual.awfte }}</td>
        <td class="align-middle" rowspan="2">%{{ shrinkAgePerc('aw') }}</td>
        <td class="text-uppercase">Emergency</td>
        <td>
          {{
            testItem.cscdailydigest.filter(
              item => item.identifier === 'EMERGENCY_PQ'
            )[0].offered
          }}
        </td>
        <td>%{{ breakdownPercentage('EMERGENCY_PQ') }}</td>
      </tr>
      <tr>
        <td>Containment Rate</td>
        <td>
          %{{
            (
              100 *
              (+testItem.cscdailyivrdigest.contained /
                +testItem.cscdailyivrdigest.offered)
            ).toFixed(2)
          }}
        </td>
        <td>AW Hours</td>
        <td>
          <input
            v-model="testItem.staffing.forecasted.awhours"
            type="text"
            class="form-control"
          />
        </td>
        <td>{{ testItem.staffing.actual.awhours }}</td>
        <td class="text-uppercase">Make Payment</td>
        <td>
          {{
            testItem.cscdailydigest.filter(
              item => item.identifier === 'MAKEPAYMENT_PQ'
            )[0].offered
          }}
        </td>
        <td>%{{ breakdownPercentage('MAKEPAYMENT_PQ') }}</td>
      </tr>
      <tr>
        <td>Outflow to Queue</td>
        <td>{{ testItem.cscdailyivrdigest.overflowout }}</td>
        <td>Agency FTE</td>
        <td>
          <input
            v-model="testItem.staffing.forecasted.agencyfte"
            type="text"
            class="form-control"
          />
        </td>
        <td>{{ testItem.staffing.actual.agencyfte }}</td>
        <td class="align-middle" rowspan="2">%{{ shrinkAgePerc('agency') }}</td>
        <td class="text-uppercase">Other</td>
        <td>
          {{
            testItem.cscdailydigest.filter(
              item => item.identifier === 'OTHER_PQ'
            )[0].offered
          }}
        </td>
        <td>%{{ breakdownPercentage('OTHER_PQ') }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Agency Hours</td>
        <td>
          <input
            v-model="testItem.staffing.forecasted.agencyhours"
            type="text"
            class="form-control"
          />
        </td>
        <td>{{ testItem.staffing.actual.awhours }}</td>
        <td class="text-uppercase">Service</td>
        <td>
          {{
            testItem.cscdailydigest.filter(
              item => item.identifier === 'SERVICE_PQ'
            )[0].offered
          }}
        </td>
        <td>%{{ breakdownPercentage('SERVICE_PQ') }}</td>
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
    item: {},
    testItem: {
      staffing: {
        forecasted: {
          awfte: 143,
          awhours: 1144,
          agencyfte: 140,
          agencyhours: 1120
        },
        actual: {
          awfte: 82,
          awhours: 656,
          agencyfte: 115,
          agencyhours: 917
        }
      },
      forecasted: 1010,
      callshistorical: {
        offered: 356,
        handled: 346,
        id: 6084,
        answered: 350,
        slanswered: 283,
        abandoned: 10,
        maxwaittime: 317,
        asa: 36,
        aht: 529
      },
      cscdailyivrdigest: {
        name: 'CSC_MAIN_N_CT',
        date: '2019-04-19',
        offered: '13510',
        calltypeid: '6096',
        contained: '6468',
        overflowout: '7042'
      },
      cscdailydigest: [
        {
          identifier: 'BILLING_PQ',
          date: '2019-04-19',
          offered: '1822'
        },
        {
          identifier: 'EMERGENCY_PQ',
          date: '2019-04-19',
          offered: '947'
        },
        {
          identifier: 'MAKEPAYMENT_PQ',
          date: '2019-04-19',
          offered: '386'
        },
        {
          identifier: 'OTHER_PQ',
          date: '2019-04-19',
          offered: '1916'
        },
        {
          identifier: 'SERVICE_PQ',
          date: '2019-04-19',
          offered: '1974'
        }
      ]
    }
  }),

  computed: {
    totalBreakdown() {
      return this.testItem.cscdailydigest.reduce((acc, item) => {
        return acc + +item.offered
      }, 0)
    },
    title() {
      const route = this.$route.params.name
      const title = route.replace(/-/g, ' ')
      return title
    }
  },

  methods: {
    shrinkAgePerc(item) {
      console.log(item)
      // (forecast - actual) / forecast
      const {
        awfte: forecastedAwfte,
        awhours: forecastedAwhours,
        agencyfte: forecastedAgencyfte,
        agencyhours: forecastedAgencyhours
      } = this.testItem.staffing.forecasted

      const {
        awfte: actualAwfte,
        awhours: actualAwhours,
        agencyfte: actualAgencyfte,
        agencyhours: actualAgencyhours
      } = this.testItem.staffing.actual

      if (item === 'aw') {
        const totalForecast = forecastedAwfte + forecastedAwhours
        const totalActual = actualAwfte + actualAwhours
        const minusTotals = totalForecast - totalActual
        const result = minusTotals / totalForecast
        const toFixed = (result * 100).toFixed(2)
        return toFixed
      }

      if (item === 'agency') {
        const totalForecast = forecastedAgencyfte + forecastedAgencyhours
        const totalActual = actualAgencyfte + actualAgencyhours
        const minusTotals = totalForecast - totalActual
        const result = minusTotals / totalForecast
        const toFixed = (result * 100).toFixed(2)
        return toFixed
      }
    },
    breakdownPercentage(key) {
      const offered = this.testItem.cscdailydigest.filter(
        item => item.identifier === key
      )[0].offered

      return ((offered * 100) / this.totalBreakdown).toFixed(2)
    },

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
      const format = {
        start: 'YYYY-MM-DD 00:00:00',
        end: 'YYYY-MM-DD 23:59:59'
      }

      // const filterDate = this.$moment(this.item.startTime).format('YYYY-MM-DD')

      this.item.startTime = await this.$moment(this.item.startTime).format(
        format.start
      )
      this.item.endTime = await this.$moment(this.item.startTime).format(
        format.end
      )

      try {
        await this.$axios.post('cscdailydigest/daily', this.item)
        await this.$axios.post('callshistorical/daily', this.item)
        await this.$axios.post('cscdailylvrdigest/daily', this.item)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
