<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header-wrapper">
      <VHeader :login="login"></VHeader>
      <br class="clear">
    </div>

    <div>
      <router-view :class="index"></router-view>
    <slider></slider>
    </div>
  </div>
</template>

<script>
  import VHeader from './components/content/header/header'
  import slider from './components/plugin/slider/slider'
  export default {
    name: 'app',
    data () {
      return {
        login: false,
        index: 'render'
      }
    },
    components: {
      VHeader,
      slider
    }
  }
</script>

<style scoped  rel="stylesheet/stylus">
    @import "common/styls/util.styl"
  .clear{clear: both;}
  .render{position: absolute;left: 0;top: 72px;z-index: 99;}
  #app {
    position: relative;
    max-width:1280px;
    margin:0 auto;
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align:center;
    color:#2c3e50;
    .header-wrapper{
      /*margin-bottom 1px*/
      height:70px;
    }
  }
</style>
