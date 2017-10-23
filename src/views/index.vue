<template>
<div class="container">

     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
              <a :href="item.url"><img :src='item.imgPath'></a>
            </div>
        </div>      
        <div class="swiper-pagination"></div>
    </div>

    <div class="advantageCon">
      <a href="https://static.100lending.com/terminal/mobile/disclosure/about/index.html" class="advantage1"><span></span><i>国资背景</i></a>
      <a href="https://static.100lending.com/terminal/mobile/draft/index.html" class="advantage2"><span></span><i>票据资产</i></a>
      <a href='javascript:;' class="advantage3"><span></span><i>信息透明</i></a>
    </div>

    <div class="change" v-for="(item, index) in beginnerProductList" :key="index">
      <div class="change-title"><i class="t01"></i>新手专享 <span>仅有{{ config.noviceCount }}次机会</span></div>
      <div class="change-content">
          <a href='javascript:;'>
              <div class="change-sy">
                {{ item.annualRate }}<span class="fu">%</span>
              </div>
              <div class="txt">约定年化利率</div>
              <div class="bottom"> 项目期限<span class="num">{{ item.deadline }}<i>天</i></span><span class="t">剩余额度</span><span class="num">{{ item.surplusAmount }}<i>元</i></span> </div>
          </a>
      </div>
    </div>

    <div class="change">
      <div class="change-title"><i class="t02"></i>零钱计划<span>按日计息，高效撮合债权转让</span></div>
      <div class="change-content">
          <a href='javascript:;'>
              <div class="c-title">每日万元收益 {{ ((this.currentProduct.annualRate + this.currentProduct.addAnnualRate)*100/360) | price(2)}} 元</div>
              <div class="change-sy">
                {{ this.currentProduct.annualRate }}<span class="fu">%</span><span class="fu">+</span><span class="add">{{ this.currentProduct.addAnnualRate }}</span><span class="fu">%</span>
              </div>
              <div class="txt">约定年化利率</div>
          </a>
      </div>
    </div>

    <div class="change">
      <div class="change-title tj"><i class="t03"></i>推荐项目</div>
      <div class="item" v-for="(item, index) in planProductList" :key="index">
        <a href='javascript:;'> 
          <div class="productList"> 
            <div class="left"> <div class="leftTop">{{ item.annualRate }}<font>%</font><span v-if='item.addAnnualRate'>+{{item.addAnnualRate}}</span><font  v-if='item.addAnnualRate'>%</font></div> <div class="leftBottom">约定年化</div> </div> 
            <div class="mid"> <span>{{ item.deadline }}<i>{{item.repayType>1?"个月":"天"}}</i></span> 项目期限 </div> 
            <div class="right"> 
                <div class="loading-container"> 
                    <div class="loding-all">
                      <span v-bind:style="{width:item.investSchedule+'%'}"></span>
                    </div>
                    <i v-if="item.status == 3" class="loading-num">已售罄</i>
                    <i v-else class="loading-num">{{item.investSchedule}}%</i>
                </div>
                <div v-if="item.status==1 && item.cdTip" class="rightBottom cdTip">{{item.cdTip}}</div>
                <div v-else class="rightBottom">{{item.productName}}</div>  
            </div> 
          </div> 
        </a> 
      </div>

    </div>

    <div class="logoTxtCon">
        <div class="logo_txt"></div>
        <div class="info_link">
          <span>电脑版</span>
          <span>关于我们</span>
          <span>帮助中心</span>
        </div>
    </div>
    <menuTab focus='1'></menuTab>  
</div> 

</template>

<script>

 import {getConfig , getHomeData} from '../serviceData/getData'

  export default {
    data(){
      return {
        bannerList:[],
        beginnerProductList: '',
        currentProduct: '',
        planProductList: '',
        logintype: false,//登录状态
        config: ''
      }
    },
    mounted(){

      this.initData();      
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: '民投金服',
          description: '民投金服,国资入股41%的票据理财平台；民投金服，合规+安全+透明+权威的票据理财平台；银行无条件承兑的票据理财平台。',
          keywords: '民投金服,民投金服票据理财'
        }
      },
      async initData(){
          var data = await getHomeData();

          this.bannerList = data.bannerList;
          this.beginnerProductList = data.beginnerProductList;
          this.currentProduct = data.currentProduct;
          this.planProductList = data.planProductList;              

          //var Swiper = require('../lib/swipe/swiper.js');

          var Swiper = require("swiper");
          require('swiper/dist/css/swiper.css');
          
          new Swiper ('.swiper-container', {
              autoplay: 5000,
              mode:'horizontal',
              autoplayDisableOnInteraction:false,
              pagination: '.swiper-pagination'
          })

          var config = await getConfig();
          
          this.config = config;
          
      }
    }
  }
</script>
