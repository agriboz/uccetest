<template>
  <section>
    <b-tabs class="nav-variant" lazy>
      <b-tab class="p-3" title="Create Report">
        <div v-show="!hasResponse" class="form-group">
          <div class="row">
            <div class="col-md-6">
              <label>Select Date</label>
              <vue-ctk-date-time-picker
                v-model="item.startTime"
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

          <duallist-box
            class="mb-2 mt-2"
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

          <save-filter
            class="mt-2 mb-2"
            :item="{ callTypes: item.callTypes }"
            @updateFilter="item.callTypes = $event.callTypes"
          />

          <button class="btn btn-primary mt-2" @click="search">Search</button>
        </div>
        <button
          v-if="hasResponse"
          class="btn btn-warning mb-2"
          @click="hasResponse = !hasResponse"
        >
          Back to Filter
        </button>
        <table
          v-if="hasResponse"
          class="table table-bordered text-center table-sm"
        >
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
            <td colspan="2">{{ totalOverflowOut }}</td>
            <td class="font-weight-bold h1" colspan="2" rowspan="3">
              {{
                $moment.duration(totalOldestCall, 'second').format('mm:ss', {
                  trim: false
                })
              }}
            </td>
            <td class="font-weight-bold h1" rowspan="4">
              {{
                $moment.duration(totalAsa, 'second').format('mm:ss', {
                  trim: false
                })
              }}
            </td>
            <td class="font-weight-bold h1" colspan="4" rowspan="4">
              {{
                $moment.duration(totalAht, 'second').format('mm:ss', {
                  trim: false
                })
              }}
            </td>
          </tr>
          <tr>
            <td>Forecasted</td>
            <td>
              <input
                v-model="sendData.forecasted"
                type="text"
                class="form-control"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" rowspan="2"></td>
          </tr>
          <tr>
            <td class="font-weight-bold">
              {{ data.maxwaittimebyid[0].name }}
            </td>
            <td>
              {{
                $moment
                  .duration(+data.maxwaittimebyid[0].waittime, 'second')
                  .format('mm:ss', {
                    trim: false
                  })
              }}

              -
              {{ $moment(data.maxwaittimebyid[0].date).format('hh:mm A') }}
            </td>
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
            <td>{{ totalOffered }}</td>
            <td></td>
            <td class="font-weight-bold">Forecasted</td>
            <td class="font-weight-bold">Actual</td>
            <td class="font-weight-bold">Shrinkage</td>
            <td class="text-uppercase">Billing</td>
            <td>{{ breakdownCount('BILLING_PQ') }}</td>
            <td>{{ breakdownPercentage('BILLING_PQ') }}%</td>
          </tr>
          <tr>
            <td>Contained</td>
            <td>{{ totalContained }}</td>
            <td>AW FTE</td>
            <td>
              <input
                v-model="sendData.forecastedAwFte"
                type="text"
                class="form-control"
              />
            </td>
            <td>{{ data.amwaterteams.actual.awfte }}</td>
            <td rowspan="2">{{ shrinkAgePerc('aw') }}%</td>
            <td class="text-uppercase">Emergency</td>
            <td>{{ breakdownCount('EMERGENCY_PQ') }}</td>
            <td>{{ breakdownPercentage('EMERGENCY_PQ') }}%</td>
          </tr>
          <tr>
            <td>Containment Rate</td>
            <td>{{ containmentRate }}%</td>
            <td>AW Hours</td>
            <td>
              <input
                v-model="sendData.forecastedAwHours"
                type="text"
                class="form-control"
              />
            </td>
            <td>{{ data.amwaterteams.actual.awhours }}</td>
            <td class="text-uppercase">Make Payment</td>
            <td>{{ breakdownCount('MAKEPAYMENT_PQ') }}</td>
            <td>{{ breakdownPercentage('MAKEPAYMENT_PQ') }}%</td>
          </tr>
          <tr>
            <td>Outflow to Queue</td>
            <td>{{ totalOverflowOut }}</td>
            <td>Agency FTE</td>
            <td>
              <input
                v-model="sendData.forecastedAgencyFte"
                type="text"
                class="form-control"
              />
            </td>
            <td>{{ data.amwaterteams.actual.agencyfte }}</td>
            <td rowspan="2">{{ shrinkAgePerc('agency') }}%</td>
            <td class="text-uppercase">Other</td>
            <td>{{ breakdownCount('OTHER_PQ') }}</td>
            <td>{{ breakdownPercentage('OTHER_PQ') }}%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Agency Hours</td>
            <td>
              <input
                v-model="sendData.forecastedAgencyHours"
                type="text"
                class="form-control"
              />
            </td>
            <td>{{ data.amwaterteams.actual.agencyhours }}</td>
            <td class="text-uppercase">Service</td>
            <td>{{ breakdownCount('SERVICE_PQ') }}</td>
            <td>{{ breakdownPercentage('SERVICE_PQ') }}%</td>
          </tr>
          <tr>
            <td colspan="9">
              <input
                v-model="sendData.note"
                placeholder="Your note here"
                type="text"
                class="form-control text-center"
              />
            </td>
          </tr>
        </table>

        <button v-if="hasResponse" class="btn btn-primary" @click="saveReport">
          Save Report
        </button>
      </b-tab>
      <b-tab class="p-3" title="My Saved Reports" @click="getReports">
        <b-table
          :items="reports"
          :fields="tableFields"
          :current-page="currentPage"
          :per-page="perPage"
          :sort-by="'date'"
          striped
          hover
          show-empty
        >
          <template slot="actions" slot-scope="row">
            <button class="btn btn-primary" @click="getReportById(row.item.id)">
              <i class="mdi mdi-eye" /> View
            </button>
            <button class="btn btn-danger" @click="deleteReport(row.item.id)">
              <i class="mdi mdi-trash-can-outline" /> Delete
            </button>
          </template>
        </b-table>
        <b-col v-if="reports.length" md="6" class="my-1 pl-0">
          <b-pagination
            v-model="currentPage"
            :total-rows="reports.length"
            :per-page="perPage"
            class="my-0"
          />
        </b-col>
      </b-tab>
    </b-tabs>
    <b-modal
      v-if="report"
      v-model="modal"
      size="xl"
      title="Report Detail"
      ok-only
    >
      <table
        v-if="hasResponse"
        id="table"
        class="table table-bordered text-center table-sm"
      >
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
          <td colspan="2">
            {{ report.data.cscdailyivrdigest.outflowToQueue }}
          </td>
          <td class="font-weight-bold h1" colspan="2" rowspan="3">
            {{
              $moment
                .duration(report.data.callshistorical.oldestCall, 'second')
                .format('mm:ss', {
                  trim: false
                })
            }}
          </td>
          <td class="font-weight-bold h1" rowspan="4">
            {{
              $moment
                .duration(report.data.callshistorical.asa, 'second')
                .format('mm:ss', {
                  trim: false
                })
            }}
          </td>
          <td class="font-weight-bold h1" colspan="4" rowspan="4">
            {{
              $moment
                .duration(report.data.callshistorical.aht, 'second')
                .format('mm:ss', {
                  trim: false
                })
            }}
          </td>
        </tr>
        <tr>
          <td>Forecasted</td>
          <td>{{ report.data.forecasted }}</td>
        </tr>
        <tr>
          <td colspan="2" rowspan="2"></td>
        </tr>
        <tr>
          <td class="font-weight-bold">
            {{ report.data.maxwaittimebyid }}
            {{ report.data.maxwaittimebyid.name }}
          </td>
          <td>
            {{
              $moment
                .duration(+report.data.maxwaittimebyid.waittime, 'second')
                .format('mm:ss', { trim: false })
            }}
            -
            {{ $moment(report.data.maxwaittimebyid.date).format('hh:mm A') }}
          </td>
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
          <td>{{ report.data.cscdailyivrdigest.volumeIn }}</td>
          <td></td>
          <td class="font-weight-bold">Forecasted</td>
          <td class="font-weight-bold">Actual</td>
          <td class="font-weight-bold">Shrinkage</td>
          <td class="text-uppercase">Billing</td>
          <td>{{ report.data.cscdailydigest.billing.count }}</td>
          <td>{{ report.data.cscdailydigest.billing.percentage }}%</td>
        </tr>
        <tr>
          <td>Contained</td>
          <td>{{ report.data.cscdailyivrdigest.contained }}</td>
          <td>AW FTE</td>
          <td>{{ report.data.amwaterteams.awfte.forecasted }}</td>
          <td>{{ report.data.amwaterteams.awfte.actual }}</td>
          <td rowspan="2">{{ report.data.amwaterteams.shrinkage.aw }}%</td>
          <td class="text-uppercase">Emergency</td>
          <td>{{ report.data.cscdailydigest.emergency.count }}</td>
          <td>{{ report.data.cscdailydigest.emergency.percentage }}%</td>
        </tr>
        <tr>
          <td>Containment Rate</td>
          <td>{{ report.data.cscdailyivrdigest.containmentRate }}%</td>
          <td>AW Hours</td>
          <td>{{ report.data.amwaterteams.awhours.forecasted }}</td>
          <td>{{ report.data.amwaterteams.awhours.actual }}</td>
          <td class="text-uppercase">Make Payment</td>
          <td>{{ report.data.cscdailydigest.makePayment.count }}</td>
          <td>{{ report.data.cscdailydigest.makePayment.percentage }}%</td>
        </tr>
        <tr>
          <td>Outflow to Queue</td>
          <td>{{ report.data.cscdailyivrdigest.outflowToQueue }}</td>
          <td>Agency FTE</td>
          <td>{{ report.data.amwaterteams.agencyfte.forecasted }}</td>
          <td>{{ report.data.amwaterteams.agencyfte.actual }}</td>
          <td rowspan="2">{{ report.data.amwaterteams.shrinkage.agency }}%</td>
          <td class="text-uppercase">Other</td>
          <td>{{ report.data.cscdailydigest.other.count }}</td>
          <td>{{ report.data.cscdailydigest.other.percentage }}%</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Agency Hours</td>
          <td>{{ report.data.amwaterteams.agencyhours.forecasted }}</td>
          <td>{{ report.data.amwaterteams.agencyhours.actual }}</td>
          <td class="text-uppercase">Service</td>
          <td>{{ breakdownCount('SERVICE_PQ') }}</td>
          <td>{{ breakdownPercentage('SERVICE_PQ') }}%</td>
        </tr>
        <tr>
          <td colspan="9">{{ report.data.note }}</td>
        </tr>
      </table>

      <button
        class="btn btn-primary mt-2"
        @click="exportTableToExcel('amwater')('table')"
      >
        Export to Excel
      </button>
    </b-modal>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DuallistBox from '@/components/DuallistBox'
