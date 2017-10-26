import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'


import * as filters from './filters/index';

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

Vue.component('menuTab', require('@components/menuTab.vue'));
Vue.component('loadingBar', require('@components/loadingBar.vue'));

sync(store, router)

const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

export { app, router, store }
