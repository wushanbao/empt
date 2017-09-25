<template>
  <div class="register-wrap">
    <div class="register">
      <form action="" method="get">
        <ul class="inp-list" >
          <li class="inp-item" >
            <span class="icon-tel"></span>
            <input type="text" placeholder="请输入手机号码" class="text-tel" v-model="tel"  >
          </li>
          <div class="res-btn"  v-show="isTrue">
            <mt-button type="primary"   class="nextStep"   @click="changInputt">下一步</mt-button>
            <!--<Button class="nextStep"  ref="resBtn"   @click="changInputt">下一步</Button>-->
          </div>
          <li class="inp-item" v-show="isShow">
            <span class="icon-auth"></span>
            <input type="text" placeholder="图片验证码" class="text-tel" v-model="authText">
            <div id="v_container" ref="vContainer"></div>
          </li>
          <li class="inp-item" v-if="isShow">
            <span class="verification"></span>
            <input type="text" placeholder="验证码" class="text-tel" v-model="inputCode" >
            <mt-button type="primary"  class="verification-btn" >获取短信验证码</mt-button>
          </li>
          <li class="inp-item" v-if="isShow">
            <span class="icon-email"></span>
            <input type="text" placeholder="你的昵称/用户名" class="text-tel" v-model="username" >
          </li>
          <li class="inp-item" v-if="isShow">
            <span class="icon-password"></span>
            <input type="password" placeholder="请设置密码" class="text-tel" v-model="password">
          </li>
          <li class="inp-item" v-if="isShow">
            <span class="icon-password"></span>
            <input type="password" placeholder="请确认密码" class="text-tel" v-model="rPassword" >
          </li>
          <div class="res-btn"  v-show="isShow">
            <mt-button type="primary"   class="nextStep"  @click="nextClick">点击注册</mt-button>
            <!--<Button class="nextStep"  ref="resBtn"   @click="changInputt">下一步</Button>-->
          </div>
        </ul>

      </form>
    </div>
  </div>
</template>
<script>
  import GVerify from './gVerify'
  import { MessageBox } from 'mint-ui'
  import axios from 'axios'
  export default{
    data(){
      return{
        tel: '',
        authText: '',
        inputCode: '',
        resCode: '',
        username: '',
        password: '',
        rPassword: '',
        isShow: false,
        isTrue:true,
      }
    },
    created(){
      this.$nextTick(()=>{
        this._foundAuth()
      })

    },
    methods:{
//        正则匹配表达式
      changInputt(){
        if(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.tel)){
          this.isShow = true
          this.isTrue = !this.isTrue
        }else{

          MessageBox("请输入正确的手机号")
        }

      },
      _foundAuth(){
        this.verifyCode = new GVerify({
          id: "v_container", //容器Id
          num:4,//默认4，长度
        })
      },

    nextClick (){
       let username = this.username.trim()
       let password = this.password.trim()
       let rPassword = this.rPassword.trim()
       let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${username}&r_password=${password}&r_confirmPassword=${rPassword}`
      if(!this.verifyCode.validate(this.authText)){
        alert("请正确输入图片验证码！")
        return
      }else if (!this.inputCode === this.resCode){
        alert("短信验证码不正确！")
        return
      }else if(password === rPassword){
        axios.get(url)
          .then(res => {
            if(res.data){
              localStorage.setItem('username',username)
              this.$router.push('/myepet')
            }
          })
      }


    }

    }

}

</script>
<style lang="stylus"  type="text/stylus" rel="stylesheet/stylus">
body
  background-color white
  /*最大包裹区*/
.register-wrap
  .register
    .inp-list
      margin-left 1em
      .inp-item
        border-bottom #e2e2e2 solid 1px
        padding 1.2em 0 1.2em 30px
        position relative
        /*小图标部分*/
      /*#lastItem*/
        /*margin-left 50px*/
        .icon-tel
          float left
          display inline
          width 17px
          height 17px
          background url(./ico1.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        .icon-auth
          float left
          display inline
          width 17px
          height 17px
          background url("./ico5.png") no-repeat
          background-size contain
          margin 2px 0 0 -25px
        #v_container
          position absolute
          right 20px
          top 15px
          width 110px
          height 30px
        .verification
          float left
          display inline
          width 17px
          height 17px
          background url("./ico2.png") no-repeat
          margin 2px 0 0 -25px
        .verification-btn
          position  absolute
          right 20px
          top 21px
          width 130px
          font-size: 15px;
          height: 38px
          border-radius: 23px
          background-color #ffde9e

          /*background-color #fed171*/
          /*border-color #fed171*/

        .icon-email
          float left
          display inline
          width 17px
          height 17px
          background url(./ico3.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px

        .icon-password
          float left
          display inline
          width 17px
          height 17px
          background url(./ico4.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px

        .text-tel
          border-radius 3px
          outline none
          display block
          height 21px
          width 100%
          font-size 16px
          border none
          padding 0
          color #b8b8b8
          background-color #fff

    .res-btn
      /*background deepskyblue*/
      margin-top 10px
      /*width 20px*/
      /*height 10px*/
      padding-top 1.5em
      text-align center
      .nextStep
        /*text-align center*/
        /*background deepskyblue*/
        /*vertical-align middle*/
        width 220px
        height 42px
      .ivu-btn
        font-size 1.2em
        width 80%
        margin 0 10%
        padding 0.5em 0
        &.ivu-btn-warning[disabled]
          background-color #d7d7d7
          color #fff
</style>
