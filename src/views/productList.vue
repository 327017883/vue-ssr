<template>
<div class="container">
	<div class="product-con">
		<div class="product-list">
			<a href="javascript:;">
				<div class="icons"><span>新手专享</span></div>
				<div class="product-content">
					<div class="product-info">
						<div class="left">
							<div class="top">15.0<font>%</font></div>
							<div class="bottom">约定年化利率</div>
						</div>
						<div class="center">
							<div class="top">10<font>天</font></div>
							<div class="bottom">期限</div>
						</div>
						<div class="right">
							<div class="top">752,900<font>元</font></div>
							<div class="bottom">剩余额度</div>
						</div>
					</div>
					<div class="progress">
						<div class="left">银票计划M2017102406</div> 
						<div class="right"> 
							<div class="progressTxt">5%</div>
							<div class="progressCon">
								<div style="width: 5%;"></div></div> 
							</div>
					</div>
				</div>
			</a>
		</div>
	</div>

	<menuProduct focus='2'></menuProduct>
	<menuTab focus='2'></menuTab>
</div>

</template>

<script>

	import menuProduct from '../components/menuProduct.vue'

	module.exports= {
		data(){
			return {

			}
		},
		components:{
			menuProduct: menuProduct
		}
	}
</script>

<style lang="less">

	

</style>
