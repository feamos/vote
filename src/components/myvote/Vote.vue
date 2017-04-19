<template>
  <div class="vote">
      <div class="vote-item" v-for="n in 3">
        <img src="./img/ongoing.png" alt="" class="fr" >
        <img class="vote-item-icon"src="./img/icon.png" alt="投票" width="70" height="80">
        <p>
          <router-link href="#" to="/view" style="background:#d63747" tag="a">查看</router-link>
          <a href="#" style="background:#d63747">编辑</a>
          <a href="#" style="background:#d63747">删除</a>
        </p>
      </div>
      <div class="vote-item" v-for="(item,index) in items" v-if="index < item1">
        <img src="./img/finished.png" alt="" class="fr">
        <img class="vote-item-icon" src="./img/icon2.png" alt="投票" width="70" height="80">
        <p>
          <a href="#">查看</a>
          <a href="#">编辑</a>
          <a href="#">删除</a>
        </p>
      </div>
      <br style="clear:both">
      <span @click="item1 = items.length">产看更多</span>
      <span @click="item1 = 3">收起</span>
  </div>

</template>

<script>
export default {
  data () {
    return {
      item1: 3,
      items: [
        {
          id: 1,
          content: '12312'
        }, {
          id: 2,
          content: '12312'
        }, {
          id: 3,
          content: '12312'
        }, {
          id: 4,
          content: '12312'
        }, {
          id: 5,
          content: '12312'
        }, {
          id: 6,
          content: '12312'
        }, {
          id: 7,
          content: '12312'
        }, {
          id: 8,
          content: '12312'
        }, {
          id: 9,
          content: '12312'
        }, {
          id: 10,
          content: '12312'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fr{float: right;}
.vote{padding: 50px 40px 0 70px;}
.vote-item{margin: 0 23px 20px 23px;width: 338px;height: 228px;border: 1px solid #979797;float:left;background-color: white;}
.vote-item-icon{margin: 28px 0 0 135px;height:80px;vertical-align: top;float: left;}
.vote-item p{padding: 39px 0 0 14px;clear: both;}
.vote-item a{margin-left: 48px;display: inline-block;float: left;border: 1px inset #9f9f9f;height: 30px;width: 46px;opacity: 0.9;
border-radius: 10px;box-shadow: -1px 2px 3px #9f9f9f;font:12px "PingFang SC";color:#ffffff;cursor: pointer;background: black;line-height: 26px;}
.vote .footer{position: relative;}
.vote button {position: absolute;right: 40px;top: 0;color: red;border:0;background: #FFFFFF;cursor: pointer;outline: none;}
</style>
