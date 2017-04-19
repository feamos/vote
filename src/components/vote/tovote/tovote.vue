<template>
    <div class="tovote">
        <div class="img_left">
            <img src="./img/tl.png"  alt="">
        </div>
        <div class="tovote_mid">
            <div class="title">
                <img src="./img/vote-icon.png" height="76" width="87" alt="">
                <span>题目：xxxxx</span>
            </div>
            <p>
                <label for="">请输入投票码：</label><input type="text">
            </p>
            <router-link to="/answer" tag="label" :class="spanClass">确定</router-link>
        </div>
        <div class="img_right">
            <img src="./img/tr.png" alt="">
        </div>
    </div>
    
</template>
<script>
  export default {
    data () {
      return {
        spanClass: 'footer'
      }
    }
  }
</script>
<style scoped>
  img {
    padding: 0;margin: 0;      
  }
  .tovote {
    max-width: 100%;
    background: #ffffff;
  }
  .img_left {
    float: left;
    vertical-align: top;
    border:0;
  }
  .img_right {
    float: right;
  }
  .tovote_mid {
  	border: 1px solid #797979;
  	width:760px;
  	padding-top: 82px;
    float: left;
  }
  .title {
    border:1px solid black;
    display: inline-block;
    padding: 23px 103px 25px 103px;
  }
  .title span {
    display: block;
    font-size: 16px;
    margin-top: 20px;
  }
  .tovote_mid p {
    font-size: 16px;
    color: #363636;
    margin-top: 36px;
  }
  .tovote_mid input {
    height: 25px;
    border:1px solid;
  }
  .footer {
    border:1px solid #000;
    border-radius: 5px;
    display: inline-block;
    margin-top: 89px;
    font-size: 16px;
    margin-bottom: 155px;
    cursor: pointer;
    color: #fff;
    width: 135px;
    height: 31px;
    padding: 4px 0;
    border: 1px solid #579be5;
    background: #579be5;
    border-radius: 8px;
  }
</style>
