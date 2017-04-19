<!--<template>-->
<!--<div class="register">-->
<!--<Form ref="register" :model="register" :rules="ruleInline">-->
<!--<Form-item prop="user">-->
<!--<Input type="text" v-model="register.user" placeholder="Username">-->
<!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
<!--</Input>-->
<!--</Form-item>-->
<!--<Form-item prop="password">-->
<!--<Input type="password" v-model="register.password" placeholder="Password">-->
<!--<Icon type="ios-locked-outline" slot="prepend"></Icon>-->
<!--</Input>-->
<!--</Form-item>-->
<!--<Form-item prop="password">-->
<!--<Input type="password" v-model="register.confirm" placeholder="Confirm">-->
<!--<Icon type="ios-locked-outline" slot="prepend"></Icon>-->
<!--</Input>-->
<!--</Form-item>-->
<!--<Form-item>-->
<!--<Button type="primary" @click="handleSubmit('register')">登录</Button>-->
<!--</Form-item>-->
<!--</Form>-->

<!--</div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--data () {-->
<!--return {-->
<!--register: {-->
<!--user: '',-->
<!--password: '',-->
<!--confirm: ''-->
<!--},-->
<!--ruleInline: {-->
<!--user: [-->
<!--{required: true, message: '请填写用户名', trigger: 'blur'}-->
<!--],-->
<!--password: [-->
<!--{required: true, message: '请填写密码', trigger: 'blur'},-->
<!--{type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}-->
<!--],-->
<!--confirm: [-->
<!--{required: true, message: '请确认密码', trigger: 'blur'},-->
<!--{type: 'string', min: 6, message: '密码不一致', trigger: 'blur'}-->
<!--]-->
<!--}-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--handleSubmit (name) {-->
<!--this.$refs[name].validate((valid) => {-->
<!--if (valid) {-->
<!--this.$Message.success('提交成功!')-->
<!--} else {-->
<!--this.$Message.error('表单验证失败!')-->
<!--}-->
<!--})-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
  <div class="regi">
    <!--<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">-->
      <!--<Form-item prop="user">-->
        <!--<Input type="text" v-model="formCustom.user" placeholder="Username">-->
        <!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
        <!--</Input>-->
      <!--</Form-item>-->
      <!--<Form-item label="密码" prop="passwd">-->
        <!--<Input type="password" v-model="formCustom.passwd"></Input>-->
      <!--</Form-item>-->
      <!--<Form-item label="确认密码" prop="passwdCheck">-->
        <!--<Input type="password" v-model="formCustom.passwdCheck"></Input>-->
      <!--</Form-item>-->
      <!--<Form-item>-->
        <!--<Button type="primary" @click="handleSubmit('formCustom')">提交</Button>-->
        <!--<Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>-->
      <!--</Form-item>-->
    <!--</Form>-->

      <p><label for="">登录名：</label><input type="text"></p>
      <p><label for="">密码：</label><input type="password"></p>
      <p><label for="">确认密码：</label><input type="password"></p>
      <div class="phone">
      <label for="">手机号：</label><input type="text"><button>发送验证码</button>
      </div>
      <p><label for="">验证码：</label><input type="text"></p>
      <p class="select"><input type="checkbox"><span>我已阅读并接受</span><a href="#">voter服务条款</a></p>
      <div class="footer">
        <button>创建用户</button>
      </div>
      <p><a href="#">已有账户立即登录</a></p>
  </div>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        formCustom: {
          passwd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          passwd: [
            {validator: validatePass, trigger: 'blur'}
          ],
          passwdCheck: [
            {validator: validatePassCheck, trigger: 'blur'}
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
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .regi {
    padding:10px 10px;
    background: #ffffff;
    margin-top 100px;
    margin-left 40%;
  }
  .regi p {
    margin-top 10px;
  }
  .regi label {
    width:60px;
    -ms-text-align-last: right
    text-align: right;
    display: inline-block;
  }
  .regi input {
    width: 220px;
  }
  .phone {margin-top: 10px;margin-left: 2px;}
  .phone input{width: 150px;}
  .phone button{margin-left: 5px;height:20px;padding: 1px 5px;background:
    #5ca1e7;border:0;color:#ffffff;cursor: pointer;font-size 5px;}
  .select input {
    width: 15px;
    height: 15px;
    vertical-align middle;
  }
  .footer {
    margin-top 10px;
  }
  .footer button {
    display: inline-block;
    font-size: 12px;
    color: #fff;
    width: 100px;
    height: 31px;
    padding: 4px 0;
    border: 1px solid #579be5;
    border-radius: 8px;
    background: #579be5;
    cursor: pointer;
    position: relative;
    outline: none;
  }

</style>
