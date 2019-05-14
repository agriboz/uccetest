<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">
    <div id="left-side-menu-container" class="slimscroll-menu">
      <!-- LOGO -->
      <a href="index.html" class="logo text-center">
        <span class="logo-lg">
          <img src="../../assets/images/quartz-logo.png" alt="" height="32" />
          <span class="text-white font-medium-1">UCCE</span>
        </span>
        <span class="logo-sm">
          <img src="../../assets/images/quartz-logo.png" alt="" height="16" />
        </span>
      </a>

      <!--- Sidemenu -->
      <ul class="metismenu side-nav">
        <li class="side-nav-item">
          <n-link :to="'/'" class="side-nav-link">
            <i class="icon-home"></i>
            <span> Home </span>
          </n-link>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="icon-stock-reports"></i>
            <span> Comstice Reports </span>
            <span class="menu-arrow"></span>
          </a>
          <ul class="side-nav-second-level" aria-expanded="false">
            <li>
              <n-link :to="'/comstice-reports/averege-speed-answer'"
                >Averege Speed Answer</n-link
              >
            </li>
            <li>
              <n-link :to="'/comstice-reports/am-Water'">AMWater</n-link>
            </li>
          </ul>
        </li>

        <li class="side-nav-item">
          <n-link :to="'/heatmaps'" class="side-nav-link">
            <i class="icon-heatmaps"></i>
            <span> Heatmaps </span>
          </n-link>
        </li>

        <li class="side-nav-item">
          <n-link :to="'/monthly-dashboard'" class="side-nav-link">
            <i class="icon-monthly"></i>
            <span> Monthly Dashboard </span>
          </n-link>
        </li>
        <li class="side-nav-item">
          <n-link :to="'year-on-year'" class="side-nav-link">
            <i class="icon-year-on-year"></i>
            <span> Year on Year </span>
          </n-link>
        </li>
        <li class="side-nav-item">
          <n-link :to="'/forecasting'" class="side-nav-link">
            <i class="icon-forecasting"></i>
            <span> Forecasting </span>
          </n-link>
        </li>
        <li class="side-nav-item">
          <n-link :to="'/logout'" class="side-nav-link">
            <i class="icon-sign-out" />
            <span> Sign Out </span>
          </n-link>
        </li>
      </ul>
      <!-- End Sidebar -->

      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
  <!-- Left Sidebar End -->
</template>

<script>
import MetisMenu from 'metismenujs'

export default {
  mounted() {
    this.$refs.metismenu = new MetisMenu('.side-nav')
  }
}
</script>
