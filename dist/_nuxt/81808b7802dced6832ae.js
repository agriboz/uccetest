(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{274:function(t,e,r){"use strict";function n(t,e){if(e){var r=this.$data._chart,n=t.datasets.map(function(t){return t.label}),h=e.datasets.map(function(t){return t.label}),c=JSON.stringify(h);JSON.stringify(n)===c&&e.datasets.length===t.datasets.length?(t.datasets.forEach(function(t,i){var n=Object.keys(e.datasets[i]),h=Object.keys(t),c=n.filter(function(t){return"_meta"!==t&&-1===h.indexOf(t)});for(var d in c.forEach(function(t){delete r.data.datasets[i][t]}),t)t.hasOwnProperty(d)&&(r.data.datasets[i][d]=t[d])}),t.hasOwnProperty("labels")&&(r.data.labels=t.labels,this.$emit("labels:update")),t.hasOwnProperty("xLabels")&&(r.data.xLabels=t.xLabels,this.$emit("xlabels:update")),t.hasOwnProperty("yLabels")&&(r.data.yLabels=t.yLabels,this.$emit("ylabels:update")),r.update(),this.$emit("chart:update")):(r&&(r.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render"))}else this.$data._chart&&(this.$data._chart.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render")}var h={reactiveData:{data:function(){return{chartData:null}},watch:{chartData:n}},reactiveProp:{props:{chartData:{type:Object,required:!0,default:function(){}}},watch:{chartData:n}}},c=r(276),d=r.n(c);function o(t,e){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(data,t){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new d.a(this.$refs.canvas.getContext("2d"),{type:e,data:data,options:t,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var l=o("bar-chart","bar"),f=(o("horizontalbar-chart","horizontalBar"),o("doughnut-chart","doughnut"),o("line-chart","line"),o("pie-chart","pie"),o("polar-chart","polarArea"),o("radar-chart","radar"),o("bubble-chart","bubble"));o("scatter-chart","scatter");r.d(e,"a",function(){return l}),r.d(e,"b",function(){return f}),r.d(e,"c",function(){return h})},275:function(t,e,r){"use strict";var n=r(274),h=n.c.reactiveProp;e.a={extends:n.a,mixins:[h],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)},watch:{options:{handler:function(){this.renderChart(this.chartData,this.options)},deep:!0}}}},296:function(t,e,r){"use strict";r.r(e);var n={components:{BarChart:r(275).a},props:{data:{type:Object,default:null,requured:!0}}},h=r(7),component=Object(h.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.data.yoyChart?r("bar-chart",{ref:"yoyChart",attrs:{"chart-data":t.data.yoyChart.data,options:t.data.yoyChart.options}}):t._e(),t._v(" "),t.data.yoyChangeChart?r("bar-chart",{ref:"yoyChartChange",attrs:{"chart-data":t.data.yoyChangeChart.data,options:t.data.yoyChangeChart.options}}):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);