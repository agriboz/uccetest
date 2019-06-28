<template>
  <div v-if="hasResponse" class="heatmap-wrapper">
    <div class="d-flex justify-content-center">
      <h5>
        {{ selectedHeatmap.name }} - Start Date:
        {{ $moment(data.startDate).format('YYYY-MM-DD') }} - End Date:
        {{ $moment(data.endDate).format('YYYY-MM-DD') }}
      </h5>
    </div>

    <div v-for="(t, i) in data.days" :key="i" class="heatmap">
      <div
        v-if="ignoreDays[0].day !== t.day && ignoreDays[1].day !== t.day"
        class="item"
      >
        <div class="item-days">{{ t.day }}</div>
        <div
          v-for="tt in t.data"
          :key="tt.number"
          v-b-tooltip.hover
          :title="t.day"
          :style="{
            backgroundColor: setBackground(tt[selectedHeatmap.key])
          }"
          class="item-numbers"
        >
          <span v-if="isTimeFormat">
            {{
              $moment
                .duration(tt[selectedHeatmap.key], 'seconds')
                .format('mm:ss', { trim: false })
            }}
          </span>
          <span v-if="isPercentageFormat">{{ tt[selectedHeatmap.key] }}%</span>
          <span v-if="isCountFormat">{{ tt[selectedHeatmap.key] }}</span>
        </div>
      </div>
    </div>
    <div class="item item-border">
      <div class="item-days" />
      <template v-for="(t, i) in data.days[0].data">
        <div :key="i" class="item-numbers">{{ t.hour }}</div>
      </template>
    </div>
    <div class="item-perc-wrapper d-flex justify-content-center">
      <div class="item-perc">
        <div class="item-inner">
          <div class="perc-block orange" />
          <span v-if="isTimeFormat"
            >{{
              $moment
                .duration(threshold.threshold2, 'seconds')
                .format('mm:ss', { trim: false })
            }}
            -
            {{
              $moment
                .duration(threshold.threshold1, 'seconds')
                .format('mm:ss', { trim: false })
            }}</span
          >

          <span v-if="isCountFormat">
            {{ threshold.threshold2 }} -
            {{ threshold.threshold1 }}
          </span>

          <span v-if="isPercentageFormat">
            {{ +threshold.threshold2 + 1 }}% - {{ threshold.threshold1 }}%
          </span>
        </div>
      </div>
      <div class="item-perc">
        <div class="item-inner">
          <div class="perc-block red" />
          <span v-if="isTimeFormat">
            {{
              $moment
                .duration(+threshold.threshold1 + 1, 'seconds')
                .format('mm:ss', { trim: false })
            }}</span
          >
          <span v-if="isPercentageFormat">
            {{ +threshold.threshold1 + 1 }}%
          </span>
          <span v-if="isCountFormat"> {{ +threshold.threshold1 + 1 }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    },
    threshold: {
      required: true,
      type: Object
    },
    selectedHeatmap: {
      required: true,
      type: Object
    },
    ignoreDays: {
      required: true,
      type: Array
    },
    hasResponse: {
      required: true,
      type: Boolean
    }
  },

  computed: {
    isTimeFormat() {
      return (
        this.selectedHeatmap.key === 'asa' ||
        this.selectedHeatmap.key === 'aht' ||
        this.selectedHeatmap.key === 'asa' ||
        this.selectedHeatmap.key === 'total_handled_time'
      )
    },
    isPercentageFormat() {
      return (
        this.selectedHeatmap.key === 'calls_answer_rate' ||
        this.selectedHeatmap.key === 'calls_abandoned_rate' ||
        this.selectedHeatmap.key === 'percent_distribution_aht' ||
        this.selectedHeatmap.key === 'service_level_rate' ||
        this.selectedHeatmap.key === 'percent_distribution_calls_received'
      )
    },
    isCountFormat() {
      return (
        this.selectedHeatmap.key === 'calls_abandoned' ||
        this.selectedHeatmap.key === 'calls_answered' ||
        this.selectedHeatmap.key === 'calls_handled' ||
        this.selectedHeatmap.key === 'calls_presented' ||
        this.selectedHeatmap.key === 'handle_sl_met'
      )
    }
  },

  methods: {
    setBackground(data) {
      if (this.threshold.order === 1) {
        return data <= this.threshold.threshold2
          ? '#fa4a4a'
          : data <= this.threshold.threshold1
          ? '#ff7e30'
          : '#29af39'
      } else {
        return data <= this.threshold.threshold2
          ? '#29af39'
          : data <= this.threshold.threshold1
          ? '#ff7e30'
          : '#fa4a4a'
      }
    }
  }
}
</script>
