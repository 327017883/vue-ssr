<template>
<div class="container">
	<div class="currentDetail">
		<div>
			<div>5.5<font>%</font><font>+</font><span>0.4</span><font>%</font></div>
			<div>约定年化利率</div>
			<div><i class="rateTips-ico"></i>按日计息，每日万元收益1.63元</div>
		</div>
		<div class="currentAmount">
			<div>
				<div class="bgLine line01"></div>
				<div class="bgLine line02"></div>
				<div>
					<img src="../images/currentDetail/tipLeft-ico.png">
					<div>今日投资</div>
					<div>2017-10-24</div>
				</div>
				<div>
					<img src="../images/currentDetail/tipCenter-ico.png">
					<div>开始计息</div>
					<div>2017-10-25</div>
				</div>
				<div>
					<img src="../images/currentDetail/tipRight-ico.png">
					<div>查看收益</div>
					<div>2017-10-26</div>
				</div>
			</div>

			<div class="surplusAmount">剩余额度 <span>64,913</span> 元</div>

			<div class="gotoBuyCurrent"><a href="javascript:;">立即投资</a></div>
		</div>
	</div>

	<menuProduct focus='1'></menuProduct>
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
