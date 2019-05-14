<template>
  <section>
    <login />
    <loading :loading="loading" />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Login from '@/components/Login'
import Loading from '@/components/Loading'

export default {
  components: {
    Login,
    Loading
  },

  computed: {
    ...mapState(['loading'])
  },

  beforeMount() {
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('authentication-bg')
  }
}
</script>
