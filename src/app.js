import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'
import axios from 'axios'

import * as filters from './filters/index';

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

Vue.component('menuTab', require('@components/menuTab.vue'));
//Vue.component('loadingBar', require('@components/loadingBar.vue'));


//进度加载
var loadingShow = {show: true};
Vue.component('loading-bar', {
	template: '<div v-show="show" class="_loadBg"><div class="_loadBgCon"><div class="wrapper"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div>	</div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div>	<div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div></div></div>',
	data: function(){
		return loadingShow
	}
});

Vue.mixin({
  methods:{
    hideLoading(){
    	loadingShow.show = false;
    }
  }
});

sync(store, router)

const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

export { app, router, store }
