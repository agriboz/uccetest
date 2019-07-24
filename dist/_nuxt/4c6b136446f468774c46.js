(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{353:function(t,e,r){"use strict";var n={props:{title:{required:!0,type:String}}},o=r(6),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box"},[r("div",{staticClass:"page-title-right"},[r("ol",{staticClass:"breadcrumb m-0"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[r("a",[t._v(t._s(t.title))])])])]),t._v(" "),r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))])])])])},[],!1,null,null,null);e.a=component.exports},386:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(52),r(11)),c={layout:"authenticated",components:{PageTitle:r(353).a},middleware:"admin",data:function(){return{item:{username:null},data:[],fields:[{key:"username",label:"User Name",sortable:!0},{key:"firstname",label:"First Name",sortable:!0},{key:"lastname",label:"Last Name",sortable:!0},{key:"actions",label:"Actions"}],currentPage:1,perPage:5,sortBy:null,sortDesc:!1,sortDirection:"asc"}},beforeMount:function(){this.getUsers()},methods:{saveUser:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.post("whitelistuser",this.item);case 3:e=t.sent,data=e.data,this.data=[].concat(Object(n.a)(this.data),[data]),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.error(t.t0));case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),deleteUser:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,n,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,t.next=3,this.$axios.delete("whitelistuser/".concat(r));case 3:n=t.sent,data=n.data,this.data=this.data.filter(function(t){return t.id!==data.id});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getUsers:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("whitelistuser");case 2:return e=t.sent,data=e.data,t.next=6,data;case 6:this.data=t.sent;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=r(6),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("page-title",{attrs:{title:"Admin"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Create User")]),t._v(" "),r("div",{staticClass:"form-group w-25"},[r("label",[t._v("Username")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.username,expression:"item.username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.item.username},on:{input:function(e){e.target.composing||t.$set(t.item,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group w-25"},[r("label",[t._v("First Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.firstname,expression:"item.firstname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.item.firstname},on:{input:function(e){e.target.composing||t.$set(t.item,"firstname",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group w-25"},[r("label",[t._v("Last Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.lastname,expression:"item.lastname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.item.lastname},on:{input:function(e){e.target.composing||t.$set(t.item,"lastname",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:t.saveUser}},[t._v("\n            Create User\n          ")]),t._v(" "),r("div",{staticClass:"mt-4"},[r("b-table",{attrs:{"show-empty":"",striped:"",hover:"",stacked:"md",items:t.data,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"actions",fn:function(e){return[r("button",{staticClass:"btn btn-danger",on:{click:function(r){return t.deleteUser(e.item)}}},[t._v("\n                  Delete\n                ")])]}}])}),t._v(" "),t.data.length?r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-pagination",{attrs:{"total-rows":t.data.length,"per-page":t.perPage,align:"end"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1):t._e()],1)])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);