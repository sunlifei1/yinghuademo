webpackJsonp([11],{"4o6q":function(t,e){},IPBl:function(t,e){},"cpM/":function(t,e){},dgaH:function(t,e){},fwQU:function(t,e,s){"use strict";function i(t){s("4o6q")}function n(t){s("IPBl")}function o(t){s("cpM/")}Object.defineProperty(e,"__esModule",{value:!0});var r=s("woVd"),a=s("f0X5"),c={name:"history",data:function(){return{history:history}},created:function(){this.getHistory()},methods:{getHistory:function(){var t=this;a.a.$on("history",function(e){t.history=e})},clearHistory:function(){localStorage.removeItem("keys"),this.history=[]},toSearch:function(t){a.a.$emit("search",t)}}},h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.history.length?s("div",{staticClass:"history pd23"},[s("div",{staticClass:"history-title"},[s("span",[t._v("历史记录")]),t._v(" "),s("i",{staticClass:"search iconlajitong",on:{click:t.clearHistory}})]),t._v(" "),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container "},[s("ul",{staticClass:"icons-group"},t._l(t.history,function(e,i){return s("li",{key:i,staticClass:"icon-list",on:{click:function(s){return t.toSearch(e)}}},[t._v(t._s(e)+"\n       ")])}),0)])])]):t._e()},u=[],l={render:h,staticRenderFns:u},d=l,f=s("VU/8"),y=i,v=f(c,d,!1,y,"data-v-e5b012fc",null),g=v.exports,p=s("gyMJ"),m={name:"hotSearch",data:function(){return{hotSearchList:[]}},created:function(){this._getList()},methods:{_getList:function(){var t=this;p.a.hotSearchListFn().then(function(e){var s=e.data;200===s.code&&(t.hotSearchList=s.data,t.$emit("childFn",!1))}).catch(function(t){console.log(t)})},returnKey:function(t){this.$emit("returnKey",t)}}},w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"song-hot-search"},[s("p",{staticClass:"hot-search-title"},[t._v("热搜榜")]),t._v(" "),s("ul",t._l(t.hotSearchList,function(e,i){return s("li",{key:i,staticClass:"hot-search-list",on:{click:function(s){return t.returnKey(e.searchWord)}}},[s("span",{staticClass:"num"},[t._v(t._s(i+1))]),t._v(" "),s("div",{staticClass:"song-info"},[s("div",{staticClass:"song-info-title"},[s("p",{staticClass:"song-name"},[t._v(t._s(e.searchWord))]),t._v(" "),s("span",{staticClass:"num"},[t._v(t._s(e.score))]),t._v(" "),e.iconUrl?s("img",{staticClass:"search-png",attrs:{src:e.iconUrl}}):t._e()]),t._v(" "),s("div",{staticClass:"song-Introduced"},[t._v(t._s(e.content))])])])}),0)])},_=[],k={render:w,staticRenderFns:_},L=k,C=s("VU/8"),S=n,$=C(m,L,!1,S,"data-v-baf5bb80",null),K=$.exports,b=s("mdS2"),x={name:"search",data:function(){return{hotSearchKey:"",loading:!0}},components:{searchInp:r.a,history:g,hotSearch:K,pageLoading:b.a},activated:function(){this.setKey()},methods:{setKey:function(t){t&&this.$refs.search.searchKey(t)},parentFn:function(t){this.loading=t}}},F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("search-inp",{ref:"search",attrs:{page:"search",Right:"1rem"}}),t._v(" "),s("history",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]}),t._v(" "),s("hot-search",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],on:{returnKey:t.setKey,childFn:t.parentFn}}),t._v(" "),t.loading?s("page-loading"):t._e()],1)},I=[],P={render:F,staticRenderFns:I},H=P,U=s("VU/8"),R=o,M=U(x,H,!1,R,"data-v-59fa52db",null);e.default=M.exports},woVd:function(t,e,s){"use strict";function i(t){s("dgaH")}var n=s("gyMJ"),o=s("f0X5"),r={name:"searchInp",props:{page:{type:String},Right:{default:"0.23rem"},keyword:{type:String,default:""}},data:function(){return{searchList:[],keywords:"",showList:!1,history:[],time:null,placeholder:""}},created:function(){this.changFocus(),this._getPlaceholder(),this.historySearch(),this.setKeyword()},mounted:function(){this.getHistory()},watch:{keywords:function(t,e){if(this.keywords===this.keyword)return void this.hideList();this.keywords.length>0?this.displayList():this.hideList()},keyword:function(t,e){t&&(this.keywords=t)}},methods:{setKeyword:function(){this.keyword&&(this.keywords=this.keyword)},goSingerPage:function(){this.$router.push("/singer")},historySearch:function(){var t=this;o.a.$on("search",function(e){t.searchKey(e)})},clearInp:function(){this.keywords=""},changFocus:function(){var t=this;this.keyword||this.$nextTick(function(e){t.$refs.inp.focus()})},returnPage:function(){this.$router.go(-1)},_getPlaceholder:function(){var t=this;n.a.defaultSearchFn().then(function(e){var s=e.data;200===s.code&&(t.placeholder=s.data.showKeyword)})},hideList:function(){this.showList=!1},displayList:function(){this.keywords&&(this.showList=!0,this.setSearchList(this.keywords))},_getSuggestList:function(t){var e=this;n.a.suggestSearchFn(t).then(function(t){var s=t.data;200===s.code&&(e.searchList=s.result.allMatch)})},setSearchList:function(t){var e=this;this.time&&(clearTimeout(this.time),this.time=null),this.time=setTimeout(function(){e._getSuggestList(t)},50)},getHistory:function(t){var e=localStorage.getItem("keys")?localStorage.getItem("keys").split(","):[];t&&(e.unshift(t),e=this.unique(e),localStorage.setItem("keys",e)),this.history=e,o.a.$emit("history",this.history)},pushKey:function(t){this.$nextTick(function(){o.a.$emit("push",t)})},searchKey:function(t){var e=this;this.getHistory(t),this.hideList(),this.clearInp(),setTimeout(function(){e.pushKey(t)},0),this.$router.push({path:"/composite/"+t})},unique:function(t){return Array.isArray(t)?Array.prototype.filter.call(t,function(e,s){return t.indexOf(e)===s}):void console.log("type error!")},beforeDestroy:function(){this.$Bus.$off("push","history")}}},a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper pd23"},[s("i",{staticClass:"iconfont zuojiantou",on:{click:t.returnPage}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keywords,expression:"keywords",modifiers:{trim:!0}}],ref:"inp",staticClass:"search",attrs:{type:"text",placeholder:t.placeholder,autofocus:"autofocus"},domProps:{value:t.keywords},on:{focus:t.displayList,input:function(e){e.target.composing||(t.keywords=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.keywords,expression:"keywords"}],staticClass:"iconfont guanbi",style:{right:t.Right},on:{click:t.clearInp}}),t._v(" "),t.page?s("i",{staticClass:"iconfont geshou",on:{click:t.goSingerPage}}):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"floatInfo"},[s("ul",[s("li",{staticClass:"blue border-bottom",on:{click:function(e){return t.searchKey(t.keywords)}}},[t._v("\n        搜索\n        "),s("span",{staticClass:"text"},[t._v('"'+t._s(t.keywords)+'"')])]),t._v(" "),t._l(t.searchList,function(e,i){return s("li",{key:i,staticClass:"border-bottom",on:{click:function(s){return t.searchKey(e.keyword)}}},[s("i",{staticClass:"iconfont sousuo"}),t._v("\n        "+t._s(e.keyword)+"\n      ")])})],2)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"mask",on:{click:t.hideList}})])},c=[],h={render:a,staticRenderFns:c},u=h,l=s("VU/8"),d=i,f=l(r,u,!1,d,"data-v-4b6add30",null);e.a=f.exports}});
//# sourceMappingURL=11.ca3c39042c5f0af36c0d.js.map