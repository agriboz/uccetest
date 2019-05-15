<template>
  <section class="duallist">
    <h6 class="duallist-title m-0 pb-0 white">{{ title }}</h6>
    <div class="duallist-box">
      <div class="duallist-box-border duallist-box-border-first">
        <div class="duallist-box-search">
          <input
            v-model="baseValue"
            type="text"
            class="form-control"
            placeholder="Search"
          />
        </div>
        <transition-group
          v-if="filteredBase.length"
          class="list-group"
          tag="ul"
          name="list-item"
        >
          <li
            v-for="b in filteredBase"
            :key="b.id"
            class="list-group-item"
            @click="transferToRight(b)"
          >
            {{ b.name }}
          </li>
        </transition-group>
      </div>
      <transition name="fade">
        <div v-if="filteredBase.length" class="btn-wrapper">
          <a class="btn-move" @click="addAll" />
        </div>
      </transition>
    </div>
    <div class="duallist-box">
      <div class="duallist-box-border duallist-box-border">
        <div class="duallist-box-search">
          <input
            v-model="selectedValue"
            type="text"
            class="form-control"
            placeholder="Search"
          />
        </div>

        <transition-group
          v-if="filteredSelected.length"
          class="list-group"
          tag="ul"
          name="list-item"
        >
          <li
            v-for="b in filteredSelected"
            :key="b.id"
            class="list-group-item selected"
            @click="transferToLeft(b)"
          >
            {{ b.name }}
          </li>
        </transition-group>
      </div>
      <transition name="fade">
        <div v-if="filteredSelected.length" class="btn-wrapper">
          <a class="btn-empty" @click="removeAll" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    baseList: {
      required: true,
      type: Array
    },
    selectedList: {
      required: true,
      type: Array
    }
  },
  // props: ['title', 'baseList', 'selectedList'],
  data: () => ({
    baseValue: '',
    selectedValue: ''
  }),
  computed: {
    baseListLocal: {
      get: function() {
        return this.baseList
      },
      set: function(item) {
        this.$emit('updateBase', item)
      }
    },
    selectedListLocal: {
      get: function() {
        return this.selectedList
      },
      set: function(item) {
        this.$emit('updateSelected', item)
      }
    },
    filteredBase() {
      return this.baseListLocal.filter(item => {
        return item.name.toLowerCase().includes(this.baseValue.toLowerCase())
      })
    },
    filteredSelected() {
      return this.selectedListLocal.filter(item => {
        return item.name
          .toLowerCase()
          .includes(this.selectedValue.toLowerCase())
      })
    }
  },

  methods: {
    async addAll() {
      this.selectedListLocal = await [
        ...this.selectedListLocal,
        ...this.filteredBase
      ]
      this.baseListLocal = this.baseListLocal.filter(
        item => !this.filteredBase.includes(item)
      )

      this.baseValue = ''
      console.log(this.baseListLocal)
    },

    transferToRight(item) {
      this.baseListLocal = this.baseListLocal.filter(
        listItem => listItem.id !== item.id
      )
      this.selectedListLocal = [...this.selectedListLocal, item]
    },

    transferToLeft(item) {
      this.selectedListLocal = this.selectedList.filter(
        listItem => listItem.id !== item.id
      )

      this.baseListLocal = [...this.baseList, item]
    },

    removeAll() {
      this.baseListLocal = [...this.baseListLocal, ...this.selectedListLocal]

      this.selectedListLocal = []
    }
  }
}
</script>
