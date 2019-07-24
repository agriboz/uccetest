<template>
  <section class="nested2">
    <h3 class="topictitle3">
      Current Fields for the
      <span class="searchMark primary">Call Type Historical</span> All Fields
      Grid View
    </h3>
    <section>
      <section class="section">
        <a name="CUIC_RF_CAF4E155_00__section_B8712A13BC8942A59740144007AD883F"
          ><!-- --></a
        >
        <p>
          <strong>Current</strong> fields are those fields that appear by
          default in the grid view for this report.
        </p>

        <p>
          Current fields are listed here in the order (left to right) in which
          they appear by default in the stock template.
        </p>

        <section class="tablenoborder">
          <a name="CUIC_RF_CAF4E155_00__table_82EA1B0BD92D4A4BBFE17FCED0A89CE8"
            ><!-- --></a
          >
          <div class="tableContainer">
            <table
              cellpadding="3"
              cellspacing="0"
              width="90%"
              bordercolor="#808080"
              summary=""
              frame="border"
              border="1"
              rules="all"
            >
              <thead align="left">
                <tr>
                  <th class="cellrowborder" valign="top">
                    <p>Column (Field)</p>
                  </th>
                  <th class="cellrowborder" valign="top">
                    <p>Description</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Call Type Name</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>The enterprise name for the call type.</p>

                    <p>Derived from: Call_Type.EnterpriseName.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>DateTime</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The date and time when the record was generated in
                      MM/DD/YYYY (month, day, year) and HH:MM:SS (hours,
                      minutes, seconds) format.
                    </p>

                    <p>Derived from: Call_Type_Interval.DateTime.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>SL</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      Service Level Type used to calculate Service level for the
                      interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.ServiceLevel.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Aban Within SL</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The total number of calls of this call type abandoned
                      within the service level threshold during the interval.
                      Valid for both Unified CCE and standard ACD targets that
                      use translation routes.
                    </p>

                    <p>Derived from: Call_Type_Interval.ServiceLevelAband.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>ASA</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      Average Speed of Answer. The average answer wait time from
                      when first queue to skill group or LAA select node was
                      executed for this call to when this call was answered.
                      This is an important measure of service quality because
                      the time can vary, even over the course of one day, due to
                      call volumes and staff levels.
                    </p>

                    <p>
                      This is a calculated field, derived from:
                      Call_Type_Interval.AnswerWaitTime /
                      Call_Type_Interval.CallsAnswered.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    colspan="2"
                    valign="top"
                    headers="d25e3963 d25e3968 "
                  >
                    <p><strong>TASKS</strong></p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Offered</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      Tasks that were offered to this call type during the
                      interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.CallsOffered.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Assigned from Q</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type assigned from the
                      queue to be routed in the interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.RouterQueueCalls.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Answered</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The total number of calls of this call type answered by
                      agents in the interval.
                      <span
                        >This field is applicable to both Unified ICM and
                        Unified CCE with the following exception: if the call is
                        answered by an agent on a standard ACD, this field is
                        incremented only if the call was translation
                        routed.</span
                      >
                    </p>

                    <p>Derived from: Call_Type_Interval.CallsAnswered.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>AWT</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      Answer Wait Time. The answer wait time in seconds for all
                      calls that were handled for the call type during the
                      interval.
                      <span
                        >This field is applicable to both Unified ICM and
                        Unified CCE with the following exception: if the call is
                        answered by an agent on a standard ACD, this field is
                        incremented only if the call was translation
                        routed.</span
                      >
                    </p>

                    <p>Derived from Call_Type_Interval.AnswerWaitTime.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    colspan="2"
                    valign="top"
                    headers="d25e3963 d25e3968 "
                  >
                    <p><strong>COMPLETED TASKS</strong></p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Handled</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The total number of tasks handled to completion for the
                      call type in the interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.CallsHandled.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Aban</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The total number of calls abandoned while in VRU (that is,
                      while undergoing prompting or listening to voice menus
                      options), calls abandoned while queued to skill group, and
                      calls abandoned at agent desktop. This value also includes
                      abandons for calls that are not in the queue; for example,
                      when the caller hangs up while listening to a VRU prompt.
                      Therefore, the number of calls abandoned at a VRU before
                      being queued is TotalCallsAband minus
                      RouterCallsAbandToAgent and RouterCallsAbandQ. Does not
                      include short calls.
                    </p>

                    <p>Derived from: Call_Type_Interval.TotalCallsAband.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Return</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type that<span>
                        ICM software</span
                      >
                      routed to Return nodes in the interval.
                    </p>

                    <p>
                      This is a calculated field, derived from:
                      Call_Type_Interval.ReturnBusy +
                      Call_Type_Interval.ReturnRing +
                      Call_Type_Interval.ReturnRelease.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Default Treatment</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type that were given
                      default treatment or end nodes in the interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.ICRDefaultRouted.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Network Routed</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type that were routed
                      <span>not by ICM software but</span> by the carrier in the
                      interval. For pre-routed calls, the carrier decides where
                      to route the call.
                    </p>

                    <p>
                      Derived from: Call_Type_Interval.NetworkDefaultRouted.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Flow Out</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type that flowed out of
                      the call type to another call type in the interval.
                    </p>

                    <p>Derived from: Call_Type_Interval.OverflowOut.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Calls Error</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of calls for this call type that had errors or
                      were incomplete in the interval.
                    </p>

                    <p>
                      This is a calculated field, derived from:
                      Call_Type_Interval.ErrorCount +
                      Call_Type_Interval.IncompleteCalls +
                      Call_Type_Interval.AgentErrorCount.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Other</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of tasks of the call type that are Short, were
                      routed to non Agent targets, or were redirected in the
                      interval.
                    </p>

                    <p>
                      This is a calculated field, derived from:
                      Call_Type_Interval.CallsRONA +
                      Call_Type_Interval.CallsRoutedNonAgent +
                      Call_Type_Interval.ShortCalls.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>% Queued</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The percentage of all handled tasks of the call type that
                      were queued in the interval.
                    </p>

                    <p>
                      This is a calculated field, derived from: (
                      Call_Type_Interval.CallsQHandled /
                      Call_Type_Interval.CallsHandled).
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>% Aban</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The percentage of all the tasks that came in to the call
                      type in the interval that were abandoned.
                    </p>

                    <p>This is a calculated field, derived from:</p>

                    <p>
                      (Call_Type_Interval.TotalCallsAband /
                      (Call_Type_Interval.CallsHandled+
                      Call_Type_Interval.TotalCallsAband +
                      Call_Type_Interval.IncompleteCalls +
                      Call_Type_Interval.ReturnBusy +
                      Call_Type_Interval.ReturnRing +
                      Call_Type_Interval.ICRDefaultRouted +
                      Call_Type_Interval.NetworkDefaultRouted +
                      Call_Type_Interval.OverflowOut +
                      Call_Type_Interval.CallsRONA +
                      Call_Type_Interval.ReturnRelease +
                      Call_Type_Interval.CallsRoutedNonAgent +
                      Call_Type_Interval.ShortCalls+
                      Call_Type_Interval.ErrorCount +
                      Call_Type_Interval.AgentErrorCount ).
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Avg Aban Delay</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The average delay time of all abandoned calls that ended
                      in this call type during the current interval. This
                      includes calls that were abandoned in queue, calls that
                      were abandoned while at the IVR (prompting or self
                      service) and calls that were abandoned while ringing at
                      the agent's phone or en route to the agent's phone.
                    </p>

                    <p>
                      This is a calculated field. Derived from:
                      Call_Type_Interval.CallDelayAbandTime /
                      Call_Type_Interval.TotalCallsAband.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>Short Calls</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The number of calls abandoned during the Call_Type Abandon
                      Call Wait Time. Calls abandoned after this time period are
                      counted as Abandoned, not Short Calls.
                    </p>

                    <p>Derived from: Call_Type_Interval.ShortCalls.</p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>MaxCallsQueued</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The maximum number of calls in queue for this call type
                      during this interval.
                    </p>

                    <p>Derived from : Call_Type_Interval. MaxCallsQueued.</p>

                    <p>
                      The system displays data in this field only if your
                      Unified Intelligence Center system is connected to ICM
                      Release 8.0(3) or later.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3963 "
                  >
                    <p>MaxCallWaitTime</p>
                  </td>
                  <td
                    class="cellrowborder"
                    valign="top"
                    width="NaN%"
                    headers="d25e3968 "
                  >
                    <p>
                      The longest time a call had to wait before it was
                      dispositioned (abandoned or answered) in this interval.
                    </p>

                    <p>Derived from : Call_Type_Interval. MaxCallWaitTime.</p>

                    <p>
                      The system displays data in this field only if your
                      Unified Intelligence Center system is connected to ICM
                      Release 8.0(3) or later.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p><strong>Report Summaries</strong></p>

        <ul>
          <li style="margin-top:0.5em; margin-bottom:.5em; line-height:1.2em;">
            <a name="CUIC_RF_CAF4E155_00__li_D33AB51404FC4AFB974533804C42CF76"
              ><!-- --></a
            >
            <strong>Call Type Summary</strong>

            Field totals, except the service level (SL) field, for each call
            type in the report. The SL fields have percentage values.
          </li>
          <li style="margin-top:0.5em; margin-bottom:.5em; line-height:1.2em;">
            <a name="CUIC_RF_CAF4E155_00__li_8ED436D9CD594DE79AE90150C29185A5"
              ><!-- --></a
            >
            <strong>Report Summary</strong>

            Field totals, except the SL field, for all call types in the report.
            The SL fields have percentage values. The summary also displays the
            Max for MaxCallsQueued and MaxCallWaitTime.
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>
