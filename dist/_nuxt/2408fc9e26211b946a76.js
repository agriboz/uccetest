(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{270:function(t,e,r){"use strict";var o=r(47),n=r.n(o),l="YYYY-MM-DD HH:mm:ss",c=function(){return n()().format(l)};e.a=function(t,e,r){return 1===t&&e?n()().startOf("day").format(l):1===t&&r?c():2===t&&e?n()().add(-1,"day").startOf("day").format(l):2===t&&r?n()().add(-1,"day").endOf("day").format(l):3===t&&e?n()().startOf("week").format(l):3===t&&r?n()().endOf("week").format(l):4===t&&e?n()().subtract(1,"weeks").startOf("week").format(l):4===t&&r?n()().subtract(1,"weeks").endOf("week").format(l):5===t&&e?n()().startOf("month").format(l):5===t&&r?n()().endOf("month").format(l):6===t&&e?n()().subtract(1,"month").startOf("month").format(l):6===t&&r?n()().subtract(1,"month").endOf("month").format(l):7===t&&e?n()().startOf("year").format(l):7===t&&r?c():8===t&&e?n()().subtract(1,"year").startOf("year").format(l):8===t&&r?n()().subtract(1,"year").endOf("year").format(l):void 0}},271:function(t,e,r){"use strict";var o=r(24),n=(r(43),r(10)),l=(r(9),r(78),r(100),{props:{title:{required:!0,type:String},baseList:{required:!0,type:Array},selectedList:{required:!0,type:Array}},data:function(){return{baseValue:"",selectedValue:""}},computed:{baseListLocal:{get:function(){return this.baseList},set:function(t){this.$emit("updateBase",t)}},selectedListLocal:{get:function(){return this.selectedList},set:function(t){this.$emit("updateSelected",t)}},filteredBase:function(){var t=this;return this.baseListLocal.filter(function(e){return e.name.toLowerCase().includes(t.baseValue.toLowerCase())})},filteredSelected:function(){var t=this;return this.selectedListLocal.filter(function(e){return e.name.toLowerCase().includes(t.selectedValue.toLowerCase())})}},methods:{addAll:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,[].concat(Object(o.a)(this.selectedListLocal),Object(o.a)(this.filteredBase));case 2:this.selectedListLocal=t.sent,this.baseListLocal=this.baseListLocal.filter(function(t){return!e.filteredBase.includes(t)}),this.baseValue="",console.log(this.baseListLocal);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),transferToRight:function(t){this.baseListLocal=this.baseListLocal.filter(function(e){return e.id!==t.id}),this.selectedListLocal=[].concat(Object(o.a)(this.selectedListLocal),[t])},transferToLeft:function(t){this.selectedListLocal=this.selectedList.filter(function(e){return e.id!==t.id}),this.baseListLocal=[].concat(Object(o.a)(this.baseList),[t])},removeAll:function(){this.baseListLocal=[].concat(Object(o.a)(this.baseListLocal),Object(o.a)(this.selectedListLocal)),this.selectedListLocal=[]}}}),c=r(7),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"duallist"},[r("h6",{staticClass:"duallist-title m-0 pb-0 white"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"duallist-box"},[r("div",{staticClass:"duallist-box-border duallist-box-border-first"},[r("div",{staticClass:"duallist-box-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.baseValue,expression:"baseValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.baseValue},on:{input:function(e){e.target.composing||(t.baseValue=e.target.value)}}})]),t._v(" "),t.filteredBase.length?r("transition-group",{staticClass:"list-group",attrs:{tag:"ul",name:"list-item"}},t._l(t.filteredBase,function(b){return r("li",{key:b.id,staticClass:"list-group-item",on:{click:function(e){return t.transferToRight(b)}}},[t._v("\n          "+t._s(b.name)+"\n        ")])}),0):t._e()],1),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.filteredBase.length?r("div",{staticClass:"btn-wrapper"},[r("a",{staticClass:"btn-move",on:{click:t.addAll}})]):t._e()])],1),t._v(" "),r("div",{staticClass:"duallist-box"},[r("div",{staticClass:"duallist-box-border duallist-box-border"},[r("div",{staticClass:"duallist-box-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedValue,expression:"selectedValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.selectedValue},on:{input:function(e){e.target.composing||(t.selectedValue=e.target.value)}}})]),t._v(" "),t.filteredSelected.length?r("transition-group",{staticClass:"list-group",attrs:{tag:"ul",name:"list-item"}},t._l(t.filteredSelected,function(b){return r("li",{key:b.id,staticClass:"list-group-item selected",on:{click:function(e){return t.transferToLeft(b)}}},[t._v("\n          "+t._s(b.name)+"\n        ")])}),0):t._e()],1),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.filteredSelected.length?r("div",{staticClass:"btn-wrapper"},[r("a",{staticClass:"btn-empty",on:{click:t.removeAll}})]):t._e()])],1)])},[],!1,null,null,null);e.a=component.exports},272:function(t,e,r){"use strict";r(55),r(155);var o=r(1),n=r(20),l=r(271),c=r(270),d={components:{DuallistBox:l.a},props:{item:{required:!0,type:Object},isVisibleItem:{required:!1,default:function(){return{}},type:Object},showFooter:{required:!0,type:Boolean},isSearchable:{required:!0,type:Boolean},url:{required:!1,default:null,type:String}},data:function(){return{dateRanges:[{id:1,name:"Today"},{id:2,name:"Yesterday"},{id:3,name:"This Week"},{id:4,name:"Last Week"},{id:5,name:"This Month"},{id:6,name:"Last Month"},{id:7,name:"Year To Date"},{id:8,name:"Last Year"}],relativeDate:!0,selectedDate:null}},computed:Object(o.a)({},Object(n.d)("shared",["callTypes","skills","csqs","queues","agents"]),{yearRange:function(){var t=this.$moment().subtract(5,"years"),e=this.$moment.range(t,new Date);return Array.from(e.by("year")).map(function(t){return t.format("YYYY")})},optionsAgents:function(){return{baseList:this.agents,selectedList:[],title:"Agents"}},optionsCallTypes:function(){return{baseList:this.callTypes,selectedList:[],title:"Call Types"}},optionsSkills:function(){return{baseList:this.skills,selectedList:[],title:"Skills"}},optionsQueues:function(){return{baseList:this.queues,selectedList:[],title:"Precision Queue"}}}),watch:{item:function(){this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"})}},beforeMount:function(){this.selectedDate=this.dateRanges[0],this.item.agents&&this.getShared({endpoint:"shared/agents",key:"agents"}),this.item.callTypes&&this.getShared({endpoint:"shared/calltypes",key:"callTypes"}),this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"}),this.item.skills&&this.getShared({endpoint:"shared/skills",key:"skills"})},created:function(){this.item.queues&&this.getShared({endpoint:"shared/queues",key:"queues"})},methods:Object(o.a)({changeRelative:function(t){this.relativeDate=t},changeDates:function(){this.item.startTime=this.relativeDate?Object(c.a)(this.selectedDate.id,!0,!1):this.$moment(this.selectedStockReport.startTime).format("YYYY-MM-DD HH:mm:ss")||"",this.item.endTime=this.relativeDate?Object(c.a)(this.selectedDate.id,!1,!0):this.$moment(this.selectedStockReport.endTime).format("YYYY-MM-DD HH:mm:ss")},limitText:function(t){return"and ".concat(t,t>1?" other options.":" other option.")}},Object(n.b)({getShared:"shared/getShared"}),{search:function(){var data={url:this.url,key:this.reportName,payload:this.item};this.reportSearch(data)}})},m=r(7),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.item.startTime?r("div",{staticClass:"form-group"},[r("fieldset",{staticClass:"radio"},[r("label",{staticClass:"mr-1"},[r("input",{attrs:{type:"radio",name:"date"},domProps:{checked:!0===t.relativeDate},on:{input:function(e){return t.changeRelative(!0)}}}),t._v("\n        Relative Date Range\n      ")]),t._v(" "),r("label",[r("input",{attrs:{type:"radio",name:"date"},domProps:{checked:!1===t.relativeDate},on:{input:function(e){return t.changeRelative(!1)}}}),t._v("\n        Absolute Date Range\n      ")])])]):t._e(),t._v(" "),t.relativeDate&&t.item.startTime?r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"form-control col-xl-6 col-lg-3 col-md-6",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDate=e.target.multiple?r:r[0]},t.changeDates]}},t._l(t.dateRanges,function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name))])}),0)]):t._e(),t._v(" "),t.relativeDate?t._e():r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[t._v("Start Date")]),t._v(" "),r("vue-ctk-date-time-picker",{attrs:{"minute-interval":10,"max-date":t.item.endTime,"auto-close":"","no-header":"",format:"YYYY-MM-DD HH:mm:ss",color:"#727cf5","enable-button-validate":""},model:{value:t.item.startTime,callback:function(e){t.$set(t.item,"startTime",e)},expression:"item.startTime"}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",[t._v("End Date")]),t._v(" "),r("vue-ctk-date-time-picker",{attrs:{"minute-interval":10,"min-date":t.item.startTime,"auto-close":"","no-header":"",format:"YYYY-MM-DD HH:mm:ss",color:"#727cf5","enable-button-validate":""},model:{value:t.item.endTime,callback:function(e){t.$set(t.item,"endTime",e)},expression:"item.endTime"}})],1)])]),t._v(" "),t.item.startYear?r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Start Date")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.item.startYear,expression:"item.startYear"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"startYear",e.target.multiple?r:r[0])}}},t._l(t.yearRange,function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0)])]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group"},[r("label",[t._v("End Date")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.item.endYear,expression:"item.endYear"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"endYear",e.target.multiple?r:r[0])}}},t._l(t.yearRange,function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0)])])]):t._e(),t._v(" "),t.item.callTypes?r("duallist-box",{staticClass:"mb-2",attrs:{"base-list":t.optionsCallTypes.baseList,"selected-list":t.item.callTypes,title:t.optionsCallTypes.title},on:{updateSelected:function(e){t.item.callTypes=e},updateBase:function(e){t.optionsCallTypes.baseList=e}}}):t._e(),t._v(" "),t.item.skills?r("duallist-box",{staticClass:"mb-2",attrs:{"base-list":t.optionsSkills.baseList,"selected-list":t.item.skills,title:t.optionsSkills.title},on:{updateSelected:function(e){t.item.skills=e},updateBase:function(e){t.optionsSkills.baseList=e}}}):t._e(),t._v(" "),t.item.queues?r("duallist-box",{staticClass:"mb-2",attrs:{"base-list":t.optionsQueues.baseList,"selected-list":t.item.queues,title:t.optionsQueues.title},on:{updateSelected:function(e){t.item.queues=e},updateBase:function(e){t.optionsQueues.baseList=e}}}):t._e(),t._v(" "),t.item.agents?r("duallist-box",{staticClass:"mb-2",attrs:{"base-list":t.optionsAgents.baseList,"selected-list":t.item.agents,title:t.optionsAgents.title},on:{updateSelected:function(e){t.item.agents=e},updateBase:function(e){t.optionsAgents.baseList=e}}}):t._e(),t._v(" "),t.isVisibleItem.counter?r("div",{staticClass:"form-group"},[r("label",[t._v("Counter")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.counter,expression:"item.counter"}],staticClass:"form-control w-50",attrs:{type:"text"},domProps:{value:t.item.counter},on:{input:function(e){e.target.composing||t.$set(t.item,"counter",e.target.value)}}})]):t._e(),t._v(" "),t.isSearchable?r("div",{staticClass:"row modal-footer"},[r("button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])]):t._e(),t._v(" "),t.showFooter?r("div",{staticClass:"row flex"},[r("button",{staticClass:"btn btn-light",on:{click:function(e){return t.$store.commit("shared/setReportFilterModal",!1)}}},[t._v("\n      Cancel\n    ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$store.commit("shared/setReportFilterModal",!1)}}},[t._v("\n      OK\n    ")])]):t._e()],1)},[],!1,null,null,null);e.a=component.exports},280:function(t,e,r){"use strict";r.r(e);r(43);var o=r(10),n=r(272),l=r(270),c={components:{ReportFilter:n.a},data:function(){return{fields:[{key:"date",label:"Date",sortable:!0},{key:"count",label:"Count",sortable:!0},{key:"ani",label:"ANI"}],currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,reportData:[],isVisibleItem:{counter:!0},item:{counter:"3",startTime:Object(l.a)(1,!0,!1),endTime:Object(l.a)(1,!1,!0)}}},computed:{totalRows:function(){return this.reportData.length},sortOptions:function(){return this.fields.filter(function(t){return t.sortable}).map(function(t){return{text:t.label,value:t.key}})}},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},search:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"post",data:this.item,url:"//10.1.72.36:8080/repeatcallsani/bydate"},t.next=3,this.$axios(e);case 3:return r=t.sent,data=r.data,t.next=7,data;case 7:this.reportData=t.sent;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},d=r(7),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("report-filter",{attrs:{"show-footer":!1,"is-searchable":!1,"is-visible-item":t.isVisibleItem,item:t.item}}),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])]),t._v(" "),t.reportData.length?r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Filter"}},[r("b-input-group",[r("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort"}},[r("b-input-group",[r("b-form-select",{attrs:{options:t.sortOptions},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}},[r("option",{attrs:{slot:"first"},domProps:{value:null},slot:"first"},[t._v("-- none --")])]),t._v(" "),r("b-form-select",{attrs:{slot:"append",disabled:!t.sortBy},slot:"append",model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[r("option",{domProps:{value:!1}},[t._v("Asc")]),t._v(" "),r("option",{domProps:{value:!0}},[t._v("Desc")])])],1)],1)],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort direction"}},[r("b-form-select",{model:{value:t.sortDirection,callback:function(e){t.sortDirection=e},expression:"sortDirection"}},[r("option",{attrs:{value:"asc"}},[t._v("Asc")]),t._v(" "),r("option",{attrs:{value:"desc"}},[t._v("Desc")]),t._v(" "),r("option",{attrs:{value:"last"}},[t._v("Last")])])],1)],1),t._v(" "),r("b-col",{staticClass:"my-1",attrs:{md:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Per page"}},[r("b-form-select",{attrs:{options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1):t._e(),t._v(" "),t.reportData.length?r("b-table",{attrs:{"show-empty":"",striped:"",hover:"",stacked:"md",items:t.reportData,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered}}):t._e(),t._v(" "),t.reportData.length?r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-pagination",{attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"end"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1):t._e()],1)])])])])},[],!1,null,null,null);e.default=component.exports}}]);