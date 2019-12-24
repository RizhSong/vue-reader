<template>
  <div class="login_content">
    <top class="top" title="登录" backgroundcolor="white" color="red" back="返回"></top>
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshouji3" />
        </svg>
        <div class="inputs">
          <form action class="form_group">
            <input type="text" placeholder="请输入手机号" :rule="rule"/>
            
            <input type="text" placeholder= "请输入密码" />
            <button type="button" class="mui-btn mui-btn-green">登录</button>
          </form>
        </div>
        <div class="another">其他登录方式</div>
        <div class="icon_2">
          <svg class="icon icon_qq" aria-hidden="true">
            <use xlink:href="#iconqq" />
          </svg>
          <svg class="icon icon_weixin" aria-hidden="true">
            <use xlink:href="#iconweixin" />
          </svg>
        </div>
        <div class="readed">
          <svg class="icon icon_true" aria-hidden="true">
            <use xlink:href="#iconfangkuang-xuanzhong1" />
          </svg>
          <div class="span_a" style="margin-left:10px">
            <span>已阅读并同意</span>
            <a href>《用户协议》</a>
            <span class="with">和</span>
            <a href>《用户隐私保护政策》</a>
          </div>
        </div>

        <div class="buttom">
          <a href='#'>随便看看</a>
          <!-- <i class="mui-icon mui-icon-arrowright"></i> -->
        </div>
       
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login_content {
  background-color: white;
  height:100%;
  position:relative;
  overflow: hidden;
  font-family:Arial, Helvetica, sans-serif;
}
.top{margin-top:10px;
}
.icon {
  width: 5em;
  height: 8em;
  //vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  padding-top:40px;
}
.form_group {
  margin-top: 35px;
}
.form_group input {
  width: 85%;
  height: 45px;
  opacity: 0.5;
  background-color: hsl(0, 10%, 94%);
  border-radius: 25px;
  border: none;
}
.mui-btn-green {
  width: 85%;
  height: 45px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 25px;

  background-color: #f1a3a3;
  border: 1px solid #f1a3a3;
  margin-top: 15px;
}
.another {
  margin-top: 80px;
  font-size: 12px;
  color: grey;
  letter-spacing: 5px;
  position: relative;
  opacity: 0.6;
}
.another:before {
  content: "";

  width: 70px;
  position: absolute;
  left: 50px;
  top: 10px;
  border: 0.5px solid #aaaaaa;
}
.another:after {
  content: "";

  width: 70px;
  position: absolute;
  right: 50px;
  top: 10px;
  border: 0.5px solid #aaaaaa;
}

.icon_2 {
  display: flex;
  margin-top: 20px;
}
.icon_qq {
  margin-right: -50px;
  width: 2em;
  height: 2em;
  flex: 1;
  opacity: 0.8;
}
.icon_weixin {
  margin-left: -50px;
  width: 2em;
  height: 2em;
  flex: 1;
  opacity: 0.8;
}
.readed {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.readed span,
a {
  font-size: 14px;
  color: #aaaaaa;
}
.icon_true {
  width: 1.2em;
  height: 1.2em;
  margin-left: 10px;
}
.readed a {
  margin-left: -10px;
  text-decoration: underline;
}
.with {
  margin-left: -10px;
}
.buttom {
  padding-top: 30px;
}
.buttom a,
i {
  color: #dd8d8d;
  font-size: 12px;
  letter-spacing:2px;
}

</style>
<script>
import mui from "@/../lib/mui/js/mui.min.js";
import FeedbackVue from './Feedback.vue';
import rule from '@/./rules/rules.js'

export default {
    data:function(){
        return {

        }
    },
    methods:{

    },
    created(){

    },
    mounted(){
         mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    }
};
</script>