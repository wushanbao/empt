<template>
 <div class="wrap">
   <header>
      <div class="login-bg">
          <div class="bg-header">
            <a href="" class="back"></a>
            <div class="zhuche">
              <a href="https://wap.epet.com/register.html" class="text">注册</a>
            </div>
          </div>
          <div class= "bg-mid">
            <img src="./logo.png" alt="">
          </div>
          <div class="bg-footer">
            <ul class="footer-item">
              <li class="first-item" @click="login"><a href="javascript:;">普通登陆</a>
                <i :class="{triangle:have}"></i>
              </li>
              <li class="second-item" @click="logintodo"><a href="javascript:;">手机登陆</a>
                <i :class="{triangle:!have}"></i>
              </li>
            </ul>
          </div>
      </div>
      <div class="login-content "  v-show="isShow">
       <ul class="content-wrapper">
         <li class="item-content">
           <span></span>
           <input type="text" placeholder="手机号/邮箱/用户名">
         </li>
         <li class="item-psd">
           <span></span>
           <input type="text" placeholder="输入密码">
         </li>
       </ul>
     </div>
      <div class="login-content " v-show="!isShow" >
       <ul class="content-wrapper" >
         <li class="item-content">
           <span class="mobile-logo"></span>
           <input type="text" placeholder="已注册的手机号">
         </li>
         <li class="item-psd">
           <span></span>
           <input type="text" placeholder="请输入图片内容">
           <!--<div id="v_container" style="width: 100px;height: 50px;float: right;margin-top: 10px">-->
           <!--</div>-->
         </li>
         <li class="item-psd">
           <span></span>
           <input type="text" class="dongtai" placeholder="动态密码">
           <div class="get-psd" @click="getCode">
             获取动态密码
           </div>
         </li>
       </ul>
     </div>
      <div class="forget-psd" >
       <a href="javascript:;">
         忘记密码？
       </a>
     </div>
      <div class="login-btn">
       <a href="javascript:;">
         登&nbsp;&nbsp;&nbsp;录
       </a>
     </div>
      <div class="go-download"></div>
      <div class="ft-text">
       合作网站登录
     </div>

      <div class="ft-logo">
       <img src="./login_ico4.png" alt="" width="57" height="57">
       <img src="./login_ico2.png" alt="" width="57" height="57">
     </div>
   </header>

   </div>
 </div>
</template>
<script>
  export default{
    data(){
     return{
       isShow:true,
       have:true

     }
    },

    methods:{
        login(){
          if(!this.isShow){
            this.isShow = !this.isShow
            this.have = !this.have

          }

        },
        logintodo(){
          if(!this.isShow){
            return

          }else{
            this.isShow = !this.isShow
            this.have=!this.have


          }


        }


    }
  }

</script>
<style lang="stylus"  type="text/stylus" rel="stylesheet/stylus">
 /*!* <!--登录*!头部-->*/
  /*.wrap*/
    /*height 667px*/
    /*position absolute*/
    /*z-index 200*/
    .login-bg
      background-image url("./2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
      background-size 100% 100%
      height 198px
      width 100%
      .bg-header
        height 50px
        width 100%
        .back
          background url("./personal-bico3.png") no-repeat
          /*background-image no-repeat*/
          background-size: 12px 17px
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
          left 15px
        .zhuche
          position absolute
          right 15px
          margin-top: 16px;
          .text
            color white
      .bg-mid
        margin-top 20px
        height 85px
        width 100%
        img
          display block
          height 47px
          margin auto
          width 20%

      .bg-footer
        .footer-item
          width 100%
          height 44px
          background rgba(255,255,255,.3)
          li
            float left
            width 50%
            text-align center
            height 44px
            line-height 44px
            position relative
            a
              font-size 15px
              color white
              display block
            .triangle
              display block
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0px;
              left: 0;
              right: 0;
              margin: auto;


//     手机和普通登录
    .login-content
      width 95%
      .item-content
        border-bottom 1px solid #E9E9E9
        height 30px
        margin 25px 0 0 25px
        span
          width 17px
          height 20px
          display block
          background url("./ico3.png") no-repeat
          background-size 100%
          position absolute
        .mobile-logo
          width 12px
          height 22px
          display block
          background url("./ico1.png") no-repeat
          background-size 100%
          position absolute
        input::-webkit-input-placeholder
                color #D7D7D7
        input[type="text"]
          margin-left 25px
          border none //非激活状态跟不显示
          outline medium //鼠标移到输入框不显示

      .item-psd
        border-bottom 1px solid #E9E9E9
        height 50px
        margin 0 0 0 25px
        line-height 40px
        position relative
        span
          width 17px
          height 21px
          display block
          background url("./ico4.png") no-repeat
          background-size 100%
          position absolute
          margin-top 10px
        input[type="text"]
          margin-left 25px
          border: none;
          outline: medium;
        input::-webkit-input-placeholder
                color #D7D7D7
        .get-psd
          display inline-block
          width 100px
          height 30px
          border 1px solid #F6ADA2
          border-radius 5px
          color #FF4259
          font-size 12px
          position absolute
          top 0
          right 0
          margin-top 10px
          text-align center
          line-height 30px

      /*忘记密码*/
    .forget-psd
      float right
      margin 10px 10px 0 0
      font-size 15px

      /*登录按钮*/
    .login-btn
      width 90%
      height 40px
      background-color: #2ec975
      border-radius 3px
      margin 35px auto
      text-align center
      line-height 40px
      a
        color #fff
    .ft-text
      width 100%
      text-align center
      margin-top 48px
      color #d7d7d7
    .ft-logo
      img
        margin 20px 0 0 50px

</style>




