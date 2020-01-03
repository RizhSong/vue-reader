<template>
  <div class="finding_content">
      <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
  
    <top class="top" title="发现" backgroundcolor="white" color="red" back="返回"></top>
    <div class="find_nav">

      <div class="icon_title" @click="toClassification">
        <svg class="icon icon_nav" aria-hidden="true">
          <use xlink:href="#iconfenlei22" />
        </svg>
        <p>分类</p>
      </div>
      <div class="icon_title" @click="goRanking">
        <svg class="icon icon_nav" aria-hidden="true">
          <use xlink:href="#iconpaihang8" />
        </svg>
        <p>排行</p>
      </div>
      <div class="icon_title" @click="gobooklist">
        <svg class="icon icon_nav" aria-hidden="true">
          <use xlink:href="#iconshu1" />
        </svg>
        <p>书单</p>
      </div>
    </div>
    <div class="find_main">
      <div class="icons_list">
        <svg class="icon icon_find" aria-hidden="true">
          <use xlink:href="#iconhuzhu" />
        </svg>
        <svg class="icon icon_find" aria-hidden="true">
          <use xlink:href="#iconmofabang" />
        </svg>
        <svg class="icon icon_find" aria-hidden="true">
          <use xlink:href="#iconpc-dongman" />
        </svg>
        <svg class="icon icon_find" aria-hidden="true">
          <use xlink:href="#iconzhuanshutuijian-" />
        </svg>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
       

          <a class="finding-btn" href="#">书荒互助</a>
          <div class="mui-navigate-right"></div>
        </li>
        <li class="mui-table-view-cell">
         
          <a class="finding-btn" href="#">神秘功能</a>
          <div class="mui-navigate-right"></div>
        </li>
        <li class="mui-table-view-cell">
          <a class="finding-btn" href="#">漫画专区</a>

          <div class="mui-navigate-right"></div>
        </li>
        <li class="mui-table-view-cell">
          <a class="finding-btn" href="#">专属推荐</a>

          <div class="mui-navigate-right"></div>
        </li>
      </ul>
    </div>
    <div class="find_footer"></div>
  </div>
  </div>
  </div>
</template>
<style lang="less" scoped>

.finding_content {
  height: 100%;
  
  position:relative;
  overflow: hidden;
   font-family:Arial, Helvetica, sans-serif;
}


// .finding_content {
//   height: 100%;
//   //background-color: white;
//   position:relative;
//   overflow: hidden;
// }

.find_nav {
  display: flex;
  background-color: white;
 
  padding-top: 50px;
  padding-bottom:10px;
 
}
.icon_title {
  flex: 1;
  display: flex;
  position: relative;
  margin-left: 15px;
}
.icon_nav {
  width: 0.5em;
  height: 0.5em;
}
.icon_title p {
  margin-top: 10px;
  margin-left: -2px;
}
.icon_title:after {
  content: "";
  position: absolute;
  height: 10px;

  border: 0.5px solid grey;

  right: -5px;
  top: 15px;
}
.find_main {
  display: flex;
  background-color: white;
  height: 510px;
}
.icons_list {
  margin-left: 10px;
  display: flex;
  flex-flow: column;

 
}
.find_main ul {
  flex: 2;
  
}
// ul li {
//   display: flex;
// }
.icon {
  width: 2em;
  height: 2em;

  fill: currentColor;
  overflow: hidden;
  margin: 5px 10px;
}
.icon_find {
  margin-top: 17px;
}
.mui-table-view-cell {
  width: 100%;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
}
a .finding-btn {
 
}
</style>
<script>

import mui from "@/../lib/mui/js/mui.min.js";
export default {
    data() {
        return {

        }
    },
    methods:{
toClassification(){
     this.$router.push("/classification");
},
goRanking(){
    this.$router.push("/ranking");
},
gobooklist(){
  this.$router.push("/booklist");
}
    },
    created(){

    },
    mounted(){
          mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    }
}
</script>