<template>

  <div id="app">
        <router-view></router-view>
       <epet-footer class="footer"></epet-footer>

  </div>
     <!--<router-view></router-view>-->
</template>

<script>
  import footer from './components/footer/footer.vue'
//  import hmoe from './components/home/home.vue'
  export default {
    name: 'app',
    components: {
      'epet-footer': footer
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    .footer
      position fixed
      z-index 100
      background-color :#fff
      width 100%
      height 55px
      left 0
      bottom 0


</style>
