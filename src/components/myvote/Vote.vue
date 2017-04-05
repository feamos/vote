<template>
  <div class="vote">
      <div class="vote-item">
        <img src="./finished.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon2.png" alt="投票" width="70" height="80">
        <p>
          <a href="#">查看</a>
          <a href="#">编辑</a>
          <a href="#">删除</a>
        </p>
      </div>
      <div class="vote-item">
        <img src="./finished.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon2.png" alt="投票" width="70" height="80">
        <p>
          <a href="#">查看</a>
          <a href="#">编辑</a>
          <a href="#">删除</a>
        </p>
      </div>
      <div class="vote-item">
        <img src="./ongoing.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon.png" alt="投票" width="70" height="80">
        <p>
          <a href="#" style="background:#d63747">查看</a>
          <a href="#" style="background:#d63747">编辑</a>
          <a href="#" style="background:#d63747">删除</a>
        </p>
      </div>
      <div class="vote-item">
        <img src="./ongoing.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon.png" alt="投票" width="70" height="80">
        <p>
          <a href="#" style="background:#d63747">查看</a>
          <a href="#" style="background:#d63747">编辑</a>
          <a href="#" style="background:#d63747">删除</a>
        </p>
      </div>
      <div class="vote-item">
        <img src="./finished.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon2.png" alt="投票" width="70" height="80">
        <p>
          <a href="#">查看</a>
          <a href="#">编辑</a>
          <a href="#">删除</a>
        </p>
      </div>
      <div class="vote-item">
        <img src="./ongoing.png" alt="" class="fr">
        <img class="vote-item-icon"src="./icon.png" alt="投票" width="70" height="80">
        <p>
          <a href="#" style="background:#d63747">查看</a>
          <a href="#" style="background:#d63747">编辑</a>
          <a href="#" style="background:#d63747">删除</a>
        </p>
      </div>
      <br style="clear:both">
  </div>
</template>

<script>
export default {
  name: 'vote',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fr{float: right;}
.vote{padding: 34px 45px 0 45px;background: url(./1.png);}
.vote-item{margin: 0 23px 20px 23px;width: 338px;height: 228px;border: 1px solid #979797;float:left;background-color: white;}
.vote-item-icon{margin: 28px 0 0 135px;height:80px;vertical-align: top;float: left;}
.vote-item p{padding: 39px 0 0 14px;clear: both;}
.vote-item a{margin-left: 48px;display: inline-block;float: left;border: 1px inset #9f9f9f;height: 30px;width: 46px;opacity: 0.9;
border-radius: 10px;box-shadow: -1px 2px 3px #9f9f9f;font:12px "PingFang SC";color:#ffffff;cursor: pointer;background: black;line-height: 26px;}

</style>
