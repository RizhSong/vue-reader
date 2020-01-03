<template>
  <div id="app">
    <div class="main">
      <!-- <div class="nav"> -->
        <!-- <mt-header v-if="flag" fixed >
          <a href="#" @click.prevent="goback"  slot="left">
            <mt-button icon="back">返回</mt-button>
          </a>
         
        </mt-header> -->
      <!-- </div> -->
      <transition :name="transitionName">
      <router-view></router-view>
    </transition>
      <div class="footer" v-if="flag">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="shuyjia">
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconshujia1" />
            </svg>
            <router-link to="/Bookcase" tag="span">书架</router-link>
          </mt-tab-item>
          <mt-tab-item id="书城">
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconshuchengxuanzhong" />
            </svg>
            <router-link to="/BookCity" tag="span">书城</router-link>
          </mt-tab-item>
          <!-- <mt-tab-item id>
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconleimupinleifenleileibie1" />
            </svg>
            <router-link to="/classification" tag="span">分类</router-link>
          </mt-tab-item> -->
       
          <mt-tab-item id="精选">
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconfaxian" />
            </svg>
            <router-link to="/Finding" tag="span">发现</router-link>
          </mt-tab-item>
             <mt-tab-item id="我的">
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconbusinesscard" />
            </svg>
            <router-link to="/PersonalCenter" tag="span">我的</router-link>
          </mt-tab-item>
          <!-- <mt-tab-item id="排行">
            <svg class="icon icon_buttom" aria-hidden="true">
              <use xlink:href="#iconpaihang" />
            </svg>
            <router-link to="/ranking" tag="span">排行</router-link>
          </mt-tab-item> -->
        </mt-tabbar>
      </div>
    </div>
  </div>
</template>

<style lang="less">
// * {
//   touch-action: none;
// }

* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
.main {
  height: 100%;
  // overflow: hidden;
  padding-bottom: 40px;
  // padding-top: 40px;
}
#app {
  // position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.footer {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 40px;
  z-index: 100;
}
.mint-header {
  background-color:hsl(0, 53%, 93%);
}

.mint-header-title {
  font-size: 18px;
  color: white;
  // background-color: red;
}
.mint-tabbar {
  padding: 5px;
}

.mint-tab-item-label {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.mint-tab-item-label span {
  font-size: 12px;
  color: grey;
  width: 100%;
  margin-top: 2px;
}
// .mint-searchbar-core {
//   margin-top: 10px;
//   width: 80%;
//   height: 25px;
// }

// .nav {
//   position: fixed;
//   top: 0px;
//   height: 40px;
//   width: 100%;
// }
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  
}
/*左边进入*/
.slide-left-enter {
  -webkit-transform: translate(100%);
  transform: translateX(100%);
}
/*左边离开*/
.slide-left-leave-to {
  -webkit-transform: translate(-100%);
  transform: translateX(-100%);
  position: absolute;
}


/*进入退出动画*/
.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.5s ease;
}
</style>
<script>
// import MintUI from "mint-ui";
// export default {};
// import "../lib/mui/css/mui.css"
// import "../lib/mui/css/iconfont.css"
// import "./font/iconfont.js"
export default {
  data() {
    return {
      selected: "BookCity",
        //selected: "home",
      //控制返回按钮是否需要显示
      flag: true,
      //动画的名字
      transitionName:"",
      //控制当前动画的方向(是否是返回)
      isBack:false,
    };
    // selected="home"
  },
    methods:{
      //回到上一页方法
     goback() {
      // debugger
      //回退到前一个页面
      this.isBack = true;
      this.$router.go(-1);
    }
  },
  //监听路由的变化
  watch:{
"$route.path"(newVal, oldVal){
  var routerArr =[ '/BookCity','/Bookcase','/PersonalCenter','/Finding','/'];
   if (routerArr.includes(newVal)) {
        this.flag = true;
      } else {
        this.flag = false;
      }
  
}

  },
   //控制动画的
    $route(to, from) {
      var routerArr = [ '/BookCity','/Bookcase','/ranking','/classification','/PersonalCenter','/Finding'];
      if(this.isBack == true){
        this.transitionName = "slide-right";
      }
      else{
        //当路由在四个tabarItem之间切换的时候不要动画
        if(routerArr.includes(to.path)){
          this.transitionName = "";
        }
        else{
          this.transitionName = "slide-left";
        }
      }
      this.isBack = false;
    },

}
</script>
