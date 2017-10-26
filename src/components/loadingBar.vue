<template>
<div v-show="show" class="_loadBg">
	<div class="_loadBgCon">
		<div class="wrapper">
			<div class="wBall" id="wBall_1">
				<div class="wInnerBall"></div>
			</div>
			<div class="wBall" id="wBall_2">
				<div class="wInnerBall"></div>
			</div>
			<div class="wBall" id="wBall_3">
				<div class="wInnerBall"></div>	
			</div>
			<div class="wBall" id="wBall_4">
				<div class="wInnerBall"></div>
			</div>	
			<div class="wBall" id="wBall_5">
				<div class="wInnerBall"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				show: true
			}
		}
	}
</script>
