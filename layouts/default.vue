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
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import Bottombar from '@/components/Footer'
export default {
  components: {
    Sidebar,
    Topbar,
    Bottombar
  }
}
</script>
