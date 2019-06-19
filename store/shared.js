export const state = () => ({
  agents: [],
  callTypes: [],
  skills: [],
  queues: [],
  teams: []
})

export const mutations = {
  setShared(state, { key, data }) {
    state[key] = data
  }
}

export const actions = {
  async getShared({ commit }, { endpoint, key }) {
    try {
      const { data } = await this.$axios.get(`${endpoint}`)
      return data.length ? commit('setShared', { key, data }) : []
    } catch (error) {
      console.log(error)
    }
  }
}
