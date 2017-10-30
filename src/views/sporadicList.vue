<template>
<div class="container">
	<div class="product-con">
		<div class="product-list" v-for="(product, index) in productList" :key='index' v-bind:class='{hasOver:product.status>2}'>
			<a href="javascript:;">
				<div class="icons"><span v-if="product.productArea==2">新手专享</span></div>
				<div class="product-content">
					<div class="product-info">
						<div class="left">
							<div class="top">{{product.annualRate | price(2, 1)}}<font>%</font></div>
							<div class="bottom">约定年化利率</div>
						</div>
						<div class="center">
							<div class="top">{{product.deadline}}<font>{{product.repayType>1?"个月":"天"}}</font></div>
							<div class="bottom">期限</div>
						</div>
						<div class="right">
							<div class="top">{{product.surplusAmount | price}}<font>元</font></div>
							<div class="bottom">剩余额度</div>
						</div>
					</div>
					<div class="progress">
						<div class="left">{{product.productName}} <span v-if="product.activityIdentification" class='commonActivity'>{{product.activityIdentification}}</span></div> 
						<div class="right"> 
							<div class="progressTxt">{{product.investSchedule}}%</div>
							<div class="progressCon">
								<div v-bind:style="{width:product.investSchedule+'%'}"></div></div> 
							</div>
					</div>
				</div>
			</a>
		</div>
	</div>

	<menuProduct focus='3'></menuProduct>
	<menuTab focus='2'></menuTab>
</div>

</template>

<script>

	import menuProduct from '../components/menuProduct.vue'
	import {getSporadictList} from '../serviceData/getData'

	module.exports= {
		data(){
			return {
				productList: ''
			}
		},
		mounted(){

	      this.initData();      
	    },
	    methods: {
	    	async initData(){
	    		let data = await getSporadictList();
	    		this.productList = data.data.productList;

	    		this.hideLoading();
	    	}
	    },
		components:{
			menuProduct: menuProduct
		}
	}
</script>
