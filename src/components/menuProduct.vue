<template>
<div class="productMenuTab">
	<ul>
		<router-link :to="{name: 'currentDetail'}" tag='li' v-bind:class="{ focus: focus == 1 ? true : false }" replace>零钱计划</router-link>
		<router-link :to="{name: 'productList'}" tag='li' v-bind:class="{ focus: focus == 2 ? true : false }" replace>定期计划</router-link>
		<router-link :to="{name: 'sporadicList'}" tag='li' v-bind:class="{ focus: focus == 3 ? true : false }" replace></i>定期直投</router-link>
	</ul>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				
			}
		},
		props:["focus"]
	}
</script>
