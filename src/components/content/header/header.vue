<template>
  <div class="header">
    <div class="header-left fl">
      <div class="logo-text fr">VOTE</div>
      <img class="fl" src="./img/logo.png" height="58" width="68" alt="">

    </div>
    <Menu class="header_right fr" mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect"
          v-if="login">
      <Menu-item name="index">
        <span>首页</span>

      </Menu-item>
      <Menu-item name="vote">
        <span>我的投票</span>


      </Menu-item>
      <Menu-item name="personal">
        <span>个人中心</span>
      </Menu-item>
    </Menu>
    <Menu class="header_right fr" mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-else>
      <Menu-item name="login">
        <Icon type="ios-paper"></Icon>
        登录


      </Menu-item>
      <Menu-item name="register">
        <Icon type="ios-people"></Icon>
        注册


      </Menu-item>
    </Menu>
  </div>
</template>

<script type="text/ecmascript-6">
  import API from '@/common/js/api/api'
  export default {
    name: 'header',
//    props: {
//      login: {
//        type: Boolean
//      }
//    },
    data () {
      return {
        msg: 'this is the header',
        theme1: 'light',
        login: Boolean(localStorage.getItem('login') || false)
      }
    },
    created () {
      if (!window.localStorage.getItem('token')) {
        console.log('no token, plase login before vote')
      }
      this.$bus.on('hello', (msg) => {
        this.login = msg
        localStorage.setItem('login', this.login)
      })
      if (this.login !== true) {
        this.$nextTick(() => {
          this.$router.push('home')
        })
      }
    },
    mounted () {
      this.getStatus()
    },
    methods: {
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path)
        })
      },
      getStatus () {
        const ERR_OK = 0
        return fetch(API.me, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token') || ''
          }
        }).then((res) => res.json())
          .then((json) => {
            if (json.code !== ERR_OK) {
              localStorage.clear()
            }
          })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .logo-text {
    margin-left: 5px;
    font-size: 48px;
    color: #FF0000;
    font-family: 'Helvetica';
  }

  .header_right span {
    color: #FF0000;
    font-size: 16px;
  }
</style>
