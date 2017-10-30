<template>
   <div class="app">
		 <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<loading-bar></loading-bar>
   </div>
</template>