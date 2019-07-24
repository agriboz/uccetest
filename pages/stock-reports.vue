<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="Stock Reports" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <ul class="metismenu report-list">
              <li class="side-nav-item">
                <a href="#" class="side-nav-link d-flex">
                  <i
                    class="dripicons-folder d-flex align-items-center mr-1"
                  ></i>
                  <span>Stock Reports</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul class="side-nav-second-level">
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>All Field Historical Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="'/stock-reports/Agent Historical All Fields'"
                          >Agent Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link :to="'/stock-reports/Agent Not Ready Detail'"
                          >Agent Not Ready Detail</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Agent Precision Queue Historical All Fields'
                          "
                          >Agent Precision Queue Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link :to="'/stock-reports/Agent Queue Interval'"
                          >Agent Queue Interval</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Agent Skill Group Historical All Fields'
                          "
                          >Agent Skill Group Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Agent Team Historical All Fields'
                          "
                          >Agent Team Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Call Type Abandon/Answer Distribution Historical'
                          "
                          >Call Type Abandon/Answer Distribution
                          Historical</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="'/stock-reports/Call Type Historical All Fields'"
                          >Call Type Historical All Fields
                        </n-link>
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Call Type Queue Interval All Fields'
                          "
                          >Call Type Queue Interval All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Call Type Skill Group Historical All Fields'
                          "
                          >Call Type Skill Group Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Enterprise Service Historical All Fields'
                          "
                          >Enterprise Service Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Enterprise Skill Group Historical All Fields'
                          "
                          >Enterprise Skill Group Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/IVR Ports Performance Historical'
                          "
                          >IVR Ports Performance Historical</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Peripheral Service Historical All Fields'
                          "
                          >Peripheral Service Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Peripheral Skill Group Historical All Fields'
                          "
                          >Peripheral Skill Group Historical All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Precision Queue Abandon Answer Distribution Historical'
                          "
                          >Precision Queue Abandon Answer Distribution
                          Historical</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="'/stock-reports/Precision Queue Efficiency'"
                          >Precision Queue Efficiency</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Precision Queue Efficiency Drill Down'
                          "
                          >Precision Queue Efficiency Drill Down</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Precision Queue Interval All Fields'
                          "
                          >Precision Queue Interval All Fields</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                      <li class="d-flex align-items-center">
                        <n-link
                          :to="
                            '/stock-reports/Skill Group Abandon-Answer Distribution Historical'
                          "
                          >Skill Group Abandon-Answer Distribution
                          Historical</n-link
                        >
                        <i
                          v-b-tooltip.hover
                          title="Report Definition"
                          class="dripicons-information d-flex ml-1 text-primary"
                          @click="
                            openReportDefinition(
                              'callTypeHistoricalAllFields',
                              'Call Type Historical All Fields'
                            )
                          "
                        ></i>
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>All Fields Real Time Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Agent Precision Queue Membership'
                          "
                          >Agent Precision Queue Membership</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Queue Real Time'"
                          >Agent Queue Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Real Time'"
                          >Agent Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent Skill Group Real Time'"
                          >Agent Skill Group Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent State Real Time Graph'"
                          >Agent State Real Time Graph</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Team Real Time'"
                          >Agent Team Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Agent Team State Counts Real Time'
                          "
                          >Agent Team State Counts Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Call Type Real Time'"
                          >Call Type Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Enterprise Skill Group Real Time'
                          "
                          >Enterprise Skill Group Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Peripheral Service Real Time All Fields'
                          "
                          >Peripheral Service Real Time All Fields</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Peripheral Skill Group Real Time All Fields'
                          "
                          >Peripheral Skill Group Real Time All Fields</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Precision Queue Real Time All Fields'
                          "
                          >Precision Queue Real Time All Fields</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Precision Queue Step Real Time'"
                          >Precision Queue Step Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/System Capacity Real Time'"
                          >System Capacity Real Time</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Outbound Historical Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link
                          :to="'/stock-reports/Attempts Per Campaign Daily'"
                          >Attempts Per Campaign Daily</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Campaign Consolidated Daily'"
                          >Campaign Consolidated Daily</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Campaign Consolidated Half Hour'"
                          >Campaign Consolidated Half Hour</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Campaign Half Hour Summary'"
                          >Campaign Half Hour Summary</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Dialer Call Result Summary Half Hour'
                          "
                          >Dialer Call Result Summary Half Hour</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Dialer Capacity Daily'"
                          >Dialer Capacity Daily</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Dialer Capacity Half Hour'"
                          >Dialer Capacity Half Hour</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Import Rule'"
                          >Import Rule</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Query Rule Within Campaign Daily'
                          "
                          >Query Rule Within Campaign Daily</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Query Rule Within Campaign Half Hour'
                          "
                          >Query Rule Within Campaign Half Hour</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Outbound Real Time Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Call Summary Count Per Campaign Real Time'
                          "
                          >Call Summary Count Per Campaign Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Dialer Real Time'"
                          >Dialer Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Import Status Real Time'"
                          >Import Status Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Query Rule Within Campaign Real Time'
                          "
                          >Query Rule Within Campaign Real Time</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Transitional Historical Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent Attendance Historical'"
                          >Agent Attendance Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Skill Historical'"
                          >Agent Skill Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Summary Historical'"
                          >Agent Summary Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Team Historical'"
                          >Agent Team Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Agent Team Attendance Historical'
                          "
                          >Agent Team Attendance Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent Login/Logout Historical'"
                          >Agent Login/Logout Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent Not Ready Historical'"
                          >Agent Not Ready Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent State Trace Historical'"
                          >Agent State Trace Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Agent Team Not Ready Historical'"
                          >Agent Team Not Ready Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Call Type Skill Group Historical'
                          "
                          >Call Type Skill Group Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Skill Historical'"
                          >Skill Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Skill Call Profile Historical'"
                          >Skill Call Profile Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Skill Summary Historical'"
                          >Skill Summary Historical</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Transitional Real Time Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link :to="'/stock-reports/Agent Real Time'"
                          >Agent Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Agent Team Real Time'"
                          >Agent Team Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Call Type Real Time'"
                          >Call Type Real Time</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Call Type Today Real Time'"
                          >Call Type Today Real Time</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Live Data Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li class="side-nav-item">
                        <a class="d-flex" href="#">
                          <i
                            class="dripicons-folder d-flex align-items-center mr-1"
                          ></i>
                          <span>Agent Live Data</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level">
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Agent Live Data Default View'
                              "
                              >Agent Live Data Default View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Agent Live Data Available Fields'
                              "
                              >Agent Live Data Available Fields</n-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="side-nav-item">
                        <a class="d-flex" href="#">
                          <i
                            class="dripicons-folder d-flex align-items-center mr-1"
                          ></i>
                          <span>Agent Skill Group Live Data</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level">
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Agent Skill Group Live Data Default View'
                              "
                              >Agent Skill Group Live Data Default View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Agent Skill Group Live Data Available Fields'
                              "
                              >Agent Skill Group Live Data Available
                              Fields</n-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="side-nav-item">
                        <a class="d-flex" href="#">
                          <i
                            class="dripicons-folder d-flex align-items-center mr-1"
                          ></i>
                          <span>Precision Queue</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level">
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Precision Queue Default View'
                              "
                              >Precision Queue Default View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Precision Queue Agent Utilization View'
                              "
                              >Precision Queue Agent Utilization View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Precision Queue Available Fields'
                              "
                              >Precision Queue Available Fields</n-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="side-nav-item">
                        <a class="d-flex" href="#">
                          <i
                            class="dripicons-folder d-flex align-items-center mr-1"
                          ></i>
                          <span>Skill Group</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level">
                          <li>
                            <n-link
                              :to="'/stock-reports/Skill Group Default View'"
                              >Skill Group Default View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Skill Group Agent Utilization View'
                              "
                              >Skill Group Agent Utilization View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Skill Group Available Fields'
                              "
                              >Skill Group Available Fields</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="'/stock-reports/Skill Group Default View'"
                              >Skill Group Default View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Skill Group Agent Utilization View'
                              "
                              >Skill Group Agent Utilization View</n-link
                            >
                          </li>
                          <li>
                            <n-link
                              :to="
                                '/stock-reports/Skill Group Available Fields'
                              "
                              >Skill Group Available Fields</n-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Contact Sharing Reports</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link
                          :to="'/stock-reports/Contact Sharing All Fields'"
                          >Contact Sharing All Fields</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Contact Sharing Calls Routed'"
                          >Contact Sharing Calls Routed</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Contact Sharing Calls Routed Realtime'
                          "
                          >Contact Sharing Calls Routed Realtime</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Contact Sharing Calls Routed Over Time'
                          "
                          >Contact Sharing Calls Routed Over Time</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="'/stock-reports/Contact Sharing Configuration'"
                          >Contact Sharing Configuration</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Contact Sharing Errors'"
                          >Contact Sharing Errors</n-link
                        >
                      </li>
                      <li>
                        <n-link
                          :to="
                            '/stock-reports/Contact Sharing Expression Results'
                          "
                          >Contact Sharing Expression Results</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Contact Sharing Interval'"
                          >Contact Sharing Interval</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Outbound</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li>
                        <n-link :to="'/stock-reports/Historical'"
                          >Historical</n-link
                        >
                      </li>
                      <li>
                        <n-link :to="'/stock-reports/Real-time'"
                          >Real-time</n-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="side-nav-item">
                    <n-link :to="'/stock-reports/social-miner'">
                      <span>SocialMiner</span>
                    </n-link>
                  </li>
                  <li class="side-nav-item">
                    <a class="d-flex" href="#">
                      <i
                        class="dripicons-folder d-flex align-items-center mr-1"
                      ></i>
                      <span>Transitional</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul class="side-nav-third-level">
                      <li class="side-nav-item">
                        <a class="d-flex" href="#">
                          <i
                            class="dripicons-folder d-flex align-items-center mr-1"
                          ></i>
                          <span>Historical</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level pl-2">
                          <li class="side-nav-item">
                            <a class="d-flex" href="#">
                              <i
                                class="dripicons-folder d-flex align-items-center mr-1"
                              ></i>
                              <span>Agent</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level">
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Attendance Historical'
                                  "
                                  >Agent Attendance Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="'/stock-reports/Agent Skill Historical'"
                                  >Agent Skill Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Summary Historical'
                                  "
                                  >Agent Summary Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="'/stock-reports/Agent Team Historical'"
                                  >Agent Team Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Team Attendance Historical'
                                  "
                                  >Agent Team Attendance Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Login/Logout Historical'
                                  "
                                  >Agent Login/Logout Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Not Ready Historical'
                                  "
                                  >Agent Not Ready Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent State Trace Historical'
                                  "
                                  >Agent State Trace Historical</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Agent Team Not Ready Historical'
                                  "
                                  >Agent Team Not Ready Historical</n-link
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="side-nav-item">
                            <a href="#">
                              <span>Call Type</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level pl-2">
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Call Type Skill Group Historical'
                                  "
                                >
                                  Call Type Skill Group Historical
                                </n-link>
                              </li>
                            </ul>
                          </li>
                          <li class="side-nav-item">
                            <a href="#">
                              <span>Skill Group</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level pl-2">
                              <li>
                                <n-link :to="'/stock-reports/Skill Historical'">
                                  Skill Historical
                                </n-link>
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Call Profile Historical'
                                  "
                                >
                                  Skill Call Profile Historical
                                </n-link>
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Summary Historical'
                                  "
                                >
                                  Skill Summary Historical
                                </n-link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="side-nav-item">
                        <a href="#">
                          <span>Real-time</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul class="side-nav-third-level pl-2">
                          <li class="side-nav-item">
                            <a href="#">
                              <span>Agent</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level pl-2">
                              <li>
                                <n-link :to="'/stock-reports/Agent Real Time'"
                                  >Agent Real Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="'/stock-reports/Agent Team Real Time'"
                                  >Agent Team Real Time</n-link
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="side-nav-item">
                            <a href="#">
                              <span>Call Type</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level pl-2">
                              <li>
                                <n-link
                                  :to="'/stock-reports/Call Type Real Time'"
                                >
                                  Call Type Real Time
                                </n-link>
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Call Type Today Real Time'
                                  "
                                >
                                  Call Type Today Real Time
                                </n-link>
                              </li>
                            </ul>
                          </li>
                          <li class="side-nav-item">
                            <a href="#">
                              <span>Skill Group</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-fourth-level pl-2">
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Group Not Ready Detail Real Time'
                                  "
                                  >Skill Group Not Ready Detail Real
                                  Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Group Not Ready Real Time'
                                  "
                                  >Skill Group Not Ready Real Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Group Agent Status Real Time'
                                  "
                                  >Skill Group Agent Status Real Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Group Real Time Status'
                                  "
                                  >Skill Group Real Time Status</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Status Agent Real Time'
                                  "
                                  >Skill Status Agent Real Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="
                                    '/stock-reports/Skill Group Status Graphical Real Time'
                                  "
                                  >Skill Group Status Graphical Real
                                  Time</n-link
                                >
                              </li>
                              <li>
                                <n-link
                                  :to="'/stock-reports/Skill Status Real Time'"
                                  >Skill Status Real Time</n-link
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="reportDefModal" size="xl" :title="reportTitle" ok-only>
      <component
        :is="reportDefinitonComponent"
        v-if="reportDefinitonComponent"
      />
    </b-modal>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'

import MetisMenu from 'metismenujs'

export default {
  layout: 'authenticated',
  components: {
    PageTitle
  },

  data: () => ({
    reportTitle: null,
    reportDefModal: false,
    reportDefinitonComponent: null
  }),
  mounted() {
    this.$refs.metismenu = new MetisMenu('.report-list')
  },

  methods: {
    openReportDefinition(reportName, reportTitle) {
      this.reportDefModal = !this.reportDefModal
      this.reportTitle = reportTitle
      this.reportDefinitonComponent = () =>
        import(`@/components/ReportContents/${reportName}`)
    }
  }
}
</script>

<style scoped>
.side-nav-second-level li a {
  padding-left: 20px;
  padding-right: 5px;
}

.side-nav-third-level {
  padding-left: 20px;
  padding-right: 5px;
}

.side-nav-second-level li a,
.side-nav-third-level li a {
  color: #98a6ad;
}

.dripicons-information {
  cursor: pointer;
}
</style>
