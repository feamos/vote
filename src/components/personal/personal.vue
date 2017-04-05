<template>
<div class="personal">
	<p><span>账号：</span>XXXXXXXXXXXXXXXXXXXX</p>
	<p><span>手机号：</span>XXXXXXXXXXXXXXXXXXXX</p>
	<div class="pass">
		<p><span>密码：</span>XXXXXXXXXXXXXXXXXXXX<button>修改密码</button></p>	
	</div>
    <button>保存</button>
</div>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0
      }
    }
  }
</script>
<style scoped rel="stylesheet/stylus">
  .personal {height:570px;padding-top: 120px;font:16px "PingFang SC";color:#000000;background: url(./2.png);}
  .personal span {display:inline-block;width: 70px;text-align: left;}
  .personal p {margin-bottom: 30px;}
  .pass p {display: inline-block;padding-bottom: 20px;}
  .pass button {margin-left: 67px;display: inline-block;position: absolute;border: 0;padding: 2px 34px;background-color: #61aaee;color:#ffffff;border-radius: 10px;}
  .personal button {border: 0;padding: 2px 34px;background-color: #61aaee;color:#ffffff;border-radius: 10px;}
</style>
