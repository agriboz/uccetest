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

      const token = app.store.state.user.token

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
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
