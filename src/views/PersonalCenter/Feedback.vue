<template>
  <div>
    <div id="feedback" class="mui-page feedback">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">问题反馈</h1>
      </div>
      <div class="mui-page-content">
        <p>问题和意见</p>
        <div class="row mui-input-row">
          <textarea id="question" class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
        </div>
        <p>图片(选填,提供问题截图)</p>
        <div id="image-list" class="row image-list">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icontianjiatupian" />
          </svg>
        </div>
        <p>QQ/邮箱</p>
        <div class="mui-input-row">
          <input
            id="contact"
            type="text"
            class="mui-input-clear contact"
            placeholder="(选填,方便我们联系你 )"
          />
        </div>
        <button id="submit" type="button" class="mui-btn mui-btn-green">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "@/../lib/mui/js/mui.min.js";
export default {};
</script>
<style lang="less" scoped>
.icon {
  width: 65px;
  height: 65px;
  //vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-left: 20px;
  position: absolute;

  top: 10px;

  opacity: 0.4;
  cursor: pointer;
}
.image-list {
  background-color: white;

  text-align: left;
  position: relative;
  width: 100%;
  height: 85px;
  background-size: cover;
  padding: 10px 10px;
  overflow: hidden;
}
.mui-btn-green {
  width: 90%;
  height: 46px;
}
.mui-page-content p{
padding: 10px 15px 0;
text-align:left;

}
.feedback textarea {
    height: 100px;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}
</style>