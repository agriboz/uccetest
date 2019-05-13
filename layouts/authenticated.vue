<template>
  <div class="wrapper">
    <sidebar />

    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
      <div class="content">
        <topbar />
        <nuxt />
        <!-- Start Content-->
      </div>
      <!-- content -->

      <bottombar />
    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->
    <loading :loading="loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import Bottombar from '@/components/Footer'
import Loading from '@/components/Loading'
export default {
  middleware: ['auth'],
  components: {
    Sidebar,
    Topbar,
    Bottombar,
    Loading
  },
  computed: {
    ...mapState(['loading'])
  },

  beforeMount() {
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('authentication-bg')
  }
}
</script>
