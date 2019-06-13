(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{270:function(e,t,n){"use strict";var l=n(47),r=n.n(l),o="YYYY-MM-DD HH:mm:ss",c=function(){return r()().format(o)};t.a=function(e,t,n){return 1===e&&t?r()().startOf("day").format(o):1===e&&n?c():2===e&&t?r()().add(-1,"day").startOf("day").format(o):2===e&&n?r()().add(-1,"day").endOf("day").format(o):3===e&&t?r()().startOf("week").format(o):3===e&&n?r()().endOf("week").format(o):4===e&&t?r()().subtract(1,"weeks").startOf("week").format(o):4===e&&n?r()().subtract(1,"weeks").endOf("week").format(o):5===e&&t?r()().startOf("month").format(o):5===e&&n?r()().endOf("month").format(o):6===e&&t?r()().subtract(1,"month").startOf("month").format(o):6===e&&n?r()().subtract(1,"month").endOf("month").format(o):7===e&&t?r()().startOf("year").format(o):7===e&&n?c():8===e&&t?r()().subtract(1,"year").startOf("year").format(o):8===e&&n?r()().subtract(1,"year").endOf("year").format(o):void 0}},271:function(e,t,n){"use strict";var l=n(24),r=(n(43),n(10)),o=(n(9),n(78),n(100),{props:{title:{required:!0,type:String},baseList:{required:!0,type:Array},selectedList:{required:!0,type:Array}},data:function(){return{baseValue:"",selectedValue:""}},computed:{baseListLocal:{get:function(){return this.baseList},set:function(e){this.$emit("updateBase",e)}},selectedListLocal:{get:function(){return this.selectedList},set:function(e){this.$emit("updateSelected",e)}},filteredBase:function(){var e=this;return this.baseListLocal.filter(function(t){return t.name.toLowerCase().includes(e.baseValue.toLowerCase())})},filteredSelected:function(){var e=this;return this.selectedListLocal.filter(function(t){return t.name.toLowerCase().includes(e.selectedValue.toLowerCase())})}},methods:{addAll:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[].concat(Object(l.a)(this.selectedListLocal),Object(l.a)(this.filteredBase));case 2:this.selectedListLocal=e.sent,this.baseListLocal=this.baseListLocal.filter(function(e){return!t.filteredBase.includes(e)}),this.baseValue="",console.log(this.baseListLocal);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),transferToRight:function(e){this.baseListLocal=this.baseListLocal.filter(function(t){return t.id!==e.id}),this.selectedListLocal=[].concat(Object(l.a)(this.selectedListLocal),[e])},transferToLeft:function(e){this.selectedListLocal=this.selectedList.filter(function(t){return t.id!==e.id}),this.baseListLocal=[].concat(Object(l.a)(this.baseList),[e])},removeAll:function(){this.baseListLocal=[].concat(Object(l.a)(this.baseListLocal),Object(l.a)(this.selectedListLocal)),this.selectedListLocal=[]}}}),c=n(7),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"duallist"},[n("h6",{staticClass:"duallist-title m-0 pb-0 white"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"duallist-box"},[n("div",{staticClass:"duallist-box-border duallist-box-border-first"},[n("div",{staticClass:"duallist-box-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.baseValue,expression:"baseValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.baseValue},on:{input:function(t){t.target.composing||(e.baseValue=t.target.value)}}})]),e._v(" "),e.filteredBase.length?n("transition-group",{staticClass:"list-group",attrs:{tag:"ul",name:"list-item"}},e._l(e.filteredBase,function(b){return n("li",{key:b.id,staticClass:"list-group-item",on:{click:function(t){return e.transferToRight(b)}}},[e._v("\n          "+e._s(b.name)+"\n        ")])}),0):e._e()],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.filteredBase.length?n("div",{staticClass:"btn-wrapper"},[n("a",{staticClass:"btn-move",on:{click:e.addAll}})]):e._e()])],1),e._v(" "),n("div",{staticClass:"duallist-box"},[n("div",{staticClass:"duallist-box-border duallist-box-border"},[n("div",{staticClass:"duallist-box-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.selectedValue},on:{input:function(t){t.target.composing||(e.selectedValue=t.target.value)}}})]),e._v(" "),e.filteredSelected.length?n("transition-group",{staticClass:"list-group",attrs:{tag:"ul",name:"list-item"}},e._l(e.filteredSelected,function(b){return n("li",{key:b.id,staticClass:"list-group-item selected",on:{click:function(t){return e.transferToLeft(b)}}},[e._v("\n          "+e._s(b.name)+"\n        ")])}),0):e._e()],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.filteredSelected.length?n("div",{staticClass:"btn-wrapper"},[n("a",{staticClass:"btn-empty",on:{click:e.removeAll}})]):e._e()])],1)])},[],!1,null,null,null);t.a=component.exports},272:function(e,t,n){"use strict";n(55),n(155);var l=n(1),r=n(19),o=n(271),c=n(270),d={components:{DuallistBox:o.a},props:{item:{required:!0,type:Object},isVisibleItem:{required:!1,default:function(){return{}},type:Object},showFooter:{required:!0,type:Boolean},isSearchable:{required:!0,type:Boolean},url:{required:!1,default:null,type:String}},data:function(){return{dateRanges:[{id:1,name:"Today"},{id:2,name:"Yesterday"},{id:3,name:"This Week"},{id:4,name:"Last Week"},{id:5,name:"This Month"},{id:6,name:"Last Month"},{id:7,name:"Year To Date"},{id:8,name:"Last Year"}],relativeDate:!0,selectedDate:null}},computed:Object(l.a)({},Object(r.d)("shared",["callTypes","skills","csqs","queues","agents"]),{yearRange:function(){var e=this.$moment().subtract(5,"years"),t=this.$moment.range(e,new Date);return Array.from(t.by("year")).map(function(e){return e.format("YYYY")})},optionsAgents:function(){return{baseList:this.agents,selectedList:[],title:"Agents"}},optionsCallTypes:function(){return{baseList:this.callTypes,selectedList:[],title:"Call Types"}},optionsSkills:function(){return{baseList:this.skills,selectedList:[],title:"Skills"}},optionsQueues:function(){return{baseList:this.queues,selectedList:[],title:"Precision Queue"}}}),watch:{item:function(){this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"})}},beforeMount:function(){this.selectedDate=this.dateRanges[0],this.item.agents&&this.getShared({endpoint:"shared/agents",key:"agents"}),this.item.callTypes&&this.getShared({endpoint:"shared/calltypes",key:"callTypes"}),this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"}),this.item.skills&&this.getShared({endpoint:"shared/skills",key:"skills"})},created:function(){this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"})},methods:Object(l.a)({changeRelative:function(e){this.relativeDate=e},changeDates:function(){this.item.startTime=this.relativeDate?Object(c.a)(this.selectedDate.id,!0,!1):this.$moment(this.selectedStockReport.startTime).format("YYYY-MM-DD HH:mm:ss")||"",this.item.endTime=this.relativeDate?Object(c.a)(this.selectedDate.id,!1,!0):this.$moment(this.selectedStockReport.endTime).format("YYYY-MM-DD HH:mm:ss")},limitText:function(e){return"and ".concat(e,e>1?" other options.":" other option.")}},Object(r.b)({getShared:"shared/getShared"}),{search:function(){var data={url:this.url,key:this.reportName,payload:this.item};this.reportSearch(data)}})},m=n(7),component=Object(m.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.item.startTime?n("div",{staticClass:"form-group"},[n("fieldset",{staticClass:"radio"},[n("label",{staticClass:"mr-1"},[n("input",{attrs:{type:"radio",name:"date"},domProps:{checked:!0===e.relativeDate},on:{input:function(t){return e.changeRelative(!0)}}}),e._v("\n        Relative Date Range\n      ")]),e._v(" "),n("label",[n("input",{attrs:{type:"radio",name:"date"},domProps:{checked:!1===e.relativeDate},on:{input:function(t){return e.changeRelative(!1)}}}),e._v("\n        Absolute Date Range\n      ")])])]):e._e(),e._v(" "),e.relativeDate&&e.item.startTime?n("div",{staticClass:"form-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDate,expression:"selectedDate"}],staticClass:"form-control col-xl-6 col-lg-3 col-md-6",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedDate=t.target.multiple?n:n[0]},e.changeDates]}},e._l(e.dateRanges,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])}),0)]):e._e(),e._v(" "),e.relativeDate?e._e():n("div",{staticClass:"form-group"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("label",[e._v("Start Date")]),e._v(" "),n("vue-ctk-date-time-picker",{attrs:{"minute-interval":10,"max-date":e.item.endTime,"auto-close":"","no-header":"",format:"YYYY-MM-DD HH:mm:ss",color:"#727cf5","enable-button-validate":""},model:{value:e.item.startTime,callback:function(t){e.$set(e.item,"startTime",t)},expression:"item.startTime"}})],1),e._v(" "),n("div",{staticClass:"col-md-6"},[n("label",[e._v("End Date")]),e._v(" "),n("vue-ctk-date-time-picker",{attrs:{"minute-interval":10,"min-date":e.item.startTime,"auto-close":"","no-header":"",format:"YYYY-MM-DD HH:mm:ss",color:"#727cf5","enable-button-validate":""},model:{value:e.item.endTime,callback:function(t){e.$set(e.item,"endTime",t)},expression:"item.endTime"}})],1)])]),e._v(" "),e.item.startYear?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"form-group"},[n("label",[e._v("Start Date")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.item.startYear,expression:"item.startYear"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.item,"startYear",t.target.multiple?n:n[0])}}},e._l(e.yearRange,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),0)])]),e._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"form-group"},[n("label",[e._v("End Date")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.item.endYear,expression:"item.endYear"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.item,"endYear",t.target.multiple?n:n[0])}}},e._l(e.yearRange,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),0)])])]):e._e(),e._v(" "),e.item.callTypes?n("duallist-box",{staticClass:"mb-2",attrs:{"base-list":e.optionsCallTypes.baseList,"selected-list":e.item.callTypes,title:e.optionsCallTypes.title},on:{updateSelected:function(t){e.item.callTypes=t},updateBase:function(t){e.optionsCallTypes.baseList=t}}}):e._e(),e._v(" "),e.item.skills?n("duallist-box",{staticClass:"mb-2",attrs:{"base-list":e.optionsSkills.baseList,"selected-list":e.item.skills,title:e.optionsSkills.title},on:{updateSelected:function(t){e.item.skills=t},updateBase:function(t){e.optionsSkills.baseList=t}}}):e._e(),e._v(" "),e.item.queues?n("duallist-box",{staticClass:"mb-2",attrs:{"base-list":e.optionsQueues.baseList,"selected-list":e.item.queues,title:e.optionsQueues.title},on:{updateSelected:function(t){e.item.queues=t},updateBase:function(t){e.optionsQueues.baseList=t}}}):e._e(),e._v(" "),e.item.agents?n("duallist-box",{staticClass:"mb-2",attrs:{"base-list":e.optionsAgents.baseList,"selected-list":e.item.agents,title:e.optionsAgents.title},on:{updateSelected:function(t){e.item.agents=t},updateBase:function(t){e.optionsAgents.baseList=t}}}):e._e(),e._v(" "),e.isVisibleItem.counter?n("div",{staticClass:"form-group"},[n("label",[e._v("Counter")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.counter,expression:"item.counter"}],staticClass:"form-control w-50",attrs:{type:"text"},domProps:{value:e.item.counter},on:{input:function(t){t.target.composing||e.$set(e.item,"counter",t.target.value)}}})]):e._e(),e._v(" "),e.isSearchable?n("div",{staticClass:"row modal-footer"},[n("button",{staticClass:"btn btn-primary",on:{click:e.search}},[e._v("Search")])]):e._e(),e._v(" "),e.showFooter?n("div",{staticClass:"row flex"},[n("button",{staticClass:"btn btn-light",on:{click:function(t){return e.$store.commit("shared/setReportFilterModal",!1)}}},[e._v("\n      Cancel\n    ")]),e._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.$store.commit("shared/setReportFilterModal",!1)}}},[e._v("\n      OK\n    ")])]):e._e()],1)},[],!1,null,null,null);t.a=component.exports},273:function(e,t,n){"use strict";var l={props:{title:{required:!0,type:String}}},r=n(7),component=Object(r.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box"},[n("div",{staticClass:"page-title-right"},[n("ol",{staticClass:"breadcrumb m-0"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[n("a",[e._v(e._s(e.title))])])])]),e._v(" "),n("h4",{staticClass:"page-title"},[e._v(e._s(e.title))])])])])},[],!1,null,null,null);t.a=component.exports},293:function(e,t,n){"use strict";n.r(t);n(43);var l=n(10),r=n(1),o=n(19),c=n(273),d=n(272),m=n(271),h={layout:"authenticated",components:{ReportFilter:d.a,PageTitle:c.a,DuallistBox:m.a},data:function(){return{item:{callTypes:[]},hasResponse:!1,monthlyDashboardDetail:null,selectedMonthlyDashboard:null,monthlyDashboardComponent:null,monthlyDashboardList:[{id:1,name:"Call Answer Rate",componentName:"callAnswerRate",key:"calls_answered_rate"},{id:2,name:"Call Abandon Rate",componentName:"CallAbandonRate",key:"calls_abandoned_rate"},{id:3,name:"Service Level",componentName:"ServiceLevelRate",key:"service_level_rate"},{id:4,name:"FTE Count",componentName:"FTECount",key:"service_level_rate"},{id:5,name:"Avg Wait Time",componentName:"AvgWaitTime",key:"service_level_rate"},{id:6,name:"Avg Handle Time",componentName:"AvgHandleTime",key:"aht"},{id:7,name:"Agent Occupancy",componentName:"AgentOccupancy",key:"agent_occupancy_rate"},{id:8,name:"Agent Efficiency",componentName:"AgentEfficiency",key:"agent_efficiency_rate"},{id:9,name:"Max Wait Time",componentName:"MaxWaitTime",key:"maxwaittime"},{id:10,name:"Max Handle Time",componentName:"MaxHandleTime",key:"maxhandletime"}],title:"Comstice Quartz - Monthly Dashboard"}},head:function(){return{title:this.title}},computed:Object(r.a)({},Object(o.d)("shared",["callTypes"]),{optionsCallTypes:function(){return{baseList:this.callTypes,selectedList:[],title:"Call Types"}}}),beforeMount:function(){this.selectedMonthlyDashboard=this.monthlyDashboardList[0],this.item.startTime=this.$moment().subtract(1,"year"),this.item.endTime=this.$moment(),this.getShared({endpoint:"shared/calltypes",key:"callTypes"})},beforeDestroy:function(){this.setShared({data:[],key:"callTypes"})},methods:Object(r.a)({},Object(o.b)({getShared:"shared/getShared"}),Object(o.c)({setShared:"shared/setShared"}),{search:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null;case 2:return this.monthlyDashboardComponent=e.sent,e.next=5,!1;case 5:return this.hasResponse=e.sent,this.monthlyDashboardComponent=Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(19)]).then(n.bind(null,297));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),e.next=9,!0;case 9:this.hasResponse=e.sent;case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},v=n(7),component=Object(v.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("page-title",{attrs:{title:"Monthly Dashboard"}}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[e.hasResponse?e._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",[e._v("Monthly Dashboard")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMonthlyDashboard,expression:"selectedMonthlyDashboard"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedMonthlyDashboard=t.target.multiple?n:n[0]}}},e._l(e.monthlyDashboardList,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v("\n                    "+e._s(t.name)+"\n                  ")])}),0)])])]),e._v(" "),e.hasResponse?e._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("label",[e._v("Start Date")]),e._v(" "),n("vue-ctk-date-time-picker",{attrs:{"only-date":"","no-button-now":"","no-header":"","auto-close":"",label:"Select Date",formatted:"YYYY-MM",color:"#727cf5","enable-button-validate":""},model:{value:e.item.startTime,callback:function(t){e.$set(e.item,"startTime",t)},expression:"item.startTime"}})],1),e._v(" "),n("div",{staticClass:"col-md-6"},[n("label",[e._v("End Date")]),e._v(" "),n("vue-ctk-date-time-picker",{attrs:{"only-date":"","no-button-now":"","no-header":"","auto-close":"",label:"Select Date",formatted:"YYYY-MM",color:"#727cf5","enable-button-validate":""},model:{value:e.item.endTime,callback:function(t){e.$set(e.item,"endTime",t)},expression:"item.endTime"}})],1)])]),e._v(" "),n("div",{staticClass:"col-md-6"},[e.item.callTypes?n("duallist-box",{staticClass:"mb-2",attrs:{"base-list":e.optionsCallTypes.baseList,"selected-list":e.item.callTypes,title:e.optionsCallTypes.title},on:{updateSelected:function(t){e.item.callTypes=t},updateBase:function(t){e.optionsCallTypes.baseList=t}}}):e._e()],1)]),e._v(" "),e.hasResponse?e._e():n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:e.search}},[e._v("\n              Search\n            ")])]),e._v(" "),e.hasResponse?n(e.monthlyDashboardComponent,{tag:"component",attrs:{"selected-monthly-dashboard":e.selectedMonthlyDashboard,item:{hasResponse:e.hasResponse,payload:e.item}},on:{filter:function(t){e.hasResponse=t}}}):e._e()],1)])])])],1)},[],!1,null,null,null);t.default=component.exports}}]);