(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{273:function(t,e,n){"use strict";var r={props:{title:{required:!0,type:String}}},l=n(7),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box"},[n("div",{staticClass:"page-title-right"},[n("ol",{staticClass:"breadcrumb m-0"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active"},[n("a",[t._v(t._s(t.title))])])])]),t._v(" "),n("h4",{staticClass:"page-title"},[t._v(t._s(t.title))])])])])},[],!1,null,null,null);e.a=component.exports},287:function(t,e,n){var map={"./AmWater":[281,5],"./AmWater.vue":[281,5],"./AveregeSpeedAnswer":[278,0,1],"./AveregeSpeedAnswer.vue":[278,0,1],"./FteCountDaily":[279,2],"./FteCountDaily.vue":[279,2],"./RepetitiveCallsByAniDaily":[280,3],"./RepetitiveCallsByAniDaily.vue":[280,3],"./RepetitiveCallsDaily":[282,4],"./RepetitiveCallsDaily.vue":[282,4]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then(function(){return n(r)})}r.keys=function(){return Object.keys(map)},r.id=287,t.exports=r},295:function(t,e,n){"use strict";n.r(e);n(56),n(14),n(9);var r={layout:"authenticated",components:{PageTitle:n(273).a},data:function(){return{name:null,component:null}},computed:{title:function(){var title=this.$route.params.name.replace(/-/g," ");return title.toUpperCase()}},mounted:function(){var t=this.convertToCamelCase(this.$route.params.name);this.component=function(){return n(287)("./".concat(t))}},methods:{convertToCamelCase:function(t){var e="",n=!0;t=(t=t.replace(/[()[\]{}=?!.:,\-+\\"#~\/]/g," ")).toLowerCase();for(var i=0;t.length>i;i++){var r=t.charAt(i);r.match(/^\s+$/g)||r.match(/[()[\]{}\\\/]/g)?n=!0:n&&(r=r.toUpperCase(),n=!1),e+=r}return e.replace(/\s+/g,"")}}},l=n(7),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("page-title",{attrs:{title:"Comstice Reports - "+this.title}}),this._v(" "),e(this.component,{tag:"component"})],1)},[],!1,null,null,null);e.default=component.exports}}]);