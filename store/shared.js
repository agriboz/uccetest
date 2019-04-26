export const state = () => ({
  callTypes: [],
  skills: [],
  queues: []
})

export const mutations = {
  setShared(state, { key, data }) {
    state[key] = data
  }
}

export const actions = {
  async getShared({ commit }, { key }) {
    const { data } = await this.$axios.get(`${key}`)
    return data.length ? commit('setShared', { key, data }) : []
  }
}
