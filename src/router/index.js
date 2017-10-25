import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index.vue'
import more from '../views/more.vue'
import login from '../views/login.vue'
import currentDetail from '../views/currentDetail.vue'
import productList from '../views/productList.vue'
import sporadicList from '../views/sporadicList.vue'

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
	//更多
    { 
    	path: '/more', 
    	component: more, 
    	name: 'more' 
    },
    //登录
    {
    	path: '/user/login',
    	component: login,
    	name: 'login'
    },
    //零钱计划
    {
    	path: '/product/currentDetail',
    	component: currentDetail,
    	name: 'currentDetail'
    },
    //定期计划
    {
    	path: '/product/productList',
    	component: productList,
    	name: 'productList'
    },
    //定期直投
    {
    	path: '/product/sporadicList',
    	component: sporadicList,
    	name: 'sporadicList'
    }
  ]
})