<template>
<div class="container">
	<div class="currentDetail">
		<div>
			<div>{{product.annualRate || 0}}<font>%</font><font>+</font><span>{{product.addAnnualRate || 0}}</span><font>%</font></div>
			<div>约定年化利率</div>
			<div><i class="rateTips-ico"></i>按日计息，每日万元收益{{ ((product.annualRate + product.addAnnualRate)/100*10000/360) | price(2)}}元</div>
		</div>
		<div class="currentAmount">
			<div>
				<div class="bgLine line01"></div>
				<div class="bgLine line02"></div>
				<div>
					<img src="../images/currentDetail/tipLeft-ico.png">
					<div>今日投资</div>
					<div v-cloak>{{ this.today | dateFormat}}</div>
				</div>
				<div>
					<img src="../images/currentDetail/tipCenter-ico.png">
					<div>开始计息</div>
					<div>{{ tomorrow | dateFormat}}</div>
				</div>
				<div>
					<img src="../images/currentDetail/tipRight-ico.png">
					<div>查看收益</div>
					<div>{{afterTomorrow | dateFormat }}</div>
				</div>
			</div>

			<div class="surplusAmount" v-if="product.status>2">当前额度已售罄</div>
            <div class="surplusAmount" v-else>剩余额度 <span>{{product.surplusAmount | price}}</span> 元</div>

			<div class="gotoBuyCurrent">
				<a v-if="product.status<=2" href="javascript:;">立即投资</a>
                <a v-else class='disabled' href="javascript:;">敬请期待下次额度</a>
			</div>
		</div>
	</div>

	<menuProduct focus='1'></menuProduct>
	<menuTab focus='2'></menuTab>
</div>

</template>

<script>

	import {getCurrentDetail} from '../serviceData/getData'

	import menuProduct from '../components/menuProduct.vue'

	module.exports= {
		data(){
			return {
				product: {},
				today: ''
			}
		},
		computed:{
			tomorrow(){				
				return this.today && this.today + 1000*60*60*24; 
			},
			afterTomorrow(){
				return this.today && this.today + 1000*60*60*24*2;
			}
		},
		mounted(){

	      this.initData();      
	    },
	    methods:{
	    	async initData(){

		    	let data = await getCurrentDetail();

		    	this.product = data.data;
		    	this.today = data.serviceDate;

		    	this.hideLoading();
		    	
		    }
	    },	    
		components:{
			menuProduct: menuProduct
		}
	}
</script>

<style lang="less">

	@currentDetail: '../images/currentDetail'; 

	.currentDetail{
		margin-top: 80px;

		> div:first-child{
			height: 440px;
			background: url('@{currentDetail}/currentBg.png') no-repeat center center / 750px;
			color: #fff;
			text-align: center;
			overflow: hidden;

			> div:first-child{
				font-size: 100px; /*px*/
				margin-top: 100px;
				margin-bottom: 30px;
				height: 90px; 
				line-height: 90px; 

				font:first-child, font:nth-child(4){
					font-size: 36px; /*px*/
				}
				font:nth-child(2), span:nth-child(3){
					font-size: 60px; /*px*/
				}
			}

			> div:nth-child(2){
				font-size: 24px; /*px*/
				margin-bottom: 80px;
			}

			> div:nth-child(3){
				font-size: 26px; /*px*/

				i{
					display: inline-block;
					width: 16px;
					height: 16px;
					background: url('@{currentDetail}/rateTips-ico.png') no-repeat
				}
			}
		}

		.currentAmount{
			background: #fff;
			padding: 45px 0;

			> div:first-child{
				display: flex;
				position: relative;		

				> div {
					flex: 1;
					text-align: center;
					color: #818181;

					img{
						margin-bottom: 10px;
					}
				}

				.bgLine{
					position: absolute;
					z-index: 1;
					top: 22px;
					height: 3px;
					background: url('@{currentDetail}/line-bg.png') repeat-x left center;			
				}

				.line01{
					left: 21%;
					right: 54%;
				}
				.line02{
					left: 54%;
					right: 21%;
				}
			}

			.surplusAmount{
				color: #404040;
				text-align: center;
				font-size: 30px; /*px*/
				padding: 50px 0 28px;

				span{
					color: #ff5151;
				}
			}

			.gotoBuyCurrent{
				width: 90%;
				margin: 0 auto;

				a{
					display: block;
					color: #fff;
					background: #ff5151;
					height: 90px;
					line-height: 90px;
					font-size: 34px; /*px*/
					text-align: center;
					border-radius: 8px;
				}
			}
		}
	}

</style>
