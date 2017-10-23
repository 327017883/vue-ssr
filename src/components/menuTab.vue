<template>
<div class="menuTab">
	<ul>
		<li><router-link :to="{name: 'home'}"><i v-bind:class="{ focus: focus==1?true:false }"></i><span>首页</span></router-link></li>
		<li><a href="javascript:;"><i v-bind:class="{ focus: focus==2?true:false }"></i><span>理财</span></a></li>
		<li><router-link :to="{name: 'login'}"><i v-bind:class="{ focus: focus==3?true:false }"></i><span>我的</span></router-link></li>
		<li><router-link :to="{name: 'more'}"><i v-bind:class="{ focus: focus==4?true:false }"></i><span>更多</span></router-link></li>
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
