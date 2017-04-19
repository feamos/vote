<template>
    <div class="tovote">
        <div class="img_left">
            <img src="./img/tl.png"  alt="">
        </div>
        <div class="tovote_mid">
            <div class="as-head">
              <img src="./img/icon.png" alt="" width="50" height="55">
              <p class="title"><span>题目：</span>XXXXXXXXX</p>
              <span>单选</span>
            </div>
            <div class="as-mid">
              <p>
                <input type="radio" id="01"><label for="01">选项一</label>
              </p>
              <p>
                <input type="radio" id="02"><label for="02">选项二</label>
              </p>
              <p>
                <input type="radio" id="03"><label for="03">选项三</label>
              </p>
            </div>
            <div class="footer">
              <button :class="spanClass" @click="mo = true">确定</button>
              <Modal v-model="mo" :footable="false" :closable="false">
                <div slot="close"><span></span></div>
                <div class="comp">
                  <img src="./img/com.png" alt="" width="33px" height="33px">
                  <span>您已完成投票</span>
                </div>
                <div slot="footer" class="comp-footer">
                  <router-link to="/index" tag="button">返回首页</router-link>
                  <router-link to="/tovote" tag="button">发起投票</router-link>
                  <router-link to="/view" tag="button">查看详情</router-link>
                </div>
              </Modal>
            </div>
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
        spanClass: 'footer',
        mo: false
      }
    }
  }
</script>
<style scoped>
  img {
    padding: 0;
    margin: 0;
    float:left;
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
    width:760px;
    float: left;
  }
  .as-head {
    margin-left: 50px;
    margin-top: 20px;
  }
  .as-head p {
    text-align: left;
    text-indent: 35px;
    padding-top: 15px;
  }
  .as-head p span {
    font-size: 16px;
    font-style: bold;

  }
  .as-mid {
    padding-top: 50px;
  }
  .as-mid p {
    text-align: left;
    margin-top: 10px;
    margin-left: 200px;
  }
  .as-mid p label {
    display: inline-block;
    width:200px;
    text-align: left;
    padding-left: 10px;
    font-size: 16px;
  }
  .footer {
    padding-top: 50px;
  }
  .footer button {
    display: inline-block;
    font-size: 16px;
    color: #fff;
    width: 135px;
    height: 31px;
    padding: 4px 0;
    border: 1px solid #579be5;
    border-radius: 8px;
    background: #579be5;
    cursor: pointer;
    position: relative;
    left: -50px;
    outline: none;
  }
  .comp {
    padding:30px 30px 70px 30px;
    height: 33px;
  }
  .com img {
    vertical-align: middle;
  }
  .comp span {
    float: left;
    display:inline-block;
    text-align: left;
    line-height: 33px;
    padding-left: 20px;
    color: #d81e06;
  }
  .comp .comp-footer {
    padding-bottom: 100px;
  }
</style>
