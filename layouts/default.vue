<template>
  <section>
    <login />
  </section>
</template>

<script>
import Login from '@/components/Login'
export default {
  components: {
    Login
  },
  beforeMount() {
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('authentication-bg')
  }
}
</script>
