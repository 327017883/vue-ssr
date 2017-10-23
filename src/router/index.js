import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index.vue'
import more from '../views/more.vue'
import login from '../views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{ 
  		path: '', 
  		redirect: '/index' 
  	},
  	//首页
	{ 
		path: '/index', 
		component: index, 
		name: 'home' 
	},
	//更多页面
    { 
    	path: '/more', 
    	component: more, 
    	name: 'more' 
    },
    //登录页面
    {
    	path: '/user/login',
    	component: login,
    	name: 'login'
    }
  ]
})