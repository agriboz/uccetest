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
          <a href="javascript: void(0);" class="side-nav-link">
            <i class="icon-stock-reports"></i>
            <span> Cisco Reports </span>
            <span class="menu-arrow"></span>
          </a>
          <ul class="side-nav-second-level" aria-expanded="false">
            <li>
              <a href="#">All Field Historical Reports</a>
            </li>
            <li class="side-nav-item">
              <a href="#" aria-expanded="false">Agent Historical All Fields </a>
            </li>
            <li class="side-nav-item">
              <a href="#" aria-expanded="false">Agent Not Ready Detail </a>
            </li>
          </ul>
        </li>

        <li class="side-nav-item">
          <n-link :to="'heatmaps'" class="side-nav-link">
            <i class="icon-heatmaps"></i>
            <span> Heatmaps </span>
          </n-link>
        </li>

        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="icon-stock-reports"></i>
            <span> Monthly Dashboard </span>
            <span class="menu-arrow"></span>
          </a>
          <ul class="side-nav-second-level" aria-expanded="false">
            <li>
              <n-link :to="'/monthly-dashboard/call-answer-rate'"
                >Call Answer Rate</n-link
              >
            </li>
            <li>
              <n-link :to="'/monthly-dashboard/call-abandon-rate'"
                >Call Abandon Rate</n-link
              >
            </li>
            <li>
              <n-link :to="'/monthly-dashboard/service-level'"
                >Service Level</n-link
              >
            </li>
            <li>
              <n-link
                :to="'/monthly-dashboard/call-received-answered-abandoned'"
                >Call Received Answered Abandoned</n-link
              >
            </li>
          </ul>
        </li>
        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="icon-year-on-year"></i>
            <span> Year on Year </span>
            <span class="menu-arrow"></span>
          </a>
          <ul class="side-nav-second-level" aria-expanded="false">
            <li>
              <n-link :to="'/year-on-year/calls-received'"
                >Calls Received</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/calls-answered'"
                >Calls Answered</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/calls-abandoned'"
                >Calls Abandoned</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/avg-handle-time'"
                >Avg Handle Time</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/avg-wait-time'">Avg Wait Time</n-link>
            </li>
            <li>
              <n-link :to="'/year-on-year/sla-answer-percentage'"
                >SLA Answer Percentage</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/csq-answer-rate'"
                >CSQ Answer Rate</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/csq-abandon-rate'"
                >CSQ Abandon Rate</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/agent-occupancy'"
                >Agent Occupancy</n-link
              >
            </li>
            <li>
              <n-link :to="'/year-on-year/agent-efficiency'"
                >Agent Efficiency</n-link
              >
            </li>
          </ul>
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