import SaveFilter from '@/components/SaveFilter'

export default {
  components: {
    DuallistBox,
    SaveFilter
  },

  data: () => ({
    hasResponse: false,
    modal: false,
    reports: [],
    report: null,
    currentPage: 1,
    perPage: 10,
    pageOptions: [5, 10, 15],
    tableFields: [
      { key: 'date', label: 'Date' },
      { key: 'name', label: 'Report Name' },
      { key: 'actions', label: 'Actions' }
    ],
    item: {
      startTime: null,
      callTypes: []
    },
    data: {
      cscdailydigest: [],
      cscdailyivrdigest: [],
      callshistorical: [],
      maxwaittimebyid: [],
      amwaterteams: {
        actual: {
          awfte: 0,
          awhours: 0,
          agencyfte: 0,
          agencyhours: 0
        }
      }
    },
    sendData: {
      note: null,
      forecasted: 0,
      forecastedAwFte: 143,
      forecastedAwHours: 1144,
      forecastedAgencyFte: 115,
      forecastedAgencyHours: 1120
    },
    testItem: {
      amwaterteams: {
        actual: {
          awfte: 82,
          awhours: 656,
          agencyfte: 115,
          agencyhours: 917
        }
      },
      callshistorical: [
        {
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
        {
          offered: 356,
          handled: 346,
          id: 6084,
          answered: 350,
          slanswered: 283,
          abandoned: 10,
          maxwaittime: 317,
          asa: 36,
          aht: 529
        }
      ],
      cscdailyivrdigest: [
        {
          name: 'CSC_MAIN_N_CT',
          date: '2019-04-19',
          offered: '13510',
          calltypeid: '6096',
          contained: '6468',
          overflowout: '7042'
        },
        {
          name: 'CSC_MAIN_N_CT',
          date: '2019-04-19',
          offered: '6000',
          calltypeid: '6096',
          contained: '6468',
          overflowout: '7042'
        }
      ],
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
        },
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
    ...mapState('shared', ['callTypes']),

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

    saveData() {
      return {
        name: `AMWater-${this.item.startTime}`,
        date: this.item.startTime,
        data: {
          note: this.sendData.note,
          forecasted: this.sendData.forecasted,
          amwaterteams: {
            awfte: {
              forecasted: this.sendData.forecastedAwFte,
              actual: this.data.amwaterteams.actual.awfte
            },
            awhours: {
              forecasted: this.sendData.forecastedAwHours,
              actual: this.data.amwaterteams.actual.awhours
            },
            agencyfte: {
              forecasted: this.sendData.forecastedAgencyFte,
              actual: this.data.amwaterteams.actual.agencyfte
            },
            agencyhours: {
              forecasted: this.sendData.forecastedAgencyHours,
              actual: this.data.amwaterteams.actual.agencyhours
            },
            shrinkage: {
              aw: this.shrinkAgePerc('aw'),
              agency: this.shrinkAgePerc('agency')
            }
          },
          maxwaittimebyid: {
            name: this.data.maxwaittimebyid[0].name,
            waittime: this.data.maxwaittimebyid[0].waittime,
            date: this.data.maxwaittimebyid[0].date
          },
          callshistorical: {
            oldestCall: this.totalOldestCall,
            asa: this.totalAsa,
            aht: this.totalAht
          },
          cscdailyivrdigest: {
            volumeIn: this.totalOffered,
            contained: this.totalContained,
            outflowToQueue: this.totalOverflowOut,
            containmentRate: this.containmentRate
          },
          cscdailydigest: {
            billing: {
              count: this.breakdownCount('BILLING_PQ'),
              percentage: this.breakdownPercentage('BILLING_PQ')
            },
            emergency: {
              count: this.breakdownCount('EMERGENCY_PQ'),
              percentage: this.breakdownPercentage('EMERGENCY_PQ')
            },
            makePayment: {
              count: this.breakdownCount('MAKEPAYMENT_PQ'),
              percentage: this.breakdownPercentage('MAKEPAYMENT_PQ')
            },
            other: {
              count: this.breakdownCount('OTHER_PQ'),
              percentage: this.breakdownPercentage('OTHER_PQ')
            },
            service: {
              count: this.breakdownCount('SERVICE_PQ'),
              percentage: this.breakdownPercentage('SERVICE_PQ')
            }
          }
        }
      }
    },
    containmentRate() {
      return (100 * (+this.totalContained / +this.totalOffered)).toFixed(2)
    },

    totalContained() {
      return this.data.cscdailyivrdigest.reduce((acc, item) => {
        return acc + +item.contained
      }, 0)
    },

    totalOffered() {
      return this.data.cscdailyivrdigest.reduce((acc, item) => {
        return acc + +item.offered
      }, 0)
    },

    totalOverflowOut() {
      return this.data.cscdailyivrdigest.reduce((acc, item) => {
        return acc + +item.overflowout
      }, 0)
    },

    totalOldestCall() {
      return this.data.callshistorical.reduce(
        (st, tot) => (st = st > tot.maxwaittime ? st : tot.maxwaittime),
        0
      )
    },

    totalCallSize() {
      return this.data.callshistorical.reduce((st, en) => {
        return st + en.handled
      }, 0)
    },

    totalAsa() {
      return (
        this.data.callshistorical
          .map(item => {
            return item.handled * item.asa
          })
          .reduce((f, e) => {
            return f + e
          }, 0) / this.totalCallSize
      )
    },

    totalAht() {
      return (
        this.data.callshistorical
          .map(item => {
            return item.handled * item.aht
          })
          .reduce((f, e) => {
            return f + e
          }, 0) / this.totalCallSize
      )
    },

    totalBreakdown() {
      return this.data.cscdailydigest.reduce((acc, item) => {
        return acc + +item.offered
      }, 0)
    }
  },

  beforeMount() {
    if (this.item.callTypes) {
      this.getShared({
        endpoint: 'shared/calltypes',
        key: 'callTypes'
      })
    }
  },

  methods: {
    ...mapActions({
      getShared: 'shared/getShared'
    }),

    shrinkAgePerc(item) {
      const {
        forecastedAwFte,
        forecastedAwHours,
        forecastedAgencyFte,
        forecastedAgencyHours
      } = this.sendData

      const {
        awfte: actualAwfte,
        awhours: actualAwhours,
        agencyfte: actualAgencyfte,
        agencyhours: actualAgencyhours
      } = this.data.amwaterteams.actual

      if (item === 'aw') {
        const totalForecast = +forecastedAwFte + +forecastedAwHours
        const totalActual = actualAwfte + actualAwhours
        const minusTotals = (totalForecast - totalActual) * 100
        const result = minusTotals / totalForecast
        const toFixed = result.toFixed(2)
        return toFixed
      }

      if (item === 'agency') {
        const totalForecast = +forecastedAgencyFte + +forecastedAgencyHours
        const totalActual = actualAgencyfte + actualAgencyhours
        const minusTotals = (totalForecast - totalActual) * 100
        const result = minusTotals / totalForecast
        const toFixed = result.toFixed(2)
        console.log(actualAgencyhours)
        return toFixed
      }
    },

    breakdownPercentage(key) {
      const offered = this.data.cscdailydigest.filter(
        item => item.identifier === key
      )

      const totalOffered = offered.reduce((acc, item) => {
        return acc + +item.offered
      }, 0)

      console.log(totalOffered)
      return ((totalOffered * 100) / this.totalBreakdown).toFixed(2)
    },

    breakdownCount(key) {
      const offered = this.data.cscdailydigest.filter(
        item => item.identifier === key
      )
      const result = offered.reduce((acc, item) => {
        return acc + +item.offered
      }, 0)
      return result
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
        link.download = `AMWater-${this.report.date}`
        link.href = uri + base64(format(template, ctx))
        link.click()
        // window.location.href = uri + base64(format(template, ctx))
      }
    },

    async getReports() {
      const { data } = await this.$axios.get('daily-metrics')
      this.reports = data
    },

    async getReportById(id) {
      const { data } = await this.$axios.get(`daily-metrics/${id}`)
      this.report = await data
      this.modal = await true
    },

    async saveReport() {
      try {
        await this.$axios.post(`daily-metrics`, this.saveData)
        await this.$toast.success('Report Created')
      } catch (error) {
        await this.$toast.error(error.response.statusText)
      }
    },

    async search() {
      this.hasResponse = false
      // const format = 'YYYY-MM-DD'

      this.item.endTime = this.item.startTime
      try {
        const cscdailydigest = await this.$axios.post(
          `cscdailydigest/daily`,
          this.item
        )
        const callshistorical = await this.$axios.post(
          `callshistorical/daily`,
          this.item
        )

        const cscdailyivrdigest = await this.$axios.post(
          `cscdailyivrdigest/daily`,
          this.item
        )

        const maxwaittimebyid = await this.$axios.post(
          `maxwaittime/byid`,
          this.item
        )

        const amwaterteams = await this.$axios.post(
          `amwaterteams/daily`,
          this.item
        )

        /* awfte: result4.agents[0].handled,
             awhours: result4.agents[0].hours,
             agencyfte: result4.agents[1].handled,
             agencyhours: result4.agents[1].hours */

        await Promise.all([
          cscdailyivrdigest,
          cscdailydigest,
          callshistorical,
          maxwaittimebyid,
          amwaterteams
        ]).then(datas => {
          this.data = {
            cscdailydigest: datas[1].data,
            callshistorical: datas[2].data,
            cscdailyivrdigest: datas[0].data,
            maxwaittimebyid: datas[3].data,
            amwaterteams: {
              actual: {
                awfte: datas[4].data[0].handled,
                awhours: 656,
                agencyfte: datas[4].data[1].handled,
                agencyhours: 97
              }
            }
          }
          this.hasResponse = true
        })

        this.sendData = {
          forecastedAwFte: 82,
          forecastedAwHours: 656,
          forecastedAgencyFte: 115,
          forecastedAgencyHours: 97
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.table > tr > td {
  vertical-align: middle;
}
</style>
