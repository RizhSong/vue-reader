<template>
  <div class="personal_content">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        
        <div class="header">
          <!-- 1-头像账号模块 -->
          <svg class="icon shezhi1" aria-hidden="true" @click="goSetting">
            <use xlink:href="#iconshezhi1" />
          </svg>
          <div class="personalMessage">
            <!-- 头像 -->
            <div class="head_sculpture">
              <img src="@/images/02.jpg" />
            </div>

            <!-- 点击登录 -->

            <div class="click_login" @click="goLogin">点击登录</div>

            <i class="mui-icon mui-icon-arrowright" @click="goLogin"></i>
          </div>

          <!-- 2.登陆模块 -->

          <div class="login" @click="goLogin">
            <div class="login_p">
              点击登录
              <p
                style="font-size:12px;color:gray;margin-top:5px;padding-bottom:10px;"
              >更多权益、福利、登陆即可体验</p>
            </div>
            <div class="Login_immediately">立即登录</div>
          </div>
        </div>

        <!--3广告图标模块 -->
        <div class="banner">
          <div class="free_banner left">
            <p>免广告</p>
            <p class="p2">无广告畅读</p>
          </div>
          <svg class="icon icon_banner" aria-hidden="true">
            <use xlink:href="#iconicon-test" />
          </svg>
          <div class="reading left">
            <p>朗读功能</p>
            <p class="p2">好书读给你听</p>
          </div>
          <svg class="icon icon_banner" aria-hidden="true">
            <use xlink:href="#icondajiaduzaidu-langdu" />
          </svg>
          <div class="Offline_Caching left">
            <p>离线缓存</p>
            <p class="p2">没网也能看</p>
          </div>
          <svg class="icon icon_banner" aria-hidden="true">
            <use xlink:href="#iconlixianhuancun" />
          </svg>
        </div>
        <!--4 列表模块 -->

        <div class="mine">
          <div class="mine_income mine_list">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconwode" />
            </svg>

            <!-- <p>我的收入</p> -->
            <a class="feedback-btn" href="#feedback">我的收入</a>
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>

          <div class="mine_second">
            <div class="Invite_friends mine_list">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconhongbao1" />
              </svg>

              <!-- <p>邀请好友赚现金</p> -->
              <a class="feedback-btn" href="#feedback">邀请好友赚现金</a>
              <i class="mui-icon mui-icon-arrowright"></i>
            </div>

            <div class="task_center mine_list">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconlihe" />
              </svg>

              <!-- <p>任务中心</p> -->
              <a class="feedback-btn" href="#feedback">任务中心</a>
              <a style="margin-right:8px;font-size:14px;color:grey">超多现金奖励</a>
              <i class="mui-icon mui-icon-arrowright"></i>
            </div>

            <div class="reading_history mine_list">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconpaibandaka" />
              </svg>

              <!-- <p>阅读历史</p> -->
              <a class="feedback-btn" href="#feedback">阅读历史</a>
              <i class="mui-icon mui-icon-arrowright"></i>
            </div>

            <div class="Youth_model mine_list">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icondunpaisuo-tianchong" />
              </svg>
              <!-- <p>青少年模式</p> -->
              <a class="feedback-btn" href="#feedback">青少年模式</a>
              <i class="mui-icon mui-icon-arrowright"></i>
            </div>
          </div>

          <div class="mine_title mine_list">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconTwoChatBubbles" />
            </svg>

            <!-- <p>我的话题</p> -->
            <a class="feedback-btn" href="#feedback">我的话题</a>
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>

          <div class="mine_booklist mine_list">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshuqian1" />
            </svg>

            <!-- <p>我的书单</p> -->
            <a class="feedback-btn" href="#feedback">我的书单</a>
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>

          <div class="feedback mine_list">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongantanhao" />
            </svg>

            <!-- <p>意见反馈</p> -->
            <a class="feedback-btn" href="#feedback" @click="feedback">问题反馈</a>
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>

        <div class="gap"></div>
      </div>
    </div>
  </div>
</template>
<script>

import mui from "@/../lib/mui/js/mui.min.js";

export default {
  data: function() {
    return {};
  },
  methods: {
    goSetting() {
      this.$router.push("/Setting");
    },
    goLogin() {
      this.$router.push("/Login");
    },
    feedback() {
      this.$router.push("/Feedback");
    }
  },
  created() {},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="less" scoped>
.personal_content {
  position: relative;
  overflow: hidden;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  background-color: palevioletred;
 // position:fixed;
  height:auto;
  
}

.shezhi1 {
  position: absolute;
  right: 20px;
  top: 10px;
  color: white;
}
.personalMessage {
  display: flex;
  flex-flow: row;
  color: white;
  align-items: center;
}

.head_sculpture {
  border: 1px solid gold;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 30px 20px 20px 20px;
  overflow: hidden;
}
.head_sculpture img {
  width: 60px;
  height: 85px;
  margin-top:-18px;
}
.click_login {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;

  flex: 2;
  text-align: left;
}
.mui-icon {
  padding-right: 20px;
  color: #dddddd;
}

.login {
  width: 80%;
  height: 60px;
  border: 1px solid whitesmoke;
  display: flex;
  flex-flow: row;
  background: linear-gradient(to right, #dddddd, #888888);
  font-size: 14px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  border-bottom: none;

  align-items: center;
  .login_p {
    flex: 2;
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    font-size: 16px;
  }
  .Login_immediately {
    flex: 1;

    height: 30px;
    font-size: 14px;
    color: white;
    background: linear-gradient(to right, #778899, #708090);
    border-radius: 20px;
    line-height: 30px;
    margin-right: 20px;
  }
}

.banner {
  display: flex;
  justify-content: space-around;

  height: 80px;
  background-color: white;
  //position: fixed;

  .left {
    text-align: left;
    padding-top: 5px;
    padding-left: 10px;
    border: 1px solid gainsboro;
    box-shadow: 2px 3px 3px 0px gray;
    margin-top: 10px;

    width: 115px;
    height: 60px;
    border-radius: 5px;
    font-size: 16px;
  }
  .left p {
    color: black;
  }
  .left > .p2 {
    font-size: 12px;
    color: grey;
    margin-top: -5px;
  }
}
.mine {
  margin-top: 6px;
  font-size: 16px;
  //   position: relative;
  // overflow: hidden;
  // height: 100%;
}
.mine_income {
  background-color: white;

  margin-bottom: 6px;
}
.mine_list {
  display: flex;
  align-items: center;
  padding-top: 10px;
  background-color: white;
  font-size: 16px;
}
.feedback-btn {
  flex: 2;
  text-align: left;
  font-size: 16px;
  color: black;
}
// .mine_list p {
//   flex: 2;
//   text-align: left;
//   font-size: 16px;
//   color: black;
// }
.mine_second {
  margin-bottom: 6px;
}
.gap {
  margin-top: 6px;
  background-color: white;
  height: 300px;
  width: 100%;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  //vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 5px 10px;
}
.icon_banner {
  margin-left: -35px;
  margin-top: 35px;
  width: 2em;
  height: 2em;
  overflow: hidden;
}
.mui-table-view-cell {
  width: 100%;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
}
</style>