import jwt_decode from 'jwt-decode'
const user = JSON.parse(localStorage.getItem('user'))

export const state = () => ({
  loading: false,
  user: user || {}
})

export const mutations = {
  loginSuccess(state, user) {
    state.user = { ...jwt_decode(user.token), token: user.token }
  },

  loginFailure(state) {
    state.user = null
  },

  logout(state) {
    state.user = null
    localStorage.clear()
  },

  setLoading(state, payload) {
    state.loading = payload
  }
}

export const actions = {
  async login({ commit, dispatch }, { username, password }) {
    try {
      const { data } = await this.$axios.post('login', { username, password })
      await commit('loginSuccess', data)
      await localStorage.setItem(
        'user',
        JSON.stringify({ ...jwt_decode(data.token), token: data.token })
      )
      await dispatch('alert/success', 'Login successful. Redirecting...', {
        root: true
      })
      await setTimeout(() => {
        this.$router.push({
          path: '/home'
        })
      }, 1000)
    } catch ({ response }) {
      await commit('loginFailure')
      await dispatch('alert/error', response.statusText, { root: true })
    }
  },
  logout({ commit }) {
    commit('logout')
  }
}
