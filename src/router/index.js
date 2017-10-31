import Vue from 'vue'
import Router from 'vue-router'

// const index = resolve => require(['../views/index.vue'], resolve);
// const more = resolve => require(['../views/more.vue'], resolve);
//const login = resolve => { require(['@views/login.vue'], resolve) };
// const currentDetail = resolve => require(['../views/currentDetail.vue'], resolve);
// const productList = resolve => require(['../views/productList.vue'], resolve);
// const sporadicList = resolve => require(['../views/sporadicList.vue'], resolve);

import index from '../views/index.vue'
import more from '../views/more.vue'
import login from '../views/login.vue'
import currentDetail from '../views/currentDetail.vue'
import productList from '../views/productList.vue'
import sporadicList from '../views/sporadicList.vue'

//const login = r => require.ensure([], () => r(require('../views/login.vue')), 'login')

Vue.use(Router)

let router = new Router({
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
		name: 'home',
		meta: {
			keepAlive: false
		} 
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
    	name: 'currentDetail',
    	meta: {
			keepAlive: false
		} 
    },
    //定期计划
    {
    	path: '/product/productList',
    	component: productList,
    	name: 'productList',
    	meta: {
			keepAlive: false
		} 
    },
    //定期直投
    {
    	path: '/product/sporadicList',
    	component: sporadicList,
    	name: 'sporadicList',
    	meta: {
			keepAlive: false
		} 
    }
  ]
});

router.beforeEach((to, from, next) => { next(); });

export default router