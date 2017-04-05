<template>
  <div class="header">
    <div class="header-left fl">
      <div class="logo-text fr">VOTE</div>
      <img class="fl" src="./logo.png" height="58" width="68" alt="">
      
    </div>
      <Menu class="header_right fr"mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-if="login">
        <Menu-item name="slider">
          <span>首页</span>
          
        </Menu-item>
        <Menu-item name="vote">
          <span>我的投票</span>

      
        </Menu-item>
        <Menu-item name="personal">
          <span>个人中心</span>
      
        </Menu-item>
      </Menu>
      <Menu class="header_right fr"mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-else>
        <Menu-item name="login">
          <span>登录</span>
      
        </Menu-item>
        <Menu-item name="register">
          <span>注册</span>
        
        </Menu-item>
      </Menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'header',
    props: {
      login: {
        type: Boolean
      },
      yes: {
        type: Boolean
      }
    },
    data () {
      return {
        msg: 'this is the header',
        theme1: 'light'
      }
    },
    methods: {
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path)
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fl{float:left;}
  .fr{float:right;}
  .logo-text{margin-left: 5px;font-size: 48px;color:#FF0000;font-family: Helvetica;}
  .header_right span{color:#FF0000;font-size: 16px;}
</style>
