<template>
	<div class="login">
		<div class="login-container">
			<h6>专注抵押资产的理财平台</h6>
			<div v-bind:class="{ focus: moblieFocus == 1 ? true:false }">
				<i class="moblie-icon"></i>
				<input type="text" placeholder="请输入手机号" maxlength="13" v-on:focus = "toFocus('focus', '1')" v-on:blur = "toFocus('blur', '1')" v-model='mobilephone' @keyup='reglog'>
			</div>
			<div v-bind:class="{ focus: pswFocus == 1 ? true:false }">
				<i class="psw-icon"></i>
				<input type='password' placeholder="请输入登录密码" v-on:focus = "toFocus('focus', '2')" v-on:blur = "toFocus('blur', '2')" ref='inputPsw' v-model='password'>
				<em  v-bind:class='{eyRed: showEye == 1 ? true: false}' class="eye-icon" @click="showPsw($event)"></em>
			</div>
			<i class="error">{{error}}</i>
			<a href="javascript:;" class="btn login-btn" @click='login'>立即登录</a>
			<a href="javascript:;" class="btn register-btn">注册领福利</a>
			<a href="javascript:;" class="forget-btn">忘记密码？</a>
		</div>
		<menuTab focus='3'></menuTab>  
	</div>
</template>

<script>   
	import {login} from '../serviceData/getData'

	export default{
		data(){
			return{
				error: '',
				moblieFocus: !1,
				pswFocus: !1,
				showEye: !1,
				passwordType: !0,
				password: '',
				mobilephone: ''
			}
		},
		mounted(){
			this.hideLoading();

			require('../lib/rsa.js');
		},
		methods:{
			reglog(){

				var phone = this.mobilephone;
	        	var pLength = phone.length;
	        	
				if(pLength > 3) {
		            phone = phone.replace(/\s*/g, "");
		            if(phone.length > 7) {
		                phone = phone.replace(/^(...)(....)/g, "$1 $2 ");
		            } else if(phone.length > 3) {
		                phone = phone.replace(/^(...)/g, "$1 ");
		            }
		        }
				this.mobilephone = phone;
			},
			showPsw(e){

				this.$refs.inputPsw.type = (this.passwordType = !this.passwordType) == true ? 'password' : 'text';
				this.showEye = !this.showEye;
			},
			toFocus(type, num){

				let typeObj = {
					focus: !0,
					blue: !1
				};

				let numObj = {
					'1': 'moblieFocus',
					'2': 'pswFocus'
				};

				this[numObj[num]] = typeObj[type];
			},
			login(){
				if(this.check()){

					login({
						loginId: this.mobilephone.replace(/\s/g,''),
						password: RSAUtils.pwdEncode(this.password)
					}).then((res) => {
						if(res.code == 1){
							this.$router.replace('/');
						}
					});
				}
				
			},
			check(){

				var mobilephone = this.mobilephone.replace(/\s/g,'');

				if(mobilephone == ''){
					this.error = '请输入手机号码';
					return !1;	
				}
				else if(!/^[1][34587][0-9]{9}$/g.test(mobilephone) || mobilephone.length > 11){

					this.error = "手机号错误，请核对";
					return !1;
				}
				if(this.password == ''){
					this.error = '请输入密码';
					return !1;	
				}
				this.error = '';
				return !0;
			}
		}
	}
</script>

<style lang="less" scoped>

	@login: '../images/login'; 
	
	.login{ 
		height: 100%;
		background: #fff;
		overflow: hidden;

		.login-container{
			
			margin: 220px 50px 0;

			h6{
				color: #777;
				font-size: 30px; /*px*/
				height: 50px; /*px*/
				line-height: 50px; /*px*/
				font-weight: normal;
			}

			> div{
				position: relative;
				height: 100px; /*px*/ line-height: 100px; /*px*/
				border-bottom: 1px solid #e1e1e1; /*px*/

				> input{
					height: 100%;
					border: none;
					font-size: 28px; /*px*/
					width: 540px;
				}

				i{
					display: inline-block;
					width: 35px; height: 35px;
					vertical-align: middle;
					margin-right: 10px;
				}
				em{
					position: absolute;
					z-index: 1;
					right: 20px;
					top: 25px;
					display: block;
					width: 35px; height: 35px;
				}				

				.moblie-icon{
					background: url('@{login}/icon01.png') no-repeat center center / 35px;
				}

				.psw-icon{
					background: url('@{login}/icon03.png') no-repeat center center / 35px;
				}

				.eye-icon{
					background: url('@{login}/icon05.png') no-repeat center center / 35px;
				}

				.eyRed{
					background-image: url('@{login}/icon06.png');
				}
			}

			> div.focus{
				border-bottom: 1px solid red; /*px*/

				.moblie-icon{
					background: url('@{login}/icon02.png') no-repeat center center / 35px;
				}

				.psw-icon{
					background: url('@{login}/icon04.png') no-repeat center center / 35px;
				}

			}

			.error{
				display: block;	height: 70px; line-height: 70px;
				color: #d80000;
				font-size: 28px; /*px*/
			}

			> a{
				display: block;
				text-align: center;
			}
			.btn{
				font-size: 36px; /*px*/
				width: 100%; height: 100px; line-height: 100px;
				border-radius: 8px;
			}
			.login-btn{
				color: #fff; background: #ff5151; margin-bottom: 20px; 				
			}
			.register-btn{
				color: #ff5151; background: #fff;  border: 1px solid #ff5151; /*no*/
				margin-bottom: 200px;				
			}
			.forget-btn{
				font-size: 28px;/*px*/
			}
		}
	}

</style>
