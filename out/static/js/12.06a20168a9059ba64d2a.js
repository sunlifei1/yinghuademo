webpackJsonp([12],{"09hc":function(t,e){},"6Xpf":function(t,e){},"95wh":function(t,e,n){"use strict";function i(t){n("w7Bb")}function a(t){n("6Xpf")}function s(t){n("09hc")}function o(t){n("Woae")}function r(t){n("d/tG")}Object.defineProperty(e,"__esModule",{value:!0});var c=n("Dd8w"),d=n.n(c),u=n("gyMJ"),l={name:"findSwiper",data:function(){return{swiperList:[]}},methods:{_getFindInfo:function(){u.a.bannerSwiperFn().then(this.getFindInfoSuc)},getFindInfoSuc:function(t){200===t.status&&"OK"===t.statusText&&(t=t.data.banners,this.swiperList=t)}},mounted:function(){this._getFindInfo()}},f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-container"},[n("van-swipe",{attrs:{autoplay:5e3,"indicator-color":"#dd001b"}},t._l(t.swiperList,function(e,i){return n("van-swipe-item",{key:i},[n("img",{staticClass:"banner-img",attrs:{src:e.pic,alt:""}}),t._v(" "),n("span",{staticClass:"title",style:{background:e.titleColor}},[t._v(t._s(e.typeTitle))])])}),1)],1)},v=[],p={render:f,staticRenderFns:v},g=p,h=n("VU/8"),m=i,w=h(l,g,!1,m,"data-v-20510557",null),_=w.exports,b=n("NYxO"),y=n("Ppka"),L=n("j0X3"),S={name:"findIcon",data:function(){return{findIcons:y.b}},components:{icon:L.a},computed:{today:function(){return(new Date).getDate()}},mounted:function(){this.iniData()},methods:d()({iniData:function(){this.findIcons=Object(y.b)()},goPage:function(t){"personalFm"===t?this._getPersonalFm():this.$router.push(t)},startPlay:function(t){this.startPlayAll({list:t})},_getPersonalFm:function(){var t=this;u.a.personalFmFn().then(function(e){var n=e.data;if(200===n.code){var i=n.data;t.startPlay(i)}})}},Object(b.b)(["startPlayAll"]))},x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container border-bottom"},t._l(t.findIcons,function(e,i){return n("icon",{key:i,attrs:{icons:e,bgcolor:!0},on:{goPage:function(n){return t.goPage(e.linkTo)}}},["每日推荐"===e.text?n("span",{staticClass:"today"},[t._v(t._s(t.today))]):t._e()])}),1)},C=[],I={render:x,staticRenderFns:C},k=I,F=n("VU/8"),N=a,O=F(S,k,!1,N,"data-v-4b97b9e6",null),P=O.exports,A=n("Xxa5"),D=n.n(A),U=n("exGp"),E=n.n(U),G=n("f5+r"),R=n("mdS2"),$=function(t,e){for(var n=t.slice(0),i=t.length,a=i-e,s=void 0,o=void 0;--i>a;)o=Math.floor((i+1)*Math.random()),s=n[o],n[o]=n[i],n[i]=s;return n.slice(a)},T={name:"songList",data:function(){return{load:!0,songList:[],isGetOver:!1}},created:function(){this._getImgCard()},computed:d()({},Object(b.c)({loginState:"LOGIN_STATE"})),methods:{_getImgCard:function(){var t=this;return E()(D.a.mark(function e(){var n,i,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=+localStorage.getItem("loginState"),!t.loginState&&!n){e.next=8;break}return e.next=4,t.loadGetSongListInfo();case 4:i=e.sent,t.isGetOver=i,e.next=12;break;case 8:return e.next=10,t.getSongListInfo();case 10:a=e.sent,t.isGetOver=a;case 12:case"end":return e.stop()}},e,t)}))()},getSongListInfo:function(){var t=this;return E()(D.a.mark(function e(){var n,i;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.recSongListFn();case 3:if(n=e.sent,i=n.data,200!==i.code){e.next=9;break}return t.songList=$(i.playlists,6),t.load=!1,e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 12:e.prev=12,e.t0=e.catch(0),t.load=!1,console.log(e.t0,"请求超时");case 16:case"end":return e.stop()}},e,t,[[0,12]])}))()},loadGetSongListInfo:function(){var t=this;return E()(D.a.mark(function e(){var n,i,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.dateRecSongListFn();case 3:if(n=e.sent,i=n.data,200!==i.code){e.next=10;break}return a=i.recommend,t.songList=$(a,6),t.load=!1,e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0,"请求超时");case 16:case"end":return e.stop()}},e,t,[[0,13]])}))()}},components:{imgCard:G.a,pageLoading:R.a}},M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper pd23"},[n("div",{staticClass:"title"},[n("div",{staticClass:"recommended"},[t._v("推荐歌单")]),t._v(" "),n("router-link",{staticClass:"square",attrs:{to:"recommend",tag:"div"}},[t._v("歌单广场")])],1),t._v(" "),n("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticStyle:{height:"5rem"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.load,expression:"!load"}],staticClass:"img-col"},t._l(t.songList,function(t,e){return n("img-card",{key:e,attrs:{imgUrl:t.picUrl||t.coverImgUrl,dec:t.name,playCount:t.playCount||t.playcount,albumId:t.id}})}),1)],1)},j=[],V={render:M,staticRenderFns:j},X=V,q=n("VU/8"),B=s,J=q(T,X,!1,B,"data-v-46b2a1e4",null),W=J.exports,K={name:"newDish",components:{imgCard:G.a,pageLoading:R.a},data:function(){return{dishList:[],newSongsList:[],type:"dish",load:!0}},created:function(){var t=this;return E()(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getDishListInfo();case 2:return e.next=4,t._getNewSongsInfo();case 4:case"end":return e.stop()}},e,t)}))()},methods:d()({_getDishListInfo:function(){var t=this;u.a.newDishFn().then(function(e){var n=e.data;if(200===n.code){var i=n.albums;t.dishList=t.getRandomArrayElements(i,3)}}).catch(function(t){t&&console.log(t,"请求超时")})},beginAudio:function(t){this.addToAudioList(t)},_getNewSongsInfo:function(){var t=this;u.a.newSongsFn().then(function(e){var n=e.data;if(200===n.code){var i=n.data;t.newSongsList=t.getRandomArrayElements(i,3),t.load=!1}}).catch(function(e){e&&(t.load=!1,console.log(e,"请求超时"))})},moreNewDish:function(){this.$router.push("/moreNewDish")},moreNewSongs:function(){this.$router.push("/moreNewSongs")},getRandomArrayElements:function(t,e){for(var n=t.slice(0),i=t.length,a=i-e,s=void 0,o=void 0;--i>a;)o=Math.floor((i+1)*Math.random()),s=n[o],n[o]=n[i],n[i]=s;return n.slice(a)}},Object(b.b)(["addToAudioList"]))},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper pd23"},[n("div",{staticClass:"title"},[n("div",{staticClass:"recommended"},[n("span",{class:{active:"dish"===t.type},on:{click:function(e){t.type="dish"}}},[t._v("新碟")]),t._v(" "),n("i",{staticStyle:{color:"#ddd"}},[t._v("|")]),t._v(" "),n("span",{class:{active:"newSong"===t.type},on:{click:function(e){t.type="newSong"}}},[t._v("新歌")])]),t._v(" "),n("div",{staticClass:"square"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"dish"===t.type,expression:"type==='dish'"}],on:{click:function(e){return e.stopPropagation(),t.moreNewDish(e)}}},[t._v("更多新碟")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"newSong"===t.type,expression:"type==='newSong'"}],on:{click:function(e){return e.stopPropagation(),t.moreNewSongs(e)}}},[t._v("新歌推荐")])])]),t._v(" "),n("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticStyle:{height:"3rem"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.load,expression:"!load"}]},[n("div",{directives:[{name:"show",rawName:"v-show",value:"dish"===t.type,expression:"type==='dish'"}],staticClass:"img-col"},t._l(t.dishList,function(t,e){return n("img-card",{key:e,attrs:{imgUrl:t.picUrl,dec:t.name,dishId:t.id}})}),1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"newSong"===t.type,expression:"type==='newSong'"}],staticClass:"img-col"},t._l(t.newSongsList,function(e,i){return n("img-card",{key:i,attrs:{imgUrl:e.album.blurPicUrl,dec:e.name},nativeOn:{click:function(n){return t.beginAudio(e)}}})}),1)])],1)},z=[],H={render:Y,staticRenderFns:z},Q=H,Z=n("VU/8"),tt=o,et=Z(K,Q,!1,tt,"data-v-6fd10a7d",null),nt=et.exports,it={name:"findIndex",mounted:function(){this.$refs.tip.showTip()},data:function(){return{isLoading:!1,tips:"为你推荐更多有趣的内容"}},beforeRouteEnter:function(t,e,n){n(),"/pwd"===e.path&&location.reload()},computed:d()({},Object(b.c)({isMiniAudio:"FULL_SCREEN"})),methods:{onRefresh:function(){var t=this;this.$refs.songList._getImgCard(),this.isGetOver()&&setTimeout(function(){t.isLoading=!1,t.tips="已为你推荐新的个性化内容",t.$refs.tip.showTip()},500)},isGetOver:function(){return this.$refs.songList.isGetOver}},components:{swiper:_,icon:P,songList:W,newDish:nt}},at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper"),t._v(" "),n("icon"),t._v(" "),n("song-list",{ref:"songList"}),t._v(" "),n("new-dish"),t._v(" "),n("top-tip",{ref:"tip"},[n("span",{staticClass:"tips"},[t._v(t._s(t.tips))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMiniAudio,expression:"!isMiniAudio"}],attrs:{id:"audio_pb1"}})],1)},st=[],ot={render:at,staticRenderFns:st},rt=ot,ct=n("VU/8"),dt=r,ut=ct(it,rt,!1,dt,"data-v-44f2785f",null);e.default=ut.exports},Woae:function(t,e){},"d/tG":function(t,e){},w7Bb:function(t,e){}});
//# sourceMappingURL=12.06a20168a9059ba64d2a.js.map