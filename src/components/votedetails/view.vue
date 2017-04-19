<template>
    <div class="tovote">
        <div class="img-left">
            <img src="./img/tl.png"  alt="">
        </div>
        <div class="tovote-mid">
           <div class="mid-head">
              <p class="v-title">投票题目</p>
              <p>参与人数：<span>XX</span><label for="">单选</label></p>
           </div>
           <div class="mid-mid">
             <p>选项一</p>
             <div>
                 <div class="slider">
                     <p style="width:84%"></p>
                     <span>84%</span>
                 </div>
                 <label>票数：XXX</label>
             </div>
             <p>选项二</p>
             <div>
                 <div class="slider">
                     <p style="width:36%"></p>
                     <span>36%</span>
                 </div>
                 <label>票数：XXX</label>
             </div>
             <p>选项三</p>
             <div>
                 <div class="slider">
                     <p style="width:78%"></p>
                     <span>78%</span>
                 </div>
                 <label>票数：XXX</label>
             </div>
           </div>
           <div>
            <router-link to="/vote" tag="span" :class="footClass">返回</router-link>
           </div>
        </div>
        <div class="img-right">
            <img src="./img/tr.png" alt="">
        </div>
    </div>
    
</template>
<script>
  export default {
    data () {
      return {
        footClass: 'footer'
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
  .tovote-mid {
    float: left;
  }
  .mid-head {
    padding: 30px 30px 20px 80px;
  }
  .mid-head .v-title {
    display: inline-block;
    font-size: 20px;
    font-style: bold;
    text-indent: 250px;
  }
  .mid-head p label {
    display: inline-block;
    float: right;
    position: relative;
    left: 150px;
  }
  .mid-mid {
    padding-left: 50px;
  }
  .mid-mid > p {
    text-align: left;
    margin-top: 10px;
  }
  .mid-mid .slider {
    width: 357px;
    height: 33px;
    border: 1px solid #3d3d3d;
    position: relative;
    display: inline-block;
  }
  .mid-mid .slider span {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    line-height: 32px;
  }
  .mid-mid .slider p {
    background: red;
    height: 31px;
  }
  .mid-mid label {
    text-indent: 50px;
    display: inline-block;
    font-size: 16px;
    font-family: '黑体';
    font-style:bold;
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
  .img-left {
    float: left;
    border:0;
  }
  .img-right {
    float: right;
  }
</style>

