<template>
  <div class="personal">
    <p><span>账号：</span><label for="">{{personal}}</label></p>
    <p><span>手机号：</span>{{mobile}}</p>
    <div class="pass">
      <p><span>密码：</span>**************<button @click="changePasswd = true">修改密码</button></p>
      <Modal
        title="修改密码"
        v-model="changePasswd"
        :mask-closable="false">
        <Form ref="formCustom" :model="formPasswd" :rules="ruleCustom" :label-width="80">
          <Form-item label="原始密码" prop="oldpasswd">
            <Input type="text" v-model="formPasswd.oldpasswd"></Input>
          </Form-item>
          <Form-item label="新密码" prop="newPasswd">
            <Input type="password" v-model="formPasswd.newPasswd"></Input>
          </Form-item>
          <Form-item label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formPasswd.passwdCheck"></Input>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="handleSubmit()">提交</Button>
            <Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
          </Form-item>
        </Form>
        <div slot="footer">
          <!--<Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>-->
        </div>
      </Modal>
    </div>
      <button>保存</button>
  </div>
</template>
<script>
  import API from '@/common/js/api/api'
//  import regx from '@/common/js/util/regx'
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formPasswd.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formPasswd.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formPasswd.newPasswd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        personal: localStorage.getItem('userName'),
        mobile: localStorage.getItem('mobile'),
        changePasswd: false,
        formPasswd: {
          oldpasswd: '',
          newPasswd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          newPasswd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        const ERR_OK = 0
        fetch(API.password, {
          method: 'PUT',
          headers: {
            'content-Type': 'application/json',
            'token': localStorage.getItem('token') || ''
          },
          body: JSON.stringify({
            oldPassword: this.formPasswd.oldpasswd,
            newPassword: this.formPasswd.newPasswd
          })
        }).then((res) => res.json())
          .then((json) => {
            console.log(json)
            if (json.code === ERR_OK) {
              console.log('密码修改成功，请重新登录！')
              localStorage.clear()
              this.$nextTick(() => {
                this.$router.push('login')
              })
            } else {
              console.log('密码修改失败！')
            }
          })
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
<style scoped rel="stylesheet/stylus">
  .personal {height:570px;padding-top: 120px;font:16px "PingFang SC";color:#000000;width: 100%;background: white;}
  .personal span {display:inline-block;width: 70px;text-align: left;}
  .personal p {margin-bottom: 30px;}
  .pass p {display: inline-block;padding-bottom: 20px;}
  .pass button {margin-left: 67px;display: inline-block;position: absolute;border: 0;padding: 2px 34px;background-color: #61aaee;color:#ffffff;border-radius: 10px;}
  .personal button {border: 0;padding: 2px 34px;background-color: #61aaee;color:#ffffff;border-radius: 10px;}
</style>

