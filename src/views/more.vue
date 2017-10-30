<template>
<div class="container">
	<img src="../images/more/moreInfoBanner.png" class="banner">

	<div class="sec-info">
		<div class="sec-title"><span>信息披露</span></div>
		<div class="sec-content">
			<div class="info-part">
				<div class="list"><a href="javascript:;"><i class="li-ico01"></i><span>关于民投</span></a></div>
				<div class="list"><a href="javascript:;"><i class="li-ico02"></i><span>安全保障</span></a></div>
				<div class="list"><a href="javascript:;"><i class="li-ico03"></i><span>平台数据</span></a></div>
			</div>
			<div class="info-part">
				<div class="list"><a href="javascript:;"><i class="li-ico04"></i><span>运营报告</span></a></div>
				<div class="list"><a href="javascript:;"><i class="li-ico05"></i><span>媒体报道</span></a></div>
				<div class="list"><a href="javascript:;"><i class="li-ico06"></i><span>平台公告</span></a></div>
			</div>
		</div>
	</div>

	<div class="sec-info">
		<div class="sec-title"><span>更多</span></div>
		<div class="sec-content">
			<ul>
				<li>
					<a href="javascript:;" class="a-ico01">
						<span>帮助中心</span>
						<b></b>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="a-ico02">
						<span>新手指引</span>
						<b></b>
					</a>
				</li>
				<li>
					<div class="a-ico03">
						<span>客服热线</span>
						<a href="tel:4008886221">400-888-6221</a>
					</div>
				</li>
				<li>
					<div class="a-ico04">
						<span>微信公众号</span>
						<b>mintoujinfupif</b>
					</div>
				</li>
				<li>
					<div class="a-ico05">
						<span>QQ客服</span>
						<a href="http://q.url.cn/s/V4srO">点击联系</a>
					</div>
				</li>
				<li>
					<div class="a-ico06">
						<span>QQ交流群</span>
						<b>612830435</b>
					</div>
				</li>
				<li>
					<div class="a-ico07">
						<span>手机APP</span>
						<a href="https://static.100lending.com/terminal/mobile/appDownload/app.html?1021">立即下载</a>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<menuTab focus='4'></menuTab> 
</div>

</template>

<script>


	module.exports= {

		mounted(){

	      this.hideLoading();      
	    }
	}
</script>

<style lang="less" scoped>

	@more: '../images/more'; 
	@common: '../images/common'; 

	.banner{
		width: 100%;
	}
	.sec-info{
		margin-bottom: 20px;
		background: #fff;

		.sec-title{		

			padding: 20px;
			border-bottom: 1px solid #e2e2e2; /*no*/	
			span{
				display: block;
				border-left: 2px solid #ff5156; /*no*/		
				padding-left: 20px;
				font-size: 30px; /*px*/
				height: 38px; /*px*/
				line-height: 38px; /*px*/
				color: #404040;
				font-weight: bold;				
			}
		}

		.sec-content{
			padding-bottom: 20px;

			.info-part{
				display: flex;
				margin-top: 20px;

				.list{
					flex: 1;
					text-align: center;

					a{
						display: block;
						color: #404040;
						font-size: 24px; /*px*/

						i{
							display: block;
							width: 100%;
							height: 74px; /*px*/
							margin: 10px 0;
						}

						.li-ico01{
							background: url('@{more}/moreIcon1.png') no-repeat center top/ 70px; /*px*/
						}
						.li-ico02{
							background: url('@{more}/moreIcon2.png') no-repeat center top/ 70px; /*px*/
						}
						.li-ico03{
							background: url('@{more}/moreIcon3.png') no-repeat center top/ 70px; /*px*/
						}
						.li-ico04{
							background: url('@{more}/moreIcon4.png') no-repeat center top/ 70px; /*px*/
						}
						.li-ico05{
							background: url('@{more}/moreIcon5.png') no-repeat center top/ 70px; /*px*/
						}
						.li-ico06{
							background: url('@{more}/moreIcon6.png') no-repeat center top/ 70px; /*px*/
						}
					}
				}

			}

			li{
				>a, div{
					margin: 0 30px;
					color: #333;
					display: block;
					overflow: hidden;
					height: 88px; /*px*/
					line-height: 88px; /*px*/
					padding-left: 60px; /*px*/
					border-bottom: 1px solid #e2e2e2; /*px*/

					>b{
						float: right;
						text-align: right;
						display: block;
						height: 88px; /*px*/
						min-width: 16px; /*px*/
						font-weight: normal;
						padding-right: 24px; /*px*/
						background: url('@{common}/icon21.png') no-repeat right center / 13px; /*px*/
					}
				}

				div{
					
					a{
						color: #333;
						float: right;
						text-align: right;
						padding-right: 24px; /*px*/
						background: url('@{common}/icon21.png') no-repeat right center / 13px; /*px*/	
					}

				}

				.a-ico01{
					background: url('@{more}/moreIcon7.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico02{					
					background: url('@{more}/moreIcon13.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico03{					
					background: url('@{more}/moreIcon8.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico04{					
					background: url('@{more}/moreIcon9.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico05{					
					background: url('@{more}/moreIcon10.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico06{					
					background: url('@{more}/moreIcon11.png') no-repeat left center/ 40px; /*px*/
				}
				.a-ico07{					
					background: url('@{more}/moreIcon12.png') no-repeat left center/ 40px; /*px*/
				}
			}

			li:last-child{
				>div{
					border: none;
				}
			}
		}	
		
	}
</style>
