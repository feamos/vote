<template>
  <!--<div class="login">-->
     <!--<Form ref="formInline" :model="formInline" :rules="ruleInline">-->
      <!--<Form-item prop="user">-->
        <!--<Input type="text" v-model="formInline.user" placeholder="Username">-->
          <!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
        <!--</Input>-->
      <!--</Form-item>-->
      <!--<Form-item prop="password">-->
        <!--<Input type="password" v-model="formInline.password" placeholder="Password">-->
        <!--<Icon type="ios-locked-outline" slot="prepend"></Icon>-->
        <!--</Input>-->
      <!--</Form-item>-->
      <!--<Form-item>-->
        <!--<Button type="primary" @click="handleSubmit('formInline')">登录</Button>-->
      <!--</Form-item>-->
    <!--</Form>-->
  <!--</div>-->
  <div class="lg">
      <div >
        <img class="pic" src="./img/logo.png" height="33" width="40" alt="">
        <div class="lg-text">voter</div>
      </div>
      <fieldset>
        <legend>第三方账号登录</legend>
        <a href=""><img src="./img/qq.png" alt=""></a>
        <a href=""><img src="./img/weibo.png" alt=""></a>
        <a href=""><img src="./img/wechat.png" alt=""></a>
      </fieldset>
      <fieldset>
        <legend>使用手机号登录</legend>
        <div>
          <img class="pic-input" src="./img/phone.png" alt="">
          <input type="text" v-model="formInline.user" placeholder="Username">
        </div>
        <div>
          <img src="./img/pass.png" class="pic-input" alt="">
          <input type="password" v-model="formInline.password" placeholder="Password">
        </div>
      </fieldset>
      <div>
          <Button >登录</Button>
          <a href="">忘记密码？</a>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
//  import regx from '@/common/js/util/regx'
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写手机号码', trigger: 'blur'},
            {type: 'string', min: 11, message: '请填写正确的手机号码', trigger: 'blur'},
            {type: 'string', max: 11, message: '请填写正确的手机号码', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'},
            {type: 'string', max: 20, message: '密码长度不能大于20位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/stylus">
  .login{
    max-width: 50%;
    margin: 0 auto;
    margin-top: 100px;
    margin-left: 500px;
    background: #ffffff;
    width:350px;

  }
  .lg {background: #ffffff;margin-left: 40%;margin-top: 40px;}
  .lg .lg-text {font-size: 30px;display: inline-block;vertical-align: bottom;line-height: 30px;margin-left: 5px;color:#FF0000;font-family: Helvetica;}
  .lg .pic {display: inline-block;vertical-align: bottom;}
  .lg fieldset {color: #b1adb9;font-size: 12px;}
  .lg fieldset {border-left: none;border-right: none;border-bottom: none;}
  .lg fieldset img {width: 94px;height:36px;display: inline-block;}
  .lg input {width: 260px;height: 28px;border-radius: 8px;padding-left: 22px;border:1px solid #dbdbdb;margin-top: 30px;outline: none;}
  .lg .pic-input {width: 11px;height: 16px;position: relative;right:-20px;top:3px;}
  .footer-l {position: relative;}
  .footer-l a {font-size: 9px;text-decoration: none;color: #b8b7b8;position: absolute;right: 100px;top: -40px;}
</style>
