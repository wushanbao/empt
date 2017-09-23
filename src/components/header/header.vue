<template>
  <div class="wrapper">
    <div class="header-wrapper" :class="{fix:have}">
      <!--下载App广告-->
     <div class="download">
      <div id ='practice' class="download_app"v-show="isShow" >
        <div class="rela">
          <div  class="download-img">
            <a href="javascript:;">
              <i>
                <span class="close-btn" @click="closeDownload">
                  <img src="./closebtn_03.png" width="15" height="15">
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--头部-->
      <div class="header">
        <div class="content">
          <div class="epet-search">
            <div class="location">
              <span>猴站</span>|重庆<a href="" style="color: black"></a>
              <img src="./index_icon_comment_sanjiao.png" alt="" width="8" height="5">
              <i></i>
            </div>
            <!--搜索框-->
            <div class="search-text">
              <input type="search" placeholder="搜索商品和品牌" class="search">
              <span></span>
            </div>
            <a href="" class="epet-category">
              <img src="./mydope.png" width="24" height="24">
            </a>
          </div>
        </div>
      </div>
      <!--导航-->
      <div class="nav" ref="nav" >
        <ul class="tab " >
          <li class="tab-item">
            <router-link to="/home/shouye">首页</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/home/maoliang">主粮</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/home/yiliao">医疗保健</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/home/lingshi">零食玩具</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/home/riyong">日用外出</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/home/meirong">美容香波</router-link>
          </li>
        </ul>
      </div>

    </div>

    <div class="router-content">
      <router-view></router-view>
    </div>
    <!--<div class="router-content">-->
      <!--<router-view :headerY="headerY"-->
                   <!--:add-fix="addFix"></router-view>-->
    <!--</div>-->
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'

  export default{

  data(){
    return{
     isShow:true,
      have:false,

    }

  },
    methods:{
      closeDownload(){
        this.isShow = !this.isShow
//        this.styles = download-app2
      },
      addFix(){
        this.have=!this.have

      }
    },
    created () {
          this.$nextTick(() => {
            new BScroll(this.$refs.nav, {
              click: true ,
              scrollX:true
            })
          })
        }

  }

</script>

<style lang="stylus"  type='text/stylus'  rel="stylesheet/stylus">
  /*.wrapper*/
    /*overflow hidden*/
   /* background-color: red*/
    /*width 100%*/
    /*height 126px*/
    /*position relative*/
    .header
      /*.nav*/
        /*background-color: red*/
        /*height 100px*/
      .content
        overflow hidden
    .header-wrapper
      overflow hidden
      height 126px
      /*position relative*/
      /*z-index 100*/
      /*position fixed*/
      /*height 200px*/
      width 100%
      background-color: #fff;
      .fix
        position fixed
        z-index 100
        background-color: #fff;
        height 155px
      .download_app
        position fixed
        /*margin-bottom -bottom 50px*/
        z-index 101
        width 100%
        background white
      /*.download-app2*/
        /*background-image url("./666.jpg")*/
        /*position fixed*/
        /*z-index 100*/
        /*width 100%*/
        /*background white*/
        .download-img
          width 100%
          a
            display block
            height 55px
            i
              background-image url("./download.png")
              display block
              width 100%
              height 55px
              background-size 100%
              .close-btn
                line-height 55px
                margin-left 10px
      .header
        /*background white*/
        width 100%
        .content
          /*position absolute*/
          position fixed
          /*margin-top 50px*/
          padding-top 50px
          z-index 100
          background-color white
          width 100%
          margin-bottom 10px
          .epet-search
            padding 8px
            .location
              display inline-block
              font-size 14px
              img
                vertical-align middle
              i
                position: absolute;
                top: 10px;
                right: -11px;
                border-width: 4px;
                font-size: 0;
                line-height: 0;
                border-style: solid solid dotted;
                border-color: #898989
            .search-text
              display inline-block
              .search
                border none
                width 230px
                height 25px
                background #f6f6f6
                border-radius 4px
                color #9e9e9e
                text-indent 10px
                font-size 13px
                outline none
              span
                display inline-block
                background-image url("./search.png")
                width 11px
                height 11px
                background-size 11px 11px
            .epet-category
              display inline-block
              vertical-align top
      .nav
        .tab
          width 120%
          display flex
          position fixed
          z-index 101
          background white
          margin-top 90px
          white-space nowrap
          height 36px
          line-height 36px
          .tab-item
            font-size 14px
            color #666
            width 0
            flex 1
            text-align center
            & > a
              display block
              &.active
                color #e73f85
                border-bottom 2px solid #e73f85

</style>
