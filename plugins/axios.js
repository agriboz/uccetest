import axios from 'axios'
export const cancelTokenSources = new Map()
export default function({ app, $axios, store, redirect }) {
  $axios.onResponse(
    response => {
      store.commit('setLoading', false)
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  $axios.onRequest(
    config => {
      store.commit('setLoading', true)

      const user = localStorage.getItem('user') || null
      const token = JSON.parse(user)

      if (token) {
        config.headers.Authorization = `Bearer ${token.token}`
      }

      if (!config.hasOwnProperty('cancelToken')) {
        // Exclude requests that don't require cancel
        const source = axios.CancelToken.source()
        cancelTokenSources.set(source.cancel) // join the cancel queue
        config.cancelToken = source.token
      }

      return config
    },

    error => {
      return Promise.reject(error)
    }
  )

  $axios.onError(error => {
    console.dir(error)
    store.commit('setLoading', false)

    const code = parseInt(error.response && error.response.status)

    if (error && error.config && error.config.progress === false) {
      return
    }

    if (axios.isCancel(error)) {
      console.log(error.message)
      app.$toast.info(error.message)
    }

    if (code === 422) {
      app.$toast.error(error.response.data.message)
      return
    }

    if (code === 401) {
      app.store.dispatch('logout')
      return redirect(401, '/')
    }

    if (code === 500) {
      app.$toast.error(error.message)
      app.$toast.error(error.response.data.message)
    }
    if (code === 404 || code === 409) {
      console.log(error)
      app.$toast.error(error.message)
    }
    if (code === 400) {
      console.dir(error)
      app.$toast.error(error.response.data.message)
    }
  })
}
