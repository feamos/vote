<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header-wrapper cls">
      <VHeader :login="login"></VHeader>
    </div>
    <!-- <slider> -->
      <router-view ></router-view>
    <!-- </slider> -->
    
  </div>
</template>

<script>
  import VHeader from './components/content/header/header'
  // import slider from './components/plugin/slider/slider'
  export default {
    name: 'app',
    data () {
      return {
        login: true
      }
    },
    components: {
      VHeader
      // slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/styls/util.styl"
  #app {
    max-width 1280px
    margin 0 auto
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .header-wrapper{
      /*margin-bottom 1px*/
      height 70px
    }
  }
</style>
